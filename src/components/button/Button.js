import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    type = "button",
    className = "",
    children,
    isLoading = false,
    ...rest
  } = props;

  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
  ) : (
    children
  );

  return (
    <button
      type={type}
      //   onclick={onclick}
      className={`flex items-center justify-center min-h-[56px] p-4 text-base font-semibold text-white rounded-xl ${
        isLoading ? "opacity-50 pointer-events-none" : ""
      } ${className}`}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.prototype = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Button;
