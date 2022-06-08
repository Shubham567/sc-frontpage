import React from 'react';
import FeaturesCard from "./FeaturesCard";
import Image from "next/image";
import PropTypes from "prop-types";

const Features = ({featureData}) => {
  return (
    <div>
      <div className="ml-4 mt-8 mr-4 mb-8 xl:ml-28 xl:mr-28 xl:mt-0 xl:mb-16">
        {
          featureData.map((item) => (<FeaturesCard key={item.id} {...item} />))
        }
      </div>
    </div>
  );
};

export default Features;

Features.propTypes = {
  featureData: PropTypes.arrayOf({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    image: PropTypes.node,
    heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    direction: PropTypes.string
  })
}

