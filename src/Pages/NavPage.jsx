import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../DashboardPages/Home";
import Transfer from "../DashboardPages/Transfer";
import Pending from "../DashboardPages/Pending";
import Rejected from "../DashboardPages/Rejected";
import Completed from "../DashboardPages/Completed";
import TransferRequestDetails from "../DashboardPages/TransferRequestDetails";

const NavPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/rejected" element={<Rejected />} />
        <Route path="/completed" element={<Completed />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default NavPage;
