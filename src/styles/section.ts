import { css, cx } from "@emotion/css";

export const section = css`
  font-family: var(--default-font-family);
  font-size: var(--default-font-size);

  color: var(--default-color);
`;

export const alternativeSection = cx(
  section,
  css`
    background-color: var(--alternative-background-color);
  `
);

export const sectionContent = css`
  min-width: var(--minimum-content-width);
  max-width: var(--maximum-content-width);

  padding: var(--content-padding);
  margin: 0 auto;
`;
