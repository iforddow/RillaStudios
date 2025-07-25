import { HeaderLink } from "./types/HeaderLink";
import { SubMenuItem } from "./types/SubMenuItem";
import { R2_BASE_URL } from "@/config/R2Config";

async function fetchServiceLinks(): Promise<SubMenuItem[]> {
  const API_URL = "https://pb.rillastudios.ca/api/collections/services/records";

  try {

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.statusText}`);
    }

    const data = await response.json();

    return data.items.map((service: any) => ({
      label: service.service_name,
      href: `/services/${service.id}`,
      icon: `${R2_BASE_URL}/${service.id}/${service.service_icon}` || undefined,
      description: service.service_short_description || undefined,
    }));
  } catch (error) {
    console.error("Error fetching service links:", error);
    return [];
  }
}

export async function getMenuItems(): Promise<HeaderLink[]> {
  const serviceLinks = await fetchServiceLinks();

  return [
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
        items: serviceLinks,
        viewAllHref: "/services",
      },
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];
}