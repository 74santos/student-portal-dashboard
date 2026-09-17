import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  academicTrendData,
} from "../../utils/trends";

export default function ProgressTrendChart() {

  const latest =
  academicTrendData[
    academicTrendData.length - 1
  ];

  return (
    // trend-card
    <section className="dashboard-card">

        <div className="section-header">

        

          <h2>
            Academic Trends
          </h2>

          <p>
            Performance movement over time
          </p>



        </div>

        <div className="trend-summary">

        <div className="trend-metric">
          <span>Completion: </span>
          <strong>{latest?.completion ?? 0}%</strong>
        </div>

        <div className="trend-metric">
          <span>Productivity: </span>
          <strong>{latest?.productivity ?? 0}</strong>
        </div>

        {/* <div className="trend-metric">
          <span>Study Hours: </span>
          <strong>{latest.studyHours}h</strong>
        </div> */}

        </div> 

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart
          data={academicTrendData}
        >

          <XAxis dataKey="week" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="completion"
          />

          <Line
            type="monotone"
            dataKey="productivity"
          />

        </LineChart>

      </ResponsiveContainer>

    </section>

  );
}