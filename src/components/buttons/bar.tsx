import { css } from "@emotion/css";
import * as React from "react";

const className = css`
  display: flex;
  justify-content: space-around;
`;

interface Properties {}

export function Bar(properties: React.PropsWithChildren<Properties>) {
  return <div className={className}>{properties.children}</div>;
}
