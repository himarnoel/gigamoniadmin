import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { HiMenu } from "react-icons/hi";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
const Nav = (props) => {
  const [bool, setbool] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=" font-poppins ">
      <div className={`${props.class} lg:block hidden  w-full shadow fixed top-0 ` }>
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

      <div className=" fixed top-0  shadow  px-2 xss:px-4 xs:px-6 sm:px-10 md:px-20  font-poppins w-full bg-[#F8F8FF] lg:hidden    py-5 flex  z-[70] rounded-b-lg justify-between">
        <Link to="/">
          {" "}
          <img src={logo} alt="" className="md:w-40 w-24 " />
        </Link>
        <span className="flex ">
          <button
            onClick={() => navigate("/dashboard")}
            className="sm:px-5 py-[0.5rem] px-2 xss:py-[0.5rem] xss:px-4 xs:py-[0.7rem] xs:px-7 md:px-[3rem] flex items-center  sm:py-[0.7rem]  text-[0.7rem] xs:text-[0.8rem] sm:text-sm md:text-base
           rounded-[8px] bg-[#009186]  text-white mr-4"
          >
            {" "}
            Logout
          </button>{" "}
          <HiMenu
            className="text-black text-xl sm:text-3xl md:text-4xl"
            onClick={() => setbool(!bool)}
          />
        </span>
      </div>
      {bool ? (
        <div className="h-[15rem] lg:hidden w-full flex flex-col text-sm sm:text-base items-center justify-evenly text-white  bg-[#87ACA3] text-light z-50 fixed top-[4rem] rounded-b-lg">
          <Link to="/" onClick={() => setbool(!bool)}>
            How it works
          </Link>
          <Link to="/" onClick={() => setbool(!bool)}>
            FAQs
          </Link>
          <Link to="/login">Login</Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
