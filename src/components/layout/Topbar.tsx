import { useState , useContext, useEffect} from "react";

import {
  FiSearch,
  FiShield,
  FiShieldOff,
  FiLogOut,
} from "react-icons/fi";

import { useLocation } from "react-router-dom";
import ThemeDropdown from "../ui/ThemeDropdown";
import Notifications from "../ui/Notifications"
import { AppContext } from "../../context/AppContext";

import GlobalSearch from "../search/GlobalSearch"

export default function Topbar() {
  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    student,
    secure,
    setSecure,
    globalSearch,
    setGlobalSearch,
    user,
    logout,
  } = ctx;

  const location = useLocation();

  const [searchOpen, setSearchOpen] =
    useState(false);
  
  const hour =
  new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  const dashboardTitle =
    `${greeting}, ${student?.name  ?? "Student"}`

  const pageMap: Record<string, string> = {
    "/dashboard":dashboardTitle,
    "/courses": "My Courses",
    "/assignments": "Assignments",
    "/schedule": "Schedule",
    "/progress": "Progress",
    "/notifications": "Notifications",
    "/settings": "Settings",
  };

  const subtitleMap: Record<string, string> = {
    "/dashboard":
      "Here's what's happening with your courses today",

    "/courses":
      "Track progress and manage your academic workload",
    
    "/assignments":
      "Track coursework, deadlines, and completion progress",

    "/schedule":
      "Upcoming classes and events",

    "/progress":
      "Monitor academic performance",

    "/notifications":
      "Stay updated with course activity",

    "/settings":
      "Manage preferences and account settings",
  };

  

  const title =
    pageMap[location.pathname] || "Student Portal";

  const subtitle =
    subtitleMap[location.pathname] || "";




    useEffect(() => {

      const handleKeyDown =
        (e: KeyboardEvent) => {
    
          if (
            e.ctrlKey &&
            e.key === "k"
          ) {
    
            e.preventDefault();
    
            setSearchOpen(true);
    
          }
    
        };
    
      window.addEventListener(
        "keydown",
        handleKeyDown
      );
    
      return () =>
        window.removeEventListener(
          "keydown",
          handleKeyDown
        );
    
    }, []);



  return (
    <header className="topbar">

      <div className="topbar-left">

        <div>
          <h1>{title}</h1>

          <p>{subtitle}</p>
        </div>

      </div>

      <div className="topbar-right">

        <div
          className={
            searchOpen
              ? "topbar-search open"
              : "topbar-search"
          }
        >

          <button
            className="topbar-icon-btn"
            onClick={() =>
              setSearchOpen(!searchOpen)
            }
          >
            <FiSearch />
          </button>

          {searchOpen && (

            <div className="search-container">

              <input
                type="text"
                placeholder="Search courses, assignments..."
                value={globalSearch}
                onChange={(e) =>
                  setGlobalSearch(
                    e.target.value
                  )
                }
                autoFocus
              />

             <GlobalSearch/>

            </div>

            )}

          

        </div>
        <button 
          className={`secure-toggle ${
            secure ? "active" : ""
        }`}
          onClick={() =>
            setSecure(!secure)
          }
        >
          {secure ? (
            <FiShield />
          ):(
            <FiShieldOff />
          )}

          <span>
            {secure
            ? "Secure Mode"
            : "Visible"}
          </span>

        </button>

        <Notifications />

        <ThemeDropdown />

        <div className="user-avatar">
        {
          student?.name
            ?.split(" ")
            .map(
              (part) =>
                part[0]
            )
            .join("")
            .slice(0, 2)
        }
        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >
          <FiLogOut />
          Logout
        </button>


      </div>

    </header>
  );
}