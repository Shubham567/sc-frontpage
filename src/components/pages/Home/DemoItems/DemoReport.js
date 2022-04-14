import React, {memo, useEffect} from 'react';
import PropTypes from 'prop-types';
import Card from "../../../Card";
import clsx from "clsx";
import styles from "./CommonDemoReport.module.css";

const DemoReport = memo(({questionNum,questionText,marksScored,children,className,...props}) => {
  let slicedText = questionText.slice(0, 36);
  let screen = typeof window === "object" ? window.screen : null;


  return (
    <Card fluid className={clsx(styles.demoReportLg, className)} {...props}
          initial={{x: (screen?.availWidth || 4000) + 500, opacity: 0}}
          transition={{x: {type: "spring", stiffness: 500, damping: 30}}}
          exit={{ opacity: 0 }}
    >
      <div className="flex flex-col mt-2 px-2 w-full justify-between">
        <div className="flex justify-between">
          <div className="flex text-purple-dark text-xs">
            Live Report:
          </div>
          <div className="flex text-purple-dark text-xs">
            Question {questionNum}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex">
            {slicedText} {slicedText.length < questionText.length ? "..." : ""}
          </div>
        </div>
        <div className="flex justify-center">
          {children}
        </div>
        <div className="flex justify-center flex-col items-center text-gray-dark">
          <div className="flex text-2xl">{marksScored}</div>
          <div className="flex text-xl">Marks Scored</div>
        </div>
      </div>

    </Card>
  );
});

DemoReport.displayName = "DemoReport";

DemoReport.propTypes = {
  questionNum: PropTypes.number,
  questionText: PropTypes.string,
  marksScored : PropTypes.number,
  children: PropTypes.node
};

export default DemoReport;
