import React from "react";
import PropTypes from "prop-types";
import {withErrorBoundary} from "react-error-boundary";
import ErrorComponents from "../common/ErrorComponents";

const ButtonGoogle = ({text = "Sign up with google", onClick = () => {}}) => {
  return (
    <button
      className="flex items-center justify-center w-full py-4 border gap-x-3 border-b-strock rounded-[10px] mb-5 text-base font-semibold text-text2 dark:text-white dark:border-darkStrock"
      onClick={onClick}
    >
      <img srcSet="./icon-google.png 2x" alt="icon-google" />
      <span>{text}</span>
    </button>
  );
};

ButtonGoogle.prototype = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: <ErrorComponents></ErrorComponents>,
});
