import React, {useState} from 'react';
import { IoToggle } from "react-icons/io5";

const TopSection = () => {
  return (
    <div className="w-full h-full p-4 flex justify-center items-center">
      <div className="text-4xl -mt-8 md:text-6xl text-primary font-normal text-center tracking-normal leading-snug">
        Build the best teams with the <br/> <span className="font-bold">most affordable</span> solution
        <p className="text-lg sm:text-2xl mt-8 text-center">
          <a href="/subscribe/start-trial" className="underline">SignUp</a> for a free 14 days trial. No credit card required, <br/> No annual subscription (Cancel anytime).
        </p>
        <div className="flex items-center justify-center mt-8">
          <p className="mr-4 text-sm sm:text-base font-normal">Yearly</p>
          <IoToggle/>
          <p className="ml-4 text-sm sm:text-base font-normal">Monthly</p>
        </div>
      </div>

    </div>
  );
};

export default TopSection;
