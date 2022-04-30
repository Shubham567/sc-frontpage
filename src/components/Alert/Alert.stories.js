import Alert from "./index";


export default {
  component: Alert,
  title: "Ui/Alert"
}

const Template = args => <div><div id="portal" /> <Alert {...args}/></div>

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: "Careful",
  children: "Doing this will delete your account permanently. Are you sure you want to delete?",

}
