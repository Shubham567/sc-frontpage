import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from "framer-motion";
import clsx from "clsx";
import DemoReport from "./DemoReport";
import DragIcon from "../../../svgs/DragIcon";
import AnimatedDoubleTick from "../../../svgs/AnimatedDoubleTick";
import DragHandIcon from "../../../svgs/DragHandIcon";

const texts = {
  questionText: "Reorder following countries based on their population in descending order.",
  options: [
    {text: "USA", order: 1},
    {text: "Australia", order: 2},
    {text: "Japan", order: 3},
    {text: "India", order: 0},
  ],
}

const RankingDemoItem = ({questionNum}) => {
  const [questionText,setQuestionText] = useState("");
  const controls = useAnimation();
  const controlDemoReport = useAnimation();
  const [dragOptions,setDragOptions] = useState(texts.options);

  const [dragging,setDragging] = useState(-1);

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

    promise.then(async () => {
      return new Promise( async (resolve) => {
        for(let x = 0; x < dragOptions.length; x++) {
          setDragging(x);
          await controls.start(({order,index}) => order === x ? ({
            y: 32 * (order - index),
            transition: {
              duration: 0.25
            }
          }) : {});
          // setDragOptions(prev => {
          //   let indexOfDraggingItem = prev.findIndex(item => item.order === x);
          //   let tmp = [...prev];
          //   let newListItems = tmp.splice(indexOfDraggingItem,1);
          //   newListItems.push(...tmp);
          //   console.log( "item s ",newListItems);
          //   return newListItems;
          // })
          setDragging(-1);
        }
        resolve();
      })

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
          <div className="flex w-1/3 text-sm">Question {questionNum}</div>
          <div className="flex w-1/3 text-sm justify-center">Ranking</div>
          <div className="flex w-1/3 text-sm justify-end pr-5">General Knowledge</div>
        </div>
        <div className="p-8">
          <p>
            {questionText}
          </p>
        </div>
        <div className="flex flex-col pl-12 gap-2">
          {
            dragOptions.map((t, i) => <motion.div
              key={i}
              custom={{order:t.order, index: i}}
              animate={controls}
              className="flex gap-2 items-center bg-white">
               <DragIcon className="fill-gray-dark"/>{ dragging === t.order && <DragHandIcon className="mt-3 absolute fill-white"/>} {t.text}
            </motion.div>)
            }
        </div>
      </div>
      <DemoReport component={motion.div}
                  animate={controlDemoReport}
                  className={clsx( "w-2/3","shadow-2xl")}
                  questionText={texts.questionText}
                  questionNum={questionNum}
                  marksScored={4}
      >
        <div className="flex flex-col w-full gap-2 justify-center items-center">
          <div className="flex justify-center w-15 border-4 border-green rounded-full">
            <AnimatedDoubleTick />
          </div>
          <div className="flex text-green-light">All orders are Correct</div>
        </div>
      </DemoReport>
    </div>
  );
};

export default RankingDemoItem;
