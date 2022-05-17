import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import styles from "./ProgressWithText.module.css";
import clsx from "clsx";

const ProgressWithText = React.forwardRef(({ max = 100,value,...props}, ref) => {

  const elementRef = useRef(null);

  useEffect(() => {
    elementRef.current.setAttribute("progress-value", (value || 0)+"%");
  });


  return (
    <div className="relative">
      <progress ref={ref} max={max} value={value} className={clsx("w-full h-8", styles.progress)}/>
      <span ref={elementRef} className={clsx("absolute left-3 top-1", styles.text)}></span>
    </div>
  );
});

ProgressWithText.displayName = "ProgressWithText";

ProgressWithText.propTypes = {
  max: PropTypes.number,
  value: PropTypes.number,
};

export default ProgressWithText;
