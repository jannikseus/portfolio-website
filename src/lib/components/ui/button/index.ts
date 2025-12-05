import type { Button as ButtonPrimitive } from "bits-ui";
import Root from "./button.svelte";

export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
export type ButtonSize = "default" | "sm" | "lg" | "icon";

type Props = ButtonPrimitive.RootProps & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type Events = ButtonPrimitive.RootEvents;

export {
  Root,
  type Props,
  type Events,
  //
  Root as Button,
  type Props as ButtonProps,
  type Events as ButtonEvents,
};
