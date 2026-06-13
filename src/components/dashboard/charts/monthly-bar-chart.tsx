"use client";

import { memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

import { ChartCard, ChartHeader } from "./styles";

import { formatMonth, formatCurrency } from "@/lib/format";

interface Props {
  data: {
    month: string;
    income: number;
    expense: number;
  }[];
}

function MonthlyBarChartBase({ data }: Props) {
  return (
    <ChartCard>
      <ChartHeader>
        <h3>Revenue vs Expenses</h3>
        <span>Monthly financial overview</span>
      </ChartHeader>

      <ResponsiveContainer>
        <BarChart data={data} margin={{ left: 50 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="month" tickFormatter={formatMonth} />
          <YAxis tickFormatter={formatCurrency} />
          <Tooltip
            labelFormatter={(label) => formatMonth(label)}
            formatter={(value) => formatCurrency(Number(value))}
          />
          <Legend />
          <Bar dataKey="income" name="Revenue" fill="#2563eb" />
          <Bar dataKey="expense" name="Expenses" fill="#dc2626" />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export const MonthlyBarChart = memo(MonthlyBarChartBase);
