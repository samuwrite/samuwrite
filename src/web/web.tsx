import { createRoot } from "react-dom/client";

const Main = (): JSX.Element => <div>ahihi</div>;

const container = document.getElementById("root");
if (container === null) throw Error("`#root` is null");
const root = createRoot(container);
root.render(<Main />);
