import { Root, createRoot } from "react-dom/client";
import * as pages from "./components/pages/index.js";

export function mountRoot(rootElement: HTMLElement) {
  const root = createRoot(rootElement);
  root.render(pages.Landing());
  return root;
}

export function unmountRoot(root: Root) {
  root.unmount();
}
