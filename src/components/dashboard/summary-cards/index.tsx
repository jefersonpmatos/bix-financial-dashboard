import { DashboardSummary } from "@/types/summary";
import { TrendingUp, TrendingDown, Wallet, FileText } from "lucide-react";

import { Container, Card, Header, IconWrapper, Title, Value } from "./styles";

function format(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

interface Props {
  summary: DashboardSummary;
}

export function SummaryCards({ summary }: Props) {
  return (
    <Container>
      <Card $color="#10b981">
        <Header>
          <IconWrapper $color="#10b981">
            <TrendingUp size={18} />
          </IconWrapper>
          <Title>Receitas</Title>
        </Header>
        <Value>{format(summary.income)}</Value>
      </Card>

      <Card $color="#ef4444">
        <Header>
          <IconWrapper $color="#ef4444">
            <TrendingDown size={18} />
          </IconWrapper>
          <Title>Despesas</Title>
        </Header>
        <Value>{format(summary.expense)}</Value>
      </Card>

      <Card $color="#2563eb">
        <Header>
          <IconWrapper $color="#2563eb">
            <Wallet size={18} />
          </IconWrapper>
          <Title>Saldo</Title>
        </Header>
        <Value>{format(summary.balance)}</Value>
      </Card>

      <Card $color="#8b5cf6">
        <Header>
          <IconWrapper $color="#8b5cf6">
            <FileText size={18} />
          </IconWrapper>
          <Title>Transações</Title>
        </Header>
        <Value>{summary.totalTransactions}</Value>
      </Card>
    </Container>
  );
}
