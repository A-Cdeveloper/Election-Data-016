import MapClient from "@/features/maps/MapClient";
import { mapPlaceInclude } from "@/features/places/types";
import { prisma } from "@/lib/prisma";

const FullMap = async () => {
  const places = await prisma.place.findMany({
    include: mapPlaceInclude,
    orderBy: { number: "asc" },
  });

  return <MapClient places={places} />;
};

export default FullMap;
