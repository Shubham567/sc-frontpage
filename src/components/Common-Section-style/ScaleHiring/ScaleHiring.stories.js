
import ScaleHiring from "./ScaleHiring";
import React from 'react';

export default {
  component: ScaleHiring,
  title: "Ui/section/scaleHiring",
}

const requestDemoHandler = () => {};
const calculateROIHandler = () => {};

const Template = args => <ScaleHiring {...args}/>

export const Default = Template.bind({});
Default.args = {
   title: "Hire Affoardably At Scale",
  requestDemo: requestDemoHandler,
  calculateROI: calculateROIHandler
}
