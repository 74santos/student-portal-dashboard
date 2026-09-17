

export interface HealthPresentation {

  score: number;

  label: string;

  color:
      | "primary"
      | "success"
      | "warning"
      | "danger";

}