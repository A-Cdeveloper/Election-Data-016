import type { FeatureGroup, Layer } from "leaflet";

export type PlaceClusterGroup = FeatureGroup & {
  _map: unknown;
  zoomToShowLayer: (layer: Layer, callback?: () => void) => void;
};
