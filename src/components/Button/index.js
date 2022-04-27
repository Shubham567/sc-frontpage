import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";


const Button = ({className,secondary, outlined,children, ...props}) => {
  return (
    <button
      className={clsx(
        "flex justify-center" +
        "align-center rounded-lg " +
        "shadow-lg px-6 py-2 transition-all " +
        "active:translate-y-1 active:shadow-none",
        {"bg-primary text-white" : !secondary && !outlined},
        {"text-white bg-secondary" : secondary && !outlined},
        {"border border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white" : !secondary && outlined},
        {"border border-2 border-secondary text-secondary bg-white hover:bg-secondary hover:text-white" : secondary && outlined},
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
