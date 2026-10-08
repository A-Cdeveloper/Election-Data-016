import { Badge } from "@/components/ui/badge";
import type { Place } from "@prisma/client";

type PlaceHeaderProps = {
  place: Pick<Place, "number" | "object" | "address">;
};

const PlaceHeader = ({ place }: PlaceHeaderProps) => {
  return (
    <header className="space-y-2 mb-8">
      <div className="flex flex-wrap items-center gap-3">
        <Badge
          variant="success"
          className="rounded-xs text-[14px] font-bold p-2"
        >
          BM {place.number}
        </Badge>
        <h1 className="text-xl font-semibold uppercase leading-snug md:text-2xl">
          {place.object}
        </h1>
      </div>
      <p className="text-sm text-muted-foreground">{place.address}</p>
    </header>
  );
};

export default PlaceHeader;
