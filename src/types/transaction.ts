export interface Transaction {
  date: number;
  amount: number;
  transaction_type: "deposit" | "withdraw";
  currency: string;
  account: string;
  industry: string;
  state: string;
}
