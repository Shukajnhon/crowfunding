import React from "react";

const DashboardFund = () => {
  return (
    <div className="flex items-center text-base font-semibold cursor-pointer gap-x-2 text-text2">
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8.293L13.707 12.586L9.707 8.586L2 16.293L3.414 17.707L9.707 11.414L13.707 15.414L19.414 9.707L21.707 12V6H15.707L18 8.293Z"
            fill="#A2A2A8"
          />
        </svg>
      </span>

      <span>Fundrising for</span>
      {/* Chevron down */}
      <span>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 10L12 15L17 10" stroke="#A2A2A8" strokeWidth="2" />
        </svg>
      </span>
    </div>
  );
};

export default DashboardFund;
