import { getHost } from "../host/get";
import { postMacMessage } from "../host/mac";
import { Doc } from "./type";

const openMac = async (): Promise<Doc> => {
  const { content, path } = await postMacMessage("openFile", {});
  const name = path.split("/").at(-1);
  if (name === undefined) throw Error(`Cannot get name from path: "${path}"`);
  const doc: Doc = { content, name, handle: { type: "mac", path } };
  return doc;
};

const openWeb = async (): Promise<Doc | null> => {
  // Check for browser support
  if (window.showOpenFilePicker === undefined) {
    const msg = [
      "Your browser does not allow Samuwrite to open local files.",
      "Please use another browser or the Mac app of Samuwrite.",
    ].join(" ");
    throw Error(msg);
  }

  let handle: FileSystemFileHandle;

  try {
    const accept = { "text/plain": [".md", ".mdx", ".txt"] };
    const result = await window.showOpenFilePicker({
      excludeAcceptAllOption: false,
      multiple: false,
      types: [{ description: "Markdown & Text", accept }],
    });
    handle = result[0];
  } catch (error: unknown) {
    // User clicks "Cancel" on the file picker
    if (error instanceof DOMException && error.code === error.ABORT_ERR)
      return null;
    throw error;
  }

  const file = await handle.getFile();
  const doc: Doc = {
    content: await file.text(),
    name: file.name,
    handle: { type: "web", handle },
  };
  return doc;
};

/**
 * "null" means safely ignored (e.g. user cancels the request)
 */
export const openDoc = async (): Promise<Doc | null> => {
  switch (getHost()) {
    case "mac":
      return openMac();
    case "web":
      return openWeb();
  }
};
