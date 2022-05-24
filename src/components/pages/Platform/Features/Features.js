import React from 'react';
import FeaturesCard from "./FeaturesCard";
import Image from "next/image";

const Features = () => {
  return (
    <div>
      <div className="ml-4 mt-8 mr-4 mb-8 xl:ml-28 xl:mr-28 xl:mt-28 xl:mb-16">
        {
          rawData.map((item) => (<FeaturesCard key={item.id} {...item} />))
        }
      </div>
    </div>
  );
};

export default Features;

const rawData = [
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
