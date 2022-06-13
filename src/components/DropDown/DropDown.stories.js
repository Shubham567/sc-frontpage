import DropDown from "./index";

export default {
  component: DropDown,
  title: "ui/Dropdown",
}

const menuItems = {
  title : "Parent Link",
  menuItems : [
    {
      name: "Child 1",
      href: "/someLink"
    },
    {
      name: "Child 2",
      onClick: () => alert("child 2")
    },
    {
      name: "Child 3",
      onClick: () => alert("child 3")
    },
  ]
}

const Template = (args) => <nav>
  <DropDown data={menuItems} />
</nav>

export const Default = Template.bind({});
Default.args = {}
