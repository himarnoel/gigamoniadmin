import React, { useEffect } from "react";
import Nav from "../Components/Nav";
import SideNav from "./../Components/SideNav";

import { Outlet } from "react-router-dom";

const MainPage = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  return (
    <div className=" h-screen flex flex-col ">
      <Nav />
      <div className="grid grid-cols-12 flex-auto">
        <div className="col-span-3  bg-[#175873]">
          <SideNav />
        </div>
        <div className="col-span-9 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
