import { createRoot } from "react-dom/client";
import { AppRoot } from "./app/root/root";

const container = document.getElementById("root");
if (container === null) throw Error("`#root` is null");
const root = createRoot(container);
root.render(<AppRoot />);
