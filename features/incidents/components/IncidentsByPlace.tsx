import type { Incident, IncidentType } from "@prisma/client";

import AddIncidents from "./AddIncidents";
import IncidentsList from "./IncidentsList";
import { getIncidentTypes } from "../queries";
import { IncidentChartData } from "@/features/reports/queries";
import IncidentsGraphByPlace from "@/features/reports/components/IncidentsGraphByPlace";

export type IncidentWithType = Incident & {
  incidentType: IncidentType;
};

type IncidentsByPlaceProps = {
  placeNumber: number;
  incidents: IncidentWithType[];
  incidentChartData: IncidentChartData[];
};

const IncidentsByPlace = async ({
  placeNumber,
  incidents,
  incidentChartData,
}: IncidentsByPlaceProps) => {
  const incidentTypes = await getIncidentTypes();
  if (!incidentTypes) {
    return null;
  }

  return (
    <section aria-labelledby="incidents-heading" className="mt-8">
      <h2
        id="incidents-heading"
        className="text-md font-semibold uppercase tracking-wide text-muted-foreground mb-4"
      >
        Incidenti - {incidents.length}
      </h2>
      <IncidentsGraphByPlace data={incidentChartData} />
      <IncidentsList incidents={incidents} />
      <AddIncidents
        placeNumber={placeNumber.toString()}
        types={incidentTypes}
      />
    </section>
  );
};

export default IncidentsByPlace;
