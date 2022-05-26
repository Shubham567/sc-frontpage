import React from 'react';
import Background from "./Background";


const TopPlatformSection = ({hideBg, heading, description}) => {
  return (
    <>
      <Background heading={heading} description={description} hideBg={hideBg} />
    </>
  );
};

export default TopPlatformSection;
