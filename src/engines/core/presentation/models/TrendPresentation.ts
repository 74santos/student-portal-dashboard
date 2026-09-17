import type { MetricIcon } from "../../ui/metricIconMap";



export interface TrendPresentation {

  label: string;

  color:
      | "primary"
      | "success"
      | "warning"
      | "danger";

  icon: MetricIcon;

}