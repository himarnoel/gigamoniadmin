import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import TransferRequestDetails from "./OutsidePages/TransferRequestDetails";
import Transfer from "./DashboardPages/Transfer";
import Pending from "./DashboardPages/Pending";
import Rejected from "./DashboardPages/Rejected";
import Completed from "./DashboardPages/Completed";
import MainPage from "./Pages/MainPage";
import Home from "./DashboardPages/Home";
import PendingTransactionDetails from "./OutsidePages/PendingTransactionDetails";
import RejectTransactionDetails from "./OutsidePages/RejectTransactionDetails";
import CompletedTransacDetails from "./OutsidePages/CompletedTransacDetails";
import Login from "./OutsidePages/Login";

function App() {
  useEffect(() => {
    localStorage.setItem(
      "LoggedIntoken",
      "0ac08e48e8de165569040ae1d5337a4a608a9698"
    );
  }, []);

  return (
    <div>
      <ToastContainer position="top-center" autoClose={2000} />
      <Routes>
        <Route element={<MainPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/rejected" element={<Rejected />} />
          <Route path="/completed" element={<Completed />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/transferrequestdetails"
          element={<TransferRequestDetails />}
        />
        <Route
          path="/pendingtransactiondetails"
          element={<PendingTransactionDetails />}
        />

        <Route
          path="/rejecttransactiondetails"
          element={<RejectTransactionDetails />}
        />
        <Route
          path="/completedtransactiondetails"
          element={<CompletedTransacDetails />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
