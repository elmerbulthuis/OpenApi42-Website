import { css } from "@emotion/css";
import * as React from "react";
import { colors, sizes } from "../../constants/index.js";

const className = css`
  font-size: ${sizes.fontSize};
  color: ${colors.textColor};
`;

export function Showcases() {
  return <section className={className}>some showcases</section>;
}
