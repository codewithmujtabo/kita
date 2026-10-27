import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectGallery from "@/components/ProjectGallery";
import Estimator from "@/components/Estimator";
import MotionEnhancer from "@/components/MotionEnhancer";
import { services } from "@/content/site";

export default function Home() {
  return <main id="main-content"><MotionEnhancer /><SiteHeader />
    <section className="hero section-shell" id="content-start"><div className="hero-art-wrap"><div className="hero-grid"/><Image src="/images/hero-glass-concept.webp" alt="Three floating glass forms representing an idea, creative process, and digital product" width={1774} height={887} priority className="hero-art" /><div className="hero-art-label label-one">[ 01 ] YOUR IDEA</div><div className="hero-art-label label-two">[ 02 ] OUR PROCESS</div><div className="hero-art-label label-three">[ 03 ] YOUR DIGITAL PRODUCT</div></div><div className="hero-bottom"><div className="hero-title"><span className="eyebrow">INDEPENDENT CREATIVE STUDIO · JAKARTA</span><h1>We engineer<br /><em>ideas</em> into digital<br />experiences.</h1><Link href="/contact" className="pill-button hero-cta"><span className="button-dot"/>Start a project <span aria-hidden="true">↗</span></Link></div><div className="hero-aside"><p>Where design intuition meets technology and systems thinking. We build brands and products designed to evolve.</p><div className="hero-service-links"><Link href="/services">UI/UX <span>↗</span></Link><Link href="/services">3D VISUALIZATION <span>↗</span></Link><Link href="/services">DEVELOPMENT <span>↗</span></Link></div></div></div><span className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></span></section>

    <section className="intro-section" id="about"><div className="section-shell intro-layout"><div className="intro-copy intro-left"><span className="eyebrow">01 / WHO WE ARE</span><h2>Imagined by<br />designers, built<br /><em>by engineers.</em></h2></div><div className="intro-sculpture" aria-hidden="true"><div className="sculpture-glow"/><div className="sculpture-orbit orbit-one"/><div className="sculpture-orbit orbit-two"/><div className="sculpture-core"><span>KITA</span></div><div className="sculpture-panel panel-one">DESIGN<br/>TECHNOLOGY<br/>SCIENCE</div><div className="sculpture-panel panel-two">&lt;/&gt;<br/>01 / CREATE</div><div className="sculpture-panel panel-three">IDEAS<br/>BUILD<br/>MOMENTUM</div></div><div className="intro-copy intro-right"><h2>Made to feel,<br /><em>built to perform.</em></h2><p>We shape digital experiences that are expressive, considered, and useful.</p></div></div></section>

    <section className="showreel-section section-shell"><div className="section-heading-line"><span className="eyebrow">02 / IN MOTION</span><span>MORE THAN WHAT MEETS THE EYE</span></div><div className="showreel-panel"><div className="showreel-orb" aria-hidden="true"/><span className="showreel-index">KITA / VISUAL EXPLORATION</span><div className="showreel-title"><span className="play-icon" aria-hidden="true">▷</span><div><span>SHOWREEL COMING SOON</span><strong>Ideas in motion.</strong></div></div><span className="showreel-bottom">Prototype visual · video asset pending</span></div></section>

    <section className="services-section" id="services"><div className="section-shell"><div className="section-center-heading"><span className="eyebrow">03 / WHAT WE DO</span><h2>Our Services<span className="accent-period">.</span></h2><p>From strategy to execution, we design and build digital experiences that create real impact.</p></div><div className="services-layout"><div className="services-column">{services.filter((_, index) => index % 2 === 0).map(service => <ServiceCard key={service.id} service={service} />)}</div><div className="service-center-art" aria-hidden="true"><div className="service-halo"/><div className="service-stage stage-back"/><div className="service-stage stage-mid"/><div className="service-stage stage-front"><span>KITA</span><small>IDEAS<br/>BUILD<br/>MOMENTUM</small></div><div className="service-sphere"/></div><div className="services-column">{services.filter((_, index) => index % 2 === 1).map(service => <ServiceCard key={service.id} service={service} />)}</div></div><div className="center-cta"><Link href="/services" className="text-link">Explore all services <span>↗</span></Link></div></div></section>

    <section className="projects-section section-shell" id="work"><div className="projects-heading"><div><span className="eyebrow">04 / SELECTED WORK</span><h2>Our Project,<br /><em>Your Ideas</em></h2></div><div className="projects-heading-aside"><p>Explore sample concepts that show the kinds of digital experiences we want to create together.</p><Link href="/work" className="pill-button pill-button-small">View all projects <span>↗</span></Link></div></div><div className="prototype-banner">PORTFOLIO PROTOTYPE — ALL PROJECTS BELOW ARE ILLUSTRATIVE CONCEPTS</div><ProjectGallery limit={4} /></section>

    <Estimator />
    <SiteFooter />
  </main>;
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return <Link className="service-card" href="/services"><div className="service-card-top"><span>{service.eyebrow}</span><span className="service-number">{service.number}</span></div><div className="service-card-main"><h3>{service.title}</h3><span className="service-arrow">↗</span></div><p>{service.summary}</p><div className="service-tags">{service.tags.join(" / ")}</div></Link>;
}
