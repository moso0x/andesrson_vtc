import React, {useState} from "react";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg"
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";


const Navbar = () => {
    const [selectedMenu, setSelectedMenu] = useState("Profile");
  const router = useLocation();
  const navigate = useNavigate();
  return (
    <div className="shadow-md px-6 py-4 bg-[#6dc3d0]">
      <div className=" flex justify-between items-center mx-auto">
      
        <p
          className="font-semibold text-2xl flex justify-center items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="mr-2">
            {/* Welcome${`name`} */}
            <img src={logo} alt="" className="w-10 h-10 rounded-full" />
          </span>{" "}
          {router.state && router.state.type}<div><p className="text-3xl"></p></div>
        </p>


        <div>
         
            <div className='flex items-center gap-2 cursor-pointer group relative'>
                
                <div className="flex  mr-8">
                  <CgProfile  className=' rounded-full' />
                  <MdKeyboardArrowDown />
                  </div>
              
                <div className='absolute right-0  pt-14 text-base font-medium text-gray-600 z-20 rounded-full hidden group-hover:block top-0 '>
                    <div className='min-w-48 bg-[#c6c6dc] rounded flex flex-col gap-4 px-16 py-4 bg-gray-'>
                        <p onClick={() => setSelectedMenu("Profile")} className='hover:text-black  cursor-pointer'>profile</p>
                        <p    onClick={() => navigate("/")}className='hover:text-black  cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>
        

            </div>
          

        
        {/* <button
          className="flex justify-center items-center text-red-500 px-3 py-2 font-semibold rounded-sm"
          onClick={() => navigate("/")}
        >
          Logout
          <span className="ml-2">
            
          </span>
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
