import React from 'react';
import BgTrapez from "../../svgs/BgTrapez";
import Button from "../../Button";
import {useDispatch} from "react-redux";
import {actionSetHomeDemoRequestForm} from "../../../store/reducers/homeReducer/homeReducerActions";
import clsx from "clsx";
import Link from "next/link";

const OnTopBgTrapez = props => {
  const dispatch = useDispatch();
  const openModal = () => dispatch(actionSetHomeDemoRequestForm(true));
  return (
    <div className="w-full mt-24 relative flex md:flex-row flex-col p-4 gap-16 items-center justify-center" style={{minHeight: 400, width: "100%"}}>
      <BgTrapez className={clsx("absolute top-0", props.bgFillColor || "fill-primary")} width="100%" height="100%" style={{zIndex: -2}}/>


      <div className="flex justify-center flex-col gap-3">
        <h2 className={clsx("text-4xl text-center md:text-left", props.headColor || "text-white")}>Hire affordably at Scale</h2>
        <h3 className={clsx("text-center md:text-left", props.contentColor || "text-gray-light")}>Getting better results at more affordable price, without any limits!<br/>
          Get started in under 5 mins*</h3>

      </div>
      <div className="flex gap-4">
        <Button variant="outlined" onClick={openModal} color="primary">Request Demo</Button>
        <Link href={"https://app.skillcounty.com/subscribe/start-trial"} passHref>
          <Button color="secondary" variant="contained">Get Started</Button>
        </Link>
      </div>
    </div>// interpl.ai
  );
};

OnTopBgTrapez.propTypes = {

};

export default OnTopBgTrapez;
