#!/usr/bin/env node

import path from "path";

const dirname = import.meta.dirname;
const projectRoot = path.resolve(dirname, "..");

fs.rmSync(path.resolve(projectRoot, "transpiled"), { recursive: true, force: true });
fs.rmSync(path.resolve(projectRoot, "typed"), { recursive: true, force: true });
fs.rmSync(path.resolve(projectRoot, "bundled"), { recursive: true, force: true });
fs.rmSync(path.resolve(projectRoot, "minified"), { recursive: true, force: true });
