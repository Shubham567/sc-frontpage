import React from 'react';
import CallToActionBtn from "../../Button/CallToActionBtn";
import styles from "./intro.module.css";
import clsx from "clsx";
import Image from "next/image";
import TestDemoTop from "./TestDemoTop";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

import commonStyles from "./Home.module.css";
import Button from "../../Button";
import {useDispatch} from "react-redux";
import {actionSetHomeDemoRequestForm} from "../../../store/reducers/homeReducer/homeReducerActions";
import IconButton from "../../IconButton";

const Intro = () => {

  const dispatch = useDispatch();
  const openModal = () => dispatch(actionSetHomeDemoRequestForm(true));
  //flex-col lg:flex-row xl:flex-row justify-around gap-1 items-center
  return (
    <div className={clsx(commonStyles.intro, "sm:pt-40 md:pt-48 lg:pt-0 xl:pt-0 relative")}>
      <div className="flex flex-start items-center text-dark" style={{minHeight: "100vh"}}>
        <div className="xl:ml-8 xl:border-l-8 xl:border-l-yellow xl:pl-6 xl:pt-20 xl:pb-20 flex w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex-col items-center sm:items-center md:items-center lg:items-start gap-y-4 -mt-16 pl-5">
          <div>
            <h1 className={clsx("tracking-wide mb-4 text-4xl text-center " +
              "md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl" +
              " lg:text-left xl:text-left 2xl:text-left " +
              "px-1 rounded", styles.textShadow)} >
              Hire with <strong className="text-dark">Evidence!</strong></h1>
          </div>

          <div >
            <h2 className={clsx("tracking-wide font-bold text-md text-center md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-center lg:text-left xl:text-left 2xl:text-left px-1 rounded", styles.textShadow,)}
                // style={{background: "rgba(255,255,255,0.3)"}}
            >
              Measure skill, Assess personality & Fit
            </h2>
          </div>

          <div>
            <p className={clsx(styles.textMaxWidth,  styles.textShadow,
              "text-center text-md font-medium tracking-wider -mt-1 lg:text-left xl:text-left 2xl:text-left px-0.5 rounded")}
               // style={{background: "rgba(255,255,255,0.3)"}}
            >
              Upgrade your hiring. Use SkillCounty Assessment Platform to hire the right candidates faster and more efficiently.
            </p>
          </div>

          <div className="mt-5 flex items-center">
              <div className={"font-medium text-dark mr-4"}>Get Started</div>
              <div>
                <IconButton aria-label="get-started"  className={"rounded-full border-4 font-black cursor-pointer p-2/3 border-yellow bg-transparent"}>
                  <IoIosArrowRoundForward className="text-4xl font-black"/>
                </IconButton>
              </div>
              {/*<Button size="lg" variant="outlined" rounded color="primary">*/}
              {/*  Get Started*/}
              {/*</Button>*/}

            {/*<div className={clsx(styles.textShadow, "text-xs px-3 mt-1 text-center")}>*/}
            {/*  or <Button size="sm" onClick={openModal}>Request Demo</Button>*/}
            {/*</div>*/}
          </div>

        </div>

        <div className="flex w-full -top-10 right-0 absolute -z-10" >
          {/*// The Interactive comp goes here*/}
          {/*<TestDemoTop />*/}
           <Image src="/images/young-businesswoman.png" width="1921px" height="987px" fill="" responsive objectFit="cover" />
        </div>

      </div>
    </div>
  );
};

export default Intro;
