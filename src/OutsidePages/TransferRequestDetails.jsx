import React from "react";
import Nav from "../Components/Nav";

const TransferRequestDetails = () => {
  return (
    <div className={`font-poppins   `}>
      <Nav />
      <div className="pt-24 2xl:px-[10rem] xl:px-[5rem] lg:px-10 ">
        <button className="px-20 py-3 bg-[#87ACA3] font-semibold text-[#262626] rounded-lg">
          Back
        </button>
        <div className="flex justify-between text-[#262626] text-sm mt-10">
          <div className="flex  gap-x-20">
            <p className="">Transaction ID :1234567890987</p>
            <p className="font-medium text-[#000000]">Amount: $100</p>
          </div>
          <p className="ss">Date: 01/01/2023 11:30am</p>
        </div>

        <div className="flex  gap-x-[3.9rem] text-sm mt-10">
          <p className="">Mode of payment: Card Payment</p>
          <p className="font-medium text-[#000000]">Local Currency:₦</p>
        </div>
        <div className="text-[#262626] text-sm  justify-between grid grid-cols-2 mt-10">
          <div className="1 ">
            {" "}
            <p className="">Sender’s Details</p>
          </div>
          <div className="2 ">
            {" "}
            <p className="">Sender’s Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferRequestDetails;
