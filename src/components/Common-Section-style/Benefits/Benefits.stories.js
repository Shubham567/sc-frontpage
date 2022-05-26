import Benefits from "./Benefits";
import React from "react";
import Features from "../Features/Features";
import Image from "next/image";

export default {
  component: Benefits,
  title: "Ui/section/Benefits",
}

const Template = args => <Benefits {...args}/>

export const Default = Template.bind({});
Default.args = {
  benefitsData: [
    {
      id: 1,
      image:  <Image src="/images/platform/random.png" width="158px" height="81px" />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit."
    },
    {
      id: 2,
      image:  <Image src="/images/platform/random.png" width="158px" height="81px" />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit."
    },
    {
      id: 3,
      image:  <Image src="/images/platform/random.png" width="158px" height="81px" />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit."
    },
    {
      id: 4,
      image:  <Image src="/images/platform/random.png" width="158px" height="81px" />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit."
    }
  ]
}