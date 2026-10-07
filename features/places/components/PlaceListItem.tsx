import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { Place } from "@/features/places/types";

const PlaceListItem = ({ place }: { place: Place }) => {
  // TODO: zameniti stvarnim podacima
  const votedCount = 0;
  const incidentCount = 0;
  const turnoutPercent =
    place.registeredVoters > 0
      ? ((votedCount / place.registeredVoters) * 100).toFixed(1)
      : "0.0";

  return (
    <Link
      href={`/places/${place.number}`}
      key={place.number}
      className="font-regular text-base hover:bg-accent px-3 py-3 rounded-md cursor-pointer border-t border-gray-600  flex justify-between items-center"
    >
      <div className="flex flex-col w-[calc(100%-100px)]">
        <Badge className="mb-1 rounded-xs font-bold bg-green-900 text-white">
          BM {place.number}
        </Badge>
        {place.object}
        <span className="text-[12px] text-gray-400 block">{place.address}</span>
      </div>
      <div className="flex shrink-0 flex-col gap-1 text-right text-sm">
        <span className="font-bold tabular-nums text-md">
          {place.registeredVoters}
        </span>
        <span className="font-bold tabular-nums text-green-600 dark:text-green-500">
          {votedCount} ({turnoutPercent}%)
        </span>
        <span className="tabular-nums">
          <span className="font-normal text-red-600 dark:text-red-500">
            INC:
          </span>{" "}
          <span className="font-bold">{incidentCount}</span>
        </span>
      </div>
    </Link>
  );
};

export default PlaceListItem;
