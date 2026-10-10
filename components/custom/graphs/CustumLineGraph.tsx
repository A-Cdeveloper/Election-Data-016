"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type CustumLineGraphProps<T> = {
  data: T[];
  dataKey: keyof T & string;
  maxValue: number;
  strokeColor: string;
  strokeWidth?: number;
  className?: string;
  tooltipValueLabel: string;
};

type CustomTooltipProps = {
  active?: boolean;
  label?: string | number;
  payload?: Array<{ value?: string | number }>;
  valueLabel: string;
};

const CustomTooltip = ({
  active,
  label,
  payload,
  valueLabel,
}: CustomTooltipProps) => {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="rounded-md border border-border bg-background p-2 text-sm shadow-md">
      <p>Vreme: {label}</p>
      <p>
        {valueLabel}: {payload[0].value}
      </p>
    </div>
  );
};

const CustumLineGraph = <T extends { time: string }>({
  data,
  dataKey,
  maxValue,
  strokeColor,
  strokeWidth = 3,
  className,
  tooltipValueLabel,
}: CustumLineGraphProps<T>) => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%" className={className}>
        <LineChart data={data}>
          <CartesianGrid
            strokeWidth={0.5}
            stroke="#e0e0e0"
            strokeOpacity={0.3}
          />
          <XAxis
            dataKey="time"
            interval={0}
            angle={-45}
            textAnchor="end"
            height={60}
            style={{ fontSize: "12px" }}
          />
          <YAxis domain={[0, maxValue]} />
          <Tooltip content={<CustomTooltip valueLabel={tooltipValueLabel} />} />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            dot
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustumLineGraph;
