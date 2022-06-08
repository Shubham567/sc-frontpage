import React from 'react';
import PropTypes from "prop-types";

const TopSectionForSolution = ({heading, description}) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="md:h-80 xl:h-72 flex w-full xl:pl-8 sm:pl-4 md:pl-6 pl-2">
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
        <div style={{height: "100%"}} className="hidden md:block w-1/2 h-full bg-yellow">

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
