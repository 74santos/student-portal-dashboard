import { useState, useContext, useRef, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

import {
  FiCheckCircle,
  FiAlertTriangle,
  FiBell,
} from "react-icons/fi";

import { generateNotifications } from "../../utils/notificationEngine";
import EmptyState from "../ui/EmptyState"

export default function Notifications() {

  const ctx = useContext(AppContext);
  if (!ctx) return null;

  const { activities, assignments, courses, clearActivities } = ctx;

  const [open, setOpen] = useState(false);

  const [readNotifications, setReadNotifications ] = useState<string[]>([]);

  const panelRef = useRef<HTMLDivElement>(null);

  const smartNotifications = generateNotifications(assignments, courses);

  const activityNotifications =
    activities.map((activity) => ({
      id: activity.id,

      title:
        activity.type
          .charAt(0)
          .toUpperCase() +
        activity.type.slice(1),

      message:
        activity.message,
  
      priority:
        activity.type === "warning"
          ? "warning"
          : "good",
  
      createdAt:
        activity.time,
    }));

   const notifications = [
     ...smartNotifications,
     ...activityNotifications,
   ]

  const unreadCount = 
    notifications.filter(
      (notification) =>
        !readNotifications.includes(
            notification.id
          )
    ).length;


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);


  const markAsRead = (
    id:string
  ) => {

    if (
      readNotifications.includes(id)
    ) {
      return;
    }

    setReadNotifications(
      (prev) => [...prev, id]
    );
  };

  const markAllAsRead = () => {
    setReadNotifications(notifications.map((n) => n.id));
    setOpen(false); // optional: close after marking all read
  };

  const iconMap = {
    critical: <FiAlertTriangle />,
    good: <FiCheckCircle />,
    warning: <FiBell />,
  };

  return (
    <div className="notifications" ref={panelRef}>

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

            <div className="notif-actions">

              <button
                className="mark-read-btn"
                onClick={() =>
                  setReadNotifications(
                    notifications.map(
                      (n) => n.id
                    )
                  )
                }
              >
                Mark All Read
              </button>

              <button
                className="clear-btn"
                onClick={
                  clearActivities
                }
              >
                Clear Activity
              </button>

            </div>
          
          </div>
 

          <div className="notif-list">

            {notifications.length === 0 ? (


                <EmptyState
                title="No activity yet"
                description="Activity will appear here as you use the system."
              />
            

            ) : (

              notifications
                .slice(0, 10)
                .map(
                  (notification) => (

                    <div
                      key={
                        notification.id
                      }
                      className={`
                        notif-item
                        ${notification.priority}
                        ${
                          readNotifications.includes(
                            notification.id
                          )
                            ? "read"
                            : ""
                        }
                      `}
                      onClick={() =>
                        markAsRead(
                          notification.id
                        )
                      }
                    >

                      <div className="notif-icon">

                        {
                          iconMap[
                            notification.priority
                          ]
                        }

                      </div>

                      <div>

                        <strong>

                          {
                            notification.title
                          }

                        </strong>

                        <p>

                          {
                            notification.message
                          }

                        </p>

                        <span>

                          {new Date(
                            notification.createdAt
                          ).toLocaleString()}

                        </span>

                      </div>

                    </div>

                  )
                )

            )}

          </div>

        </div>
      )}

    </div>
  );
}