
'use client';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import userLogin from '../hooks/loginUser';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Login = () => {
  const [user, setUser] = useState({
    username: "",
    phone_number: "",
  })
  const [error, setError] = useState('');
  const router = useRouter();
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log("started to login user", user)
    try {
     
      console.log("login user", user)
      const loginuser = await axios.post("https://0535-41-80-113-133.ngrok-free.app/api/login/", {
      "username":user.username,
      "phone_number": user.phone_number
   });
      console.log("login api details", loginuser)
      router.push('/payment');
      
    } catch (error:any) {
      setError(error.message);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/green.webp)" }}>
      <div className="flex flex-col sm:flex-row h-screen font-poppins text-xl p-12">
        <div className="bg-[#287100] sm:w-1/2 flex justify-center py-4 sm:p-0">
          <div className="-ml-28 w-20 h-18 mt-28">
            <img src="/images/Logo.png" alt="Logo" />
          </div>
          <div>
            <p className="-ml-20 mt-72 text-4xl font-['Poppins'] font-semibold text-[#E1C903] mb-9">Welcome Back</p>
            <p className="-ml-20 text-40 text-white">
              Growing Tomorrow, One<br></br>
              Click at a time
            </p>
          </div>
        </div>
        <div className="w-full bg-white flex flex-col p-16 sm:w-1/2 sm:p-20 mt-[-1.%]">
          <div className="justify-center mt-2">
            <div className="title text-3xl font-bold text-[#287100]">SignIn</div>
            <form className="flex mt-10 flex-col sm:w-full h-auto justify-center  "
              onSubmit={onSubmit}
            >
            <label
                  className="text-sm text-black font-black text-custom-color"
                  htmlFor="email round-20"
                >
                  USER NAME
                </label>
            <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
                  <input
                    onChange={(event) =>
                      setUser({
                        ...user,
                        username: event.target.value,
                      })
                    }
                    id="Username"
                    type="text"
                    placeholder="Enter Username"
                    className="text-sm text-black w-full bg-opacity-70 px-2 py-2 mb-1 focus:outline-none"
                  />
                </div>
                <br/>

                
              <div className="mb-4 sm:mb-5 w-/3">
                <label className="text-sm text-black font-black text-custom-color" htmlFor="password">
                  PHONE NUMBER
                </label>
                <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
                  <input
                       onChange={(event) =>
                        setUser({
                          ...user,
                          phone_number: event.target.value,
                        })
                      }
                    id="phone_number"
                    type="number"
                    placeholder="Enter Phone number"
                    className="text-sm text-black w-full bg-opacity-70 px-2 py-2 mb-1 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center mb-4 sm:mb-5">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-black font-black text-custom-color">
                  Remember me
                </label>
                <div className="ml-auto">
                  <a href="#" className="text-sm text-[#287100] ">
                    
                  </a>
                </div>
              </div>
              <button
                className="bg-[#287100] text-white sm:w-1/2 text-xl py-2 px-05"
                // onClick={handleLogin}
              >
                SignIn
              </button>
              {/* <button className="bg-[#287100] text-white  sm:w-1/2 text-xl py-2 px-05">
                Login
              </button> */}
              <div className="flex items-center mt-4">
                <div className="text-sm text-[#4B4B4B]">
                  Don't have an account?
                  <Link href="/signup/">
            <span className=" text-black font-bold ml-5">SignUp</span>
             </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;