export function parseLocalDate(
  dateString: string
) {

  const [year, month, day] =
    dateString
      .split("-")
      .map(Number);

  return new Date(
    year,
    month - 1,
    day
  );
}

export function formatCoachDueDate(
  dueDate: string,
  dueTime?: string
): string {
  const [year, month, day] = dueDate
    .split("-")
    .map(Number);

  const date = new Date(year, month - 1, day);

  if (Number.isNaN(date.getTime())) {
    return dueDate;
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);

  return dueTime
    ? `${formattedDate} · ${dueTime}`
    : formattedDate;
}

export function formatDate(
  dateString?: string
) {

  if (!dateString) {
    return "No date";
  }

  const date = parseLocalDate(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  return new Intl.DateTimeFormat(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  ).format(date);
}


export function formatCurrentHour(): string {
  const date = new Date();
  let hour = date.getHours();
  const suffix = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}${suffix}`; // → "8AM", "1PM"
}



export function getAssignmentStatus(
  dueDate?: string
) {

  if (!dueDate) {
    return "none";
  }

  // console.log("Due Date:", dueDate);

  const date = parseLocalDate(dueDate);



  if (isNaN(date.getTime())) {
    return "invalid";
  }

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  date.setHours(0, 0, 0, 0);

  const diff = Math.round(
    (
      date.getTime() -
      today.getTime()
    ) /
    (1000 * 60 * 60 * 24)
  );



  if (diff < 0) {
    return "overdue";
  }

  if (diff === 0) {
    return "today";
  }

  if (diff <= 2) {
    return "upcoming";
  }

  return "normal";
}




export function getRelativeDay(
  dateString?: string
) {

  if (!dateString) {
    return "No date";
  }

  const date = parseLocalDate(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const today = new Date();

  // normalize dates
  today.setHours(0, 0, 0, 0);

  date.setHours(0, 0, 0, 0);

  const diff = Math.round(
    (
      date.getTime() -
      today.getTime()
    ) /
    (1000 * 60 * 60 * 24)
  );

  if (diff === 0) {
    return "Today";
  }

  if (diff === 1) {
    return "Tomorrow";
  }

  if (diff > 1 && diff < 7) {

    return new Intl.DateTimeFormat(
      "en-US",
      {
        weekday: "long",
      }
    ).format(date);

  }

  return formatDate(dateString);
}


export function formatDateForInput(
  dateString?: string
) {

  if (!dateString) {
    return "";
  }

  const date =
    parseLocalDate(dateString);

  if (isNaN(date.getTime())) {
    return "";
  }

  return date
    .toISOString()
    .split("T")[0];
}


export function getDayOfWeekName(dateString: string): string {
  const date = parseLocalDate(dateString);
  if (isNaN(date.getTime())) return "Unknown";

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

// Optional: Full weekday name
export function getFullDayName(dateString: string): string {
  const date = parseLocalDate(dateString);
  if (isNaN(date.getTime())) return "Unknown";

  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}