import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";

const Card = ({ children, fluid,className,...props}) => {
  return (
    <div className={clsx(
      "flex bg-white shadow-xl text-gray-extra-dark p-4 rounded-xl",
      {"w-full": fluid},
      className)
    } {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {

};

export default Card;
