// "base" must comes before "typography"
import base from "./base.module.css";
import typography from "./typography.module.css";

export const tailwindTemplate = `${base.container} ${typography.container}`;
