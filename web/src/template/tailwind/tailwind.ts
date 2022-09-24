// "base" must comes before "typography"
import * as base from "./base.module.css";
import * as typography from "./typography.module.css";

export const tailwindTemplate = `${base.container} ${typography.container}`;
