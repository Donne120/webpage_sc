import { createFileRoute } from "@tanstack/react-router";
import teamAndrew  from "@/assets/Andrew.jpg";
import teamNgum    from "@/assets/Ngum.png";
import teamMarvin  from "@/assets/02.-marvin (1).jpg";
import teamNuake   from "@/assets/Nuake.jpg";
import teamDeborah from "@/assets/Deborah.jpg";
import teamGilbert from "@/assets/Gilbert.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Student Companion AI" },
      { name: "description", content: "Meet the six people building Student Companion AI." },
    ],
  }),
  component: Team,
});

const TEAM = [
  {
    name: "Andrew Steven Boima",
    role: "Founder & Project Lead",
    meta: "BSc (Hons) Entrepreneurial Leadership",
    blurb: "Vision, partnerships & overall strategy across all phases.",
    photo: teamAndrew,
    pos: "center 15%",
  },
  {
    name: "Dieudonne Ngum",
    role: "Technical Development Lead",
    meta: "BSc (Hons) Software Engineering",
    blurb: "AI model development, system integration & platform maintenance.",
    photo: teamNgum,
    pos: "center top",
  },
  {
    name: "Marvin Mayonga Ogore",
    role: "Technical Supervisory Coach",
    meta: "Machine Learning Coach",
    blurb: "Strategic oversight, academic alignment & quality assurance.",
    photo: teamMarvin,
    pos: "center top",
  },
  {
    name: "Nuake Justice Tsekpo Jr",
    role: "Growth & Insights Lead",
    meta: "BSc (Hons) International Business & Trade · ALU, Rwanda",
    blurb: "Drives market research and data collection.",
    photo: teamNuake,
    pos: "center 30%",
  },
  {
    name: "Deborah Isimibi",
    role: "Voice & Experience Assistant",
    meta: "BSc (Hons) Entrepreneurial Leadership · ALU, Rwanda",
    blurb: "Voices Student Companion's AI audio and voice persona.",
    photo: teamDeborah,
    pos: "center top",
  },
  {
    name: "Gilbert Muramirabagabo",
    role: "Cloud Architecture, Software Engineering & Cybersecurity Support",
    meta: "BSc (Hons) Software Engineering · ALU, Rwanda",
    blurb: "Cloud Architecture Engineer & Cybersecurity Support.",
    photo: teamGilbert,
    pos: "center top",
  },
];

function Team() {
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10" style={{ backgroundColor: "var(--terracotta)" }} />
            <span className="section-label">Meet the Team</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight">
            Meet the team.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
            Meet the team working on bridging the information and opportunity gap
            between students and their learning institutions.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-foreground/30 hover:shadow-lg"
            >
              <div className="aspect-[4/5] overflow-hidden" style={{ backgroundColor: "var(--sand-deep)" }}>
                <img
                  src={m.photo}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: m.pos }}
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
      </section>
    </main>
  );
}
