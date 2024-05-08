import { css } from "@emotion/css";
import * as React from "react";

const className = css`
  display: inline-block;

  font-family: var(--default-font-family);
  font-size: var(--default-font-size);

  color: var(--default-color);
  background-color: var(--brand5-color);
  &:hover {
    background-color: var(--brand1-color);
  }

  padding: var(--button-padding-height) var(--button-padding-width);
  margin: calc(var(--button-padding-height) * -1) 0;
  border-radius: var(--button-border-radius);

  text-decoration: none;
`;

export interface ActionProperties {
  href: string;
}

export function Action(properties: React.PropsWithChildren<ActionProperties>) {
  return (
    <a className={className} href={properties.href}>
      {properties.children}
    </a>
  );
}
