import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from "framer-motion";
import clsx from "clsx";
import DemoReport from "./DemoReport";
import Prism from "prismjs";
import AnimatedDoubleTick from "../../../svgs/AnimatedDoubleTick";

const texts = {
  questionText: "Write a program to perform Insertion Sort.",
  code: "function insertionSort(inputArr) {\n" +
    "    let n = inputArr.length;\n" +
    "        for (let i = 1; i < n; i++) {\n" +
    "            let current = inputArr[i];\n" +
    "            let j = i-1; \n" +
    "            while ((j > -1) && (current < inputArr[j])) {\n" +
    "                inputArr[j+1] = inputArr[j];\n" +
    "                j--;\n" +
    "            }\n" +
    "            inputArr[j+1] = current;\n" +
    "        }\n" +
    "    return inputArr;\n" +
    "}",
  testCasesNumber: 7
}

const CodingDemoItem = ({questionNum}) => {
  const [codingText,setCodingText] = useState("");
  const controls = useAnimation();
  const controlDemoReport = useAnimation();


  useEffect(() => {
    let timer;
    let promise = new Promise((resolve, reject) => {
      timer = setInterval(() => {
        let codeLines = texts.code.split("\n");
        setCodingText(prev => {
          let prevNumLines = prev.split("\n").length;
          if(prevNumLines === codeLines.length){
            clearInterval(timer);
            resolve();
            return prev;
          }
          return (prev !== "" ? prev +"\n" + codeLines[prevNumLines] : codeLines[0]);
        })
        Prism.highlightAll();
      }, 40);
    });

    promise.then(() => {
      console.log("Text ANi finished");
      return controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3 + (0.1) * i
        }
      }));
    }).then(() => {
      return controlDemoReport.start({
        x: 0,
        opacity: 1
      });
    })

    return () => clearInterval(timer);
  }, [])

  return (
    <div className="w-full pl-5 pt-5 relative">
      <div className="flex flex-col w-full gap-4">
        <div className="flex bold text-primary">
          <div className="flex w-1/3 text-sm ">Question {questionNum}</div>
          <div className="flex w-1/3 text-sm justify-center">Coding</div>
          <div className="flex w-1/3 text-sm justify-end pr-5">Javascript</div>
        </div>
        <div className="flex">
          {texts.questionText}
        </div>
        <div className="pt-2">
          <pre>
            <code className="language-javascript z-0">
              {codingText}
            </code>
          </pre>
        </div>
      </div>
      <DemoReport component={motion.div}
                  animate={controlDemoReport}
                  className={clsx( "w-2/3","shadow-2xl", "z-10")}
                  questionText={texts.questionText}
                  questionNum={questionNum}
                  marksScored={10}
      >
        <div className="flex flex-col w-full gap-2 justify-center items-center">
          <div className="flex justify-center w-15 border-4 border-green rounded-full">
            <AnimatedDoubleTick />
          </div>
          <div className="flex text-green-light">All test cases passed</div>
        </div>
      </DemoReport>
    </div>
  );
};

export default CodingDemoItem;
