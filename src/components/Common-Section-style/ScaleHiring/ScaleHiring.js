import React from 'react';
import Button from "../../Button";
import EffectAppearOnView from "../../Effects/EffectAppearOnView";
import PropTypes from "prop-types";

const ScaleHiring = ({title, requestDemo, calculateROI}) => {

  return (
    <EffectAppearOnView>
      <div className="bg-orange-light flex-col xl:flex-row pt-16 pb-16 pl-8 pr-8 xl:p-24 flex justify-between items-center">
        <div className="w-full xl:w-3/5">
          <h1 className="text-dark font-normal text-4xl xl:text-5xl tracking-wide">{title && title}</h1>
          <div className="w-3/5 border-b-2 mt-4  border-bottom-dark mb-4"></div>
          <div className="w-full border-b-2 mt-8 border-bottom-dark mb-4"></div>
        </div>
        <div className="w-full mt-4 xl:mt-0 xl:w-1/3 flex items-center justify-center flex-wrap md:justify-between">
          <div className="mt-4">
            <Button onClick={requestDemo} rounded className="bg-secondary text-xl hover:bg-orange ease-in-out duration-300 font-medium pl-8 pr-8 pt-2 pb-2 rounded-full text-dark">Request Demo</Button>
          </div>
          <div className="mt-4">
            <Button onClick={calculateROI} rounded className="text-xl font-medium hover:bg-yellow ease-in-out duration-300 pl-8 pr-8 pt-2 pb-2 rounded-full text-dark border-2 border-dark">Calculate ROI</Button>
          </div>
        </div>
      </div>
    </EffectAppearOnView>
  );
};

export default ScaleHiring;

ScaleHiring.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  requestDemo: PropTypes.func,
  calculateROI: PropTypes.func
}
