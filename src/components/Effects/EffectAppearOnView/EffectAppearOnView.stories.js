import EffectAppearOnView from "./index";


export default {
  title: "Effects/EffectAppearOnView",
  component: EffectAppearOnView,
  argType: {

  }
}

const Template = args => <EffectAppearOnView {...args} />

export const Default = Template.bind({});
Default.args = {
  children: <div className="w-48 h-48 rounded bg-primary shadow-2xl" />,
  className: "flex"
}

