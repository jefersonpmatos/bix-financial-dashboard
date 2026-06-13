"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getTransactions } from "@/lib/transactions";
import { filterTransactions } from "@/lib/filter-transactions";
import { getSummary } from "@/lib/calculations";
import { groupByMonth } from "@/lib/group-by-month";
import { getCumulativeBalance } from "@/lib/cumulative-balance";
import { loadStorage, saveStorage } from "@/lib/storage";
import { DashboardFilters } from "@/types/filters";

const STORAGE_KEY = "dashboard-filters";
const defaultFilters: DashboardFilters = {
  account: "",
  industry: "",
  state: "",
};

interface DashboardContextType {
  filters: DashboardFilters;
  setFilters: (filters: DashboardFilters) => void;
  allTransactions: any[];
  transactions: any[];
  summary: any;
  monthly: any[];
  balance: any[];
  minDate: number;
  maxDate: number;
  activeFilters: [string, any][];
  clearFilters: () => void;
  removeFilter: (key: keyof DashboardFilters, value?: string) => void;
}

const DashboardContext = createContext<DashboardContextType | null>(null);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<DashboardFilters>(() =>
    loadStorage(STORAGE_KEY, defaultFilters),
  );

  const allTransactions = getTransactions();

  const transactions = useMemo(() => {
    return filterTransactions(allTransactions, filters);
  }, [allTransactions, filters]);

  const summary = useMemo(() => {
    return getSummary(transactions);
  }, [transactions]);

  const monthly = useMemo(() => {
    return groupByMonth(transactions);
  }, [transactions]);

  const balance = useMemo(() => {
    return getCumulativeBalance(transactions);
  }, [transactions]);

  const { minDate, maxDate } = useMemo(() => {
    if (!allTransactions.length) return { minDate: 0, maxDate: 0 };

    let min = allTransactions[0].date;
    let max = allTransactions[0].date;
    for (let i = 1; i < allTransactions.length; i++) {
      const d = allTransactions[i].date;
      if (d < min) min = d;
      if (d > max) max = d;
    }
    return { minDate: min, maxDate: max };
  }, [allTransactions]);

  useEffect(() => {
    saveStorage(STORAGE_KEY, filters);
  }, [filters]);

  const activeFilters = useMemo(() => {
    return Object.entries(filters).filter(([_, value]) => {
      if (Array.isArray(value)) return value.length > 0;
      if (typeof value === "string") return value !== "";
      return value !== undefined;
    });
  }, [filters]);

  function clearFilters() {
    setFilters(defaultFilters);
  }

  function removeFilter(key: keyof DashboardFilters, value?: string) {
    setFilters((prev) => {
      const next = { ...prev };
      const current = next[key];

      if (Array.isArray(current) && value) {
        next[key] = current.filter((v) => v !== value) as any;
        return next;
      }

      delete next[key];
      return next;
    });
  }

  const value: DashboardContextType = {
    filters,
    setFilters,
    allTransactions,
    transactions,
    summary,
    monthly,
    balance,
    minDate,
    maxDate,
    activeFilters,
    clearFilters,
    removeFilter,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context)
    throw new Error("useDashboard must be used within DashboardProvider");
  return context;
}
