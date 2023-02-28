import React from "react";

const DashboardSearch = () => {
  return (
    <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,213,213,0.15)] p-2 h-[52px] flex items-center border">
      <div className="flex-1 px-5">
        <input
          className="w-full text-sm bg-transparent text-text1 placeholder:text-text4"
          type="text"
          placeholder="Do fundrise now"
        ></input>
      </div>
      <button className="w-[72px] h-10 flex items-center justify-center rounded-full bg-primary text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default DashboardSearch;
