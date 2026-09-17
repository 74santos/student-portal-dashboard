import type { MetricIcon }
from "../ui/metricIconMap";


export interface MetricCardModel {

  id: string;

  title: string;

  value: string | number;

  trend: string;

  icon: MetricIcon;

  color:
      | "primary"
      | "success"
      | "warning"
      | "danger";

  route?: string;

}