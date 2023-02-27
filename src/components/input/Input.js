import React from "react";
import {useController} from "react-hook-form";
import PropTypes from "prop-types";

const Input = (props) => {
  const {control, name, type = "text", className = "", ...rest} = props;
  const {field} = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border rounded-xl text-text1 placeholder:text-text4 border-b-strock ${className}`}
        {...rest}
        {...field}
      />
    </div>
  );
};

Input.prototype = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
};

export default Input;
