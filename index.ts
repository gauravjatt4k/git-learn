import React from "react";
import { renderToReadableStream } from "react-dom/server";

function Component(props: { message: string }) {
  return (
    <body>
      <h1>{props.message}</h1>
    </body>
  );
}

const stream = await renderToReadableStream(
  <Component message="Hello from server!" />,
);

Bun.serve({
  async fetch() {
    const stream = await renderToReadableStream(
      <Component message="Hello from server!" />,
    );
    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  },
});

const user = "gaurav";

console.log(user);

const user = "gaurav";

console.log(user);
