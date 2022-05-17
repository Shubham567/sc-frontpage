import CollapsibleCard from "./index";
import React from "react";

export default {
  component: CollapsibleCard,
  title: "Ui/CollapsibleCard",
}

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

const Template = args => <CollapsibleCard {...args}/>

export const Default = Template.bind({});
Default.args = {
  topCollapsibleComponent:
    <div className={"flex justify-center align-center"}>
      <img src="/images/brands/merckLogo.png" alt="image"/>
    </div>,

  collapsibleComponent: <Component/>,
  heading: <div className={"flex align-center"}>
    <div>Top View</div>
  </div>
}

export const WithBg = Template.bind({});
WithBg.args = {
  topCollapsibleComponent:
    <div className={"flex justify-center align-center"}>
      <img src="/images/brands/merckLogo.png" alt="image"/>
    </div>,

  collapsibleComponent: <Component/>,
  bgHeading: "bg-gray-light",
  bgCollapsible: "bg-yellow",
  heading: <div className={"flex align-center"}>
    <div>Top View</div>
  </div>
}
