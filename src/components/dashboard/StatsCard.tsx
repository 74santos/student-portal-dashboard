import { useContext } from "react";
import type { MetricCardModel } from "../../engines/core/models/MetricCardModel";

import { AppContext } from "../../context/AppContext";
import { metricIconMap } from "../../engines/core/ui/metricIconMap";

import {  maskSensitiveValue } from "../../utils/privacy";

interface StatsCardProps {
  stat: MetricCardModel;
}

export default function StatsCard({
  stat,
  
}: StatsCardProps) {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const { secure } = ctx;

  const { title, value, trend, icon, color } = stat;

  const Icon = metricIconMap[icon];

  return (
    <div className={`stats-card ${color}`}>

      <div className="stats-header">

        <p>{title}</p>
      

        <div className="stats-icon">
          <Icon />
        </div>

      </div>

      <h2 className="stats-card-value">
        {maskSensitiveValue(value, secure)}
      </h2>

      {trend && (
        <p
          className={
            trend.includes("+")
              ? "trend up"
              : "trend down"
          } 
        >
          {trend}
        </p>
      )}

    </div>
  );
}