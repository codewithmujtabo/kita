"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/content/site";

const filters = ["All", "UI/UX", "Development", "Branding", "3D Animation"] as const;

export default function ProjectGallery({ limit }: { limit?: number }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = projects.filter(project => active === "All" || project.category === active).slice(0, limit);
  return <>
    <div className="filter-row" role="group" aria-label="Filter projects">{filters.map(filter => <button key={filter} type="button" className={`filter-pill ${active === filter ? "active" : ""}`} aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>)}</div>
    <div className="project-grid">{filtered.map(project => <Link href={`/work/${project.slug}`} className={`project-card project-${project.visual}`} key={project.slug}>
      <span className="project-number">{project.number} / CONCEPT PROJECT</span>
      <div className="project-art" aria-hidden="true"><span className="art-object art-object-one"/><span className="art-object art-object-two"/><span className="art-object art-object-three"/></div>
      <div className="project-card-bottom"><div><h3>{project.title}</h3><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><span className="round-arrow" aria-hidden="true">↗</span></div>
    </Link>)}</div>
    {filtered.length === 0 && <p>No concepts in this category yet.</p>}
  </>;
}
