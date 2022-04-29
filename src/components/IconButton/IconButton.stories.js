import IconButton from "./index";
import {FaFacebook} from "react-icons/all";

export default {
  title: "IconButton",
  component: IconButton
}

const Template = (args) => <>
  <IconButton aria-label="Fb" {...args}><FaFacebook /></IconButton>
</>

export const Default = Template.bind({});

Default.args = {
  primary : true,
  secondary : false,
  contained: true,
  large: true,
  xl: false
}
