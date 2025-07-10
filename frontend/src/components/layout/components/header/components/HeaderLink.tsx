import Link from "next/link";
import classes from "../css/Header.module.css";
import { SubMenu } from "../types/SubMenu";
import HeaderLinkWithSubMenu from "./HeaderLinkWithSubMenu";

export default function HeaderLink({
  href,
  label,
  submenu,
}: {
  href: string;
  label: string;
  submenu?: SubMenu;
}) {
  if (submenu) {
    return <HeaderLinkWithSubMenu submenu={submenu} />;
  }

  return (
    <Link href={href} className={classes.link}>
      <span>{label}</span>
    </Link>
  );
}
