

import {
  getRelativeDay,
} from "../../utils/date";


export default function ActivityFeed() {
  const activity = [
    {
      title: "Assignment Submitted",
      detail: "Data Structures - Project 3",
      time: "2 hours ago",
    },
    {
      title: "Grade Posted",
      detail: "Web Dev - 95/100",
      time: "5 hours ago",
    },
    {
      title: "New Message",
      detail: "Prof. Johnson - Office hours",
      time: "1 day ago",
    },
  ];

  return (
    <section>
      <h2>Recent Activity</h2>

      {activity.map((a, i) => (
        <div className="activity" key={i}>
          <h4>{a.title}</h4>
          <p>{a.detail}</p>
          <small>{getRelativeDay(a.time)}</small>
        </div>
      ))}
    </section>
  );
}