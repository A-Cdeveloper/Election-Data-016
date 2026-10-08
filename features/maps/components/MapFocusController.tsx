"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, type RefObject } from "react";
import { useMap } from "react-leaflet";

import type { PlaceLeafletMarker } from "@/features/maps/components/PlaceMarkerItem";
import { DEFAULT_MAP_ZOOM, VLASOTINCE_CENTER } from "@/features/maps/constants";
import type { PlaceClusterGroup } from "@/features/maps/lib/marker-cluster";

type MapFocusControllerProps = {
  clusterRef: RefObject<PlaceClusterGroup | null>;
};

const MapFocusController = ({ clusterRef }: MapFocusControllerProps) => {
  const map = useMap();
  const searchParams = useSearchParams();
  const selectedBm = searchParams.get("bm");
  const previousBm = useRef<string | null>(null);

  useEffect(() => {
    if (!selectedBm) {
      if (previousBm.current) {
        map.closePopup();
        map.flyTo(
          [VLASOTINCE_CENTER.lat, VLASOTINCE_CENTER.lng],
          DEFAULT_MAP_ZOOM,
          { duration: 0.45 }
        );
      }
      previousBm.current = null;
      return;
    }

    previousBm.current = selectedBm;
    const selectedNumber = Number(selectedBm);
    if (!Number.isFinite(selectedNumber)) return;

    let cancelled = false;
    let attempts = 0;

    const focusSelectedMarker = () => {
      if (cancelled) return;

      const group = clusterRef.current;
      const marker = group
        ?.getLayers()
        .find(
          (layer): layer is PlaceLeafletMarker =>
            (layer as PlaceLeafletMarker).placeNumber === selectedNumber
        );

      if (!group?._map || !marker?.__parent) {
        if (attempts < 30) {
          attempts += 1;
          window.setTimeout(focusSelectedMarker, 50);
        }
        return;
      }

      if (marker.isPopupOpen()) return;

      map.closePopup();
      group.zoomToShowLayer(marker);
    };

    focusSelectedMarker();

    return () => {
      cancelled = true;
    };
  }, [clusterRef, map, selectedBm]);

  return null;
};

export default MapFocusController;
