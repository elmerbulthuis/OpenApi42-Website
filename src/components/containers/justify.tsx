import { css } from "@emotion/css";
import * as React from "react";

const className = css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  gap: var(--content-spacing);
`;

interface Properties {}

export function Justify(properties: React.PropsWithChildren<Properties>) {
  return <div className={className}>{properties.children}</div>;
}
