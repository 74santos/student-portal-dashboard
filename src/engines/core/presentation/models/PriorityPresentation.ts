import type { MetricIcon } from "../../ui/metricIconMap";

export interface PriorityPresentation {

    label:
        | "Low"
        | "Medium"
        | "High";

    color:
        | "primary"
        | "success"
        | "warning"
        | "danger";

    icon: MetricIcon;

}