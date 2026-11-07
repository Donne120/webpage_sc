export const CONTACT_EMAIL = "info@studentcompanionai.rw";
export const COMPANION_URL = "https://chat.studentcompanionai.rw";

export const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/student-companion-ai",
  },
  {
    label: "X",
    href: "https://x.com/SCAI_P",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/studentcompanionai/",
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029VajtyR71SWt02iOsLK2l",
  },
];

export const NAV_LINKS = [
  { to: "/",         label: "Home" },
  { to: "/about",    label: "About" },
  { to: "/services", label: "Products & Services" },
  { to: "/team",     label: "Team" },
  { to: "/contact",  label: "Contact" },
];

/**
 * What Student Companion AI offers, in the order the "Products & Services"
 * menu lists them. `anchor` is the section on /services; `href` is the
 * product itself.
 */
export const SERVICES = [
  {
    anchor: "support-platform",
    label: "AI Support Platform",
    short: "Answers students' questions from your institution's own information, 24/7.",
    href: COMPANION_URL,
    cta: "Try it now",
  },
  {
    anchor: "pathfinder",
    label: "Pathfinder",
    short: "Matches high school students with the universities and programmes that fit them.",
    href: `${COMPANION_URL}/pathfinder`,
    cta: "Start Pathfinder",
  },
  {
    anchor: "career-services",
    label: "Career Services",
    short: "Verified internships, jobs, scholarships and fellowships for African students.",
    href: "https://career.studentcompanionai.rw/opportunities.html",
    cta: "Browse opportunities",
  },
  {
    anchor: "courses",
    label: "Free Courses",
    short: "Short courses on practical skills for study and work.",
    href: "https://career.studentcompanionai.rw/courses.html",
    cta: "See the courses",
  },
  {
    anchor: "student-services",
    label: "Housing & Travel",
    short: "Help finding a place to live in Kigali, and getting around.",
    href: "https://www.kigalihouz.com",
    cta: "Find housing",
  },
] as const;
