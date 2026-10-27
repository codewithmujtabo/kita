import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { services } from "@/content/site";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = pageMetadata("Services", "/services/", "Explore KITA Creative Studio's sample service offerings in this website prototype.");

export default function ServicesPage() { return <><SiteHeader /><main id="main-content" tabIndex={-1}><section id="content-start" className="inner-hero section-shell"><span className="eyebrow">WHAT WE CAN CREATE TOGETHER</span><h1>Services with<br /><em>substance & soul.</em></h1><p>From the first spark of an idea to a polished digital experience, we connect design with the way things work.</p></section><section className="service-list section-shell"><div className="prototype-banner">SERVICE DESCRIPTIONS ARE PROTOTYPE COPY · FINAL OFFERINGS AND PRICES ARE PENDING</div>{services.map(service => <article className="service-list-item" key={service.id}><span className="eyebrow">{service.number} / {service.eyebrow}</span><div><h2>{service.title}</h2><p>{service.summary}</p><div className="tag-row">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><Link href="/#estimate" className="round-arrow" aria-label={`Estimate ${service.title}`}>↗</Link></article>)}</section><section className="inner-cta section-shell"><h2>Have a different<br /><em>kind of challenge?</em></h2><Link href="/contact" className="pill-button">Tell us about it <span>↗</span></Link></section></main><SiteFooter /></>; }
