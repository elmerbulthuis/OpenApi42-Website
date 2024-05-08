import { css } from "@emotion/css";
import * as React from "react";

const spacerClassName = css`
  height: var(--header-height);
`;

const outerClassName = css`
  position: fixed;
  top: 0;

  font-size: var(--default-font-size);

  color: var(--default-color);

  width: 100%;

  background-image: url(lds-background.svg);
  background-repeat: repeat-x;
  background-size: contain;
`;

const innerClassName = css`
  min-width: var(--minimum-content-width);
  max-width: var(--maximum-content-width);

  padding: var(--content-padding);
  margin: 0 auto;
`;

interface Properties {}

export function Header(properties: React.PropsWithChildren<Properties>) {
  const spacerElement = React.useRef<HTMLElement>(null);
  const outerElement = React.useRef<HTMLElement>(null);
  const innerElement = React.useRef<HTMLDivElement>(null);
  let animationFrame = 0;

  function updateHeight() {
    window.cancelAnimationFrame(animationFrame);

    animationFrame = window.requestAnimationFrame(() => {
      if (spacerElement.current == null) {
        return;
      }
      if (outerElement.current == null) {
        return;
      }
      if (innerElement.current == null) {
        return;
      }

      const maximumHeight = spacerElement.current.offsetHeight;
      const minimumHeight = innerElement.current.offsetHeight;
      const maybeHeight = maximumHeight - window.scrollY;

      const height = Math.min(Math.max(maybeHeight, minimumHeight), maximumHeight);
      outerElement.current.style.height = `${height}px`;
    });
  }

  React.useEffect(() => {
    updateHeight();

    window.addEventListener("scroll", updateHeight);
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("scroll", updateHeight);
      window.addEventListener("resize", updateHeight);
    };
  });

  return (
    <>
      <section ref={spacerElement} className={spacerClassName}></section>
      <header ref={outerElement} className={outerClassName}>
        <div ref={innerElement} className={innerClassName}>
          {properties.children}
        </div>
      </header>
    </>
  );
}
