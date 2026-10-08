import PlacesList from "@/features/places/components/PlacesList";
import { getPlacesForList } from "@/features/places/queries";

export default async function PlacesPage() {
  const places = await getPlacesForList();
  return (
    <>
      <h1 className="text-2xl font-bold uppercase mb-8">Biračka mesta</h1>
      <PlacesList places={places} />
    </>
  );
}
