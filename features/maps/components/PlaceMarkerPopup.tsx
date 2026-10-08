import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { PlaceWithMapRelations } from "@/features/places/types";
import { getVotePercentageFormatted } from "@/features/places/utils/votePercent";
import { formatTime } from "@/lib/format-date";

type PlaceMarkerPopupProps = {
  place: PlaceWithMapRelations;
};

const PlaceMarkerPopup = ({ place }: PlaceMarkerPopupProps) => {
  const votedCount = place.currentPlaceStatus?.votedCount ?? 0;
  const turnoutPercent = getVotePercentageFormatted(
    votedCount,
    place.registeredVoters
  );
  const statusUpdatedAt = place.currentPlaceStatus?.updatedAt;

  return (
    <div className="min-w-[200px] space-y-0 text-sm">
      <div className="mb-1! flex items-center gap-4">
        <Badge
          variant="success"
          className="rounded-xs px-3 py-1 text-[14px] font-bold self-start"
        >
          {place.number}
        </Badge>
        <div>
          <span className="font-semibold">{place.address}</span>
          <br />
          {place.object && <p className="m-0! text-[12px]">{place.object}</p>}
        </div>
      </div>

      <table className="mt-3 w-full border-t border-border text-xs">
        <tbody>
          <tr className="border-b">
            <th scope="row" className="py-1.5 pr-2 text-left font-medium">
              Broj upisanih
            </th>
            <td className="py-1.5 text-right font-semibold text-sm">
              {place.registeredVoters}
            </td>
          </tr>
          <tr className="border-b">
            <th scope="row" className="py-1.5 pr-2 text-left font-medium">
              Broj izašlih
            </th>
            <td className="py-1.5 text-right text-sm font-bold text-green-700">
              {votedCount}{" "}
              <span className="font-normal text-sm text-gray-800">
                ({turnoutPercent}%)
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row" className="py-1.5 pr-2 text-left font-medium">
              Poslednje ažuriranje
            </th>
            <td className="py-1.5 text-right text-sm">
              {statusUpdatedAt
                ? formatTime(statusUpdatedAt ?? new Date())
                : "—"}
            </td>
          </tr>
        </tbody>
      </table>

      <Link
        href={`/places/${place.number}`}
        className="mt-3 block text-right text-xs font-medium text-primary underline-offset-2 hover:underline"
      >
        Otvori detalje
      </Link>
    </div>
  );
};

export default PlaceMarkerPopup;
