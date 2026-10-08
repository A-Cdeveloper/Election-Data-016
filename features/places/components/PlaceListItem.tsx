import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { PlaceWithListRelations } from "@/features/places/types";
import { getVotePercentageFormatted } from "../utils/votePercemt";

type PlaceListItemProps = {
  place: PlaceWithListRelations;
};

const PlaceListItem = ({ place }: PlaceListItemProps) => {
  const votedCount = place.currentPlaceStatus?.votedCount ?? 0;
  const incidentCount = place.incidents.length;
  const turnoutPercent = getVotePercentageFormatted(
    votedCount,
    place.registeredVoters
  );

  return (
    <Link
      href={`/places/${place.number}`}
      className="font-regular text-base hover:bg-accent px-3 py-3 cursor-pointer border-t border-gray-600  flex justify-between items-center"
    >
      <div className="flex flex-col w-[calc(100%-100px)]">
        <Badge className="mb-1 rounded-xs font-bold bg-green-900 text-white">
          BM {place.number}
        </Badge>
        {place.object}
        <span className="text-[12px] text-gray-400 block">{place.address}</span>
      </div>
      <div className="flex shrink-0 flex-col gap-0 text-right text-sm">
        <span className="font-bold tabular-nums text-lg">
          {place.registeredVoters}
        </span>
        <span className="font-bold text-lg tabular-nums text-green-600 dark:text-green-500">
          {votedCount}
          <span className="text-sm font-normal"> ({turnoutPercent}%)</span>
        </span>
        <span className="font-normal text-md text-red-600 dark:text-red-500">
          INC: <span className="font-bold">{incidentCount}</span>
        </span>
      </div>
    </Link>
  );
};

export default PlaceListItem;
