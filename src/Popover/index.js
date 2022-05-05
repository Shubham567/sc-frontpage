import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import * as ReactDOM from "react-dom";
import clsx from "clsx";
import dynamic from "next/dynamic";

const ConsumePortal = dynamic(() => import("../NupurUiWrapper/ConsumePortal"),{ssr: false});


const dataCon = {
  popOverCount : 0
}

const PopOver = ({x = "center",y = "center",className,...props}) => {

  useEffect(() => {
    dataCon.popOverCount += 1;

    if(dataCon.popOverCount > 0){
      document.body.style.overflowY = "hidden";
    }

    return () => {
      dataCon.popOverCount--;
      if(dataCon.popOverCount === 0){
        document.body.style.overflowY = "auto";
      }
    }

  }, [])

  let xVal = (() => {
    switch (x) {
      case "center": return  "center";
      case "left": return "start";
      case "right": return "end";
    }
  })()

  let yVal = (() => {
    switch (y) {
      case "center": return  "center";
      case "top": return "start";
      case "bottom": return "end";
    }
  })()

  return (
    <ConsumePortal>
      <div className={clsx("top-0 left-0 w-full h-screen flex",`items-${yVal}`, `justify-${xVal}`, className)}
           style={{background: "rgba(255, 255, 255, 0.6)", backdropFilter: "blur(6px)", position: "fixed"}}>
        {props.children}
      </div>
    </ConsumePortal>
  )
};

PopOver.propTypes = {
  children: PropTypes.any.isRequired,
  x: PropTypes.oneOf(["center","left","right"]),
  y: PropTypes.oneOf(["center","top","bottom"]),
};

export default PopOver;
