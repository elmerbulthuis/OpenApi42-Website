import { css, cx } from "@emotion/css";
import * as React from "react";

const labelsBaseClassName = css`
  display: flex;
  flex-wrap: nowrap;
  gap: var(--content-spacing);

  & > * {
    cursor: pointer;
    text-decoration: none;

    display: inline-block;

    color: var(--default-color);
    background-color: var(--brand5-color);
    &:hover {
      background-color: var(--brand1-color);
    }

    padding: var(--button-padding-height) var(--button-padding-width);
    border-radius: var(--button-border-radius) var(--button-border-radius) 0 0;
    border: 1px solid var(--text-color);
    margin-bottom: -1px;
  }
`;

const tabsBaseClassName = css`
  & > * {
    display: none;
    border: 1px solid var(--text-color);
    background: var(--background-color);
  }
`;

interface Properties {
  labels: string[];
}

export function Tabs(properties: React.PropsWithChildren<Properties>) {
  const { labels } = properties;

  const [activeIndex, setActiveIndex] = React.useState(0);
  const labelsClassName = cx(
    labelsBaseClassName,
    css`
      & > *:nth-child(${activeIndex + 1}) {
        background-color: var(--background-color);
        border-bottom: 1px solid var(--background-color);
      }
    `
  );
  const tabsClassName = cx(
    tabsBaseClassName,
    css`
      & > *:nth-child(${activeIndex + 1}) {
        display: block;
      }
    `
  );

  return (
    <div>
      <div className={labelsClassName}>
        {labels.map((label, index) => (
          <a onClick={() => setActiveIndex(index)}>{label}</a>
        ))}
      </div>
      <div className={tabsClassName}>{properties.children}</div>
    </div>
  );
}
