import { SUMMARY_PRIORITIES } from "./summaryPriorities";


export const DEFAULT_SUMMARY = {

  title: "Everything Looks Good",

  description:

      "Keep following your current study plan.",

  severity: "primary",

  priority: SUMMARY_PRIORITIES.DEFAULT,

} as const;