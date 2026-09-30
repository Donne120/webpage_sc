import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { COMPANION_URL } from "@/lib/constants";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Products & Services — Student Companion AI" },
      { name: "description", content: "Career Services and AI Support Platform — two ways Student Companion AI helps students succeed." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
            <span className="section-label">Products &amp; Services</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight">
            Two ways we help students succeed.
          </h1>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">

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
            <h2 className="font-display text-2xl text-foreground mb-3">Career Services</h2>
            <p className="text-sm leading-relaxed text-ink-soft mb-8">
              Curated from trusted sources across Africa and globally — helping African
              undergraduate students and recent graduates find opportunities that actually
              match their level.
            </p>
            <ul className="mt-auto space-y-3">
              {[
                "Internships, jobs, fellowships, scholarships, and competitions discovery",
                "CV checker and opportunity matching",
                "Cover letter guidance",
                "Alumni network insights",
                "Career pathway planning",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "var(--terracotta)" }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-border">
              <a
                href="https://career.studentcompanionai.rw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:gap-3"
                style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
              >
                Browse Opportunities <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
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
            <h2 className="font-display text-2xl text-paper mb-3">Support Platform</h2>
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
        <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: "var(--terracotta)" }}>
            How it works
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
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
        </div>
      </section>
    </main>
  );
}
