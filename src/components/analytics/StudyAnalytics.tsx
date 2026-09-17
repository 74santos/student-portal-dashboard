import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";



const data = [
  { day: "Mon" , hours: 2 },
  { day: "Tue" , hours: 4 },
  { day: "Wed" , hours: 3 },
  { day: "Thu" , hours: 5 },
  { day: "Fri" , hours: 2 },
  { day: "Sat" , hours: 6 },
  { day: "Sun" , hours: 4 },
];


export default function StudyAnalytics() {

  const ctx = useContext(AppContext);
  if (!ctx) return null;

  const { theme } = ctx;
  const isDark = 
    theme === "dark" ||
    (
      theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );


  return (
    <div className="dashboard-card">
      <div className="analytics-header">
        <div>
          <h3>Study Activity</h3>
          <p>Weekly learning progress</p>
        </div>
      </div>

        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>

              <XAxis 
              dataKey="day"
              tick={{
                fill: isDark ? "#94a3b8" : "#64748b",
                fontSize:13,
              }}
              axisLine={false}
              tickLine={false}
              />
              <Tooltip 
                contentStyle={{
                  background: isDark
                  ?  "#1e293b"
                  : "#ffffff",
                  border:
                   isDark
                    ? "1px solid #334155"
                    : "1px solid #e5e7eb",
                  borderRadius: "14px",
                  color: isDark
                    ? "#e2e8f0"
                    : "#0f172a",
                }}
              />

              <Bar 
               dataKey="hours"
               radius={[10, 10, 0, 0]}
               fill={isDark ? "#60a5fa" : "#3b82f6"}
              />

            </BarChart>
          </ResponsiveContainer>
        </div>  


    </div>
  );
}