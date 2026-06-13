import { Transaction } from "@/types/transaction";

export function getCumulativeBalance(transactions: Transaction[]) {
  const sorted = [...transactions].sort((a, b) => a.date - b.date);

  let balance = 0;

  return sorted.map((t) => {
    if (t.transaction_type === "deposit") {
      balance += t.amount;
    } else {
      balance -= t.amount;
    }

    return {
      date: new Date(t.date).toISOString().split("T")[0],
      balance,
    };
  });
}
