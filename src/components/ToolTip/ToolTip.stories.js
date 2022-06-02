import React from "react";
import ToolTip from "./index";

export default {
  component: ToolTip,
  title: "Ui/ToolTip",
}

const Template = args => <ToolTip {...args}/>

export const Default = Template.bind({});
Default.args = {
  tooltipHeading: "ToolTip Heading",
  tooltipDescription: "Here is ToolTip Description ...",
  iconsStyle: "text-primary",
  disabled: false
}
