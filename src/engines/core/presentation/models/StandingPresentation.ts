import type { AcademicStanding } from "../../../features/AcademicEngine/types";
import type { MetricIcon } from "../../ui/metricIconMap";

export interface StandingPresentation {

  label: AcademicStanding;

  color:
      | "primary"
      | "success"
      | "warning"
      | "danger";

  icon: MetricIcon;

}