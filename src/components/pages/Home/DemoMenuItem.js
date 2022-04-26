import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";

const DemoMenuItem = ({className,active,logo,title,...props}) => {
  return (
    <div className={clsx("flex flex-col p-2 text-center hover:bg-white hover:rounded-l-xl cursor-pointer select-none",
      {"bg-white rounded-l-xl" : active},
      className)}  {...props}>
      <div className="fill-primary flex justify-center">{logo}</div>
      <div className="text-xs uppercase text-primary">{title}</div>
    </div>
  );
};

DemoMenuItem.propTypes = {
  onClick: PropTypes.func,
  active : PropTypes.bool,
  logo: PropTypes.node,
  title: PropTypes.string
};

export default DemoMenuItem;
