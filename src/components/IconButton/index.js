import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";

const IconButton = ({children,className,primary,secondary,large,xl,contained,"aria-label": ariaLabel,...props}) => {
  return (
    <button className={clsx("rounded-full",
      {"text-primary": !contained && primary, "text-secondary": !contained && secondary},
      {"text-white bg-primary": contained, "bg-secondary": contained && secondary, },
      {"text-xl p-2": large, "text-3xl p-2": xl, "p-1": !large && !xl},
      className)} {...props} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

IconButton.propTypes = {
  "aria-label": PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default IconButton;
