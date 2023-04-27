import * as yup from "yup";

export const baseurl = "https://gigamoni-backend.onrender.com/api/v1";
const phoneRegExp =
  /^((\+[0-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const Validaterequest = yup.object().shape({
  name: yup.string().required("Please fill up this field"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  phoneNumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  address: yup.string().required("Please fill up this field"),
  bvn: yup.string().required("Please fill up this field"),
  amountsent: yup.string().required("Please fill up this field"),
  amountReceived: yup.string().required("Please fill up this field"),
  bankAddress: yup.string().required("Please fill up this field"),
  receiverphoneNumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  receivername: yup.string().required("Please fill up this field"),
  receiveremailAddress: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  receiveraccountName: yup.string().required("Please fill up this field"),
  receiveraccountNumber: yup.string().required("Please fill up this field"),
  receiverbankName: yup.string().required("Please fill up this field"),
  receiverbankAddress: yup.string().required("Please fill up this field"),
  receiveriban: yup.string().required("Please fill up this field"),
  receiverswiftCode: yup.string().required("Please fill up this field"),
});

export const loginValidate = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  password: yup.string().required("Please fill up this field"),
});
