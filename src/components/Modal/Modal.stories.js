import Modal from "./index";
import PropTypes from "prop-types";
import Button from "../Button";

export default {
  component: Modal,
  title: "Modal"
}

const Template = args => <div><div id="portal" /> <Modal {...args}/></div>

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: "This is Modal title",
  children: "This modal has 3 components. title, children and actions. This section is children",
  actions: <><p>This are actions &nbsp;&nbsp;</p> <Button outlined className="text-sm">Cancel</Button> <Button className="text-sm">Confirm</Button></>
}
