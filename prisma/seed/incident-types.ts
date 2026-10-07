import incidentTypesJson from "@/data/incidents.json";

import { prisma } from "@/lib/prisma";

type IncidentTypeJson = {
  id: string;
  name: string;
};

/** Šifarnik iz data/incidents.json — privremeno dok JSON ne uklonimo */
export async function seedIncidentTypes() {
  const rows = (incidentTypesJson as IncidentTypeJson[]).map((item) => ({
    code: item.id,
    name: item.name,
  }));

  const result = await prisma.incidentType.createMany({
    data: rows,
    skipDuplicates: true,
  });

  return result.count;
}
