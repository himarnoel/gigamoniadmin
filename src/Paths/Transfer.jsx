import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Transfer = () => {
  return (
    <div className={`font-poppins bg-[#F8F8FF]  h-screen pt-24 px-6 `}>
      <p className="text-2xl font-semibold text-[#175873]">
        Fund Transfer Requests
      </p>
      <div className="relative w-fit">
        <input
          type="text rounded"
          placeholder="Search transcations"
          className="appearance-none focus:ring-0 focus:outline-none py-3 px-2  w-[20rem]    mt-6 rounded-lg border-2 border-[#009186] text-xs"
        />

        <HiOutlineSearch className="text-[#87ACA3] text-xl inset-y-9 right-4 absolute " />
      </div>

      <div className="flex mt-10 gap-x-20  items-center">
        <div className="flex flex-col justify-between w-full min-h-[8rem] py-2 px-4 rounded-lg border-2 border-[#009186]">
          <div className="flex items-center  justify-between">
            <p className="text-sm text-[#175873]">01/01/2023 11:30am</p>
            <p className="text-[#175873] font-semibold">
              Account name: Lorem Ipsum University, London{" "}
            </p>
          </div>
          <div className="flex items-center text-sm justify-between text-[#262626]">
            <p className="ss">Bank Name: JPMorgan Chase Bank</p>
            <p className="ss">Account number: 12345678901234</p>
            {/* Dummy text for the design */}
            <p className="text-[#F8F8FF]">Account number:</p>
          </div>
          <div className="flex items-center  text-sm ">
            <p className="ss">Payment Method: Card Payment</p>
            <p className="text-[#175873] text-lg font-semibold ml-11 ">
              $ 2,000
            </p>
            <p className="text-[#009186] cursor-pointer font-semibold self">
              View
            </p>
          </div>
        </div>
        <button className="text-[#F8F8FF] flex bg-[#009186] px-12 py-3 rounded-lg items-center">
          <p className="ss"> Action</p>{" "}
          <MdOutlineKeyboardArrowDown className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Transfer;
