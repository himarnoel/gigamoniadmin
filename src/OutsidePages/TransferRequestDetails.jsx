import React from "react";
import Nav from "../Components/Nav";
import { useFormik } from "formik";
import { Validaterequest } from "../Service/Validate";
import { RiArrowDownSLine } from "react-icons/ri";
const TransferRequestDetails = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      country: "",
      bvn: "",
      amountsent: "",
      receivingcurrency: "",
      amountReceived: "",
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
          <div className="h-[24rem]  flex flex-col justify-between">
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
            <div className="flex bg-[#DAF2F1] rounded-lg w-full h-[45rem]">
              <p className="s">Add Service Fee</p>
              <div className="flex  flex-row-reverse   justify-between items-center mt-12 w-[19rem] sm:w-[20rem] md:w-[30rem] lg:w-[27rem] sm:mt-14 lg:mt-4">
                <span>
                  <p className="text-[#175873] text-[0.59rem] ">
                    Local Currency
                  </p>
                  <span className="flex mr-4">
                    <span className="relative z-0 ">
                      <select
                        type="text"
                        id="sendingcurrency"
                        className={
                          formik.errors.sendingcurrency &&
                          formik.touched.sendingcurrency
                            ? "  font-poppins pl-3  pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070] border-r   rounded-[6px] border-solid border-red-500 border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                            : " font-poppins pl-3  pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070] border-r   rounded-[6px] border-solid border-[#707070] border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
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
                          ? " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-red-500 border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                          : " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#707070] border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                      }
                      onChange={formik.handleChange}
                      value={formik.values.amountsent}
                      onBlur={formik.handleBlur}
                    />
                  </span>
                </span>
                <img
                  src={trans}
                  className="object-contain w-[1.4rem] text-[#707070] mt-6 "
                />
                <span float-left>
                  <p className="text-[#175873] text-[0.59rem] ">They Receive</p>
                  <span className="flex ">
                    <span className="relative z-0">
                      <select
                        type="text"
                        id="receivingcurrency"
                        className={
                          formik.errors.receivingcurrency &&
                          formik.touched.receivingcurrency
                            ? " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] lg:rounded-r-none border-solid border-red-500 border-[4px]  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                            : " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] lg:rounded-r-none border-solid border-[#707070] border-[4px]  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                          //placeholder=" "
                        }
                        onChange={formik.handleChange}
                        value={formik.values.receivingcurrency}
                        onBlur={formik.handleBlur}
                        placeholder="receivingcountry"
                      >
                        <option value="USD" selected>
                          USD
                        </option>

                        <option value="Pounds">Pounds</option>
                      </select>
                      <RiArrowDownSLine className="pointer-events-none cursor-pointer  text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#707070]" />
                    </span>
                    <input
                      type="number"
                      id="amountReceived"
                      placeholder="00000"
                      className={
                        formik.errors.amountReceived &&
                        formik.touched.amountReceived
                          ? " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] hidden md:flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-red-500 border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                          : " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] hidden md:flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#707070] border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                      }
                      onChange={formik.handleChange}
                      value={formik.values.amountReceived}
                      onBlur={formik.handleBlur}
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="2 ">
            {" "}
            <p className="">Receiver's Details</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransferRequestDetails;
