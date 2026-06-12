import { HTMLAttributes } from "react";

import { StyledCard } from "./card.styles";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ children, ...props }: CardProps) {
  return <StyledCard {...props}>{children}</StyledCard>;
}
