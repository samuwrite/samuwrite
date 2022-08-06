import * as monaco from "monaco-editor";

const done = { current: false };

export const createEditorEnv = (): void => {
  if (done.current === true) return;

  // https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md#using-parcel
  window.MonacoEnvironment = {
    getWorkerUrl: function (_moduleId, _label) {
      return "/editor.worker.js";
    },
  };

  // https://github.com/microsoft/monaco-editor/issues/392
  document.fonts.ready.then(() => {
    monaco.editor.remeasureFonts();
  });

  done.current = true;
};
