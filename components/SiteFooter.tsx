import Link from "next/link";
import { Logo } from "./SiteHeader";

export default function SiteFooter() {
  return <footer className="site-footer" id="footer">
    <div className="footer-top"><span className="eyebrow eyebrow-light">HAVE SOMETHING IN MIND?</span><Link href="/contact" className="footer-cta">Let&apos;s make it <em>happen.</em><span aria-hidden="true">↗</span></Link></div>
    <div className="footer-grid">
      <div><Logo inverse /><p>Independent creative studio for brands<br />and digital products.</p></div>
      <div><span className="footer-label">NAVIGATE</span><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/#about">About</Link><Link href="/contact">Contact</Link></div>
      <div><span className="footer-label">SOCIAL</span><span>Instagram — coming soon</span><span>LinkedIn — coming soon</span><span>Behance — coming soon</span></div>
      <div><span className="footer-label">SAY HELLO</span><a href="mailto:hello@kitacreative.studio">hello@kitacreative.studio</a><span>Jakarta, Indonesia</span></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} KITA Creative Studio. Prototype.</span><span>Made with imagination & intention.</span></div>
  </footer>;
}
