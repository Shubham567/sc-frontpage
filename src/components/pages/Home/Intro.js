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
      <div className="flex flex-col lg:flex-row xl:flex-row justify-around gap-1 items-center z h-screen text-white ">
        <div className="flex w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex-col gap-y-4 -mt-16 pl-5">
          <div>
            <h1 className={clsx("text-3xl text-center md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-center lg:text-left xl:text-left 2xl:text-left", styles.textShadow)}>Hire with <strong>Evidence!</strong></h1>
          </div>
          <div >
            <h2 className={clsx("text-xl text-center md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-center lg:text-left xl:text-left 2xl:text-left", styles.textShadow,)}>Measure skill, Assess personality & Fit</h2>
          </div>
          <div>
            <p className={clsx(styles.textMaxWidth,  styles.textShadow, "text-center lg:text-left xl:text-left 2xl:text-left")}>
              Upgrade your hiring. Use SkillCounty Assessment Platform to hire the right candidates faster and more efficiently.
            </p>
          </div>
          <div>
            <div>
              <CallToActionBtn className="text-purple">
                Start Free Trial
              </CallToActionBtn>
            </div>
            <div className={clsx(styles.textShadow, "text-xs")}>
              or Request Demo
            </div>
          </div>
        </div>
        <div className="flex  lg:w-1/2 xl:w-1/2 2xl:w-1/2">
          {/*// The Interactive comp goes here*/}
          <TestDemoTop />
        </div>
      </div>
    </div>
  );
};

export default Intro;
