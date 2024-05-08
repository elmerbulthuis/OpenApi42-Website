import { css } from "@emotion/css";
import * as React from "react";
import * as sections from "../../components/sections/index.js";
import { colors } from "../../constants/index.js";

const className = css`
  color: ${colors.textColor};
`;

export function Landing() {
  return (
    <main className={className}>
      <sections.Header></sections.Header>
      <sections.CodeVisual></sections.CodeVisual>
      <sections.Actions></sections.Actions>
      <sections.Sponsors></sections.Sponsors>
      <sections.Showcases></sections.Showcases>
      <sections.Community></sections.Community>
      <sections.Footer></sections.Footer>
    </main>
  );
}
