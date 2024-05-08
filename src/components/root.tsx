import { css, cx } from "@emotion/css";
import * as React from "react";
import * as pages from "./pages/index.js";

export const className = cx([
  css`
    --background-color: #111111;
    --alternative-background-color: #222222;
    --text-color: #ffffff;

    --brand1-color: #ec003d;
    --brand2-color: #c1003d;
    --brand3-color: #a2003d;
    --brand4-color: #87003d;
    --brand5-color: #71003d;

    --default-font-family: sans-serif;

    --default-font-size: 21px;

    --minimum-content-width: 600px;
    --maximum-content-width: 900px;
    --content-padding: 50px;

    --button-padding-width: 20px;
    --button-padding-height: 10px;
    --button-border-radius: 10px;

    --content-spacing: 20px;
  `,
  css`
    padding-top: calc(var(--content-padding) * 2 + var(--default-font-size));
  `,
]);

export function Root() {
  return (
    <main className={className}>
      <pages.Landing></pages.Landing>
    </main>
  );
}
