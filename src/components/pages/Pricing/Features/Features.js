import React from 'react';
import SingleFeature from "./SingleFeature";

const Feature = () => {
  return (
    <div className="mt-24 mb-24">
      <h1 className="text-center font-normal text-5xl m-4 text-primary mb-12">Features</h1>
      <div className="w-full flex justify-center items-center">
        <div className="w-full md:w-5/6 flex justify-center md:justify-between flex-wrap items-center">
          {
            Object.keys([...Array(50)]).map((item, i) => (
              <SingleFeature key={i} style={(i%2 === 0) ? "bg-gray-bg" : "bg-gray-bg"} featureName="Lorem Ipsum" />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Feature;
