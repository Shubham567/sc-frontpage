import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from "framer-motion";
import clsx from "clsx";
import DemoReport from "./DemoReport";
import PdfFile from "../../../svgs/PdfFile";
import CustomReportIcon from "../../../svgs/CustomReportIcon";

const texts = {
  questionText: "Please do upload design portfolio here in pdf format",
  fileName : [
    "portfolio.pdf",
    // "resume.pdf"
  ],
}

function preventDefault (e) {
  e.preventDefault();
}

const CustomDemoItem = ({questionNum}) => {
  const [questionText,setQuestionText] = useState("");
  const controls = useAnimation();
  const controlUploadBox = useAnimation();
  const controlDemoReport = useAnimation();
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    let timer = null;
    let progressInterval = null;
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
      return controls.start({
        opacity: 1,
        x: 100, y: 20,
        transition: {
          duration: 1
        }
      });
    })
      .then(() => {
      return controlUploadBox.start({
        borderRadius: "20px",
        transition: {
          duration: 0.2
        }
      });
    }).then(()=> new Promise(resolve => {
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
    ).then(() => {
      return controlDemoReport.start({
        x: 0,
        opacity: 1
      });
    })

    return () => {
      clearInterval(timer);
      clearInterval(progressInterval);
    };
  }, [])

  return (
    <div className="w-full pl-5 pt-5 relative">
      <div className="flex flex-col w-full gap-4">
        <div className="flex bold">
          <div className="flex w-1/3 text-sm text-purple-dark">Question {questionNum}</div>
          <div className="flex w-1/3 text-sm text-purple-dark justify-center">Custom Question</div>
          <div className="flex w-1/3 text-sm text-purple-dark justify-end pr-5">Design</div>
        </div>
        <div className="p-8">
          <p>
            {questionText}
          </p>
        </div>
        <div className="flex flex-col pl-12 gap-2 px-4">
          <motion.div className="border border-2 border-dashed border-green p-6 flex justify-center items-center rounded" animate={controlUploadBox}>
            <span>
              Drag a file or Click to upload
            </span>
          </motion.div>
          <motion.div className="absolute" initial={{opacity: 0,y : 200, x: 0}} animate={controls}>
            <PdfFile />
          </motion.div>
          {
            progressValue > 0 &&
            <div className="flex flex-col gap-2">
              <div className="text-xs text-gray">{progressValue > 0  && progressValue < 100 ?"Uploading..." : "Files Uploaded"}</div>
            {texts.fileName.map(file => <div key={file} className="flex items-center gap-2 px-3"><span>
              {
                file
              }
            </span>
              <progress className="" value={progressValue} max={100}/>
            </div>)}

          </div>}
        </div>
      </div>
      <DemoReport component={motion.div}
                  animate={controlDemoReport}
                  className={clsx( "w-2/3","shadow-2xl")}
                  questionText={texts.questionText}
                  questionNum={questionNum}
                  marksAssigned={20}
                  noLiveReport
      >
        <div className="flex flex-col w-full gap-2 items-center">
          <div className="text-xs text-gray">
            Uploaded File
          </div>
          <div className="flex">
            <CustomReportIcon/>
          </div>
        </div>
      </DemoReport>
    </div>
  );
};

export default CustomDemoItem;
