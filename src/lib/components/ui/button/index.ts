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

export {
  Root,
  type Props,
  //
  Root as Button,
  type Props as ButtonProps,
};
