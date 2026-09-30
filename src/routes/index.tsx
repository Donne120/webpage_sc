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
  PlayCircle,
  Mail,
  MapPin,
  Linkedin,
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
import teamAndrew from "@/assets/Andrew.png";
import teamNgum from "@/assets/Ngum.png";
import teamMarvin from "@/assets/02.-marvin (1).jpg";
import teamHenry from "@/assets/Henry Chukwudi.jpeg";
import teamOzioma from "@/assets/Ozioma Ikenna.webp";
import logoImg from "@/assets/logo (3).png";

const BOOKING_URL =
  "https://calendar.zoho.com/zc/view/slot-booking/zz080112208b34be761ee5eb780e0eaee02becd4e5f631653127149a0b00f33b5f2fe2f907";

const COMPANION_URL = "https://chat.studentcompanionai.rw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Student Companion — the campus questions nobody has time to answer" },
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

/* ───────────────── Reusable bits ───────────────── */

function SectionTag({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

function PrimaryButton({
  children,
  href = "#",
  external = false,
}: {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
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
  external = false,
}: {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
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
    ["Why", "#about"],
    ["What it handles", "#features"],
    ["Students", "#testimonials"],
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
          <img
            src={logoImg}
            alt="Student Companion AI logo"
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="leading-tight">
            <div className="font-display text-lg">Student Companion</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Kigali
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
          <PrimaryButton href={COMPANION_URL} external>Launch Companion</PrimaryButton>
        </div>
      </div>
    </header>
  );
}

/* ───────────────── Hero ───────────────── */

function Hero() {
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
          <span>Student Companion</span>
          <span className="hidden md:inline">Built at ALU</span>
          <span>Kigali, Rwanda</span>
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
                Nobody has read page 30 of the handbook
              </span>
            </div>

            <h1 className="mt-6 text-[clamp(2.75rem,7.5vw,7rem)] leading-[0.92] tracking-[-0.02em]">
              The answer
              <br />
              is in the
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
                  handbook.
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
              Ask it where the deferral form lives, or what your scholarship
              does if you drop a course. It reads your institution's actual
              policies and answers at{" "}
              <em className="serif-italic" style={{ color: "var(--ink)" }}>
                two in the morning,
              </em>{" "}
              when the registrar is closed.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton href={COMPANION_URL} external>Launch Companion</PrimaryButton>
              <GhostButton href="#about">See how it works</GhostButton>
            </div>

            {/* footnote row */}
            <div className="mt-12 max-w-sm border-l-2 pl-4 text-sm text-muted-foreground" style={{ borderColor: "var(--sand-deep)" }}>
              In daily use by students at{" "}
              <strong className="text-foreground">African Leadership University</strong>,
              Kigali. Talking to a few other campuses now.
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
                  <span>ALU campus</span>
                  <span>Kigali</span>
                </div>
              </div>
            </div>

            {/* sticky note */}
            <div className="sticky-note absolute -left-2 top-10 max-w-[210px] -rotate-[6deg] hidden md:block">
              “Saved me on countless occasions when I needed clarifications
              about my academics.”
              <div className="hand mt-2 text-xs opacity-60">
                — Deborah Isimbi, ALU
              </div>
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
                <div className="font-display text-xl">Cited</div>
                <div className="text-[10px] uppercase tracking-[0.18em] opacity-60">
                  every answer
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
    "where do I submit this",
    "★",
    "is the registrar open",
    "★",
    "what's the late penalty",
    "★",
    "can I still add a course",
    "★",
    "who do I email about this",
    "★",
    "when does the window close",
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
          It started because we were{" "}
          <span className="relative inline-block">
            tired of asking.
            <svg aria-hidden viewBox="0 0 340 14" className="absolute -bottom-2 left-0 h-3 w-full" fill="none">
              <path d="M4 9 C 90 2, 200 14, 336 5" stroke="var(--terracotta)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </h2>
      </div>

      <div className="relative grid grid-cols-12 gap-8 lg:gap-12">
        <div className="col-span-12 space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-7">
          <p className="text-2xl leading-snug text-foreground font-display">
            We're students at African Leadership University in Kigali. We kept
            losing afternoons to questions that should have taken thirty seconds.
          </p>
          <p>
            Where do I submit the deferral form. Is the registrar open today.
            What happens to my scholarship if I drop to three courses.
          </p>
          <p>
            The answers existed. They were in a PDF nobody could find, or in the
            head of one administrator already handling forty other students.
          </p>
          <p>
            So we built the thing we wanted. It connects to an institution's own
            systems and answers from those, not from guesswork. When it doesn't
            know, it says so and hands you to a human who does.
          </p>

          <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2">
            {[
              [
                "Answers from your systems",
                "Not scraped from the open web. It reads what your institution actually publishes.",
                "var(--terracotta)",
              ],
              [
                "It admits what it doesn't know",
                "No confident guessing on policy questions. Unclear cases go to a person.",
                "var(--sage)",
              ],
            ].map(([a, b, c]) => (
              <div key={a} className="relative">
                <span
                  className="absolute -left-1 top-0 h-full w-1 rounded-full"
                  style={{ backgroundColor: c }}
                />
                <div className="pl-4">
                  <div className="font-display text-xl leading-snug text-foreground">{a}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{b}</div>
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
                after the offices close
              </div>
            </div>
          </div>

          {/* Sticky note */}
          <div className="sticky-note absolute -bottom-6 -left-2 max-w-[210px] rotate-[4deg] hidden md:block">
            Nobody asks these during office hours.
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
            <SectionTag>A real exchange</SectionTag>
          </div>
          <h3 className="mt-6 font-display text-[clamp(2.25rem,4vw,3.75rem)] leading-[1.02]">
            It knows{" "}
            <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
              your
            </span>{" "}
            handbook.
          </h3>
          <p className="mt-6 max-w-md text-base text-ink-soft">
            A general-purpose chatbot will invent a plausible answer about your
            withdrawal policy. This one is reading the actual document, and it
            tells you which one.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href={COMPANION_URL} external>Launch Companion</PrimaryButton>
            <GhostButton href={BOOKING_URL} external>
              Book a demo session
            </GhostButton>
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
              try <em>“what happens if I withdraw after week 6?”</em>
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
              if i withdraw from ENT401 now does it still show on my transcript
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
              After week 4 it shows as{" "}
              <strong>W</strong> — no grade penalty, but it counts toward your
              attempt limit.{" "}
              <em className="serif-italic" style={{ color: "var(--sand-deep)" }}>
                Academic Policy §4.2
              </em>
            </p>
          </div>

          {/* stamp */}
          <div
            className="absolute -top-4 right-2 flex h-20 w-20 items-center justify-center rounded-full border-2 -rotate-12 text-center font-display text-xs uppercase tracking-[0.18em]"
            style={{ borderColor: "var(--terracotta)", color: "var(--terracotta)" }}
          >
            <span>
              Cites<br />sources
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
      kicker: "what we're doing",
      head: "Answer the question at 11pm, not Monday at 9.",
      body:
        "Most student questions are small and urgent. Which form, which office, which deadline. They pile up in inboxes and get answered days later, if at all. We built something that answers them the moment they're asked.",
      bg: "var(--sand)",
      accent: "var(--terracotta)",
    },
    {
      n: "V.",
      kicker: "where this goes",
      head: "Every campus should have one. Most can't afford to build it.",
      body:
        "A university doesn't need another dashboard. It needs the thing students already reach for to actually know the answer. We want Student Companion to be that — configured per institution, running on their policies, not ours.",
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
          <SectionTag>Chapter 03 · Why we built it</SectionTag>
        </div>
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

/* ───────────────── Features bento ───────────────── */

function Features() {
  const items = [
    {
      n: "01",
      icon: GraduationCap,
      title: "Coursework",
      body: "Where the reading list lives, what the rubric weights, whether the late penalty is per day or per hour. The things buried on page 30 of a module outline.",
      span: "lg:col-span-5 lg:row-span-2",
      dark: true,
      image: capAcademic,
    },
    {
      n: "02",
      icon: Building2,
      title: "Admin and offices",
      body: "Which office handles it, whether they're open, and what you need to bring.",
      span: "lg:col-span-4",
      image: capCampus,
    },
    {
      n: "03",
      icon: Compass,
      title: "After graduation",
      body: "Internship routes, CV feedback, which alumni work where.",
      span: "lg:col-span-3",
      image: capGrowth,
    },
    {
      n: "04",
      icon: CalendarDays,
      title: "Dates that move",
      body: "Scholarship cut-offs and registration windows, pulled from the live academic calendar rather than last year's PDF.",
      span: "lg:col-span-3",
      image: capEvents,
    },
    {
      n: "05",
      icon: Users,
      title: "Knowing when to stop",
      body: "Appeals, mental health, anything with a judgement in it. Routed to staff instead of answered.",
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
          <SectionTag>Chapter 02 · What it handles</SectionTag>
        </div>
        <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
          What students{" "}
          <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
            actually ask it.
          </span>
        </h2>
        <p className="max-w-lg text-base text-ink-soft">
          Five areas, in rough order of how often students actually use them.
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
            Configured per campus
          </div>
          <p className="font-display text-2xl leading-snug text-ink lg:text-3xl">
            None of this is hardcoded. It's read from whatever your institution
            already publishes —{" "}
            <em className="serif-italic" style={{ color: "var(--terracotta)" }}>
              handbooks, calendars, the intranet page nobody maintains.
            </em>
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
          <SectionTag>Chapter 04 · What changes</SectionTag>
        </div>
        <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
          Two sides of the same{" "}
          <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
            unanswered email.
          </span>
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
            Your staff stop answering the same six questions.
          </h3>
          <ol className="mt-8 space-y-6 text-base text-ink-soft">
            {[
              "The repetitive queue gets handled before it reaches a person. Deadlines, forms, office hours, eligibility.",
              "You find out what students keep asking about. Usually it points at a policy page nobody can find.",
              "Anything it can't answer from your own documents is escalated, not guessed at.",
              "It runs on your policies. When they change, you update the source, not the chatbot.",
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
            You stop waiting three days for a{" "}
            <span className="serif-italic">two-line answer.</span>
          </h3>
          <ol className="mt-8 space-y-6 text-base text-ink-soft">
            {[
              "Ask at any hour, in the middle of an assignment, without booking anything.",
              "It cites where the answer came from, so you can check it yourself before acting on it.",
              "Appeals and personal circumstances are judgement calls. Those it hands to a human.",
            ].map((t, i) => (
              <li key={t} className="flex gap-4">
                <span className="font-display text-2xl leading-none" style={{ color: "var(--sage)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ol>

          <div className="sticky-note mt-10 inline-block max-w-[240px] -rotate-[3deg]">
            Students never pay. The institution licenses it.
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
      role: "Undergraduate · ALU Kigali",
    },
    {
      quote:
        "The chatbot saved me time by curating all my information in one response — originally I would have gone through a long process of asking colleagues and waiting for a reply.",
      name: "Sonia Teta",
      role: "Undergraduate · ALU Kigali",
    },
    {
      quote: "Very useful and helpful, and saves me time. It's a very recommendable tool.",
      name: "Conzana Mangati",
      role: "Undergraduate · ALU Kigali",
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
          Three students,{" "}
          <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
            unedited.
          </span>
        </h2>
        <p className="max-w-xl text-base text-ink-soft">
          From ALU undergraduates using the companion. We've left their
          wording alone, including the parts that are just &ldquo;it saves me
          time.&rdquo;
        </p>
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
          <span>Kigali</span>
          <span>Rwanda</span>
          <span className="mt-1">2026</span>
        </div>
        <div className="relative">
          <span className="section-label" style={{ color: "var(--terracotta)" }}>
            For institutions
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02]">
            See it answer{" "}
            <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
              your
            </span>{" "}
            students' questions.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base opacity-75">
            Bring the five questions your front desk is tired of. We'll point
            the companion at your handbook and you can watch it work, or fail,
            in real time.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={COMPANION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:gap-3"
              style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}
            >
              Launch Companion <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-medium transition-all hover:border-paper hover:gap-3"
            >
              Book a demo session <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mx-auto mt-8 max-w-md text-sm opacity-60">
            A small team in Kigali reads every one of these. Expect a reply
            within a day or two.
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

  return (
    <section id="team" className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
          <SectionTag>Chapter 06 · Who built it</SectionTag>
        </div>
        <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
          Five people, most of us{" "}
          <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
            still enrolled.
          </span>
        </h2>
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
                {/* photo tile (falls back to initials if no photo) */}
                <div
                  className="flex aspect-[4/5] items-center justify-center overflow-hidden"
                  style={{ backgroundColor: bgs[i] }}
                >
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
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
                  )}
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
        <div className="relative flex items-center p-8">
          <div>
            <p className="font-display text-2xl leading-snug">
              We were the ones stuck in the queue.
            </p>
            <p className="mt-3 max-w-[230px] text-sm text-ink-soft">
              That's the whole qualification. We're building for a problem we
              had last semester, and some of us still have.
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
          <SectionTag>Get in touch</SectionTag>
        </div>
        <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
          Half an hour, and you'll know if this is{" "}
          <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
            worth your time.
          </span>
        </h2>
        <p className="max-w-2xl text-lg text-ink-soft">
          No slide deck. We'd rather load your handbook and let you try to
          break it.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* What to expect — receipt */}
        <div className="col-span-12 lg:col-span-7">
          <div className="relative border border-border bg-card p-8 lg:p-10">
            <div className="absolute -top-3 left-8 -rotate-3 rounded-sm px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-paper" style={{ backgroundColor: "var(--terracotta)" }}>
              No slides
            </div>
            <div className="flex items-center justify-between border-b border-dashed border-foreground/30 pb-4">
              <span className="section-label">How the call goes</span>
              <span className="font-display text-sm" style={{ color: "var(--terracotta)" }}>
                four steps
              </span>
            </div>
            <ol className="mt-6 divide-y divide-dashed divide-foreground/15">
              {[
                ["01", "You bring the hard questions", "The ones your front desk answers twenty times a week, and one nobody can ever find the answer to."],
                ["02", "We point it at your documents", "Usually a handbook and an academic calendar. This part takes about a day on our side."],
                ["03", "You try to break it", "If it makes something up, we want to see that happen in the demo rather than in March."],
                ["04", "Costs, in writing", "What it takes to run per year, what we'd need from your IT team, and what we can't do yet."],
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
            <div className="mt-6 border-t border-dashed border-foreground/30 pt-4 text-xs text-muted-foreground">
              Typically runs 30 minutes. We've never needed the full hour.
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
            Free · 30 min
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
            <p className="mt-6 text-sm leading-relaxed opacity-80">
              You'll be talking to Andrew or Henry, not a sales team — we
              don't have one. Kigali time, but we'll work around your
              timezone.
            </p>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-between gap-2 rounded-full px-6 py-4 text-sm font-medium transition-all hover:gap-3"
            style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}
          >
            Book a demo session <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Newsletter + contact info */}
        <div className="relative col-span-12 border border-border bg-card p-8 lg:col-span-7">
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl" style={{ color: "var(--terracotta)" }}>✉</span>
            <span className="section-label">Still unclear?</span>
          </div>
          <h3 className="mt-4 font-display text-2xl md:text-3xl">
            Questions we haven't{" "}
            <span className="serif-italic" style={{ color: "var(--terracotta)" }}>answered here.</span>
          </h3>
          <p className="mt-4 max-w-lg text-sm text-ink-soft">
            Pricing, data handling, what integration actually takes on your
            side — write to us and a real person on the team replies. We
            don't run a mailing list.
          </p>
          <a
            href="mailto:studentcompanionai@gmail.com?subject=Question%20about%20Student%20Companion"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:gap-3"
            style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
          >
            Email the team <ArrowUpRight className="h-4 w-4" />
          </a>
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
                  Happy to work across timezones
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/company/student-companion-ai-chatbot/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-paper px-4 py-2 text-sm transition-colors hover:bg-foreground hover:text-paper"
          >
            <Linkedin className="h-4 w-4" />
            Follow on LinkedIn
          </a>
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
          <img
            src={logoImg}
            alt="Student Companion AI logo"
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="leading-tight">
            <div className="font-display text-lg">Student Companion</div>
            <div className="text-xs text-muted-foreground">
              African Leadership University, Kigali
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
          <a
            href="https://www.linkedin.com/company/student-companion-ai-chatbot/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Student Companion AI on LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-paper transition-colors hover:bg-foreground hover:text-paper"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <p className="text-sm text-muted-foreground">
            © 2026 Student Companion. Made in Kigali.
          </p>
        </div>
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
