import {useEffect, useState} from "react";

const extractorOfUsefulData = ({availWidth,availHeight,height,width}) => ({availWidth,availHeight,height,width})

class ScreenObj{
  constructor(obj) {
    try{
      this.height = obj.height;
      this.width = obj.width;
      this.availHeight = obj.availHeight;
      this.availWidth= obj.availWidth;
    }
    catch (e) {
      this.height = 400;
      this.width = 500;
      this.availHeight = 400;
      this.availWidth= 500;
    }
  }
}

const useScreenSize = () => {

  const [screen,setScreen] = useState( new ScreenObj());

  useEffect(() => {
    setScreen(extractorOfUsefulData(window.screen));

    window.addEventListener("resize", e => {
      console.log("screen resize event");
      setScreen(new ScreenObj(window.screen));
    })

  }, [])


  return screen;

}

export default useScreenSize;
