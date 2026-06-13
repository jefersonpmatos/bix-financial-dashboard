"use client";

import { useMemo, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { flexRender } from "@tanstack/react-table";

import { useTable } from "./use-table";
import { columns } from "./columns";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function TransactionsTable({
  data,
  loading,
}: {
  data: any[];
  loading?: boolean;
}) {
  const { table, globalFilter, setGlobalFilter } = useTable(data);

  const parentRef = useRef<HTMLDivElement>(null);

  const rows = table.getRowModel().rows;

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 48,
    overscan: 10,
  });

  const items = virtualizer.getVirtualItems();

  return (
    <Card>
      <Input
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search..."
        style={{ marginBottom: 12, padding: 8 }}
      />

      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #eee",
          fontWeight: 600,
        }}
      >
        {table.getHeaderGroups().map((hg) =>
          hg.headers.map((header) => (
            <div
              key={header.id}
              onClick={header.column.getToggleSortingHandler()}
              style={{
                flex: 1,
                cursor: header.column.getCanSort() ? "pointer" : "default",
                userSelect: "none",
                padding: "10px 0",
              }}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}

              {{
                asc: " ↑",
                desc: " ↓",
              }[header.column.getIsSorted() as string] ?? null}
            </div>
          )),
        )}
      </div>

      {/* BODY */}
      <div
        ref={parentRef}
        style={{
          height: 600,
          overflow: "auto",
          position: "relative",
        }}
      >
        <div
          style={{
            height: virtualizer.getTotalSize(),
            position: "relative",
          }}
        >
          {loading &&
            Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  height: 48,
                  borderBottom: "1px solid #f3f3f3",
                }}
              >
                {columns.map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: 12,
                      margin: 8,
                      background: "#eee",
                      borderRadius: 4,
                    }}
                  />
                ))}
              </div>
            ))}

          {!loading &&
            items.map((vRow) => {
              const row = rows[vRow.index];

              return (
                <div
                  key={row.id}
                  style={{
                    position: "absolute",
                    transform: `translateY(${vRow.start}px)`,
                    height: 48,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #f3f3f3",
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <div key={cell.id} style={{ flex: 1 }}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
        </div>
      </div>
    </Card>
  );
}
