import { css } from "@emotion/css";
import * as React from "react";

const className = css`
  cursor: pointer;
  text-decoration: none;

  display: inline-block;

  padding: var(--button-padding-height) var(--button-padding-width);

  & > img {
    width: var(--sponsor-logo-width);
  }
`;

interface Properties {
  href: string;
  image: string;
}

export function SponsorButton(properties: Properties) {
  return (
    <a className={className} href={properties.href} target="_blank">
      <img src={properties.image} />
    </a>
  );
}
