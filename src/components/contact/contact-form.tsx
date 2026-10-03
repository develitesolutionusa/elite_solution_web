"use client";

import { useState, type FormEvent } from "react";
import { MagButton } from "@/components/interactions";
import { Reveal } from "@/components/reveal";
import { services } from "@/data/services";
import { site } from "@/data/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(services[0]?.name ?? "");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Consultation request: ${service}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="sec">
      <div className="w contact">
        <Reveal>
          <ul className="ci">
            <li>
              <b>Phone</b>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <b>Email</b>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <b>Website</b>
              <a href={site.website} target="_blank" rel="noopener noreferrer">
                {site.websiteLabel}
              </a>
            </li>
          </ul>
        </Reveal>
        <Reveal delay=".15s">
          <form className="fm" onSubmit={onSubmit}>
            <label htmlFor="fn">Your name</label>
            <input
              id="fn"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="fe">Your email</label>
            <input
              id="fe"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="fs">Service you need</label>
            <select
              id="fs"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              {services.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
            <label htmlFor="fm">Message</label>
            <textarea
              id="fm"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <MagButton>
              <button className="btn gold mag" type="submit">
                Send message
              </button>
            </MagButton>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
