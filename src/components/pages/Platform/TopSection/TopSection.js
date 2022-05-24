import React from 'react';
import Background from "./Background";

const rawData = {
  heading : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  description: "Upgrade your hiring. Use SkillCounty Assessment Platform to hire the right candidates faster and more efficiently. "
}

const TopPlatformSection = () => {
  return (
    <>
      <Background {...rawData} />
    </>
  );
};

export default TopPlatformSection;
