import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import andrewLaptop from "@/assets/andrew-laptop.jpg";
import { COMPANION_URL, CONTACT_EMAIL } from "@/lib/constants";

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
  component: Home,
});

function Home() {
  return (
    <main>
      {/* Hero */}
      <section
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
                Ask where the deferral form lives, how to renew your student permit,
                or what your scholarship does if you drop a course. Student Companion AI
                reads your institution's real policies and answers — even at 2 a.m.,
                when the office is closed.
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

      {/* Quick-link cards */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/about",    label: "About us",            desc: "Our mission, vision, and the problem we're solving." },
            { to: "/services", label: "Products & Services", desc: "Career Services and the AI Support Platform." },
            { to: "/team",     label: "The Team",            desc: "Meet the six people building Student Companion AI." },
            { to: "/contact",  label: "Contact",             desc: "Get in touch or reach us on social media." },
          ].map(({ to, label, desc }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-foreground/30 hover:shadow-md"
            >
              <div>
                <p className="font-display text-lg text-foreground mb-2">{label}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{desc}</p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2" style={{ color: "var(--terracotta)" }}>
                Explore <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
