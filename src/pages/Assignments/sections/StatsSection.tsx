import StatsCard from "../../../components/dashboard/StatsCard";

import type { StatsProps } from "../types";

export function StatsSection({
    stats,
}: StatsProps) {

    return (

        <div className="stats-grid">

            {stats.map(stat => (

                <StatsCard
                    key={stat.id}
                    stat={stat}
                />

            ))}

        </div>

    );

}