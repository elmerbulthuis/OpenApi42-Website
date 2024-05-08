import { css, cx } from "@emotion/css";
import * as React from "react";
import * as pages from "./pages/index.js";

export const className = cx(
  css`
    --background-color: #111111;
    --alternative-background-color: #222222;
    --text-color: #ffffff;

    --brand1-color: #ec003d;
    --brand2-color: #c1003d;
    --brand3-color: #a2003d;
    --brand4-color: #87003d;
    --brand5-color: #71003d;

    --default-font-size: 32px;

    --minimum-content-width: 600px;
    --maximum-content-width: 1200px;
    --content-padding: 50px;

    --button-padding-width: 20px;
    --button-padding-height: 10px;
    --button-border-radius: 10px;

    --content-spacing: 20px;

    --sponsor-logo-width: 150px;
    --header-height: calc(calc(var(--default-font-size) + calc(var(--content-padding) * 2)) * 5);
  `,
  css`
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings: "slnt" 0;
  `
);

export function Root() {
  return (
    <main className={className}>
      <pages.Landing></pages.Landing>
    </main>
  );
}
