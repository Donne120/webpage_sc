import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { CONTACT_EMAIL, COMPANION_URL, SOCIAL } from "@/lib/constants";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Student Companion AI" },
      { name: "description", content: "Get in touch with the Student Companion AI team in Kigali." },
    ],
  }),
  component: Contact,
});

const ICONS: Record<string, JSX.Element> = {
  LinkedIn: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  X: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  WhatsApp: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  ),
};

function Contact() {
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
            <span className="section-label">Contact</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight">
            Get in touch with{" "}
            <span className="serif-italic" style={{ color: "var(--terracotta)" }}>
              our team.
            </span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
            A small team in Kigali reads every message. Expect a reply within a day or two.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left — contact details */}
          <div className="space-y-8">

            {/* Info card */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 flex-shrink-0" style={{ color: "var(--terracotta)" }} />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm text-foreground transition-colors hover:text-terracotta"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: "var(--terracotta)" }} />
                  <span className="text-sm text-foreground">
                    Kigali, Rwanda — happy to work across timezones
                  </span>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-muted-foreground">
                  Follow us
                </p>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground transition-all hover:border-foreground hover:shadow-sm"
                    >
                      {ICONS[label]}
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:gap-3"
                style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
              >
                Email us <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={COMPANION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:border-foreground hover:gap-3"
              >
                Launch Companion <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right — how we work */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: "var(--terracotta)" }}>
              How we work together
            </p>
            <div className="space-y-0">
              {[
                { n: "01", title: "You bring the hard questions", body: "The ones your front desk answers twenty times a week, and one nobody can ever find the answer to." },
                { n: "02", title: "We point it at your documents", body: "Usually a handbook and an academic calendar. This part takes about a day on our side." },
                { n: "03", title: "You try to break it", body: "If it makes something up, we want to see that happen early rather than in March." },
                { n: "04", title: "Costs, in writing", body: "What it takes to run per year, what we'd need from your IT team, and what we can't do yet." },
              ].map(({ n, title, body }) => (
                <div key={n} className="flex gap-6 border-b border-border py-5 last:border-0">
                  <span className="flex-shrink-0 font-display text-sm font-semibold" style={{ color: "var(--terracotta)" }}>{n}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
                    <p className="text-sm leading-relaxed text-ink-soft">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Typically 30 minutes. Kigali time, but we'll work around your timezone.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
