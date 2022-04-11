import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";


const Button = ({className, children, ...props}) => {
  return (
    <button
      className={clsx(
        "flex justify-center " +
        "align-center bg-white rounded-lg " +
        "text-purple-dark shadow-lg px-10 py-2",
        className)}
      {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {

};

export default Button;
