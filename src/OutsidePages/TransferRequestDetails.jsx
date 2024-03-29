import React, { useEffect, useRef, useState } from "react";
import Nav from "../Components/Nav";
import { useFormik } from "formik";
import { Validaterequest, baseurl } from "../Service/Validate";
import { RiArrowDownSLine } from "react-icons/ri";
import trans from "../assets/iconic.svg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import RingLoader from "./../../node_modules/react-spinners/esm/RingLoader";
import { toast } from "react-toastify";
const TransferRequestDetails = () => {
  const navigate = useNavigate();
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
        name: state.senderName,
        email: state.senderEmail,
        phoneNumber: state.senderPhoneNumber,
        address: "address",
        bvn: "1234567890",
        amountsent: state.amountSent ?? "",
        amountReceived: state.amountReceived ?? "",
        bankAddress: "Dummy address",
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
      amountReceived: "",
      amountsent: "",
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
      setoverlay(true);
      setshow(true);
    },
  });
  const closeModal = () => {
    body.style.overflow = "";
    setoverlay(false);
  };
  const processTransaction = () => {
    if (formik.values.amountsent <= 500) {
      setoverlay(false);
      setshow(false);
      body.style.overflow = "";
      toast.warning("Enter the correct amount");
      window.scrollBy({ top: 300, left: 0 });
    } else {
      setshow(false);
      axios
        .patch(
          `${baseurl}/gadmin/${state.transactionID}/transaction/`,
          {
            amountSent: formik.values.amountsent,
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
          setshow(true);
          navigate(-1);
        })
        .catch((e) => {
          console.log(e);
          body.style.overflow = "";
          setoverlay(false);
          setshow(true);
        });
    }
  };
  const rejectTransaction = () => {
    window.scroll({ top: 0, left: 0 });
    body.style.overflow = "hidden";
    setoverlay(true);
    setshow(false);
    axios
      .patch(
        `${baseurl}/gadmin/${state.transactionID}/transaction/`,
        {
          amountSent: formik.values.amountsent,
          status: "Rejected",
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
        setshow(true);
        toast.success("Yes");
        navigate(-1); //Go back to previous route
      })
      .catch((e) => {
        console.log(e);
        body.style.overflow = "";
        setoverlay(false);
        setshow(true);
        toast.error("error");
        if (e.data == "Invalid token.") {
          localStorage.removeItem("LoggedIntoken");
        }
      });
  };
  return (
    <div className={`font-poppins   `}>
      <Nav />
      <div
        className={
          overlay
            ? "absolute top-0   bg-[#262626]/[0.8]    z-[90] h-screen w-full flex  justify-center items-center text-3xl"
            : "hidden"
        }
      >
        {show ? (
          <div className="flex flex-col items-center px-8 pt-4 bg-[#F8F8FF] rounded-[11.8392px] w-[26rem] h-[24rem]">
            <p className="text-[#000000] font-semibold text-lg">
              Accept Transcation
            </p>
            <p className="text-xs text-center text-[#000000]  mt-4">
              By accepting this transaction the user will receive continuation
              email , payment details and charged service fee below{" "}
            </p>
            <span className="flex w-fit mt-8">
              <span className="relative z-0 ">
                <select
                  type="text"
                  id="sendingcurrency"
                  className={
                    formik.errors.sendingcurrency &&
                    formik.touched.sendingcurrency
                      ? "  font-poppins pl-3  pb-0 h-[42px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070] border-r   rounded-[6px] border-solid border-red-500 border rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                      : " font-poppins pl-3  pb-0 h-[42px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070] border-r   rounded-[6px] border-solid border-[#707070] border rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                    //placeholder=" "
                  }
                  onChange={formik.handleChange}
                  value={formik.values.sendingcurrency}
                  onBlur={formik.handleBlur}
                  placeholder="receivingcountry"
                >
                  <option value="NGN" selected>
                    NGN
                  </option>

                  <option value="Pounds">Pounds</option>
                </select>
                <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-4 right-0 flex items-center px-2 text-[#707070]" />
              </span>
              <input
                type="number"
                id="amountsent"
                disabled
                placeholder="00000"
                className={
                  formik.errors.amountsent && formik.touched.amountsent
                    ? " font-poppins spin-button-none  pl-3 pb-0 h-[42px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-red-500 border rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                    : " font-poppins spin-button-none  pl-3 pb-0 h-[42px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#707070] border rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                }
                onChange={formik.handleChange}
                value={formik.values.amountsent}
                onBlur={formik.handleBlur}
              />
            </span>
            <div className="flex text-[#F8F8FF] text-xs justify-between w-full mt-8">
              <button
                onClick={() => closeModal()}
                className="w-[10rem] py-3 bg-[#D80010] rounded-lg"
              >
                No
              </button>
              <button
                onClick={() => processTransaction()}
                className="w-[10rem] py-3 bg-[#00913E] rounded-lg"
              >
                Yes
              </button>
            </div>
          </div>
        ) : (
          <RingLoader color="#009186" size={90} />
        )}
      </div>
      <div className="pt-24 md:px-12 px-8 2xl:px-[10rem] xl:px-[5rem] lg:px-10 ">
        <button
          onClick={() => navigate("/transfer")}
          className="px-20 py-3 bg-[#87ACA3] font-semibold text-[#262626] rounded-lg"
        >
          Back
        </button>
        <div className="flex flex-col sm:flex-row justify-between text-[#262626] text-sm mt-10">
          <div className=" flex flex-col sm:flex-row sm:gap-x-20">
            <p className="">Transaction ID :1234567890987</p>
            <p className="font-medium text-[#000000] mt-3 sm:mt-0">
              Amount: $ {formik.values.amountReceived.toLocaleString()}
            </p>
          </div>
          <p className="mt-3 sm:mt-0">Date: 01/01/2023 11:30am</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-x-[3.9rem] text-sm  sm:mt-10 ">
          <p className="mt-3 sm:mt-0">Mode of payment: Card Payment</p>
          <p className="font-medium text-[#000000] mt-3 sm:mt-0">
            Local Currency: ₦ {formik.values.amountsent.toLocaleString()}
          </p>
        </div>
        {/* sdsdsd */}
        <form
          onSubmit={formik.handleSubmit}
          className="text-[#262626] text-sm  justify-between  sm:grid grid-cols-2 mt-10 gap-x-24 mb-20"
        >
          <div className="h-[35rem]  flex flex-col justify-between">
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
            <div className="flex flex-col bg-[#DAF2F1] rounded-2xl w-full h-[12rem] items-start  justify-evenly px-6">
              <p className="text-sm text-[#87ACA3]">Add Service Fee</p>

              <span className="flex w-fit ">
                <span className="relative z-0 ">
                  <select
                    type="text"
                    id="sendingcurrency"
                    className={
                      formik.errors.sendingcurrency &&
                      formik.touched.sendingcurrency
                        ? "  font-poppins pl-3  pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070] border-r   rounded-[6px] border-solid border-red-500 border rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                        : " font-poppins pl-3  pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070] border-r   rounded-[6px] border-solid border-[#707070] border rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                      //placeholder=" "
                    }
                    onChange={formik.handleChange}
                    value={formik.values.sendingcurrency}
                    onBlur={formik.handleBlur}
                    placeholder="receivingcountry"
                  >
                    <option value="NGN" selected>
                      NGN
                    </option>

                    <option value="Pounds">Pounds</option>
                  </select>
                  <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#707070]" />
                </span>
                <input
                  type="number"
                  id="amountsent"
                  placeholder="00000"
                  className={
                    formik.errors.amountsent && formik.touched.amountsent
                      ? " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-red-500 border rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                      : " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#707070] border rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                  }
                  onChange={formik.handleChange}
                  value={formik.values.amountsent}
                  onBlur={formik.handleBlur}
                />
              </span>

              <button
                type="submit"
                className="px-2 py-1 text-[#00913E] font-semibold mt-3"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => rejectTransaction()}
                className="px-2 py-1 text-[#D80010] font-semibold "
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="h-[35rem]  flex flex-col justify-between mt-10 sm:mt-0">
            {" "}
            <p className="">Receiver's Details</p>
            <div className="relative z-0  mt-2 sm:mt-0">
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
                  {formik.errors.bankName}
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
  );
};

export default TransferRequestDetails;
