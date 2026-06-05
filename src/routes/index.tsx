import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  GraduationCap,
  Building2,
  Compass,
  CalendarDays,
  Users,
  ShieldCheck,
  PlayCircle,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import heroStudents from "@/assets/hero-students.jpg";
import studentPortrait from "@/assets/student-portrait.jpg";
import deskStill from "@/assets/desk-still-life.jpg";
import campus from "@/assets/campus.jpg";
import studentCover from "@/assets/student-cover.jpg";
import notebookFlatlay from "@/assets/notebook-flatlay.jpg";
import capAcademic from "@/assets/cap-academic.jpg";
import capCampus from "@/assets/cap-campus.jpg";
import capGrowth from "@/assets/cap-growth.jpg";
import capEvents from "@/assets/cap-events.jpg";
import capHuman from "@/assets/cap-human.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Student Companion AI — A warmer way to support every student" },
      {
        name: "description",
        content:
          "An elegant AI assistant giving every student academic, administrative and personal support — instantly, reliably, and at any hour.",
      },
      { property: "og:title", content: "Student Companion AI" },
      {
        property: "og:description",
        content:
          "A warm, intelligent assistant — built by students, for students. Ready to scale to any institution.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

/* ───────────────── Reusable bits ───────────────── */

function SectionTag({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

function PrimaryButton({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-all duration-300 hover:bg-clay hover:gap-3"
      style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
    </a>
  );
}

function GhostButton({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground hover:gap-3"
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

/* ───────────────── Nav ───────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["About", "#about"],
    ["Features", "#features"],
    ["Testimonials", "#testimonials"],
    ["Team", "#team"],
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full text-paper"
            style={{ backgroundColor: "var(--terracotta)" }}
          >
            <Sparkles className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg">Student Companion</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              AI Learning Assistant
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-ink-soft transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden text-sm text-ink-soft transition-colors hover:text-foreground md:inline"
          >
            Contact
          </a>
          <PrimaryButton href="#demo">Launch Companion</PrimaryButton>
        </div>
      </div>
    </header>
  );
}

/* ───────────────── Hero ───────────────── */

function Hero() {
  const rotating = ["companion.", "study buddy.", "campus guide.", "late-night hero."];
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 lg:pt-36"
      style={{
        backgroundImage:
          "radial-gradient(70% 55% at 50% 0%, oklch(0.92 0.05 60 / 0.55), transparent 70%)",
      }}
    >
      {/* Issue / date masthead */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between border-y border-foreground/15 py-3 text-[11px] uppercase tracking-[0.22em] text-ink-soft">
          <span>Volume 01 · The Companion Issue</span>
          <span className="hidden md:inline">A zine for student support</span>
          <span>Est. Kigali · Worldwide</span>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* LEFT — big editorial type */}
          <div className="relative col-span-12 lg:col-span-7 fade-up">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-10"
                style={{ backgroundColor: "var(--terracotta)" }}
              />
              <span className="section-label">
                AI student support · built for every campus
              </span>
            </div>

            <h1 className="mt-6 text-[clamp(3rem,9vw,8.5rem)] leading-[0.88] tracking-[-0.02em]">
              Your
              <br />
              student
              <br />
              <span className="relative inline-block align-baseline">
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-2 h-3 -z-0"
                  style={{
                    background:
                      "linear-gradient(transparent 55%, oklch(0.92 0.13 70 / 0.7) 55%)",
                  }}
                />
                <span
                  className="relative serif-italic"
                  style={{ color: "var(--terracotta)" }}
                >
                  {/* rotating word */}
                  <span className="relative inline-block h-[1em] overflow-hidden align-bottom">
                    <span className="invisible">{rotating[0]}</span>
                    {rotating.map((w, i) => (
                      <span
                        key={w}
                        className="absolute inset-0"
                        style={{
                          animation: `wordFlip${i === 0 ? "" : i + 1} 9s ${
                            (i * 0) | 0
                          }s infinite`,
                        }}
                      >
                        {w}
                      </span>
                    ))}
                  </span>
                </span>
              </span>
            </h1>

            {/* hand-drawn underline svg */}
            <svg
              aria-hidden
              viewBox="0 0 320 18"
              className="-mt-1 h-4 w-56"
              fill="none"
            >
              <path
                d="M2 12 C 80 2, 160 18, 318 6"
                stroke="var(--terracotta)"
                strokeWidth="3"
                strokeLinecap="round"
                className="draw-underline"
              />
            </svg>

            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft">
              A warm, intelligent assistant that gives every student academic,
              administrative and personal support —{" "}
              <em className="serif-italic" style={{ color: "var(--ink)" }}>
                instantly, reliably, at any hour.
              </em>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton href="#demo">Launch Companion</PrimaryButton>
              <GhostButton href="#about">See how it works</GhostButton>
            </div>

            {/* footnote row */}
            <div className="mt-12 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {["D", "S", "C", "A"].map((c, i) => (
                  <span
                    key={c}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-paper font-display text-sm"
                    style={{
                      backgroundColor: ["var(--sand-deep)", "var(--sage)", "var(--terracotta)", "var(--butter)"][i],
                      color: "var(--ink)",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <span>
                Loved by students at <strong className="text-foreground">12+</strong> institutions
              </span>
            </div>
          </div>

          {/* RIGHT — magazine collage */}
          <div className="relative col-span-12 lg:col-span-5">
            {/* big issue number */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-6 -top-10 select-none font-display text-[14rem] leading-none opacity-10"
              style={{ color: "var(--terracotta)" }}
            >
              01
            </div>

            {/* cover photo with tape */}
            <div className="relative mx-auto w-full max-w-md rotate-[1.2deg]">
              <span className="tape -top-3 left-8 -rotate-6" />
              <span className="tape -top-3 right-10 rotate-6" />
              <div
                className="overflow-hidden rounded-[4px] border border-border bg-card p-3 shadow-[0_30px_70px_-30px_oklch(0.3_0.05_60/0.45)]"
              >
                <img
                  src={studentCover}
                  alt="A smiling student holding books and a laptop"
                  width={1100}
                  height={1400}
                  className="h-[440px] w-full object-cover lg:h-[520px]"
                />
                <div className="flex items-center justify-between pt-3 text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                  <span>Cover · Spring</span>
                  <span>№ 001</span>
                </div>
              </div>
            </div>

            {/* sticky note */}
            <div className="sticky-note absolute -left-2 top-10 max-w-[200px] -rotate-[6deg] hidden md:block">
              “Like a brilliant friend on every student's shoulder.”
              <div className="hand mt-2 text-xs opacity-60">— deborah, undergrad</div>
            </div>

            {/* 24/7 chip */}
            <div
              className="absolute -bottom-4 right-0 flex items-center gap-3 rounded-full px-5 py-3 shadow-lg rotate-[-3deg]"
              style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--terracotta)" }}
              >
                <Sparkles className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="font-display text-xl">24/7</div>
                <div className="text-[10px] uppercase tracking-[0.18em] opacity-60">
                  always on
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Marquee ───────────────── */

function Marquee() {
  const items = [
    "Academic Q&A",
    "★",
    "Course navigation",
    "★",
    "Scholarships & deadlines",
    "★",
    "Career advice",
    "★",
    "Admissions help",
    "★",
    "Campus services",
    "★",
    "Mentorship",
    "★",
    "Always on, 24/7",
    "★",
  ];
  const row = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden border-y py-5"
      style={{ backgroundColor: "var(--ink)", borderColor: "var(--ink)" }}
    >
      <div className="marquee-track">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-4xl"
            style={{
              color:
                t === "★" ? "var(--terracotta)" : "var(--paper)",
              fontStyle: t === "★" ? "normal" : "italic",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────────────── About ───────────────── */

function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-10 select-none font-display text-[16rem] leading-none opacity-[0.06]"
        style={{ color: "var(--terracotta)" }}
      >
        01
      </div>

      <div className="mb-14 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
          <SectionTag>Chapter 01 · About</SectionTag>
        </div>
        <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] tracking-tight">
          A <span className="serif-italic">warmer</span> way to support{" "}
          <span className="relative inline-block">
            every student.
            <svg aria-hidden viewBox="0 0 340 14" className="absolute -bottom-2 left-0 h-3 w-full" fill="none">
              <path d="M4 9 C 90 2, 200 14, 336 5" stroke="var(--terracotta)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </h2>
      </div>

      <div className="relative grid grid-cols-12 gap-8 lg:gap-12">
        <div className="col-span-12 space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-7">
          <p className="text-2xl leading-snug text-foreground font-display">
            Student Companion AI is an elegant, AI-driven platform that elevates
            the student experience across universities, colleges and schools.
          </p>
          <p>
            It delivers instant academic and administrative assistance — helping
            students find information, connect with departments, and access
            resources with ease.
          </p>
          <p>
            By integrating securely with each institution's systems, it offers
            context-aware support — reducing staff pressure while making every
            learner feel <em className="serif-italic" style={{ color: "var(--terracotta)" }}>genuinely looked after.</em>
          </p>

          <div className="grid grid-cols-3 gap-4 pt-8">
            {[
              ["Faster", "Answers", "var(--terracotta)"],
              ["Lower", "Staff load", "var(--sage)"],
              ["Happier", "Students", "var(--butter)"],
            ].map(([a, b, c]) => (
              <div key={a} className="relative">
                <span
                  className="absolute -left-1 top-0 h-full w-1 rounded-full"
                  style={{ backgroundColor: c }}
                />
                <div className="pl-4">
                  <div className="font-display text-3xl text-foreground">{a}</div>
                  <div className="text-sm text-muted-foreground">{b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative col-span-12 lg:col-span-5">
          {/* Polaroid */}
          <div className="relative mx-auto w-full max-w-sm -rotate-[2deg]">
            <span className="tape -top-3 left-10 -rotate-6" />
            <div className="bg-card border border-border p-3 shadow-[0_30px_70px_-30px_oklch(0.3_0.05_60/0.45)]">
              <img
                src={studentPortrait}
                alt="A student smiling while using the Student Companion AI"
                width={1000}
                height={1200}
                loading="lazy"
                className="h-[460px] w-full object-cover"
              />
              <div className="pt-3 text-center font-hand text-xl" style={{ fontFamily: "var(--font-hand)" }}>
                — late-night study, saved.
              </div>
            </div>
          </div>

          {/* Sticky note */}
          <div className="sticky-note absolute -bottom-6 -left-2 max-w-[200px] rotate-[4deg] hidden md:block">
            warm. helpful.<br />never sleepy.
            <div className="hand mt-1 text-xs opacity-60">↗ that's the point</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Demo ───────────────── */

function Demo() {
  return (
    <section id="demo" className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="grid grid-cols-12 gap-8 lg:gap-12">
        {/* Left — narrative */}
        <div className="col-span-12 lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
            <SectionTag>Live demo · see it run</SectionTag>
          </div>
          <h3 className="mt-6 font-display text-[clamp(2.25rem,4vw,3.75rem)] leading-[1.02]">
            A chat that{" "}
            <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
              actually
            </span>{" "}
            gets it.
          </h3>
          <p className="mt-6 max-w-md text-base text-ink-soft">
            Quick course question? Department contact? A scholarship deadline
            that snuck up? Watch how Student Companion answers in seconds —
            with sources, warmth, and zero queue time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="#">Launch Companion</PrimaryButton>
            <GhostButton href="#contact">Schedule full demo</GhostButton>
          </div>

          {/* hand-drawn caption */}
          <div className="mt-10 flex items-start gap-3 text-ink-soft">
            <svg viewBox="0 0 50 60" className="h-12 w-12" fill="none">
              <path
                d="M5 5 C 20 25, 30 45, 42 55 M42 55 L 32 50 M42 55 L 40 44"
                stroke="var(--terracotta)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span className="hand text-xl" style={{ fontFamily: "var(--font-hand)" }}>
              try asking <em>“when is my essay due?”</em>
            </span>
          </div>
        </div>

        {/* Right — chat collage */}
        <div className="relative col-span-12 lg:col-span-7">
          {/* polaroid background */}
          <div className="relative ml-auto w-full max-w-xl rotate-[1.5deg]">
            <span className="tape -top-3 left-8 -rotate-6" />
            <span className="tape -top-3 right-12 rotate-6" />
            <div className="bg-card border border-border p-3 shadow-[0_30px_70px_-30px_oklch(0.3_0.05_60/0.4)]">
              <img
                src={notebookFlatlay}
                alt="A notebook with handwritten doodles, sticky notes and a cup of tea"
                width={1100}
                height={900}
                loading="lazy"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>

          {/* Floating chat bubble — student */}
          <div
            className="absolute -left-2 top-12 max-w-[240px] -rotate-[3deg] rounded-2xl rounded-bl-sm border border-border bg-paper px-4 py-3 shadow-lg"
          >
            <div className="text-[10px] uppercase tracking-[0.18em] text-ink-soft">
              student
            </div>
            <p className="mt-1 text-sm">
              hey companion, when is my essay due? 😅
            </p>
          </div>

          {/* Floating chat bubble — AI */}
          <div
            className="absolute -bottom-4 right-2 max-w-[260px] rotate-[2deg] rounded-2xl rounded-br-sm px-4 py-3 shadow-lg"
            style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
          >
            <div
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em]"
              style={{ color: "var(--terracotta)" }}
            >
              <Sparkles className="h-3 w-3" /> companion
            </div>
            <p className="mt-1 text-sm">
              Your <em className="serif-italic" style={{ color: "var(--sand-deep)" }}>ENT401</em> essay
              is due <strong>Friday 11:59pm</strong>. Want a rubric link?
            </p>
          </div>

          {/* stamp */}
          <div
            className="absolute -top-4 right-2 flex h-20 w-20 items-center justify-center rounded-full border-2 -rotate-12 text-center font-display text-xs uppercase tracking-[0.18em]"
            style={{ borderColor: "var(--terracotta)", color: "var(--terracotta)" }}
          >
            <span>
              Live<br />№001
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Why we exist ───────────────── */

function Mission() {
  const items = [
    {
      n: "M.",
      kicker: "our mission",
      head: "Elevate student support, everywhere.",
      body:
        "Revolutionize student support across institutions worldwide through AI-driven tools that improve accessibility, engagement and success.",
      bg: "var(--sand)",
      accent: "var(--terracotta)",
    },
    {
      n: "V.",
      kicker: "our vision",
      head: "The most trusted companion in education.",
      body:
        "To become the world's most trusted AI-powered student support platform — empowering learners through personalized guidance and transformative experiences.",
      bg: "var(--ink)",
      accent: "var(--sage)",
      dark: true,
    },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-14 flex items-end justify-between">
        <div className="flex items-center gap-3">
          <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
          <SectionTag>Chapter 03 · Why we exist</SectionTag>
        </div>
        <span className="hand text-xl text-ink-soft hidden md:inline" style={{ fontFamily: "var(--font-hand)" }}>
          read me twice ↓
        </span>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {items.map((it, i) => (
          <div
            key={it.n}
            className={`relative overflow-hidden rounded-[4px] p-10 lg:p-12 ${
              i === 1 ? "lg:translate-y-10" : ""
            }`}
            style={{ backgroundColor: it.bg, color: it.dark ? "var(--paper)" : "var(--ink)" }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-12 -right-6 select-none font-display text-[18rem] leading-none opacity-20"
              style={{ color: it.accent }}
            >
              {it.n}
            </span>
            <div className="relative">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.22em]"
                style={{
                  borderColor: it.dark ? "oklch(0.985 0.008 80 / 0.25)" : "var(--border)",
                  color: it.accent,
                }}
              >
                <span className="h-1 w-1 rounded-full" style={{ backgroundColor: it.accent }} />
                {it.kicker}
              </div>
              <h3 className="mt-8 font-display text-[clamp(2rem,3vw,3rem)] leading-[1.05]">
                {it.head}
              </h3>
              <p
                className="mt-6 max-w-md text-base leading-relaxed"
                style={{ color: it.dark ? "oklch(0.985 0.008 80 / 0.7)" : "var(--ink-soft)" }}
              >
                {it.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── Already built ───────────────── */

function AlreadyBuilt() {
  const cards = [
    {
      kicker: "Volume I",
      stamp: "Hosted on Poe",
      title: "Meet the live chatbot today.",
      body:
        "A live version of the chatbot is on Poe, where anyone can interact with core features.",
      features: ["Student Q&As", "Academic guidance", "Student-life support", "Admission info", "Career development"],
      cta: "Open on Poe",
      tilt: "-rotate-[1.5deg]",
      bg: "var(--sand)",
    },
    {
      kicker: "Volume II",
      stamp: "Institution-ready",
      title: "Your institution's secure home.",
      body:
        "An independent MVP built for secure data integration and hosting within each institution's infrastructure.",
      features: ["Institutional email only", "Google SSO", "Compliance-first", "Secure integration", "Built to scale"],
      cta: "Access MVP",
      tilt: "rotate-[1.5deg]",
      bg: "var(--card)",
      ink: true,
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
          <SectionTag>Already built · two volumes</SectionTag>
        </div>
        <h2 className="max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
          From idea to{" "}
          <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
            working product.
          </span>
        </h2>
        <p className="max-w-2xl text-lg text-ink-soft">
          To prove it works, we've shipped two live versions — one for public
          exploration, one for secure institutional use.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
        {cards.map((c, i) => (
          <div key={c.kicker} className={`relative ${c.tilt}`}>
            <span className="tape -top-3 left-12 -rotate-6" />
            <span className="tape -top-3 right-14 rotate-6" />
            <div
              className="relative border border-border p-8 shadow-[0_30px_70px_-30px_oklch(0.3_0.05_60/0.3)]"
              style={{ backgroundColor: c.bg }}
            >
              {/* postmark stamp */}
              <div
                className="absolute right-4 top-4 flex h-16 w-16 -rotate-[14deg] items-center justify-center rounded-full border-2 text-center font-display text-[9px] uppercase leading-tight tracking-[0.18em]"
                style={{ borderColor: "var(--terracotta)", color: "var(--terracotta)" }}
              >
                <span>{c.stamp}</span>
              </div>

              <span className="section-label">{c.kicker}</span>
              <h3 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
                {c.title}
              </h3>
              <p className="mt-4 max-w-md text-ink-soft">{c.body}</p>
              <ul className="mt-6 space-y-2 text-sm text-ink-soft">
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--terracotta)" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {i === 0 ? <GhostButton>{c.cta}</GhostButton> : <PrimaryButton>{c.cta}</PrimaryButton>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Security strip */}
      <div
        className="mt-16 flex flex-col items-start gap-4 rounded-[4px] border border-paper/15 p-8 md:flex-row md:items-center md:justify-between"
        style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
      >
        <div className="flex items-start gap-4">
          <ShieldCheck className="mt-1 h-6 w-6" style={{ color: "var(--terracotta)" }} />
          <div>
            <h4 className="font-display text-2xl">Security & compliance</h4>
            <p className="mt-1 max-w-2xl text-sm opacity-70">
              Access restricted to verified institutional email domains with
              Google SSO — the highest standards for student data.
            </p>
          </div>
        </div>
        <div className="hand text-xl" style={{ fontFamily: "var(--font-hand)", color: "var(--sand-deep)" }}>
          ✓ stamped & sealed
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Features bento ───────────────── */

function Features() {
  const items = [
    {
      n: "01",
      icon: GraduationCap,
      title: "Academic Support",
      body: "Help with assignments, course navigation, and access to materials.",
      span: "lg:col-span-5 lg:row-span-2",
      dark: true,
      image: capAcademic,
    },
    {
      n: "02",
      icon: Building2,
      title: "Campus Services",
      body: "Connect with departments, schedule appointments, and request assistance.",
      span: "lg:col-span-4",
      image: capCampus,
    },
    {
      n: "03",
      icon: Compass,
      title: "Personal Growth",
      body: "Career advice, skills development, and mentorship opportunities.",
      span: "lg:col-span-3",
      image: capGrowth,
    },
    {
      n: "04",
      icon: CalendarDays,
      title: "Event Updates",
      body: "Deadlines, internships, scholarships and campus events — never miss a moment.",
      span: "lg:col-span-3",
      image: capEvents,
    },
    {
      n: "05",
      icon: Users,
      title: "Human Assistance",
      body: "Switch seamlessly from AI to live staff whenever the moment calls for it.",
      span: "lg:col-span-4",
      image: capHuman,
    },
  ];

  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 select-none font-display text-[14rem] leading-none opacity-[0.05]"
        style={{ color: "var(--terracotta)" }}
      >
        02
      </div>
      <div className="relative mb-14 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
          <SectionTag>Chapter 02 · Capabilities</SectionTag>
        </div>
        <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
          Everything a student needs,{" "}
          <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
            in one companion.
          </span>
        </h2>
        <p className="hand max-w-md text-xl text-ink-soft" style={{ fontFamily: "var(--font-hand)" }}>
          like a swiss army knife, but warmer ✿
        </p>
      </div>

      <div className="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
        {items.map(({ n, icon: Icon, title, body, span, dark, image }) => (
          <div
            key={n}
            className={`group relative bento-card bento-card-hover col-span-12 flex flex-col justify-between overflow-hidden ${span}`}
            style={
              dark
                ? { backgroundColor: "var(--ink)", color: "var(--paper)" }
                : undefined
            }
          >
            {/* background photo */}
            {image && (
              <>
                <img
                  src={image}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-700 group-hover:opacity-55 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: dark
                      ? "linear-gradient(180deg, color-mix(in oklab, var(--ink) 55%, transparent) 0%, color-mix(in oklab, var(--ink) 88%, transparent) 65%, var(--ink) 100%)"
                      : "linear-gradient(180deg, color-mix(in oklab, var(--paper) 35%, transparent) 0%, color-mix(in oklab, var(--paper) 82%, transparent) 60%, var(--paper) 100%)",
                  }}
                />
              </>
            )}
            {/* corner stamp */}
            <div
              className="relative z-10 absolute right-5 top-5 font-display text-sm"
              style={{ color: dark ? "var(--terracotta)" : "var(--terracotta)" }}
            >
              № {n}
            </div>
            <div className="relative z-10 flex items-start justify-between">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  dark ? "" : ""
                }`}
                style={{
                  backgroundColor: dark ? "var(--terracotta)" : "var(--sand)",
                }}
              >
                <Icon
                  className="h-5 w-5"
                  style={{ color: dark ? "var(--paper)" : "var(--terracotta)" }}
                />
              </span>
            </div>
            <div className="relative z-10 mt-10">
              <h3 className="font-display text-2xl leading-snug lg:text-3xl">
                {title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: dark ? "oklch(0.985 0.008 80 / 0.7)" : "var(--ink-soft)" }}
              >
                {body}
              </p>
            </div>
          </div>
        ))}

        <div
          className="relative bento-card col-span-12 flex flex-col justify-between lg:col-span-5 lg:row-span-1"
          style={{ backgroundColor: "var(--butter)" }}
        >
          <div
            className="absolute -right-3 -top-3 -rotate-[8deg] rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-paper"
            style={{ backgroundColor: "var(--terracotta)" }}
          >
            For every campus
          </div>
          <p className="font-display text-2xl leading-snug text-ink lg:text-3xl">
            Universities. Colleges. High schools. <em className="serif-italic" style={{ color: "var(--terracotta)" }}>Student Companion</em> adapts to your programs, policies and tone of voice.
          </p>
          <div className="mt-6">
            <PrimaryButton href="#contact">Talk to our team</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Value ───────────────── */

function Value() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-14 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
          <SectionTag>Chapter 04 · Value</SectionTag>
        </div>
        <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
          Good for{" "}
          <span className="serif-italic" style={{ color: "var(--terracotta)" }}>institutions.</span>
          <br />
          Great for{" "}
          <span className="serif-italic" style={{ color: "var(--sage)" }}>students.</span>
        </h2>
      </div>

      {/* Two-column spread like an open book */}
      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
        {/* center spine */}
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block" style={{ backgroundColor: "var(--border)" }} />

        <div className="relative lg:pr-12">
          <div className="flex items-baseline justify-between border-b border-border pb-3">
            <span className="section-label">For institutions</span>
            <span className="font-display text-3xl" style={{ color: "var(--terracotta)" }}>I.</span>
          </div>
          <h3 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
            Transform how you support learners.
          </h3>
          <ol className="mt-8 space-y-6 text-base text-ink-soft">
            {[
              "Automates repetitive student inquiries, freeing staff for higher-value work.",
              "Generates data-driven insights on student engagement and service gaps.",
              "Strengthens reputation as a digitally advanced, student-centered institution.",
            ].map((t, i) => (
              <li key={t} className="flex gap-4">
                <span className="font-display text-2xl leading-none" style={{ color: "var(--terracotta)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative lg:pl-12">
          <div className="flex items-baseline justify-between border-b border-border pb-3">
            <span className="section-label">For students</span>
            <span className="font-display text-3xl" style={{ color: "var(--sage)" }}>II.</span>
          </div>
          <h3 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
            Empowering academic <span className="serif-italic">success.</span>
          </h3>
          <ol className="mt-8 space-y-6 text-base text-ink-soft">
            {[
              "24/7 access to academic and administrative support.",
              "Instant answers about courses, policies and deadlines.",
              "Personalized learning guidance and career insights.",
            ].map((t, i) => (
              <li key={t} className="flex gap-4">
                <span className="font-display text-2xl leading-none" style={{ color: "var(--sage)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ol>

          <div className="sticky-note mt-10 inline-block max-w-[220px] -rotate-[3deg]">
            free for every student.<br />always.
            <div className="hand mt-1 text-xs opacity-60">↗ no catch</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Testimonials ───────────────── */

function Testimonials() {
  const quotes = [
    {
      quote:
        "The AI chatbot is very helpful and has saved me on countless occasions when I needed clarifications about my academics.",
      name: "Deborah Isimbi",
      role: "Undergraduate Student",
    },
    {
      quote:
        "The chatbot saved me time by curating all my information in one response — originally I would have gone through a long process of asking colleagues and waiting for a reply.",
      name: "Sonia Teta",
      role: "Undergraduate Student",
    },
    {
      quote: "Very useful and helpful, and saves me time. It's a very recommendable tool.",
      name: "Conzana Mangati",
      role: "Undergraduate Student",
    },
  ];

  return (
    <section id="testimonials" className="relative mx-auto max-w-7xl px-6 pb-32 lg:px-10 lg:pb-40">
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
          <SectionTag>Chapter 05 · In their words</SectionTag>
        </div>
        <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
          What students{" "}
          <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
            actually
          </span>{" "}
          say.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
        {quotes.map((q, i) => {
          const tilt = [-2.5, 1.5, -1.5][i];
          const bg = ["var(--card)", "var(--butter)", "var(--card)"][i];
          return (
            <figure
              key={q.name}
              className={`relative ${i === 1 ? "md:translate-y-10" : ""}`}
              style={{ transform: `rotate(${tilt}deg)` }}
            >
              <span className="tape -top-3 left-10 -rotate-6" />
              <div
                className="flex h-full flex-col justify-between border border-border p-6 shadow-[0_30px_60px_-30px_oklch(0.3_0.05_60/0.4)]"
                style={{ backgroundColor: bg }}
              >
                <div
                  className="font-display text-7xl leading-none"
                  style={{ color: "var(--terracotta)" }}
                >
                  &ldquo;
                </div>
                <blockquote className="mt-2 font-display text-xl leading-snug text-foreground">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-4">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full font-display text-lg"
                    style={{
                      backgroundColor: ["var(--terracotta)", "var(--sage)", "var(--sand-deep)"][i],
                      color: i === 1 ? "var(--ink)" : "var(--paper)",
                    }}
                  >
                    {q.name[0]}
                  </span>
                  <div>
                    <div className="hand text-lg" style={{ fontFamily: "var(--font-hand)" }}>
                      {q.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {q.role}
                    </div>
                  </div>
                </figcaption>
              </div>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

/* ───────────────── CTA banner ───────────────── */

function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div
        className="relative overflow-hidden px-8 py-20 text-center md:px-16 md:py-28"
        style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
      >
        <img
          src={campus}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        {/* postmark */}
        <div
          className="absolute right-6 top-6 hidden h-28 w-28 -rotate-[14deg] flex-col items-center justify-center rounded-full border-2 text-center font-display text-[10px] uppercase tracking-[0.18em] md:flex"
          style={{ borderColor: "var(--terracotta)", color: "var(--terracotta)" }}
        >
          <span>Special</span>
          <span>Edition</span>
          <span className="mt-1">2026</span>
        </div>
        <div className="relative">
          <span className="section-label" style={{ color: "var(--terracotta)" }}>
            ✦ Ready to transform your campus?
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02]">
            Join the future of{" "}
            <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
              student support.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base opacity-75">
            Always-on AI support, reduced administrative burden, and improved
            engagement across your whole institution.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:gap-3"
              style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}
            >
              Launch Companion <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-medium transition-all hover:border-paper hover:gap-3"
            >
              Book a meeting <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <p
            className="hand mx-auto mt-8 max-w-md text-xl opacity-80"
            style={{ fontFamily: "var(--font-hand)", color: "var(--sand-deep)" }}
          >
            p.s. we reply within 24 hours. always.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Team ───────────────── */

function Team() {
  const team = [
    {
      name: "Andrew Steven Boima",
      role: "Founder & Project Lead",
      meta: "BSc (Hons) Entrepreneurial Leadership",
      blurb: "Leads project vision, strategy, and partnerships.",
    },
    {
      name: "Dieudonne Ngum",
      role: "Technical Development Lead",
      meta: "BSc (Hons) Software Engineering",
      blurb: "Oversees AI model design and system integration.",
    },
    {
      name: "Marvin Mayonga Ogore",
      role: "Technical Supervisory Coach",
      meta: "Machine Learning Coach",
      blurb: "Provides technical guidance and quality assurance.",
    },
    {
      name: "Henry Chukwudi John",
      role: "Stakeholder Engagement Lead",
      meta: "Library & Information Services",
      blurb: "Manages institutional relations and engagement strategy.",
    },
    {
      name: "Ogbonna Ozioma Ikenna",
      role: "Customer Success & Implementation Lead",
      meta: "Customer Success",
      blurb: "Leads customer success initiatives and implementation.",
    },
  ];

  return (
    <section id="team" className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
          <SectionTag>Chapter 07 · The makers</SectionTag>
        </div>
        <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
          Built by people who{" "}
          <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
            care
          </span>{" "}
          about students.
        </h2>
        <p className="hand max-w-md text-xl text-ink-soft" style={{ fontFamily: "var(--font-hand)" }}>
          ✿ a class photo, of sorts
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {team.map((m, i) => {
          const tilts = [-2, 1.5, -1, 2, -1.5];
          const bgs = ["var(--terracotta)", "var(--sage)", "var(--sand-deep)", "var(--butter)", "var(--terracotta)"];
          const fg = i === 3 ? "var(--ink)" : "var(--paper)";
          return (
            <div key={m.name} className="relative" style={{ transform: `rotate(${tilts[i]}deg)` }}>
              <span className="tape -top-3 left-10 -rotate-6" />
              <div
                className="border border-border bg-card p-3 shadow-[0_30px_60px_-30px_oklch(0.3_0.05_60/0.4)]"
              >
                {/* "photo" tile — initials */}
                <div
                  className="flex aspect-[4/5] items-center justify-center"
                  style={{ backgroundColor: bgs[i] }}
                >
                  <span
                    className="font-display text-8xl"
                    style={{ color: i === 3 ? "var(--ink)" : "var(--paper)" }}
                  >
                    {m.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
                {/* caption */}
                <div className="pt-3">
                  <div className="hand text-2xl leading-tight" style={{ fontFamily: "var(--font-hand)" }}>
                    {m.name}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                    {m.role}
                  </div>
                  <div className="mt-3 border-t border-border pt-3 text-xs text-muted-foreground">
                    {m.meta}
                  </div>
                  <p className="mt-2 text-sm text-ink-soft">{m.blurb}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* sign-off card */}
        <div className="relative flex items-center justify-center p-8">
          <div className="text-center">
            <div className="font-display text-7xl" style={{ color: "var(--terracotta)" }}>+5</div>
            <p className="mt-2 max-w-[200px] text-sm text-ink-soft">
              years of student-life experience between us.
            </p>
            <p className="hand mt-4 text-xl" style={{ fontFamily: "var(--font-hand)" }}>
              and still counting ✿
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Contact ───────────────── */

function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
          <SectionTag>Say hello · finis</SectionTag>
        </div>
        <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
          Let's talk about your institution's{" "}
          <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
            future.
          </span>
        </h2>
        <p className="max-w-2xl text-lg text-ink-soft">
          Book a personalized demo or consultation. We'll show you how Student
          Companion can transform your support services.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* What to expect — receipt */}
        <div className="col-span-12 lg:col-span-7">
          <div className="relative border border-border bg-card p-8 lg:p-10">
            <div className="absolute -top-3 left-8 -rotate-3 rounded-sm px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-paper" style={{ backgroundColor: "var(--terracotta)" }}>
              Your ticket
            </div>
            <div className="flex items-center justify-between border-b border-dashed border-foreground/30 pb-4">
              <span className="section-label">What to expect</span>
              <span className="font-display text-sm" style={{ color: "var(--terracotta)" }}>
                № 001 · admit one
              </span>
            </div>
            <ol className="mt-6 divide-y divide-dashed divide-foreground/15">
              {[
                ["01", "Personalized demo", "See how our AI works with your specific use cases and requirements."],
                ["02", "Expert consultation", "Get answers to all your questions from our experienced team."],
                ["03", "Custom proposal", "A tailored implementation plan and pricing for your institution."],
              ].map(([n, t, b]) => (
                <li key={t} className="flex items-start gap-6 py-5">
                  <span className="font-display text-3xl" style={{ color: "var(--terracotta)" }}>
                    {n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl">{t}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex items-center justify-between border-t border-dashed border-foreground/30 pt-4 text-xs text-muted-foreground">
              <span>kigali · serving worldwide</span>
              <span className="hand text-lg" style={{ fontFamily: "var(--font-hand)" }}>
                ✓ confirmed
              </span>
            </div>
          </div>
        </div>

        {/* Schedule card */}
        <div
          className="relative col-span-12 flex flex-col justify-between border border-paper/10 p-8 lg:col-span-5 lg:p-10"
          style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
        >
          <div
            className="absolute -right-3 -top-3 -rotate-[8deg] rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em]"
            style={{ backgroundColor: "var(--terracotta)", color: "var(--paper)" }}
          >
            Free · 15–30 min
          </div>
          <div>
            <span className="section-label" style={{ color: "var(--terracotta)" }}>
              Schedule a meeting
            </span>
            <h3 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
              Pick a time that{" "}
              <span className="serif-italic" style={{ color: "var(--sand-deep)" }}>
                works for you.
              </span>
            </h3>
            <ul className="mt-6 space-y-3 text-sm opacity-80">
              <li className="flex gap-3"><span style={{ color: "var(--terracotta)" }}>✦</span> 15–30 minute sessions</li>
              <li className="flex gap-3"><span style={{ color: "var(--terracotta)" }}>✦</span> Instant confirmation</li>
              <li className="flex gap-3"><span style={{ color: "var(--terracotta)" }}>✦</span> Automatic calendar invites</li>
            </ul>
          </div>
          <a
            href="#"
            className="mt-10 inline-flex items-center justify-between gap-2 rounded-full px-6 py-4 text-sm font-medium transition-all hover:gap-3"
            style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}
          >
            Schedule on Calendly <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Newsletter + contact info */}
        <div className="relative col-span-12 border border-border bg-card p-8 lg:col-span-7">
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl" style={{ color: "var(--terracotta)" }}>✉</span>
            <span className="section-label">Stay in the loop</span>
          </div>
          <h3 className="mt-4 font-display text-2xl md:text-3xl">
            Dispatches from the{" "}
            <span className="serif-italic" style={{ color: "var(--terracotta)" }}>companion</span> newsroom.
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm outline-none transition-colors focus:border-foreground"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:gap-3"
              style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
            >
              Subscribe <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>

        <div
          className="relative col-span-12 flex flex-col justify-between gap-6 border border-border p-8 lg:col-span-5"
          style={{ backgroundColor: "var(--sand)" }}
        >
          <div
            className="absolute -top-3 left-8 -rotate-3 rounded-sm px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-paper"
            style={{ backgroundColor: "var(--ink)" }}
          >
            Return address
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4" style={{ color: "var(--clay)" }} />
              <div>
                <div className="section-label">Email</div>
                <a
                  href="mailto:studentcompanionai@gmail.com"
                  className="font-display text-xl text-foreground hover:text-clay"
                >
                  studentcompanionai@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4" style={{ color: "var(--clay)" }} />
              <div>
                <div className="section-label">Location</div>
                <div className="font-display text-xl">
                  Kigali, Rwanda
                </div>
                <div className="text-sm text-ink-soft">
                  Serving institutions worldwide
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-paper transition-colors hover:bg-foreground hover:text-paper"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Footer ───────────────── */

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center lg:px-10">
        <div className="flex items-center gap-3">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
          >
            <Sparkles className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg">Student Companion</div>
            <div className="text-xs text-muted-foreground">
              Empowering student success
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 Student Companion AI. Built with care for students and
          institutions everywhere.
        </p>
      </div>
    </footer>
  );
}

/* ───────────────── Page ───────────────── */

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Demo />
      <Mission />
      <AlreadyBuilt />
      <Features />
      <Value />
      <Testimonials />
      <CTABanner />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
