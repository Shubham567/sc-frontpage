import React, {useState} from 'react';
import clsx from "clsx";
import Card from "../../Card";
import style from "./TestDemoTop.module.css";
import MCQLogo from "../../svgs/MCQLogo";
import MSQLogo from "../../svgs/MSQLogo";
import CodingLogo from "../../svgs/CodingLogo";
import RankingLogo from "../../svgs/RankingLogo";
import VideoLogo from "../../svgs/VideoLogo";
import PassageLogo from "../../svgs/PassageLogo";
import CustomLogo from "../../svgs/CustomLogo";
import DemoMenuItem from "./DemoMenuItem";

const menuItems = [
  {logo : <MCQLogo />, title : "MCQ", activeComponent : null},
  {logo : <MSQLogo />, title : "MSQ", activeComponent : null},
  {logo : <CodingLogo />, title : "Coding", activeComponent : null},
  {logo : <RankingLogo />, title : "Ranking", activeComponent : null},
  {logo : <VideoLogo />, title : "Video", activeComponent : null},
  {logo : <PassageLogo />, title : "Passage", activeComponent : null},
  {logo : <CustomLogo />, title : "Custom", activeComponent : null},
]

const TestDemoTop = () => {

  const [activeItem, setActiveItem ] = useState(0);


  return (
    <div className={clsx("flex grow")}>
      <Card className={clsx(style.interactiveCard, "p-0")}>
        <div className="flex justify-between">
          <div className="flex flex-col justify-evenly w-50 bg-gray-extra-light rounded-l-xl ">
            {
              menuItems.map((item, index) => <DemoMenuItem key={item.title} logo={item.logo} title={item.title} active={index === activeItem} onClick={() => setActiveItem(index)} />)
            }
          </div>
          <div className="flex ">
            tv
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TestDemoTop;
