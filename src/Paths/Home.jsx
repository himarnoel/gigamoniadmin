import React from "react";
import Nav from "../Components/Nav";
import SideNav from "../Components/SideNav";

const Home = (props) => {
  return (
    <div className={`font-poppins bg-blue-100  h-screen pt-20 px-6`}>
      <p className="text-2xl font-semibold text-[#175873]">Activity Overview</p>
      <div className="rounded-lg bg-[#87ACA3] flex flex-col justify-center">
        Number of Users
      </div>
    </div>
  );
};

export default Home;
