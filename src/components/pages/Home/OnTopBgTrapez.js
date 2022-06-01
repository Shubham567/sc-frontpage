import React from 'react';
import PropTypes from 'prop-types';
import BgTrapez from "../../svgs/BgTrapez";
import Button from "../../Button";
import {useDispatch} from "react-redux";
import {actionSetHomeDemoRequestForm} from "../../../store/reducers/homeReducer/homeReducerActions";

const OnTopBgTrapez = props => {
  const dispatch = useDispatch();
  const openModal = () => dispatch(actionSetHomeDemoRequestForm(true));
  return (
    <div className="w-full relative flex md:flex-row flex-col p-4 gap-16 items-center justify-center" style={{minHeight: 400, width: "100%"}}>
      <BgTrapez className="absolute top-0 fill-primary" width="100%" height="100%" style={{zIndex: -2}}/>

      <div className="flex justify-center flex-col gap-3">
        <h2 className="text-4xl text-center md:text-left text-white">Hire affordably at Scale</h2>
        <h3 className="text-gray-light  text-center md:text-left">Getting better results at more affordable price, without any limits!<br/>
          Get started in under 5 mins*</h3>

      </div>
      <div className="flex gap-4">
        <Button variant="outlined" onClick={openModal} color="primary">Request Demo</Button>
        <Button color="secondary" variant="contained">Get Started</Button>
      </div>
    </div>// interpl.ai
  );
};

OnTopBgTrapez.propTypes = {

};

export default OnTopBgTrapez;
