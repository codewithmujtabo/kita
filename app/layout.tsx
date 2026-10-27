import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "KITA Creative Studio — Website Prototype", template: "%s | KITA Creative Studio" },
  description: "A prototype portfolio for KITA Creative Studio, exploring expressive websites, digital products, brand identity, and creative technology.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#content-start">Skip to content</a>{children}</body></html>;
}
