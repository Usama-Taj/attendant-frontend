import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup.string().required("Enter Username"),
  password: yup.string().required("Enter PIN Code"),
});
