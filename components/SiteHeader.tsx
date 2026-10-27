"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#estimate", label: "Estimate" },
  { href: "/contact", label: "Contact" },
];

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" className={`logo ${inverse ? "logo-inverse" : ""}`} aria-label="KITA Creative Studio home">KITA<span className="logo-spark">✦</span></Link>;
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return <header className="site-header" onKeyDown={event => { if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus(); } }}>
    <div className="header-inner">
      <Logo />
      <nav className="desktop-nav" aria-label="Main navigation">{links.slice(0, 4).map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
      <div className="header-actions">
        <Link className="pill-button pill-button-small" href="/contact">Start a project <span aria-hidden="true">↗</span></Link>
        <button ref={menuButton} type="button" className={`menu-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav"><span /><span /></button>
      </div>
    </div>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<span>↗</span></Link>)}</nav>}
  </header>;
}
