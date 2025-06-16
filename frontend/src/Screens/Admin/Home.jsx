import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

import Notice from "../../components/Notice";
import Student from "./Student";
import Faculty from "./Faculty";
import Subjects from "./Subject";
import Admin from "./Admin";
import Profile from "./Profile";
import Branch from "./Branch";

import {
  FaBookOpen,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaInfoCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { RiShieldUserLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineLibraryBooks } from "react-icons/md";

import { baseApiURL } from "../../baseUrl";

const menuItems = [
  {
    key: "Student",
    label: "Student",
    icon: <FaUserGraduate className="w-5 h-5 text-[#009ecb]" />,
  },
  {
    key: "Faculty",
    label: "Faculty",
    icon: <FaChalkboardTeacher className="w-5 h-5 text-[#57a759]" />,
  },
  {
    key: "Branch",
    label: "Department",
    icon: <MdOutlineLibraryBooks className="w-5 h-5 text-[#8a5199]" />,
  },
  {
    key: "Notice",
    label: "Notice",
    icon: <AiOutlineInfoCircle className="w-5 h-5 text-[#cc711d]" />,
  },
  {
    key: "Subjects",
    label: "Course",
    icon: <FaBookOpen className="w-5 h-5 text-blue-800" />,
  },
  {
    key: "Admin",
    label: "Admin",
    icon: <RiShieldUserLine className="w-5 h-5 text-gray-800" />,
  },
  {
    key: "Profile",
    label: "Profile",
    icon: <FaInfoCircle className="w-5 h-5 text-gray-800" />,
  },
];

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Profile");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    studentCount: "",
    facultyCount: "",
  });

  useEffect(() => {
    if (!location.state) {
      toast.error("Invalid session. Redirecting...");
      navigate("/");
      return;
    }
    setLoad(true);
  }, [navigate, location.state]);

  useEffect(() => {
    getStudentCount();
    getFacultyCount();
  }, []);

  const getStudentCount = async () => {
    try {
      const { data } = await axios.get(`${baseApiURL()}/student/details/count`);
      if (data.success) {
        setDashboardData((prev) => ({ ...prev, studentCount: data.user }));
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getFacultyCount = async () => {
    try {
      const { data } = await axios.get(`${baseApiURL()}/faculty/details/count`);
      if (data.success) {
        setDashboardData((prev) => ({ ...prev, facultyCount: data.user }));
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "Student":
        return <Student />;
      case "Faculty":
        return <Faculty />;
      case "Branch":
        return <Branch />;
      case "Notice":
        return <Notice />;
      case "Subjects":
        return <Subjects />;
      case "Admin":
        return <Admin />;
      case "Profile":
      default:
        return <Profile locationState={location.state} />;
    }
  };

  return (
    <>
      {load && (
        <>
          <Navbar />
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <div
              className={`${
                sidebarOpen ? "w-64" : "w-16"
              } transition-all duration-300 bg-[#f8fafc] border-r shadow-sm p-4 flex flex-col`}
            >
              <div className="flex items-center justify-between mb-6">
                {sidebarOpen && (
                  <h2 className="text-xl font-semibold text-gray-700">Dashboard</h2>
                )}
                <button
                  onClick={() => setSidebarOpen((prev) => !prev)}
                  className="text-gray-600 hover:text-blue-600 ml-auto"
                >
                  {sidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li
                    key={item.key}
                    onClick={() => setSelectedMenu(item.key)}
                    title={!sidebarOpen ? item.label : ""}
                    className={`group flex items-center gap-4 px-3 py-3 rounded-lg cursor-pointer transition-colors relative ${
                      selectedMenu === item.key
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "hover:bg-blue-50 text-gray-800"
                    }`}
                  >
                    <span>{item.icon}</span>
                    {sidebarOpen && <span>{item.label}</span>}
                    {sidebarOpen && item.key === "Student" && dashboardData.studentCount && (
                      <span className="ml-auto text-sm text-gray-500">
                        {dashboardData.studentCount}
                      </span>
                    )}
                    {sidebarOpen && item.key === "Faculty" && dashboardData.facultyCount && (
                      <span className="ml-auto text-sm text-gray-500">
                        {dashboardData.facultyCount}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-white overflow-y-auto transition-all duration-300">
              {renderContent()}
            </div>
          </div>
        </>
      )}
      <Toaster position="top-center" />
    </>
  );
};

export default Home;
