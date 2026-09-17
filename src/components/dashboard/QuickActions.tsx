import { useNavigate } from "react-router-dom";

import {
  FiPlus,
  FiBookOpen,
  FiCalendar,
  FiAlertTriangle,
} from "react-icons/fi";

export default function QuickActions() {

  const navigate = useNavigate();

  const actions = [
    {
      title: "New Assignment",
      icon: <FiPlus />,
      link: "/assignments"
    },

    {
      title: "New Course",
      icon: <FiBookOpen />,
      link: "/courses"
    },

    {
      title: "New Event",
      icon: <FiCalendar />,
      link: "/schedule"
    },

    {
      title: "View Overdue",
      icon: <FiAlertTriangle />,
      link: "/assignments"
    },
  ];

  return (

    <section className="dashboard-card">

      <div className="section-header">

        <h2>
          Quick Actions
        </h2>

      </div>

      <div className="quick-actions-grid">

        {actions.map((action) => (

          <button
            key={action.title}
            className="quick-action-btn"
            onClick={() => navigate(action.link)}
          >

            <span className="quick-action-icon">
              {action.icon}
            </span>

            <span>
              {action.title}
            </span>

          </button>

        ))}

      </div>

    </section>
  );
}