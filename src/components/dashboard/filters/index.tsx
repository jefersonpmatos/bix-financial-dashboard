"use client";

import { useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

import { Container, FieldGroup, Grid, Title } from "./styles";
import { Select } from "@/components/ui/select";
import { uniqueBy } from "@/lib/unique-by";
import { useDashboard } from "@/contexts/dashboard-context";

const DatePickerInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.875rem;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

export function Filters() {
  const { filters, setFilters, allTransactions, minDate, maxDate } =
    useDashboard();

  const [startDate, setStartDate] = useState<Date | null>(
    filters.startDate ? new Date(filters.startDate * 1000) : null,
  );
  const [endDate, setEndDate] = useState<Date | null>(
    filters.endDate ? new Date(filters.endDate * 1000) : null,
  );

  const accounts = useMemo(
    () => uniqueBy(allTransactions, "account"),
    [allTransactions],
  );

  const industries = useMemo(
    () => uniqueBy(allTransactions, "industry"),
    [allTransactions],
  );

  const states = useMemo(
    () => uniqueBy(allTransactions, "state"),
    [allTransactions],
  );

  const minDateObj = useMemo(() => new Date(minDate), [minDate]);
  const maxDateObj = useMemo(() => new Date(maxDate), [maxDate]);

  const handleDateChange = (
    dates: [Date | null, Date | null] | Date | null,
  ) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);

      setFilters({
        ...filters,
        startDate: start ? Math.floor(start.getTime() / 1000) : undefined,
        endDate: end ? Math.floor(end.getTime() / 1000) : undefined,
      });
    } else {
      setStartDate(dates);
      setEndDate(null);

      setFilters({
        ...filters,
        startDate: dates ? Math.floor(dates.getTime() / 1000) : undefined,
        endDate: undefined,
      });
    }
  };

  return (
    <Container>
      <Title>Filters</Title>

      <Grid>
        <FieldGroup>
          <label>Date range</label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            minDate={minDateObj}
            maxDate={maxDateObj}
            placeholderText="Selecione uma data ou intervalo"
            dateFormat="dd/MM/yyyy"
            customInput={<DatePickerInput />}
            isClearable
          />
        </FieldGroup>

        <FieldGroup>
          <label>Accounts</label>
          <Select
            value={filters.account ?? ""}
            onChange={(e) =>
              setFilters({
                ...filters,
                account: e.target.value,
              })
            }
          >
            <option value="">All accounts</option>
            {(accounts as string[]).map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </Select>
        </FieldGroup>

        <FieldGroup>
          <label>Industries</label>
          <Select
            value={filters.industry ?? ""}
            onChange={(e) =>
              setFilters({
                ...filters,
                industry: e.target.value,
              })
            }
          >
            <option value="">All industries</option>
            {(industries as string[]).map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </Select>
        </FieldGroup>

        <FieldGroup>
          <label>States</label>
          <Select
            value={filters.state ?? ""}
            onChange={(e) =>
              setFilters({
                ...filters,
                state: e.target.value,
              })
            }
          >
            <option value="">All states</option>
            {(states as string[]).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </FieldGroup>
      </Grid>
    </Container>
  );
}
