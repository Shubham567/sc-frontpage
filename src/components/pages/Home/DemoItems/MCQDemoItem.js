import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from "framer-motion";

const texts = {
  questionText: "What is the ratio of speed to the magnitude of velocity when the body is moving in one direction?",
  options: [
    {text: "Less than one", active: false},
    {text: "Greater than one", active: true},
    {text: "Equal to one", active: false},
    {text: "Greater than or equal to one", active: false},
  ]
}

const MCQDemoItem = () => {
  const [questionText,setQuestionText] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    let timer;
    let promise = new Promise((resolve, reject) => {
      timer = setInterval(() => {
        setQuestionText(prev => {
          if(prev.length === texts.questionText.length){
            clearInterval(timer);
            resolve();
            return prev;
          }
          return (prev + texts.questionText[prev.length]);
        })
      }, 10);
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
    }).then(() => console.log("Animation Finished"))

    return () => clearInterval(timer);
  }, [])

  return (
    <div className="w-full pl-5 pt-5">
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
              <input type="radio" name="mcq" checked={t.active} disabled/> {t.text}
            </motion.div>)
            }
        </div>
      </div>
    </div>
  );
};

export default MCQDemoItem;
