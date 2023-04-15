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
  phonenumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  address: yup.string().required("Please fill up this field"),
  bvn: yup.string().required("Please fill up this field"),
  amountsent: yup.string().required("Please fill up this field"),
  receivingcurrency: yup.string().required("Please fill up this field"),
  amountReceived: yup.string().required("Please fill up this field"),
  receivername: yup.string().required("Please fill up this field"),
  bankName: yup.string().required("Please fill up this field"),
  phoneNumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  bankAddress: yup.string().required("Please fill up this field"),
  emailAddress: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  iban: yup.string().required("Please fill up this field"),
  accountName: yup.string().required("Please fill up this field"),
  swiftCode: yup.string().required("Please fill up this field"),
  accountNumber: yup.string().required("Please fill up this field"),
 country: yup.string().required("Please fill up this field"),s
});
