import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import andrewLaptop from "@/assets/andrew-laptop.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Student Companion AI" },
      { name: "description", content: "Our mission, vision, and the problem Student Companion AI is solving for students and universities in Rwanda and across Africa." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <p className="section-label mb-3">About us</p>
            <h1 className="text-[clamp(2.25rem,4.4vw,3.4rem)] leading-[1.1] text-foreground">
              Why Student Companion AI?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              We are students, graduates and mentors at African Leadership University in Kigali,
              building a student support platform for higher learning institutions in Rwanda and
              across Africa.
            </p>
          </div>
          <img
            src={andrewLaptop}
            alt="Andrew Steven Boima, founder, working on Student Companion AI on the ALU campus"
            className="h-[340px] w-full rounded-xl object-cover lg:h-[400px]"
          />
        </div>
      </section>

      {/* Problem and solution */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="section-label mb-3">The problem</p>
            <p className="text-lg leading-relaxed text-foreground">
              In many African universities, students wait for answers and find academic and
              administrative support scattered across offices, emails and documents. Needs go
              unmet, service is slow, and students miss information and opportunities, while
              institutions lack well-governed, ethical AI tools to close the gap.
            </p>
          </div>
          <div>
            <p className="section-label mb-3">Our solution</p>
            <p className="text-lg leading-relaxed text-foreground">
              One student support platform: an AI assistant that answers from each institution's own
              information, Pathfinder for choosing the right university, and career opportunities and
              courses for life after study.
            </p>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              See our products and services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="border-y border-border bg-sand">
        <div className="mx-auto grid max-w-7xl gap-px px-6 py-20 md:grid-cols-2 md:gap-16 lg:px-10">
          <div>
            <p className="section-label mb-3">Mission</p>
            <p className="text-2xl font-medium leading-snug tracking-tight text-foreground">
              To revolutionize student support across institutions in Rwanda and the continent, using
              AI-driven solutions that deliver instant assistance, deepen engagement, and improve
              student success.
            </p>
          </div>
          <div className="mt-12 md:mt-0">
            <p className="section-label mb-3">Vision</p>
            <p className="text-2xl font-medium leading-snug tracking-tight text-foreground">
              To be the leading AI-powered student support platform in Africa, empowering learners
              through accessible resources, personalized guidance, and transformative learning
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="section-label mb-3">How we work</p>
        <h2 className="mb-10 text-3xl leading-tight text-foreground">Principles we build by</h2>
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {[
            {
              title: "Answers from your own information",
              body: "Not scraped from the open web. It reads what your institution actually publishes, and shows the source.",
            },
            {
              title: "It admits what it doesn't know",
              body: "No confident guessing on policy questions. Unclear and personal cases go to a person.",
            },
            {
              title: "There when students need it",
              body: "Many questions come up after office hours. Students get an answer at 2 a.m., not next week.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="bg-background p-7">
              <p className="text-base font-semibold text-foreground">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
