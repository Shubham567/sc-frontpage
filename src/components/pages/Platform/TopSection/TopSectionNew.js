import React from 'react';
import Image from "next/image";
import PropTypes from "prop-types";

const LeftSide = ({heading, description}) => {
  return (<div className="h-full w-full md:w-1/2 flex justify-center items-center">
    <div style={{borderLeft: "30px solid #FFE459"}} className="pt-12 md:ml-8 pb-12 pl-4 md:pl-12 pr-2 border-l-yellow ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal text-primary">
        {
          heading?.split(" ").map((item, i) => (
            (i < heading?.split(" ")?.length - 1) ? item + " " : <span className="font-bold">{item + " "}</span>
          ))
        }
        {/*Customizable <span className="font-bold">assessments</span>*/}
      </h1>
      <p className="mt-6 text-primary font-normal text-lg sm:text-xl md:text-2xl">
        {description}
      </p>
    </div>
  </div>)
};

const RightSide = (props) => {
  return (<div className="h-screen w-full md:w-1/2">
    <div className="relative">
      <div className="absolute w-1/3 -z-20 -translate-x-1/2 left-1/2 h-screen bg-yellow">

      </div>
      <div className="absolute mt-8 sm:mt-6 md:mt-4 xl:mt-2 -z-10 right-0 top-1/2 -translate-y-1/5">
        <Image src="/images/platform/hand-and-pen.png" height="834px" width="890px"/>
      </div>
    </div>
  </div>)
}

const TopSectionNew = (props) => {
  return (
    <div className="h-screen flex flex-col-reverse md:flex-row items-center justify-center">
      <LeftSide {...props}/>
      <RightSide/>
    </div>
  );
};

export default TopSectionNew;

LeftSide.propTypes = {
  heading: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
}

TopSectionNew.propTypes = {
  heading: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
}

