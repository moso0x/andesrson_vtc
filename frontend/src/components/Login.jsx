import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiLock, FiLogIn } from "react-icons/fi";
import axios from "axios";
import { Mail, Lock, Loader } from "react-icons";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { baseApiURL } from "../baseUrl";
import logo from "../assets/logo.jpg"
const Login = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Student");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.login !== "" && data.password !== "") {
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(`${baseApiURL()}/${selected.toLowerCase()}/auth/login`, data, {
          headers: headers,
        })
        .then((response) => {
          navigate(`/${selected.toLowerCase()}`, {
            state: { type: selected, loginid: response.data.loginid },
          });
        })
        .catch((error) => {
          toast.dismiss();
          console.error(error);
          toast.error(error.response.data.message);
        });
    } else {
    }
  };
  return (
    <div className=" relative bg-gray-200 mt-[60px] h-[100vh] w-full flex justify-between mx-auto items-center">
     
  
      <div className="border bg-gray-50 flex justify-center relative items-start flex-col  mx-auto rounded-lg">
       <div className="flex flex-col bg-[#AEC8A4] p-8 rounded-md">
        <div className="">
        <img className=" items-center rounded-full w-[100px]  mx-auto" src={logo} alt={logo} />
        </div>
        <div>  <p className="font-semibold text-[#3B3B1A] text-lg ">Andersen Vocational Training Institute</p></div>
      
      
       
        </div> 
        <div>
          
        </div>
        <p className=" text-[#00a7d0]   font-semibold p-4 border-b-2 ">
          <span className="text-[#FFA500]">   {selected && selected} </span>
        Sign In
        </p>
        <form
          className="flex justify-center items-start flex-col w-full  p-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col ">
            <label className="mb-1 text-xl pb-2  text-gray-700" htmlFor="eno">
              Sign In Details
            </label>
            <input
              placeholder="Enter your username "
              id="eno"
              required
              className="bg-white mx-auto focus:outline-none outline-none border-2 border-gray-400 py-2 px-4 rounded-md "
              {...register("loginid")}
            />
          </div>
          <div className="flex flex-col  mt-3">
          
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className="bg-white outline-none border-2 border-gray-400 py-2 px-4 rounded-md  "
              {...register("password")}
            />
          </div>
           <div className="flex  mt-3 justify-start items-center">
            <input type="checkbox" id="remember" className="accent-blue-500" />{"  "}
            <p className="text-sm pl-2">Remember Me</p> 
          </div> 
          <div className="flex flex-row gap-8">
          <button className="bg-[#FFA500] flex flex-col mt-5 text-white px-6 py-2 text-sm rounded-lg mx-auto hover:bg-opacity-95 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all flex justify-center items-center">
            
             <span> forgot password?  </span><span className="text-xm text-[#355F2E]">Contact admin to reset</span>

          </button>
          <button className="bg-[#00a7d0] mt-5 text-white px-6 py-2 text-sm rounded-lg mx-auto hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all flex justify-center items-center">
            Sign In
            <span className="ml-2">
              <FiLock />
            </span>
          </button>

          </div>

          
        </form>
      </div>
    
        
      <div className="absolute top-4 flex right-4 ">
     
      <div>
      <button
          className={`text-gray-600 mr-6  font-semibold hover:text-[#00a7d0] ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
            selected === "Student" && "border-b-1 border-[#00a7d0]"
          }`}
          onClick={() => setSelected("Student")}
        >
          Student
        </button>
        <button
          className={`text-gray-600 mr-6 text-base font-semibold hover:text-[#00a7d0]  ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
            selected === "Faculty" && "border-b-1  border-[#00a7d0]"
          }`}
          onClick={() => setSelected("Faculty")}
        >
          Faculty
        </button>
        <button
          className={`text-gray-600 mr-6 text-base font-semibold hover:text-[#00a7d0] ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
            selected === "Admin" && "border-b-1  border-[#00a7d0]"
          }`}
          onClick={() => setSelected("Admin")}
        >
          Admin
        </button>



      </div>
      
       
   
      </div>
      <Toaster position="top-center text-blue-700" />
    </div>
  );
};

export default Login;
