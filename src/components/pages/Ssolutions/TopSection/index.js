import React from 'react';
import PropTypes from "prop-types";
import Image from "next/image";

const TopSectionForSolution = ({heading, description}) => {
  return (
    <div className="md:h-screen flex justify-center items-center">
      <div className="md:h-80 mt-36 mb-24 md:mt-0 md:mb-0 xl:h-72 flex items-center flex-col-reverse md:flex-row w-full xl:pl-8 sm:pl-4 md:pl-6 pl-2">
        <div style={{borderLeft: "30px solid #FFE459"}}
             className="pt-12 flex justify-center items-flex-start flex-col pb-12 w-full md:w-1/2 h-full pl-2 sm:pl-4 md:pl-6 xl:pl-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal text-primary">
            {
              heading?.split(" ").map((item, i) => (
                !(i === 0) ? item + " " : <span className="font-bold">{item + " "}</span>
              ))
            }
          </h1>
          <p className="mt-6 text-primary font-normal text-lg sm:text-xl md:text-2xl">
            {
              description
            }
          </p>
        </div>

        <div style={{height: "100%"}} className="hidden md:block relative w-full md:w-1/2 h-full bg-yellow">
          <div className="absolute h-96 w-full right-2 top-0 md:-top-36">
            <Image src="/images/solutions/business-woman.png" objectFit="fill" width="942px" height="750px" alt="business-lady" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopSectionForSolution;

TopSectionForSolution.propTypes = {
  heading: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
}
