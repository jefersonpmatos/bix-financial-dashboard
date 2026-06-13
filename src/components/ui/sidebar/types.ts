import { ReactNode } from "react";

export interface SidebarItem {
  id: string;
  label: string;
  icon?: ReactNode;
  path: string;
  onClick?: () => void;
}

export interface SidebarProps {
  title: string;
  items: SidebarItem[];
  footer?: ReactNode;
  defaultCollapsed?: boolean;
}
