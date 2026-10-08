"use client";

import { Marker, Popup, useMap } from "react-leaflet";

import PlaceMarkerPopup from "@/features/maps/components/PlaceMarkerPopup";
import { PLACE_MARKER_FOCUS_ZOOM } from "@/features/maps/constants";
import { placeMarkerIcon } from "@/features/maps/lib/leaflet-icon";
import type { PlaceWithMapRelations } from "@/features/places/types";

type PlaceMarkerItemProps = {
  place: PlaceWithMapRelations;
};

const PlaceMarkerItem = ({ place }: PlaceMarkerItemProps) => {
  const map = useMap();
  const position: [number, number] = [place.latitude, place.longitude];

  const focusMapOnMarker = () => {
    const zoom = Math.max(map.getZoom(), PLACE_MARKER_FOCUS_ZOOM);
    map.flyTo(position, zoom, { duration: 0.35 });
  };

  return (
    <Marker
      position={position}
      icon={placeMarkerIcon}
      eventHandlers={{
        click: focusMapOnMarker,
      }}
    >
      <Popup>
        <PlaceMarkerPopup place={place} />
      </Popup>
    </Marker>
  );
};

export default PlaceMarkerItem;
