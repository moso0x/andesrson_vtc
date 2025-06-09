import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Notice from "../../components/Notice";
import { HiMenuAlt3 } from 'react-icons/hi'
import Profile from "./Profile";
import Timetable from "./Timetable";
import { Toaster } from "react-hot-toast";
import Material from "./Material";
import Marks from "./Marks";
import Student from "./Student";
import { CgProfile } from "react-icons/cg";
import { PiStudent } from "react-icons/pi";
import { PiExamFill } from "react-icons/pi";
import { FaBullhorn, FaBell, FaStickyNote } from "react-icons/fa";
import {  FaRegClock,  } from "react-icons/fa";
const Home = () => {

  const [open, setOpen] = useState(true)
  const router = useLocation();
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("My Profile");
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (router.state === null) {
      navigate("/");
    }
    setLoad(true);
  }, [navigate, router.state]);



  return (
    <section>
      {load && (
        <>
          <Navbar />
          <div className=" px-8 bg-gary-200 p-2 flex">
          <div className={`bg-[#91b150] min-h-screen ${open? 'w-60' : 'w-16'} duration-500 text-gray-100 px-4  justify-start`}>
            <div className='py-3 flex justify-end'>
                {open? <HiMenuAlt3 size={26} className='text-white cursor-pointer'  onClick={()=> setOpen(!open)}/>: <HiMenuAlt3 size={26} className='text-white cursor-pointer'  onClick={()=> setOpen(!open)}/> }
            
            </div>
           
            <ul className=" justify-between flex flex-col items-center gap-2 w-full mx-auto px-14 ">

              
              <li
                className={`text-center text flex rounded-sm px-1   cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "My Profile"
                    ? " rounded-sm"
                    : "text-black  "
                }`}
                onClick={() => setSelectedMenu("My Profile")}
              >
               <span className={`flex gap-2 items-center ${'mt-5'} group flex text-sm gap-3.5 font-medium rounded-md}`}>< CgProfile className="w-8 h-8 text-[#111111]" /> 
               <h2 style={{ transitionDelay : `${3}00ms`,}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Profile</h2>
               <h2 className={`${open && 'hidden'} 
                absolute left-24 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden  group-hover:py-1  group-hover:duration-300 group-hover:w-fit`}> Profile</h2>
               
               </span>
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2  cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Student Info"
                    ? "  rounded-sm"
                    : "text-black "
                }`}
                onClick={() => setSelectedMenu("Student Info")}
              >

         
               <span className={`flex gap-2 items-center ${'mt-5'} group flex text-sm gap-3.5 font-medium rounded-md}`}>< PiStudent className="w-8 h-8 text-[#111111]" /> 
               <h2 style={{ transitionDelay : `${3}00ms`,}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Student</h2>
               <h2 className={`${open && 'hidden'} 
                absolute left-24 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden  group-hover:py-1  group-hover:duration-300 group-hover:w-fit`}> Student</h2>
               
               </span>
                
                
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2  cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Upload Marks"
                    ? "  rounded-sm"
                    : "text-black "
                }`}
                onClick={() => setSelectedMenu("Upload Marks")}
              >
          


               <span className={`flex gap-2 items-center ${'mt-5'} group flex text-sm gap-3.5 font-medium rounded-md}`}><  PiExamFill className="w-8 h-8 text-[#111111]" /> 
               <h2 style={{ transitionDelay : `${3}00ms`,}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Marks</h2>
               <h2 className={`${open && 'hidden'} 
                absolute left-24 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden  group-hover:py-1  group-hover:duration-300 group-hover:w-fit`}> Marks</h2>
               
               </span>
               
              </li>
              <li
                className={`text-center rounded-sm px-24 py-2 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Timetable"
                    ? " rounded-sm"
                    : "text-black   "
                }`}
                onClick={() => setSelectedMenu("Timetable")}
              >

               <span className={`flex gap-2 items-center ${'mt-5'} group flex text-sm gap-3.5 font-medium rounded-md}`}><  FaRegClock className="w-8 h-8 text-[#111111]" /> 
               <h2 style={{ transitionDelay : `${3}00ms`,}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Timetable</h2>
               <h2 className={`${open && 'hidden'} 
                absolute left-24 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden  group-hover:py-1  group-hover:duration-300 group-hover:w-fit`}> Timetable</h2>
               
               </span>
              
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2  cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Notice"
                    ? "   rounded-sm"
                    : " text-balck "
                }`}
                onClick={() => setSelectedMenu("Notice")}
              >
              
               <span className={`flex gap-2 items-center ${'mt-5'} group flex text-sm gap-3.5 font-medium rounded-md}`}><   FaBullhorn className="w-8 h-8 text-[#111111]" /> 
               <h2 style={{ transitionDelay : `${3}00ms`,}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Notice</h2>
               <h2 className={`${open && 'hidden'} 
                absolute left-24 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden  group-hover:py-1  group-hover:duration-300 group-hover:w-fit`}> Notice</h2>
               
               </span>
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Material"
                    ? "b   rounded-sm"
                    : "text-black  border-b-2 "
                }`}
                onClick={() => setSelectedMenu("Material")}
              >

               <span className={`flex gap-2 items-center ${'mt-5'} group flex text-sm gap-3.5 font-medium rounded-md}`}><    FaStickyNote className="w-8 h-8 text-[#111111]" /> 
               <h2 style={{ transitionDelay : `${3}00ms`,}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Resources</h2>
               <h2 className={`${open && 'hidden'} 
                absolute left-24 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden  group-hover:py-1  group-hover:duration-300 group-hover:w-fit`}>Resources</h2>
               
               </span>
              
               
              </li>
            </ul>
            </div>
            {selectedMenu === "Timetable" && <Timetable />}
            {selectedMenu === "Upload Marks" && <Marks />}
            {selectedMenu === "Material" && <Material />}
            {selectedMenu === "Notice" && <Notice />}
            {selectedMenu === "My Profile" && <Profile />}
            {selectedMenu === "Student Info" && <Student />}
          </div>
        </>
      )}
      <Toaster position="top-center" />
    </section>
  );
};

export default Home;
