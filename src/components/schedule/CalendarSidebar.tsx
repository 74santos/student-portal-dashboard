import UpcomingEvents from "./UpcomingEvents";
import type { Assignment } from "../../types"

type Props = {
  onSelectEvent: (
    assignment: Assignment
  ) => void;
};

export default function CalendarSidebar({
  onSelectEvent,
}: Props) {

  return (

    <aside className="calendar-sidebar">

      <UpcomingEvents
        onSelectEvent={onSelectEvent}
      />

    </aside>
  );
}