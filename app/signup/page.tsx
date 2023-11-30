"use client";
import React, { FormEvent, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faMapMarker, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    first_name: "",
    last_name: "",
    phone_number: "", 
    location: "",
    role: "",
  });

  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://0535-41-80-113-133.ngrok-free.app/api/register/",
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


  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/green.webp)" }}>
      <div className="flex flex-col sm:flex-row font-poppins text-xl p-14">
        <div className="bg-[#287100] sm:w-1/2 flex justify-center sm:p-0">
          <div className="-ml-28 w-20 h-18 mt-28">
            <img src="/images/Logo.png" alt="Logo" />
          </div>
          <div>
            <p className="-ml-20 mt-72 text-4xl font-['Poppins'] font-semibold text-[#E1C903] mb-9">
              Welcome Back
            </p>
            <p className="-ml-20 text-40 text-white">
              Growing Tomorrow, One<br></br>
              Click at a time
            </p>
          </div>
        </div>

        <div className="w-full bg-white flex flex-col p-16 sm:w-1/2 sm:p-20 mt-[-1.%]">
  <div className="justify-center mt-2">
    <div className="title text-3xl font-bold text-[#287100] mb-4">
      SignUp
    </div>
    <form className="flex flex-col sm:w-full h-auto justify-center " onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="text-sm text-black font-black text-custom-color" htmlFor="email round-20">
          USER NAME
        </label>

        <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
          <FontAwesomeIcon icon={faUser} className="mr-2 px-2 py-2" />
          <input
            onChange={(event) =>
              setUser({
                ...user,
                username: event.target.value,
              })
            }
            id="UserName"
            type="text"
            placeholder="Enter UserName"
            className="text-sm text-black w-full bg-opacity-70 px-2 py-2 mb-1 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="text-sm text-black font-black text-custom-color" htmlFor="email">
          FIRST NAME
        </label>
        <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
          <FontAwesomeIcon icon={faUser} className="mr-2 px-2 py-2" />
          <input
            onChange={(event) =>
              setUser({
                ...user,
                first_name: event.target.value,
              })
            }
            id="FirstName"
            type="text"
            placeholder="Enter FirstName"
            className="text-sm text-black w-full bg-opacity-70 px-2 py-2 mb-1 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="text-sm text-black font-black text-custom-color" htmlFor="LastName">
          LAST NAME
        </label>
        <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
          <FontAwesomeIcon icon={faUser} className="mr-2 px-2 py-2" />
          <input
            onChange={(event) =>
              setUser({
                ...user,
                last_name: event.target.value,
              })
            }
            id="LastName"
            type="text"
            placeholder="Enter LastName"
            className="text-sm text-black w-full bg-opacity-70 px-2 py-2 mb-1 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="text-sm text-black font-black text-custom-color" htmlFor="phonenumber">
          PHONE NUMBER
        </label>
        <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
          <FontAwesomeIcon icon={faPhone} className="mr-2 px-2 py-2" />
          <input
            onChange={(event) =>
              setUser({
                ...user,
                phone_number: event.target.value,
              })
            }
            id="phonenumber"
            placeholder="Enter Phone number"
            className="text-sm text-black w-full bg-opacity-70 px-2 py-2 mb-1 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-4">
                <label className="text-sm text-black font-black text-custom-color" htmlFor="location">
                  LOCATION
                </label>
                <div className="relative text-black flex items-center border-solid border-2 border-black justify-center">
                  <FontAwesomeIcon icon={faMapMarker} className="mr-2 px-2 py-2" />
                  <input
                    onChange={(event) =>
                      setUser({
                        ...user,
                        location: event.target.value,
                      })
                    }
                    id="location"
                    type="text"
                    placeholder="Enter Location"
                    className="text-sm text-black w-full bg-opacity-70 px-2 py-2 mb-1 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-sm text-black font-black text-custom-color" htmlFor="role">
                  ROLE
                </label>
                <div className="relative text-black flex items-center border-solid border-2 border-black  justify-center">
                  <FontAwesomeIcon icon={faBriefcase} className="mr-2 px-2 py-2" />
                  <input
                    onChange={(event) =>
                      setUser({
                        ...user,
                        role: event.target.value,
                      })
                    }
                    id="role"
                    type="text"
                    placeholder="Enter Role"
                    className="text-sm text-black w-full bg-opacity-70 px-2 py-2 mb-1 focus:outline-none"
                  />
                </div>
              </div>
      <button className="bg-[#287100] text-white sm:w-1/2 text-xl py-2 px-2 ">
        SignUp
      </button>
      {showSuccessToast && (
        <div className="text-[#287100] text-sm mt-2">
          Registration successful.
        </div>
      )}
      <div className="flex items-center mt-4">
        <div className="text-sm text-[#4B4B4B]">
          Already have an account?
          <button onClick={() => router.push("/login")} style={{ fontWeight: 'bold' }} className="ml-1">SignIn</button>
        </div>
      </div>
    </form>
  </div>
