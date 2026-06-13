"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

export function useVirtualTable(count: number) {
  const parentRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 48,
    overscan: 10,
  });

  return {
    parentRef,
    virtualizer,
  };
}
