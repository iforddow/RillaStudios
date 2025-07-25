import Link from "next/link";
import classes from "../css/Header.module.css";
import HeaderLinkWithSubMenu from "./HeaderLinkWithSubMenu";
import type { HeaderLink } from "../types/HeaderLink";

export default function HeaderLink({
  headerLink,
}: {
  headerLink: HeaderLink;
}) {
  if (headerLink.subMenu) {
    return <HeaderLinkWithSubMenu headerLink={headerLink} submenu={headerLink.subMenu} />;
  }

  return (
    <Link href={headerLink.href} className={classes.link}>
      <span>{headerLink.label}</span>
    </Link>
  );
}
