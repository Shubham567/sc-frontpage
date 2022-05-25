import React from 'react';
import BenefitsCard from "./BenefitsCard/BenefitsCard";
import Image from "next/image";

const Benefits = ({benefitsData}) => {
  return (
    <div className="w-full p-12 bg-dark">
       <div className="flex flex-wrap justify-between">
         {
           benefitsData?.map((item) => (<BenefitsCard key={item.id} image={item.image} description={item.description} />))
         }
       </div>
    </div>
  );
};

export default Benefits;
