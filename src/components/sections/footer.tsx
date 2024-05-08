import { css } from "@emotion/css";
import * as React from "react";
import { colors, sizes } from "../../constants/index.js";

const className = css`
  font-size: ${sizes.fontSize};
  color: ${colors.textColor};
  background-color: ${colors.alternativeBackground};
`;

export function Footer() {
  return <footer className={className}>some footer</footer>;
}
