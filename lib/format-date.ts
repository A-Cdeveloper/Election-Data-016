export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat("sr-RS", {
    timeStyle: "short",
  }).format(date);
}
