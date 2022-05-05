import React from 'react';
import Modal from "../../Modal";
import Button from "../../Button";
import {useDispatch, useSelector} from "react-redux";
import {actionSetHomeDemoRequestForm} from "../../../store/reducers/homeReducer/homeReducerActions";

const DemoForm = () => {

  const demoOpen = useSelector(state => state.homeReducer.demoFormOpen)

  const dispatch = useDispatch();
  const closeModal = () => dispatch(actionSetHomeDemoRequestForm(false));

  return (
    <div>
      <Modal adjustable title="Request a Demo" open={demoOpen} onClose={closeModal}>
        <div className="flex flex-col">
          <div className="w-full">
            <form className="bg-white rounded px-6 pt-2  mb-4">
              <div className="mb-4">
                <label className="block text-primary text-sm font-bold mb-2" htmlFor="username">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text" placeholder="Username" />
              </div>
              <div className="mb-4">
                <label className="block text-primary text-sm font-bold mb-2" htmlFor="username">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text" placeholder="Email"/>
              </div>
              <div className="">
                <label className="block text-primary text-sm font-bold mb-2" htmlFor="password">
                  Mobile Number
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="tel" placeholder="Mobile Number" />
              </div>
              <div className="mb-6">
                <label className="block text-primary text-sm font-bold mb-2" htmlFor="password">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="tel" placeholder="Enter a message/request" />
                <p className="text-red-500 text-xs italic">We ll contact you soon</p>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <Button variant="outlined"
                        color="primary"
                        onClick={closeModal}

                >
                 Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit">
                  Place Demo Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DemoForm;
