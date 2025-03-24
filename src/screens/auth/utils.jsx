import * as yup from "yup";

export const LoginInitialValue = {
    Username: '',
    password: '',
};


export const LoginValidationSchema = yup.object().shape({
    Username: yup.string().required("Username is required"), 
    password: yup.string().required("Password is required"),
});
// import * as  yup from "yup";


// export const LoginInitialValue ={
//     Username: '',
//     password: '',
// };

// export const LoginValidationSchema =yup.object().shape({
//     Username: yup.string().required('username is required'),
//     password: yup.string().required('password is required'),

// });

// import * as yup from "yup";
// export const  SignupInitialValue ={
//     Username: '',
//     password: '',
//     confirmPassword: '',
//     email: '',
// };

// export const SignupValidationSchema = yup.object().shape({
//     Username: yup.string().email('Invalid email').required("Username is required"),
//     password: yup.string().required("Password is required"),
//     confirmPassword: yup.string()
//         .oneOf([yup.ref('password'), null], 'Passwords must match') 
//         .required('Confirm Password is required'),
//     email: yup
//         .string()
//         .min(10, ({ min }) => `${'Mobile number must be'} ${min} ${'characters'}`)
//         .required('Mobile number is required')
//         .matches(/^[789]\d{9}$/, 'Mobile number should start from 7, 8, or 9'),
// });

// 

// import * as yup from "yup";


export const SignupInitialValue ={
    Username: '',
    password: '',
    confirmPassword: '',
    email: '',
};

export const SignupValidationSchema =yup.object().shape({
    Username: yup.string().required('username is required'),
    password: yup.string().required('password is required'),
    confirmPassword: yup.string().required('confirm password is required'),
    email: yup.string().required('email is required'),
    // confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('confirm password is required'),
    // email: yup.string().email('Invalid email').required('email is required'),

});
