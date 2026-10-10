import { BackButton } from "@/components/custom/BackButton";
import IncidentsByPlace from "@/features/incidents/components/IncidentsByPlace";
import PlaceHeader from "@/features/places/components/place/PlaceHeader";
import PlaceMap from "@/features/places/components/place/PlaceMap";
import PlaceTurnoutForm from "@/features/places/components/place/PlaceTurnoutForm";
import type { PlaceWithDetailRelations } from "@/features/places/types";
import { getVotePercentageFormatted } from "../../utils/votePercent";
import VotedCountShow from "../VotedCountShow";
import TournOutGrapfByPlace from "@/features/reports/components/TournOutGrapfByPlace";
import {
  getIncidentChartDataByPlaceId,
  getTurnoutChartDataByPlaceId,
} from "@/features/reports/queries";

type PlaceDetailViewProps = {
  place: PlaceWithDetailRelations;
};

const PlaceDetailView = async ({ place }: PlaceDetailViewProps) => {
  const votedCount = place.currentPlaceStatus?.votedCount ?? 0;
  const records = await getTurnoutChartDataByPlaceId(place.id);
  const incidentChartData = await getIncidentChartDataByPlaceId(place.id);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4">
      <BackButton href="/places" label="Nazad na listu biračkih mesta" />

      <PlaceHeader place={place} />

      <PlaceMap
        latitude={place.latitude}
        longitude={place.longitude}
        number={place.number}
      />

      <section aria-labelledby="turnout-heading">
        <h2
          id="turnout-heading"
          className="my-4 text-md font-semibold uppercase tracking-wide text-muted-foreground"
        >
          Izborna aktivnost
        </h2>
        <div className="overflow-hidden border-y last:border-b-0 border-border">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-border">
                <th
                  scope="row"
                  className="bg-muted/30 px-4 py-2 text-left font-medium text-foreground"
                >
                  Broj upisanih birača
                </th>
                <td className="px-4 py-2 text-right font-semibold tabular-nums text-lg">
                  {place.registeredVoters}
                </td>
              </tr>

              <tr className="border-y border-border">
                <th
                  scope="row"
                  className="bg-muted/30 px-4 py-2 text-left font-medium text-foreground"
                >
                  Broj trenutno izašlih
                </th>

                <td className="px-4 py-2 text-right">
                  <VotedCountShow
                    votedCount={votedCount}
                    turnoutPercent={Number(
                      getVotePercentageFormatted(
                        votedCount,
                        place.registeredVoters
                      )
                    )}
                    updatedAt={
                      place.currentPlaceStatus?.updatedAt ?? new Date()
                    }
                  />
                </td>
              </tr>

              {records.length > 0 && (
                <tr>
                  <td colSpan={2}>
                    <TournOutGrapfByPlace
                      records={records}
                      maxVoters={place.registeredVoters}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <PlaceTurnoutForm
            placeNumber={place.number}
            maxVoters={place.registeredVoters}
            currentVotedCount={place.currentPlaceStatus?.votedCount ?? 0}
          />
        </div>
      </section>

      <IncidentsByPlace
        incidentChartData={incidentChartData}
        placeNumber={place.number}
        incidents={place.incidents}
      />
    </div>
  );
};

export default PlaceDetailView;
