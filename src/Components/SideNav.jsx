import React, { useState } from "react";
import { SidebarData } from "../SideNavData/navdata";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const [change, setchange] = useState("");
  const activeLink = "mt-5 cursor-pointer text-[#87ACA3] text-sm";
  const normalLink = "mt-5 cursor-pointer text-[#F8F8FF] text-base";
  return (
    <div className="font-poppins  flex flex-col   2xl:pl-[10rem]  text-[#F8F8FF] xl:pl-[5rem] lg:pl-10 mt-32">
      {SidebarData.map((data, i) => (
        <div key={i} className="mt-12 ">
          <NavLink
            to={data.path}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {data.name}
          </NavLink>
        </div>
      ))}
      {/* <div
        className={
          " "
        }
      >
        <p className={"mt-5 cursor-pointer text-[#87ACA3] "}>Home</p>
        <p className="mt-10 cursor-pointer">Transfer requests</p>
        <p className="mt-10 cursor-pointer">Pending transactions</p>
        <p className="mt-10 cursor-pointer">Rejected transaction</p>{" "}
        <p className="mt-10 cursor-pointer">Completed transaction</p>
      </div> */}
    </div>
  );
};

export default SideNav;
