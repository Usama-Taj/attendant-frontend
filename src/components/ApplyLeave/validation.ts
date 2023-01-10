import * as yup from "yup";

export const applyForLeaveSchema = yup.object().shape({
  title: yup.string().required("Enter Title Please"),
  description: yup.string().required("Enter Description Please"),
  period: yup
    .array()
    .of(yup.string().required("Enter Leave Period Please"))
    .required("Enter Leave Period")
    .nullable()
    .default(null),
});
