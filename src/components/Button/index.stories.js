import Button from "./index";
import CallToActionBtn from "./CallToActionBtn"

export default {
  components: Button,
  title: "Button"
}

const Template = args => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
  children:  "Hello World!",
  className: "text-xl"
}

export const CallToActionButton = CallToActionBtn.bind({});
CallToActionButton.args = {
  children: "Get Started",
}
