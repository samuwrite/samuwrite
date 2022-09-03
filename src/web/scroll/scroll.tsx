import * as Radix from "@radix-ui/react-scroll-area";
import { patch } from "../utils/patch";
import * as s from "./scroll.module.css";

export const Scroll = {
  Root: patch(Radix.Root, s.root),
  Viewport: patch(Radix.Viewport, s.viewport),
  Track: patch(Radix.Scrollbar, s.track),
  Thumb: patch(Radix.Thumb, s.thumb),
};
