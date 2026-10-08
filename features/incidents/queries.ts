import { prisma } from "@/lib/prisma";

export const getIncidentTypes = async () => {
  const incidentTypes = await prisma.incidentType.findMany();
  return incidentTypes;
};
