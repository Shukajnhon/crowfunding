import React from "react";
import {Link} from "react-router-dom";
import IconFolder from "../../components/icons/IconFolder";

const CampaignItem = () => {
  return (
    <div>
      <div className="h-[158px]">
        <img
          className="object-cover w-full h-full rounded-2xl"
          src="https://i.pinimg.com/564x/90/5b/bc/905bbccd582a161be2e09fb35de8458b.jpg"
          alt=""
        />
      </div>
      <Link to="/" className="px-5 py-4 mb-4 text-xs font-medium text-text3">
        <div className="flex items-baseline gap-x-3">
          <IconFolder></IconFolder>
          <span className="">Education</span>
        </div>
      </Link>
      <h3 className="mb-1 font-semibold text-text1">
        Powered Kits Learning Boxes
      </h3>
      <p className="mb-4 text-xs font-normal text-text3">
        Fun, durable and reusable boxes with eco-friendly options.
      </p>
      <div className="flex items-start justify-between mb-5 gap-x-5">
        <div className="flex flex-col gap-y-1">
          <h4 className="text-sm font-semibold text-text2">$2,000</h4>
          <span className="text-xs font-normal text-text4">
            Raised of $1,900
          </span>
        </div>

        <div className="flex flex-col gap-y-1">
          <h4 className="text-sm font-semibold text-text2">173</h4>
          <span className="text-xs font-normal text-text4">Total backers</span>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <img
          src="https://i.pinimg.com/564x/90/5b/bc/905bbccd582a161be2e09fb35de8458b.jpg"
          alt="avatar"
          className="object-cover w-8 h-8 rounded-full"
        />
        <p className="text-xs font-normal text-text4">
          By
          <span className="ml-2 text-xs font-semibold text-text2">
            Mahfuzul Nabil
          </span>
        </p>
      </div>
    </div>
  );
};

export default CampaignItem;
