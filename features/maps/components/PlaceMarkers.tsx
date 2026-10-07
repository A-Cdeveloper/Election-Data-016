"use client";

import Link from "next/link";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Marker, Popup } from "react-leaflet";

import { Badge } from "@/components/ui/badge";
import { placeMarkerIcon } from "@/features/maps/lib/leaflet-icon";
import { spreadMarkerPosition } from "@/features/maps/utils/spread-marker-position";
import { getAllPlaces } from "@/features/places/api/get-place";

const PlaceMarkers = () => {
  const places = getAllPlaces();

  return (
    <MarkerClusterGroup chunkedLoading showCoverageOnHover={false}>
      {places.map((place) => (
        <Marker
          key={place.number}
          position={spreadMarkerPosition(place, places)}
          icon={placeMarkerIcon}
        >
          <Popup>
            <div className="min-w-[180px] space-y-0 text-sm">
              <div className="mb-1! flex items-center gap-4">
                <Badge
                  variant="success"
                  className="rounded-xs px-3 py-1 text-[14px] font-bold self-start"
                >
                  {place.number}
                </Badge>{" "}
                <div>
                  <span className="font-semibold">{place.address}</span>
                  <br />
                  {place.object && (
                    <p className="m-0! text-[12px]">{place.object}</p>
                  )}
                </div>
              </div>

              <Link
                href={`/places/${place.number}`}
                className="text-xs font-medium text-primary underline-offset-2 hover:underline block text-right mt-4"
              >
                Otvori detalje
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
};

export default PlaceMarkers;
