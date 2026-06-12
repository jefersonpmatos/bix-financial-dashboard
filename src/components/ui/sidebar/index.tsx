"use client";

import { useState } from "react";
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
          {items.map((item) => (
            <NavItem key={item.id} onClick={item.onClick}>
              {item.icon}

              <span>{item.label}</span>
            </NavItem>
          ))}
        </Navigation>

        {footer && <Footer>{footer}</Footer>}
      </Container>
    </Wrapper>
  );
}
