import React, {useEffect, useRef, useState} from 'react';
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
import MCQDemoItem from "./DemoItems/MCQDemoItem";
import MSQDemoItem from "./DemoItems/MSQDemoItem";
import CodingDemoItem from "./DemoItems/CodingDemoItem";
import RankingDemoItem from "./DemoItems/RankingDemoItem";
import PassageDemoItem from "./DemoItems/PassageDemoItem";

const menuItems = [
  {logo : <CodingLogo />, title : "Coding", activeComponent : CodingDemoItem},
  {logo : <MCQLogo />, title : "MCQ", activeComponent : MCQDemoItem},
  {logo : <MSQLogo />, title : "MSQ", activeComponent : MSQDemoItem},
  {logo : <RankingLogo />, title : "Ranking", activeComponent : RankingDemoItem},
  {logo : <VideoLogo />, title : "Video", activeComponent : null},
  {logo : <PassageLogo />, title : "Passage", activeComponent : PassageDemoItem},
  {logo : <CustomLogo />, title : "Custom", activeComponent : null},
]

const TestDemoTop = () => {

  const [activeItem, setActiveItem ] = useState(0);
  const timerRef = useRef(null);



  useEffect(() => {
    timerRef.current = setInterval(() => setActiveItem(prev => (prev + 1) % menuItems.length), 3000);
    return () => clearInterval(timerRef.current);
  }, [])

  const handleActiveItemChange = (itemNum) => () => {
    if(activeItem === itemNum){
      return;
    }
    clearInterval(timerRef.current);
    setActiveItem(itemNum);
    setTimeout(() => {
      timerRef.current = setInterval(() => setActiveItem(prev => (prev + 1) % (menuItems.length)), 3000);
    }, 5000)
  };

  const ActiveComp = menuItems[activeItem].activeComponent || (() => null);

  return (
    <div className={clsx("flex grow")}>
      <Card className={clsx(style.interactiveCard, "p-0")}>
        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-evenly w-50 bg-gray-extra-light rounded-l-xl ">
            {
              menuItems.map((item, index) => <DemoMenuItem key={item.title} logo={item.logo} title={item.title} active={index === activeItem} onClick={handleActiveItemChange(index)} />)
            }
          </div>
          <div className="flex w-full ">
            {
              <ActiveComp questionNum={activeItem + 1} />
            }
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TestDemoTop;
