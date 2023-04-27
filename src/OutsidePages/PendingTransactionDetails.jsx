import React, { useEffect, useRef, useState } from "react";
import Nav from "../Components/Nav";
import { useFormik } from "formik";
import { Validaterequest, baseurl } from "../Service/Validate";
import { RiArrowDownSLine } from "react-icons/ri";
import trans from "../assets/iconic.svg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import RingLoader from "./../../node_modules/react-spinners/esm/RingLoader";
const PendingTransactionDetails = () => {
  const navigate = useNavigate();
  const [load, setload] = useState(false);
  const [overlay, setoverlay] = useState(false);
  const [show, setshow] = useState(false);
  const { state } = useLocation();
  const safeDocument = typeof document !== "undefined" ? document : {};
  const scrollBlocked = useRef();
  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  useEffect(() => {
    const val = localStorage.getItem("LoggedIntoken");
    if (!val) {
      navigate("/login");
    } else {
      console.log(state);
      window.scroll({ top: 0, left: 0 });
      formik.setValues({
        name: "sadfa",
        email: "sdfad@gmail.com",
        phoneNumber: "08088443186",
        address: "dsfa",
        bvn: "dfasd",
        amountsent: state.amountSent ?? "",
        amountReceived: state.amountReceived,
        bankAddress: "sdfad",
        receivername: state.receiverName ?? "",
        receiverphoneNumber: state.receiverPhone ?? "",
        receiveremailAddress: state.receiverEmail ?? "",
        receiveraccountName: state.receiverAcctName ?? "",
        receiveraccountNumber: state.receiverAcctNo ?? "",
        receiverbankName: state.receiverBankName ?? "",
        receiverbankAddress: state.receiverBankAddress ?? "",
        receiveriban: state.receiverIban ?? "",
        receiverswiftCode: state.receiverSwiftCode ?? "",
      });
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      bvn: "",
      amountsent: "",
      amountReceived: "",
      bankAddress: "",
      receivername: "",
      receiverphoneNumber: "",
      receiveremailAddress: "",
      receiveraccountName: "",
      receiveraccountNumber: "",
      receiverbankName: "",
      receiverbankAddress: "",
      receiveriban: "",
      receiverswiftCode: "",
    },
    validationSchema: Validaterequest,
    onSubmit: (values) => {
      window.scroll({ top: 0, left: 0 });
      body.style.overflow = "hidden";
      setload(true);
      axios
        .patch(
          `${baseurl}/gadmin/${state.transactionID}/pending/`,
          {
            amountSent: state.amountSent,
            status: "Completed",
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
          setload(false);
          toast.success("Transaction completed");
          fetchPending();
        })
        .catch((e) => {
          console.log(e);
          body.style.overflow = "";
          setload(false);
          toast.error("error", {
            toastId: 1,
          });
        });
    },
  });
  console.log(formik.errors);
  return (
    <div>
      {" "}
      <div className={`font-poppins   `}>
        <Nav />
        <div
          className={
            load
              ? "absolute top-0   bg-[#262626]/[0.8]    z-[90] h-screen w-full flex  justify-center items-center text-3xl"
              : "hidden"
          }
        >
          <RingLoader color="#009186" size={90} className="text-3xl" />
        </div>
        <div className="pt-24 2xl:px-[10rem] xl:px-[5rem] lg:px-10 sm:px-12 px-8">
          <button
            onClick={() => navigate(-1)}
            className="px-20 py-3 bg-[#87ACA3] font-semibold text-[#262626] rounded-lg"
          >
            Back
          </button>
          <div className="flex flex-col sm:flex-row justify-between text-[#262626] text-sm mt-10">
            <div className="flex flex-col sm:flex-row sm:gap-x-20">
              <p className="">Transaction ID : {state.transactionID}</p>{" "}
              <p className="font-medium text-[#000000] mt-3 sm:mt-0">
                Amount: ${formik.values.amountReceived}
              </p>
            </div>
            <p className="mt-3 sm:mt-0">Date: {state.transactionCreatedDate}</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between  gap-x-[3.9rem] text-sm sm:mt-10 ">
            <div className="flex flex-col sm:flex-row  gap-x-14  ">
              <p className="mt-3 sm:mt-0">
                Mode of payment: {state.paymentMethod}
              </p>
              <p className="font-medium text-[#000000] mt-3 sm:mt-0">
                Local Currency: ₦ {formik.values.amountsent}
              </p>
            </div>
            <b className="mt-3 sm:mt-0">
              Proof of payment status:{" "}
              <b
                className={
                  state.paymentMethod == "Bank Transfer"
                    ? state.paymentProof
                      ? "text-[#00913E] "
                      : "text-[#D80010]"
                    : "text-[#D80010]"
                }
              >
                {state.paymentMethod == "Bank Transfer"
                  ? state.paymentProof
                    ? "Uploaded"
                    : "Not Uploaded"
                  : "Not Needed"}
              </b>
            </b>
          </div>
          {/* sdsdsd */}
          <form
            onSubmit={formik.handleSubmit}
            className="text-[#262626] text-sm  justify-between sm:grid grid-cols-2 mt-10 gap-x-24 mb-20"
          >
            <div className="h-[28rem]  flex flex-col justify-between">
              {" "}
              <p className="">Sender’s Details</p>
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  disabled
                  id="name"
                  className={
                    formik.errors.name && formik.touched.name
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="name"
                  className={
                    formik.errors.name && formik.touched.name
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Name
                </label>
                {formik.errors.name && formik.touched.name ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.name}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  disabled
                  id="email"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="email"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Email
                </label>
                {formik.errors.email && formik.touched.email ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.email}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  disabled
                  id="phoneNumber"
                  className={
                    formik.errors.phoneNumber && formik.touched.phoneNumber
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins   w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="name"
                  className={
                    formik.errors.phoneNumber && formik.touched.phoneNumber
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Phone Number
                </label>
                {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.phoneNumber}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  disabled
                  id="bankAddress"
                  className={
                    formik.errors.bankAddress && formik.touched.bankAddress
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.bankAddress}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="name"
                  className={
                    formik.errors.bankAddress && formik.touched.bankAddress
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Bank Address
                </label>
                {formik.errors.bankAddress && formik.touched.bankAddress ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.bankAddress}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  disabled
                  id="bvn"
                  className={
                    formik.errors.bvn && formik.touched.bvn
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.bvn}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="bvn"
                  className={
                    formik.errors.bvn && formik.touched.bvn
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Bank Verification Number (BVN)
                </label>
                {formik.errors.bvn && formik.touched.bvn ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.bvn}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <button
                type="submit"
                className="bg-[#009186] text-[#F8F8FF] w-fit py-3 px-20 rounded-lg mt-2 outline-none focus:outline-none"
              >
                Done
              </button>
            </div>

            <div className="h-[35rem]  flex flex-col justify-between mt-10 sm:mt-0">
              {" "}
              <p className="">Receiver's Details</p>
              <div className="relative z-0 mt-2 sm:mt-0">
                <input
                  type="text"
                  disabled
                  id="receivername"
                  className={
                    formik.errors.receivername && formik.touched.receivername
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.receivername}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="name"
                  className={
                    formik.errors.receivername && formik.touched.receivername
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Receiver’s Name
                </label>
                {formik.errors.receivername && formik.touched.receivername ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.receivername}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  disabled
                  id="receiverphoneNumber"
                  className={
                    formik.errors.receiverphoneNumber &&
                    formik.touched.receiverphoneNumber
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins   w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.receiverphoneNumber}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="receiverphoneNumber"
                  className={
                    formik.errors.receiverphoneNumber &&
                    formik.touched.receiverphoneNumber
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Phone Number
                </label>
                {formik.errors.receiverphoneNumber &&
                formik.touched.receiverphoneNumber ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.receiverphoneNumber}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  disabled
                  id="receiveremailAddress"
                  className={
                    formik.errors.receiveremailAddress &&
                    formik.touched.receiveremailAddress
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.receiveremailAddress}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="name"
                  className={
                    formik.errors.receiveremailAddress &&
                    formik.touched.receiveremailAddress
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Email Address
                </label>
                {formik.errors.receiveremailAddress &&
                formik.touched.receiveremailAddress ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.receiveremailAddress}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  id="receiveraccountName"
                  disabled
                  className={
                    formik.errors.receiveraccountName &&
                    formik.touched.receiveraccountName
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.receiveraccountName}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="receiveraccountName"
                  className={
                    formik.errors.receiveraccountName &&
                    formik.touched.receiveraccountName
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Account Name
                </label>
                {formik.errors.receiveraccountName &&
                formik.touched.receiveraccountName ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.receiveraccountName}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  disabled
                  id="receiveraccountNumber"
                  className={
                    formik.errors.receiveraccountNumber &&
                    formik.touched.receiveraccountNumber
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.receiveraccountNumber}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="receiveraccountNumber"
                  className={
                    formik.errors.receiveraccountNumber &&
                    formik.touched.receiveraccountNumber
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Account Number
                </label>
                {formik.errors.receiveraccountNumber &&
                formik.touched.receiveraccountNumber ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.receiveraccountNumber}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  disabled
                  id="receiverbankAddress"
                  className={
                    formik.errors.receiverbankAddress &&
                    formik.touched.receiverbankAddress
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.receiverbankAddress}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="receiverbankAddress"
                  className={
                    formik.errors.receiverbankAddress &&
                    formik.touched.receiverbankAddress
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Bank Address
                </label>
                {formik.errors.receiverbankAddress &&
                formik.touched.receiverbankAddress ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.receiverbankAddress}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  disabled
                  id="receiverbankName"
                  className={
                    formik.errors.receiverbankName &&
                    formik.touched.receiverbankName
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.receiverbankName}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="receiverbankName"
                  className={
                    formik.errors.receiverbankName &&
                    formik.touched.receiverbankName
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Bank Name
                </label>
                {formik.errors.receiverbankName &&
                formik.touched.receiverbankName ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.receiverbankName}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  disabled
                  id="receiveriban"
                  className={
                    formik.errors.receiveriban && formik.touched.receiveriban
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.receiveriban}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="receiveriban"
                  className={
                    formik.errors.receiveriban && formik.touched.receiveriban
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  IBAN
                </label>
                {formik.errors.receiveriban && formik.touched.receiveriban ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.receiveriban}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  disabled
                  id="receiverswiftCode"
                  className={
                    formik.errors.receiverswiftCode &&
                    formik.touched.receiverswiftCode
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.receiverswiftCode}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="name"
                  className={
                    formik.errors.receiverswiftCode &&
                    formik.touched.receiverswiftCode
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  SwiftCode
                </label>
                {formik.errors.receiverswiftCode &&
                formik.touched.receiverswiftCode ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.receiverswiftCode}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PendingTransactionDetails;
