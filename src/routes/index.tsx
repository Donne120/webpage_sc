import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { ArrowUpRight, Mail, MapPin, Linkedin, Menu, X } from "lucide-react";

import logoImg from "@/assets/logo (3).png";
import studentCover from "@/assets/student-cover.jpg";
import teamAndrew from "@/assets/Andrew.png";
import teamNgum from "@/assets/Ngum.png";
import teamMarvin from "@/assets/02.-marvin (1).jpg";
import teamHenry from "@/assets/Henry Chukwudi.jpeg";
import teamOzioma from "@/assets/Ozioma Ikenna.webp";

const BOOKING_URL =
  "https://calendar.zoho.com/zc/view/slot-booking/zz080112208b34be761ee5eb780e0eaee02becd4e5f631653127149a0b00f33b5f2fe2f907";

const COMPANION_URL = "https://chat.studentcompanionai.rw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Student Companion — AI support for every student question" },
      {
        name: "description",
        content:
          "An AI assistant that reads your institution's own policies and answers student questions at 2am. Built at African Leadership University, Kigali.",
      },
      { property: "og:title", content: "Student Companion" },
      {
        property: "og:description",
        content:
          "Deadlines, forms, which office to ask. Answered from your institution's own systems, at any hour. Built at ALU in Kigali.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

/* ─── Nav ─────────────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { id: "home",     label: "Home" },
  { id: "services", label: "Products & Services" },
  { id: "team",     label: "Team" },
  { id: "contact",  label: "Contact" },
];

function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState("home");
  const [menuOpen, setMenuOpen]   = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offsets = NAV_LINKS.map(({ id }) => {
        const el = sectionRefs.current[id];
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 80) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // expose setRef so sections can register themselves
  (Nav as any)._setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5">
          <img src={logoImg} alt="Student Companion AI" className="h-9 w-9 rounded-full object-cover" />
          <div className="leading-tight text-left">
            <div className="font-display text-base">Student Companion</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Kigali</div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === id
                  ? "bg-foreground/8 text-foreground"
                  : "text-ink-soft hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={COMPANION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:gap-3 sm:inline-flex"
            style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
          >
            Launch Companion <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-border bg-background/95 px-6 py-4 md:hidden">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                active === id ? "text-foreground bg-foreground/5" : "text-ink-soft hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
          <div className="mt-3 border-t border-border pt-3">
            <a
              href={COMPANION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
              style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
            >
              Launch Companion <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─── Shared section ref setter ──────────────────────────────────────────── */
// Sections call this to register with the Nav's IntersectionObserver
const sectionRefs: Record<string, HTMLElement | null> = {};
function setRef(id: string) {
  return (el: HTMLElement | null) => { sectionRefs[id] = el; };
}

// Re-export so Nav can read them
function useSectionRefs() { return sectionRefs; }

/* ─── HOME ────────────────────────────────────────────────────────────────── */

function Home() {
  return (
    <section
      id="home"
      ref={setRef("home")}
      className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
      style={{
        backgroundImage:
          "radial-gradient(70% 55% at 50% 0%, oklch(0.92 0.05 60 / 0.45), transparent 70%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left — headline */}
          <div className="col-span-12 lg:col-span-6">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-widest mb-8"
              style={{ borderColor: "var(--border)", color: "var(--terracotta)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--terracotta)" }} />
              Built at ALU · Kigali, Rwanda
            </div>

            <h1 className="font-display text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.95] tracking-tight">
              The answer is in the{" "}
              <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
                handbook.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft lg:text-lg">
              Ask where the deferral form lives, or what your scholarship does if
              you drop a course. It reads your institution's actual policies and
              answers at two in the morning, when the registrar is closed.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={COMPANION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:gap-3"
                style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
              >
                Launch Companion <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:border-foreground hover:gap-3"
              >
                Book a demo
              </a>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              In daily use by students at{" "}
              <strong className="text-foreground">African Leadership University</strong>,
              Kigali.
            </p>
          </div>

          {/* Right — photo */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative mx-auto max-w-md rotate-[1deg]">
              <span
                className="tape absolute -top-3 left-10 -rotate-6"
                aria-hidden
              />
              <span
                className="tape absolute -top-3 right-12 rotate-6"
                aria-hidden
              />
              <div className="overflow-hidden border border-border bg-card p-3 shadow-[0_30px_70px_-30px_oklch(0.3_0.05_60/0.45)]">
                <img
                  src={studentCover}
                  alt="A smiling student holding books and a laptop"
                  className="h-[440px] w-full object-cover lg:h-[500px]"
                />
                <div className="flex items-center justify-between pt-3 text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                  <span>ALU campus</span>
                  <span>Kigali · 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat row */}
        <div className="mt-20 border-t border-border pt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "500+",  label: "Students active" },
            { value: "24 / 7", label: "Always available" },
            { value: "100%",  label: "Source-cited answers" },
            { value: "< 2s",  label: "Average response" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-display text-3xl md:text-4xl text-foreground">{value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRODUCTS & SERVICES ─────────────────────────────────────────────────── */

function Services() {
  return (
    <section
      id="services"
      ref={setRef("services")}
      className="border-y border-border"
      style={{ backgroundColor: "var(--sand)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
            <span className="section-label">Products &amp; Services</span>
          </div>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-tight max-w-xl">
            Two ways we help students succeed.
          </h2>
        </div>

        {/* Two cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Card 1 — Career Services */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-8 lg:p-10">
            <div
              className="mb-7 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: "var(--ink)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--paper)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-foreground mb-3">Career Services</h3>
            <p className="text-sm leading-relaxed text-ink-soft mb-8">
              Guidance on internships, graduate opportunities, CV reviews, and
              career pathways — tailored to where ALU students actually end up.
              Connects you to real opportunities, not generic advice.
            </p>
            <ul className="mt-auto space-y-3">
              {[
                "Internship and job opportunity discovery",
                "CV and cover letter guidance",
                "Alumni network insights",
                "Career pathway planning",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--terracotta)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 — Support Platform */}
          <div
            className="flex flex-col rounded-2xl border p-8 lg:p-10"
            style={{ backgroundColor: "var(--ink)", borderColor: "var(--ink)", color: "var(--paper)" }}
          >
            <div
              className="mb-7 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: "var(--terracotta)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--paper)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-paper mb-3">Support Platform</h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "oklch(0.985 0.008 80 / 0.65)" }}>
              An AI assistant trained on your institution's actual documents —
              handbooks, academic calendars, policies. It answers from the
              source, cites the page, and escalates to a human when it should.
            </p>
            <ul className="mt-auto space-y-3">
              {[
                "Answers from your institution's own documents",
                "Cites chapter and section for every response",
                "Escalates edge cases to staff — never guesses",
                "Available 24 / 7, no booking required",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "oklch(0.985 0.008 80 / 0.7)" }}>
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--terracotta)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t pt-6" style={{ borderColor: "oklch(0.985 0.008 80 / 0.12)" }}>
              <a
                href={COMPANION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
                style={{ color: "var(--terracotta)" }}
              >
                Try it now <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* How it works — 3 steps */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            {
              n: "01",
              title: "Connect your documents",
              body: "A handbook and an academic calendar. Setup takes about a day on our side.",
            },
            {
              n: "02",
              title: "Students ask, it answers",
              body: "Plain-language questions. Answers with the source cited so students can verify before acting.",
            },
            {
              n: "03",
              title: "Edge cases go to humans",
              body: "Appeals, personal circumstances, anything policy can't cover — escalated, not guessed at.",
            },
          ].map(({ n, title, body }) => (
            <div key={n} className="flex gap-5">
              <span
                className="mt-0.5 flex-shrink-0 font-display text-sm font-semibold"
                style={{ color: "var(--terracotta)" }}
              >
                {n}
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TEAM ────────────────────────────────────────────────────────────────── */

const TEAM = [
  {
    name: "Andrew Steven Boima",
    role: "Founder & Project Lead",
    meta: "BSc (Hons) Entrepreneurial Leadership",
    blurb: "Runs the institutional conversations. If you book a call, this is usually who picks up.",
    photo: teamAndrew,
  },
  {
    name: "Dieudonne Ngum",
    role: "Technical Development Lead",
    meta: "BSc (Hons) Software Engineering",
    blurb: "Builds the retrieval side — the part that makes it cite a real document instead of inventing one.",
    photo: teamNgum,
  },
  {
    name: "Marvin Mayonga Ogore",
    role: "Technical Supervisory Coach",
    meta: "Machine Learning Coach",
    blurb: "Our ML coach. Mostly tells us when an approach won't survive contact with real data.",
    photo: teamMarvin,
  },
  {
    name: "Henry Chukwudi John",
    role: "Stakeholder Engagement Lead",
    meta: "Library & Information Services",
    blurb: "Comes from library and information services, which is why we take document structure seriously.",
    photo: teamHenry,
  },
  {
    name: "Ogbonna Ozioma Ikenna",
    role: "Customer Success & Implementation Lead",
    meta: "Customer Success",
    blurb: "Handles setup once a campus signs on, and chases the documents nobody wants to hand over.",
    photo: teamOzioma,
  },
];

function Team() {
  return (
    <section
      id="team"
      ref={setRef("team")}
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
          <span className="section-label">The Team</span>
        </div>
        <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-tight max-w-xl">
          Five people, most of us{" "}
          <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
            still enrolled.
          </span>
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
          We're building for a problem we had last semester, and some of us still have.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m) => (
          <div
            key={m.name}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-foreground/30 hover:shadow-lg"
          >
            {/* Photo */}
            <div className="aspect-[4/3] overflow-hidden bg-sand">
              <img
                src={m.photo}
                alt={m.name}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Caption */}
            <div className="p-6">
              <p className="font-display text-xl leading-snug text-foreground">{m.name}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest" style={{ color: "var(--terracotta)" }}>
                {m.role}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{m.meta}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{m.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CONTACT ─────────────────────────────────────────────────────────────── */

function Contact() {
  return (
    <section
      id="contact"
      ref={setRef("contact")}
      style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
              <span className="section-label" style={{ color: "var(--terracotta)" }}>Contact</span>
            </div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-tight">
              Half an hour, and you'll know if this is{" "}
              <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
                worth your time.
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed" style={{ color: "oklch(0.985 0.008 80 / 0.6)" }}>
              No slide deck. We'd rather load your handbook and let you try to break it.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: "var(--terracotta)" }} />
                <a
                  href="mailto:studentcompanionai@gmail.com"
                  className="text-sm transition-colors hover:text-paper/80"
                  style={{ color: "oklch(0.985 0.008 80 / 0.7)" }}
                >
                  studentcompanionai@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: "var(--terracotta)" }} />
                <span className="text-sm" style={{ color: "oklch(0.985 0.008 80 / 0.7)" }}>
                  Kigali, Rwanda — happy to work across timezones
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 flex-shrink-0" style={{ color: "var(--terracotta)" }} />
                <a
                  href="https://www.linkedin.com/company/student-companion-ai-chatbot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-paper/80"
                  style={{ color: "oklch(0.985 0.008 80 / 0.7)" }}
                >
                  Follow on LinkedIn
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:gap-3"
                style={{ backgroundColor: "var(--terracotta)", color: "var(--paper)" }}
              >
                Book a demo session <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:studentcompanionai@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all hover:gap-3"
                style={{ borderColor: "oklch(0.985 0.008 80 / 0.2)", color: "var(--paper)" }}
              >
                Email the team
              </a>
            </div>
          </div>

          {/* Right — how the call goes */}
          <div>
            <p
              className="mb-6 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "oklch(0.985 0.008 80 / 0.35)" }}
            >
              How the call goes
            </p>
            <div className="space-y-0">
              {[
                {
                  n: "01",
                  title: "You bring the hard questions",
                  body: "The ones your front desk answers twenty times a week, and one nobody can ever find the answer to.",
                },
                {
                  n: "02",
                  title: "We point it at your documents",
                  body: "Usually a handbook and an academic calendar. This part takes about a day on our side.",
                },
                {
                  n: "03",
                  title: "You try to break it",
                  body: "If it makes something up, we want to see that happen in the demo rather than in March.",
                },
                {
                  n: "04",
                  title: "Costs, in writing",
                  body: "What it takes to run per year, what we'd need from your IT team, and what we can't do yet.",
                },
              ].map(({ n, title, body }) => (
                <div
                  key={n}
                  className="flex gap-6 border-b py-6 last:border-0"
                  style={{ borderColor: "oklch(0.985 0.008 80 / 0.08)" }}
                >
                  <span
                    className="flex-shrink-0 font-display text-sm font-semibold"
                    style={{ color: "var(--terracotta)" }}
                  >
                    {n}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-paper mb-1">{title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.985 0.008 80 / 0.5)" }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs" style={{ color: "oklch(0.985 0.008 80 / 0.3)" }}>
              Typically runs 30 minutes. We've never needed the full hour.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t" style={{ borderColor: "oklch(0.985 0.008 80 / 0.1)" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-6 sm:flex-row sm:items-center lg:px-10">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Student Companion" className="h-8 w-8 rounded-full object-cover opacity-80" />
            <span className="text-sm" style={{ color: "oklch(0.985 0.008 80 / 0.5)" }}>
              Student Companion AI
            </span>
          </div>
          <p className="text-xs" style={{ color: "oklch(0.985 0.008 80 / 0.3)" }}>
            © 2026 Student Companion · Made in Kigali.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── NAV scroll wiring ───────────────────────────────────────────────────── */
// The Nav's scrollTo needs access to sectionRefs. We wire it up here via a
// module-level ref map that both Nav and the section components share.

function NavWired() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offsets = NAV_LINKS.map(({ id }) => {
        const el = sectionRefs[id];
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 80) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = sectionRefs[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5">
          <img src={logoImg} alt="Student Companion AI" className="h-9 w-9 rounded-full object-cover" />
          <div className="leading-tight text-left">
            <div className="font-display text-base">Student Companion</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Kigali</div>
          </div>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === id
                  ? "text-foreground bg-foreground/8"
                  : "text-ink-soft hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={COMPANION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:gap-3 sm:inline-flex"
            style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
          >
            Launch Companion <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background/95 px-6 py-4 md:hidden">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                active === id ? "text-foreground bg-foreground/5" : "text-ink-soft hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
          <div className="mt-3 border-t border-border pt-3">
            <a
              href={COMPANION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
              style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
            >
              Launch Companion <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavWired />
      <Home />
      <Services />
      <Team />
      <Contact />
    </main>
  );
}
