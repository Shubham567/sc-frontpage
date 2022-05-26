import Actions from "./Actions";
import React from "react";

export default {
  component: Actions,
  title: "Ui/section/Actions",
}

const actionHandler = () => {}

const Template = args => <Actions {...args}/>

export const Default = Template.bind({});
Default.args = {
  actionData:[
    {
      id: 1,
      heading: "Lorem ipsum dolor sit amet Lorem ipsum ",
      buttonLabel: "Button",
      actionHandler: actionHandler
    },
    {
      id: 2,
      heading: "Lorem ipsum dolor sit amet Lorem ipsum ",
      buttonLabel: "Button",
      actionHandler: actionHandler
    }
  ]
}