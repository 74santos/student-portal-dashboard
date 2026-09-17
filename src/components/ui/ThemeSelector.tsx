import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {
  FiSun,
  FiMoon,
  FiMonitor,
} from "react-icons/fi";



export default function ThemeSelector() {
  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const { theme, setTheme } = ctx;

  return (
    <div className="theme-selector">
      <button
        className={theme === "light" ? "active" : ""}
        onClick={() => setTheme("light")}
      >
        <FiSun />
      </button>

      <button
        className={theme === "dark" ? "active" : ""}
        onClick={() => setTheme("dark")}
      >
        <FiMoon />
      </button>

      <button
        className={theme === "system" ? "active" : ""}
        onClick={() => setTheme("system")}
      >
        <FiMonitor />
      </button>
    </div>
  );
}