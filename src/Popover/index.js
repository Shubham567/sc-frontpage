import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import * as ReactDOM from "react-dom";
import clsx from "clsx";
import dynamic from "next/dynamic";

const ConsumePortal = dynamic(() => import("../NupurUiWrapper/ConsumePortal"),{ssr: false});


const dataCon = {
  popOverCount : 0
}

const PopOver = props => {

  useEffect(() => {
    dataCon.popOverCount += 1;

    if(dataCon.popOverCount > 0){
      document.body.style.overflow = "hidden";
    }

    return () => {
      dataCon.popOverCount--;
      if(dataCon.popOverCount === 0){
        document.body.style.overflow = "auto";
      }
    }

  }, [])

  return (
    <ConsumePortal>
      <div className={clsx("top-0 left-0 w-full h-screen flex justify-center items-center")} style={{background: "rgba(255, 255, 255, 0.6)", backdropFilter: "blur(4px)", position: "fixed"}}>
        {props.children}
      </div>
    </ConsumePortal>
  )
};

PopOver.propTypes = {
  children: PropTypes.any.isRequired
};

export default PopOver;
