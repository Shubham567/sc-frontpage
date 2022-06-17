import ProgressWithText from "./index";

export default {
  title: "ui/ProgressWithText",
  component: ProgressWithText,
  argTypes : {
    value: { control :  { type: 'range', min: 1, max: 100, step: 1 }}
  }
}

const Template = (args) => <ProgressWithText {...args} />


export const Default = Template.bind({});
Default.args = {
  max : 100,
  value: 47
}
