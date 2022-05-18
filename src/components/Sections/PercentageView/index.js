import React from 'react';
// import EffectIncrementUpto from "../../Effects/EffectIncrementUpto";
import dynamic from "next/dynamic";

const EffectIncrement = dynamic(() => import('../../Effects/EffectIncrementUpto'), {ssr: false})

const PercentageView = () => {
  return (
    <div className={"tracking-wide bg-yellow w-full pt-12 pb-12 flex flex-wrap justify-evenly items-center"}>
      <div  className={"m-8"}>
        <p className={"font-bold text-6xl text-center"}>90%</p>
        <p className="text-center">Decrease in time to hire</p>
      </div>
      <div  className={"m-8"}>
        <p className={"font-bold text-6xl text-center"}>90%</p>
        <p className="text-center">Increase in new hire
          diversity</p>
      </div>
      <div className={"m-8"}>
        <p className={"font-bold text-6xl text-center"}>
          <EffectIncrement targetValue={80} wrapperComponent={"h2"} > %</EffectIncrement>
        </p>
        <p className="text-center">Return on investment</p>
      </div>
    </div>
  );
};

export default PercentageView;
