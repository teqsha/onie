import * as yup from "yup";

export const LoginInitialValue = {
    Username: '',
    password: '',
};

export const LoginValidationSchema = yup.object().shape({
    Username: yup.string().required("Username is required"), 
    password: yup.string().required("Password is required"),
});