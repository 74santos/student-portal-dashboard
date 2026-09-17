export interface RecommendationModel {

  id: string;

  title: string;

  description: string;

  recommendation: string;

  priority:
      | "low"
      | "medium"
      | "high";

  source: string;

}