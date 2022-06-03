import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import PropTypes from "prop-types";

const ToggleButton = ({isToggleOn}) => {
  const [isOn, setIsOn] = useState(true);
  const isMounted = useRef(null);

  useEffect(() => {
    if(isMounted.current)return;
    isMounted.current = true;
    isToggleOn(isOn);
  }, []);

  const toggleHandler = () => {
    setIsOn(!isOn);
    isToggleOn(!isOn);
  }

  return (
    <div className="flex">
      <Image onClick={toggleHandler} style={{cursor: "pointer", transition: "all 3s ease-in-out"}} src={isOn ? "/images/icons/toggleOn.svg" : "/images/icons/toggleOff.svg"} width="80px" height="40px" />
    </div>
  );
};

export default ToggleButton;

ToggleButton.propTypes = {
  isToggleOn: PropTypes.func
}


