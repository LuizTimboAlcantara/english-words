import * as Yup from "yup";
export type IntroForm = { login: string; password: string; createAccount: boolean };

const initialLogin = "";
const initialPassword = "";

export const FormSchema = Yup.object().shape({
  login: Yup.string().required("Required field").email("Please provide a valid email"),
  password: Yup.string().required("Required field"),
});

export const initialValues: IntroForm = {
  login: initialLogin,
  password: initialPassword,
  createAccount: false,
};
