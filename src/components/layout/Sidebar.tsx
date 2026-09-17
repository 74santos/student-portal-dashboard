import { FaHome,FaBook, FaRegCalendarAlt, FaChartLine, FaCog } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { LuClipboardPenLine } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { NavLink } from "react-router-dom"

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen:
    React.Dispatch<
      React.SetStateAction<boolean>
    >;
};

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  
  return (
    <aside className={
      sidebarOpen
        ? "sidebar open"
        : "sidebar"
    }>

    {/* <button
      className="sidebar-close"
      onClick={() => setSidebarOpen(false)}
    >
      ✕
    </button> */}

      <h2><IoSchoolSharp />  Student Portal</h2>

      <nav>
        <NavLink to="/dashboard"
         onClick={() => setSidebarOpen(false)}
        >
          <FaHome />Dashboard
        </NavLink>

        <NavLink to="/courses"
         onClick={() => setSidebarOpen(false)}
        >
         <FaBook /> Courses
        </NavLink>

        <NavLink to="/assignments">
        <LuClipboardPenLine />
        Assignments
        </NavLink>

        <NavLink to="/schedule"
         onClick={() => setSidebarOpen(false)}
        >
        <FaRegCalendarAlt />Schedule
        </NavLink>

        <NavLink to="/progress"
         onClick={() => setSidebarOpen(false)}
        >
        <FaChartLine />Progress
        </NavLink>

        <NavLink to="/notifications"
         onClick={() => setSidebarOpen(false)}
        >
        <FiBell />Notifications
        </NavLink>

        <NavLink to="/settings"
         onClick={() => setSidebarOpen(false)}
        >
        <FaCog />Settings
        </NavLink>
      </nav>
    </aside>
  );
}