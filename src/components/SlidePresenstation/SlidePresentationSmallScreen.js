import React from 'react';
import PropTypes from 'prop-types';
import CollapsibleCard from "../CollapsibleCard";

const SlidePresentationSmallScreen = ({data,...props}) => {
  return (
    <div>
      {
        data.map((dp,index) => {

          return (
            <CollapsibleCard key={dp.title} heading={<div className="flex gap-x-2.5">
              <div>
                {dp.icon}
              </div>
              <div>
                <h4>
                  {dp.title}
                </h4>
              </div>
            </div>}
                             topCollapsibleComponent={dp.image}
                             collapsibleComponent={dp.content}
            />
          )})
      }
    </div>
  );
};

SlidePresentationSmallScreen.propTypes = {

};

export default SlidePresentationSmallScreen;
