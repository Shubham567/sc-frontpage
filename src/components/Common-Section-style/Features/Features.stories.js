import React from 'react';
import Features from "./Features";
import Image from "next/image";

export default {
  component: Features,
  title: "Ui/section/Features",
}

const Template = args => <Features {...args}/>

export const Default = Template.bind({});
Default.args = {
  featureData: [
    {
      id: 1,
      image: <Image src="/images/young-businesswoman.png" width="700px" height="400px"/>,
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
      direction: "flex-col xl:flex-row"
    },
    {
      id: 2,
      image: <Image src="/images/young-businesswoman.png" width="700px" height="400px"/>,
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
      direction: "flex-col xl:flex-row-reverse"
    }
  ]
}
