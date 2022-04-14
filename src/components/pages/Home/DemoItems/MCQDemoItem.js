import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from "framer-motion";
import clsx from "clsx";
import DemoReport from "./DemoReport";

const texts = {
  questionText: "What is the ratio of speed to the magnitude of velocity when the body is moving in one direction?",
  options: [
    {text: "Less than one", active: false},
    {text: "Greater than one", active: true},
    {text: "Equal to one", active: false},
    {text: "Greater than or equal to one", active: false},
  ],
  correctOptionIndex : 2
}

const MCQDemoItem = ({questionNum}) => {
  const [questionText,setQuestionText] = useState("");
  const controls = useAnimation();
  const controlDemoReport = useAnimation();
  const [markOption,setMarkOption] = useState(false);

  useEffect(() => {
    let timer;
    let promise = new Promise((resolve, reject) => {
      const questionWords = texts.questionText.split(" ");
      timer = setInterval(() => {
        setQuestionText(prev => {
          const prevWords = prev === "" ? 0 : prev.split(" ")
          if(prevWords.length === questionWords.length){
            clearInterval(timer);
            resolve();
            return prev;
          }
          return (prev + " " + questionWords[prevWords.length || 0]);
        })
      }, 16);
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
      setMarkOption(true);
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
        <div className="flex bold">
          <div className="flex w-1/3 text-sm text-purple-dark">Question 1</div>
          <div className="flex w-1/3 text-sm text-purple-dark justify-center">Multiple Choice</div>
          <div className="flex w-1/3 text-sm text-purple-dark justify-end pr-5">Physics</div>
        </div>
        <div className="p-8">
          <p>
            {questionText}
          </p>
        </div>
        <div className="flex flex-col pl-12 gap-2">
          {
            texts.options.map((t, i) => <motion.div
              key={i}
              custom={i}
              animate={controls}
              initial={{opacity: 0, y : 20}}
              className="flex gap-2 items-center">
              <input type="radio" name="mcq" checked={t.active && markOption} disabled/> {t.text}
            </motion.div>)
            }
        </div>
      </div>
      <DemoReport component={motion.div}
                  animate={controlDemoReport}
                  className={clsx( "w-2/3","shadow-2xl")}
                  questionText={texts.questionText}
                  questionNum={questionNum}
                  marksScored={0}
      >
        <div className="flex flex-col w-full gap-2">
          <div className="text-xs text-gray">
            Selected Answer
          </div>
          {
            texts.options.filter(opt => opt.active).map((opt, i) => <div key={i} className="flex w-full border rounded-xl border-red text-red items-center gap-3 p-2">
              <input type="radio" checked disabled/><span>{opt.text}</span>
            </div>)
          }
          <div className="text-xs text-gray">
            Correct Answer
          </div>
          <div className="flex w-full border rounded-xl border-green text-green items-center gap-3 p-2">
            <input type="radio" disabled/><span>{texts.options[texts.correctOptionIndex].text}</span>
          </div>
        </div>
      </DemoReport>
    </div>
  );
};

export default MCQDemoItem;
