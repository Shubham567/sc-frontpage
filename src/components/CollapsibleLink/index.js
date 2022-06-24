import React, {useState} from 'react';
import Link from "next/link";
import {IoChevronForwardSharp} from "react-icons/io5";
import {IoChevronDown} from "react-icons/io5";
import PropTypes from "prop-types";
import EffectAppearOnView from "../Effects/EffectAppearOnView";

const CollapsibleLink = ({title, dropDownItems}) => {
  const [toggleView, setToggleView] = useState(true);
  return (
    <div className="flex flex-col p-2 border-b-2 border-b-gray-hard-light">
      <p onClick={() => {
        setToggleView(!toggleView)
      }} className="font-semibold text-dark flex items-center justify-between">
        {title}
        <span>
          {!toggleView ? <IoChevronForwardSharp className="inline-block text-gray-extra-dark"/> :
            <IoChevronDown className="inline-block text-gray-extra-dark"/>}
        </span>
      </p>
      {
        console.log(dropDownItems)
      }
      {
        toggleView && <EffectAppearOnView>
          <div style={{marginLeft: "5px"}} className="flex mt-2 border-l-2 flex-col">
            {
              dropDownItems.map(mi => <div className="text-primary flex items-center p-2 pl-0" key={mi.name}>
                {console.log(mi)}
                <span style={{width: "6px", height: "6px"}} className="-ml-2 bg-orange"></span>
                <div style={{height: "2px"}} className="w-2 inline-block mr-2 h-1 bg-primary">
                </div>
                <Link href={mi.href}>
                  {mi.name}
                </Link>
              </div>)
            }
          </div>
        </EffectAppearOnView>
      }
    </div>
  );
};

export default CollapsibleLink;

CollapsibleLink.propTypes = {
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  dropDownItems: PropTypes.arrayOf({
    name: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    menuItems: PropTypes.object
  })
}
