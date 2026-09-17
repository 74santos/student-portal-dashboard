import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useContext } from "react";

import { AppContext } from "./context/AppContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import Schedule from "./pages/Schedule";
import Progress from "./pages/Progress";
import Notifications from "./pages/Notifications"
import Settings from "./pages/Settings"

import ProtectedLayout from "./layouts/ProtectedLayout";
import Register from "./pages/Register";

// import "./App.css";





export default function App() {
  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const { isAuthenticated } = ctx;

  return (
    <Routes>

      {/* ROOT */}
      <Route
        path="/"
        element={
          <Navigate
            to={
              isAuthenticated
                ? "/dashboard"
                : "/login"
            }
            replace
          />
        }
      />

      {/* LOGIN */}
      <Route
        path="/login"
        element={
          isAuthenticated
            ? <Navigate to="/dashboard" replace />
            : <Login />
        }
      />

     {/* REGISTER */}
      <Route
        path="/register"
        element={
          isAuthenticated
            ? <Navigate to="/dashboard" replace />
            : <Register />
        }
      />

      {/* PROTECTED */}
      <Route
        element={
          isAuthenticated
            ? <ProtectedLayout />
            : <Navigate to="/login"  replace/>
        }
      >
        <Route
          path="dashboard"
          element={<Dashboard />}
        />

        <Route
          path="courses"
          element={<Courses />}
        />

        <Route
          path="assignments"
          element={<Assignments />}
        />


        <Route
          path="schedule"
          element={<Schedule />}
        />

        <Route
          path="progress"
          element={<Progress />}
        />

        <Route
          path="notifications"
          element={<Notifications />}
        />

        <Route
          path="settings"
          element={<Settings />}
        />

      </Route>

    </Routes>
  );
}