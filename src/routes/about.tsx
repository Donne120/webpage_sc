import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Student Companion AI" },
      { name: "description", content: "Our mission, vision, and the problem Student Companion AI is solving for African universities." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="pt-24">
      <section
        className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"
        style={{
          backgroundImage:
            "radial-gradient(60% 40% at 50% 0%, oklch(0.92 0.05 60 / 0.35), transparent 70%)",
        }}
      >
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
            <span className="section-label">Who We Are</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight">
            Why Student Companion AI?
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-soft max-w-xl">
            We're students at African Leadership University in Kigali, building
            for students and staff at higher learning institutions in Rwanda.
          </p>
        </div>

        {/* Problem / Solution */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--terracotta)" }}>
              The Problem
            </p>
            <p className="text-base leading-relaxed text-ink-soft">
              In many African universities, students experience delays and fragmented
              access to academic and administrative support. Without a centralized
              solution, student needs go unmet and service delivery remains inefficient,
              resulting in information inequality, disengagement, and missed
              opportunities — while institutions lack scalable, well-governed, and
              ethical AI solutions to address these gaps.
            </p>
          </div>

          <div
            className="rounded-2xl border p-8 lg:p-10"
            style={{ backgroundColor: "var(--ink)", borderColor: "var(--ink)", color: "var(--paper)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--terracotta)" }}>
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
        <div className="grid gap-10 md:grid-cols-2 mb-16">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--terracotta)" }}>
              Mission
            </p>
            <p className="font-display text-2xl leading-snug text-foreground">
              To revolutionize student support across institutions in Rwanda and
              the continent, using AI-driven solutions that deliver instant
              assistance, deepen engagement, and improve student success.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--terracotta)" }}>
              Vision
            </p>
            <p className="font-display text-2xl leading-snug text-foreground">
              To be the leading AI-powered student support platform in Africa —
              empowering learners through accessible resources, personalized
              guidance, and transformative learning experiences.
            </p>
          </div>
        </div>

        {/* Values strip */}
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Answers from your systems",
              body: "Not scraped from the open web. It reads what your institution actually publishes.",
            },
            {
              title: "It admits what it doesn't know",
              body: "No confident guessing on policy questions. Unclear cases go to a person.",
            },
            {
              title: "Available after hours",
              body: "Nobody asks these questions during office hours. We answer them at 2am.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="flex gap-4">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "var(--terracotta)" }} />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
