import React from "react";
import Sidebar from "../Admin/sidebar";
import Navbar from "../Admin/Navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex  bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar/>
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-4  overflow-y-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;