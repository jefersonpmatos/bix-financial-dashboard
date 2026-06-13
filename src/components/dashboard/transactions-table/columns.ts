import { ColumnDef } from "@tanstack/react-table";
import { Transaction } from "@/types/transaction";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) =>
      new Date(getValue<number>()).toLocaleDateString("pt-BR"),
  },
  {
    accessorKey: "account",
    header: "Account",
  },
  {
    accessorKey: "industry",
    header: "Industry",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "transaction_type",
    header: "Type",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ getValue }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(getValue<number>()),
  },
];
