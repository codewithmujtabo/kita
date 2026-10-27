import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() { return <main id="main-content"><SiteHeader /><section id="content-start" className="inner-hero section-shell"><span className="eyebrow">SELECTED CONCEPTS</span><h1>Ideas, made<br /><em>visible.</em></h1><p>This prototype gallery uses fictional concept projects. Real KITA case studies will replace them before launch.</p></section><section className="section-shell work-page-gallery"><div className="prototype-banner">ALL PROJECTS ON THIS PAGE ARE ILLUSTRATIVE CONCEPTS</div><ProjectGallery /></section><SiteFooter /></main>; }
