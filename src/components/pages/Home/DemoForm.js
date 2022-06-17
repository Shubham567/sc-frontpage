import React, {useEffect, useRef, useState} from 'react';
import Modal from "../../Modal";
import Button from "../../Button";
import {useDispatch, useSelector} from "react-redux";
import {actionSetHomeDemoRequestForm} from "../../../store/reducers/homeReducer/homeReducerActions";
import axios from "axios";
import clsx from "clsx";

const DemoForm = () => {

  const demoOpen = useSelector(state => state.homeReducer.demoFormOpen)

  const dispatch = useDispatch();
  const closeModal = () => dispatch(actionSetHomeDemoRequestForm(false));

  const timerRef = useRef(null);


  const [sendingState, setSendingState] = useState({status: "not-sent", message: "", color: "dark",});

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target["name"].value,
      email: e.target["email"].value,
      message: e.target["message"].value,
      mobileNumber: e.target["mobileNumber"].value,
      demo: true
    }

    setSendingState(prev => ({...prev, status: "sending"}));
    axios.post("https://api.skillcounty.com/api/v1/forms?type=skillcounty-homeDemo", data).then(() => {
      setSendingState({status: "sent", message: "Request sent. ", color: "green"});
      timerRef.current = setTimeout(() => {
        closeModal?.();
      }, 1000)
    }).catch((e) => {
      setSendingState({status: "sent", message: "Failed to send. " + e.message , color: "red"});
    })

  }

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    }
  }, []);

  return (
    <div>
      <Modal adjustable title="Request a Demo" open={demoOpen} onClose={closeModal}>
        <div className="flex flex-col">
          <div className="w-full">
            <form className="bg-white rounded px-6 pt-2  mb-4" onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-primary text-sm mb-2" htmlFor="demoFormName">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text" placeholder="Username" name="name" id="demoFormName" required/>
              </div>
              <div className="mb-4">
                <label className="block text-primary text-sm mb-2" htmlFor="demoFormEmail">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email" placeholder="Email" name="email" id="demoFormEmail" required/>
              </div>
              <div className="">
                <label className="block text-primary text-sm mb-2" htmlFor="demoFormMobileNumber">
                  Mobile Number
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="tel" placeholder="Mobile Number" name="mobileNumber" id="demoFormMobileNumber" required/>
              </div>
              <div className="mb-6">
                <label className="block text-primary text-sm mb-2" htmlFor="demoFormMsg">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="tel" placeholder="Enter a message / request" name="message" id="demoFormMsg" />
                <p className="text-red-500 text-xs italic">We ll contact you soon</p>
              </div>
              <div className="flex items-center gap-2 justify-end">
                { sendingState.status !== "not-sent" && <Button variant="outlined"
                         color="primary"
                         onClick={closeModal}
                         type="reset"
                >
                  Cancel
                </Button>}
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={sendingState.status === "sending"}
                >
                  {sendingState.status === "sending" ?  "Sending..." : "Place Demo Request"}
                </Button>
              </div>
              <div className={clsx(`text-${sendingState.color}`, "flex justify-end")}>
                {sendingState.message}
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DemoForm;
