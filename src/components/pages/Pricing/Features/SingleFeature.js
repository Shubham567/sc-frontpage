import React from 'react';
import clsx from "clsx";
import EffectAppearOnView from "../../../Effects/EffectAppearOnView";
import CheckBoxIcon from "../../../svgs/CheckBoxIcon";

const SingleFeature = ({details, topicObj, style}) => {
  return (
    <>
      {
        !(topicObj?.title === "Features") &&
        <div style={{boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.2)"}}
             className={clsx("m-6 rounded-xl overflow-hidden mt-12 mb-12 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 text-xl", style)}>
          <div
            className={clsx("text-center text-dark pt-2 pb-2 font-bold text-2xl pl-4 pr-4", (topicObj?.title === "Pro") ? "bg-orange-light" : "bg-primary-light")}>
            <EffectAppearOnView>
              {
                topicObj?.title
              }
            </EffectAppearOnView>
          </div>
          <div className="p-4">
            {
              details?.map((item) => (
                <div key={item.id}>
                  {
                    !(item[`${topicObj?.title?.toLowerCase()}`].title.toLowerCase() === "no") ?
                    <EffectAppearOnView key={item.id}>
                      <div className="flex items-center m-2">
                    <span className="w-8 h-8 flex items-center justify-center">
                      <CheckBoxIcon fill={topicObj?.title === "Pro" ? "orange" : "green"}/>
                    </span>
                        <span className="ml-2 flex text-lg">
                      {item?.dataKey + " - " +
                      item[`${topicObj?.title?.toLowerCase()}`].title
                      }
                    </span>
                      </div>
                    </EffectAppearOnView> : <></>
                  }
                </div>
              ))
            }
          </div>
          {/*<CheckBoxIcon fill={"green"} width={22} height={24} />*/}
          {/*<CheckBoxIcon fill={"orange"} width={22} height={24} />*/}
        </div>
      }
    </>
  );
};

export default SingleFeature;
