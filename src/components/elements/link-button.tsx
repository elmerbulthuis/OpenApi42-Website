import { css } from "@emotion/css";
import * as React from "react";

const className = css`
  cursor: pointer;
  text-decoration: none;

  display: inline-block;

  color: var(--default-color);
  background-color: var(--brand1-color);
  &:hover {
    background-color: var(--brand1-color);
  }

  padding: var(--button-padding-height) var(--button-padding-width);
  border-radius: var(--button-border-radius);
`;

interface Properties {
  href: string;
}

export function LinkButton(properties: React.PropsWithChildren<Properties>) {
  return (
    <a className={className} href={properties.href}>
      {properties.children}
    </a>
  );
}
