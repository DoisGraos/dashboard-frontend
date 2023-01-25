import * as Yup from "yup";

export const schemaLogin = Yup.object({
  username: Yup.string().required("REQUIRED_FIELD"),
  password: Yup.string().required("REQUIRED_FIELD"),
});
