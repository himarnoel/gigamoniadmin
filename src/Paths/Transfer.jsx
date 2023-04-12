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
        <div className="flex flex-col justify-between w-full min-h-[7rem]  px-4 rounded-lg border-2 border-[#009186]">
          <div className="grid grid-cols-12 text-sm items-center">
            <p className="text-sm text-[#175873] col-span-5">
              01/01/2023 11:30am
            </p>
            <p className="text-[#175873] font-semibold col-span-7">
              Account name: Lorem Ipsum University, London{" "}
            </p>
          </div>
          <div className="grid grid-cols-12 text-sm items-center text-[#262626]">
            <p className="col-span-5">Bank Name: JPMorgan Chase Bank</p>
            <p className="col-span-7">Account number: 12345678901234</p>
          </div>
          <div className="grid grid-cols-12 text-sm items-center">
            <p className="col-span-5">Payment Method: Card Payment</p>
            <p className="text-[#175873] text-lg font-semibold col-span-6 w-fit">
              $ 2,000
            </p>
            <p className="text-[#009186] cursor-pointer  col-span-1 ml-[-10rem]">
              view
            </p>
          </div>
        </div>
        <div className="relative">
          <button className="text-[#F8F8FF] flex bg-[#009186] px-12 py-4 rounded-lg items-center ">
            <p className="ss"> Action</p>{" "}
            <MdOutlineKeyboardArrowDown className="text-xl" />
          </button>
          <div className={
            "rounded-lg bg-[#F8F8FF] absolute z-[10] shadow w-full top-10 px-2 gap-y-6  h-[6rem] flex justify-center flex-col"
          }>
            <p className="text-[#00913E] cursor-pointer ">Accept</p>
            <p className="text-[#D80010] cursor-pointer ">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
