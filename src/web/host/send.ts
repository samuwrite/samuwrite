namespace OpenFile {
  export type Name = "openFile";
  export interface Req {}
  export interface Res {
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
  export interface Res {}
}

namespace SaveFileAs {
  export type Name = "saveFileAs";
  export interface Req {
    content: string;
  }
  export interface Res {
    path: string;
  }
}

namespace OpenUrl {
  export type Name = "openUrl";
  export interface Req {
    url: string;
  }
  export interface Res {}
}

type Name = OpenUrl.Name | OpenFile.Name | SaveFile.Name | SaveFileAs.Name;

type Req<T extends Name> = T extends OpenFile.Name
  ? OpenFile.Req
  : T extends SaveFile.Name
  ? SaveFile.Req
  : T extends SaveFileAs.Name
  ? SaveFileAs.Req
  : T extends OpenUrl.Name
  ? OpenUrl.Req
  : never;

type Res<T extends Name> = T extends OpenFile.Name
  ? OpenFile.Res
  : T extends SaveFile.Name
  ? SaveFile.Res
  : T extends SaveFileAs.Name
  ? SaveFileAs.Res
  : T extends OpenUrl.Name
  ? OpenUrl.Res
  : unknown;

export const sendHostMessage = async <T extends Name>(
  type: T,
  req: Req<T>
): Promise<Res<T>> => {
  const handler = (window as any).webkit.messageHandlers[type];
  const response = await handler.postMessage(req);
  return response;
};
