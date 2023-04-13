import React from "react";
import Nav from "../Components/Nav";
import SideNav from "../Components/SideNav";

const Home = (props) => {
  return (
    <div className={`font-poppins bg-[#F8F8FF]  h-screen pt-24 px-12 `}>
      <p className="text-2xl font-semibold text-[#175873]">Activity Overview</p>
      <div className="flex w-full gap-x-4 mt-8">
        <div className="rounded-lg bg-[#87ACA3] flex flex-col    pt-10 items-center h-[10rem] w-[20rem] px-2 text-[#F8F8FF]">
          <p className="text-base">Number of Users</p>
          <p className="mt-5 text-4xl font-semibold">0</p>
        </div>
        <div className="rounded-lg bg-[#87ACA3] flex flex-col    pt-10 items-center h-[10rem] w-[20rem] px-2 text-[#F8F8FF]">
          <p className="text-base">Fund Transfer Request</p>
          <p className="mt-5 text-4xl font-semibold">0</p>
        </div>
        <div className="rounded-lg bg-[#87ACA3] flex flex-col    pt-10 items-center h-[10rem] w-[20rem] px-2 text-[#F8F8FF]">
          <p className="text-base">Pending Transactions</p>
          <p className="mt-5 text-4xl font-semibold">0</p>
        </div>
      </div>
      <div className="flex mt-10 justify-between w-[37rem] items-center">
        <p className="text-xl font-semibold  cursor-pointer">
          Transaction activities
        </p>
        <p className="text-sm cursor-pointer">This Week</p>
        <p className="text-sm cursor-pointer text-[#009186] font-bold">
          This Month
        </p>
        <p className="text-sm cursor-pointer text-[#009186] font-bold">
          This Year
        </p>
      </div>
      <div className="w-full bg-[#DAF2F1] min-h-[30rem] mt-10 rounded-2xl px-5 py-8">
        <div className="flex flex-col justify-between gap-y-4">
          <p className="">70</p>
          <p className="">65</p>
          <p className="">60</p>
          <p className="">55</p>
          <p className="">50</p>
          <p className="">45</p>
          <p className="">40</p>
          <p className="">35</p>
          <p className="">30</p>
          <p className="">25</p>
          <p className="">20</p>
          <p className="">15</p>
          <p className="">10</p>
          <p className="">5</p>
        </div>
        <div className="flex w-full justify-between px-8 ">
          <p className="ss lowercase">MON</p>
          <p className="ss lowercase">TUE</p>
          <p className="ss lowercase">WES</p>
          <p className="ss lowercase">THUR</p>
          <p className="ss lowercase">FRI</p>
          <p className="ss lowercase">SAT</p>
        </div>
      </div>
      <div className="flex mt-10 w-full h-[1rem]"></div>
    </div>
  );
};

export default Home;
