import { HeaderLink } from "./types/HeaderLink";

export const MENU_ITEMS: HeaderLink[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Services",
        href: "/services",
        subMenu: {
            title: "Our Services",
            items: [
                { label: "Web Development", href: "/services/web-development" },
                { label: "Mobile Development", href: "/services/mobile-development" },
            ],
        },
    },
    {
        label: "Contact",
        href: "/contact",
    },
    {
        label: "Blog",
        href: "/blog",
    },
]