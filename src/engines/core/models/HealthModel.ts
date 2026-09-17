export interface HealthModel {

  score: number;

  label: string;

  status:

      | "excellent"

      | "good"

      | "warning"

      | "critical";

}