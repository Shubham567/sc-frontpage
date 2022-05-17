import React, {useState} from 'react';
import CollapsibleCard from "../src/components/CollapsibleCard";
import { IoIosPhonePortrait } from "react-icons/io";
import ProgressWithText from "../src/components/ProgressWithText";
import EffectProgressBarIncrement from "../src/components/Effects/EffectProgressBarIncrement";

const Demo = () => {

  // const [value,setValue] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-5">
      {/*<div className="max-w-md w-50">*/}
      {/*<ProgressWithText max={100} value={value}  />*/}
      {/*</div>*/}
      {/*<input type="range" min={0} max={100}  onChange={e => setValue(e.target.value)}/>*/}
      <EffectProgressBarIncrement targetValue={10/2} />
    </div>
  );
};

export default Demo;
