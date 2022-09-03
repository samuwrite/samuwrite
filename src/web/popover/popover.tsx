import * as Radix from "@radix-ui/react-popover";
import { animation } from "../animation/animation";
import { Card } from "../card/card";
import { patch } from "../utils/patch";
import * as s from "./popover.module.css";
import "./popover.css";

const Content = patch(Radix.Content, {
  className: [s.content, Card.glass, animation.flip].join(" "),
  sideOffset: 12,
  collisionPadding: 12,
});

export const Popover = {
  Content,
  Root: Radix.Root,
  Trigger: Radix.Trigger,
  Portal: Radix.Portal,
};
