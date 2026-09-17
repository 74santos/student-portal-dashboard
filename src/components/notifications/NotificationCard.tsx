import {
  FiAlertCircle,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";


import type {
  NotificationItem,
} from "../../types";

type Props = {
  notification: NotificationItem;
};


export default function NotificationCard({
  notification,
}: Props) {


  const iconMap: Record<
    NotificationItem["priority"],
    React.ReactNode
  > = {

    critical:
      <FiAlertCircle />,

    warning:
      <FiTrendingUp />,

    good:
      <FiCheckCircle />,

  };

  return (

    <div
      className={`notification-card ${
        notification.priority
      }`}
    >

      <div className="notification-top">

      <span className="notif-priority">

        {
          iconMap[
            notification.priority
          ]
        }

      </span>

      <h3>
        {notification.title}
      </h3>

      <span className="notif-category">
        {notification.category}
      </span>

      </div>

      <p>
        {notification.message}
      </p>

      <small>
        {new Date(
          notification.createdAt
        ).toLocaleString()}
      </small>

    </div>

  );
}