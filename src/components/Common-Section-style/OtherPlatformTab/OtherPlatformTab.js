import React from 'react';
import TabCard from "./TabCard";
import Image from "next/image";
import PropTypes from "prop-types";

const OtherPlatformTab = ({tabData}) => {
  return (
    <div className="mt-8 ml-2 mr-2 sm:ml-8 sm:mr-8 flex justify-center items-center relative">
      <div className="flex justify-center items-center flex-wrap">
        {
          tabData?.map((item) => (<TabCard key={item.id} {...item} />))
        }
      </div>
      <div className="absolute -bottom-72 -left-12 -z-10">
        <Image src="/images/dottedSkillCounty.png" width="500px" height="500px"  />
      </div>
    </div>
  );
};

export default OtherPlatformTab;

OtherPlatformTab.propTypes = {
  tabData: PropTypes.arrayOf({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  })
}

