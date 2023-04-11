import React from "react";

const Transfer = () => {
  return (
    <div className={`font-poppins bg-[#F8F8FF]  h-screen pt-24 px-6 `}>
      <p className="text-2xl font-semibold text-[#175873]">
        Fund Transfer Requests
      </p>
      <div className="flex">
        <input
          type="text rounded"
          placeholder="Search transcations"
          className="appearance-none focus:ring-0 focus:outline-none py-3 px-2 w-[20rem] mt-6 rounded-lg border-2 border-[#009186] text-xs"
        />
      </div>

      <div className="flex mt-10 w-full h-[1rem]"></div>
    </div>
  );
};

export default Transfer;
