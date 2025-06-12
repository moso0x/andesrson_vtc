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
} from "react-icons/fa";
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
  // You can uncomment and enable these if needed
  // {
  //   key: "Admin",
  //   label: "Admin",
  //   icon: <RiShieldUserLine className="w-5 h-5 text-gray-800" />,
  // },
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
  const [dashboardData, setDashboardData] = useState({
    studentCount: "",
    facultyCount: "",
  });

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
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
        return <Profile />;
    }
  };

  return (
    <>
      {load && (
        <>
          <Navbar />
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-100 border-r shadow-sm p-4">
              <h2 className="text-2xl font-semibold mb-6 text-gray-700">Dashboard</h2>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li
                    key={item.key}
                    onClick={() => setSelectedMenu(item.key)}
                    className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer transition ${
                      selectedMenu === item.key
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.key === "Student" && dashboardData.studentCount && (
                      <span className="ml-auto text-sm text-gray-500">
                        {dashboardData.studentCount}
                      </span>
                    )}
                    {item.key === "Faculty" && dashboardData.facultyCount && (
                      <span className="ml-auto text-sm text-gray-500">
                        {dashboardData.facultyCount}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-white overflow-y-auto">{renderContent()}</div>
          </div>
        </>
      )}
      <Toaster position="top-center" />
    </>
  );
};

export default Home;
