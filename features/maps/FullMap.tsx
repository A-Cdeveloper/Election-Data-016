"use client";

import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/features/maps/MapView"), {
  ssr: false,
  loading: () => (
    <div
      className="h-[calc(100dvh-4rem)] w-full animate-pulse rounded-lg border border-border bg-muted/40"
      aria-label="Učitavanje mape"
    />
  ),
});

const FullMap = () => {
  return <MapView />;
};

export default FullMap;
