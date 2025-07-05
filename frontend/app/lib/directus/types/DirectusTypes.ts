// lib/types/DirectusTypes.ts
export interface PageBlock {
  id: string;
  type: "text" | "hero" | "image";
  title?: string;
  subtitle?: string;
  content?: string;
  url?: string;
  alt?: string;
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  blocks: PageBlock[];
}

export type Schema = {
  pages: Page[];
  page_blocks: PageBlock[];
};
