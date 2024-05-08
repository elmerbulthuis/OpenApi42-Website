import { css } from "@emotion/css";
import * as React from "react";

const outerClassName = css`
  font-family: var(--default-font-family);
  font-size: var(--default-font-size);

  color: var(--default-color);

  background-color: var(--alternative-background-color);
`;

const innerClassName = css`
  min-width: var(--minimum-content-width);
  max-width: var(--maximum-content-width);

  padding: var(--content-padding);
  margin: 0 auto;
`;

interface Properties {}

export function Footer(properties: React.PropsWithChildren<Properties>) {
  return (
    <section className={outerClassName}>
      <div className={innerClassName}>{properties.children}</div>
    </section>
  );
}
