import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import andrewLaptop from "@/assets/andrew-laptop.jpg";
import shotAssistant from "@/assets/screens/assistant.webp";
import shotFollowup from "@/assets/screens/assistant-followup.webp";
import shotTablet from "@/assets/screens/tablet-pathfinder.webp";
import shotPhone from "@/assets/screens/phone-assistant.webp";
import { Laptop, Phone, PhoneBack, Tablet } from "@/components/Devices";
import shotOpportunities from "@/assets/screens/opportunities.webp";
import { COMPANION_URL, CONTACT_EMAIL, SERVICES } from "@/lib/constants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Student Companion AI — The student support platform for African universities" },
      {
        name: "description",
        content:
          "Student Companion AI answers students' questions from their own institution's information, helps school leavers choose the right university, and connects students to opportunities and courses. Built in Kigali.",
      },
      { property: "og:title", content: "Student Companion AI" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const PARTNER_MAIL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Student Companion AI for our institution")}`;

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="section-label mb-3">{children}</p>;
}

const FEATURES = [
  {
    eyebrow: "For students and staff",
    title: "Answers from your institution, not the open web",
    body:
      "Students ask in plain language: how to renew a student permit, where a form lives, what happens to a scholarship if they drop a course. The assistant answers from the institution's own handbooks, policies and student life pages, links the source, and points to the right office when a person is needed.",
    points: [
      "Every answer shows where it came from",
      "Asks a follow-up question when it needs to, with one-tap replies",
      "Reads documents and photos students attach, by voice or text",
    ],
    device: "laptop" as const,
    image: shotFollowup,
    alt: "Student Companion AI asking which campus the student is on before answering, with one-tap replies",
    cta: { label: "Launch Companion", href: COMPANION_URL },
  },
  {
    eyebrow: "For school leavers",
    title: "Pathfinder: the right university for each student",
    body:
      "Six short questions about subjects, strengths, interests and budget. Pathfinder suggests fields and real universities across Africa that match the student's skills and learning profile, with accreditation checks, and lets them ask an adviser or the universities they choose for help.",
    points: ["Free, with no account needed", "27 African countries", "Universities and programmes with verified links"],
    device: "tablet" as const,
    image: shotTablet,
    alt: "Pathfinder asking where the student is finishing high school",
    cta: { label: "Start Pathfinder", href: `${COMPANION_URL}/pathfinder` },
  },
  {
    eyebrow: "For graduates and job seekers",
    title: "Opportunities that match the student's level",
    body:
      "A curated list of internships, jobs, scholarships, fellowships and competitions for African students, filtered by country and year of study, alongside free courses on practical skills. Each listing links to the organisation's own page to apply.",
    points: ["Verified sources across Africa and globally", "Filter by country, year and remote work", "Free short courses"],
    device: "laptop" as const,
    image: shotOpportunities,
    alt: "The Student Companion AI opportunities list with filters for country and year of study",
    cta: { label: "Browse opportunities", href: "https://career.studentcompanionai.rw/opportunities.html" },
  },
];

