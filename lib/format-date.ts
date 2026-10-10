export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat("sr-RS", {
    timeStyle: "short",
    timeZone: "Europe/Belgrade",
  }).format(date);
}

export function formatHour(date: Date): string {
  return new Intl.DateTimeFormat("sr-RS", {
    hour: "2-digit",
    hour12: false,
    timeZone: "Europe/Belgrade",
  }).format(date);
}
