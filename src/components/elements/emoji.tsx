import { css } from "@emotion/css";
import * as React from "react";

const className = css`
  font-family: "Noto Color Emoji", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

interface Properties {}

export function Emoji(properties: React.PropsWithChildren<Properties>) {
  return <span className={className}>{properties.children}</span>;
}
