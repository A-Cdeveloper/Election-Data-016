import { formatHour } from "@/lib/format-date";
import { prisma } from "@/lib/prisma";

export type TurnoutRecordByPlaceIdType = {
  time: string;
  votedCount: number;
};

export const getTurnoutChartDataByPlaceId = async (
  placeId: number
): Promise<TurnoutRecordByPlaceIdType[]> => {
  const records = await prisma.turnoutRecord.findMany({
    where: { placeId },
    orderBy: { recordedAt: "asc" },
  });

  return records.map((record) => {
    return {
      time: `${formatHour(record.recordedAt)} h`,
      votedCount: record.votedCount,
    };
  });
};

export type IncidentChartData = {
  time: string;
  incidentCount: number;
};

export const getIncidentChartDataByPlaceId = async (
  placeId: number
): Promise<IncidentChartData[]> => {
  const incidents = await prisma.incident.findMany({
    where: { placeId },
    orderBy: { reportedAt: "asc" },
  });

  const incidentsByHour = new Map<string, number>();

  for (const incident of incidents) {
    const time = `${formatHour(incident.reportedAt)} h`;
    incidentsByHour.set(time, (incidentsByHour.get(time) ?? 0) + 1);
  }

  return Array.from(incidentsByHour, ([time, incidentCount]) => ({
    time,
    incidentCount,
  }));
};
