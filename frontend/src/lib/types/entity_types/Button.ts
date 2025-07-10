export interface Button {
  label: string;
  url: string;
  variant?:
    | "filled"
    | "light"
    | "outline"
    | "transparent"
    | "white"
    | "subtle"
    | "default"
    | "gradient";
  color?: string;
  size?: "sm" | "md" | "lg";
  target?: "_self" | "_blank";
}
