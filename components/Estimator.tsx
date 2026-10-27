"use client";

import { useEffect, useState } from "react";
import { calculateEstimate, type ScopeId, type ServiceId } from "@/content/site";

const types: { id: ServiceId; label: string }[] = [{ id: "websites", label: "Website" }, { id: "mobile-apps", label: "Mobile app" }, { id: "brand-identity", label: "Branding" }, { id: "social-media", label: "Social media" }];
const scopes: { id: ScopeId; label: string }[] = [{ id: "starter", label: "Starter" }, { id: "standard", label: "Standard" }, { id: "advanced", label: "Advanced" }];

export default function Estimator() {
  const [service, setService] = useState<ServiceId>("websites");
  const [scope, setScope] = useState<ScopeId>("standard");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");
  const [estimate, setEstimate] = useState(calculateEstimate(service, scope));

  useEffect(() => {
    let cancelled = false;
    fetch("/api/estimate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ service, scope }) })
      .then(response => { if (!response.ok) throw new Error("Estimate unavailable"); return response.json(); })
      .then(result => { if (!cancelled) setEstimate(result); })
      .catch(() => { if (!cancelled) setEstimate(calculateEstimate(service, scope)); });
    return () => { cancelled = true; };
  }, [service, scope]);

  const send = () => {
    const subject = encodeURIComponent(`KITA project inquiry: ${types.find(item => item.id === service)?.label}`);
    const body = encodeURIComponent(`Project type: ${service}\nScope: ${scope}\nIllustrative demo range: USD ${estimate.low.toLocaleString()}–${estimate.high.toLocaleString()}\n\nProject notes:\n${notes || "(add your notes here)"}\n\nPlease tell us more about your project.`);
    setStatus("Your email app will open. The message is sent only if you send it there.");
    window.location.href = `mailto:hello@kitacreative.studio?subject=${subject}&body=${body}`;
  };

  return <section className="estimator-section" id="estimate"><div className="section-shell estimator-layout">
    <div className="estimate-copy"><span className="eyebrow"><span className="section-index">05</span> QUICK PROJECT ESTIMATOR</span><h2>Get a starting<br />estimate in <em>30<br />seconds.</em></h2><p>Choose what you have in mind. This prototype gives you an example range to start the conversation.</p><span className="demo-note">DEMO PRICING · NOT A REAL QUOTE</span></div>
    <div className="estimator-card"><div className="field-group"><span className="field-label">WHAT ARE WE CREATING?</span><div className="choice-grid">{types.map(type => <button type="button" key={type.id} onClick={() => setService(type.id)} className={`choice ${service === type.id ? "selected" : ""}`} aria-pressed={service === type.id}><span className="radio-dot"/>{type.label}</button>)}</div></div>
      <div className="field-group"><span className="field-label">WHAT LEVEL OF SCOPE?</span><div className="choice-grid choice-grid-three">{scopes.map(item => <button type="button" key={item.id} onClick={() => setScope(item.id)} className={`choice ${scope === item.id ? "selected" : ""}`} aria-pressed={scope === item.id}><span className="radio-dot"/>{item.label}</button>)}</div></div>
      <label className="field-group"><span className="field-label">TELL US MORE ABOUT YOUR PROJECT</span><textarea value={notes} onChange={event => setNotes(event.target.value)} maxLength={1500} placeholder="Goals, features, references, timeline, or anything we should know..." /></label>
      <div className="estimate-result" aria-live="polite"><span>ILLUSTRATIVE INVESTMENT · USD</span><strong>${estimate.low.toLocaleString()}–${estimate.high.toLocaleString()}</strong><small>Example timeline: {estimate.weeks}</small></div>
      <button className="estimate-submit" type="button" onClick={send}>Discuss this estimate <span aria-hidden="true">↗</span></button><p className="estimate-disclaimer">{estimate.disclaimer}</p><p className="status-line" role="status">{status}</p>
    </div>
  </div></section>;
}
