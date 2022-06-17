import React, {useState} from 'react';
import clsx from "clsx";
import PropTypes from "prop-types";
import EffectAppearOnView from "../Effects/EffectAppearOnView";
import InfoDetails from "../svgs/InfoDetails";

const ToolTip = ({tooltipHeading, tooltipDescription, iconsStyle, disabled}) => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <EffectAppearOnView>
      <div className="relative inline-block transition flex duration-300 ease-out">
        <InfoDetails bg={disabled ? "gray" : "gray-light"} className={clsx("text-2xl", iconsStyle, disabled ? "cursor-default fill-gray-extra-light": "cursor-pointer fill-gray-light")} onMouseEnter={() => !disabled && setTooltipStatus(1)} onMouseLeave={() => !disabled && setTooltipStatus(0)} />
        {/*<IoInformationCircleOutline className={clsx("text-2xl", iconsStyle, disabled ? "cursor-default": "cursor-pointer")} onMouseEnter={() => !disabled && setTooltipStatus(1)} onMouseLeave={() => !disabled && setTooltipStatus(0)}  />*/}
        {tooltipStatus == 1 && (<div style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"}} className="absolute z-40 -left-2 top-8">
          <div className="py-0">
            <div className="mx-auto w-96 container max-w-[228px] px-4 py-4 bg-white rounded relative">
              <div>
                <p className="text-sm font-semibold leading-none text-gray-800">{tooltipHeading && tooltipHeading}</p>
                <p className=" text-xs leading-none text-gray-600 pt-2 pb-2">{tooltipDescription && tooltipDescription}</p>
                <svg className="rotate-180 absolute z-10  top-[-9px]" width={16} height={10} viewBox="0 0 16 10" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </EffectAppearOnView>
  )
}

export default ToolTip;

ToolTip.prototype = {
  tooltipHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  tooltipDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconsStyle: PropTypes.string,
  disabled: PropTypes.bool
}

