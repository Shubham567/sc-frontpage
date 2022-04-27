import Button from "./index";
import CallToActionBtn from "./CallToActionBtn"

export default {
  components: Button,
  title: "Button"
}

const Template = args => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
  children:  "Button",
  secondary: false,
  outlined: false
}

export const Rounded = Template.bind({});
Rounded.args = {
  children:  "Button",
  secondary: false,
  outlined: false,
  className: "rounded-full"
}

export const CallToActionButton = CallToActionBtn.bind({});
CallToActionButton.args = {
  children: "Get Started",
  secondary: false,
  outlined: false
}
