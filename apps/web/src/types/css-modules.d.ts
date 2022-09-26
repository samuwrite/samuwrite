// TypeScript CSS Modules plugin is problematic
// https://github.com/mrmckeb/typescript-plugin-css-modules/issues/151
declare module "*.css";
declare module "*.module.css";
declare module "*.module.scss";
