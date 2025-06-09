
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import Notice from "../../components/Notice";
import Student from "./Student";
import Faculty from "./Faculty";
import { FaBookOpen } from 'react-icons/fa';

import { RiShieldUserLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Subjects from "./Subject";
import { baseApiURL } from "../../baseUrl";
import Admin from "./Admin";
import Profile from "./Profile";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Branch from "./Branch";
import { FaChalkboardTeacher, FaUserShield, FaInfoCircle } from 'react-icons/fa';

const Home = () => {
  const router = useLocation();
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Profile");
  const [dashboardData, setDashboardData] = useState({
    studentCount: "",
    facultyCount: "",
  });
  useEffect(() => {
    if (router.state === null) {
      navigate("/");
    }
    setLoad(true);
  }, [navigate, router.state]);

  useEffect(() => {
    getStudentCount();
    getFacultyCount();
  }, []);

  const getStudentCount = () => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .get(`${baseApiURL()}/student/details/count`, {
        headers: headers,
      })
      .then((response) => {
        if (response.data.success) {
          setDashboardData({
            ...dashboardData,
            studentCount: response.data.user,
          });
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getFacultyCount = () => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .get(`${baseApiURL()}/faculty/details/count`, {
        headers: headers,
      })
      .then((response) => {
        if (response.data.success) {
          setDashboardData({
            ...dashboardData,
            facultyCount: response.data.user,
          });
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {load && (
        <>
          <Navbar />
          <div className="max-w-6xl mx-auto">
            <ul className="flex flex-row  justify-evenly items-center gap-10 w-full mx-auto my-8">
              
              
               {/* <li
                className={`text-center w-[300px] h-[100px] rounded-full px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Profile"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-gray-200 rounded-lg text-white hover:bg-gray-100 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Profile")}
              >
                <span className="flex gap-2"> <CgProfile className="flex text-gray-800 items-center w-8 h-8"/> <p className="text-xl text-gray-700 p-4 ">Profile</p> </span> 

            
                
              </li> */}
              
              <li
                className={`text-center w-[300px] h-[100px] rounded-full px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Student"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-gray-200 rounded-lg text-white hover:bg-gray-100 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Student")}
              > 
                <span className="flex gap-2"> <FaUserGraduate className="flex text-[#009ecb] items-center w-8 h-8"/> <p className="text-xl text-gray-700 p-2">Student</p> </span> 
                <p className="text-sm text-gray-950 flex gap-2 ">No of students: <span className="text-[]">200</span></p>
              </li> 
              <li
                className={`text-center w-[300px] h-[100px] rounded-full px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Faculty"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-gray-200 rounded-lg text-white hover:bg-gray-100 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Faculty")}
              >
                <span className="flex gap-2"> <FaChalkboardTeacher className="flex text-[#57a759] items-center w-8 h-8"/> <p className="text-xl text-gray-700 p-2 ">Faculty</p> </span> 
                <p className="text-sm text-gray-950 flex gap-2 ">No of Staff: <span className="text-green px-4-">10</span></p>
              </li>
               <li
                className={`text-center w-[300px] h-[100px] rounded-full px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Branch"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-[#b2b7d2] rounded-lg text-white hover:bg-gray-100 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Branch")}
              >
                <span className="flex gap-2"> <MdOutlineLibraryBooks className="flex text-[#8a5199] items-center w-8 h-8"/> <p className="text-xl text-gray-700 p-4 ">Branch</p> </span> 
                <p className="text-sm text-gray-950 flex pag-2 "> Branches<span className="text-green pl-4">10</span></p>
              </li>
              
              <li
                className={`text-center w-[300px] h-[100px] rounded-full px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Notice"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-[#c6c6dc] rounded-lg text-white hover:bg-gray-100 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Notice")}
              >
               <span className="flex gap-2"> <AiOutlineInfoCircle className="flex text-[#cc711d] items-center w-8 h-8"/> <p className="text-xl text-gray-700 p-4 ">Notice</p> </span> 
               <p className="text-sm text-gray-950 flex ">Notices<span className="text-green pl-4">4</span></p>
              </li>
         
              <li
                className={`text-center w-[300px] h-[100px] rounded-full px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Course"
                    ? "border-b-2 pb-2 border-blue-500 bg-[#dbc0d4] rounded-sm"
                    : " bg-[#dbc0d4] rounded-lg text-white hover:bg-gray-100 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Subjects")}
              >
                <span className="flex gap-2"> <FaBookOpen className="flex text-blue-800 items-center w-8 h-8"/> <p className="text-xl text-gray-700 p-4 ">Course</p> </span> 
                <p className="text-sm text-gray-950 flex ">Courses<span className="text-green pl-2">40</span></p>
              </li>
      
              {/* <li
                className={`text-center w-[300px] h-[100px] rounded-full px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Admin"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-gray-200 rounded-lg text-white hover:bg-gray-100 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Admin")}
              >
               <span className="flex gap-2"> <RiShieldUserLine className="flex text-gray-800 items-center w-8 h-8"/> <p className="text-xl text-gray-700 p-4 ">Admin</p> </span> 
               <p className="text-sm flex ">Admins<span className="text-green pl-2">1</span></p>
              </li>  */}
            </ul>

            <>
              {selectedMenu === "Branch" && <Branch />}
              {selectedMenu === "Notice" && <Notice />}
              {selectedMenu === "Student" && <Student />}
              {selectedMenu === "Faculty" && <Faculty />}
              {selectedMenu === "Subjects" && <Subjects />}
              {selectedMenu === "Admin" && <Admin />}
              {selectedMenu === "Profile" && <Profile />}
            </>
          </div>
        </>
      )}
      <Toaster position="top-center" />
    </>
  );
};

export default Home;