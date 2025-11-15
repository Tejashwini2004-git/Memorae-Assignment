import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../shared/DashboardSidebar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />
      <div className="flex-1 p-8 bg-sky-50">
        <Outlet />
      </div>
    </div>
  );
}
