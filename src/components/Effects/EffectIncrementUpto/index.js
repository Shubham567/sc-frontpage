import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

const commonDelay = 48; // in ms

const EffectIncrementUpto = ({wrapperComponent,wrapperProps,maxIncrementDelay,children,targetValue,padStart = 2,padStartWith = "0",...props}) => {

  const [currentValue,setValue] = useState(0);
  const textContainerRef = useRef();

  const timerRefs = useRef([]);

  const WrapperComponent = wrapperComponent || "div";
  const maxDelay = maxIncrementDelay || commonDelay;

  useEffect(() => {
    const io = new IntersectionObserver(() => {

      // Using Parabolic equation to calculate delay for a point
      // y = a (x - h)^2 + k
      // here a = -1 x k / (h^2)
      // h = mid point of equation, half of maximum value to be reached, in this case targetValue
      // k = maximum increment delay,

      const h = targetValue / 2;
      const k = maxDelay;
      const a = -1 * k / (h**2);

      let totalDelay = 0;
      for(let x = 0; x < targetValue ; x++){
        const y = a * (x - h)**2 + k;
        const delay = maxDelay - y;
        totalDelay += delay;

        timerRefs.current.push(setTimeout(() => {
          setValue(prev => prev + 1);
        },totalDelay));

        io.disconnect();
      }
    }, {threshold : 1});

    io.observe(textContainerRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timerRefs.current.forEach(timer => clearTimeout(timer));
    }
  }, [])

  return (
    <WrapperComponent {...wrapperProps}>
      <span ref={textContainerRef}>{currentValue.toString().padStart(padStart, padStartWith)}</span>
      {children}
    </WrapperComponent>
  );
};

EffectIncrementUpto.propTypes = {
  targetValue: PropTypes.number.isRequired,
  wrapperComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  wrapperProps: PropTypes.object,
  maxIncrementDelay: PropTypes.number,
  padStart: PropTypes.number,
  padStartWith : PropTypes.string,
  children: PropTypes.any
};
export default EffectIncrementUpto;
