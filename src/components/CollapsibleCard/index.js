import React, {useState} from 'react';
import clsx from "clsx";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import Card from "../Card";
import PropTypes from "prop-types";
import EffectAppearOnView from "../Effects/EffectAppearOnView";

const CollapsibleCard = (
  {
    openIcon,
    closeIcon,
    heading,
    topCollapsibleComponent,
    collapsibleComponent,
    bgHeading,
    bgCollapsible,
    ...props
  }
) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [currentState, setCurrentState] = useState("hidden");

  const collapseHandler = () => {
    setIsCollapse(!isCollapse)
    setCurrentState(currentState === "hidden" ? "block" : "hidden")
  }

  return (
    <div className={"flex min-w-full md:min-w-0 m-4 text-dark justify-center items-center md:max-w-sm"}>
      <Card className="h-full shadow-md" fluid>
        {/*<EffectAppearOnView>*/}
        <div onClick={collapseHandler} className={clsx("w-full md:min-w-full md:max-w-full p-2 rounded-md", bgHeading)}>
          <EffectAppearOnView>
            <div className={clsx("w-full mb-2 md:block flex justify-center items-center", currentState)}>{topCollapsibleComponent && topCollapsibleComponent}</div>
          </EffectAppearOnView>
          <div className={"w-full flex items-center justify-between"}>
            <EffectAppearOnView><div className={"font-semibold"}>{heading && heading}</div></EffectAppearOnView>
            <EffectAppearOnView> <div className="cursor-pointer md:hidden">
              {isCollapse ? closeIcon ? closeIcon : <IoIosArrowUp/> : openIcon ? openIcon : <IoIosArrowDown/>}
            </div>
            </EffectAppearOnView>
          </div>
          <EffectAppearOnView>
            <div className={clsx("p-2 -mb-2 -ml-2 -mr-2 rounded-b-md md:block", bgCollapsible, currentState)}>
              {
                collapsibleComponent && collapsibleComponent
              }
            </div>
          </EffectAppearOnView>
        </div>
        {/*</EffectAppearOnView>*/}
      </Card>
    </div>
  );
};

CollapsibleCard.propTypes = {
  openIcon: PropTypes.node,
  closeIcon:  PropTypes.node,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  topCollapsibleComponent: PropTypes.node,
  collapsibleComponent: PropTypes.node,
  bgHeading: PropTypes.string,
  bgCollapsible: PropTypes.string,
}

export default CollapsibleCard;
