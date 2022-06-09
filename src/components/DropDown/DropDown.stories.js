import MenuItems from "./MenuItems";

export default {
  component: MenuItems,
  title: "ui/Dropdown",
}

const menuItems = [
  {
    title: "Home",
  },
  {
    title: "Services",
    submenu: [
      {
        title: "web design",
      },
      {
        title: "web development",
        submenu: [
          {
            title: "Frontend",
          },
          {
            title: "Backend",
            submenu: [
              {
                title: "NodeJS",
              },
              {
                title: "PHP",
              },
            ],
          },
        ],
      },
      {
        title: "SEO",
      },
    ],
  },
  {
    title: "About",
    submenu: [
      {
        title: "Who we are",
      },
      {
        title: "Our values",
      },
    ],
  },
];

const Template = (args) => <nav>
  <ul className="flex gap-3">
    {menuItems.map((menu, index) => {
      return <MenuItems items={menu} key={index} depthLevel={0} {...args}/>;
    })}
  </ul>
</nav>

export const Default = Template.bind({});
Default.args = {}
