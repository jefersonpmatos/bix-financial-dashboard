import { Transaction } from "@/types/transaction";

function getMonthKey(date: number) {
  const d = new Date(date);

  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

export function groupByMonth(transactions: Transaction[]) {
  const map: Record<string, { income: number; expense: number }> = {};

  for (const t of transactions) {
    const month = getMonthKey(t.date);

    if (!map[month]) {
      map[month] = { income: 0, expense: 0 };
    }

    if (t.transaction_type === "deposit") {
      map[month].income += t.amount;
    } else {
      map[month].expense += t.amount;
    }
  }

  return Object.entries(map)
    .map(([month, values]) => ({
      month,
      ...values,
    }))
    .sort((a, b) => a.month.localeCompare(b.month));
}
