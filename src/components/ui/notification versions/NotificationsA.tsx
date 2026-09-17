import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

import {
  FiCheckCircle,
  FiPlusCircle,
  FiTrash2,
  FiAlertTriangle,
  FiBell,
} from "react-icons/fi";

import { generateNotifications } from "../../utils/notificationEngine";

export default function Notifications() {

  const ctx = useContext(AppContext);
  if (!ctx) return null;

  const { activities } = ctx;

  const [open, setOpen] = useState(false);

  const notifications = generateNotifications(activities);

  const unreadCount = Math.min(notifications.length, 10);

  const iconMap = {
    completed: <FiCheckCircle />,
    created: <FiPlusCircle />,
    deleted: <FiTrash2 />,
    warning: <FiAlertTriangle />,
  };

  return (
    <div className="notifications">

      <button
        className="notif-btn"
        onClick={() => setOpen(!open)}
      >
        <FiBell />

        {unreadCount > 0 && (
          <span className="notif-badge">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="notif-panel">

          <div className="notif-header">
            <h4>Notifications</h4>
          </div>

          <div className="notif-list">

            {notifications.slice(0, 10).map((activity) => (

              <div
                key={activity.id}
                className={`notif-item ${activity.type}`}
              >

                <div className="notif-icon">
                  {iconMap[activity.type]}
                </div>

                <div>

                  <strong>
                    {activity.type.toUpperCase()}
                  </strong>

                  <p>{activity.message}</p>

                  <span>
                    {new Date(activity.time).toLocaleString()}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>
      )}

    </div>
  );
}