import MapClient from "@/features/maps/MapClient";
import { prisma } from "@/lib/prisma";

const FullMap = async () => {
  const places = await prisma.place.findMany({
    orderBy: { number: "asc" },
  });

  return <MapClient places={places} />;
};

export default FullMap;
