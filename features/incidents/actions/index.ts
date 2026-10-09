"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type IncidentActionResponse = {
  success?: string;
  error?: string;
};

export const addIncidentAction = async (
  prevState: IncidentActionResponse,
  formData: FormData
) => {
  const incidentTypeCode = formData.get("incidentType")?.toString().trim();
  const description = formData.get("description")?.toString().trim() ?? "";
  const placeNumber = Number(formData.get("placeNumber"));

  if (!incidentTypeCode || !Number.isInteger(placeNumber)) {
    return { error: "Invalid incident type" };
  }

  try {
    const [place, incidentType] = await Promise.all([
      prisma.place.findUnique({ where: { number: placeNumber } }),
      prisma.incidentType.findUnique({ where: { code: incidentTypeCode } }),
    ]);

    if (!place) {
      return { error: "Place not found" };
    }

    if (!incidentType) {
      return { error: "Incident type not found" };
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
    return { error: "An unknown error occurred" };
  }
  return { success: "Incident added successfully" };
};
