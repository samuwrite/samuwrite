import { Doc } from "../doc/type";
import { getHost } from "./get";
import { postMacMessage } from "./mac";

const openMac = async (): Promise<Doc> => {
  const { content, path } = await postMacMessage("openFile", {});
  const doc: Doc = { content, handle: { type: "mac", path } };
  return doc;
};

const openWeb = async (): Promise<Doc | null> => {
  if (window.showOpenFilePicker === undefined) {
    const msg = [
      "Your browser does not allow Samuwrite to open local files.",
      "Please switch to another browser or use the Mac app of Samuwrite.",
    ].join(" ");
    throw Error(msg);
  }

  let handle: FileSystemFileHandle;

  try {
    const accept = { "text/plain": [".md", ".mdx", ".txt"] };
    const result = await window.showOpenFilePicker({
      excludeAcceptAllOption: false,
      multiple: false,
      types: [{ description: "Text files", accept }],
    });
    handle = result[0];
  } catch (error: unknown) {
    // User clicks "Cancel" on the file picker
    if (error instanceof DOMException && error.code === error.ABORT_ERR)
      return null;
    throw error;
  }

  const file = await handle.getFile();
  const content = await file.text();
  const doc: Doc = { content, handle: { type: "web", handle } };
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
