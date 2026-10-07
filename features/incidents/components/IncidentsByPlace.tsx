"use client";

import incidents from "@/data/incidents.json";
import { Button } from "@/components/ui/button";
import { formatTime } from "@/lib/format-date";

type IncidentType = {
  id: string;
  name: string;
};

const incidentTypes = incidents.map((incident) => ({
  id: incident.id,
  name: incident.name,
}));

/** Layout preview — kasnije iz API-ja po BM */
const MOCK_INCIDENTS = [
  {
    incidentId: "06",
    reportedAt: "2026-10-07T08:12:00",
    description:
      "Posmatrač je primetio korišćenje telefona iza paravana tokom glasanja.",
  },
  {
    incidentId: "07",
    reportedAt: "2026-10-07T09:45:00",
    description:
      "Prijavljeno fotografisanje listića u blizini glasačkog kutija.",
  },
  {
    incidentId: "01",
    reportedAt: "2026-10-07T10:30:00",
    description:
      "Birač je pokušao da glasa bez važećeg ličnog dokumenta; situacija je rešena.",
  },
  {
    incidentId: "12",
    reportedAt: "2026-10-07T11:05:00",
    description:
      "Neovlašćeno lice je ušlo u prostoriju biračkog mesta; uklonjeno po intervenciji.",
  },
  {
    incidentId: "13",
    reportedAt: "2026-10-07T11:30:00",
    description:
      "Birački odbor je odbio da evidentira primedbu; situacija je rešena.",
  },
  {
    incidentId: "14",
    reportedAt: "2026-10-07T12:00:00",
    description:
      "Birački odbor je odbio da evidentira primedbu; situacija je rešena.",
  },
] as const;

function incidentName(id: string): string {
  return (
    (incidentTypes as IncidentType[]).find((item) => item.id === id)?.name ??
    "Nepoznat incident"
  );
}

type IncidentsByPlaceProps = {
  placeId: string;
};

const IncidentsByPlace = ({ placeId }: IncidentsByPlaceProps) => {
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
          Incidenti — {MOCK_INCIDENTS.length}
        </h2>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="shrink-0"
          data-place-id={placeId}
          onClick={handleAddIncident}
        >
          Dodaj incident
        </Button>
      </div>
      <ul className="divide-y divide-border rounded-lg border border-border h-[300px] overflow-y-auto">
        {MOCK_INCIDENTS.map((incident) => (
          <li
            key={`${incident.incidentId}-${incident.reportedAt}`}
            className="px-4 py-4"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                {" "}
                <p className=" text-[15px] font-medium leading-snug">
                  {incidentName(incident.incidentId)}
                </p>{" "}
                <p className="mt-2 text-sm text-muted-foreground">
                  {incident.description}
                </p>
              </div>

              <time
                dateTime={incident.reportedAt}
                className="shrink-0 text-xs tabular-nums text-muted-foreground"
              >
                {formatTime(incident.reportedAt)}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IncidentsByPlace;
