import React from 'react';
import Card from "../../Card";
import EffectAppearOnView from "../../Effects/EffectAppearOnView";
const TabCard = ({heading, description}) => {
  return (
    <div className="m-4 w-full sm:w-1/2 md:w-1/3 xl:w-1/4">
   <EffectAppearOnView>
     <Card>
       <div>
         <h2 className="font-medium text-xl mb-4">{heading && heading}</h2>
         <p className="font-normal text-md">{description && description}</p>
       </div>
     </Card>
   </EffectAppearOnView>
    </div>
  );
};

export default TabCard;
