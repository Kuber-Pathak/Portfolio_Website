"use client";

import { useState } from "react";
import { Reveal } from "@/lib/Reveal";
import { I } from "@/lib/icons";

type FormState = { name: string; email: string; desc: string };
type Errors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", desc: "" });
  const [errs, setErrs] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.desc.trim()) e.desc = "Message can't be empty.";
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  const submit = async(ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setSent(true);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.desc,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSent(true);
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Get In Touch</span>
          <h2>Let&apos;s make something.</h2>
          <p>Reach out for collaborations, internships, freelance work, or just to talk AI.</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-text">
            <span className="eyebrow">Say Hello</span>
            <h3>
              Let&apos;s make something <em>new</em>, different and more <em>meaningful</em>.
            </h3>
            <ul className="contact-info">
              <li>{I.email}<a href="mailto:Kuberpathak124@gmail.com">Kuberpathak124@gmail.com</a></li>
              <li>{I.phone}<a href="tel:+9779840795845">+977 9840795 845</a></li>
              <li>{I.pin}<span>Kathmandu, Nepal</span></li>
            </ul>
            <div className="contact-socials">
              <a href="https://github.com/Kuber-Pathak" target="_blank" rel="noopener" aria-label="GitHub">{I.github}</a>
              <a href="https://www.linkedin.com/in/kuber-pathak-8b804b217/" target="_blank" rel="noopener" aria-label="LinkedIn">{I.linkedin}</a>
              <a href="https://www.instagram.com/pathakkuber/" target="_blank" rel="noopener" aria-label="Instagram">{I.instagram}</a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form className="contact-form" onSubmit={submit} noValidate>
              {sent ? (
                <div className="form-sent">
                  <div className="check">{I.check}</div>
                  <h4>Message sent!</h4>
                  <p>Thanks {form.name.split(" ")[0]} — I&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="field">
                    <input
                      id="f-name"
                      type="text"
                      placeholder=" "
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <label htmlFor="f-name">Your Name</label>
                    {errs.name && <span className="err">{errs.name}</span>}
                  </div>
                  <div className="field">
                    <input
                      id="f-email"
                      type="email"
                      placeholder=" "
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <label htmlFor="f-email">Mail Address</label>
                    {errs.email && <span className="err">{errs.email}</span>}
                  </div>
                  <div className="field">
                    <textarea
                      id="f-desc"
                      placeholder=" "
                      rows={3}
                      value={form.desc}
                      onChange={(e) => setForm({ ...form, desc: e.target.value })}
                    />
                    <label htmlFor="f-desc">Message</label>
                    {errs.desc && <span className="err">{errs.desc}</span>}
                  </div>
                  <button className="btn btn-dark" type="submit" style={{ marginTop: 12 }}>{loading ? "Sending..." : `Send Message.`}
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
