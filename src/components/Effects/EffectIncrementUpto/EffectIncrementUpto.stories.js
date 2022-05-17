import EffectIncrementUpto from "./index";


export default {
  title: "Effects/EffectIncrementUpto",
  component: EffectIncrementUpto,
  argType: {
    wrapperComponent: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      controls: {type : "select"}
    }
  }
}

const Template = args => <EffectIncrementUpto {...args} />

export const Default = Template.bind({});
Default.args = {
  targetValue : 99,
  maxIncrementDelay: 24,
  children: "%"
}

