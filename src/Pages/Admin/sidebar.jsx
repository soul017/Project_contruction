import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaProjectDiagram,
  FaUsers,
  FaTruck,
  FaUserTie,
  FaFileInvoice,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaBox,
  FaBoxes,
  FaBuilding,
  FaCreditCard,
  FaTasks,
  FaHistory,
  FaQuestionCircle,
  FaUserCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menus = [
    { title: "Dashboard", icon: <FaTachometerAlt />, path: "/admin" },
    { title: "CRM", icon: <FaProjectDiagram />, path: "/admin/projects" },
    // {
    //   title: "Alerts",
    //   icon: <FaUsers />,  //i have to edit here
    //   path: "/admin/alerts",
    // },
    {
      title: "Sales & Billing",
      icon: <FaUsers />,  //i have to edit here
      path: "/admin/SalesAndBilling",
    },
    {
      title: "Purchase Management",
      icon: <FaTruck />,
      path: "/admin/purchasemanagement",
    },
    {
      title: "Inventory Management",
      icon: <FaUserTie />,
      path: "/admin/subcontractors",
    },
    { title: "Bidding", icon: <FaFileInvoice />, path: "/admin/invoices" },
    {
      title: "Project Management",
      icon: <FaChartLine />,
      path: "/admin/projectmanagement",
    },
    {
      title: "Users",
      icon: <FaUserTie/>,
      path: "/admin/userassignment",
    },
     { title: "Contract Management", icon: <FaCog />, path: "/admin/contract-management" },
    {
      title: "Reports & Analytics",
      icon: <FaCog />,
      path: "/admin/Report&Analytics",
    },
    {
      title: "Equipment Management",
      icon: <FaCog />,
      path: "/admin/EquipmentManagement",
    },
    {
      title: "Document Management",
      icon: <FaCog />,
      path: "/admin/DocumentManagement",
    },
    { title: "HR & Payroll", icon: <FaCog />, path: "/admin/settings" },
    { title: "Health & Safety", icon: <FaCog />, path: "/admin/settings" },
    {
      title: "Client & Vendor Portal",
      icon: <FaCog />,
      path: "/admin/settings",
    },
    { title: "Quality Control", icon: <FaCog />, path: "/admin/settings" },
    {
      title: "Finance & Account Report",
      icon: <FaCog />,
      path: "/admin/settings",
    },
  ];
   




  return (
    <div
      className={`${
        isOpen ? "w-69" : "w-20"
      } bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 transition-all duration-300 flex flex-col h-100% shadow-2xl`}
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between p-6 border-b border-gray-700">
        <h1
          className={`text-2xl font-extrabold text-white ${
            !isOpen && "hidden"
          }`}
        >
          Client Panel
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-700"
        >
          {isOpen ? "<" : ">"}
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 p-2 space-y-2">
        {menus.map((menu, i) => (
          <Link
            key={i}
            to={menu.path}
            className="flex items-center gap-4 p-3 text-lg rounded-xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 transition-all duration-200 hover:shadow-lg group"
          >
            <span className="text-xl group-hover:scale-110 transition-transform duration-200">
              {menu.icon}
            </span>
            <span className={`${!isOpen && "hidden"} group-hover:text-white`}>
              {menu.title}
            </span>
          </Link>
        ))}
      </div>

      {/* Logout
      <div className="p-4 border-t border-gray-700">
        <Link
          to="/logout"
          className="flex items-center gap-3 p-3 text-lg rounded-xl hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 transition-all duration-200 text-red-400 hover:text-white hover:shadow-lg"
        >
          <FaSignOutAlt className="text-xl" />
          <span className={`${!isOpen && "hidden"}`}>Logout</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Sidebar;
