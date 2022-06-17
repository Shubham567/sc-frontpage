import React from 'react';
import BenefitsCard from "./BenefitsCard/BenefitsCard";
import PropTypes from "prop-types";

const Benefits = ({benefitsData}) => {
  return (
    <div className="w-full pl-2 pr-2 pt-8 pb-8 md:pl-12 md:pr-12 md:pt-12 md:pb-12 bg-dark">
       <div className="flex flex-wrap justify-center md:justify-between items-center">
         {
           benefitsData?.map((item) => (<BenefitsCard key={item.id} image={item.image} description={item.description} />))
         }
       </div>
    </div>
  );
};

export default Benefits;

Benefits.propTypes = {
  benefitsData: PropTypes.arrayOf({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    image: PropTypes.node,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  })
}
