"use client";

import {
  useCallback,
  type ComponentProps,
  type Ref,
  type RefObject,
} from "react";
import MarkerClusterGroup from "react-leaflet-cluster";

import PlaceMarkerItem from "@/features/maps/components/PlaceMarkerItem";
import type { PlaceClusterGroup } from "@/features/maps/lib/marker-cluster";
import type { PlaceWithMapRelations } from "@/features/places/types";

type PlaceMarkersProps = {
  places: PlaceWithMapRelations[];
  clusterRef: RefObject<PlaceClusterGroup | null>;
};

type ClusterInstance = ComponentProps<typeof MarkerClusterGroup>["ref"] extends
  Ref<infer Instance> | undefined
  ? Instance
  : never;

const PlaceMarkers = ({ places, clusterRef }: PlaceMarkersProps) => {
  const assignClusterRef = useCallback(
    (group: ClusterInstance) => {
      clusterRef.current = group as unknown as PlaceClusterGroup | null;
    },
    [clusterRef]
  );

  return (
    <MarkerClusterGroup
      ref={assignClusterRef}
      chunkedLoading
      showCoverageOnHover={false}
    >
      {places.map((place) => (
        <PlaceMarkerItem key={place.number} place={place} />
      ))}
    </MarkerClusterGroup>
  );
};

export default PlaceMarkers;
