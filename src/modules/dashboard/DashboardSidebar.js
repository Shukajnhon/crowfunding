import React from "react";
import {NavLink} from "react-router-dom";
import {
  IconCampaign,
  IconDashboard,
  IconDarkMode,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "../../components/icons";

const sidebarLinks = [
  {icon: <IconDashboard></IconDashboard>, title: "Dashboard", url: "/"},
  {icon: <IconCampaign></IconCampaign>, title: "Campaign", url: "/campaign"},
  {icon: <IconPayment></IconPayment>, title: "Payment", url: "/payment"},
  {icon: <IconWithdraw></IconWithdraw>, title: "Withdraw", url: "/withdraw"},
  {icon: <IconProfile></IconProfile>, title: "Profile", url: "/profile"},
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/log",
    onclick: () => {},
  },
  {
    icon: <IconDarkMode></IconDarkMode>,
    title: "Light/Dark",
    url: "/dark",
    onclick: () => {},
  },
];

const DashboardSidebar = () => {
  const className =
    "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 text-icon-color last:mt-auto last:bg-white last:shadow-sdPrimary";
  return (
    <div className="w-full md:w-[76px] bg-white rounded-3xl shadow-[10px_10px_20px_rgba(218,213,213,0.15)] px-[14px] py-10 flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => {
        return (
          <NavLink
            to={link.url}
            key={link.title}
            className={({isActive}) => {
              // console.log(isActive);
              return isActive
                ? `${className} bg-[#F1FBF7] text-green-300`
                : className;
            }}
            // className="flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 text-icon-color last:mt-auto last:bg-white last:shadow-sdPrimary"
            // className={({isActive}) =>
            //   isActive ? "bg-primary text-primary" : ""
            // }
          >
            <span>{link.icon}</span>
            <span className="md:hidden">{link.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSidebar;
