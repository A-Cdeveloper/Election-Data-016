"use client";

import { Suspense, useRef } from "react";
import "leaflet/dist/leaflet.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import type { PlaceWithMapRelations } from "@/features/places/types";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

import MapFocusController from "@/features/maps/components/MapFocusController";
import PlaceMarkers from "@/features/maps/components/PlaceMarkers";
import type { PlaceClusterGroup } from "@/features/maps/lib/marker-cluster";
import { DEFAULT_MAP_ZOOM, VLASOTINCE_CENTER } from "@/features/maps/constants";

type MapViewProps = {
  places: PlaceWithMapRelations[];
};

const MapView = ({ places }: MapViewProps) => {
  const clusterRef = useRef<PlaceClusterGroup | null>(null);

  return (
    <div className="relative z-0 h-[calc(100dvh-4rem)] w-full overflow-hidden">
      <MapContainer
        center={[VLASOTINCE_CENTER.lat, VLASOTINCE_CENTER.lng]}
        zoom={DEFAULT_MAP_ZOOM}
        className="h-full w-full"
        scrollWheelZoom
        zoomControl={false}
        maxZoom={18}
      >
        <ZoomControl position="topright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <PlaceMarkers places={places} clusterRef={clusterRef} />
        <Suspense fallback={null}>
          <MapFocusController clusterRef={clusterRef} />
        </Suspense>
      </MapContainer>
    </div>
  );
};

export default MapView;
