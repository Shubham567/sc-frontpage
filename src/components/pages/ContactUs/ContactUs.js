import React, {useState} from 'react';
import Image from "next/image";
import hiMonkey from "/assets/hi-monkey.png";
import {IoLocationSharp} from "react-icons/io5";
import {IoCallSharp} from "react-icons/io5";
import {IoMail} from "react-icons/io5";
import {AiOutlineUser} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {AiOutlineMessage} from "react-icons/ai";
import {BsTelephone} from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";

const details = {name: "", mobileNumber: "", email: "", message: ""};

const ContactUs = () => {
  const [userDetails, setUserDetails] = useState(details);
  const [loading, setLoading] = useState(false);

  const submitContactDetailsHandler = (e) => {
    e.preventDefault();
    console.log(userDetails);
    setLoading(true);
    axios.post('https://api.skillcounty.com/api/v1/forms?type=skillcounty-contact-us', userDetails).then((res) => {
      toast.success("Your details are submitted successfully");
      setUserDetails(details);
      setLoading(false);
    }).catch((err) => {
      toast.error("Something went wrong, please try after some time");
      setLoading(false);
    })
  }

  return (
    <div className="min-h-screen">
      {/*<ToastContainer />*/}
      <div
        style={{background: "linear-gradient(90deg, rgba(242,135,5,0.8) 20%, rgba(241,180,65,1) 51%, rgba(255,228,89,1) 100%)"}}
        className="w-full bg-orange flex items-center justify-center">
        <div className="min-w-min pt-24 pb-24 ml-4 mr-4 max-w-md">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-primary">Don{`'`}t be a stranger
            Just say Hello</h1>
          <p className="mt-6 text-base text-primary text-center">Thank you for your interest in our services. Please
            fill out the form below or e-mail us at <a href="mailto:contact@skillcounty.com"
                                                       className="text-primary underline decoration-1">contact@skillcounty.com</a>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-shrink justify-center -mt-20 z-10">
        <div style={{boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.2)"}}
             className="bg-white flex items-center flex-col md:flex-row w-11/12 p-6 xl:w-7/12 md:w-4/5">
          <div className="w-full md:w-1/2 h-full">
            <div className="flex relative p-4 items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-yellow">

              </div>
              <div className="flex absolute -mt-4 item-center justify-center">
                <Image src={hiMonkey} alt="Hi Monkey Image" width="180px" height="180px"/>
              </div>
            </div>
            <div className="sm:pr-8 sm:pl-8">
              <div className="flex mt-4 items-center">
                <div
                  className="p-2 mr-4 w-12 h-12 rounded-full border-yellow flex items-center justify-center border-2">
                  <IoLocationSharp className="text-3xl text-orange"/>
                </div>
                <div className="text-base text-justify text-dark">
                  S759 Labs Technology LLP,
                  C-5, Grafikon Paradise
                  NIBM Road,
                  Khondwa Bk,
                  Pune - 411048
                  Maharashtra.
                </div>
              </div>
              <div className="flex mt-4 items-center">
                <div
                  className="p-1 mr-4 w-12 h-12 rounded-full border-yellow flex items-center justify-center border-2">
                  <IoCallSharp className="text-2xl text-orange"/>
                </div>
                <div className="text-base text-dark">
                  +91 93216 28535
                </div>
              </div>
              <div className="flex mt-4 items-center">
                <div
                  className="p-1 mr-4 w-12 h-12 rounded-full border-yellow flex items-center justify-center border-2">
                  <IoMail className="text-2xl text-orange"/>
                </div>
                <div className="text-base text-dark">
                  contact@skillcounty.com
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full mt-8 pt-8 md:pt-0 md:mt-0 md:w-1/2 md:pl-4 border-t-2 md:border-t-white border-t-gray-extra-light md:border-l-2 md:border-l-gray-extra-light h-full">
            <form onSubmit={submitContactDetailsHandler} className="sm:pl-4 sm:pr-4 pt-4 w-full h-full">
              <div className="border-2 mb-4 border-gray-extra-light rounded-md flex items-center bg-gray-hard-light">
                <AiOutlineUser className="text-3xl text-primary m-2 mr-0"/>
                <input value={userDetails.name} onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                       placeholder="Full Name *" required
                       className="bg-gray-hard-light text-base outline-none p-2 w-full" type="text"/>
              </div>
              <div className="border-2 mb-4 border-gray-extra-light rounded-md flex items-center bg-gray-hard-light">
                <BsTelephone className="text-3xl text-primary m-2 mr-0"/>
                <input value={userDetails.mobileNumber}
                       onChange={(e) => setUserDetails({...userDetails, mobileNumber: e.target.value})}
                       placeholder="Phone *" required className="bg-gray-hard-light text-base outline-none p-2 w-full"
                       type="phone"/>
              </div>
              <div className="border-2 mb-4 border-gray-extra-light rounded-md flex items-center bg-gray-hard-light">
                <AiOutlineMail className="text-3xl text-primary m-2 mr-0"/>
                <input value={userDetails.email}
                       onChange={(e) => setUserDetails({...userDetails, email: e.target.value})} placeholder="Email *"
                       required className="bg-gray-hard-light text-base outline-none p-2 w-full" type="email"/>
              </div>
              <div
                className="border-2 mb-4 border-gray-extra-light rounded-md flex items-flex-start bg-gray-hard-light">
                <AiOutlineMessage className="text-3xl text-primary m-2 mr-0"/>
                <textarea value={userDetails.message}
                          onChange={(e) => setUserDetails({...userDetails, message: e.target.value})}
                          placeholder="Message" style={{resize: "none"}}
                          className="bg-gray-hard-light text-base outline-none p-2 w-full" rows={3}/>
              </div>

              <div className="mb-4 rounded-md flex items-center flex-col">
                <button type="submit" disabled={loading}
                        className="w-full disabled:opacity-40 h-full p-2 rounded-md bg-primary text-white hover:bg-dark">{loading ? "Please Wait..." : "Submit"}
                </button>
                <p className="text-xs text-center mt-1 font-normal text-gray-dark">SkillCounty does not sell, share, or
                  trade customer information. Your privacy is very important to us.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
