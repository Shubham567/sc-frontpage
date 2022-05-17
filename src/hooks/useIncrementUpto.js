import {useEffect, useRef, useState} from "react";

const idealIncrementDelay = 36; // in ms


/**
 * Use to Create Increment effect.
 * It uses parabola function to start slow then speedup to max on mid point, then slow down again.
 * Ideal for values between 0 - 1000.
 * @param {number} targetValue - Value to reach by counting upwards
 * @param {number} maxIncrementDelay - How frequently the timer should update, Default value 36
 * @param {function} onIncrement - Callback when an increment is done
 * @example
 * useIncrementUpto(47)
 * @returns {(number|React.MutableRefObject<undefined>)[]} Returns the current value & Ref to attach to trigger activation
 */
export default function useIncrementUpto(targetValue,maxIncrementDelay, onIncrement){

  const [currentValue,setValue] = useState(0);
  const viewActivationRef = useRef();

  const timerRefs = useRef([]);
  const maxDelay = (maxIncrementDelay || idealIncrementDelay) - 1;


  useEffect(() => {
    const io = new IntersectionObserver(() => {

      // Using Parabolic equation to calculate delay for a point
      // y = a (x - h)^2 + k
      // here a = -1 x k / (h^2)
      // h = mid point of equation, half of maximum value to be reached, in this case targetValue
      // k = maximum increment delay,
      // this formula ensures

      const h = targetValue / 2;
      // k -> maxDelay
      const a = maxDelay / (h**2);

      let totalDelay = 0;
      for(let x = 0; x < targetValue ; x++){
        const y = a * (x - h)**2 + 1;
        totalDelay += y;

        timerRefs.current.push(setTimeout(() => {
          setValue(prev => {
            let newVal = prev + 1;
            onIncrement?.(newVal);
            return  newVal;
          });
        },totalDelay));

        io.disconnect();
      }
    }, {threshold : 1});

    io.observe(viewActivationRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timerRefs.current.forEach(timer => clearTimeout(timer));
    }
  }, [])


  return [currentValue,viewActivationRef];

}
