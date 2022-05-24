import React from 'react';
import TabCard from "./TabCard";
import Image from "next/image";

const OtherPlatformTab = () => {
  return (
    <div className="mt-8 ml-2 mr-2 sm:ml-8 sm:mr-8 flex justify-center items-center relative">
      <div className="flex justify-center items-center flex-wrap">
        {
          rawData.map((item) => (<TabCard key={item.id} {...item} />))
        }
      </div>
      <div className="absolute -bottom-72 -left-12 -z-10">
        <Image src="/images/dottedSkillCounty.png" width="500px" height="500px"  />
      </div>
    </div>
  );
};

export default OtherPlatformTab;

const rawData = [
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
