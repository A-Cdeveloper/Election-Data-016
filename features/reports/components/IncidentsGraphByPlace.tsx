"use client";

import CustumLineGraph from "@/components/custom/graphs/CustumLineGraph";
import type { IncidentChartData } from "@/features/reports/queries";

const IncidentsGraphByPlace = ({ data }: { data: IncidentChartData[] }) => {
  if (data.length === 0) {
    return null;
  }

  return (
    <CustumLineGraph<IncidentChartData>
      data={data}
      dataKey="incidentCount"
      maxValue={Math.max(...data.map((item) => item.incidentCount))}
      strokeColor="#b91c1c"
      strokeWidth={3}
      className="mt-6 -ms-8"
      tooltipValueLabel="Broj incidenata"
    />
  );
};

export default IncidentsGraphByPlace;
