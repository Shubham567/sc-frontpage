import React from 'react';
import PropTypes from 'prop-types';
import TwinCards from "../../TwinCards";
import Button from "../../Button";
import clsx from "clsx";

const SectionWithCardsAndButtons = ({topCardHeading,topCardContent,overlayCardContent,mainHeading,mainContent,mainControls,reverse,...props}) => {
  return (
    <div className={clsx("flex my-10 h-1/4 p-3 w-full justify-evenly items-center", {"flex-row-reverse" : reverse})} style={{minHeight: 400}}>
      <TwinCards reverse={reverse} upperCardContent={
        <div className="flex flex-col gap-4">
          <div className="flex text-secondary">
            {topCardHeading}
          </div>
          <div className="flex text-dark">
            {topCardContent}
          </div>
        </div>
      } lowerCardContent={
        <p className="text-sm">
          {overlayCardContent}
        </p>
      }/>
      <div className="flex flex-col gap-4">
        <div className="flex">
          <h3 className="text-3xl text-primary font-semibold">
            {mainHeading}
          </h3>
        </div>
        <div className="flex">{
          mainContent
        } </div>
        <div className="flex gap-3">
          {
            mainControls
          }
        </div>
      </div>
    </div>
  );
};

SectionWithCardsAndButtons.propTypes = {
  topCardHeading: PropTypes.any,
  topCardContent: PropTypes.any,
  overlayCardContent: PropTypes.any,
  mainHeading: PropTypes.any,
  mainContent: PropTypes.any,
  mainControls : PropTypes.any,
};

export default SectionWithCardsAndButtons;
