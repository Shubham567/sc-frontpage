import React from 'react';
import clsx from "clsx";
import EffectAppearOnView from "../../../Effects/EffectAppearOnView";

const SingleFeature = ({featureName, style}) => {
  return (
    <div className={clsx("m-2 text-xl inline-block pl-4 sm:pl-12 pr-4 sm:pr-12 pt-1 pb-1", style)}>
      <EffectAppearOnView>
        {
          featureName && featureName
        }
      </EffectAppearOnView>
    </div>
  );
};

export default SingleFeature;
