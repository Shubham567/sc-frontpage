import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";


const Button = ({className,secondary, children, ...props}) => {
  return (
    <button
      className={clsx(
        "flex justify-center " +
        "align-center rounded-lg " +
        "shadow-lg px-10 py-2",
        {"text-purple-dark bg-white" : !secondary},
        {"text-white bg-green" : secondary},
        className,)}
      {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  secondary: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

};

export default Button;
