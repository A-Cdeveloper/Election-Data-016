import { BackButton } from "@/components/custom/BackButton";
import IncidentsByPlace from "@/features/incidents/components/IncidentsByPlace";
import PlaceHeader from "@/features/places/components/place/PlaceHeader";
import PlaceMap from "@/features/places/components/place/PlaceMap";
import PlaceTurnoutForm from "@/features/places/components/place/PlaceTurnoutForm";
import type { PlaceWithDetailRelations } from "@/features/places/types";
import { formatTime } from "@/lib/format-date";
import { getVotePercentageFormatted } from "../../utils/votePercent";

type PlaceDetailViewProps = {
  place: PlaceWithDetailRelations;
};

const PlaceDetailView = ({ place }: PlaceDetailViewProps) => {
  const votedCount = place.currentPlaceStatus?.votedCount ?? 0;
  const turnoutUpdatedAt = place.currentPlaceStatus?.updatedAt;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4">
      <BackButton href="/places" label="Nazad na listu biračkih mesta" />

      <PlaceHeader place={place} />

      <section aria-labelledby="turnout-heading">
        <h2
          id="turnout-heading"
          className="mb-3 text-md font-semibold uppercase tracking-wide text-muted-foreground"
        >
          Izborna aktivnost
        </h2>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-border">
                <th
                  scope="row"
                  className="bg-muted/30 px-4 py-3 text-left font-medium text-foreground"
                >
                  Broj upisanih birača
                </th>
                <td className="px-4 py-3 text-right font-semibold tabular-nums text-lg">
                  {place.registeredVoters}
                </td>
              </tr>
              <tr className="border-b border-border">
                <th
                  scope="row"
                  className="bg-muted/30 px-4 py-3 text-left font-medium text-foreground"
                >
                  Broj trenutno izašlih
                  {turnoutUpdatedAt && (
                    <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                      Poslednje ažuriranje:{" "}
                      {formatTime(turnoutUpdatedAt ?? new Date())}
                    </span>
                  )}
                </th>
                <td className="px-4 py-3 text-right">
                  <span className="font-medium tabular-nums text-lg text-green-600">
                    {votedCount}{" "}
                    <span className="text-sm font-normal">
                      (
                      {getVotePercentageFormatted(
                        votedCount,
                        place.registeredVoters
                      )}
                      %)
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="bg-muted/10 px-4 py-3">
                  <PlaceTurnoutForm
                    placeNumber={place.number}
                    maxVoters={place.registeredVoters}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <PlaceMap
        latitude={place.latitude}
        longitude={place.longitude}
        number={place.number}
      />

      <IncidentsByPlace
        placeNumber={place.number}
        incidents={place.incidents}
      />
    </div>
  );
};

export default PlaceDetailView;
