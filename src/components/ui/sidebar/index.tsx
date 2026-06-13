"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"; // Correção: next/navigation (não next-navigation)
import Link from "next/link";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { SidebarProps } from "./types";

import {
  Wrapper,
  Container,
  ToggleButton,
  Header,
  Navigation,
  NavItem,
  Footer,
} from "./styles";

export function Sidebar({
  title,
  items,
  footer,
  defaultCollapsed = false,
}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const pathname = usePathname();

  return (
    <Wrapper>
      <ToggleButton
        $collapsed={collapsed}
        onClick={() => setCollapsed((prev) => !prev)}
      >
        {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
      </ToggleButton>

      <Container $collapsed={collapsed}>
        <Header>{title}</Header>

        <Navigation>
          {items.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link href={item.path} key={item.id}>
                <NavItem $active={isActive}>
                  {item.icon}
                  <span>{item.label}</span>
                </NavItem>
              </Link>
            );
          })}
        </Navigation>

        {footer && <Footer>{footer}</Footer>}
      </Container>
    </Wrapper>
  );
}
