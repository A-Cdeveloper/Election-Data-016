"use client";

import type { TurnoutRecordByPlaceIdType } from "../queries";
import CustumLineGraph from "@/components/custom/graphs/CustumLineGraph";

const TournOutGrapfByPlace = ({
  records,
  maxVoters,
}: {
  records: TurnoutRecordByPlaceIdType[];
  maxVoters: number;
}) => {
  return (
    <CustumLineGraph<TurnoutRecordByPlaceIdType>
      className="mt-6 -ms-8"
      data={records}
      dataKey="votedCount"
      maxValue={maxVoters}
      strokeColor="#ade612"
      strokeWidth={3}
      tooltipValueLabel="Broj izašlih"
    />
  );
};

export default TournOutGrapfByPlace;
