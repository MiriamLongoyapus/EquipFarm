
import { useState } from 'react';
import { UserDetails, createUser } from '@/app/utilities/utils'; 
const loginUser = () => {
  const [user, setUser] = useState<UserDetails>({
    username: '',
    phone_number: '',
  });
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const onSubmit = async () => {
    try {
      const response = await createUser(user);
      console.log('Data posted successfully:', response);

      setShowSuccessToast(true);

      setTimeout(() => {
        setShowSuccessToast(false);
      }, 1900);
    } catch (error) {
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setUser((prevUser: any) => ({ ...prevUser, [field]: value }));
  };

  return {
    user,
    showSuccessToast,
    onSubmit,
    handleInputChange,
  };
};

export default loginUser;









































// import axios from 'axios';

// interface UsersData {
//   username: string;

//   phone_number: string;
// }

// const loginUser = async (userDetails: UsersData) => {

//   const url = '/api/login-user';
//   try {
//     const response = await axios.post(url, userDetails, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const result = response.data;
//     return result;
//   } catch (error: any) {
//     return error.message;
//   }
// };

// export default loginUser;










































// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { loginuser} from '../utilities/utils';
// import cookie from 'cookiejs';
// interface LoginData {
//   username: string;
//   phone_number: string;
// }
// const userLogin = (initialLoginData: LoginData) => {
//   const router = useRouter();
//   const [user, setUser] = useState({ token: '' });
//   const handleSignin = async () => {
//     try {
//       const response = await axios.post('/api/login-user', {
//         usename: initialLoginData.username,
//         phone_number: initialLoginData.phone_number,
//       });
//       if (response.data.token) {
//         cookie.set('loginToken', response.data.token);
//         router.push('/payment');
//       } else {
//         router.push('/payment');
//       }
//       setUser(response.data);
//     } catch (error) {
//       console.error("Error during sign-in:", error);
//     }
//   };
//   return { user, handleSignin };
// };
// export default userLogin;




























// import { useState } from 'react';
// import { loguser } from '../utilities/utils';
// import { useRouter } from 'next/navigation';
// import cookie from 'cookiejs';
// interface LoginData {
// username: string;
// phone_number: string;
// }
// const useLogin = (initialLoginData: LoginData) => {
// const router = useRouter();
// const [user, setUser] = useState({token:''});
// const handleSignin = async () => {
// const response = await loguser(initialLoginData.username, initialLoginData.phone_number)
// if (response.token ) {
// cookie.set('loginToken',response.token);
// router.push('/payment');
// } 
// // else {
// // router.push('/payment');
// // }
// setUser(response)
// }
// return { user, handleSignin };
// }
// export default useLogin;