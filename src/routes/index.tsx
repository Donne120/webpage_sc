import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Menu,
  X,
  Linkedin,
} from "lucide-react";

import logoImg    from "@/assets/logo-new.png";
import andrewLaptop from "@/assets/andrew-laptop.jpg";
import partnerCloudvisor from "@/assets/partner-cloudvisor.png";

import teamAndrew  from "@/assets/Andrew.jpg";
import teamNgum    from "@/assets/Ngum.png";
import teamMarvin  from "@/assets/02.-marvin (1).jpg";
import teamNuake   from "@/assets/Nuake.jpg";
import teamDeborah from "@/assets/Deborah.jpg";
import teamGilbert from "@/assets/Gilbert.jpg";

const CONTACT_EMAIL = "info@studentcompanionai.rw";
const COMPANION_URL = "https://chat.studentcompanionai.rw";

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/student-companion-ai",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/SCAI_P",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/studentcompanionai/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029VajtyR71SWt02iOsLK2l",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

/* ─── Nav section refs (module-level so all components share) ─────────────── */
const sectionRefs: Record<string, HTMLElement | null> = {};
function setRef(id: string) {
  return (el: HTMLElement | null) => { sectionRefs[id] = el; };
}

const NAV_LINKS = [
  { id: "home",     label: "Home" },
  { id: "about",    label: "About" },
  { id: "services", label: "Products & Services" },
  { id: "team",     label: "Team" },
  { id: "contact",  label: "Contact" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Student Companion AI — Support for every student question" },
      {
        name: "description",
        content:
          "An AI-powered platform delivering seamless resource library and career opportunities to universities and students in Rwanda and across Africa.",
      },
      { property: "og:title", content: "Student Companion AI" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

/* ─── NAV ─────────────────────────────────────────────────────────────────── */

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
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5">
          <img src={logoImg} alt="Student Companion AI" className="h-10 w-10 rounded-xl object-cover" />
          <div className="leading-tight text-left">
            <div className="font-display text-base">Student Companion</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">AI</div>
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

          {/* Left */}
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
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:border-foreground hover:gap-3"
              >
                Get in touch
              </a>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              In daily use by students at{" "}
              <strong className="text-foreground">African Leadership University</strong>,
              Kigali.
            </p>
          </div>

          {/* Right — Andrew at laptop */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative mx-auto max-w-md rotate-[1deg]">
              <span className="tape absolute -top-3 left-10 -rotate-6" aria-hidden />
              <span className="tape absolute -top-3 right-12 rotate-6" aria-hidden />
              <div className="overflow-hidden border border-border bg-card p-3 shadow-[0_30px_70px_-30px_oklch(0.3_0.05_60/0.45)]">
                <img
                  src={andrewLaptop}
                  alt="Andrew Steven Boima working on Student Companion AI"
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
            { value: "500+",   label: "Students active" },
            { value: "24 / 7", label: "Always available" },
            { value: "100%",   label: "Source-cited answers" },
            { value: "< 2s",   label: "Average response" },
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

/* ─── ABOUT ───────────────────────────────────────────────────────────────── */

function About() {
  return (
    <section
      id="about"
      ref={setRef("about")}
      className="border-y border-border"
      style={{ backgroundColor: "var(--sand)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
            <span className="section-label">Who We Are</span>
          </div>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-tight max-w-2xl">
            What Student Companion AI does.
          </h2>
        </div>

        {/* Problem / Solution cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-14">
          {/* Problem */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--terracotta)" }}
            >
              The Problem
            </p>
            <p className="text-base leading-relaxed text-ink-soft">
              Students at African universities face delays and fragmented access
              to academic and administrative support — leading to information
              inequality, disengagement, and missed opportunities.
            </p>
          </div>

          {/* Solution */}
          <div
            className="rounded-2xl border p-8"
            style={{ backgroundColor: "var(--ink)", borderColor: "var(--ink)", color: "var(--paper)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--terracotta)" }}
            >
              The Solution
            </p>
            <p className="text-base leading-relaxed" style={{ color: "oklch(0.985 0.008 80 / 0.75)" }}>
              An AI-powered platform delivering seamless resource library and
              career opportunities to universities and students in Rwanda, under
              the umbrella of Student Companion AI.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex gap-5">
            <span
              className="mt-0.5 flex-shrink-0 text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--terracotta)" }}
            >
              Mission
            </span>
            <p className="text-base leading-relaxed text-foreground">
              To revolutionize student support across institutions in Rwanda and
              the continent, using AI-driven solutions that deliver instant
              assistance, deepen engagement, and improve student success.
            </p>
          </div>
          <div className="flex gap-5">
            <span
              className="mt-0.5 flex-shrink-0 text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--terracotta)" }}
            >
              Vision
            </span>
            <p className="text-base leading-relaxed text-foreground">
              To be the leading AI-powered student support platform in Africa —
              empowering learners through accessible resources, personalized
              guidance, and transformative learning experiences.
            </p>
          </div>
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
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
          <span className="section-label">Products &amp; Services</span>
        </div>
        <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-tight max-w-xl">
          Two ways we help students succeed.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Career Services */}
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
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "var(--terracotta)" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Support Platform */}
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
            handbooks, academic calendars, policies. It answers from the source,
            cites the page, and escalates to a human when it should.
          </p>
          <ul className="mt-auto space-y-3">
            {[
              "Answers from your institution's own documents",
              "Cites chapter and section for every response",
              "Escalates edge cases to staff — never guesses",
              "Available 24 / 7, no booking required",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "oklch(0.985 0.008 80 / 0.7)" }}>
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "var(--terracotta)" }} />
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

      {/* How it works */}
      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {[
          { n: "01", title: "Connect your documents", body: "A handbook and an academic calendar. Setup takes about a day on our side." },
          { n: "02", title: "Students ask, it answers", body: "Plain-language questions. Answers with the source cited so students can verify before acting." },
          { n: "03", title: "Edge cases go to humans", body: "Appeals, personal circumstances, anything policy can't cover — escalated, not guessed at." },
        ].map(({ n, title, body }) => (
          <div key={n} className="flex gap-5">
            <span className="mt-0.5 flex-shrink-0 font-display text-sm font-semibold" style={{ color: "var(--terracotta)" }}>{n}</span>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
              <p className="text-sm leading-relaxed text-ink-soft">{body}</p>
            </div>
          </div>
        ))}
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
    blurb: "Vision, partnerships & overall strategy across all phases.",
    photo: teamAndrew,
  },
  {
    name: "Dieudonne Ngum",
    role: "Technical Development Lead",
    meta: "BSc (Hons) Software Engineering",
    blurb: "AI model development, system integration & platform maintenance.",
    photo: teamNgum,
  },
  {
    name: "Marvin Mayonga Ogore",
    role: "Technical Supervisory Coach",
    meta: "Machine Learning Coach",
    blurb: "Strategic oversight, academic alignment & quality assurance.",
    photo: teamMarvin,
  },
  {
    name: "Nuake Justice Tsekpo Jr",
    role: "Growth & Insights Lead",
    meta: "Growth & Market Research",
    blurb: "Drives market research and data collection.",
    photo: teamNuake,
  },
  {
    name: "Deborah Isimibi",
    role: "Voice & Experience Assistant",
    meta: "Student Experience",
    blurb: "Voices Student Companion's AI audio and voice persona.",
    photo: teamDeborah,
  },
  {
    name: "Gilbert Muramirabagabo",
    role: "Cloud Architecture & Cybersecurity Support",
    meta: "Cloud & Security",
    blurb: "Cloud Architecture Engineer & Cybersecurity Support.",
    photo: teamGilbert,
  },
];

