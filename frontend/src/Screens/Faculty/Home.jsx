import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Notice from "../../components/Notice";
import { HiMenuAlt3 } from 'react-icons/hi';
import Profile from "./Profile";
import Timetable from "./Timetable";
import { Toaster } from "react-hot-toast";
import Material from "./Material";
import Marks from "./Marks";
import Student from "./Student";
import { CgProfile } from "react-icons/cg";
import { PiStudent, PiExamFill } from "react-icons/pi";
import { FaBullhorn, FaStickyNote, FaRegClock } from "react-icons/fa";

const Home = () => {
  const [open, setOpen] = useState(true);
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

  const menuItems = [
    { name: "My Profile", icon: CgProfile, label: "Profile", color: "text-blue-600" },
    { name: "Student Info", icon: PiStudent, label: "Student", color: "text-green-600" },
    { name: "Upload Marks", icon: PiExamFill, label: "Marks", color: "text-red-500" },
    { name: "Timetable", icon: FaRegClock, label: "Timetable", color: "text-purple-600" },
    { name: "Notice", icon: FaBullhorn, label: "Notice", color: "text-yellow-600" },
    { name: "Material", icon: FaStickyNote, label: "Resources", color: "text-pink-500" },
  ];

  return (
    <section>
      {load && (
        <>
          <Navbar />
          <div className="flex bg-gray-100 min-h-screen">
            {/* Sidebar */}
            <div className={`bg-[#f8fafc] border-r min-h-screen ${open ? 'w-64' : 'w-20'} duration-300 px-4 py-3 relative shadow-md`}>
              <div className='flex justify-end mb-4'>
                <HiMenuAlt3 size={26} className='cursor-pointer text-gray-800' onClick={() => setOpen(!open)} />
              </div>

              <ul className="flex flex-col gap-3">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  const active = selectedMenu === item.name;
                  return (
                    <li
                      key={index}
                      onClick={() => setSelectedMenu(item.name)}
                      className={`group relative flex items-center gap-4 p-3 rounded-md cursor-pointer transition-all duration-200 
                        ${active ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-200 text-gray-800'}`}
                    >
                      <Icon className={`text-xl min-w-[24px] ${item.color}`} />
                      <span
                        className={`text-sm font-medium transition-all duration-300 ${
                          !open && 'opacity-0 translate-x-20 overflow-hidden'
                        }`}
                      >
                        {item.label}
                      </span>

                      {!open && (
                        <span className="absolute left-16 z-10 bg-white text-gray-800 px-2 py-1 text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-200">
                          {item.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4">
              {selectedMenu === "Timetable" && <Timetable />}
              {selectedMenu === "Upload Marks" && <Marks />}
              {selectedMenu === "Material" && <Material />}
              {selectedMenu === "Notice" && <Notice />}
              {selectedMenu === "My Profile" && <Profile />}
              {selectedMenu === "Student Info" && <Student />}
            </div>
          </div>
        </>
      )}
      <Toaster position="top-center" />
    </section>
  );
};

export default Home;
