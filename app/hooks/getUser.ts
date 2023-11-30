
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const useSignupForm = () => {
  const [user, setUser] = useState({
    username: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    location: "",
    role: "",
  });

  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const router = useRouter(); 

  const handleInputChange = (field: any, value: any) => {
    setUser({ ...user, [field]: value });
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://31b2-197-232-51-151.ngrok-free.app/api/register/",
        user
      );
      const data = response.data;
      console.log("Data posted successfully:", data);

      setShowSuccessToast(true);

      setTimeout(() => {
        setShowSuccessToast(false);
        router.push("/login");
      }, 1900);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Server returned an error:", error.response.data);
        if (error.response.data.username) {
          console.error("Username already exists:", error.response.data.username[0]);
          toast.error("A user with that username already exists.");
        }
      } else {
        console.error("No response received from the server.");
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return {
    user,
    showSuccessToast,
    handleInputChange,
    handleSubmit,
  };
};





// import { useState } from 'react';
// import { UserDetails, createUser } from '@/app/utilities/utils'; 
// const useSignupForm = () => {
//   const [user, setUser] = useState<UserDetails>({
//     username: '',
//     phone_number: '',
//   });
//   const [showSuccessToast, setShowSuccessToast] = useState(false);

//   const onSubmit = async () => {
//     try {
//       const response = await createUser(user);

//       setShowSuccessToast(true);

//       setTimeout(() => {
//         setShowSuccessToast(false);
//       }, 1900);
//     } catch (error) {
//     }
//   };

//   const handleInputChange = (field: string, value: string) => {
//     setUser((prevUser: any) => ({ ...prevUser, [field]: value }));
//   };

//   return {
//     user,
//     showSuccessToast,
//     onSubmit,
//     handleInputChange,
//   };
// };

// export default useSignupForm;


































































































// // import { useState } from 'react';
// // import { register-user, UserDetails } from '../utilities/utils';
// // import { useRouter } from 'next/navigation';
// // export const initialFormData:UserDetails = {
// //   name: '',
// //   username: '',
// //   phone_number: '',
// //   email: '',
// //   password: '',
// //   confirm_password: '',
// // };
// // const createUser = (initialFormData: UserDetails) => {
//   // const router = useRouter();
//   // const [registerSuccess, setRegisterSuccess] = useState(false);
//   // const [user, setUser] = useState<string | object>();
//   // const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
//   // const [formData, setFormData] = useState(initialFormData);
// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     try {
// //       const response = await register-user(formData);
// //       if (response.message == 'Successfully registered') {
// //         setErrors(response.message)
// //         setRegisterSuccess(true);
// //         setTimeout(() => {
// //           router.push('/login');
// //         }, 3000);
// //       } else {
// //         setErrors(response.message)
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };
// //   return { user, errors,setErrors,formData,setFormData, handleSubmit };
// // };
// // export default createUser;

// // import { useState } from 'react';
// // import { registerUser, } from '../utilities/utils'; 
// // import { useRouter } from 'next/router'; 
// // import {UserDetails }from '../utilities/utils'











// // export const initialFormData: UserDetails = {
// //   username: "",
// //   first_name: "",
// //   last_name: "",
// //   role: "",
// //   location: "",
// //   phone_number: '',
// // };

// // const createUser = (initialFormData: UserDetails) => {
// //   const router = useRouter();
// //   const [registerSuccess, setRegisterSuccess] = useState(false);
// //   const [user, setUser] = useState<string | object>();
// //   const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
// //   const [formData, setFormData] = useState(initialFormData);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     try {
// //       const response = await registerUser(formData);
// //       if (response.message === 'Successfully registered') {
// //         setErrors({ submit: response.message });
// //         setRegisterSuccess(true);
// //         setTimeout(() => {
// //           router.push('/login');
// //         }, 3000);
// //       } else {
// //         setErrors({ submit: response.message }); 
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return { user, errors, setErrors, formData, setFormData, handleSubmit };
// // };

// // export default createUser;
