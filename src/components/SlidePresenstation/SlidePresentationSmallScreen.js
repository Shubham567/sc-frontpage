import React from 'react';
import CollapsibleCard from "../CollapsibleCard";
import EffectAppearOnView from "../Effects/EffectAppearOnView";

const SlidePresentationSmallScreen = ({data,...props}) => {
  return (
    <div className="flex flex-col justify-center w-full items-stretch">
      {
        data.map((dp,index) => {

          return (
            <EffectAppearOnView key={dp.title}>
              <CollapsibleCard topCollapsibleComponent={dp.image}
                               collapsibleComponent={dp.content}
                               heading={
                                 <div className="flex gap-x-2.5 items-center">
                                   <div className="text-secondary font-4xl">
                                     {dp.icon}
                                   </div>
                                   <div>
                                     <h4>
                                       {dp.title}
                                     </h4>
                                   </div>
                                 </div>}
              />
            </EffectAppearOnView>
          )})
      }
    </div>
  );
};

SlidePresentationSmallScreen.propTypes = {

};

export default SlidePresentationSmallScreen;
