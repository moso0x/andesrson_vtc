import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Profile from "./Profile";
import Timetable from "./Timetable";
import Marks from "./Marks";
import Notice from "../../components/Notice";
import Material from "./Material";
import { Toaster } from "react-hot-toast";
import { HiMenuAlt3 } from "react-icons/hi";

import { useLocation, useNavigate } from "react-router-dom";
const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState("My Profile");
  const router = useLocation();
  const navigate = useNavigate();
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
                         <span className={`flex gap-2 items-center ${'mt-5'} group flex text-sm gap-3.5 font-medium rounded-md}`}>
                         <h2 style={{ transitionDelay : `${3}00ms`,}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Profile</h2>
                         <h2 className={`${open && 'hidden'} 
                          absolute left-24 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden  group-hover:py-1  group-hover:duration-300 group-hover:w-fit`}> Profile</h2>
                         
                         </span>
                        </li>
                            <li
                            className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                              selectedMenu === "Timetable"
                                ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                                : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
                            }`}
                            onClick={() => setSelectedMenu("Timetable")}
                          >
                            Timetable
                          </li>
                                <li
                            className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                              selectedMenu === "Material"
                                ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                                : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
                            }`}
                            onClick={() => setSelectedMenu("Material")}
                          >
                            Material
                          </li>
                                          <li
                      className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                        selectedMenu === "Notice"
                          ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                          : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
                      }`}
                      onClick={() => setSelectedMenu("Notice")}
                    >
                      Notice
                    </li>
                        </ul>
</div>
</div>



          <div className="max-w-6xl mx-auto ">
            <ul className="flex justify-evenly items-center gap-10 w-full mx-auto my-8 text-sm ">
              {/* <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "My Profile"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("My Profile")}
              >
                My Profile
              </li> */}
{/*           
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Marks"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Marks")}
              >
                Marks
              </li> */}
              {/* <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Material"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Material")}
              >
                Material
              </li> */}
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Notice"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Notice")}
              >
                Notice
              </li>
            </ul>
            {selectedMenu === "Timetable" && <Timetable />}
            {selectedMenu === "Marks" && <Marks />}
            {selectedMenu === "Material" && <Material />}
            {selectedMenu === "Notice" && <Notice />}
            {selectedMenu === "My Profile" && <Profile />}
          </div>
        </>
      )}
      <Toaster position="top-center" />
    </section>
  );
};

export default Home;
