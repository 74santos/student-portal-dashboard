import { useContext } from "react";

import { AppContext }
from "../../context/AppContext";

import EmptyState from "../ui/EmptyState"

import {
  FiCheckCircle,
  FiPlusCircle,
  FiTrash2,
  FiAlertTriangle,
} from "react-icons/fi";

import { formatDistanceToNow }
from "date-fns";

export default function ActivityFeed() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const { activities, clearActivities } = ctx;

  const iconMap = {
    completed: <FiCheckCircle />,
    created: <FiPlusCircle />,
    deleted: <FiTrash2 />,
    warning: <FiAlertTriangle />,
  };

  return (

    <section className="dashboard-card">

      <div className="section-header">

        <h2>
          Recent Activity
        </h2>
        <button className="btn" onClick={clearActivities}>Clear All</button>

      </div>

      <div className="activity-feed-list">

        {activities.length === 0 ? (

         <EmptyState 
          title="No Recent Activity"
          description="Activity will appear here as you use the system."
         />

        ) : (

          activities
          .slice(0,5)
          .map((activity) => (

            <div
              key={activity.id}
              className={`activity-item ${activity.type}`}
            >

              <div className="activity-icon">

                {
                  iconMap[
                    activity.type
                  ]
                }

              </div>

              <div className="activity-content">

                <p>
                  {activity.message}
                </p>

                <span>

                  {formatDistanceToNow(
                    new Date(activity.time),
                    {
                      addSuffix: true,
                    }
                  )}

                </span>

              

              </div>

            </div>

          ))

        )}

      </div>

    </section>
  );
}