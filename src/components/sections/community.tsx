import { css } from "@emotion/css";
import * as React from "react";
import { colors, sizes } from "../../constants/index.js";

const className = css`
  font-size: ${sizes.fontSize};
  color: ${colors.textColor};
`;

export function Community() {
  return <section className={className}>some community</section>;
}
