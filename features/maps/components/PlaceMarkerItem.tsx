"use client";

import type { Marker as LeafletMarker } from "leaflet";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { Marker, Popup } from "react-leaflet";

import PlaceMarkerPopup from "@/features/maps/components/PlaceMarkerPopup";
import { getPlaceMarkerIcon } from "@/features/maps/lib/leaflet-icon";
import type { PlaceWithMapRelations } from "@/features/places/types";

export type PlaceLeafletMarker = LeafletMarker & {
  placeNumber?: number;
  __parent?: unknown;
};

type PlaceMarkerItemProps = {
  place: PlaceWithMapRelations;
};

const PlaceMarkerItem = ({ place }: PlaceMarkerItemProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const position = useMemo<[number, number]>(
    () => [place.latitude, place.longitude],
    [place.latitude, place.longitude]
  );
  const icon = useMemo(() => getPlaceMarkerIcon(place.number), [place.number]);

  const rememberPlaceNumber = (marker: PlaceLeafletMarker | null) => {
    if (!marker) return;
    marker.placeNumber = place.number;
  };

  const selectPlace = () => {
    const params = new URLSearchParams(window.location.search);
    params.set("bm", String(place.number));
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  return (
    <Marker
      ref={rememberPlaceNumber}
      position={position}
      icon={icon}
      eventHandlers={{ click: selectPlace }}
    >
      <Popup>
        <PlaceMarkerPopup place={place} />
      </Popup>
    </Marker>
  );
};

export default PlaceMarkerItem;
