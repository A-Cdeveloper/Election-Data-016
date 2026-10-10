import { prisma } from "@/lib/prisma";
import { TurnoutRecord } from "@prisma/client";

export const getTurnoutRecordsByPlaceId = async (
  placeId: number
): Promise<TurnoutRecord[]> => {
  return await prisma.turnoutRecord.findMany({
    where: { placeId },
    orderBy: { createdAt: "desc" },
  });
};
