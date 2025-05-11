import { LayoutItem } from "./componentInfo";

export interface PageConfig {
  path: string;
  layout: LayoutItem[];
  seo?: { title?: string; description?: string };
}
