# Cross-Platform Communication

This page describes how the Mac app communicates with the web app

## Web to Mac

The web app sends data to the mac app via the
[WKScriptMessageHandlerWithReply](https://developer.apple.com/documentation/webkit/wkscriptmessagehandlerwithreply)
interface and wait for a reply.
See `src/web/host/send.ts` for the list of current handlers.
Each handler defines its name, request body, and response in a namespace.

For example, this namespace:

```ts
namespace Foo {
  export type Name = "foo";
  export interface Req {
    bar: number;
  }
  export interface Res extends SuccessRes {
    baz: string;
  }
}
```

is for the following communication:

```ts
const handler = (window as any).webkit.messageHandlers["foo"];
const response = await handler.postMessage({ bar: 1 });
console.log(response); // { baz: "a", ok: true }
```

When there is an error, the Mac app should still response the following message:

```ts
interface ErrorResponse {
  ok: false;
  message: "error description";
}
```
