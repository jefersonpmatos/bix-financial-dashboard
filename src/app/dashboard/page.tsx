"use client";

import { SummaryCards } from "@/components/dashboard/summary-cards";
import { MonthlyBarChart } from "@/components/dashboard/charts/monthly-bar-chart";
import { BalanceLineChart } from "@/components/dashboard/charts/balance-line-chart";
import { TransactionsTable } from "@/components/dashboard/transactions-table";
import { Filters } from "@/components/dashboard/filters";
import { useDashboard } from "@/contexts/dashboard-context";
import { LayoutContainer, H1, Description } from "./styles";

export default function DashboardPage() {
  const { transactions, summary, monthly, balance } = useDashboard();

  return (
    <LayoutContainer>
      <H1>Dashboard</H1>
      <Description>
        {" "}
        Manage your finances with ease and efficiency.{" "}
      </Description>

      <Filters />

      <SummaryCards summary={summary} />

      <MonthlyBarChart data={monthly} />

      <BalanceLineChart data={balance} />

      <TransactionsTable data={transactions} />
    </LayoutContainer>
  );
}
