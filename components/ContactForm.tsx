"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    setBusy(true); setStatus("");
    if (process.env.NEXT_PUBLIC_STATIC_PREVIEW === "true") {
      setStatus("Prototype validated locally. No message was sent or saved.");
      setBusy(false);
      return;
    }
    try {
      const response = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, message }) });
      const result = await response.json();
      if (!response.ok) { setStatus(result.error || "Please check your details."); return; }
      setStatus(result.message);
    } catch { setStatus("The prototype could not validate your message. Please try again."); }
    finally { setBusy(false); }
  }
  return <form className="contact-form" onSubmit={submit}><span className="eyebrow">TELL US ABOUT YOUR IDEA</span><div className="form-two"><label>Your name<input name="name" required minLength={2} maxLength={100} placeholder="Full name" /></label><label>Email address<input name="email" type="email" required maxLength={254} placeholder="you@company.com" /></label></div><label>What are you imagining?<textarea name="message" required minLength={10} maxLength={5000} rows={6} placeholder="A little about your goals, your project, and your timeline..." /></label><button className="estimate-submit" disabled={busy} type="submit">{busy ? "Checking..." : "Validate demo inquiry"}<span aria-hidden="true">↗</span></button><p className="form-note">Prototype form: validation only. Nothing is sent or saved. To contact KITA, use the email link on this page.</p><p className="status-line" role="status">{status}</p></form>;
}
