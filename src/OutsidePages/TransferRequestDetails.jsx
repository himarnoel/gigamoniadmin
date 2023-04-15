import React from "react";
import Nav from "../Components/Nav";
import { useFormik } from "formik";
import { Validaterequest } from "../Service/Validate";
import { RiArrowDownSLine } from "react-icons/ri";
import trans from "../assets/iconic.svg";
const TransferRequestDetails = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      bvn: "",
      amountsent: "",
      receivingcurrency: "",
      amountReceived: "",
      receivername: "",
      receiverbankName: "",
      receiverphoneNumber: "",
      receiverbankAddress: "",
      receiveremailAddress: "",
      receiveriban: "",
      receiveraccountName: "",
      receiverswiftCode: "",
      reciveraccountNumber: "",
    },
    validationSchema: Validaterequest,
    onSubmit: (values) => {},
  });
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

        <div className="flex  gap-x-[3.9rem] text-sm mt-10 ">
          <p className="">Mode of payment: Card Payment</p>
          <p className="font-medium text-[#000000]">Local Currency: ₦</p>
        </div>
        {/* sdsdsd */}
        <form className="text-[#262626] text-sm  justify-between grid grid-cols-2 mt-10 gap-x-24 mb-20">
          <div className="h-[32rem]  flex flex-col justify-between">
            {" "}
            <p className="">Sender’s Details</p>
            <div className="relative z-0 mt-0">
              <input
                type="text"
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
                id="phonenumber"
                className={
                  formik.errors.phoneNumber && formik.touched.phoneNumber
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                onBlur={formik.handleBlur}
              />
              <label
                for="phoneNumber"
                className={
                  formik.errors.phoneNumber && formik.touched.phoneNumber
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Address
              </label>
              {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.phoneNumber}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="relative z-0 mt-0">
              <input
                type="text"
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
            <div className="flex flex-col bg-[#DAF2F1] rounded-2xl w-full h-[14rem] items-start  justify-evenly px-6">
              <p className="text-sm text-[#87ACA3]">Add Service Fee</p>
              <span>
                <p className="text-[#175873] text-[0.59rem] ">Local Currency</p>
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
              </span>
              <button className="px-2 py-1 text-[#00913E] font-semibold mt-3">
                Accept
              </button>
              <button className="px-2 py-1 text-[#D80010] font-semibold ">
                Cancel
              </button>
            </div>
          </div>
          <div className="2 ">
            {" "}
            <p className="">Receiver's Details</p>
            <div className="relative z-0 mt-0">
              <input
                type="text"
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
                id="emailAddress"
                className={
                  formik.errors.emailAddress && formik.touched.emailAddress
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.emailAddress}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.emailAddress && formik.touched.emailAddress
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Email Address
              </label>
              {formik.errors.emailAddress && formik.touched.emailAddress ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.emailAddress}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="accountName"
                className={
                  formik.errors.accountName && formik.touched.accountName
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.accountName}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.accountName && formik.touched.accountName
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Account Name
              </label>
              {formik.errors.accountName && formik.touched.accountName ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.accountName}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="accountNumber"
                className={
                  formik.errors.accountNumber && formik.touched.accountNumber
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.accountNumber}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.accountNumber && formik.touched.accountNumber
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Account Number
              </label>
              {formik.errors.accountNumber && formik.touched.accountNumber ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.accountNumber}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
          </div>
          <div className="w-full mt-2 md:mt-5  lg:mt-0  flex flex-col   gap-y-8 mxl:gap-y-16">
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="bankName"
                className={
                  formik.errors.bankName && formik.touched.bankName
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.bankName}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.bankName && formik.touched.bankName
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Bank Name
              </label>
              {formik.errors.bankName && formik.touched.bankName ? (
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
                id="iban"
                className={
                  formik.errors.iban && formik.touched.iban
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.iban}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.iban && formik.touched.iban
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                IBAN
              </label>
              {formik.errors.iban && formik.touched.iban ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.iban}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="swiftCode"
                className={
                  formik.errors.swiftCode && formik.touched.swiftCode
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.swiftCode}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.swiftCode && formik.touched.swiftCode
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                SwiftCode
              </label>
              {formik.errors.swiftCode && formik.touched.swiftCode ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.swiftCode}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 ">
              <select
                type="text"
                id="country"
                required
                className={
                  formik.errors.country && formik.touched.country
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  //placeholder=" "
                }
                onChange={formik.handleChange}
                value={formik.values.country}
                onBlur={formik.handleBlur}
                placeholder="receivingcountry"
              >
                <option value=""></option>

                <option value="Canada">Canada</option>
              </select>
              <label
                for="country"
                className={
                  formik.errors.country && formik.touched.country
                    ? "absolute top-4   -z-1 origin-0  text-xs mxl:text-sm font-poppins text-red-500  duration-300  peer-focus:text-[#009186] "
                    : "absolute top-4   -z-1 origin-0  text-xs mxl:text-sm font-poppins text-[#262626]  duration-300  peer-focus:text-[#009186] "
                }
              >
                Receiving Country
              </label>
              <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-0 right-0 flex items-center px-2 text-[#262626]" />
              {formik.errors.country && formik.touched.country ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.country}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransferRequestDetails;
