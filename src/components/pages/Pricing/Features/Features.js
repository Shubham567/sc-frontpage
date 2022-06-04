import React from 'react';
import SingleFeature from "./SingleFeature";
import PropTypes from "prop-types";

const Feature = ({featuresData, topTableTitle}) => {
  return (
    <div id="features" className="mt-24 mb-24">
      <h1 className="text-center font-normal text-5xl m-4 text-primary mb-12">Features</h1>
      <div className="w-full flex justify-center items-center">
        <div className="w-full md:w-4/5">
          <table className="w-full table-auto border-separate">
            <thead>
            <tr className="odd:bg-gray-bg">
              {
                topTableTitle.map(item => (
                  <th className="font-bold border-4 border-white text-left p-2 m-1"
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
                      className="m-4 border-4 border-white font-bold text-left p-2">{item.dataKey && item.dataKey}</th>
                  <td style={{margin: "1rem"}}
                      className="text-left border-4 border-white p-2">{item.free.title && item.free.title}</td>
                  <td style={{margin: "1rem"}}
                      className="text-left border-4 border-white p-2">{item.basic.title && item.basic.title}</td>
                  <td style={{margin: "1rem"}}
                      className="text-left border-4 border-white p-2">{item.pro.title && item.pro.title}</td>
                  <td style={{margin: "1rem"}}
                      className="text-left border-4 border-white p-2">{item.enterprise.title && item.enterprise.title}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Feature;

Feature.propTypes = {
  featuresData : PropTypes.arrayOf({
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
