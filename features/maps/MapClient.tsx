"use client";

import dynamic from "next/dynamic";

import type { Place } from "@prisma/client";

const MapView = dynamic(() => import("@/features/maps/MapView"), {
  ssr: false,
  loading: () => (
    <div
      className="h-[calc(100dvh-4rem)] w-full animate-pulse rounded-lg border border-border bg-muted/40"
      aria-label="Učitavanje mape"
    />
  ),
});

type MapClientProps = {
  places: Place[];
};

const MapClient = ({ places }: MapClientProps) => {
  return <MapView places={places} />;
};

export default MapClient;
