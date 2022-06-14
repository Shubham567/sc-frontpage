import React from 'react';
import Card from "../../Card";
import EffectAppearOnView from "../../Effects/EffectAppearOnView";
import ArrowIcon from "../../svgs/ArrowIcon";
import {useRouter} from "next/router";

const TabCard = ({label, description, route}) => {
  const router = useRouter();

  const goToPage = () => {
    router.push(route).then();
  }

  return (

    <div style={{boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.2)"}} className="m-4 rounded-xl bg-white p-6 w-full sm:w-1/2 md:w-1/3 xl:w-1/4">

      <div className="text-dark h-full flex flex-col items-between justify-between">
        <div className="">
          <EffectAppearOnView><h2 className="font-bold text-2xl mb-4">{label && label}</h2></EffectAppearOnView>
          <EffectAppearOnView><p className="font-normal text-justify text-base">{description && description}</p></EffectAppearOnView>
        </div>
        <div className="flex mt-8 justify-flex-start items-center">
          <div onClick={goToPage} className="cursor-pointer hover:text-primary flex items-center">
            <h6 className="text-center text-xl mr-4 font-bold">See More</h6>
            <ArrowIcon className="hover:fill-primary transition-all"/>
          </div>
        </div>
      </div>

    </div>

  );
};

export default TabCard;
