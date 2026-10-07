"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";

import { PLACE_DETAIL_MAP_ZOOM } from "@/features/maps/constants";
import { placeMarkerIcon } from "@/features/maps/lib/leaflet-icon";

type SinglePlaceMapProps = {
  latitude: number;
  longitude: number;
};

const SinglePlaceMap = ({ latitude, longitude }: SinglePlaceMapProps) => {
  const position: [number, number] = [latitude, longitude];

  return (
    <MapContainer
      center={position}
      zoom={PLACE_DETAIL_MAP_ZOOM}
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
      <Marker position={position} icon={placeMarkerIcon} />
    </MapContainer>
  );
};

export default SinglePlaceMap;
