import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import path from "path";
import { defineConfig } from "rollup";

export default defineConfig([
  {
    input: path.resolve("transpiled", "client.js"),
    output: {
      file: path.resolve("bundled", "client.js"),
      format: "iife",
      sourcemap: true,
      name: "client",
    },
    context: "window",
    plugins: [
      commonjs(),
      nodeResolve({
        browser: true,
        mainFields: ["browser"],
      }),
      replace({
        values: {
          "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        },
        preventAssignment: true,
      }),
    ],
  },
]);
