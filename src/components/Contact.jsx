import { useState } from "react";

function SectionLabel({ index, children }) { return <div className="section-label"><span>{index}</span><span>{children}</span><i /></div>; }

export default function Contact() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event) {
    event.preventDefault(); setBusy(true); setStatus("");
    try { const response = await fetch("https://formspree.io/f/xaqqwrog", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))) }); if (!response.ok) throw new Error("Request failed"); event.currentTarget.reset(); setStatus("Message received. I will be in touch soon."); } catch { setStatus("Something went wrong. Please email me directly or try again."); } finally { setBusy(false); }
  }
  return <section className="contact-section" id="contact"><div className="container contact-grid"><div><SectionLabel index="06">Open channel</SectionLabel><h2>Let&apos;s make<br /><em>something useful.</em></h2><p className="body-copy">For opportunities, collaborations or a conversation about data, I&apos;d like to hear from you.</p><a className="email-link" href="mailto:petrie.dewit@gmail.com">petrie.dewit@gmail.com <span>↗</span></a><div className="contact-links"><a href="https://www.linkedin.com/in/petrie-de-wit-491673267/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Petriedw" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/Petrie_deWit_CV.pdf" download="Petrie-De-Wit-CV.pdf">Download CV ↓</a></div></div><form className="contact-form" onSubmit={submit}><label htmlFor="name">Your name<input id="name" name="name" required autoComplete="name" /></label><label htmlFor="email">Email address<input id="email" name="email" type="email" required autoComplete="email" /></label><label htmlFor="message">Message<textarea id="message" name="message" required rows="4" /></label><button className="button button--solid" type="submit" disabled={busy}>{busy ? "Sending..." : "Send message ↗"}</button>{status && <p className="form-status" role="status">{status}</p>}</form></div></section>;
}
