import React from 'react';
import OtherPlatformTab from "./OtherPlatformTab";

export default {
  component: OtherPlatformTab,
  title: "Ui/section/otherPlatformTab",
}

const Template = args => <OtherPlatformTab {...args}/>

export const Default = Template.bind({});
Default.args = {
  tabData:  [
    {
      id: 1,
      heading: "Team Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
    },
    {
      id: 2,
      heading: "ATS Integration",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
    },
    {
      id: 3,
      heading: "Workspace",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
    }
  ]
}
