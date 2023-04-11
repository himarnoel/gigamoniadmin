import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Paths/Home";
import Transfer from "../Paths/Transfer";
import Pending from "../Paths/Pending";
import Rejected from "../Paths/Rejected";
import Completed from "./../Paths/Completed";

const NavPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/rejected" element={<Rejected />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </div>
  );
};

export default NavPage;
