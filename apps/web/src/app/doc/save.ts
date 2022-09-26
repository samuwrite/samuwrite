import { getHost } from "../host/get";
import { postMacMessage } from "../host/mac";
import { DocHandleMac, DocHandleWeb } from "./type";

const saveMac = async (
  handle: DocHandleMac,
  content: string
): Promise<void> => {
  const { path } = handle;
  await postMacMessage("saveFile", { path, content });
};

const saveWeb = async (
  handle: DocHandleWeb,
  content: string
): Promise<void> => {
  const writable = await handle.handle.createWritable();
  await writable.write(content);
  await writable.close();
};

export const saveDoc = async (
  handle: DocHandleMac | DocHandleWeb,
  content: string
): Promise<void> => {
  switch (getHost()) {
    case "mac":
      if (handle.type === "mac") return saveMac(handle, content);
      throw Error(`Host is "mac" but handle is "${handle.type}"`);
    case "web":
      if (handle.type === "web") return saveWeb(handle, content);
      throw Error(`Host is "web" but handle is "${handle.type}"`);
  }
};
