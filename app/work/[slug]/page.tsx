import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { projects } from "@/content/site";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const project = projects.find(item => item.slug === slug); return { title: project ? `${project.title} — Concept` : "Project" }; }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = projects.find(item => item.slug === slug); if (!project) notFound(); return <main id="main-content"><SiteHeader /><section id="content-start" className="inner-hero section-shell project-detail-hero"><Link href="/work" className="back-link">← ALL WORK</Link><span className="eyebrow">ILLUSTRATIVE CONCEPT / {project.year}</span><h1>{project.title}<span className="accent-period">.</span></h1><p>{project.summary}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></section><section className={`detail-visual project-${project.visual} section-shell`}><div className="detail-object"/><span>CONCEPT VISUAL / {project.number}</span></section><section className="project-story section-shell"><span className="eyebrow">ABOUT THIS CONCEPT</span><div><h2>A space for<br /><em>what comes next.</em></h2><p>This is a fictional study used to demonstrate the website design. It does not represent completed client work, outcomes, or a real KITA engagement. Approved case studies will take its place as the portfolio grows.</p><Link href="/contact" className="pill-button">Start a conversation <span>↗</span></Link></div></section><SiteFooter /></main>; }
