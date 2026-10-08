"use client";

import type { Incident, IncidentType } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { formatTime } from "@/lib/format-date";

export type IncidentWithType = Incident & {
  incidentType: IncidentType;
};

type IncidentsByPlaceProps = {
  placeNumber: number;
  incidents: IncidentWithType[];
};

const IncidentsByPlace = ({
  placeNumber,
  incidents,
}: IncidentsByPlaceProps) => {
  const handleAddIncident = () => {
    // TODO: otvori formu / modal za dodavanje incidenta
  };

  return (
    <section aria-labelledby="incidents-heading">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h2
          id="incidents-heading"
          className="text-md font-semibold uppercase tracking-wide text-muted-foreground"
        >
          Incidenti — {incidents.length}
        </h2>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="shrink-0"
          data-place-number={placeNumber}
          onClick={handleAddIncident}
        >
          Dodaj incident
        </Button>
      </div>
      <ul className="divide-y rounded-lg border border-border h-[300px] overflow-y-auto">
        {incidents.length === 0 ? (
          <li className="px-4 py-8 text-center text-sm text-muted-foreground">
            Nema prijavljenih incidenata.
          </li>
        ) : (
          incidents.map((incident) => (
            <li key={incident.id} className="px-4 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[15px] font-medium leading-snug">
                    {incident.incidentType.name}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {incident.description}
                  </p>
                </div>

                <time
                  dateTime={incident.reportedAt.toISOString()}
                  className="shrink-0 text-xs tabular-nums text-muted-foreground"
                >
                  {formatTime(incident.reportedAt ?? new Date())}
                </time>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default IncidentsByPlace;
