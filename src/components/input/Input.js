import React from "react";
import {useController} from "react-hook-form";
import PropTypes from "prop-types";
import {withErrorBoundary} from "react-error-boundary";
import ErrorComponents from "../common/ErrorComponents";

const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    className = "",
    error = "",
    placeholder,
    children,
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
        className={`w-full px-6 py-4 text-sm font-medium border rounded-xl text-text1 placeholder:text-text4 bg-transparent dark:placeholder:text-text2 dark:text-white ${
          error.length > 0
            ? "border-error text-error"
            : "border-b-strock text-text1 dark:border-darkStrock"
        } ${children ? "pr-16" : ""} ${className}`}
        placeholder={error.length <= 0 ? props.placeholder : ""}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="absolute w-full text-sm font-medium pointer-events-none select-none error-input text-error top-2/4 -translate-y-2/4 left-6">
          {error}
        </span>
      )}

      {children && (
        <span className="absolute cursor-pointer right-6 top-2/4 -translate-y-2/4">
          {children}
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

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponents,
});
