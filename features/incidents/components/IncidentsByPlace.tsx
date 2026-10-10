import type { Incident, IncidentType } from "@prisma/client";

import AddIncidents from "./AddIncidents";
import IncidentsList from "./IncidentsList";
import { getIncidentTypes } from "../queries";

export type IncidentWithType = Incident & {
  incidentType: IncidentType;
};

type IncidentsByPlaceProps = {
  placeNumber: number;
  incidents: IncidentWithType[];
};

const IncidentsByPlace = async ({
  placeNumber,
  incidents,
}: IncidentsByPlaceProps) => {
  const incidentTypes = await getIncidentTypes();
  if (!incidentTypes) {
    return null;
  }

  return (
    <section aria-labelledby="incidents-heading">
      <IncidentsList incidents={incidents} />
      <AddIncidents
        placeNumber={placeNumber.toString()}
        types={incidentTypes}
      />
    </section>
  );
};

export default IncidentsByPlace;
