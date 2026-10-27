import type { Metadata } from "next";

const previewOrigin = "https://codewithmujtabo.github.io/kita";

export function pageMetadata(title: string, path: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${previewOrigin}${path}` },
    openGraph: {
      type: "website",
      siteName: "KITA Creative Studio",
      title: `${title} | KITA Creative Studio`,
      description,
      url: `${previewOrigin}${path}`,
      images: [{ url: `${previewOrigin}/opengraph-image.png`, width: 1200, height: 630, alt: "KITA Creative Studio website prototype" }],
    },
  };
}
