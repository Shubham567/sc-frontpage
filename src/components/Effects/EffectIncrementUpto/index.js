import React from 'react';
import PropTypes from 'prop-types';
import useIncrementUpto from "../../../hooks/useIncrementUpto";


const EffectIncrementUpto = ({wrapperComponent,maxIncrementDelay,children,targetValue,padStart = 2,padStartWith = "0",...props}) => {

  const [currentValue, viewActivationRef] = useIncrementUpto(targetValue);

  const WrapperComponent = wrapperComponent || "div";

  return (
    <WrapperComponent {...props}>
      <span ref={viewActivationRef}>{currentValue.toString().padStart(padStart, padStartWith)}</span>
      {children}
    </WrapperComponent>
  );
};

EffectIncrementUpto.propTypes = {
  targetValue: PropTypes.number.isRequired,
  wrapperComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  maxIncrementDelay: PropTypes.number,
  padStart: PropTypes.number,
  padStartWith : PropTypes.string,
  children: PropTypes.any
};
export default EffectIncrementUpto;
