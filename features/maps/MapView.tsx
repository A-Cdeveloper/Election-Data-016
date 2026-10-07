"use client";

import "leaflet/dist/leaflet.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

import PlaceMarkers from "@/features/maps/components/PlaceMarkers";
import { DEFAULT_MAP_ZOOM, VLASOTINCE_CENTER } from "@/features/maps/constants";

const MapView = () => {
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
        <PlaceMarkers />
      </MapContainer>
    </div>
  );
};

export default MapView;
