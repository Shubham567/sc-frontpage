import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import clsx from "clsx";


const ImageBesideText = ({imageProps, title,titleProps, content, controls , containerProps, reverse,...props}) => {
  return (
    <div className={clsx("w-full p-4 sm:p-4 flex flex-col md:flex-row justify-evenly items-center", {"md:flex-row-reverse" : reverse})} {...containerProps}>
      <div className="flex sm:w-2/5">
        <Image width={500} height={400} {...imageProps} />
      </div>
      <div className=" sm:w-2/5 flex flex-col gap-3">
        <div className="flex">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary" {...titleProps}>{title}</h2>
        </div>
        <div className="flex">
          {
            content
          }
        </div>
        <div className="flex gap-2">
          {
            controls
          }
        </div>
      </div>
    </div>
  );
};

ImageBesideText.propTypes = {
  imageProps: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.any.isRequired,
  }).isRequired,
  title: PropTypes.string,
  content: PropTypes.any,
  controls: PropTypes.any,
};

export default ImageBesideText;
