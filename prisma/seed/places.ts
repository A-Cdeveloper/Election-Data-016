import placesJson from "@/data/places.json";

import { prisma } from "@/lib/prisma";

type PlaceJson = {
  number: number;
  object: string;
  address: string;
  registeredVoters: number;
  latitude: number;
  longitude: number;
};

/** Biračka mesta iz data/places.json — privremeno dok JSON ne uklonimo */
export async function seedPlaces() {
  const rows = (placesJson as PlaceJson[]).map((place) => ({
    number: place.number,
    object: place.object,
    address: place.address,
    registeredVoters: place.registeredVoters,
    latitude: place.latitude,
    longitude: place.longitude,
  }));

  const result = await prisma.place.createMany({
    data: rows,
    skipDuplicates: true,
  });

  return result.count;
}
