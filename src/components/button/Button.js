import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const {type = "button", className = "", children} = props;
  return (
    <button
      type={type}
      //   onclick={onclick}
      className={`flex items-center justify-center p-4 text-base font-semibold text-white rounded-xl ${className}`}
    >
      {children}
    </button>
  );
};

Button.prototype = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
