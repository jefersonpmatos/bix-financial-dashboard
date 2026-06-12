import { ReactNode } from "react";

export interface SidebarItem {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface SidebarProps {
  title: string;
  items: SidebarItem[];
  footer?: ReactNode;
  defaultCollapsed?: boolean;
}
