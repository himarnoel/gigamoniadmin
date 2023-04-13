import * as yup from "yup";

export const baseurl = "https://gigamoni-backend.onrender.com/api/v1";

export const signupValidate = yup.object().shape({
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
    country: yup.string().required("Please fill up this field"),
    password: yup
      .string()
      .min(8, "password must containat least 8 characters ")
      .matches(
        passwordRegExp,
        "characters with at least one of each: uppercase, lowercase, number and special"
      )
      .required("Please fill up this field"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please fill up this field"),
  });
  
  