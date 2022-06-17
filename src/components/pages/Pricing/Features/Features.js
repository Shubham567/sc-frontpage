import React from 'react';
import SingleFeature from "./SingleFeature";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import clsx from "clsx";

const Feature = ({featuresData, topTableTitle}) => {

  const planType = useSelector((state) => state.pricingFeatureReducer.featuresByPrice);

  console.log(planType);

  return (
    <div id="features" className="mt-24 mb-24">

      <h1 className="text-center font-normal text-5xl m-4 text-primary mb-12">Features</h1>
      <div className="hidden md:block">
        <div className="w-full flex justify-center items-center">
          <div className="w-full md:w-4/5">
            <table className="w-full table-auto border-separate">
              <thead>
              <tr className="odd:bg-gray-light odd:text-dark">
                {
                  topTableTitle.map(item => (
                    <th
                      className={clsx("font-bold border-4 border-white text-left p-2 m-1", planType === item.title?.toLowerCase() && "bg-yellow", (planType === "tiny" && item.title?.toLowerCase() === "free") && "bg-yellow")}
                      key={item.id}>{item.title && item.title}</th>
                  ))
                }
              </tr>
              </thead>
              <tbody>
              {
                featuresData.map(item => (
                  <tr key={item.id} className="odd:bg-white even:bg-gray-bg">
                    <th style={{margin: "1rem"}}
                        className={clsx("m-4 bg-gray-light text-dark border-4 border-white font-bold text-left p-2", planType && "bg-yellow")}>{item.dataKey && item.dataKey}</th>
                    <td style={{margin: "1rem"}}
                        className={clsx("text-left border-4 border-white p-2", planType === "tiny" && "bg-yellow")}>{item.free.title && item.free.title}</td>
                    <td style={{margin: "1rem"}}
                        className={clsx("text-left border-4 border-white p-2", planType === "basic" && "bg-yellow")}>{item.basic.title && item.basic.title}</td>
                    <td style={{margin: "1rem"}}
                        className={clsx("text-left border-4 border-white p-2", planType === "pro" && "bg-yellow")}>{item.pro.title && item.pro.title}</td>
                    <td style={{margin: "1rem"}}
                        className={clsx("text-left border-4 border-white p-2", planType === "enterprise" && "bg-yellow")}>{item.enterprise.title && item.enterprise.title}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div className="block md:hidden">
        <div className="flex flex-wrap justify-center">
          {
            topTableTitle?.map(item => (
              <SingleFeature key={item.id} topicObj={item} details={featuresData}/>
            ))
          }
        </div>
      </div>

    </div>
  );
};

export default Feature;

Feature.propTypes = {
  featuresData: PropTypes.arrayOf({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataKey: PropTypes.string,
    free: PropTypes.object,
    basic: PropTypes.object,
    pro: PropTypes.object,
    enterprise: PropTypes.object
  }),
  topTableTitle: PropTypes.arrayOf({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
  })
}
