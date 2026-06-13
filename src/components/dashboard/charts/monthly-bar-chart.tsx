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
import { EmptyState } from "@/components/ui/empty-state";

import { formatMonth, formatCurrency } from "@/lib/format";

interface Props {
  data: {
    month: string;
    income: number;
    expense: number;
  }[];
}

function MonthlyBarChartBase({ data }: Props) {
  const hasData = data && data.length > 0;

  return (
    <ChartCard>
      <ChartHeader>
        <h3>Receita vs Despesas</h3>
        <span>Visão geral financeira mensal</span>
      </ChartHeader>

      {hasData ? (
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
            <Bar dataKey="income" name="Receita" fill="#2563eb" />
            <Bar dataKey="expense" name="Despesas" fill="#dc2626" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <EmptyState />
      )}
    </ChartCard>
  );
}

export const MonthlyBarChart = memo(MonthlyBarChartBase);