function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-border pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Student support platform · Kigali, Rwanda</Eyebrow>
              <h1 className="text-[clamp(2.1rem,3.9vw,3.1rem)] leading-[1.1] text-foreground">
                The student support platform for African universities.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                Student Companion AI answers students' questions from their own institution's
                information, helps school leavers choose the right university, and connects
                students to opportunities and courses.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={COMPANION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                  style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
                >
                  Launch Companion <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={PARTNER_MAIL}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
                >
                  Partner with us
                </a>
              </div>
              <p className="mt-8 text-sm text-ink-soft">
                In daily use by more than 500 students at{" "}
                <span className="font-semibold text-foreground">African Leadership University</span>, Kigali.
              </p>
            </div>
            <div className="lg:col-span-7">
              {/* Laptop and phone together; on small screens the laptop alone. */}
              <div className="relative pb-6 sm:pr-[14%]">
                <Laptop src={shotAssistant} alt="Student Companion AI on a laptop, answering a student's question with its sources" eager />
                <Phone
                  src={shotPhone}
                  alt="Student Companion AI on a phone, answering the same question"
                  eager
                  className="absolute bottom-0 right-0 hidden w-[27%] sm:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="border-b border-border bg-sand">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-3 lg:px-10">
          {[
            { value: "500+", label: "students using it at African Leadership University" },
            { value: "24/7", label: "answers with the source, including outside office hours" },
            { value: "27", label: "African countries covered by Pathfinder" },
          ].map(({ value, label }) => (
            <div key={value} className="flex items-baseline gap-4">
              <span className="text-3xl font-semibold tracking-tight text-foreground">{value}</span>
              <span className="text-sm leading-snug text-ink-soft">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>What we offer</Eyebrow>
          <h2 className="text-3xl leading-tight text-foreground md:text-4xl">
            Support from the first question to the first job.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s) => (
            <Link
              key={s.anchor}
              to="/services"
              hash={s.anchor}
              className="group flex flex-col bg-background p-6 transition-colors hover:bg-sand"
            >
              <p className="text-base font-semibold text-foreground">{s.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.short}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--terracotta)" }}>
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature rows */}
      <section className="border-t border-border">
        {FEATURES.map((f, i) => (
          <div key={f.title} className={i % 2 ? "bg-sand" : ""}>
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-24">
              <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2 lg:col-start-8" : ""}`}>
                <Eyebrow>{f.eyebrow}</Eyebrow>
                <h2 className="text-3xl leading-tight text-foreground">{f.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-ink-soft">{f.body}</p>
                <ul className="mt-6 space-y-3">
                  {f.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: "var(--terracotta)" }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href={f.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                >
                  {f.cta.label} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className={`lg:col-span-7 ${i % 2 ? "lg:order-1 lg:col-start-1" : ""}`}>
                {f.device === "tablet" ? (
                  <Tablet src={f.image} alt={f.alt} className="mx-auto max-w-[640px]" />
                ) : (
                  <Laptop src={f.image} alt={f.alt} />
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* For institutions */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>For institutions</Eyebrow>
              <h2 className="text-3xl leading-tight text-foreground">
                Set up around your own information.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                Give students one reliable place to ask, and free your staff for the conversations
                that need them.
              </p>
              <a
                href={PARTNER_MAIL}
                className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
              >
                Talk to our team <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:col-span-8">
              {[
                { n: "1", title: "Share your documents", body: "Your handbook, policies, academic calendar and student life pages. Setup takes about a day on our side." },
                { n: "2", title: "Students ask, it answers", body: "Plain-language questions, answered with the source cited so students can check before they act." },
                { n: "3", title: "People handle the rest", body: "Appeals, personal circumstances and anything policy can't cover go to your staff, not to a guess." },
              ].map(({ n, title, body }) => (
                <li key={n} className="bg-background p-7">
                  <span className="text-sm font-semibold" style={{ color: "var(--terracotta)" }}>Step {n}</span>
                  <p className="mt-3 text-base font-semibold text-foreground">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Built in Kigali */}
      <section className="border-t border-border bg-sand">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
          <img
            src={andrewLaptop}
            alt="Andrew Steven Boima, founder, working on Student Companion AI on the ALU campus in Kigali"
            loading="lazy"
            className="h-[360px] w-full rounded-xl object-cover lg:h-[420px]"
          />
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="text-3xl leading-tight text-foreground">Built by students, for students.</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              We are a team of students, graduates and mentors at African Leadership University in Kigali. We
              built Student Companion AI because we know how long it takes to find the right form,
              office or opportunity, and how much it matters when you do.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold">
              <Link to="/about" className="inline-flex items-center gap-2 text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">
                About us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/team" className="inline-flex items-center gap-2 text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">
                Meet the team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="overflow-hidden" style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-10">
          <PhoneBack className="hidden w-[150px] flex-none lg:block" />
          <div className="max-w-2xl lg:mr-auto lg:ml-10">
            <h2 className="text-3xl leading-tight" style={{ color: "var(--paper)" }}>
              Bring Student Companion AI to your institution.
            </h2>
            <p className="mt-3 text-base" style={{ color: "oklch(1 0 0 / 0.7)" }}>
              Tell us about your students and we will show you what it looks like with your own information.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={PARTNER_MAIL}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={COMPANION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold"
              style={{ borderColor: "oklch(1 0 0 / 0.3)", color: "var(--paper)" }}
            >
              Try it now <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
