import React from 'react';
import Image from "next/image";
import clsx from "clsx";

const LeftPart = ({heading, description, hideBg}) => {
  return (
    <div className={clsx("w-full md:w-1/2 p-2 sm:p-4", (hideBg ? "-mt-12 sm:mt-0" : "mt-0"))}>
      <div className={clsx("w-5/6 sm:w-2/3 -ml-8 h-32 sm:h-36 md:h-44 bg-yellow", hideBg)}>

      </div>
     <div className={hideBg ? "-mt-36" : "-mt-28"}>
       <h1 className="font-bold text-primary mt-2 text-2xl sm:text-3xl md:text-4xl xl:text-5xl">{heading && heading}</h1>
       <p className="mt-8 font-medium text-primary text-base sm:text-lg md:text-xl tracking-wide">{description && description}</p>
     </div>
    </div>
  )
}

const RightPart = ({hideBg}) => {
  return (
    <div className="w-full md:w-1/2 flex justify-start flex-col items-center xl:min-h-screen p-4 relative">
      <div className={clsx("w-40 sm:w-48 md:w-56 xl:w-64 h-48 sm:h-80 bg-yellow -z-10", hideBg)}>

      </div>
      <div className={clsx("w-40 sm:w-48 md:w-56 xl:w-64 h-48 sm:h-80 bg-yellow -z-10", hideBg)}>

      </div>
    <div className="absolute top-24 md:top-1/3  xl:top-1/4">
      <Image src="/images/platform/modern-laptop.svg" width="672px" height="361px"/>
    </div>
    </div>
  )
}

const Background = ({heading, description, hideBg}) => {
  return (
    <div className="xl:min-h-screen mb-12 md:mb-0 xl:h-screen">
      <div className="xl:min-h-screen pl-4 pr-4 flex-col-reverse md:flex-row flex justify-between items-center">
          <LeftPart hideBg={hideBg} heading={heading} description={description} />
         <RightPart hideBg={hideBg} />
      </div>
    </div>
  );
};

export default Background;
