import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://codewithmujtabo.github.io/"),
  title: { default: "KITA Creative Studio — Website Prototype", template: "%s | KITA Creative Studio" },
  description: "A prototype portfolio for KITA Creative Studio, exploring expressive websites, digital products, brand identity, and creative technology.",
  alternates: { canonical: "https://codewithmujtabo.github.io/kita/" },
  robots: { index: false, follow: false },
  openGraph: { type: "website", siteName: "KITA Creative Studio", title: "KITA Creative Studio — Website Prototype", description: "Explore the KITA Creative Studio portfolio prototype.", url: "https://codewithmujtabo.github.io/kita/" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a>{children}</body></html>;
}
