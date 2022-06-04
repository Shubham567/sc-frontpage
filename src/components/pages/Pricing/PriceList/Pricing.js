import React from 'react';
import PricingCard from "./PricingCard";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";

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
      </div>
    </div>
  );
};

export default Pricing;

Pricing.propTypes = {
  pricingCardData: PropTypes.arrayOf({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    topSubHeading: PropTypes.string,
    priceMonth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    priceYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    features: PropTypes.arrayOf({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      disabled: PropTypes.bool,
      title: PropTypes.string,
      tooltipHeading: PropTypes.string,
      tooltipDescription: PropTypes.string
    })
  })
};
