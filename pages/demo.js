import React from 'react';
import CollapsibleCard from "../src/components/CollapsibleCard";
import { IoIosPhonePortrait } from "react-icons/io";

const Component = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
  )
}

const Demo = () => {
  return (
    <div>
      <CollapsibleCard
        topCollapsibleComponent={
          <div className={"flex justify-center align-center"}>
            <img src="/images/brands/merckLogo.png" alt="image"/>
          </div>
        }
        collapsibleComponent={<Component/>}
        bgHeading={"bg-gray-light"}
        bgCollapsible={"bg-yellow"}
        heading={<div className={"flex align-center"}> <div>Top View</div></div>}
      />
      <CollapsibleCard
        collapsibleComponent={<Component/>}
        bgHeading={"bg-gray-light"}
        bgCollapsible={"bg-yellow"}
        heading={<div className={"flex align-center"}> <h1>Top View</h1></div>}
      />
      <CollapsibleCard collapsibleComponent={<Component/>} bgHeading={"bg-gray-light"} bgCollapsible={"bg-blue"} heading={<div className={"flex align-center"}><h1><IoIosPhonePortrait /></h1> <h1>Top View</h1></div>}/>
    </div>
  );
};

export default Demo;
