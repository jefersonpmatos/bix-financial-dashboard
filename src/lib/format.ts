import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(value?: number | string | null) {
  if (!value) return "-";

  const timestamp = Number(value);

  if (Number.isNaN(timestamp)) return "-";

  const normalized = timestamp < 1e12 ? timestamp * 1000 : timestamp;

  const date = new Date(normalized);

  if (Number.isNaN(date.getTime())) return "-";

  return format(date, "dd/MM/yyyy", { locale: ptBR });
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatMonth(value: string | number) {
  return format(new Date(value), "MMM", { locale: ptBR });
}
