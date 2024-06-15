import { ReactNode } from "react";
import "./Card.scss";

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <div className="card-content">{children}</div>;
};
