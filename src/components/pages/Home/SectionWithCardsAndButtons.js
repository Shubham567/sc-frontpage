import React from 'react';
import PropTypes from 'prop-types';
import TwinCards from "../../TwinCards";
import Button from "../../Button";
import clsx from "clsx";

const SectionWithCardsAndButtons = ({reverse,...props}) => {
  return (
    <div className={clsx("flex my-10 h-1/4 p-3 w-full justify-evenly items-center", {"flex-row-reverse" : reverse})} style={{minHeight: 400}}>
      <TwinCards upperCardContent={
        <div className="flex flex-col gap-4">
          <div className="flex text-secondary">
            Header of card top
          </div>
          <div className="flex text-dark">
            Some of the best option is skillcounty
          </div>
        </div>
      } lowerCardContent={
        <p className="text-sm">
          what i said above is true
        </p>
      }/>
      <div className="flex flex-col gap-4">
        <div className="flex">
          <h3 className="text-3xl text-primary font-semibold">
            Live Pair
          </h3>
        </div>
        <div className="flex">This is point to support Live Pair code. </div>
        <div className="flex gap-3">
          <Button className="rounded-full" outlined>
            Request Demo
          </Button>
          <Button className="rounded-full" >
            Get Started
          </Button>

        </div>
      </div>
    </div>
  );
};

SectionWithCardsAndButtons.propTypes = {

};

export default SectionWithCardsAndButtons;