function Team() {
  return (
    <section
      id="team"
      ref={setRef("team")}
      className="border-t border-border"
      style={{ backgroundColor: "var(--sand)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
            <span className="section-label">Meet the Team</span>
          </div>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-tight max-w-xl">
            Who's who.
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
              <div className="aspect-[4/3] overflow-hidden" style={{ backgroundColor: "var(--sand-deep)" }}>
                <img
                  src={m.photo}
                  alt={m.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="font-display text-xl leading-snug text-foreground">{m.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--terracotta)" }}>
                  {m.role}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{m.meta}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{m.blurb}</p>
              </div>
            </div>
          ))}
        </div>
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
              Get in touch with{" "}
              <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
                our team.
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed" style={{ color: "oklch(0.985 0.008 80 / 0.6)" }}>
              A small team in Kigali reads every message. Expect a reply within a day or two.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: "var(--terracotta)" }} />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm transition-colors"
                  style={{ color: "oklch(0.985 0.008 80 / 0.7)" }}
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: "var(--terracotta)" }} />
                <span className="text-sm" style={{ color: "oklch(0.985 0.008 80 / 0.7)" }}>
                  Kigali, Rwanda — happy to work across timezones
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {SOCIAL.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-105"
                  style={{
                    borderColor: "oklch(0.985 0.008 80 / 0.2)",
                    color: "oklch(0.985 0.008 80 / 0.7)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--terracotta)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--terracotta)";
                    (e.currentTarget as HTMLElement).style.color = "var(--paper)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.985 0.008 80 / 0.2)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.985 0.008 80 / 0.7)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:gap-3"
                style={{ backgroundColor: "var(--terracotta)", color: "var(--paper)" }}
              >
                Email us <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={COMPANION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all hover:gap-3"
                style={{ borderColor: "oklch(0.985 0.008 80 / 0.2)", color: "var(--paper)" }}
              >
                Launch Companion <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right — how the call goes */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.985 0.008 80 / 0.35)" }}>
              How we work together
            </p>
            <div className="space-y-0">
              {[
                { n: "01", title: "You bring the hard questions", body: "The ones your front desk answers twenty times a week, and one nobody can ever find the answer to." },
                { n: "02", title: "We point it at your documents", body: "Usually a handbook and an academic calendar. This part takes about a day on our side." },
                { n: "03", title: "You try to break it", body: "If it makes something up, we want to see that happen in the demo rather than in March." },
                { n: "04", title: "Costs, in writing", body: "What it takes to run per year, what we'd need from your IT team, and what we can't do yet." },
              ].map(({ n, title, body }) => (
                <div key={n} className="flex gap-6 border-b py-6 last:border-0" style={{ borderColor: "oklch(0.985 0.008 80 / 0.08)" }}>
                  <span className="flex-shrink-0 font-display text-sm font-semibold" style={{ color: "var(--terracotta)" }}>{n}</span>
                  <div>
                    <p className="text-sm font-semibold text-paper mb-1">{title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.985 0.008 80 / 0.5)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs" style={{ color: "oklch(0.985 0.008 80 / 0.3)" }}>
              Typically runs 30 minutes. Kigali time, but we'll work around your timezone.
            </p>
          </div>
        </div>
      </div>

      {/* Partner logos */}
      <div className="border-t" style={{ borderColor: "oklch(0.985 0.008 80 / 0.1)" }}>
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.985 0.008 80 / 0.35)" }}>
            Our Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <img
              src={partnerCloudvisor}
              alt="Cloudvisor powered by AWS"
              className="h-10 object-contain opacity-70 transition-opacity hover:opacity-100"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t" style={{ borderColor: "oklch(0.985 0.008 80 / 0.1)" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-6 sm:flex-row sm:items-center lg:px-10">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Student Companion AI" className="h-9 w-9 rounded-xl object-cover opacity-90" />
            <span className="text-sm" style={{ color: "oklch(0.985 0.008 80 / 0.5)" }}>
              Student Companion AI
            </span>
          </div>
          <div className="flex items-center gap-6">
            {/* Social icons in footer too */}
            <div className="flex gap-2">
              {SOCIAL.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:text-paper"
                  style={{ color: "oklch(0.985 0.008 80 / 0.4)" }}
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-xs" style={{ color: "oklch(0.985 0.008 80 / 0.3)" }}>
              © 2026 Student Companion AI · Made in Kigali.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ────────────────────────────────────────────────────────────────── */

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavWired />
      <Home />
      <About />
      <Services />
      <Team />
      <Contact />
    </main>
  );
}
