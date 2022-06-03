import React from 'react';
import PricingCard from "./PricingCard";
import {useSelector} from "react-redux";

const Pricing = ({pricingCardData}) => {
  const isMonthlySubscription = useSelector((state) => state.toggleReducer.monthlySubscription);
  console.log(isMonthlySubscription);
  return (
    <div className="flex mb-32 -mt-52 items-center justify-center w-full z-10">
      <div className="w-full flex justify-center items-stretch flex-wrap">
        {
          pricingCardData?.map((item) => (
            <PricingCard key={item.id} {...item} />
          ))
        }
        {/*<PricingCard/>*/}
        {/*<PricingCard />*/}
        {/*<PricingCard pro />*/}
        {/*<PricingCard />*/}
      </div>
    </div>
  );
};

export default Pricing;
