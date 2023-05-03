import React, { useEffect, useState } from "react";

import icon from "../assets/google-icon.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import { useFormik } from "formik";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseurl, loginValidate } from "../Service/Validate";
import Nav from "../Components/Nav";
const Login = () => {
  const [countries, setcountries] = useState(["Nigeria"]);
  const [selected, setSelected] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
    const val = localStorage.getItem("LoggedIntoken");
    if (val) {
      navigate("/home");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidate,
    onSubmit: (values) => {
      window.scrollTo(0, 0);
      setload(true);
      axios
        .post(`${baseurl}/accounts/login/`, {
          password: values.password,
          email: values.email,
        })
        .then((res) => {
          console.log(res);
          setload(false);
          localStorage.setItem("LoggedIntoken", res.data.tokens.toString());
          navigate("/home");
        })
        .catch((e) => {
          console.log(e);
          setload(false);
          if (e.response.data.detail == "Account has not been verified") {
            toast.error("Account has not been verified");
            navigate("/");
          } else if (
            e.response.data.detail == "Phone number has not been verified"
          ) {
            toast.error("Account has not been verified");

            // navigate(
            //   `/verify?id=${e.response.data.id}&key=${e.response.data.key}`
            // );
          } else if (e.response.data == "User does not exist") {
            toast.error("Invalid user");
          } else {
            toast.error("Incorrect email or password");
          }
        });
    },
  });
  return (
    <>
      <div className="hidden lg:block font-poppins">
        {load ? (
          <div className="absolute bg-cover bg-[#262626]/[0.8]  z-[20] h-screen w-screen flex  justify-center items-center text-3xl">
            <RingLoader color="#009186" size={90} />
          </div>
        ) : (
          ""
        )}

        <div className="flex flex-col h-screen  ">
          <Nav class="" />
          <div className="grid md:grid-cols-2  flex-auto mt-10">
            <div className="w-full flex flex-col  ">
              <div className="lg:mt-4 xl:mt-10">
                <h2 className="text-center text-[1.5rem] mxl:text-[2rem] mxl:mt-[2rem] font-medium text-[#262626] ">
                  Login
                </h2>
                <h1 className="text-[1.5rem] mxl:text-[2rem] mxl:mt-[3rem] font-bold  lg:mx-10 xl:mx-[6rem] 2xl:mx-[10rem]">
                  Welcome,
                </h1>
              </div>

              <form
                onSubmit={formik.handleSubmit}
                className="lg:h-[12rem] xl:h-[13rem] mxl:h-[16rem] lg:mt-[3rem] xl:mt-4 mxl:mt-10 flex flex-col justify-between   lg:mx-10 xl:mx-[8rem] 2xl:mx-[10rem]"
              >
                <div class="relative z-0 ">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className={
                      formik.errors.email && formik.touched.email
                        ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-base text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                        : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-base text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
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
                        ? "absolute text-xs font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        : "absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                </div>{" "}
                <div class="relative z-0 ">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={
                      formik.errors.password && formik.touched.password
                        ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                        : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    }
                    placeholder=" "
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    for="password"
                    className={
                      formik.errors.password && formik.touched.password
                        ? "absolute text-xs font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        : "absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    }
                  >
                    Password
                  </label>
                  {formik.errors.password && formik.touched.password ? (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.password}
                    </p>
                  ) : (
                    ""
                  )}
                </div>{" "}
                <button
                  type="submit"
                  className="px-14 py-3 self-end text-sm  bg-[#009186] text-[#F8F8FF] rounded-[8px] font-semibold"
                >
                  Login
                </button>
              </form>

              <div className="lg:mt-2 xl:mt-6 mxl:mt-8 text-center">
                {" "}
                <span className="flex items-center justify-center  lg:mx-10 xl:mx-[8rem]   2xl:mx-[10rem] ">
                  {" "}
                  <p className=" text-[#262626] mr-2">Don't have an account?</p>
                  <Link to="/signup" className="text-[#009186]">
                    Create account
                  </Link>
                </span>
                <span className=" flex items-center justify-center py-[0.5rem] border-2 mt-4 lg:mt-14 xl:mt-14 mxl:mt-20 border-[#009186] border-solid rounded-[8px]   lg:mx-10 xl:mx-[8rem] 2xl:mx-[10rem]">
                  {" "}
                  <p className="mr-2  text-[#009186]"> Continue with Google</p>
                  <img src={icon} alt="" className="object-contain w-5" />
                </span>
              </div>
            </div>
            <div className=" w-full  bg lg:px-10 xl:px-[8rem] 2xl:px-[10rem] flex justify-center items-center">
              <div className="w-full text-3xl px-[4.5rem] text-center font-semibold flex justify-center items-center bg-[#87ACA3]/[0.3] h-[20rem] rounded-[8px] text-[#87ACA3]">
                <p className="leading-[1.3] text-center mxl:leading-[1.6] text-[1.8rem]">
                  International Bulk Payment Solution Made Just For{" "}
                  <span className="text-[#F8F8FF]"> YOU</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden font-poppins">
        {load ? (
          <div className="absolute bg-cover bg-[#262626]/[0.8] z-[20] h-screen w-screen flex  justify-center items-center text-3xl">
            <RingLoader color="#009186" size={75} />
          </div>
        ) : (
          ""
        )}
        <div className=" w-screen  flex  flex-col h-screen ">
          <Nav className="" />
          <div className="bg flex-auto px-2 xss:px-4 xs:px-6 sm:px-14 md:px-14  md:flex md:flex-col md:h-full pt-[7rem] pb-10 justify-around">
            <div className="px-5  sm:px-10">
              {" "}
              <div className="w-full text-[1.5rem] md:text-[1.8rem] xss:text-xl px-[1rem]  text-center font-semibold flex justify-center items-center bg-[#87ACA3]/[0.5] h-[10rem] sm:h-[15rem] rounded-[8px] text-[#87ACA3]">
                <p className=" leading-[1.5] xss:leading-[1.5]">
                  <p> International Bulk</p>
                  <p>Payment Solution</p>
                  <p>
                    Made Just For <span className="text-[#F8F8FF]"> YOU</span>
                  </p>
                </p>
              </div>
            </div>
            <div></div>
            <div className="xss:h-[30rem] xss:mt-14  h-[67%] sm:h-[35rem] sm:mt-10 md:h-[57%] md:mt-20 bg-white rounded-[16px] xs:py-4 py-2 sm:py-10  md:py-10 sm:px-20  px-4 flex sm:justify-between flex-col md:px-20">
              <h1 className="text-center font-semibold text-xl mt-2  md:text-2xl">
                Login
              </h1>
              <div className="flex flex-col justify-between h-[90%] md:h-[85%]">
                {" "}
                <h2 className=" font-bold  xs:text-[1.4rem] xs:mt-4 md:text-3xl">
                  Welcome,
                </h2>
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col h-[12rem] justify-between "
                >
                  <div class="relative z-0 ">
                    <input
                      type="text"
                      id="email"
                      name="email"
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
                          ? "absolute text-xs font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          : "absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  </div>{" "}
                  <div class="relative z-0 mt-4 ">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className={
                        formik.errors.password && formik.touched.password
                          ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                          : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      }
                      placeholder=" "
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                    />
                    <label
                      for="password"
                      className={
                        formik.errors.password && formik.touched.password
                          ? "absolute text-xs font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          : "absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      }
                    >
                      Password
                    </label>
                    {formik.errors.password && formik.touched.password ? (
                      <p className="text-red-500 text-xs font-poppins">
                        {formik.errors.password}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>{" "}
                  <button
                    type="submit"
                    className="px-14 mt-4 text-sm md:py-3 py-2 self-end  bg-[#009186] text-[#F8F8FF] rounded-[8px] font-semibold"
                  >
                    Login
                  </button>
                </form>
                <span className="flex justify-center text-[0.7rem] xss:text-xs text-center mt-2 md:mt-0 md:text-[1.2rem]">
                  {" "}
                  <p className=" text-[#262626] mr-2">Don't have an account?</p>
                  <Link to="/signup" className="text-[#009186]">
                    Create account
                  </Link>
                </span>
                <span className=" md:mt-0   md:text-[1.2rem]  flex items-center justify-center py-[0.6rem] md:py-[0.8rem] text-sm border-2 mt-4 lg:mt-8 xl:mt-10 border-[#009186] border-solid rounded-[8px]   lg:mx-10 xl:mx-[8rem] 2xl:mx-[10rem]">
                  {" "}
                  <p className="mr-2  text-[#009186] "> Continue with Google</p>
                  <img src={icon} alt="" className="object-contain w-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
