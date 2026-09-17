import { useContext ,useState} from "react";

import { AppContext }
from "../context/AppContext";

import NotificationCard
from "../components/notifications/NotificationCard";



export default function Notifications() {

  const ctx =  useContext(AppContext);
  const [filter, setFilter] = useState("all");

  if (!ctx) return null;

  const {
    notifications,
    activities,
    student,
  } = ctx;

  

// Early return with proper JSX
if (!student) {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Notifications</h1>
        <p>Important academic alerts and recommendations.</p>
      </div>
      <p>No student data available.</p>
    </div>
  );
}

  const criticalCount =
  notifications.filter(
    (n) =>
      n.priority ===
      "critical"
  ).length;
  
const warningCount =
  notifications.filter(
    (n) =>
      n.priority ===
      "warning"
  ).length;

  const unreadCount =
  notifications.filter(
    (n) => !n.read
  ).length;




  const filteredNotifications =
  notifications.filter(
    (notification) => {

      if (
        filter === "all"
      ) return true;

      return (
        notification.category ===
        filter
      );
    }
  );

   // const today =
  // notifications.filter(
  //   (n) => {

  //     const date =
  //       new Date(
  //         n.createdAt
  //       );

  //     return (
  //       date.toDateString() ===
  //       new Date().toDateString()
  //     );
  //   }
  // );

  return (

    <div className="page-content">

      <div className="page-header">

        <h1>
          Notifications
        </h1>

        <p>
          Important academic alerts
          and recommendations.
        </p>

      </div>


      <div className="notification-summary">

        <h2>

          {unreadCount} Unread Notifications

        </h2>

      </div>

      <div className="notification-filters">

        <button
          onClick={() =>
            setFilter("all")
          }
        >
          All
        </button>

        <button
          onClick={() =>
            setFilter("assignment")
          }
        >
          Assignments
        </button>

        <button
          onClick={() =>
            setFilter("course")
          }
        >
          Courses
        </button>

        <button
          onClick={() =>
            setFilter("goal")
          }
        >
          Goals
        </button>

      </div>

      <div className="notification-overview">

        <div className="overview-card">

          <h3>
            {notifications.length}
          </h3>

          <span>
            Total Alerts
          </span>

        </div>

        <div className="overview-card">

          <h3>
            {criticalCount}
          </h3>

          <span>
            Critical
          </span>

        </div>

        <div className="overview-card">

          <h3>
            {warningCount}
          </h3>

          <span>
            Warnings
          </span>

        </div>

      </div>

      <div className="notifications-grid">

        {filteredNotifications.map(
          (notification) => (

            <NotificationCard
              key={notification.id}
              notification={
                notification
              }
            />

          )
        )}

      </div>


      <section className="activity-section">

        <h2>
          Recent Activity
        </h2>

        {activities
          .slice(0, 10)
          .map((activity) => (

            <div
              key={activity.id}
              className="activity-row"
            >

              <strong>
                {activity.type}
              </strong>

              <p>
                {activity.message}
              </p>

            </div>

        ))}

      </section>

    </div>

  );

}