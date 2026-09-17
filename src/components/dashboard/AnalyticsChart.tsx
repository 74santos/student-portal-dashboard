import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type Props = {
  data: {
    day: string;
    hours: number;
  }[];
};

export default function AnalyticsChart({ data }: Props) {
  const totalHours = data.reduce(
    (total, item) => total + item.hours,
    0
  );

  const averageHours =
    data.length > 0
      ? totalHours / data.length
      : 0;

  const activeDays = data.filter(
    (item) => item.hours > 0
  ).length;

  const bestDay =
    data.length > 0
      ? data.reduce((best, current) =>
          current.hours > best.hours
            ? current
            : best
        )
      : null;

  const hasStudyActivity = totalHours > 0;

  return (
    <section className="analytics-card">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="analytics-header">

        <div>
          <h2>Weekly Study Activity</h2>

          <p>
            Your study consistency this week
          </p>
        </div>

        <div className="analytics-header-actions">

          <div className="analytics-status">
          {activeDays} active {activeDays === 1 ? "day" : "days"}
          </div>

          <div className="analytics-period">
            This week
          </div>

        </div>

      </div>


      {/* =====================================================
          QUICK ANALYTICS
      ===================================================== */}

      <div className="analytics-summary">

        <div className="analytics-summary-item">
          <span>Total Study</span>
          <strong>
            {totalHours.toFixed(1)}h
          </strong>
        </div>

        <div className="analytics-summary-item">
          <span>Daily Average</span>
          <strong>
            {averageHours.toFixed(1)}h
          </strong>
        </div>

        <div className="analytics-summary-item">
          <span>Best Day</span>
          <strong>
            {hasStudyActivity && bestDay
              ? `${bestDay.day} · ${bestDay.hours}h`
              : "No activity"}
          </strong>
        </div>

      </div>


      {/* =====================================================
          CHART
      ===================================================== */}

      <div className="chart-wrapper">

      <ResponsiveContainer
          width="100%"
          height={240}
          minWidth={0}
          minHeight={240}
        >

          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >

            <defs>

              <linearGradient
                id="studyGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="var(--dashboard-blue)"
                  stopOpacity={0.28}
                />

                <stop
                  offset="100%"
                  stopColor="var(--dashboard-blue)"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>


            <CartesianGrid
              vertical={false}
              stroke="var(--dashboard-border)"
              strokeDasharray="3 3"
            />


            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "var(--dashboard-text-muted)",
                fontSize: 11,
              }}
              dy={8}
            />


            <YAxis
              tickLine={false}
              axisLine={false}
              width={34}
              domain={[0, "auto"]}
              allowDecimals={false}
              tickCount={4}
              tick={{
                fill: "var(--dashboard-text-muted)",
                fontSize: 11,
              }}
              tickFormatter={(value) => `${value}h`}
            />

            <Tooltip
              cursor={{
                stroke:
                  "var(--dashboard-blue)",
                strokeOpacity: 0.15,
              }}
              contentStyle={{
                background:
                  "var(--dashboard-surface)",
                border:
                  "1px solid var(--dashboard-border)",
                borderRadius: "10px",
                boxShadow:
                  "var(--dashboard-shadow)",
                color:
                  "var(--dashboard-text-strong)",
              }}
              labelStyle={{
                color:
                  "var(--dashboard-text-muted)",
                fontSize: "12px",
                marginBottom: "4px",
              }}
              formatter={(value) => [
                `${value}h`,
                "Study time",
              ]}
            />


            <Area
              // type="monotone"
              type="linear"
              dataKey="hours"
              stroke="var(--dashboard-blue)"
              strokeWidth={2.5}
              fill="url(#studyGradient)"
              fillOpacity={1}
              dot={{
                r: 3.5,
                strokeWidth: 2,
                fill:
                  "var(--dashboard-surface)",
              }}
              activeDot={{
                r: 5,
                strokeWidth: 2,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </section>
  );
}