import { useState, useEffect, useRef } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import logoImg from "@/assets/logo-new.png";
import { NAV_LINKS, COMPANION_URL, SERVICES } from "@/lib/constants";

/** "Products & Services" on desktop: a menu of every service, opened by
 *  hover or click, closed by Escape, a click outside, or choosing one. */
function ServicesMenu({ active, label }: { active: boolean; label: string }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const show = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  // A short delay so moving the pointer from the button to the menu
  // doesn't close it.
  const hide = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 150);
  };

  return (
    <div ref={wrap} className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all ${
          active || open
            ? "bg-foreground/8 text-foreground"
            : "text-ink-soft hover:text-foreground hover:bg-foreground/5"
        }`}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-[440px] -translate-x-1/2 pt-3">
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-[0_24px_60px_-24px_oklch(0.3_0.05_60/0.45)]">
            <ul className="p-2">
              {SERVICES.map((s) => (
                <li key={s.anchor}>
                  <Link
                    to="/services"
                    hash={s.anchor}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-foreground/5"
                  >
                    <span className="block text-sm font-semibold text-foreground">{s.label}</span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-ink-soft">{s.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-t border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
              style={{ color: "var(--terracotta)" }}
            >
              View all products &amp; services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { location } = useRouterState();
  const pathname = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  const hash = location.hash;
  useEffect(() => { setMenuOpen(false); setServicesOpen(false); }, [pathname, hash]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logoImg} alt="Student Companion AI" className="h-10 w-10 rounded-xl object-cover" />
          <div className="leading-tight text-left">
            <div className="font-display text-base">Student Companion</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">AI</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ to, label }) => to === "/services" ? (
            <ServicesMenu key={to} active={isActive(to)} label={label} />
          ) : (
            <Link
              key={to}
              to={to}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                isActive(to)
                  ? "bg-foreground/8 text-foreground"
                  : "text-ink-soft hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={COMPANION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:gap-3 sm:inline-flex"
            style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
          >
            Launch Companion <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-border bg-background px-6 py-4 shadow-lg md:hidden">
          {NAV_LINKS.map(({ to, label }) => to === "/services" ? (
            <div key={to}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((o) => !o)}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  isActive(to) ? "text-foreground bg-foreground/5" : "text-ink-soft hover:text-foreground"
                }`}
              >
                {label}
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <ul className="mb-2 ml-4 border-l border-border pl-3">
                  {SERVICES.map((s) => (
                    <li key={s.anchor}>
                      <Link
                        to="/services"
                        hash={s.anchor}
                        className="block rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:text-foreground"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/services"
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium"
                      style={{ color: "var(--terracotta)" }}
                    >
                      View all
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link
              key={to}
              to={to}
              className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                isActive(to)
                  ? "text-foreground bg-foreground/5"
                  : "text-ink-soft hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-3 border-t border-border pt-3">
            <a
              href={COMPANION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
              style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
            >
              Launch Companion <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
