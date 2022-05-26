import React from 'react';
import SlidePresentation from "../../../SlidePresenstation";
// import {IoBag} from "react-icons/io";

import {GiStack, GiTechnoHeart} from "react-icons/gi";
import {RiBuilding4Line,RiShoppingBag2Fill, RiMedalFill} from "react-icons/ri";
import {MdAddCall,} from "react-icons/md";

const HiringSolution = () => {
  return (
    <div className="py-8">
      <h2 className="p-8 text-primary text-center text-2xl md:text-3xl lg:text-4xl">
        Hiring Solutions
      </h2>
      <div className="mt-8">
        <SlidePresentation data={[
          {
            title: "Professional Hiring",
            icon: <RiShoppingBag2Fill />,
            image: null,
            content: "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Ut consectetur bibendum mi, in ultricies dolor egestas vitae. Aliquam volutpat vel urna et sagittis. Aenean non maximus urna. Integer consectetur, lorem quis bibendum laoreet, diam metus porttitor quam, in imperdiet diam mauris eget ex. Morbi venenatis quis quam eu maximus."
          }, {
            title: "Bulk Hiring Services",
            icon: <GiStack />,
            image: null,
            content: "Lorem icenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Ut consectetur bibendum mi, in ultricies dolor egestas vitae. Aliquam volutpat vel urna et sagittis. Aenean non maximus urna. Integer consectetur, lorem quis bibendum laoreet, diam metus porttitor quam, in imperdiet diam mauris eget ex. Morbi venenatis quis quam eu maximus."
          },{
            title: "Technical Hiring",
            icon: <GiTechnoHeart />,
            image: null,
            content: ", consectetur adip Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Ut consectetur bibendum mi, in ultricies dolor egestas vitae. Aliquam volutpat vel urna et sagittis. Aenean non maximus urna. Integer consectetur, lorem quis bibendum laoreet, diam metus porttitor quam, in imperdiet diam mauris eget ex. Morbi venenatis quis quam eu maximus."
          },{
            title: "Campus Hiring",
            icon: <RiBuilding4Line/>,
            image: null,
            content: "Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Ut consectetur bibendum mi, in ultricies dolor egestas vitae. Aliquam volutpat vel urna et sagittis. Aenean non maximus urna. Integer consectetur, lorem quis bibendum laoreet, diam metus porttitor quam, in imperdiet diam mauris eget ex. Morbi venenatis quis quam eu maximus."
          },{
            title: "Call Center Hiring",
            icon: <MdAddCall />,
            image: null,
            content: "Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Ut consectetur bibendum mi, in ultricies dolor egestas vitae. Aliquam volutpat vel urna et sagittis. Aenean non maximus urna. Integer consectetur, lorem quis bibendum laoreet, diam metus porttitor quam, in imperdiet diam mauris eget ex. Morbi venenatis quis quam eu maximus."
          }, {
            title: "Entrance Exams",
            icon: <RiMedalFill />,
            image: null,
            content: "Lorem ipsum dolor sit amet, consectetur adip Loreng elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Ut consectetur bibendum mi, in ultricies dolor egestas vitae. Aliquam volutpat vel urna et sagittis. Aenean non maximus urna. Integer consectetur, lorem quis bibendum laoreet, diam metus porttitor quam, in imperdiet diam mauris eget ex. Morbi venenatis quis quam eu maximus."
          },
        ]} />
      </div>
    </div>
  );
};

export default HiringSolution;
