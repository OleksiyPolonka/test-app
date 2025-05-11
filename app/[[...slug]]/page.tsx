import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@everywiner-com/features";
import { Button, Input } from "@everywiner-com/ui-kit";

import { matchPath } from "./utils";
import Stub from "../../components/Stub";
import fullConfig from "../../siteConfig.json";

import type { Params } from "./types";
import type { PageConfig } from "@/types/components/layoutInfo";

import "@everywiner-com/header/dist/header.css";

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug = [] } = await params;
  const matched = fullConfig.routes.find(
    (route) => matchPath(slug, route.path).matched,
  );

  return {
    title: matched?.seo?.title || "Untitled",
    description: matched?.seo?.description,
  };
}
export default async function DynamicPage({ params }: { params: Params }) {
  const { slug = [] } = await params;

  const matched = (fullConfig.routes as PageConfig[]).find(
    (route) => matchPath(slug, route.path).matched,
  );

  if (!matched) return notFound();

  return (
    <div>
      {matched.layout.map((section, idx) => {
        switch (section.type) {
          case "Header":
            return <Header label="header" key={idx} />;
          case "Stub":
            return <Stub key={idx} />;
          case "Button":
            return <Button key={idx} label="Open alert" />;
          case "Input":
            return <Input key={idx} />;
          case "Link":
            return (
              <Link key={idx} href="/about">
                About
              </Link>
            );

          default:
            return <div key={idx}>Unknown component: {section.type}</div>;
        }
      })}
    </div>
  );
}
