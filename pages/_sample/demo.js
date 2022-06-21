import React from 'react';
import EffectAppearOnView from "../../src/components/Effects/EffectAppearOnView";
import ThreeCards from "../../src/components/ThreeCards";

const arr = [2,12,31,312,3,1]
arr.length = 10;

const Demo = () => {

  // const [value,setValue] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      {/*<div className="max-w-md w-50">*/}
      {/*<ProgressWithText max={100} value={value}  />*/}
      {/*</div>*/}
      {/*<input type="range" min={0} max={100}  onChange={e => setValue(e.target.value)}/>*/}
      {
        arr.map((i,k) => <div key={k}>
          <EffectAppearOnView className="mb-96 w-full">
            <ThreeCards data={[
              {heading: "Customized Assessment", content: "Team SupportLorem ipsum dolor sit amet"},
              {heading: "Downloadable Report", content: "Lorem ipsum dolor sit amet"},
              {heading: "Question Types", content: "Lorem ipsum dolor sit amet"},]}/>
          </EffectAppearOnView>
          <EffectAppearOnView className="mb-96">
            <ThreeCards mainTitle={"Enterprise Ready"}
                        bgColor="primary" data={[
              {heading: "Team Support", content: "Team SupportLorem ipsum dolor sit amet"},
              {heading: "ATS Integration", content: "Lorem ipsum dolor sit amet"},
              {heading: "WorkSpace", content: "Lorem ipsum dolor sit amet"},
            ]}/>
          </EffectAppearOnView>
        </div>)
      }
    </div>
  );
};

export default Demo;
