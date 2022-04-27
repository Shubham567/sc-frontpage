import {useEffect} from "react";

const useEscapeKey = (onEscapeKeyPress) => {
  useEffect(() => {
    const handleEscKey = e => {
      if(e.key === "Escape"){
        onEscapeKeyPress?.();
      }
    }

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    }
  }, [])
}

export default useEscapeKey;
