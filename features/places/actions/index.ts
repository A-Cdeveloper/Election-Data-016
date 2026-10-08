"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";

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
  const votedCount = formData.get("votedCount");
  const placeNumber = formData.get("placeNumber");

  try {
    if (!votedCount || !placeNumber) {
      return { error: "Invalid form data", success: false };
    }

    const number = Number(placeNumber);
    const count = Number(votedCount);
    const place = await prisma.place.findUnique({
      where: { number },
    });
    if (!place) {
      return { error: "Place not found", success: false };
    }
    if (!Number.isInteger(count) || count < 0) {
      return { error: "Invalid form data", success: false };
    }
    if (count > place.registeredVoters) {
      return {
        error: "Broj izašlih ne može biti veći od broja upisanih.",
        success: false,
      };
    }

    await prisma.currentPlaceStatus.upsert({
      where: { placeId: place.id },
      update: { votedCount: count },
      create: { placeId: place.id, votedCount: count },
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
    return { error: "An unknown error occurred", success: false };
  }
};
