import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() { return <main id="main-content"><SiteHeader /><section id="content-start" className="inner-hero section-shell contact-hero"><span className="eyebrow">LET'S MAKE SOMETHING MATTER</span><h1>Tell us what<br /><em>you imagine.</em></h1><p>Every great experience starts with a conversation. Share your idea and let&apos;s find the right shape for it.</p></section><section className="contact-layout section-shell"><div className="contact-details"><span className="eyebrow">REACH OUT DIRECTLY</span><a href="mailto:hello@kitacreative.studio">hello@kitacreative.studio ↗</a><p>Jakarta, Indonesia</p><p className="contact-small">The address is taken from the supplied design and should be confirmed before launch.</p></div><ContactForm /></section><SiteFooter /></main>; }
