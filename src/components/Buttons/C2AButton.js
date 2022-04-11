import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";


const Button = ({className, children, ...props}) => {
  return (
    <button className={clsx("flex justify-center align-center", className)} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {

};

export default Button;
