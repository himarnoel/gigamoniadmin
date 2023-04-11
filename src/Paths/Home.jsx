import React from "react";
import Nav from "../Components/Nav";
import SideNav from "../Components/SideNav";

const Home = (props) => {
  return (
    <div className={`font-poppins bg-[#F8F8FF]  h-screen pt-24 px-6`}>
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
    </div>
  );
};

export default Home;
