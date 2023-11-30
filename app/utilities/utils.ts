
import axios from 'axios';

// export interface UserDetails {
//   username: string;
//   phone_number: string;
// }

// export const createUser = async (userdetails: UserDetails) => {
//   const url = '/api/register-user'; 
//   try {
//     const response = await axios.post(url, userdetails, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const result = response.data;
//     return result;
//   } catch (error: any) {
//     return error.message;
//   }
// };

export const createUser= async()=>{
  const url ='/api/register-user'
  try{
      const response = await fetch(url)
      const result = await response.json();
      return result;
  }
  catch(error:any){
      return error.message
  }
}


// export const loginuser = async (username: string, phone_number: string) => {
//   try {
//     const response = await axios.post('/api/login-user', {
//       username: username,
//       phone_number: phone_number,
//     }, {
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error logging in loguser:", error);
//     return [];
//   }
// };
















// import axios from 'axios';

// export interface UserDetails {
//   username: string;
//   phone_number: string;
 
// }

// export const createUser = async (userdetails: UserDetails) => {
//   const url = `/api/register-user`;
//   try {
//     const response = await axios.post(url, userdetails, {
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
















































































  
// import axios from 'axios';


// export const loguser = async (username: string, phone_number: string) => {
//     try {
//       const response = await axios.post('/api/login-user', {
//         username: username,
//         phone_number: phone_number,
//       }, {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         }
//       });
//       return response.data;
//     } catch (error:any) {
//       console.error("Error logging in loguser:", error);
//       return error.message;
//     }
//   };