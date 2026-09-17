import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import MobileHeader from "../components/layout/MobileHeader";
import Topbar from "../components/layout/Topbar";

import Footer from "../components/layout/Footer";

export default function ProtectedLayout() {
  const [sidebarOpen, setSidebarOpen] =
  useState(false);

  return (
    <div className="dashboard-layout">

      {
        sidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )
      }

    <Sidebar
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}

    />

    <MobileHeader
      setSidebarOpen={setSidebarOpen}
    />
  
    <div className="page-wrapper">

    <Topbar />

      <div className="page-content">
        <Outlet />
      </div>

      <Footer />

    </div>
  
  </div>
  );
}