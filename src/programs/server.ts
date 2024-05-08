import assert from "assert";
import * as http from "http";
import Koa from "koa";
import serve from "koa-static";
import * as path from "path";
import * as yargs from "yargs";
import { projectRoot } from "../root.js";
import { waitForSignal } from "../utils/signal.js";

export function configureServerProgram(argv: yargs.Argv) {
  return argv.command(
    "server",
    "start website server",
    (yargs) =>
      yargs.option("port", {
        description: "port to listen to",
        type: "number",
        default: 8080,
      }),
    (argv) => main(argv)
  );
}

interface MainConfiguration {
  port: number;
}

async function main(configuration: MainConfiguration) {
  const { port } = configuration;

  console.info("Starting server...");

  const koaServer = new Koa();
  koaServer.use(serve(path.join(projectRoot, "minified")));
  koaServer.use(serve(path.join(projectRoot, "bundled")));
  koaServer.use(serve(path.join(projectRoot, "public")));
  koaServer.use(serve(path.join(projectRoot, "assets")));

  const httpServer = http.createServer(koaServer.callback());
  await new Promise<void>((resolve) => httpServer.listen(port, () => resolve()));
  try {
    const address = httpServer.address();
    assert(address != null);
    assert(typeof address === "object");

    console.info(`Server started at port ${address.port}`);

    await waitForSignal("SIGINT", "SIGTERM");

    console.info("Stopping server...");
  } finally {
    httpServer.closeAllConnections();

    await new Promise<void>((resolve, reject) =>
      httpServer.close((error) => (error == null ? resolve() : reject(error)))
    );
  }

  console.info("Server stopped");
}
