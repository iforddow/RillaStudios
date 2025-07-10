import { SubMenu } from "./SubMenu";

export interface HeaderLink {
  href: string;
  label: string;
  subMenu?: SubMenu;
}
