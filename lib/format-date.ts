export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("sr-RS", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(date));
}

export function formatTime(date: string): string {
  return new Intl.DateTimeFormat("sr-RS", {
    timeStyle: "short",
  }).format(new Date(date));
}
