import { css } from "@emotion/css";
import hljs from "highlight.js";
import * as React from "react";

const codeClassName = css`
  display: block;
  white-space: pre;
  padding: var(--content-spacing);
`;

interface Properties {
  type: "yaml" | "typescript";
  code: string;
}

export function Code(properties: Properties) {
  const code = hljs.highlight(properties.code, { language: properties.type });
  return <code className={codeClassName} dangerouslySetInnerHTML={{ __html: code.value }}></code>;
}
