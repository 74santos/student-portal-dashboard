import type { MetricIcon } from "../../ui/metricIconMap";


export interface ProgressPresentation {

    value: number;

    label: string;

    color:
        | "primary"
        | "success"
        | "warning"
        | "danger";

    icon: MetricIcon;

    status:
        | "Excellent"
        | "Good"
        | "Average"
        | "Needs Attention";

}