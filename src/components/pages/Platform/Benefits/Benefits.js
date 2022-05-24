import React from 'react';
import BenefitsCard from "./BenefitsCard/BenefitsCard";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="w-full p-12 bg-dark">
       <div className="flex flex-wrap justify-between">
         {
           rawData.map((item) => (<BenefitsCard key={item.id} image={item.image} description={item.description} />))
         }
       </div>
    </div>
  );
};

export default Benefits;

const rawData = [
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
