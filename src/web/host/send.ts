interface ErrorRes {
  ok: false;
  message: string;
}

interface SuccessRes {
  ok: true;
}

namespace OpenFile {
  export type Name = "openFile";
  export interface Req {}
  export interface Res extends SuccessRes {
    path: string;
    content: string;
  }
}

namespace SaveFile {
  export type Name = "saveFile";
  export interface Req {
    path: string;
    content: string;
  }
  export interface Res extends SuccessRes {}
}

namespace OpenUrl {
  export type Name = "openUrl";
  export interface Req {
    url: string;
  }
  export interface Res extends SuccessRes {}
}

type Name = OpenUrl.Name | OpenFile.Name | SaveFile.Name;

type Req<T extends Name> = T extends OpenFile.Name
  ? OpenFile.Req
  : T extends SaveFile.Name
  ? SaveFile.Req
  : T extends OpenUrl.Name
  ? OpenUrl.Req
  : never;

type Res<T extends Name> = T extends OpenFile.Name
  ? OpenFile.Res
  : T extends SaveFile.Name
  ? SaveFile.Res
  : T extends OpenUrl.Name
  ? OpenUrl.Res
  : unknown;

export const sendHostMessage = <T extends Name>(type: T, req: Req<T>): void => {
  const handler = (window as any).webkit.messageHandlers[type];
  const foo = handler.postMessage("test");
  console.log({ foo });
  // console.log({ response });
  // if (response.ok === false) throw Error(response.message);
  // return response;
};
