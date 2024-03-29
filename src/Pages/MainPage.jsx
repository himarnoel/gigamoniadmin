import React, { useEffect } from "react";
import Nav from "../Components/Nav";
import SideNav from "./../Components/SideNav";

import { Outlet } from "react-router-dom";

const MainPage = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  return (
    <div className=" sm:h-screen flex flex-col  w-screen lg:w-full">
      <Nav />
      <div className="grid grid-cols-12 flex-auto">
        <div className="col-span-0 hidden lg:block lg:col-span-3  bg-[#175873]">
          <SideNav />
        </div>
        <div className="lg:col-span-9 col-span-12 w-full lg:w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
