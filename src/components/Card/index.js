import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";

const Card = ({ children,component, fluid,className,...props}) => {
  const RenderComp = component || "div";
  return (
    <RenderComp className={clsx(
      "flex bg-white shadow-xl text-gray-extra-dark p-4 rounded-xl border-1 border-gray-light",
      {"w-full": fluid},
      className)
    } {...props}>
      {children}
    </RenderComp>
  );
};

Card.propTypes = {

};

export default Card;
