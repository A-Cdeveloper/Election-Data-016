import type { Prisma } from "@prisma/client";

/** Include za listu BM — isti oblik kao upit na `/places` */
export const placeListInclude = {
  incidents: true,
  currentPlaceStatus: true,
} satisfies Prisma.PlaceInclude;

export type PlaceWithListRelations = Prisma.PlaceGetPayload<{
  include: typeof placeListInclude;
}>;

/** Include za stranicu detalja BM */
export const placeDetailInclude = {
  incidents: {
    include: { incidentType: true },
    orderBy: { reportedAt: "desc" as const },
  },
  currentPlaceStatus: true,
} satisfies Prisma.PlaceInclude;

export type PlaceWithDetailRelations = Prisma.PlaceGetPayload<{
  include: typeof placeDetailInclude;
}>;
