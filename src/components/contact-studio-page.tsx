"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { MagButton } from "@/components/interactions";
import { Reveal } from "@/components/reveal";
import {
  contactPage,
  type ContactChannelIcon,
} from "@/data/contact-page";
import { services } from "@/data/services";
import { site } from "@/data/site";

function ChannelIcon({ name }: { name: ContactChannelIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "email":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "location":
      return (
        <svg {...common}>
          <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "hours":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
  }
}

const serviceOptions = [
  ...services.map((s) => s.name),
  "Not sure yet",
];

function ServiceDropdown({
  value,
  onChange,
  labelledBy,
}: {
  value: string;
  onChange: (value: string) => void;
  labelledBy: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={`contact-dd${open ? " open" : ""}`} ref={rootRef}>
      <button
        type="button"
        className="contact-dd-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={labelledBy}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{value}</span>
        <svg
          className="contact-dd-chevron"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open ? (
        <ul
          className="contact-dd-menu"
          id={listId}
          role="listbox"
          aria-labelledby={labelledBy}
        >
          {serviceOptions.map((opt) => {
            const selected = opt === value;
            return (
              <li key={opt} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className={`contact-dd-option${selected ? " selected" : ""}`}
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                >
                  {opt}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function ContactFormPanel() {
  const { form } = contactPage;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(serviceOptions[0] ?? "");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Consultation request: ${service}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-fm" onSubmit={onSubmit}>
      <div className="contact-fm-row">
        <div className="contact-fm-field">
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="contact-fm-field">
          <label htmlFor="contact-email">Your email</label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="contact-fm-field">
        <label id="contact-service-label">Service you need</label>
        <ServiceDropdown
          value={service}
          onChange={setService}
          labelledBy="contact-service-label"
        />
      </div>
      <div className="contact-fm-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
        />
      </div>
      <div className="contact-fm-actions">
        <MagButton>
          <button className="btn gold mag" type="submit">
            {form.submitLabel}
          </button>
        </MagButton>
      </div>
    </form>
  );
}

export function ContactStudioPage() {
  const { channels, form } = contactPage;

  return (
    <div className="contact-studio">
      <section className="sec contact-channels contact-channels-top">
        <div className="w">
          <Reveal className="contact-sec-head">
            <p className="contact-eyebrow">{channels.eyebrow}</p>
            <h1 className="contact-title">
              {channels.titleBefore}{" "}
              <span className="contact-accent">{channels.titleAccent}</span>
            </h1>
            <p className="contact-lead">{channels.lead}</p>
          </Reveal>
          <div className="contact-channel-grid">
            {channels.items.map((item, i) => {
              const inner = (
                <>
                  <span className="contact-channel-ic" aria-hidden="true">
                    <ChannelIcon name={item.icon} />
                  </span>
                  <span className="contact-channel-label">{item.label}</span>
                  <strong className="contact-channel-value">{item.value}</strong>
                  <span className="contact-channel-hint">{item.hint}</span>
                </>
              );
              return (
                <Reveal key={item.label} delay={`${i * 60}ms`}>
                  {item.href ? (
                    <a
                      className="contact-channel"
                      href={item.href}
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="contact-channel">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec contact-form-sec" id="consultation">
        <div className="w contact-form-layout">
          <Reveal className="contact-form-intro">
            <p className="contact-eyebrow">{form.eyebrow}</p>
            <h2 className="contact-title">
              {form.titleBefore}{" "}
              <span className="contact-accent">{form.titleAccent}</span>
            </h2>
            <p className="contact-lead">{form.lead}</p>
            <ul className="contact-form-points">
              <li>Clear scope and timeline in writing</li>
              <li>Honest pricing — no surprise fees</li>
              <li>One team for finance and digital growth</li>
            </ul>
          </Reveal>
          <Reveal delay="100ms">
            <ContactFormPanel />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
