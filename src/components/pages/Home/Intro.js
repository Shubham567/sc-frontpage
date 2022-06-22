import React from 'react';
import styles from "./intro.module.css";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {IoIosArrowRoundForward} from "react-icons/io";

import commonStyles from "./Home.module.css";
import {useDispatch} from "react-redux";
import {actionSetHomeDemoRequestForm} from "../../../store/reducers/homeReducer/homeReducerActions";
import IconButton from "../../IconButton";

const Intro = () => {

  const dispatch = useDispatch();
  const openModal = () => dispatch(actionSetHomeDemoRequestForm(true));
  //flex-col lg:flex-row xl:flex-row justify-around gap-1 items-center
  return (
    <div className={clsx(commonStyles.intro, "pt-36 sm:pt-40 md:pt-48 lg:pt-0 xl:pt-0 relative")}>
      <div className="flex mt-96 sm:mt-72 lg:mt-0 pb-16 lg:pb-0 min-h-min lg:min-h-screen flex-start items-center text-dark">
        <div className="xl:ml-8 pt-8 md:mt-12 xl:border-l-8 xl:border-l-yellow xl:pl-6 xl:pt-20 xl:pb-20 flex w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex-col items-center sm:items-center md:items-center lg:items-start gap-y-4 -mt-16 pl-5">
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
              Build a faster and scalable hiring process that attracts the best talent using the most user friendly hiring platform.
            </p>
          </div>

          <div className="mt-5 flex items-center">
            <div className={"font-medium text-dark mr-4"}><Link href={"https://app.skillcounty.com/subscribe/start-trial"}>Get Started</Link></div>
              <div>
                <Link href={"https://app.skillcounty.com/subscribe/start-trial"} passHref>
                  <IconButton aria-label="get-started"  className={"rounded-full border-4 font-black cursor-pointer p-2/3 border-yellow bg-transparent"}>
                    <IoIosArrowRoundForward className="text-4xl font-black"/>
                  </IconButton>
                </Link>
              </div>
              {/*<Button size="lg" variant="outlined" rounded color="primary">*/}
              {/*  Get Started*/}
              {/*</Button>*/}

            {/*<div className={clsx(styles.textShadow, "text-xs px-3 mt-1 text-center")}>*/}
            {/*  or <Button size="sm" onClick={openModal}>Request Demo</Button>*/}
            {/*</div>*/}
          </div>

        </div>

        <div className="flex mt-8 lg:bg-transparent items-center justify-end w-full lg:w-1/2 h-96 top-0 lg:h-full absolute lg:right-0 lg:top-0" >
          {/*// The Interactive comp goes here*/}
          {/*<TestDemoTop />*/}
           <Image src="/images/cool-girl.png"
                  layout="fill"
                  objectFit="contain"
                  alt="SkillCounty has the best and most affordable assessment products & tools in the market."
                  priority
                  unoptimized
           />
          {/* Uncomment to enable ROI calculator button */}
          {/*<div className="flex w-2/5 h-full flex-col">*/}
          {/*  <p className="mt-8 text-md md:text-2xl font-normal mb-2">Calculate  ROI</p>*/}
          {/*  <div className="flex">*/}
          {/*    <div className="ml-12">*/}
          {/*      <Image src="/images/arrowIcon.png" width="71px" height="59px" />*/}
          {/*    </div>*/}
          {/*    <button className="mt-4 ml-2">*/}
          {/*      <Image src="/images/roiIcon.png" width="80px" height="80px" />*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>

      </div>
    </div>
  );
};

export default Intro;
