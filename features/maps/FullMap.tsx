import MapClient from "@/features/maps/MapClient";
import { getPlacesForMap } from "@/features/places/queries";

const FullMap = async () => {
  const places = await getPlacesForMap();

  return <MapClient places={places} />;
};

export default FullMap;
