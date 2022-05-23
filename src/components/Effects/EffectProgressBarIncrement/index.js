import React from 'react';
import PropTypes from 'prop-types';
import ProgressWithText from "../../ProgressWithText";
import useIncrementUpto from "../../../hooks/useIncrementUpto";

const EffectProgressBarIncrement = React.memo(({ targetValue ,max=100,...props}) => {
  const [currentValue, activationRef] = useIncrementUpto(targetValue);
  console.log("MaxVal",targetValue,currentValue);
  return (
    <ProgressWithText ref={activationRef} value={currentValue} max={max}/>
  );
});

EffectProgressBarIncrement.displayName = "EffectProgressBarIncrement";
EffectProgressBarIncrement.propTypes = {
  targetValue: PropTypes.number.isRequired,
  max: PropTypes.number,
};

export default EffectProgressBarIncrement;
