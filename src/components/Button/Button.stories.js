import Button from "./index";
// import CallToActionBtn from "./CallToActionBtn"

export default {
  components: Button,
  title: "Ui/Button",
  argTypes: {
    color: {
      options: ['primary', 'secondary', null],
      control: {type: 'select'},
    },
    variant: {
      options: [ 'contained', 'outlined', null],
      control: {type: 'select'},
    },
    size: {
      options: ['sm','md','lg','xl'],
      control: {type: 'radio'},
    },
    rounded: {
      options: [true, false],
      control: {type: 'radio'},
    }
  }
}

const Template = args => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
  children:  "Button",
  color: "primary",
  variant: "contained",
}


export const OutLined = Template.bind({})
OutLined.args = {
  children: "OutLined",
  variant: "outlined",

}

export const Rounded = Template.bind({});
Rounded.args = {
  children:  "Button",
  color: "secondary",
  variant: "contained",
  size: "md",
  rounded: true,
}

export const Small = Template.bind({});
Small.args = {
  children: "Small Button",
  size: "sm",
  variant: "contained",
}
export const Large = Template.bind({});
Large.args = {
  children: "Small Button",
  size: "lg",
  variant: "contained",
}
export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: "Small Button",
  size: "xl",
  variant: "contained",
}

//
// export const CallToActionButton = CallToActionBtn.bind({});
// CallToActionButton.args = {
//   children: "Get Started",
// }
