"use client";

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";

import { useState } from "react";
import { Transaction } from "@/types/transaction";
import { columns } from "./columns";

export function useTable(data: Transaction[]) {
  const [globalFilter, setGlobalFilter] = useState("");

  const [sorting, setSorting] = useState<SortingState>([
    { id: "date", desc: true },
  ]);

  const table = useReactTable({
    data,
    columns,

    state: {
      globalFilter,
      sorting,
    },

    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,

    globalFilterFn: (row, _columnId, value) => {
      const q = value.toLowerCase();

      return row.getVisibleCells().some((cell) => {
        const val = cell.getValue();

        if (val == null) return false;

        return String(val).toLowerCase().includes(q);
      });
    },

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return {
    table,
    globalFilter,
    setGlobalFilter,
  };
}
