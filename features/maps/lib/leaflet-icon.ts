import L from "leaflet";

const pinSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 41" width="17" height="28" aria-hidden="true">
  <path
    d="M12.5 0C5.596 0 0 5.596 0 12.5c0 7.1 12.5 28.5 12.5 28.5S25 19.6 25 12.5C25 5.596 19.404 0 12.5 0z"
    fill="currentColor"
  />
</svg>`;

export const placeMarkerIcon = L.divIcon({
  className: "election-map-marker",
  html: pinSvg,
  iconSize: [17, 28],
  iconAnchor: [8, 28],
  popupAnchor: [1, -23],
});
