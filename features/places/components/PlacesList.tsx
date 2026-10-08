import type { PlaceWithListRelations } from "@/features/places/types";

import PlaceListItem from "./PlaceListItem";

type PlacesListProps = {
  places: PlaceWithListRelations[];
};

const PlacesList = ({ places }: PlacesListProps) => {
  return (
    <div className="flex flex-col gap-0">
      {places.map((place) => (
        <PlaceListItem key={place.id} place={place} />
      ))}
    </div>
  );
};

export default PlacesList;
