import * as React from "react"
import {motion, useAnimation} from "framer-motion";
import { useIntersection } from '@mantine/hooks';
import {useEffect} from "react";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "#34A853"
  },
  visible: {
    pathLength: 1,
    fill:"#34A853"
  }
}

const AnimatedDoubleTick = ({...props}) => {

  const controls = useAnimation();

  const [ref, observer] = useIntersection({
    threshold: 1,
  });

  useEffect(() => {
    if(observer?.isIntersecting){
      controls.start({
        pathLength: 1,
        fill:"#34A853",
        rotate: 360,
        transition: {
          duration: 0.6
        }});
    }
  })


  return <svg
    width={65}
    height={65}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}
  >
    <motion.path
      // stroke="#00929d"
      d="M36.44 20.19a3.047 3.047 0 0 1 4.348 4.266l-16.21 20.272a3.046 3.046 0 0 1-4.387.081L9.44 34.06a3.046 3.046 0 1 1 4.306-4.306l8.507 8.503L36.36 20.28c.026-.031.053-.061.082-.09Zm-3.737 20.882 3.738 3.737a3.047 3.047 0 0 0 4.383-.08l16.218-20.273a3.046 3.046 0 1 0-4.433-4.176L38.5 38.257l-1.97-1.975-3.83 4.79h.003Z"
      initial={{
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
      }}
      animate={controls}
    />
  </svg>
}

export default AnimatedDoubleTick
