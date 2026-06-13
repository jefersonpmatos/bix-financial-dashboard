import { Transaction } from "@/types/transaction";
import { DashboardFilters } from "@/types/filters";

export function filterTransactions(
  transactions: Transaction[],
  filters: DashboardFilters,
) {
  return transactions.filter((t) => {
    const date = t.date;

    if (filters.startDate && date < filters.startDate) {
      return false;
    }

    if (filters.endDate && date > filters.endDate) {
      return false;
    }

    if (filters.account && t.account !== filters.account) {
      return false;
    }

    if (filters.industry && t.industry !== filters.industry) {
      return false;
    }

    if (filters.state && t.state !== filters.state) {
      return false;
    }

    return true;
  });
}
