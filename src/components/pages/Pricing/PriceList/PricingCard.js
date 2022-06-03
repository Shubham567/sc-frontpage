import React from 'react';
import Image from "next/image";
import Button from "../../../Button";
import EffectAppearOnView from "../../../Effects/EffectAppearOnView";
import ToolTip from "../../../ToolTip";
import PricingTopBg from "../../../svgs/PricingTopBg";
import clsx from "clsx";
import {useSelector} from "react-redux";

const PricingCard = ({id, type, topSubHeading, priceMonth, priceYear, heading, subHeading, features}) => {
  const isMonthlySubscription = useSelector((state) => state.toggleReducer.monthlySubscription);
  console.log(isMonthlySubscription);
  return (
    <div className={"w-full relative sm:w-1/2 md:w-1/3 xl:w-1/5 bg-white m-6 rounded-xl overflow-hidden"}
         style={{boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.2)"}}>
      <div className="relative">
        <div className="w-full">
          {/*<Image src="/images/pricing/pricingCardCurve.svg" layout="responsive" height="301px" width="466px"/>*/}
          <PricingTopBg width="100%"
                        className={clsx("absolute -top-4", (type === "Pro") ? "fill-orange" : "fill-primary")}/>
        </div>
        <div className="absolute w-full h-24">
          <div className="flex h-full flex-wrap w-full p-4 items-center justify-between">
            <div className="text-white">
              <h3 className="text-2xl text-white font-medium">{type && type}</h3>
              <p className="text-xs font-medium">{topSubHeading && topSubHeading}</p>
            </div>
            <h2 className="text-4xl text-white mt-1 font-bold">
              {
                isMonthlySubscription ? (
                  priceMonth === "Free" ? <p>Free<sup className="text-base font-light">/forever</sup></p> : priceMonth ?
                    <p><span className="text-xl">$</span>{priceMonth}<sup className="text-base font-normal">/Month</sup>
                    </p> : <a className="text-base flex cursor-pointer font-light">Contact Us</a>
                ) : (
                  priceYear === "Free" ? <p>Free<sup className="text-base font-light">/forever</sup></p> : priceYear ?
                    <p><span className="text-xl">$</span>{priceYear}<sup className="text-base font-normal">/Year</sup>
                    </p> : <a className="text-base flex cursor-pointer font-light">Contact Us</a>
                )
              }
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 h-full flex flex-col justify-between pt-48 pt-0">
        <div className="mb-6">
          <EffectAppearOnView><h3 className="text-2xl font-bold">{heading && heading}</h3></EffectAppearOnView>
          <EffectAppearOnView><p className="text-xl font-medium mb-4">{subHeading && subHeading}</p></EffectAppearOnView>
          {
            features.map((item) => (
              <EffectAppearOnView key={item.id}><div className="mt-2 flex items-center text-lg"><ToolTip
                tooltipHeading={item.tooltipHeading} iconsStyle={"text-primary"} disabled={item?.disabled}
                tooltipDescription={item.tooltipDescription}/> &nbsp; <span className={clsx("ml-2",item?.disabled ? "text-gray" : "text-dark")}>{item?.title}</span></div></EffectAppearOnView>
            ))
          }

        </div>
        <div className="w-full flex justify-between flex-wrap items-center p-2">
          {/*<EffectAppearOnViews>*/}
          <p className="text-primary text-base cursor-pointer font-medium">
            View Details
          </p>
            <Button className="pl-6 pr-6" color="primary" variant="contained" size="md" rounded={false}>
              Buy Now
            </Button>
          {/*</EffectAppearOnViews>*/}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
