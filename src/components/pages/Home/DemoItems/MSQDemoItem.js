import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from "framer-motion";
import DemoReport from "./DemoReport";
import clsx from "clsx";

const texts = {
  questionText: "Which among these are the defining properties of living organism?",
  options: [
    {text: "Growth", active: false},
    {text: "Metabolism", active: true},
    {text: "Consciousness", active: true},
    {text: "Reproduction", active: false},
  ]
}

const MSQDemoItem = ({questionNum}) => {
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
          <div className="flex w-1/3 text-sm text-purple-dark">Question {questionNum}</div>
          <div className="flex w-1/3 text-sm text-purple-dark justify-center">Multiple Select</div>
          <div className="flex w-1/3 text-sm text-purple-dark justify-end pr-5">Biology</div>
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
              <input type="checkbox" name="mcq" checked={t.active && markOption} disabled/> {t.text}
            </motion.div>)
            }
        </div>
      </div>
      <DemoReport component={motion.div}
                  animate={controlDemoReport}
                  className={clsx("w-2/3", "shadow-2xl")}
        questionText={texts.questionText}
        questionNum={questionNum}
        marksScored={2}
      >
        <div className="flex flex-col w-full gap-2">
          {
            texts.options.filter(opt => opt.active).map((opt, i) => <div key={i} className="flex w-full border rounded-xl border-green text-green items-center gap-3 p-2">
              <input type="checkbox" checked disabled/><span>{opt.text}</span>
            </div>)
            }
          <div className="text-xs text-gray">
            All selected option are correct
          </div>
        </div>
      </DemoReport>
    </div>
  );
};

export default MSQDemoItem;
