import { DropdownMenu as Radix } from "@samuwrite/radix";
import { animation } from "../animation/animation";
import { Card } from "../card/card";
import { outline } from "../outline/outline";
import { patch } from "../utils/patch";
import * as s from "./dropdown.module.css";

export const Dropdown = {
  Content: patch(Radix.Content, {
    className: [s.content, Card.glass, animation.flip].join(" "),
    sideOffset: 12,
    collisionPadding: 12,
  }),
  Root: Radix.Root,
  Trigger: Radix.Trigger,
  Portal: Radix.Portal,
  Separator: patch(Radix.Separator, {
    className: s.separator,
  }),
  Item: patch(Radix.Item, {
    className: [s.item, outline.none].join(" "),
  }),
};
