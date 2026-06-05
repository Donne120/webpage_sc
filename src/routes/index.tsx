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
  Plus,
  Minus,
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
    ["FAQ", "#faq"],
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
            style={{ backgroundColor: "var(--ink)" }}
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
          <PrimaryButton href="#demo">Try Demo</PrimaryButton>
        </div>
      </div>
    </header>
  );
}

/* ───────────────── Hero ───────────────── */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 lg:pt-40">
      {/* soft gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[120%]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.93 0.04 75 / 0.7), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center fade-up">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-wide text-ink-soft">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--clay)" }}
            />
            AI student support · built for every campus
          </span>

          <h1 className="max-w-5xl text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-foreground">
            Your student companion,{" "}
            <span className="serif-italic">reimagined.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            A warm, intelligent assistant that gives every student academic,
            administrative and personal support — instantly, reliably, and at
            any hour.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton href="#demo">Try the prototype</PrimaryButton>
            <GhostButton href="#about">See how it works</GhostButton>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Built by students, for students — and ready to scale to any
            institution.
          </p>
        </div>

        {/* Hero bento */}
        <div className="mt-16 grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 overflow-hidden rounded-3xl lg:col-span-8">
            <img
              src={heroStudents}
              alt="Students collaborating with laptops in a warm sunlit library"
              width={1600}
              height={1200}
              className="h-[420px] w-full object-cover lg:h-[540px]"
            />
          </div>
          <div className="col-span-12 grid gap-4 lg:col-span-4 lg:gap-6">
            <div
              className="bento-card flex flex-col justify-between"
              style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
            >
              <Sparkles className="h-6 w-6" style={{ color: "var(--sand-deep)" }} />
              <p className="mt-6 font-display text-2xl leading-snug">
                “Like having a brilliant guide on every student's shoulder.”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] opacity-60">
                Live demo
              </p>
            </div>
            <div
              className="bento-card flex items-center justify-between"
              style={{ backgroundColor: "var(--sand-deep)" }}
            >
              <div>
                <div className="font-display text-5xl text-ink">24/7</div>
                <div className="mt-1 text-sm text-ink-soft">
                  support, every single day
                </div>
              </div>
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--ink)" }}
              >
                <PlayCircle className="h-6 w-6" style={{ color: "var(--paper)" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── About ───────────────── */

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <div className="mb-14 flex flex-col gap-4">
        <SectionTag>01 — About the project</SectionTag>
        <h2 className="max-w-4xl text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-tight">
          A <span className="serif-italic">warmer</span> way to support every
          student.
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-7">
          <p>
            <span className="text-foreground">Student Companion AI</span> is an
            elegant, AI-driven platform designed to elevate the student
            experience across universities, colleges and schools everywhere. It
            delivers instant academic and administrative assistance — helping
            students find information, connect with departments, and access
            resources with ease.
          </p>
          <p>
            By integrating securely with each institution's systems, it offers
            context-aware, reliable support — reducing administrative pressure
            while making every learner feel genuinely looked after.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-6">
            {[
              ["Faster", "Answers"],
              ["Lower", "Staff load"],
              ["Happier", "Students"],
            ].map(([a, b]) => (
              <div key={a} className="border-t border-border pt-4">
                <div className="font-display text-2xl text-foreground">{a}</div>
                <div className="text-sm text-muted-foreground">{b}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={studentPortrait}
              alt="A student smiling while using the Student Companion AI"
              width={1000}
              height={1200}
              loading="lazy"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Demo ───────────────── */

function Demo() {
  return (
    <section id="demo" className="mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div
        className="overflow-hidden rounded-3xl"
        style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
      >
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 flex flex-col justify-between p-10 lg:col-span-5 lg:p-14">
            <SectionTag>See it in action</SectionTag>
            <h3 className="mt-6 font-display text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.05]">
              Student Companion,{" "}
              <span className="italic" style={{ color: "var(--sand-deep)" }}>
                live.
              </span>
            </h3>
            <p className="mt-6 max-w-md text-base opacity-75">
              Watch how Student Companion AI helps students get instant
              support — from a quick course question to scheduling a meeting
              with their department.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:gap-3"
                style={{
                  backgroundColor: "var(--paper)",
                  color: "var(--ink)",
                }}
              >
                Try it live <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-medium transition-all hover:border-paper hover:gap-3"
              >
                Schedule full demo <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative col-span-12 lg:col-span-7">
            <img
              src={deskStill}
              alt="A notebook, coffee cup, and phone showing the Student Companion chat"
              width={1200}
              height={1000}
              loading="lazy"
              className="h-full min-h-[360px] w-full object-cover"
            />
            <button
              aria-label="Play demo"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span
                className="flex h-20 w-20 items-center justify-center rounded-full backdrop-blur transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: "oklch(0.985 0.008 80 / 0.9)" }}
              >
                <PlayCircle className="h-10 w-10" style={{ color: "var(--ink)" }} />
              </span>
            </button>
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
      n: "01",
      title: "Mission",
      body:
        "To revolutionize student support across institutions worldwide through AI-driven tools that improve accessibility, engagement, and student success.",
    },
    {
      n: "02",
      title: "Vision",
      body:
        "To become the world's most trusted AI-powered student support platform — empowering learners through personalized guidance, seamless access to resources, and transformative experiences.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-14">
        <SectionTag>03 — Why we exist</SectionTag>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {items.map((it) => (
          <div key={it.n} className="bento-card bento-card-hover">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-5xl text-clay">{it.n}</span>
              <span className="section-label">{it.title}</span>
            </div>
            <h3 className="mt-8 font-display text-3xl leading-tight">
              {it.title === "Mission"
                ? "Elevate student support, everywhere."
                : "The most trusted companion in education."}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              {it.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── Already built ───────────────── */

function AlreadyBuilt() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-14 flex flex-col gap-4">
        <SectionTag>Already built</SectionTag>
        <h2 className="max-w-3xl text-[clamp(2rem,4.5vw,4rem)] leading-[1.05]">
          From idea to{" "}
          <span className="serif-italic">working product.</span>
        </h2>
        <p className="max-w-2xl text-lg text-ink-soft">
          To demonstrate feasibility, we've built two live versions of the
          system — one for public exploration, one for secure institutional use.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="bento-card bento-card-hover col-span-12 lg:col-span-6">
          <div className="flex items-center justify-between">
            <span className="section-label">Functional prototype</span>
            <span className="rounded-full border border-border px-3 py-1 text-xs text-ink-soft">
              Hosted on Poe
            </span>
          </div>
          <h3 className="mt-6 font-display text-3xl leading-tight">
            Try the live chatbot today.
          </h3>
          <p className="mt-4 text-ink-soft">
            A live version of the chatbot is accessible on the Poe platform,
            allowing users to interact with core features.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink-soft">
            {[
              "Student Q&As",
              "Academic guidance",
              "Student-life support",
              "Admission information",
              "Professional development hub",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span
                  className="h-1 w-4 rounded-full"
                  style={{ backgroundColor: "var(--clay)" }}
                />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <GhostButton>Try Poe prototype</GhostButton>
          </div>
        </div>

        <div
          className="bento-card bento-card-hover col-span-12 lg:col-span-6"
          style={{ backgroundColor: "var(--sand)" }}
        >
          <div className="flex items-center justify-between">
            <span className="section-label">Secure MVP platform</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-paper px-3 py-1 text-xs text-ink-soft">
              <ShieldCheck className="h-3 w-3" /> Institution-ready
            </span>
          </div>
          <h3 className="mt-6 font-display text-3xl leading-tight">
            A stand-alone, compliant home for your institution.
          </h3>
          <p className="mt-4 text-ink-soft">
            Designed for secure data integration and hosting within each
            institution's own infrastructure.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink-soft">
            {[
              "Institutional email domains only",
              "Google Single Sign-On (SSO)",
              "Institutional compliance",
              "Secure data integration",
              "Flexible for future scaling",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span
                  className="h-1 w-4 rounded-full"
                  style={{ backgroundColor: "var(--clay)" }}
                />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <PrimaryButton>Access MVP platform</PrimaryButton>
          </div>
        </div>

        <div
          className="bento-card col-span-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
        >
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-6 w-6" style={{ color: "var(--sand-deep)" }} />
            <div>
              <h4 className="font-display text-2xl">Security & compliance</h4>
              <p className="mt-1 max-w-2xl text-sm opacity-70">
                Access restricted to verified institutional email domains with
                Google SSO authentication — maintaining the highest standards
                for student data.
              </p>
            </div>
          </div>
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
    },
    {
      n: "02",
      icon: Building2,
      title: "Campus Services",
      body: "Connect with departments, schedule appointments, and request assistance.",
      span: "lg:col-span-4",
    },
    {
      n: "03",
      icon: Compass,
      title: "Personal Growth",
      body: "Career advice, skills development, and mentorship opportunities.",
      span: "lg:col-span-3",
    },
    {
      n: "04",
      icon: CalendarDays,
      title: "Event Updates",
      body: "Deadlines, internships, scholarships and campus events — never miss a moment.",
      span: "lg:col-span-3",
    },
    {
      n: "05",
      icon: Users,
      title: "Human Assistance",
      body: "Switch seamlessly from AI to live staff whenever the moment calls for it.",
      span: "lg:col-span-4",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-14 flex flex-col gap-4">
        <SectionTag>02 — Capabilities</SectionTag>
        <h2 className="max-w-4xl text-[clamp(2rem,4.5vw,4rem)] leading-[1.05]">
          Everything a student needs,{" "}
          <span className="serif-italic">in one companion.</span>
        </h2>
      </div>

      <div className="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
        {items.map(({ n, icon: Icon, title, body, span, dark }) => (
          <div
            key={n}
            className={`bento-card bento-card-hover col-span-12 flex flex-col justify-between ${span}`}
            style={
              dark
                ? { backgroundColor: "var(--ink)", color: "var(--paper)" }
                : undefined
            }
          >
            <div className="flex items-start justify-between">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  dark ? "" : ""
                }`}
                style={{
                  backgroundColor: dark ? "oklch(0.985 0.008 80 / 0.1)" : "var(--sand)",
                }}
              >
                <Icon
                  className="h-5 w-5"
                  style={{ color: dark ? "var(--paper)" : "var(--clay)" }}
                />
              </span>
              <span
                className="font-display text-2xl"
                style={{ color: dark ? "var(--sand-deep)" : "var(--clay)" }}
              >
                {n}
              </span>
            </div>
            <div className="mt-10">
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
          className="bento-card col-span-12 flex flex-col justify-between lg:col-span-5 lg:row-span-1"
          style={{ backgroundColor: "var(--sand-deep)" }}
        >
          <p className="font-display text-2xl leading-snug text-ink lg:text-3xl">
            Built for every institution — universities, colleges, high schools.
            Student Companion adapts to your programs, policies and tone of voice.
          </p>
          <div className="mt-6">
            <GhostButton href="#contact">Talk to our team</GhostButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Value ───────────────── */

function Value() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-14 flex flex-col gap-4">
        <SectionTag>04 — Value</SectionTag>
        <h2 className="max-w-4xl text-[clamp(2rem,4.5vw,4rem)] leading-[1.05]">
          Value for institutions{" "}
          <span className="serif-italic">& students</span> alike.
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="bento-card bento-card-hover col-span-12 lg:col-span-6">
          <span className="section-label">For institutions</span>
          <h3 className="mt-4 font-display text-3xl">
            Transform how you support learners.
          </h3>
          <ul className="mt-6 space-y-4 text-base text-ink-soft">
            {[
              "Automates repetitive student inquiries, freeing staff for higher-value work.",
              "Generates data-driven insights on student engagement and service gaps.",
              "Strengthens reputation as a digitally advanced, student-centered institution.",
            ].map((t) => (
              <li key={t} className="flex gap-4">
                <span className="mt-2 h-1 w-4 flex-shrink-0 rounded-full" style={{ backgroundColor: "var(--clay)" }} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="bento-card bento-card-hover col-span-12 lg:col-span-6"
          style={{ backgroundColor: "var(--sand)" }}
        >
          <span className="section-label">For students</span>
          <h3 className="mt-4 font-display text-3xl">
            Empowering academic success.
          </h3>
          <ul className="mt-6 space-y-4 text-base text-ink-soft">
            {[
              "24/7 access to academic and administrative support.",
              "Instant answers about courses, policies, and deadlines.",
              "Personalized learning guidance and career insights.",
            ].map((t) => (
              <li key={t} className="flex gap-4">
                <span className="mt-2 h-1 w-4 flex-shrink-0 rounded-full" style={{ backgroundColor: "var(--clay)" }} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
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
    <section id="testimonials" className="mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-14 flex flex-col gap-4">
        <SectionTag>05 — In their words</SectionTag>
        <h2 className="max-w-4xl text-[clamp(2rem,4.5vw,4rem)] leading-[1.05]">
          What students <span className="serif-italic">actually</span> say.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <figure
            key={q.name}
            className={`bento-card bento-card-hover flex flex-col justify-between ${
              i === 1 ? "md:translate-y-8" : ""
            }`}
          >
            <span className="font-display text-5xl leading-none text-clay">“</span>
            <blockquote className="mt-4 font-display text-xl leading-snug text-foreground">
              {q.quote}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full font-display text-lg"
                style={{ backgroundColor: "var(--sand)", color: "var(--clay)" }}
              >
                {q.name[0]}
              </span>
              <div>
                <div className="text-sm font-medium text-foreground">{q.name}</div>
                <div className="text-xs text-muted-foreground">{q.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── FAQ ───────────────── */

function FAQ() {
  const items = [
    [
      "What makes Student Companion different from other chatbots?",
      "We're built specifically for student life: academic, administrative and personal support — securely integrated with each institution's systems for context-aware, reliable answers.",
    ],
    [
      "How does the chatbot handle data privacy and security?",
      "Strict institutional standards, Google SSO, verified email domains, and data hosted within the institution's own infrastructure.",
    ],
    [
      "Can the chatbot integrate with our existing university systems?",
      "Yes — the MVP platform is designed for secure data integration with student information systems, LMSs and internal directories.",
    ],
    [
      "What languages does the chatbot support?",
      "English at launch, with multi-language support on the roadmap, prioritized by institutional needs.",
    ],
    [
      "How quickly can we implement Student Companion at our university?",
      "Typical pilot rollouts take a few weeks; full deployments depend on your data sources and approval workflow.",
    ],
    [
      "What support do universities receive after implementation?",
      "Dedicated onboarding, training for staff, and a customer success lead embedded with your team.",
    ],
    [
      "Can students access the chatbot outside of campus?",
      "Yes — anytime, anywhere, on any device with a browser.",
    ],
    [
      "How does the AI learn and improve over time?",
      "Through curated institutional knowledge updates and aggregated, privacy-preserving usage signals.",
    ],
    [
      "What happens when the chatbot can't answer a question?",
      "It seamlessly hands off to the right human staff member, with full context preserved.",
    ],
    [
      "Is there a cost for students to use the chatbot?",
      "No — Student Companion is licensed to the institution, free for every student to use.",
    ],
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-4">
          <SectionTag>06 — Questions</SectionTag>
          <h2 className="mt-4 text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.05]">
            Frequently asked <span className="serif-italic">questions.</span>
          </h2>
          <p className="mt-6 text-ink-soft">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="mt-2 inline-flex items-center gap-2 text-foreground underline-offset-4 hover:underline"
          >
            Contact our team <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <ul className="divide-y divide-border border-y border-border">
            {items.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <li key={q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-clay"
                  >
                    <span className="font-display text-xl leading-snug md:text-2xl">
                      {q}
                    </span>
                    <span
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border"
                      style={
                        isOpen
                          ? { backgroundColor: "var(--ink)", color: "var(--paper)", borderColor: "var(--ink)" }
                          : undefined
                      }
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <p className="pb-6 pr-12 text-base leading-relaxed text-ink-soft">
                        {a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── CTA banner ───────────────── */

function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div
        className="relative overflow-hidden rounded-3xl px-8 py-20 text-center md:px-16 md:py-28"
        style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
      >
        <img
          src={campus}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="relative">
          <span className="section-label" style={{ color: "var(--sand-deep)" }}>
            Ready to transform your campus?
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.25rem,5vw,5rem)] leading-[1.05]">
            Join the future of{" "}
            <span className="italic" style={{ color: "var(--sand-deep)" }}>
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
              Try the live demo <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-medium transition-all hover:border-paper hover:gap-3"
            >
              Book a meeting <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
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
    <section id="team" className="mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-14 flex flex-col gap-4">
        <SectionTag>07 — The makers</SectionTag>
        <h2 className="max-w-4xl text-[clamp(2rem,4.5vw,4rem)] leading-[1.05]">
          Built by people who{" "}
          <span className="serif-italic">care</span> about students.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <div
            key={m.name}
            className={`bento-card bento-card-hover ${
              i === 0 ? "lg:col-span-2" : ""
            }`}
            style={
              i === 0
                ? { backgroundColor: "var(--sand-deep)" }
                : undefined
            }
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full font-display text-2xl"
                  style={{
                    backgroundColor: i === 0 ? "var(--ink)" : "var(--sand)",
                    color: i === 0 ? "var(--paper)" : "var(--clay)",
                  }}
                >
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{m.role}</p>
              </div>
              <div className="mt-8 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                <div className="uppercase tracking-[0.15em]">{m.meta}</div>
                <p className="mt-2 text-sm normal-case tracking-normal text-ink-soft">
                  {m.blurb}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── Contact ───────────────── */

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mb-14 flex flex-col gap-4">
        <SectionTag>Say hello</SectionTag>
        <h2 className="max-w-4xl text-[clamp(2rem,4.5vw,4rem)] leading-[1.05]">
          Let's talk about your institution's{" "}
          <span className="serif-italic">future.</span>
        </h2>
        <p className="max-w-2xl text-lg text-ink-soft">
          Book a personalized demo or consultation with our team. We'll show
          you how Student Companion can transform your institution's student
          support services.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* What to expect */}
        <div className="col-span-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:col-span-7">
          {[
            ["Personalized demo", "See how our AI works with your specific use cases and requirements."],
            ["Expert consultation", "Get answers to all your questions from our experienced team."],
            ["Custom proposal", "Receive a tailored implementation plan and pricing for your institution."],
          ].map(([t, b]) => (
            <div key={t} className="bento-card bento-card-hover">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--sand)", color: "var(--clay)" }}
              >
                <Sparkles className="h-4 w-4" />
              </span>
              <h3 className="mt-6 font-display text-xl leading-snug">{t}</h3>
              <p className="mt-2 text-sm text-ink-soft">{b}</p>
            </div>
          ))}
        </div>

        {/* Schedule card */}
        <div
          className="bento-card col-span-12 flex flex-col justify-between lg:col-span-5"
          style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
        >
          <div>
            <span className="section-label" style={{ color: "var(--sand-deep)" }}>
              Schedule a meeting
            </span>
            <h3 className="mt-4 font-display text-3xl">
              Pick a time that works for you.
            </h3>
            <ul className="mt-6 space-y-3 text-sm opacity-80">
              <li>· 15–30 minute sessions available</li>
              <li>· Instant confirmation</li>
              <li>· Automatic calendar invites</li>
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
        <div className="bento-card col-span-12 lg:col-span-7">
          <span className="section-label">Stay in the loop</span>
          <h3 className="mt-4 font-display text-2xl">
            Latest updates, features, and insights on AI in education.
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
          className="bento-card col-span-12 flex flex-col justify-between gap-6 lg:col-span-5"
          style={{ backgroundColor: "var(--sand)" }}
        >
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
      <About />
      <Demo />
      <Mission />
      <AlreadyBuilt />
      <Features />
      <Value />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
