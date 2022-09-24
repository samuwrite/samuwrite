// This is also needed to make TypeScript thinks that this file is a module
// https://stackoverflow.com/questions/57132428
import * as monaco from "monaco-editor";

declare global {
  interface Window {
    MonacoEnvironment: monaco.Environment;
  }
}
