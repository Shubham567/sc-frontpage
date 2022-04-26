import React from 'react';
import LinedItemsSteps from "./LinedItemsSteps";

const HowToUse = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-5" style={{minHeight: 300}}>
      <div className="flex">
        <h1 className="text-3xl font-semibold text-primary">
          How to use SkillCounty?
        </h1>
      </div>
      <div className="flex">
        <p className="text-dark">
          Learn to use SkillCounty in 6 easy steps
        </p>
      </div>
      <div className="flex">
        <LinedItemsSteps />
      </div>

    </div>
  );
};

export default HowToUse;
