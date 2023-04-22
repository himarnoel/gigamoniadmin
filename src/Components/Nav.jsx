import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { HiMenu } from "react-icons/hi";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "../SideNavData/navdata";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
  const [bool, setbool] = useState(false);
  const navigate = useNavigate();
  const activeLink = "mt-5 cursor-pointer text-[#87ACA3] text-sm";
  const normalLink = "mt-5 cursor-pointer text-[#F8F8FF] text-base";
  return (
    <div className=" font-poppins ">
      <div
        className={`${props.class} lg:block hidden  w-full shadow fixed top-0 z-[2]`}
      >
        <div className=" font-poppins font-semibold w-full bg-[#F8F8FF] shadow 2xl:px-[10rem] xl:px-[5rem] lg:px-10  py-2  mxl:h-[88px] z-40 rounded-b-lg flex justify-between items-center">
          <Link to="/" className="focus:outline-none">
            <img src={logo} alt="" className="object-contain w-[9rem]" />
          </Link>

          <button
            onClick={() => navigate("/dashboard")}
            className="px-[4rem] py-[0.7rem] rounded-lg text-white bg-[#009186] flex items-center"
          >
            Logout
          </button>
        </div>
      </div>
      {/* Mobile nav bar */}

      <div className=" fixed top-0  shadow   md:px-12 px-8   font-poppins w-full bg-[#F8F8FF] lg:hidden    py-5 flex  z-[10] rounded-b-lg justify-between">
        <Link to="/">
          {" "}
          <img src={logo} alt="" className="md:w-40 w-24 " />
        </Link>

        <span className="flex justify-between ">
          <button
            onClick={() => navigate("/dashboard")}
            className="sm:px-5 py-[0.5rem] px-2 xss:py-[0.5rem] xss:px-4 xs:py-[0.7rem] xs:px-7 md:px-[3rem] flex items-center  sm:py-[0.7rem]  text-[0.7rem] xs:text-[0.8rem] sm:text-sm md:text-base
           rounded-[8px] bg-[#009186]  text-white mr-4"
          >
            {" "}
            Logout
          </button>{" "}
          <HiMenu
            className="text-black text-xl sm:text-3xl md:text-4xl "
            onClick={() => setbool(!bool)}
          />
        </span>
      </div>

      <div
        className={
          bool
            ? "h-full w-[14rem] md:w-[20rem] left-0 lg:hidden duration-500 ease-in-out  flex flex-col text-sm sm:text-base items-center  text-white  bg-[#175873] text-light z-[3] fixed top-0 rounded-b-lg"
            : "h-full  w-[14rem] md:w-[20rem]  left-[-100%] lg:hidden duration-500 ease-out  flex flex-col text-sm sm:text-base items-center  text-white  bg-[#175873] text-light z-[3] fixed top-0 rounded-b-lg"
        }
      >
        <div className="flex flex-col gap-y-[5rem] mt-40">
          {SidebarData.map((data, i) => (
            <div key={i} className="">
              <NavLink
                onClick={() => setbool(false)}
                to={data.path}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {data.name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
