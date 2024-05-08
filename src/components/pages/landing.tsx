import * as React from "react";
import { Code, Footer, Header, Justify, Section, Tabs } from "../containers/index.js";
import { Emoji, LinkButton, SponsorButton } from "../elements/index.js";

export function Landing() {
  return (
    <>
      <Header>OpenApi42</Header>
      <Section alternative>
        <p>
          OpenApi42 will generate correct and performant client and server code in many (currently
          TypeScript is supported) languages. Observability, streaming of events, alternative wire
          protocols are all supported.
        </p>

        <Tabs labels={["openapi.yaml", "server.ts", "client.ts"]}>
          <Code
            type="yaml"
            code={`
openapi: 3.0.2

info:
  title: Reverse API
  description: |-
    This API is able to take a string and reverse it. It
    has only one endpoint! Use this API to get started
    with OpenApi42.
  version: 0.1.0

paths:
  /reverse:
    post:
      operationId: reverse
      description: >
        Reads a string from the request body and returns
        the reversed value in the body of the response.
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
const server = new api.Server();

server.registerReverseOperation(
  async (incomingRequest) => {
    // read input text from body
    const originalText = await incomingRequest.value();
    
    // reverse input
    const characters = [...originalText];
    characters.reverse();
    const reversedText = characters.join("");
    
    // return the result
    return {
      status: 200,
      contentType: "text/plain",
      value: () => reversedText,
    };
  }
);

await api.lib.listen(server, { port: 8080 });
            `}
          ></Code>
          <Code
            type="typescript"
            code={`
const api.defaultClientConfiguration.baseUrl =
  new URL("http://localhost:8080");
const result = await api.reverse(
  {
    contentType: "text/plain",
    value: () => "123",
  },
);
const resultValue = await result.value();

console.log(resultValue); // prints 123
`}
          ></Code>
        </Tabs>
      </Section>
      <Section>
        <Justify>
          <LinkButton href="">Quick start</LinkButton>
          <LinkButton href="">Guides</LinkButton>
          <LinkButton href="https://github.com/LuvDaSun/OpenApi42-Examples">Examples</LinkButton>
        </Justify>
      </Section>
      <Section>
        <h1>Sponsors</h1>
        <p>We love our sponsors! And we would love you to be a sponsor too!</p>
        <p>
          OpenApi42 completely dependent sponsorship. If you are using and enjoying OpenApi42, then
          consider making a donation.
        </p>
        <p>Sponsors get exclusive benefits!</p>
        <ul>
          <li>Access to our private discord server</li>
          <li>Support</li>
          <li>Issue priority</li>
          <li>Discount on consulting services</li>
        </ul>
        <p>The following amazing organizations are already supporting development of OpenApi42.</p>
        <Justify>
          <SponsorButton href="https://www.nationaalwatersportdiploma.nl/" image="nawadi.svg" />
        </Justify>
      </Section>
      <Section alternative>
        <h1>Use cases</h1>
        <p>OpenApi42 can help you solve a variety of problems. Here are some examples!</p>

        <h2>Browser to server communication</h2>
        <p>bla123</p>

        <h2>Inter service communication</h2>
        <p>bla123</p>

        <h2>Building a public API</h2>
        <p>bla123</p>

        <h2>Migrating to a different programming language</h2>
        <p>bla123</p>

        <h2>Consuming an API</h2>
        <p>bla123</p>

        <h2>Testing an API</h2>
        <p>bla123</p>
      </Section>
      <Section>
        <h1>Community</h1>
        <ul>
          <li>
            <a href="">Discord</a>
          </li>
          <li>
            <a href="">GitHub</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
        </ul>
      </Section>
      <Footer>
        <Justify>
          <p>
            Made with <Emoji>❤️</Emoji> in Scheveningen by LuvDaSun B.V.
          </p>
        </Justify>
      </Footer>
    </>
  );
}
