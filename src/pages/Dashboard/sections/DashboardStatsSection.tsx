import StatsCard from "../../../components/dashboard/StatsCard";

import { useDashboard } from "../hooks/useDashboard";

export function DashboardStatsSection() {

    const { dashboard } = useDashboard();

    return (

        <div className="stats-grid">

            {dashboard.stats.map(stat => (

                <StatsCard

                    key={stat.id}

                    stat={stat}

                />

            ))}

        </div>

    );

}