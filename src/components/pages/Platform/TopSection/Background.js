import React from 'react';
import Image from "next/image";
import clsx from "clsx";

const LeftPart = ({heading, description, hideBg}) => {
  return (
    <div className="w-1/2 p-4">
      <div className={clsx("w-2/3 -ml-8 h-44 bg-yellow", hideBg)}>

      </div>
     <div className={hideBg ? "-mt-36" : "-mt-28"}>
       <h1 className="font-bold text-primary mt-2 text-5xl">{heading && heading}</h1>
       <p className="mt-8 font-medium text-primary text-xl tracking-wide">{description && description}</p>
     </div>
    </div>
  )
}

const RightPart = ({hideBg}) => {
  return (
    <div className="w-1/2 flex justify-start flex-col items-center min-h-screen p-4 relative">
      <div className={clsx("w-64 h-80 bg-yellow -z-10", hideBg)}>

      </div>
      <div className={clsx("w-64 h-80 bg-yellow -z-10", hideBg)}>

      </div>
    <div className="absolute top-1/4">
      <Image src="/images/platform/modern-laptop.svg" width="672px" height="361px"/>
    </div>
    </div>
  )
}

const Background = ({heading, description, hideBg}) => {
  return (
    <div className="min-h-screen h-screen">
      <div className="min-h-screen pl-4 pr-4 flex justify-between items-center">
          <LeftPart hideBg={hideBg} heading={heading} description={description} />
         <RightPart hideBg={hideBg} />
      </div>
    </div>
  );
};

export default Background;
