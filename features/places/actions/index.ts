"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/features/auth/utils/auth";

export type UpdatePlaceTurnoutActionResponse = {
  error?: string;
  success?: boolean;
  data?: {
    votedCount: number;
    placeNumber: string;
  };
};

export const updatePlaceTurnoutAction = async (
  _previousState: UpdatePlaceTurnoutActionResponse,
  formData: FormData
): Promise<UpdatePlaceTurnoutActionResponse> => {
  const user = await getCurrentUser();
  if (!user) {
    return {
      error: "Nemate dozvolu da ažurirate izlazne brojeve",
      success: false,
    };
  }

  const votedCount = formData.get("votedCount");
  const placeNumber = formData.get("placeNumber");

  try {
    if (!votedCount || !placeNumber) {
      return { error: "Neispravni podaci", success: false };
    }

    const number = Number(placeNumber);
    const count = Number(votedCount);
    const place = await prisma.place.findUnique({
      where: { number },
    });
    if (!place) {
      return { error: "Biračko mesto nije pronađeno", success: false };
    }
    if (!Number.isInteger(count) || count < 0) {
      return { error: "Neispravni podaci", success: false };
    }
    if (count > place.registeredVoters) {
      return {
        error: "Broj izašlih ne može biti veći od broja upisanih.",
        success: false,
      };
    }
    // Update current place status
    await prisma.currentPlaceStatus.upsert({
      where: { placeId: place.id },
      update: { votedCount: count },
      create: { placeId: place.id, votedCount: count },
    });

    // Update turnout record
    const recordedAt = new Date();
    recordedAt.setMinutes(0, 0, 0);
    await prisma.turnoutRecord.upsert({
      where: {
        placeId_recordedAt: {
          placeId: place.id,
          recordedAt,
        },
      },
      update: {
        votedCount: count,
      },
      create: {
        placeId: place.id,
        votedCount: count,
        recordedAt,
      },
    });

    revalidatePath(`/places/${place.number}`);

    return {
      success: true,
      data: {
        votedCount: count,
        placeNumber: String(place.number),
      },
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message, success: false };
    }
    return { error: "Došlo je do nepoznate greške", success: false };
  }
};
