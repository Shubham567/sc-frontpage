import EffectProgressBarIncrement from "./index";

export default {
  title: "effects/EffectProgressBarIncrement",
  component: EffectProgressBarIncrement,
  argTypes : {
    targetValue: { control :  { type: 'range', min: 1, max: 100, step: 1 }}
  }
}

const Template = args => <EffectProgressBarIncrement {...args} />

export const Default = Template.bind({});
Default.args = {
  targetValue: 47
}
