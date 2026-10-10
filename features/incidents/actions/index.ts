"use server";

import { getCurrentUser } from "@/features/auth/utils/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type IncidentActionResponse = {
  success?: string;
  error?: string;
};

export const addIncidentAction = async (
  _prevState: IncidentActionResponse,
  formData: FormData
) => {
  const user = await getCurrentUser();
  if (!user) {
    return { error: "Nemate dozvolu da dodate incident" };
  }

  const incidentTypeCode = formData.get("incidentType")?.toString().trim();
  const description = formData.get("description")?.toString().trim() ?? "";
  const placeNumber = Number(formData.get("placeNumber"));

  if (!incidentTypeCode || !Number.isInteger(placeNumber)) {
    return { error: "Neispravni podaci" };
  }

  try {
    const [place, incidentType] = await Promise.all([
      prisma.place.findUnique({ where: { number: placeNumber } }),
      prisma.incidentType.findUnique({ where: { code: incidentTypeCode } }),
    ]);

    if (!place) {
      return { error: "Biračko mesto nije pronađeno" };
    }

    if (!incidentType) {
      return { error: "Tip incidenta nije pronađen" };
    }

    await prisma.incident.create({
      data: {
        placeId: place.id,
        incidentTypeCode: incidentType.code,
        description,
        reportedAt: new Date(),
      },
    });

    revalidatePath(`/places/${placeNumber}`, "page");
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "Došlo je do nepoznate greške" };
  }
  return { success: "Incident je uspešno dodat" };
};
