import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logoImg from "@/assets/logo-new.png";
import { NAV_LINKS, COMPANION_URL } from "@/lib/constants";

export function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { location } = useRouterState();
  const pathname = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

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
          {NAV_LINKS.map(({ to, label }) => (
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
        <div className="border-t border-border bg-background/95 px-6 py-4 md:hidden">
          {NAV_LINKS.map(({ to, label }) => (
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
