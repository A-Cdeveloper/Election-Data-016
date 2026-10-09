import { notFound } from "next/navigation";

import PlaceDetailView from "@/features/places/components/place/PlaceDetailView";
import { getPlaceByNumber } from "@/features/places/queries";

type SinglePlacePageProps = {
  params: Promise<{ pid: string }>;
};

export default async function SinglePlacePage({
  params,
}: SinglePlacePageProps) {
  const { pid } = await params;
  const placeNumber = Number(pid);

  if (!Number.isInteger(placeNumber)) {
    notFound();
  }

  const place = await getPlaceByNumber(placeNumber);

  if (!place) {
    notFound();
  }

  return <PlaceDetailView place={place} />;
}
