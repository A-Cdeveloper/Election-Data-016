import { formatTime } from "@/lib/format-date";
import { IncidentWithType } from "./IncidentsByPlace";

type IncidentsListProps = {
  incidents: IncidentWithType[] | undefined;
};

const IncidentsList = ({ incidents }: IncidentsListProps) => {
  if (!incidents) return null;

  if (incidents.length === 0) {
    return (
      <p className="px-4 py-8 text-center text-sm text-muted-foreground">
        Nema prijavljenih incidenata.
      </p>
    );
  }

  return (
    <div className="my-4">
      <h2
        id="incidents-heading"
        className="text-md font-semibold uppercase tracking-wide text-muted-foreground mb-4"
      >
        Incidenti - {incidents.length}
      </h2>
      <ul className="divide-y border border-border h-[300px] overflow-y-auto">
        {incidents.map((incident) => (
          <li key={incident.id} className="py-4 w-[95%] mx-auto">
            <div className="flex items-center gap-4">
              <div className="text-[15px] font-medium gap-2">
                <time
                  dateTime={incident.reportedAt.toISOString()}
                  className="shrink-0 text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded-md font-bold"
                >
                  {formatTime(incident.reportedAt ?? new Date())}
                </time>
              </div>
              <div className="mt-1 text-[13px] text-muted-foreground flex flex-col gap-1">
                <span className="font-medium text-[14px] block mb-0 text-foreground">
                  {incident.incidentType.name}
                </span>
                {incident.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncidentsList;
