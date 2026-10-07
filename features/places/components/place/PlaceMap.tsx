type PlaceMapProps = {
  latitude: number;
  longitude: number;
};

const PlaceMap = ({ latitude, longitude }: PlaceMapProps) => {
  return (
    <div
      className="flex h-[250px] items-center justify-center rounded-lg border border-dashed border-border bg-muted/40 text-sm text-muted-foreground"
      aria-hidden
    >
      Mapa (Leaflet) — {latitude.toFixed(5)}, {longitude.toFixed(5)}
    </div>
  );
};

export default PlaceMap;
