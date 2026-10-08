import { formatTime } from "@/lib/format-date";

type VotedCountProps = {
  votedCount: number;
  turnoutPercent: number;
  updatedAt: Date;
};

const votedColors = (turnoutPercent: number) => {
  if (turnoutPercent < 30) {
    return "text-red-600";
  }
  if (turnoutPercent > 30 && turnoutPercent < 50) {
    return "text-blue-500";
  }
  return "text-green-600";
};

const VotedCountShow = ({
  votedCount,
  turnoutPercent,
  updatedAt,
}: VotedCountProps) => {
  return (
    <span
      className={`font-bold text-lg tabular-nums ${votedColors(turnoutPercent)}`}
    >
      {votedCount}
      <span className="text-sm font-normal"> ({turnoutPercent}%)</span>
      <span className="text-[12px] font-normal text-gray-400 block -mt-1 mb-2">
        {" "}
        ažurirano: {formatTime(updatedAt)}
      </span>
    </span>
  );
};

export default VotedCountShow;
