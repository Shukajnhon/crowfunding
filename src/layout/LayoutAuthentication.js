import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {withErrorBoundary} from "react-error-boundary";
import ErrorComponents from "../components/common/ErrorComponents";

const LayoutAuthentication = (props) => {
  const {children, heading} = props;
  return (
    <div className="w-full min-h-screen bg-lite p-10 relative isolate">
      <img
        src="/ellipse.png"
        alt="bg"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]"
      />
      <Link to={"/"} className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="logo" />
      </Link>

      <div className="w-full max-w-[556px] bg-white rounded-xl mx-auto px-5 py-8 lg:px-16 lg:py-12">
        <h1 className="font-semibold text-lg lg:text-xl mb-1 lg:mb-3 text-text1 text-center">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propType = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  fallback: ErrorComponents(),
});
