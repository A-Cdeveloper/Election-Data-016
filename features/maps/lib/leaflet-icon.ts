import L from "leaflet";

const PIN_WIDTH = 26;
const PIN_HEIGHT = 43;

const iconCache = new Map<number, L.DivIcon>();

const pinMarkup = (
  placeNumber: number
) => `<span class="election-map-marker-pin">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 41" width="${PIN_WIDTH}" height="${PIN_HEIGHT}" aria-hidden="true">
    <path
      d="M12.5 0C5.596 0 0 5.596 0 12.5c0 7.1 12.5 28.5 12.5 28.5S25 19.6 25 12.5C25 5.596 19.404 0 12.5 0z"
      fill="currentColor"
    />
  </svg>
  <span class="election-map-marker-number">${placeNumber}</span>
</span>`;

export const getPlaceMarkerIcon = (placeNumber: number) => {
  const cached = iconCache.get(placeNumber);
  if (cached) return cached;

  const icon = L.divIcon({
    className: "election-map-marker",
    html: pinMarkup(placeNumber),
    iconSize: [PIN_WIDTH, PIN_HEIGHT],
    iconAnchor: [PIN_WIDTH / 2, PIN_HEIGHT],
    popupAnchor: [0, -36],
  });

  iconCache.set(placeNumber, icon);
  return icon;
};
