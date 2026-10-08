// features/places/queries.ts
import "server-only";
import { cache } from "react";

import { prisma } from "@/lib/prisma";
import { mapPlaceInclude, placeDetailInclude, placeListInclude } from "./types";

export const getPlacesForList = () =>
  prisma.place.findMany({
    include: placeListInclude,
    orderBy: { number: "asc" },
  });

export const getPlacesForSelect = cache(async () => {
  const places = await prisma.place.findMany({
    include: placeListInclude,
    orderBy: { number: "asc" },
  });
  return places.map((place) => ({
    value: place.number,
    label: place.number,
  }));
});

export const getPlacesForMap = () =>
  prisma.place.findMany({
    include: mapPlaceInclude,
    orderBy: { number: "asc" },
  });

export const getPlaceByNumber = cache((number: number) =>
  prisma.place.findUnique({ where: { number }, include: placeDetailInclude })
);
