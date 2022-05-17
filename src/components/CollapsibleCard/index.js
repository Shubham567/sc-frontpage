import React, {useState} from 'react';
import clsx from "clsx";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import Card from "../Card";
import PropTypes from "prop-types";

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
    <div className={"flex max-w-sm m-2 text-dark justify-center align-center"}>
      <Card fluid>
        <div className={clsx("w-full p-2 rounded-md", bgHeading)}>
          <div className={clsx("w-full mb-2 md:block", currentState)}>{topCollapsibleComponent && topCollapsibleComponent}</div>
          <div className={"w-full flex align-center justify-between"}>
            <div className={"mb-2 font-semibold"}>{heading && heading}</div>
            <div onClick={collapseHandler} className="cursor-pointer md:hidden">
              {isCollapse ? closeIcon ? closeIcon : <IoIosArrowUp/> : openIcon ? openIcon : <IoIosArrowDown/>}
            </div>
          </div>
          <div className={clsx("p-2 -mb-2 -ml-2 -mr-2 rounded-b-md md:block", bgCollapsible, currentState)}>
            {
              collapsibleComponent && collapsibleComponent
            }
          </div>
        </div>
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
