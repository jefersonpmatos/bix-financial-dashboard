export const theme = {
  colors: {
    primary: "#2563eb",
    success: "#16a34a",
    danger: "#dc2626",
    warning: "#f59e0b",

    background: "#f8fafc",
    surface: "#ffffff",

    text: "#0f172a",
    textSecondary: "#64748b",

    border: "#e2e8f0",
  },

  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
  },

  shadows: {
    sm: "0 1px 3px rgba(0,0,0,.08)",
    md: "0 4px 12px rgba(0,0,0,.08)",
  },
} as const;

export type Theme = typeof theme;
