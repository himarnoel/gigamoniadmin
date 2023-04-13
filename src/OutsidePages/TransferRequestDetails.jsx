import React from "react";
import Nav from "../Components/Nav";
import { useFormik } from "formik";
import { Validaterequest } from "../Service/Validate";

const TransferRequestDetails = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      country:"",
      bvn: "",
    },
    validationSchema: Validaterequest,
    onSubmit: (values) => {}
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

        <div className="flex  gap-x-[3.9rem] text-sm mt-10">
          <p className="">Mode of payment: Card Payment</p>
          <p className="font-medium text-[#000000]">Local Currency: ₦</p>
        </div>
        <div className="text-[#262626] text-sm  justify-between grid grid-cols-2 mt-10">
          <div className="1 ">
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
          </div>
          <div className="2 ">
            {" "}
            <p className="">Receiver's Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferRequestDetails;
