import PlacesList from "@/features/places/components/PlacesList";
import { placeListInclude } from "@/features/places/types";
import { prisma } from "@/lib/prisma";

export default async function PlacesPage() {
  const places = await prisma.place.findMany({
    include: placeListInclude,
    orderBy: { number: "asc" },
  });
  return (
    <>
      <h1 className="text-2xl font-bold uppercase mb-8">Biračka mesta</h1>
      <PlacesList places={places} />
    </>
  );
}
