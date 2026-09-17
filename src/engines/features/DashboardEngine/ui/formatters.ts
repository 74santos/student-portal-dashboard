export function formatPercent(
  value: number
) {
  return `${value}%`;
}

export function formatGPA(
  value: number
) {
  return value.toFixed(2);
}

export function formatHours(
  value: number
) {
  return `${value}h`;
}

export function formatNumber(
  value: number
) {
  return value.toLocaleString();
}