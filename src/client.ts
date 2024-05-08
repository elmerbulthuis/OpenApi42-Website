import { Root, createRoot } from "react-dom/client";
import * as components from "./components/index.js";

export function mountRoot(rootElement: HTMLElement) {
  const root = createRoot(rootElement);
  root.render(components.Root());
  return root;
}

export function unmountRoot(root: Root) {
  root.unmount();
}
