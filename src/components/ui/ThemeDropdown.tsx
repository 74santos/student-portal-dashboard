import { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";

import {
  FiSun,
  FiMoon,
  FiMonitor,
  FiChevronDown,
} from "react-icons/fi";

export default function ThemeDropdown() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    theme,
    setTheme,
  } = ctx;

  const [open, setOpen] =
    useState(false);

  const themeMap = {
    light: <FiSun />,
    dark: <FiMoon />,
    system: <FiMonitor />,
  };

  return (
    <div className="theme-dropdown">

      <button
        className="topbar-icon-btn"
        onClick={() => setOpen(!open)}
      >

        {
          themeMap[
            theme as keyof typeof themeMap
          ]
        }

        <FiChevronDown />

      </button>

      {open && (
        <div className="theme-menu">

          <button
            onClick={() => {
              setTheme("light");
              setOpen(false);
            }}
          >
            <FiSun />

            Light
          </button>

          <button
            onClick={() => {
              setTheme("dark");
              setOpen(false);
            }}
          >
            <FiMoon />

            Dark
          </button>

          <button
            onClick={() => {
              setTheme("system");
              setOpen(false);
            }}
          >
            <FiMonitor />

            System
          </button>

        </div>
      )}

    </div>
  );
}