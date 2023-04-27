import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../Service/Validate";
import axios from "axios";
import RingLoader from "react-spinners/esm/RingLoader";
const Completed = () => {
  const navigate = useNavigate();
  const [showactions, setshowactions] = useState(false);
  const [load, setload] = useState(false);
  const [data, setdata] = useState([]);
  const safeDocument = typeof document !== "undefined" ? document : {};
  const { body } = safeDocument;
  const blockScroll = () => {
    window.scrollTo({ top: 0, left: 0 });
    body.style.overflow = "hidden";
  };
  const allowScroll = () => {
    window.scrollTo({ top: 0, left: 0 });
    body.style.overflow = "";
  };
  useEffect(() => {
    const val = localStorage.getItem("LoggedIntoken");
    if (!val) {
      navigate("/login");
    }else{
    blockScroll();
    setload(true);
    axios
      .get(`${baseurl}/gadmin/completed/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
        setload(false);
        allowScroll();
      })
      .catch((e) => {
        console.log(e);
        setload(false);
        allowScroll();
        toast.error("error", {
          toastId: 1,
        });
      });
    }
  }, []);
  return (
    <div
      className={`font-poppins bg-[#F8F8FF]  md:h-screen pt-24 md:px-12  px-8`}
    >
      <div
        className={
          load
            ? "absolute top-0 left-0 right-0 bg-[#262626]/[0.8]   z-[90] h-screen w-full flex  justify-center items-center text-3xl"
            : "hidden"
        }
      >
        <RingLoader color="#009186" size={90} />
      </div>
      <p className="text-2xl font-semibold text-[#175873]">
        Completed Transactions
      </p>
      <div className="relative w-full sm:w-fit ">
        <input
          type="text rounded"
          placeholder="Search transcations"
          className="appearance-none focus:ring-0 focus:outline-none py-3 px-2 w-full  sm:w-[20rem]    mt-6 rounded-lg border-2 border-[#009186] text-xs"
        />

        <HiOutlineSearch className="text-[#87ACA3] text-xl inset-y-9 right-4 absolute " />
      </div>
      {data.map((item, i) => (
        <div className="flex mt-10 gap-x-20  items-center">
          <div
            onClick={() =>
              navigate("/completedtransactiondetails", { state: item })
            }
            className="flex flex-col justify-between gap-y-2 md:gap-y-0 w-full min-h-[12rem] md:min-h-[7rem] cursor-pointer px-2 md:px-0 py-2 md:py-0 md:pl-4  rounded-lg border-2 border-[#009186]"
          >
            <div className="grid gap-y-2 md:gap-y-0 md:grid-cols-12 text-sm items-center cursor-pointer">
              <p className="text-sm text-[#175873] md:col-span-5">
                {item.transactionCreatedDate}
              </p>
              <p className="text-[#175873] font-semibold md:col-span-7">
                Account name: {item.receiverAcctName}
              </p>
            </div>

            <div className="grid gap-y-2 md:gap-y-0 md:grid-cols-12 text-sm items-center text-[#262626]">
              <p className="md:col-span-5">
                Bank Name: {item.receiverBankName}
              </p>
              <p className="md:col-span-7">
                Account number: {item.receiverAcctNo}
              </p>
            </div>

            <div className="grid gap-y-2 md:gap-y-0 md:grid-cols-12 text-sm items-center">
              <p className="md:col-span-5">
                Payment Method: {item.paymentMethod}
              </p>
              <p className="text-[#175873] text-lg font-semibold md:col-span-6 w-fit">
                $ {item.amountReceived}
              </p>
              <p className="text-[#009186] cursor-pointer  col-span-1 md:ml-[-10rem]">
                view
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Completed;
