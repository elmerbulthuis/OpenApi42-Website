#!/usr/bin/env node

import cp from "child_process";
import path from "path";

const dirname = import.meta.dirname;
const projectRoot = path.resolve(dirname, "..");

const options = { shell: true, stdio: "inherit", env: process.env, cwd: projectRoot };

cp.execFileSync("tsc", [], options);
cp.execFileSync("rollup", ["--config", path.resolve(projectRoot, "rollup.config.js")], options);
