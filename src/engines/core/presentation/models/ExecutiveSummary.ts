export interface ExecutiveSummary {

  title: string;

  description: string;

  severity:
      | "success"
      | "primary"
      | "warning"
      | "danger";

  priority: number;    

}