</div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;





























//  "use client";
// import React, { FormEvent, useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Signup = () => {
//   const router = useRouter();
//   const [user, setUser] = useState({
//     username: "",
//     first_name: "",
//     last_name: "",
//     phone_number: "", 
//     location: "",
//     role: "",
//   });

//   const [showSuccessToast, setShowSuccessToast] = useState(false);

//   const onSubmit = async (event: FormEvent) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://7db3-41-80-114-30.ngrok-free.app/api/register/",
//         user
//       );
//       const data = response.data;
//       console.log("Data posted successfully:", data);

//       setShowSuccessToast(true);

//       setTimeout(() => {
//         setShowSuccessToast(false);
//         router.push("/login");
//       }, 1900);

//     } catch (error) {
//       if (axios.isAxiosError(error) && error.response) {
//         console.error("Server returned an error:", error.response.data);
//         if (error.response.data.username) {
//           console.error("Username already exists:", error.response.data.username[0]);
//           toast.error("A user with that username already exists.");
//         }
//       } else {
//         console.error("No response received from the server.");
//         toast.error("An error occurred. Please try again later.");
//       }
//     }
//   };


//   return (
//     <div className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/green.webp)" }}>
//       <div className="flex flex-col sm:flex-row font-poppins text-xl p-14">
//         <div className="bg-[#287100] sm:w-1/2 flex justify-center sm:p-0">
//           <div className="-ml-28 w-20 h-18 mt-28">
//             <img src="/images/Logo.png" alt="Logo" />
//           </div>
//           <div>
//             <p className="-ml-20 mt-72 text-4xl font-['Poppins'] font-semibold text-[#E1C903] mb-9">
//               Welcome Back
//             </p>
//             <p className="-ml-20 text-40 text-white">
//               Growing Tomorrow, One<br></br>
//               Click at a time
//             </p>
//           </div>
//         </div>

//         <div className="w-full bg-white flex flex-col p-16 sm:w-1/2 sm:p-20 mt-[-1.%]">
//           <div className="justify-center mt-2">
//             <div className="title text-3xl font-bold text-[#287100]">
//               SignUp
//             </div>
//             <form className="flex  flex-col sm:w-full h-auto justify-center " onSubmit={onSubmit}>
//               <div className="mb-4 sm:mb-5 w-/3">
//                 <label className="text-sm text-black font-black text-custom-color" htmlFor="email round-20">
//                   USER NAME
//                 </label>
//                 <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
//                   <FontAwesomeIcon icon={faUser} className="mr-2  px-2 py-4" />
//                   <input
//                     onChange={(event) =>
//                       setUser({
//                         ...user,
//                         username: event.target.value,
//                       })
//                     }
//                     id="UserName"
//                     type="text"
//                     placeholder="Enter UserName"
//                     className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
//                   />
//                 </div>
//               </div>
//               <div className="mb-4 sm:mb-5 w-/3">
//                 <label className="text-sm text-black font-black text-custom-color" htmlFor="email">
//                   FIRST NAME
//                 </label>
//                 <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
//                   <FontAwesomeIcon icon={faUser} className="mr-2  px-2 py-4" />
//                   <input
//                     onChange={(event) =>
//                       setUser({
//                         ...user,
//                         first_name: event.target.value,
//                       })
//                     }
//                     id="FirstName"
//                     type="text"
//                     placeholder="Enter FirstName"
//                     className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
//                   />
//                 </div>
//               </div>
//               <div className="mb-4 sm:mb-5 w-/3">
//                 <label className="text-sm text-black font-black text-custom-color" htmlFor="LastName">
//                   LAST NAME
//                 </label>
//                 <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
//                   <FontAwesomeIcon icon={faUser} className="mr-2  px-2 py-4" />
//                   <input
//                     onChange={(event) =>
//                       setUser({
//                         ...user,
//                         last_name: event.target.value,
//                       })
//                     }
//                     id="LastName"
//                     type="text"
//                     placeholder="Enter LastName"
//                     className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
//                   />
//                 </div>
//                 <label className="text-sm text-black font-black text-custom-color" htmlFor="phonenumber">
//                   PHONE NUMBER
//                 </label>
//                 <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
//                   <FontAwesomeIcon icon={faPhone} className="mr-2  px-2 py-4" />
//                   <input
//                     onChange={(event) =>
//                       setUser({
//                         ...user,
//                         phone_number: event.target.value,
//                       })
//                     }
//                     id="phonenumber"
//                     placeholder="Enter Phone number"
//                     className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
//                   />
//                 </div>
//               </div>
//               <div className="mb-4 sm:mb-5 w-/3">
//                 <label className="text-sm text-black font-black text-custom-color" htmlFor="location">
//                   LOCATION
//                 </label>
//                 <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
//                   <input
//                     onChange={(event) =>
//                       setUser({
//                         ...user,
//                         location: event.target.value,
//                       })
//                     }
//                     id="location"
//                     type="text"
//                     placeholder="Enter Location"
//                     className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
//                   />
//                 </div>
//               </div>
//               <div className="mb-4 sm:mb-5 w-/3">
//                 <label className="text-sm text-black font-black text-custom-color" htmlFor="role">
//                   ROLE
//                 </label>
//                 <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
//                   <input
//                     onChange={(event) =>
//                       setUser({
//                         ...user,
//                         role: event.target.value,
//                       })
//                     }
//                     id="role"
//                     type="text"
//                     placeholder="Enter Role"
//                     className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
//                   />
//                 </div>
//               </div>
//               <button className="bg-[#287100] text-white  sm:w-1/2 text-xl py-2 px-05">
//                 SignUp
//               </button>
//               {showSuccessToast && (
//                 <div className="text-[#287100] text-sm mt-2">
//                   Registration successful. 
//                 </div>
//               )}
//               <div className="flex items-center mt-4">
//                 <div className="text-sm text-[#4B4B4B]">
//                   Already have an Account?
                  
