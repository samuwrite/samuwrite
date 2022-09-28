import { getHost } from "~src/utils/host/get";
import { postMacMessage } from "~src/utils/host/mac";
import { Doc } from "./type";

const saveAsMac = async (content: string): Promise<Doc> => {
  const { path } = await postMacMessage("saveFileAs", { content });
  const name = path.split("/").at(-1);
  if (name === undefined) throw Error(`Cannot get name from path: "${path}"`);
  const doc: Doc = { content, name, handle: { type: "mac", path } };
  return doc;
};

const saveAsWeb = async (content: string): Promise<Doc | null> => {
  // Check for browser support
  if (window.showSaveFilePicker === undefined) {
    const msg = [
      "Your browser does not allow Samuwrite to save files.",
      "Please switch to another browser or use the Mac app of Samuwrite.",
    ].join(" ");
    throw Error(msg);
  }

  let handle: FileSystemFileHandle;
  try {
    handle = await window.showSaveFilePicker({
      excludeAcceptAllOption: false,
      suggestedName: "Untitled",
      types: [{ description: "Markdown", accept: { "text/plain": [".md"] } }],
    });
  } catch (error: unknown) {
    // User clicks "Cancel" on the file picker
    if (error instanceof DOMException && error.code === error.ABORT_ERR)
      return null;
    throw error;
  }

  // Write content
  const writable = await handle.createWritable();
  await writable.write(content);
  await writable.close();

  const name = handle.name;
  const doc: Doc = { content, name, handle: { type: "web", handle } };
  return doc;
};

/**
 * "null" means safely ignored (e.g. user cancels the request)
 */
export const saveDocAs = async (content: string): Promise<Doc | null> => {
  switch (getHost()) {
    case "mac":
      return saveAsMac(content);
    case "web":
      return saveAsWeb(content);
  }
};
