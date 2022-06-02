import React from 'react';
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="flex -mt-52 items-center justify-center w-full z-10">
      <div className="w-full xl:w-11/12 flex justify-center items-center flex-wrap">
        <PricingCard/>
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
};

export default Pricing;
