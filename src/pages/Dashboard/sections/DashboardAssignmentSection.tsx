import AssignmentsPreview from "../../../components/dashboard/AssignmentsPreview";
import { useDashboard } from "../hooks/useDashboard";


export function DashboardAssignmentSection() {

  const {
    assignments,
    searchQuery,
  } = useDashboard();

  const filteredAssignments =
  assignments.filter(
    (assignment) =>
      assignment.title
        .toLowerCase()
        .includes(
          searchQuery.toLowerCase()
        )
  );


  return (
    <AssignmentsPreview
    assignments={
      filteredAssignments
    }
  />
  )




}