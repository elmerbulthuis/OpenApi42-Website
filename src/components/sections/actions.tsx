import { css } from "@emotion/css";
import * as React from "react";
import { colors, sizes } from "../../constants/index.js";

const className = css`
  color: ${colors.textColor};
  font-size: ${sizes.fontSize};
`;

export function Actions() {
  return <section className={className}>some actions</section>;
}