//                   <button onClick={() => router.push("/login")} style={{ fontWeight: 'bold' }}>Login</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Signup;
















































// "use client";
// import React, { FormEvent, useState } from "react";
// import Link from "next/link";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEye,
//   faEyeSlash,
//   faUser,
//   faPhone,
// } from "@fortawesome/free-solid-svg-icons";
// import axios, { AxiosError } from "axios";
// import { useRouter } from "next/navigation";
// const Signup = () => {
//   const router = useRouter();
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [user, setUser] = useState({
//     username: "Mw",
//     first_name: "Mwithi",
//     last_name: "Akiru",
//     phone_number: "0721264202",
//     location: "Eldoret",
//     role: "farmer",
//     // username: "",
//     // first_name: "",
//     // last_name: "",
//     // role: "",
//     // location: "",
//     // phone_number: "",
//   });
//   const onSubmit = async (event: FormEvent) => {
//     event.preventDefault();
//     console.log("submiting started")
//     try {
//       const response = await axios.post(
//         "https://aminata-backend-2b69deaf02bf.herokuapp.com/api/register/",
//         user
//       );
//       const data = response.data;
//       console.log("Data posted successfully:", data);
//       router.push("/login")
      
//     } catch (error: any) {
//       if (error.response) {
//         console.error("Server returned an error:", error.response.data);
//         if (error.response.data.username) {
//           console.error(
//             "Username already exists:",
//             error.response.data.username[0]
//           );
//         }
//       } else {
//         console.error("No response received from the server.");
//       }
//     }
//   };
//   return (
//     <div
//       className="bg-cover bg-center h-screen"
//       style={{ backgroundImage: "url(/images/green.webp)" }}
//     >
//       <div className="flex flex-col sm:flex-row h-screen font-poppins text-xl p-12">
//         <div className="bg-[#287100] sm:w-1/2 flex justify-center py-4 sm:p-0">
//           <div className="-ml-28 w-20 h-18 mt-28">
//             <img src="/images/Logo.png" alt="Logo" />
//           </div>
//           <div>
//             <p className="-ml-20 mt-72 text-4xl  font-['Poppins'] font-semibold text-[#E1C903] mb-9">
//               Welcome Back
//             </p>
//             <p className="-ml-20  text-40 text-white">
//               Growing Tomorrow, One<br></br>
//               Click at a time
//             </p>
//           </div>
//         </div>

//         <div className="w-full bg-white flex flex-col p-16 sm:w-1/2 sm:p-20 " style={{ marginTop: '-80px' }}>
//           <div className="justify-center mt-2">
//             <div className="title text-3xl font-bold text-[#287100]">
//               SignUp
//             </div>
//             <form
//               className="flex  flex-col sm:w-full h-auto justify-center "
//               onSubmit={onSubmit}
//             >
//               <div className="mb-4 sm:mb-5 w-/3">
//                 <label
//                   className="text-sm text-black font-black text-custom-color"
//                   htmlFor="email round-20"
//                 >
//                   USER NAME
//                 </label>
//                 <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
//                   <FontAwesomeIcon icon={faUser} className="mr-2  px-2 py-4" />
//                   <input
//                     onChange={(event) =>
//                       setUser({
//                         ...user,
//                         username: event.target.value,
//                       })
//                     }
//                     id="UserName"
//                     type="UserName"
//                     placeholder="Enter UserName"
//                     className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
//                   />
//                 </div>
//               </div>
//               <div className="mb-4 sm:mb-5 w-/3">
//                 <label
//                   className="text-sm text-black font-black text-custom-color"
//                   htmlFor="email"
//                 >
//                   FIRST NAME
//                 </label>
//                 <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
//                   <FontAwesomeIcon icon={faUser} className="mr-2  px-2 py-4" />
//                   <input
//                     onChange={(event) =>
//                       setUser({
//                         ...user,
//                         first_name: event.target.value,
//                       })
//                     }
//                     id="FirstNmae"
//                     type="UserName"
//                     placeholder="Enter FirstName"
//                     className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
//                   />
//                 </div>
//               </div>
//               <div className="mb-4 sm:mb-5 w-/3">
//                 <label
//                   className="text-sm text-black font-black text-custom-color"
//                   htmlFor="LastName"
//                 >
//                   LAST NAME
//                 </label>
//                 <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
//                   <FontAwesomeIcon icon={faUser} className="mr-2  px-2 py-4" />
//                   <input
//                     onChange={(event) =>
//                       setUser({
//                         ...user,
//                         last_name: event.target.value,
//                       })
//                     }
//                     id="LastName"
//                     type="UserName"
//                     placeholder="Enter UserName"
//                     className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
//                   />
//                 </div>
//               </div>
//               <div className="mb-4 sm:mb-5 w-/3">
//                 <label
//                   className="text-sm text-black font-black text-custom-color"
//                   htmlFor="phonenumber"
//                 >
//                   PHONE NUMBER
//                 </label>
//                 <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
//                   <FontAwesomeIcon icon={faPhone} className="mr-2  px-2 py-4" />
//                   <input
//                     onChange={(event) =>
//                       setUser({
//                         ...user,
//                         phone_number: event.target.value,
//                       })
//                     }
//                     id="phonenumber"
//                     placeholder="Enter Phone number"
//                     className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
//                   />
//                 </div>
//               </div>
//               <div className="mb-4 sm:mb-5 w-/3">
//                 <label
//                   className="text-sm text-black font-black text-custom-color"
//                   htmlFor="password"
//                 >
//                   LOCATION
//                 </label>
//                 <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
//                   {/* <FontAwesomeIcon icon={faLocation} className="mr-2  px-2 py-4" /> */}
//                   <input
//                     onChange={(event) =>
//                       setUser({
//                         ...user,
//                         location: event.target.value,
//                       })
//                     }
//                     id="password"
//                     placeholder="Enter Location"
//                     className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
//                   />
//                 </div>
//               </div>
//               {/* <div className="flex items-center mb-4 sm:mb-5"> */}
//               <div className="mb-4 sm:mb-5 w-/3">
//                 <label
//                   className="text-sm text-black font-black text-custom-color"
//                   htmlFor="password"
//                 >
//                   Role
//                 </label>
//                 <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
//                   {/* <FontAwesomeIcon icon={faLocation} className="mr-2  px-2 py-4" /> */}
//                   <input
//                     onChange={(event) =>
//                       setUser({
//                         ...user,
//                         role: event.target.value,
//                       })
//                     }
//                     id="password"
//                     placeholder="Enter Role"
//                     className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
//                   />
//                 </div>
//               </div>

//               {/* <Link href="/login"> */}
//               <button className="bg-[#287100] text-white  sm:w-1/2 text-xl py-2 px-05">
//                 SignUp
//               </button>
//               {/* </Link> */}

//               <div className="flex items-center mt-4">
//                 <div className="text-sm text-[#4B4B4B]">
//                   Already have an Account ?
//                   {/* <Link href="/loginpage">
//             <span className=" text-black font-bold ml-5">Login</span>
//              </Link> */}
//                   <Link href="/login">
//                     <button>Login</button>
//                   </Link>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Signup;
