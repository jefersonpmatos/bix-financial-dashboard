import raw from "@/data/transactions.json";
import { Transaction } from "@/types/transaction";

export function getTransactions(): Transaction[] {
  return (raw as unknown as Transaction[]).map((t) => ({
    ...t,
    amount: Number(t.amount) / 100,
  }));
}
export function formatCentsToNumber(cents: string): number {
  return Math.round(Number(cents));
}

export function centsToReais(cents: string): number {
  return Math.round(Number(cents)) / 100;
}
