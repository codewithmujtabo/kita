export type ServiceId = "websites" | "mobile-apps" | "brand-identity" | "social-media";
export type ScopeId = "starter" | "standard" | "advanced";

export type Service = {
  id: ServiceId;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  tags: string[];
  icon: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: "UI/UX" | "Development" | "Branding" | "3D Animation";
  tags: string[];
  summary: string;
  visual: string;
  year: string;
};

export const services: Service[] = [
  { id: "websites", number: "01", title: "Websites", eyebrow: "DIGITAL EXPERIENCES", summary: "Expressive websites designed to turn attention into action.", tags: ["STRATEGY", "UI/UX", "DEVELOPMENT"], icon: "↗" },
  { id: "mobile-apps", number: "02", title: "Mobile apps", eyebrow: "PRODUCT DESIGN", summary: "Intuitive digital products people enjoy coming back to.", tags: ["PRODUCT DESIGN", "IOS", "ANDROID"], icon: "▣" },
  { id: "brand-identity", number: "03", title: "Brand identity", eyebrow: "VISUAL SYSTEMS", summary: "A distinct look, voice, and system made to last.", tags: ["STRATEGY", "IDENTITY", "DESIGN"], icon: "◈" },
  { id: "social-media", number: "04", title: "Social media", eyebrow: "CONTENT & CAMPAIGNS", summary: "Thoughtful campaigns and content that keep brands relevant.", tags: ["CONTENT", "CAMPAIGN", "SOCIAL"], icon: "✳" },
];

export const projects: Project[] = [
  { slug: "atlas-digital", number: "01", title: "Atlas Digital", category: "UI/UX", tags: ["UI/UX", "DEVELOPMENT"], summary: "An editorial digital platform concept built around clarity and momentum.", visual: "atlas", year: "2026" },
  { slug: "mono-form", number: "02", title: "Mono Form", category: "Branding", tags: ["BRANDING", "ART DIRECTION"], summary: "A visual identity concept that balances precision with personality.", visual: "mono", year: "2026" },
  { slug: "forma-space", number: "03", title: "Forma Space", category: "3D Animation", tags: ["3D ANIMATION", "DIGITAL"], summary: "An atmospheric product world where objects become a story.", visual: "forma", year: "2026" },
  { slug: "north-app", number: "04", title: "North App", category: "Development", tags: ["PRODUCT", "DEVELOPMENT"], summary: "A calm, focused mobile experience for everyday planning.", visual: "north", year: "2026" },
];

export const estimateRules: Record<ServiceId, Record<ScopeId, { low: number; high: number; weeks: string }>> = {
  websites: { starter: { low: 2500, high: 4500, weeks: "4–6 weeks" }, standard: { low: 4000, high: 7500, weeks: "6–10 weeks" }, advanced: { low: 7500, high: 14000, weeks: "10–16 weeks" } },
  "mobile-apps": { starter: { low: 5000, high: 8500, weeks: "6–10 weeks" }, standard: { low: 8500, high: 16000, weeks: "10–16 weeks" }, advanced: { low: 16000, high: 30000, weeks: "16–24 weeks" } },
  "brand-identity": { starter: { low: 1800, high: 3500, weeks: "3–5 weeks" }, standard: { low: 3500, high: 6500, weeks: "5–8 weeks" }, advanced: { low: 6500, high: 12000, weeks: "8–12 weeks" } },
  "social-media": { starter: { low: 1000, high: 2000, weeks: "2–4 weeks" }, standard: { low: 2000, high: 4000, weeks: "4–6 weeks" }, advanced: { low: 4000, high: 8000, weeks: "6–10 weeks" } },
};

export const isServiceId = (value: unknown): value is ServiceId => typeof value === "string" && value in estimateRules;
export const isScopeId = (value: unknown): value is ScopeId => value === "starter" || value === "standard" || value === "advanced";

export function calculateEstimate(service: ServiceId, scope: ScopeId) {
  const rule = estimateRules[service][scope];
  return { ...rule, currency: "USD", pricingVersion: "prototype-1", disclaimer: "Illustrative demo only. These are not KITA prices or a quote." };
}
