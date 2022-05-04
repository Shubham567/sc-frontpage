import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";


const Button = React.memo(React.forwardRef(({className,variant,color,children,size,rounded, ...props},fwdRef) => {


  const commonStyles = (variant === "contained" || variant === "outlined") ?
    "flex justify-center align-center shadow-lg transition-all active:translate-y-1 active:shadow-none"
    : "px-1";

  const textStyles = variant ? (variant === "contained" ? "text-white" : `${color && `text-${color}`} hover:text-white`) : "text-inherit";
  const bgStyles = variant ? variant === "outlined" ? `bg-white hover:bg-${color || "dark"}` : color ? `bg-${color}` :  "bg-dark" : "" //in case of no variant;
  const borderStyles = variant === "outlined" && (color ? `border-2 border-${color} hover:text-white` : "border-2")
  const sizeStyles =  (variant === "contained" || variant === "outlined") ?
     size === "md" || !size ? "px-4 py-2"  :
       size === "sm" ? "px-3 py-1" :
         size === "lg" ? "px-5 py-2" :
           size === "xl" ? "px-6 py-3"
             :""
    : "";

  const fontSizeStyles = size === "md" || !size ? "text-normal"  :
    size === "sm" ? "text-sm" :
      size === "lg" ? "text-lg" :
        size === "xl" ? "text-2xl"
          : ""

  return (
    <button
      className={clsx(
        commonStyles,
        textStyles,
        bgStyles,
        borderStyles,
        sizeStyles,
        fontSizeStyles,
        {
          "rounded-full" : rounded,
          "rounded-lg" : !rounded,
        },
        className
        )}
      ref={fwdRef}
      {...props}>
      {children}
    </button>
  );
}));

Button.displayName = "Button";

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm","lg","xl"]),
  color: PropTypes.oneOf(["primary","secondary"]),
  variant: PropTypes.oneOf(["default","primary","secondary"]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

};

export default Button;
