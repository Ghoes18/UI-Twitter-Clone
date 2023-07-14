import { Sparkle } from "phosphor-react";

import "./Header.css";

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  return (
    <div className="timeline-header">
      <h1>{props.title}</h1>
      <Sparkle />
    </div>
  );
}
