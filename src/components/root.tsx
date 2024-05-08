import * as React from "react";
import * as styles from "../styles/index.js";
import {} from "../utils/index.js";
import * as pages from "./pages/index.js";

export function Root() {
  return (
    <main className={styles.variables}>
      <pages.Landing></pages.Landing>
    </main>
  );
}
