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
import * as api from "reverse-api";

const server = new api.Server();

server.registerReverseOperation(
  async (incomingRequest) => {
    const originalText = await incomingRequest.value();
    
    const characters = [...originalText];
    characters.reverse();
    const reversedText = characters.join("");
    
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
import * as api from "reverse-api";
            
const api.defaultClientConfiguration.baseUrl =
  new URL("http://localhost:8080");
const result = await api.reverse(
  {
    contentType: "text/plain",
    value: () => "123",
  },
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
          <LinkButton href="">Guides</LinkButton>
          <LinkButton href="https://github.com/LuvDaSun/OpenApi42-Examples">Examples</LinkButton>
        </Justify>
      </Section>
      <Section>
        <h1>Sponsors</h1>
        <p>We love our sponsors! And we would love you to be a sponsor too!</p>
        <p>
          Imperdiet dui accumsan sit amet nulla facilisi. Nulla malesuada pellentesque elit eget
          gravida cum. Faucibus purus in massa tempor nec feugiat. Placerat vestibulum lectus mauris
          ultrices eros in cursus turpis massa. Cras fermentum odio eu feugiat. Et ligula
          ullamcorper malesuada proin. Feugiat nibh sed pulvinar proin gravida hendrerit. Ac tortor
          vitae purus faucibus ornare suspendisse sed. Pulvinar pellentesque habitant morbi
          tristique. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Sed id
          semper risus in hendrerit gravida rutrum. Vitae purus faucibus ornare suspendisse sed.
          Odio morbi quis commodo odio aenean sed. Urna molestie at elementum eu facilisis sed.
          Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. At auctor urna
          nunc id cursus metus aliquam eleifend. Elementum sagittis vitae et leo duis ut diam quam
          nulla. Integer enim neque volutpat ac tincidunt vitae semper. Porttitor lacus luctus
          accumsan tortor posuere ac ut.
        </p>
        <Justify>
          <SponsorButton href="https://www.nationaalwatersportdiploma.nl/" image="nawadi.svg" />
        </Justify>
      </Section>
      <Section alternative>
        <h1>Use cases</h1>
        <p>
          Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Vulputate enim
          nulla aliquet porttitor lacus luctus accumsan tortor. Sed ullamcorper morbi tincidunt
          ornare massa eget egestas. Pharetra massa massa ultricies mi quis hendrerit dolor.
          Pharetra pharetra massa massa ultricies mi quis. Bibendum neque egestas congue quisque
          egestas diam. Nullam eget felis eget nunc. Lectus proin nibh nisl condimentum id
          venenatis. Purus sit amet volutpat consequat mauris nunc. Dolor sed viverra ipsum nunc
          aliquet bibendum enim facilisis gravida.
        </p>
      </Section>
      <Section>
        <h1>Community</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris pharetra et ultrices
          neque. Mauris cursus mattis molestie a iaculis at erat. Sed elementum tempus egestas sed
          sed. Quam elementum pulvinar etiam non quam. Elit duis tristique sollicitudin nibh sit
          amet commodo. Massa massa ultricies mi quis. Imperdiet massa tincidunt nunc pulvinar
          sapien. Non consectetur a erat nam at lectus urna. At tempor commodo ullamcorper a lacus
          vestibulum sed arcu. Egestas quis ipsum suspendisse ultrices. Erat nam at lectus urna duis
          convallis convallis. Erat imperdiet sed euismod nisi porta lorem mollis. Eros in cursus
          turpis massa. Mollis aliquam ut porttitor leo. Quam adipiscing vitae proin sagittis nisl
          rhoncus. Feugiat in fermentum posuere urna nec tincidunt. Donec ac odio tempor orci
          dapibus ultrices in iaculis. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien
          et ligula.
        </p>
        <p>
          Mattis nunc sed blandit libero volutpat. Enim nulla aliquet porttitor lacus. In hendrerit
          gravida rutrum quisque. Nec nam aliquam sem et tortor consequat id. Fermentum leo vel orci
          porta non. Feugiat nibh sed pulvinar proin gravida. Sed egestas egestas fringilla
          phasellus faucibus scelerisque eleifend donec pretium. Mi bibendum neque egestas congue
          quisque egestas diam in. Luctus accumsan tortor posuere ac ut. Eget magna fermentum
          iaculis eu non diam phasellus. Eleifend quam adipiscing vitae proin sagittis nisl. Diam
          volutpat commodo sed egestas egestas fringilla phasellus. Odio ut enim blandit volutpat
          maecenas volutpat blandit. Mollis nunc sed id semper risus in hendrerit gravida. Nibh nisl
          condimentum id venenatis a condimentum vitae sapien pellentesque.
        </p>
        <p>
          Elementum curabitur vitae nunc sed velit dignissim sodales. Tortor vitae purus faucibus
          ornare suspendisse sed. Vitae nunc sed velit dignissim sodales ut eu. Condimentum vitae
          sapien pellentesque habitant morbi tristique senectus. Volutpat consequat mauris nunc
          congue. Mattis molestie a iaculis at erat pellentesque. Vel quam elementum pulvinar etiam
          non quam lacus suspendisse. Aliquet sagittis id consectetur purus ut faucibus pulvinar
          elementum integer. Sagittis purus sit amet volutpat consequat. Purus non enim praesent
          elementum facilisis. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh.
          Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Ut faucibus
          pulvinar elementum integer enim neque.
        </p>
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
