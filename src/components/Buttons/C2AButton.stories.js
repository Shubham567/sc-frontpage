import C2AButton from "./C2AButton";

export default {
  components: C2AButton,
  title: "Call to Action Button"
}

const Template = args => <C2AButton {...args} />

export const Default = Template.bind({});
Default.args = {
  children:  "Hello World!",
  className: ""
}
