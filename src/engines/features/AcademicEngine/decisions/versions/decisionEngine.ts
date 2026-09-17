import type {

  AcademicSnapshot,
  AcademicDecision,

} from "../../types";

function assignmentDecisions(

  snapshot: AcademicSnapshot

): AcademicDecision[] {

  const decisions:
  AcademicDecision[] = [];



  if (
      snapshot.overdueAssignments > 0
  ) {

      decisions.push({

          id: crypto.randomUUID(),

          type: "assignment",

          severity: "critical",

          title:
              "Complete overdue work",

          message:
              `${snapshot.overdueAssignments} overdue assignment${
                  snapshot.overdueAssignments > 1
                      ? "s"
                      : ""
              } found.`,

          action:
              "Complete overdue assignments today."

      });

  }

  return decisions;

}


function courseDecisions(

  snapshot: AcademicSnapshot

): AcademicDecision[] {

  const decisions:
  AcademicDecision[] = [];



  if (
      snapshot.riskLevel === "High"
  ) {

      decisions.push({

          id: crypto.randomUUID(),

          type: "course",

          severity: "critical",

          title:
              "Academic Risk",

          message:
              "Overall academic health has declined.",

          action:
              "Focus on your weakest course."

      });

  }



  if (
      snapshot.weakestCourse
  ) {

      decisions.push({

          id: crypto.randomUUID(),

          type: "course",

          severity: "warning",

          title:
              "Focus Area",

          message:
              `${snapshot.weakestCourse.name} needs attention.`,

          action:
              "Schedule extra study time."

      });

  }

  return decisions;

}


function goalDecisions(

  snapshot: AcademicSnapshot

): AcademicDecision[] {

  const decisions:
  AcademicDecision[] = [];



  if (
      snapshot.forecastGPA >=
      snapshot.targetGPA
  ) {

      decisions.push({

          id: crypto.randomUUID(),

          type: "goal",

          severity: "success",

          title:
              "Goal Achieved",

          message:
              `Forecast GPA ${snapshot.forecastGPA}`,

          action:
              "Maintain your current momentum."

      });

  }

  return decisions;

}



function productivityDecisions(

  snapshot: AcademicSnapshot

): AcademicDecision[] {

  const decisions:
  AcademicDecision[] = [];



  if (
      snapshot.productivityScore < 50
  ) {

      decisions.push({

          id: crypto.randomUUID(),

          type: "study",

          severity: "warning",

          title:
              "Low Productivity",

          message:
              "Study activity has slowed.",

          action:
              "Schedule a focused study session."

      });

  }

  return decisions;

}


export function makeAcademicDecisions(

  snapshot: AcademicSnapshot

): AcademicDecision[] {

  const decisions = [

      ...assignmentDecisions(snapshot),

      ...courseDecisions(snapshot),

      ...goalDecisions(snapshot),

      ...productivityDecisions(snapshot),

  ];



  const priority = {

      critical: 0,

      warning: 1,

      info: 2,

      success: 3,

  };



  decisions.sort(

      (a, b) =>

          priority[a.severity] -

          priority[b.severity]

  );



  return decisions;

}