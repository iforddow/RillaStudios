import { SubMenuItem } from "./SubMenuItem";

export interface SubMenu {
  title: string;
  viewAllHref?: string;
  items: SubMenuItem[];
  useHrefOnSubmenuLink?: boolean;
  href?: string;
}
