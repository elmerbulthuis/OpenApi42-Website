import * as React from "react";
import * as sections from "../../components/sections/index.js";

export function Landing() {
  return (
    <>
      <sections.Header></sections.Header>
      <sections.CodeVisual></sections.CodeVisual>
      <sections.Actions></sections.Actions>
      <sections.Sponsors></sections.Sponsors>
      <sections.Showcases></sections.Showcases>
      <sections.Community></sections.Community>
      <sections.Footer></sections.Footer>
    </>
  );
}
