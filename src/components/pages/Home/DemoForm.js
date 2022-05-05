import React from 'react';
import Modal from "../../Modal";
import Button from "../../Button";

const DemoForm = () => {
  return (
    <div>
      <Modal title="Request a Demo" open="true">
        <div className="flex flex-col">
          <div className="w-full">
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
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
