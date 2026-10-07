import { notFound } from "next/navigation";

import { getPlaceByNumber } from "@/features/places/api/get-place";
import PlaceDetailView from "@/features/places/components/place/PlaceDetailView";

type SinglePlacePageProps = {
  params: Promise<{ pid: string }>;
};

export default async function SinglePlacePage({
  params,
}: SinglePlacePageProps) {
  const { pid } = await params;
  const placeNumber = Number(pid);

  if (!Number.isInteger(placeNumber) || placeNumber < 1) {
    notFound();
  }

  const place = getPlaceByNumber(placeNumber);
  if (!place) {
    notFound();
  }

  return <PlaceDetailView place={place} />;
}
