import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="dashboard-footer">
      <div className="dashboard-footer-inner">
        <div>
          <h3>Student Portal</h3>
          <p>
            Stay organized, track your progress, and keep your academic goals
            on course.
          </p>
        </div>

        <div>
          <h3>Navigate</h3>
          <p>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </p>
          <p>
            <NavLink to="/courses">Courses</NavLink>
          </p>
          <p>
            <NavLink to="/schedule">Schedule</NavLink>
          </p>
          <p>
            <NavLink to="/progress">Progress</NavLink>
          </p>
        </div>

        <div>
          <h3>Manage</h3>
          <p>
            <NavLink to="/notifications">Notifications</NavLink>
          </p>
          <p>
            <NavLink to="/settings">Settings</NavLink>
          </p>
        </div>

        <div>
          <h3>Student Tools</h3>
          <p>Assignments</p>
          <p>Academic insights</p>
          <p>Study tracking</p>
        </div>
      </div>

      <div className="dashboard-footer-bottom">
        <p>© 2026 Student Portal. Built for academic productivity.</p>
      </div>
    </footer>
  );
}