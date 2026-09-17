export interface ProgressModel {

  current: number;

  target: number;

  percentage: number;

  label: string;

  status:
      | "excellent"
      | "good"
      | "warning"
      | "danger";

}