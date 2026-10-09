import { Badge } from "@/components/ui/badge";
import type { Place } from "@prisma/client";

type PlaceHeaderProps = {
  place: Pick<Place, "number" | "object" | "address">;
};

const PlaceHeader = ({ place }: PlaceHeaderProps) => {
  return (
    <header className="space-y-2 mb-8">
      <div className="flex items-center gap-3">
        <Badge variant="success" className="rounded-xs text-lg font-bold py-5">
          BM {place.number}
        </Badge>
        <h1 className="text-xl font-semibold uppercase leading-snug md:text-2xl">
          {place.object}
          <span className="text-[12px] text-gray-400 block">
            {place.address}
          </span>
        </h1>
      </div>
    </header>
  );
};

export default PlaceHeader;
