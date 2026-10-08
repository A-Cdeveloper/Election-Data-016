import { notFound } from "next/navigation";

import PlaceDetailView from "@/features/places/components/place/PlaceDetailView";
import { placeDetailInclude } from "@/features/places/types";
import { prisma } from "@/lib/prisma";

type SinglePlacePageProps = {
  params: Promise<{ pid: string }>;
};

export default async function SinglePlacePage({
  params,
}: SinglePlacePageProps) {
  const { pid } = await params;
  const placeNumber = Number(pid);

  const place = await prisma.place.findUnique({
    where: {
      number: placeNumber,
    },
    include: placeDetailInclude,
  });

  if (!place) {
    notFound();
  }

  return <PlaceDetailView place={place} />;
}
