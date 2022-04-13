import React from 'react';
import BgTopVector from "../../svgs/BgTopVector";
import Button from "../../Button";
import CallToActionBtn from "../../Button/CallToActionBtn";
import styles from "./intro.module.css";
import clsx from "clsx";
import TestDemoTop from "./TestDemoTop";

const Intro = () => {
  return (
    <div className={""}>
      <BgTopVector className={"absolute top-0 -mt-9 w-screen -z-10"} />
          <div className="flex justify-around gap-1 items-center z h-screen text-white">
            <div className="flex w-1/2 flex-col gap-y-4 -mt-16 pl-5">
              <div className="inline">
                <h1 className={clsx("text-6xl", styles.textShadow)}>Hire with <strong>Evidence!</strong></h1>
              </div>
              <div className="flex">
                <h2 className={clsx("text-3xl", styles.textShadow,)}>Measure skill, Assess personality & Fit</h2>
              </div>
              <div className="flex">
                <p className={clsx(styles.textMaxWidth,  styles.textShadow)}>
                  Upgrade your hiring. Use SkillCounty Assessment Platform to hire the right candidates faster and more efficiently.
                </p>
              </div>
              <div>
                <div>
                  <CallToActionBtn className="text-purple">
                    Start Free Trial
                  </CallToActionBtn>
                </div>
                <div>
                  or Request Demo
                </div>
              </div>
            </div>
            <div className="flex w-1/2">
              {/*// The Interactive comp goes here*/}
              <TestDemoTop />
            </div>
          </div>
    </div>
  );
};

export default Intro;
