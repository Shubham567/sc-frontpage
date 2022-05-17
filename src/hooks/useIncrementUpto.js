import {useEffect, useRef, useState} from "react";

const idealIncrementDelay = 24; // in ms

export default function useIncrementUpto(targetValue,maxIncrementDelay, onIncrement){
  const [currentValue,setValue] = useState(0);
  const viewActivationRef = useRef();

  const timerRefs = useRef([]);
  const maxDelay = maxIncrementDelay || idealIncrementDelay;


  useEffect(() => {
    const io = new IntersectionObserver(() => {

      // Using Parabolic equation to calculate delay for a point
      // y = a (x - h)^2 + k
      // here a = -1 x k / (h^2)
      // h = mid point of equation, half of maximum value to be reached, in this case targetValue
      // k = maximum increment delay,
      // this formula ensures

      const h = targetValue / 2;
      const a = -1 * maxDelay / (h**2);

      let totalDelay = 0;
      for(let x = 0; x < targetValue ; x++){
        const y = a * (x - h)**2;
        const delay = maxDelay - y;
        totalDelay += delay;

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
