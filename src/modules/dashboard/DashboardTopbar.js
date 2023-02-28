import React from "react";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10 left">
        <img srcSet="/logo.png 2x" alt="logo" />
        <div className="w-full max-w-[458px]">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>

      <div className="flex items-center justify-end flex-1 right gap-x-10">
        <DashboardFund></DashboardFund>
        <button className="p-3 text-white bg-secondary rounded-xl">
          <span className="px-6 py-3 font-semibold">Start a campaign</span>
        </button>
        <img
          className="object-cover rounded-full"
          srcSet="/logo.png 2x"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
