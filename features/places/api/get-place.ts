import places from "@/data/places.json";

import type { Place } from "@/features/places/types";

export function getPlaceByNumber(number: number): Place | undefined {
  return (places as Place[]).find((place) => place.number === number);
}

export function getAllPlaces(): Place[] {
  return places as Place[];
}
