// lib/directus.ts
import { createDirectus, rest, readItems } from "@directus/sdk";
import type { Schema } from "./types/DirectusTypes";

export const directus = createDirectus<Schema>("https://api.example.com").with(
  rest(),
);

export const getPageBySlug = async (slug: string) => {
  const res = await directus.request(
    readItems("pages", {
      filter: { slug: { _eq: slug } },
      fields: [
        "id",
        "slug",
        "title",
        {
          blocks: ["id", "type", "title", "subtitle", "content", "url", "alt"],
        },
      ],
      limit: 1,
    }),
  );

  return res[0] ?? null;
};

export const getAllPageSlugs = async () => {
  const res = await directus.request(
    readItems("pages", {
      fields: ["slug"],
    }),
  );

  return res.map((page) => page.slug);
};
