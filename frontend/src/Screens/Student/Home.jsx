import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Profile from "./Profile";
import Timetable from "./Timetable";
import Marks from "./Marks";
import Notice from "../../components/Notice";
import Material from "./Material";
import { Toaster } from "react-hot-toast";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

// Placeholder components for new menu items:

const Dashboard = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
    <p>Welcome to your dashboard. Here you can find quick stats and updates.</p>
  </div>
);

const FinancialsOverview = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Financials Summary</h1>
    <p>View your fee payments, invoices, and payment receipts.</p>
  </div>
);

const FeePayment = () => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Fee Payment</h2>
    <p>Make your school fee payments here securely.</p>
  </div>
);

const ProformaInvoice = () => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Proforma Invoice</h2>
    <p>View your proforma invoices and payment deadlines.</p>
  </div>
);

const FeesStatement = () => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Fees Statement</h2>
    <p>Your detailed fee statements are available here.</p>
  </div>
);

const FeesStatementPDF = () => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Fees Statement - PDF</h2>
    <p>Download your fee statement as a PDF file.</p>
  </div>
);

const PaymentReceipts = () => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Payment Receipts</h2>
    <p>Access receipts of all your payments.</p>
  </div>
);

const Academics = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Academics</h1>
    <p>Access academic calendars, syllabus, and academic performance reports.</p>
  </div>
);


const SpecialExams = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Special Exams</h1>
    <p>Information and registration for special exams.</p>
  </div>
);

const Downloads = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Downloads</h1>
    <p>Download important forms, timetables, and resources.</p>
  </div>
);

const StudentsClearance = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Students Clearance</h1>
    <p>Track your clearance status for graduation or transfer.</p>
  </div>
);

const InterSchoolTransfer = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Inter-School Transfer</h1>
    <p>Apply for transfer to another school and track status.</p>
  </div>
);

const Settings = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Settings</h1>
    <p>Manage your account settings and preferences.</p>
  </div>
);

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState("My Profile");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [load, setLoad] = useState(false);
  const [financialsOpen, setFinancialsOpen] = useState(false);

  const router = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (router.state === null) {
      navigate("/");
    }
    setLoad(true);
  }, [navigate, router.state]);

  const handleSelect = (label) => {
    setSelectedMenu(label);
  };

  const baseMenus = [
    { label: "Dashboard", icon: "📊" },
    {
      label: "Financials",
      icon: "💰",
      hasCaret: true,
      submenu: [
        "Fee Payment",
        "Proforma Invoice",
        "Fees Statement",
        "Fees Statement - PDF",
        "Payment Receipts",
      ],
    },
     
    { label: "Timetable", icon: "📅" },
    { label: "Material", icon: "📚" },
    { label: "Marks", icon: "📝" },
    { label: "Notice", icon: "📢" },
    { label: "Academics", icon: "🎓", hasCaret: true },
    
    { label: "Special Exams", icon: "🧪" },
    { label: "Downloads", icon: "⬇️" },
    { label: "Students Clearance", icon: "✅" },
    { label: "Inter-School Transfer", icon: "🔁" },
    { label: "Settings", icon: "⚙️", hasCaret: true },
    { label: "My Profile", icon: "👤" },
   
  ];

  // For settings & academics dropdowns, you can add similar toggles if needed

  const renderContent = () => {
    switch (selectedMenu) {
      case "Dashboard":
        return <Dashboard />;
      case "Financials":
        return <FinancialsOverview />;
      case "Fee Payment":
        return <FeePayment />;
      case "Proforma Invoice":
        return <ProformaInvoice />;
      case "Fees Statement":
        return <FeesStatement />;
      case "Fees Statement - PDF":
        return <FeesStatementPDF />;
      case "Payment Receipts":
        return <PaymentReceipts />;
      case "Academics":
        return <Academics />;
  
      case "Special Exams":
        return <SpecialExams />;
      case "Downloads":
        return <Downloads />;
      case "Students Clearance":
        return <StudentsClearance />;
      case "Inter-School Transfer":
        return <InterSchoolTransfer />;
      case "Settings":
        return <Settings />;
      case "Timetable":
        return <Timetable />;
      case "Marks":
        return <Marks />;
      case "Material":
        return <Material />;
      case "Notice":
        return <Notice />;
      case "My Profile":
        return <Profile />;
      default:
        return (
          <div className="text-xl font-semibold text-gray-700">
            {selectedMenu}
          </div>
        );
    }
  };

  return (
    <section>
      {load && (
        <>
          <Navbar />
          <div className="flex">
            {/* Sidebar */}
            <div
              className={`bg-[#91b150] min-h-screen ${
                sidebarOpen ? "w-60" : "w-16"
              } duration-500 text-white px-3 pt-4`}
            >
              <div className="flex justify-end mb-6">
                <HiMenuAlt3
                  size={26}
                  className="cursor-pointer"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                />
              </div>

              <ul className="space-y-2">
                {baseMenus.map((item) => {
                  const isSelected = selectedMenu === item.label;
                  const showSubmenu = item.label === "Financials" && financialsOpen;

                  return (
                    <React.Fragment key={item.label}>
                      <li
                        className={`group flex items-center justify-between ${
                          sidebarOpen ? "px-2" : ""
                        } text-sm font-medium p-2 rounded-md cursor-pointer hover:bg-[#7f9f40] transition ${
                          isSelected ? "bg-[#7f9f40]" : ""
                        }`}
                        onClick={() => {
                          if (item.label === "Financials") {
                            setFinancialsOpen(!financialsOpen);
                          } else {
                            handleSelect(item.label);
                          }
                        }}
                      >
                        <div className="flex items-center gap-3.5">
                          <span>{item.icon}</span>
                          <span
                            className={`duration-200 ${
                              !sidebarOpen
                                ? "opacity-0 translate-x-28 overflow-hidden"
                                : ""
                            }`}
                          >
                            {item.label === "My Profile" ? "Profile" : item.label}
                          </span>
                        </div>
                        {item.hasCaret && sidebarOpen && (
                          showSubmenu ? (
                            <FaChevronUp size={12} className="text-white" />
                          ) : (
                            <FaChevronDown size={12} className="text-white" />
                          )
                        )}
                      </li>

                      {/* Submenu for Financials */}
                      {item.label === "Financials" &&
                        showSubmenu &&
                        sidebarOpen &&
                        item.submenu?.map((sub) => (
                          <li
                            key={sub}
                            className={`ml-8 text-sm py-1 pl-3 pr-2 rounded hover:bg-[#6e8e3b] cursor-pointer ${
                              selectedMenu === sub ? "bg-[#7f9f40]" : ""
                            }`}
                            onClick={() => handleSelect(sub)}
                          >
                            {sub}
                          </li>
                        ))}
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 max-w-6xl mx-auto">{renderContent()}</div>
          </div>
        </>
      )}
      <Toaster position="top-center" />
    </section>
  );
};

export default Home;