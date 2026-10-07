import type { Place } from "@/features/places/types";

const COORD_PRECISION = 5;
const SPREAD_RADIUS = 0.00007; // ~7 m

function coordKey(place: Place): string {
  return `${place.latitude.toFixed(COORD_PRECISION)},${place.longitude.toFixed(COORD_PRECISION)}`;
}

/** Slight offset when several BM share one building so each pin stays visible. */
export function spreadMarkerPosition(
  place: Place,
  places: Place[]
): [number, number] {
  const key = coordKey(place);
  const group = places
    .filter((p) => coordKey(p) === key)
    .sort((a, b) => a.number - b.number);
  const index = group.findIndex((p) => p.number === place.number);

  if (group.length <= 1 || index < 0) {
    return [place.latitude, place.longitude];
  }

  const angle = (2 * Math.PI * index) / group.length;
  return [
    place.latitude + SPREAD_RADIUS * Math.cos(angle),
    place.longitude + SPREAD_RADIUS * Math.sin(angle),
  ];
}
