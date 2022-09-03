import * as Radix from "@radix-ui/react-scroll-area";
import { patch } from "../utils/patch";
import * as s from "./scroll.module.css";

export const Scroll = {
  Root: patch(Radix.Root, { className: s.root }),
  Viewport: patch(Radix.Viewport, { className: s.viewport }),
  Track: patch(Radix.Scrollbar, { className: s.track }),
  Thumb: patch(Radix.Thumb, { className: s.thumb }),
};
