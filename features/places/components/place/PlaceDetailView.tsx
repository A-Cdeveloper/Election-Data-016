import { BackButton } from "@/components/custom/BackButton";
import IncidentsByPlace from "@/features/incidents/components/IncidentsByPlace";
import PlaceHeader from "@/features/places/components/place/PlaceHeader";
import PlaceMap from "@/features/places/components/place/PlaceMap";
import PlaceTurnoutForm from "@/features/places/components/place/PlaceTurnoutForm";
import type { Place } from "@/features/places/types";
import { formatTime } from "@/lib/format-date";

/** Placeholder until live turnout is wired up */
const MOCK_TURNOUT = {
  votedCount: 60,
  updatedAt: "2026-10-07 10:00:00",
};

type PlaceDetailViewProps = {
  place: Place;
};

const PlaceDetailView = ({ place }: PlaceDetailViewProps) => {
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
                  <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                    Poslednje ažuriranje: {formatTime(MOCK_TURNOUT.updatedAt)}
                  </span>
                </th>
                <td className="px-4 py-3 text-right">
                  <span className="font-medium tabular-nums text-lg">
                    {MOCK_TURNOUT.votedCount}{" "}
                    <span className="text-xs font-normal text-muted-foreground">
                      (
                      {(
                        (MOCK_TURNOUT.votedCount / place.registeredVoters) *
                        100
                      ).toFixed(2)}
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

      <PlaceMap latitude={place.latitude} longitude={place.longitude} />

      <IncidentsByPlace placeId={place.number.toString()} />
    </div>
  );
};

export default PlaceDetailView;
