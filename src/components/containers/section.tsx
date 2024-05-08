import { css, cx } from "@emotion/css";
import * as React from "react";

const regularOuterClassName = css`
  font-size: var(--default-font-size);

  color: var(--default-color);
`;

const alternativeOuterClassName = cx([
  regularOuterClassName,
  css`
    background-color: var(--alternative-background-color);
  `,
]);

const innerClassName = css`
  min-width: var(--minimum-content-width);
  max-width: var(--maximum-content-width);

  padding: var(--content-padding);
  margin: 0 auto;
`;

interface Properties {
  alternative?: boolean;
}

export function Section(properties: React.PropsWithChildren<Properties>) {
  const alternative = properties.alternative ?? false;
  const outerClassName = alternative ? alternativeOuterClassName : regularOuterClassName;

  return (
    <section className={outerClassName}>
      <div className={innerClassName}>{properties.children}</div>
    </section>
  );
}
