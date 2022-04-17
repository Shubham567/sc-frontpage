import {useEffect, useState} from "react";

const extractorOfUsefulData = ({availWidth,availHeight,height,width}) => ({availWidth,availHeight,height,width})

const useScreenSize = () => {

  const [screen,setScreen] = useState( {height : 400, width: 500, availHeight: 400, availWidth: 500});

  useEffect(() => {
    setScreen(extractorOfUsefulData(window.screen));

    window.addEventListener("resize", e => {
      setScreen(window.screen);
    })

  }, [])


  return screen;

}

export default useScreenSize;
