import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import { baseurl } from "../Service/Validate";
import RingLoader from "react-spinners/esm/RingLoader";
import { toast } from "react-toastify";
const Rejected = () => {
  const navigate = useNavigate();
  const safeDocument = typeof document !== "undefined" ? document : {};
  const scrollBlocked = useRef();
  const html = safeDocument.documentElement;
  const { body } = safeDocument;
  const [load, setload] = useState(false);
  const [overlay, setoverlay] = useState(false);
  const [data, setdata] = useState([]);
  useEffect(() => {
    setload(true);
    axios
      .get(`${baseurl}/gadmin/rejected/`, {
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
        toast.error("error");
      });
  }, []);
  const acceptTransaction = (item) => {
    console.log(item.transactionID);
    window.scroll({ top: 0, left: 0 });
    body.style.overflow = "hidden";
    setoverlay(true);
    axios
      .patch(
        `${baseurl}/gadmin/${item.transactionID}/transaction/`,
        {
          amountSent: item.amountSent,
          status: "Update",
        },

        {
          headers: {
            Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        body.style.overflow = "";
        setoverlay(false);

        toast.success("Yes");
        //Go back to previous route
      })
      .catch((e) => {
        console.log(e.response);
        body.style.overflow = "";
        setoverlay(false);

        toast.error("error");
      });
  };
  return (
    <div className={`font-poppins bg-[#F8F8FF]  h-screen pt-24 px-12 `}>
      <div
        onClick={() => setoverlay(false)}
        className={
          overlay
            ? "absolute bg-cover bg-[#262626]/[0.8] top-[-7.2rem] lg:top-[0rem] z-[90] left-0 h-screen w-full flex  justify-center items-center "
            : "hidden"
        }
      >
        <RingLoader color="#009186" size={90} className="text-3xl" />
      </div>
      <p className="text-2xl font-semibold text-[#175873]">
        Rejected Transactions
      </p>
      <div className="relative w-fit">
        <input
          type="text rounded"
          placeholder="Search transcations"
          className="appearance-none focus:ring-0 focus:outline-none py-3 px-2  w-[20rem]    mt-6 rounded-lg border-2 border-[#009186] text-xs"
        />

        <HiOutlineSearch className="text-[#87ACA3] text-xl inset-y-9 right-4 absolute " />
      </div>
      {data.map((item, i) => (
        <div key={i} className="flex mt-10 gap-x-20  items-center">
          <div  className="flex flex-col justify-between w-full min-h-[7rem]  pl-4  rounded-lg border-2 border-[#009186]">
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
              onClick={() => acceptTransaction(item)}
              className="bg-[#F8F8FF] flex font-semibold border-2 border-[#009186] text-[#009186] px-16 py-3 rounded-lg items-center text-sm "
            >
              Accept
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rejected;
