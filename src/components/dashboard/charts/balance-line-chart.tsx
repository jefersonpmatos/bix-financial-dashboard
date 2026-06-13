"use client";

import { memo, useMemo, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { formatDate, formatCurrency } from "@/lib/format";
import { ChartCard, ChartHeader } from "./styles";

interface Props {
  data: {
    date: number;
    balance: number;
  }[];
}

const formatDateBR = (value: string | number) => {
  if (typeof value === "string") {
    const [year, month, day] = value.split("-");
    return `${day}/${month}/${year}`;
  }
  return formatDate(value);
};

function sampleData(array: any[], maxPoints = 300) {
  if (array.length <= maxPoints) return array;
  const step = Math.ceil(array.length / maxPoints);
  const sampled = [];

  for (let i = 0; i < array.length; i += step) {
    sampled.push(array[i]);
  }

  if (sampled[sampled.length - 1] !== array[array.length - 1]) {
    sampled.push(array[array.length - 1]);
  }

  return sampled;
}

function BalanceLineChartBase({ data }: Props) {
  const chartData = useMemo(() => sampleData(data, 300), [data]);

  const formatYAxis = useCallback((value: number) => formatCurrency(value), []);

  return (
    <ChartCard>
      <ChartHeader>
        <h3>Balance Trend</h3>
        <span>Cumulative balance over time</span>
      </ChartHeader>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ left: 50 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="date" tickFormatter={formatDateBR} />
          <YAxis tickFormatter={formatYAxis} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
            }}
            labelFormatter={(value) => formatDateBR(value)}
            formatter={(value) => [formatCurrency(Number(value)), "Saldo"]}
          />
          <Line
            type="natural"
            dataKey="balance"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export const BalanceLineChart = memo(BalanceLineChartBase);
