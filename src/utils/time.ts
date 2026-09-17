export function timeToMinutes(
  time: string
) {
  const [hours, minutes] =
    time.split(":").map(Number);

  return hours * 60 + minutes;
}

export function minutesToCalendarOffset(
  time: string
) {
  const mins =
    timeToMinutes(time);

  const calendarStart = 8 * 60;

  return mins - calendarStart;
}



export function formatRelativeTime(
  dateString: string
) {

  const date = new Date(dateString);

  const now = new Date();

  const diff =
    now.getTime() -
    date.getTime();

  const seconds =
    Math.floor(diff / 1000);

  const minutes =
    Math.floor(seconds / 60);

  const hours =
    Math.floor(minutes / 60);

  const days =
    Math.floor(hours / 24);

  if (seconds < 60) {
    return "Just now";
  }

  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  if (hours < 24) {
    return `${hours}h ago`;
  }

  if (days < 7) {
    return `${days}d ago`;
  }

  return new Intl.DateTimeFormat(
    "en-US",
    {
      month: "short",
      day: "numeric",
    }
  ).format(date);
}