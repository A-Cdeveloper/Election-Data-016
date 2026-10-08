"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";

import { PLACE_DETAIL_MAP_ZOOM } from "@/features/maps/constants";
import { getPlaceMarkerIcon } from "@/features/maps/lib/leaflet-icon";

type SinglePlaceMapProps = {
  latitude: number;
  longitude: number;
  number: number;
};

const SinglePlaceMap = ({
  latitude,
  longitude,
  number,
}: SinglePlaceMapProps) => {
  const position: [number, number] = [latitude, longitude];
  const icon = getPlaceMarkerIcon(number);

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
      <Marker position={position} icon={icon} />
    </MapContainer>
  );
};

export default SinglePlaceMap;
