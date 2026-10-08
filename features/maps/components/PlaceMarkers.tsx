"use client";

import MarkerClusterGroup from "react-leaflet-cluster";

import PlaceMarkerItem from "@/features/maps/components/PlaceMarkerItem";
import type { PlaceWithMapRelations } from "@/features/places/types";

type PlaceMarkersProps = {
  places: PlaceWithMapRelations[];
};

const PlaceMarkers = ({ places }: PlaceMarkersProps) => {
  return (
    <MarkerClusterGroup chunkedLoading showCoverageOnHover={false}>
      {places.map((place) => (
        <PlaceMarkerItem key={place.number} place={place} />
      ))}
    </MarkerClusterGroup>
  );
};

export default PlaceMarkers;
