import { getAllPlaces } from "@/features/places/api/get-place";
import PlaceListItem from "./PlaceListItem";

const PlacesList = () => {
  const places = getAllPlaces();

  return (
    <div className="flex flex-col gap-0">
      {places.map((place) => (
        <PlaceListItem key={place.number} place={place} />
      ))}
    </div>
  );
};

export default PlacesList;
