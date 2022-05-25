import React from 'react';
import FeaturesCard from "./FeaturesCard";
import Image from "next/image";

const Features = ({featureData}) => {
  return (
    <div>
      <div className="ml-4 mt-8 mr-4 mb-8 xl:ml-28 xl:mr-28 xl:mt-28 xl:mb-16">
        {
          featureData.map((item) => (<FeaturesCard key={item.id} {...item} />))
        }
      </div>
    </div>
  );
};

export default Features;

