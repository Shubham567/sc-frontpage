import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from "framer-motion";
import clsx from "clsx";
import DemoReport from "./DemoReport";
import PdfFile from "../../../svgs/PdfFile";
import CustomReportIcon from "../../../svgs/CustomReportIcon";
import Image from "next/image";
import interviewImage from "../../../../../assets/interview.png";
import PlayIcon from "../../../svgs/PlayIcon";


const texts = {
  questionText: "Tell us about yourself.",
  transcript: "I am blah blah blah blah blah blah blah blah ..."
}

const VideoDemoItem = ({questionNum}) => {
  const [questionText,setQuestionText] = useState("");
  const controlImageBox = useAnimation();
  const controlDemoReport = useAnimation();
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    let timer = null;
    let progressInterval = null;


    let promise = new Promise((resolve) => {
      const questionWords = texts.questionText.split(" ");
      timer = setInterval(() => {
        setQuestionText(prev => {
          const prevWords = prev === "" ? 0 : prev.split(" ");
          if(prevWords.length === questionWords.length){
            clearInterval(timer);
            resolve();
            return prev;
          }
          return (prev + " " + questionWords[prevWords.length || 0]);
        })
      }, 16);
    });


    promise.then(() => controlImageBox.start({
        borderRadius: "20px",
        transition: {
          duration: 0.2
        }
      })
    ).then(() => new Promise(resolve => {
      //
        progressInterval = setInterval(() => {
          setProgressValue(prev => {
            if(prev === 100){
              resolve();
              clearInterval(progressInterval);
              return prev;
            }
            else
              return prev + 4;
          })

        }, 16);
      })
    ).then(() =>  controlDemoReport.start({
        x: 0,
        opacity: 1
      }))

    return () => {
      clearInterval(timer);
      clearInterval(progressInterval);
    };
  }, [])

  return (
    <div className="w-full pl-5 pt-5 relative">
      <div className="flex flex-col w-full gap-4">
        <div className="flex bold text-primary">
          <div className="flex w-1/3 text-sm">Question {questionNum}</div>
          <div className="flex w-1/3 text-sm justify-center">Audio Video</div>
          <div className="flex w-1/3 text-sm justify-end pr-5">Speaking</div>
        </div>
        <div className="p-8">
          <p>
            {questionText}
          </p>
        </div>
        <div className="flex flex-col pl-12 gap-2 px-4">
          <motion.div className="flex justify-center items-center rounded" animate={controlImageBox}>
            <Image src={interviewImage} height={200} width={300} alt="One way interview"/>
          </motion.div>

          {
            progressValue > 0 &&
            <div className="flex flex-col gap-2 ">
              <div className="flex items-center gap-2 px-3 justify-center"><span>
                {progressValue > 0  && progressValue < 100 ?"Uploading Video..." : "Video Uploaded"}
              </span>
              <progress className="" value={progressValue} max={100}/>
            </div>

          </div>}
        </div>
      </div>
      <DemoReport component={motion.div}
                  animate={controlDemoReport}
                  className={clsx( "w-2/3","shadow-2xl")}
                  questionText={texts.questionText}
                  questionNum={questionNum}
                  noLiveReport
      >
        <div className="flex flex-col w-full gap-2 items-center">
          <div className="text-xs text-gray">
            Video
          </div>
          <div className="flex relative">
            <Image src={interviewImage} height={200} width={300} alt="One way interview"/>
            <div className="absolute w-full h-full flex justify-center items-center" style={{background: "rgba(255,255,255,0.7)"}}>
              <PlayIcon />
              <div>Play</div>
            </div>
          </div>
          <div className="text-xs text-gray">
            Audio Transcript:
          </div>
          <div className="text-xs text-gray-dark">
            {texts.transcript}
          </div>
        </div>
      </DemoReport>
    </div>
  );
};

export default VideoDemoItem;
