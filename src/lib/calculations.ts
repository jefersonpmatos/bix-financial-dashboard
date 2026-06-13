import { Transaction } from "@/types/transaction";

export function getSummary(transactions: Transaction[]) {
  let income = 0;
  let expense = 0;

  for (const t of transactions) {
    if (t.transaction_type === "deposit") {
      income += t.amount;
    } else {
      expense += t.amount;
    }
  }

  return {
    income,
    expense,
    balance: income - expense,
    totalTransactions: transactions.length,
  };
}
