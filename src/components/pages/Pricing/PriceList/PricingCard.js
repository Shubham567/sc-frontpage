import React from 'react';
import Image from "next/image";
import Button from "../../../Button";
import EffectAppearOnView from "../../../Effects/EffectAppearOnView";
import ToolTip from "../../../ToolTip";

const PricingCard = () => {
  return (
     <div className={"w-full sm:w-1/2 md:w-1/3 xl:w-1/4 bg-white m-8 rounded-xl overflow-hidden"} style={{boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.2)"}}>
       <div className="relative">
         <div className="w-full">
           <Image src="/images/pricing/pricingCardCurve.svg" layout="responsive" height="301px" width="466px"/>
         </div>
         {/*<EffectAppearOnView>*/}
           <div className="absolute top-8 left-8">
             <h3 className="text-xl text-white font-medium-bold">LOREM IPSUM</h3>
             <h2 className="text-4xl text-white mt-1 font-bold"><span className="text-2xl">$</span>99</h2>
           </div>
         {/*</EffectAppearOnView>*/}
       </div>
        <div className="p-8 pt-0">
          <div className="mb-6">
            <EffectAppearOnView><h3 className="text-3xl font-bold mb-4">Lorem Ipsum</h3></EffectAppearOnView>
            {
              Object.keys([...Array(7)]).map((item, i) => (
                <EffectAppearOnView key={i}><p className="mt-2 flex items-center text-xl"><ToolTip tooltipHeading={`Heading( ${i} )`} iconsStyle={"text-primary"} tooltipDescription={`Description... ( ${i} )`} /> &nbsp; Lorem Ipsum</p></EffectAppearOnView>
              ))
            }

          </div>
         <EffectAppearOnView>
           <Button className="pl-8 pr-8" color="primary" variant="contained" size="lg" rounded={false}>
             Buy Now
           </Button>
         </EffectAppearOnView>
        </div>
     </div>
  );
};

export default PricingCard;
