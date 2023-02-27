import React from "react";
import {useController} from "react-hook-form";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    className = "",
    error = "",
    placeholder,
    ...rest
  } = props;
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
        className={`w-full px-6 py-4 text-sm font-medium border rounded-xl text-text1 placeholder:text-text4  ${
          error.length > 0 ? "border-error" : "border-b-strock"
        } ${className}`}
        placeholder={error.length < 0 ? props.placeholder : ""}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="absolute error-input w-full text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6">
          {error}
        </span>
      )}
    </div>
  );
};

Input.prototype = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
  error: PropTypes.string,
};

export default Input;
