import React from "react";
import ToggleButton from "./index";

export default {
  component: ToggleButton,
  title: "Ui/ToggleButton",
}

const Template = args => <ToggleButton {...args}/>

export const Default = Template.bind({});
Default.args = {
  isToggleOn: (toggleStatus) => {console.log(toggleStatus)}
}
