import * as React from "react";
import * as buttons from "../buttons/index.js";
import * as containers from "../containers/index.js";

export function Landing() {
  return (
    <>
      <containers.Header>Header</containers.Header>
      <containers.Section alternative>Code</containers.Section>
      <containers.Section>
        <buttons.Bar>
          <buttons.Action href="">Quick start</buttons.Action>
          <buttons.Action href="">Usage</buttons.Action>
        </buttons.Bar>
      </containers.Section>
      <containers.Section>Sponsors</containers.Section>
      <containers.Section>Showcases</containers.Section>
      <containers.Section>Community</containers.Section>
      <containers.Footer>Footer</containers.Footer>
    </>
  );
}
