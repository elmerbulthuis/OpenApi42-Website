import * as React from "react";
import { Code, Footer, Header, Justify, Section, Tabs } from "../containers/index.js";
import { LinkButton } from "../elements/index.js";

export function Landing() {
  return (
    <>
      <Header>Header</Header>
      <Section alternative>
        <p>
          OpenApi42 will generate correct and performant client and server code in many (currently
          TypeScript is supported) languages.
        </p>

        <Tabs labels={["openapi.yaml", "server.ts", "client.ts"]}>
          <Code
            type="yaml"
            code={`
openapi: 3.0.2

info:
  title: Reverse API
  description: |-
    This API is able to take a string and reverse it. It has only one endpoint! Use this API
    to get started with OpenApi42.
  version: 0.1.0

paths:
  /reverse:
    post:
      operationId: reverse
      description: >
        Reads a string from the request body and returns the reversed value in the body of
        the response.
      requestBody:
        content:
          "text/plain": {}
      responses:
        "200":
          description: Ok
          content:
            "text/plain": {}
`}
          ></Code>
          <Code
            type="typescript"
            code={`
import * as api from "reverse-api";

const server = new api.Server();

server.registerReverseOperation(async (incomingRequest) => {
  const originalText = await incomingRequest.value();
  const characters = [...originalText];
  characters.reverse();
  const reversedText = characters.join("");
  return {
    status: 200,
    contentType: "text/plain",
    value: () => reversedText,
  };
});

await api.lib.listen(server, { port: 8080 });
            `}
          ></Code>
          <Code
            type="typescript"
            code={`
const baseUrl = new URL("http://localhost:8080");
const result = await api.reverse(
  {
    contentType: "text/plain",
    value: () => "123",
  },
  {},
  { baseUrl },
);
const resultValue = await result.value();

console.log(resultValue);
`}
          ></Code>
        </Tabs>
      </Section>
      <Section>
        <Justify>
          <LinkButton href="">Quick start</LinkButton>
          <LinkButton href="">Usage</LinkButton>
        </Justify>
      </Section>
      <Section>Sponsors</Section>
      <Section>Showcases</Section>
      <Section>Community</Section>
      <Footer>Footer</Footer>
    </>
  );
}
