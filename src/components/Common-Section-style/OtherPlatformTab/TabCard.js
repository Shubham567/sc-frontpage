import React from 'react';
import Card from "../../Card";
import EffectAppearOnView from "../../Effects/EffectAppearOnView";
import ArrowIcon from "../../svgs/ArrowIcon";
const TabCard = ({heading, description}) => {
  return (
    <div className="m-4 w-full sm:w-1/2 md:w-1/3 xl:w-1/4">
   <EffectAppearOnView>
     <Card>
       <div className="text-dark">
         <div>
           <h2 className="font-bold text-2xl mb-4">{heading && heading}</h2>
           <p className="font-normal text-justify text-base">{description && description}</p>
         </div>
         <div className="flex mt-8 justify-flex-start items-center">
           <div className="cursor-pointer hover:text-primary flex items-center">
             <h6 className="text-center text-xl mr-4 font-bold">See More</h6>
             <ArrowIcon className="hover:fill-primary transition-all" />
           </div>
         </div>
       </div>
     </Card>
   </EffectAppearOnView>
    </div>
  );
};

export default TabCard;
