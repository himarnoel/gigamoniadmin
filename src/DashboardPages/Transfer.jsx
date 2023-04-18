import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { baseurl } from "../Service/Validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Transfer = () => {
  const [showactions, setshowactions] = useState(false);
  const [load, setload] = useState(false);
  const [data, setdata] = useState([]);
  const [check, setcheck] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setload(true);
    axios
      .get(`${baseurl}/gadmin/request/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
        setload(false);
      })
      .catch((e) => {
        console.log(e);
        setload(false);
      });
  }, []);
  const openUp = (index) => {
    setcheck(index);
    setshowactions(!showactions);
  };
 
  return (
    <div className={`font-poppins bg-[#F8F8FF]  h-screen pt-24 px-12 `}>
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
      {data.map((item, index) => (
        <div key={index} className="flex mt-10 gap-x-10  items-center ">
          <div
            onClick={() => navigate("/transferrequestdetails", { state: item })}
            className="flex flex-col justify-between w-full min-h-[7.6rem] cursor-pointer  pl-4 py-1 rounded-lg border-2 border-[#009186]"
          >
            <div className="grid grid-cols-12 text-sm items-center">
              <p className="text-sm text-[#175873] col-span-5">
                {item.transactionCreatedDate}
              </p>
              <p className="text-[#175873] font-semibold col-span-7">
                Account name: {item.receiverAcctName}
              </p>
            </div>
            <div className="grid grid-cols-12 text-sm items-center text-[#262626]">
              <p className="col-span-5">Bank Name: {item.receiverBankName}</p>
              <p className="col-span-7">
                Account number: {item.receiverAcctNo}
              </p>
            </div>
            <div className="grid grid-cols-12 text-sm items-center">
              <p className="col-span-5">Payment Method: {item.paymentMethod}</p>
              <p className="text-[#175873] text-lg font-semibold col-span-6 w-fit">
                $ {item.amountReceived}
              </p>
              <p className="text-[#009186] cursor-pointer  col-span-1 ml-[-10rem]">
                view
              </p>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => openUp(index)}
              className="text-[#F8F8FF] flex bg-[#009186] px-14 py-3 rounded-lg items-center text-sm "
            >
              <p className="ss"> Action</p>{" "}
              <MdOutlineKeyboardArrowDown className="text-xl" />
            </button>
            <div
              className={
                index === check
                  ? showactions
                    ? "rounded-lg bg-[#F8F8FF] absolute z-[10] w-full top-10 px-4  h-[8rem] flex justify-between py-8  flex-col"
                    : "hidden"
                  : "hidden"
              }
            >
              <p
                onClick={() => setshowactions(!showactions)}
                className="text-[#00913E] cursor-pointer font-semibold"
              >
                Accept
              </p>
              <p
                onClick={() => setshowactions(!showactions)}
                className="text-[#D80010] cursor-pointer font-semibold"
              >
                Cancel
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transfer;
