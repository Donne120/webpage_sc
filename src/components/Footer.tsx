import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo-new.png";
import partnerCloudvisor from "@/assets/Cloudvisor.png";
import { CONTACT_EMAIL, SOCIAL, NAV_LINKS } from "@/lib/constants";

/* ── Social icons ── */
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

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}>
      {/* Partner logos */}
      <div className="border-b" style={{ borderColor: "oklch(0.985 0.008 80 / 0.1)" }}>
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.985 0.008 80 / 0.35)" }}>
            Our Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <img
              src={partnerCloudvisor}
              alt="Cloudvisor powered by AWS"
              className="h-10 object-contain opacity-70 transition-opacity hover:opacity-100"
            />
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Student Companion AI" className="h-10 w-10 rounded-xl object-cover" />
              <div className="leading-tight">
                <div className="font-display text-base text-paper">Student Companion AI</div>
                <div className="text-[10px] uppercase tracking-widest" style={{ color: "oklch(0.985 0.008 80 / 0.4)" }}>Kigali, Rwanda</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "oklch(0.985 0.008 80 / 0.55)" }}>
              An AI-powered platform delivering seamless resource library and career
              opportunities to universities and students in Rwanda and across Africa.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {SOCIAL.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border transition-all hover:border-terracotta hover:text-paper"
                  style={{ borderColor: "oklch(0.985 0.008 80 / 0.2)", color: "oklch(0.985 0.008 80 / 0.6)" }}
                >
                  {ICONS[label]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.985 0.008 80 / 0.35)" }}>
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm transition-colors"
                    style={{ color: "oklch(0.985 0.008 80 / 0.6)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.985 0.008 80 / 0.35)" }}>
              Contact
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm transition-colors"
                  style={{ color: "oklch(0.985 0.008 80 / 0.6)" }}
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="text-sm" style={{ color: "oklch(0.985 0.008 80 / 0.6)" }}>
                Kigali, Rwanda
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "oklch(0.985 0.008 80 / 0.1)" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row lg:px-10">
          <p className="text-xs" style={{ color: "oklch(0.985 0.008 80 / 0.3)" }}>
            © {new Date().getFullYear()} Student Companion AI · Made in Kigali.
          </p>
          <p className="text-xs" style={{ color: "oklch(0.985 0.008 80 / 0.3)" }}>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
