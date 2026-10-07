"use client";

import dynamic from "next/dynamic";

type PlaceMapProps = {
  latitude: number;
  longitude: number;
};

const SinglePlaceMap = dynamic(
  () => import("@/features/maps/components/SinglePlaceMap"),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-full w-full animate-pulse bg-muted/40"
        aria-label="Učitavanje mape"
      />
    ),
  }
);

const PlaceMap = ({ latitude, longitude }: PlaceMapProps) => {
  return (
    <section aria-label="Lokacija biračkog mesta na mapi">
      <div className="h-[250px] overflow-hidden rounded-lg border border-border">
        <SinglePlaceMap latitude={latitude} longitude={longitude} />
      </div>
    </section>
  );
};

export default PlaceMap;
