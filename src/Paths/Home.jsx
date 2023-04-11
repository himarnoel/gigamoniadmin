import React from "react";
import Nav from "../Components/Nav";
import SideNav from "../Components/SideNav";

const Home = (props) => {
  return (
    <div className={`font-poppins bg-[#F8F8FF]  h-screen pt-20 px-6`}>
      <p className="text-2xl font-semibold text-[#175873]">Activity Overview</p>
      <div className="rounded-lg bg-[#87ACA3] flex flex-col text-xl   pt-10 items-center h-[10rem] w-[20rem] px-2 text-[#F8F8FF]">
        <p className="d">Number of Users</p>
        <p className="mt-5 text-4xl font-semibold">0</p>
      </div>
    </div>
  );
};

export default Home;
