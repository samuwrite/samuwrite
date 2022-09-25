import { createRoot } from "react-dom/client";
import { App } from "./app/app";

const container = document.getElementById("root");
if (container === null) throw Error("`#root` is null");
const root = createRoot(container);
root.render(<App />);
