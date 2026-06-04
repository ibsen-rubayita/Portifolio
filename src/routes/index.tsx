import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Moon,
  Sun,
  Terminal,
  Code2,
  Sparkles,
  Send,
  Download,
  Copy,
  Check,
} from "lucide-react";
import photoAsset from "@/assets/ibsen-photo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ibsen Rubayita — Full-Stack Developer · Kigali" },
      {
        name: "description",
        content:
          "Aubin Ibsen Rubayita — full-stack web developer in Kigali, Rwanda. 4 years building responsive front-ends and reliable back-ends.",
      },
      { property: "og:title", content: "Ibsen Rubayita — Full-Stack Developer" },
      {
        property: "og:description",
        content: "Full-stack web developer. Responsive front-end, robust back-end. Available for projects.",
      },
    ],
  }),
  component: Index,
});

const PROJECTS = [
  {
    n: "01",
    name: "ArtSpace",
    tag: "React · Tailwind · UI/UX",
    year: "2025",
    desc: "An art appreciation platform — a calm, curated space to explore and celebrate visual art.",
    href: "https://artspace-canvas.lovable.app",
  },
  {
    n: "02",
    name: "Calogero Ltd",
    tag: "Next.js · Responsive · Marketing",
    year: "2025",
    desc: "Corporate website for a construction company — services, projects, and lead generation.",
    href: "https://calogero-alpha.vercel.app",
  },
];

const STACK: Record<string, string[]> = {
  "front-end": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind"],
  "back-end": ["Python", "PHP", "Node.js", "C", "REST", "PostgreSQL"],
  craft: ["Responsive", "Accessibility", "Performance", "Design systems"],
};

const SERVICES = [
  { t: "Web apps", d: "End-to-end SPAs and dashboards with auth, payments, and APIs." },
  { t: "Landing pages", d: "Fast, SEO-friendly marketing sites that convert." },
  { t: "APIs & back-end", d: "REST services, Postgres schemas, integrations." },
  { t: "Performance audits", d: "Lighthouse-driven fixes for Core Web Vitals." },
];

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
    const saved =
      typeof localStorage !== "undefined"
        ? (localStorage.getItem("theme") as "light" | "dark" | null)
        : null;
    const initial: "light" | "dark" = saved ?? "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try { localStorage.setItem("theme", next); } catch {}
  };
  return { theme, toggle };
}

function Index() {
  const { theme, toggle } = useTheme();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ibsenrubayita@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  const onSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground text-[15px] leading-relaxed overflow-x-clip">
      {/* Animated dark-mode background */}
      <div className="pointer-events-none fixed inset-0 -z-10 hidden dark:block">
        <div className="absolute inset-0 bg-grid" />
        <div className="aurora" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-5 md:px-8 h-14 flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => onSmoothScroll(e, "top")}
            className="font-display text-lg font-700 tracking-tight flex items-center gap-2"
          >
            <span className="size-2 rounded-full bg-accent" />
            <span>Ibsen</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {[
              ["about", "about"],
              ["work", "work"],
              ["stack", "stack"],
              ["services", "services"],
              ["contact", "contact"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => onSmoothScroll(e, id)}
                className="relative hover:text-foreground transition"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="size-9 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <a
              href="#contact"
              onClick={(e) => onSmoothScroll(e, "contact")}
              className="group hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] border border-foreground px-3.5 py-1.5 rounded-full hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
            >
              hire me <ArrowUpRight className="size-3 group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-8">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-6">
                <span className="size-2 rounded-full bg-accent animate-pulse" />
                <span>status: available · 2026</span>
              </div>

              {/* Identity card */}
              <div className="rounded-xl border border-border bg-card/70 backdrop-blur-sm p-4 mb-8 overflow-hidden glow-accent flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="size-12 rounded-full bg-accent/15 grid place-items-center">
                    <Sparkles className="size-5 text-accent" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-accent ring-2 ring-background" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-sm font-600 truncate">Aubin Ibsen Rubayita</div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                    full-stack web developer
                  </div>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-2 pl-3 border-l border-border">
                  <div className="text-right">
                    <div className="font-display text-lg font-600 leading-none text-accent">4y</div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-1">experience</div>
                  </div>
                </div>
              </div>

              <h1 className="font-display font-600 tracking-[-0.03em] leading-[0.95] text-[clamp(2.4rem,7.5vw,5.5rem)]">
                Building the web,<br />
                <span className="text-accent">end&#8209;to&#8209;end.</span>
              </h1>
              <p className="mt-6 max-w-xl text-sm md:text-base text-muted-foreground">
                I&apos;m Ibsen — a full-stack developer based in Kigali. I design and ship
                responsive interfaces and the APIs behind them. 4 years in, 5+ products shipped,
                still in love with clean code.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  onClick={(e) => onSmoothScroll(e, "work")}
                  className="group inline-flex items-center gap-2 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-[0.18em] px-4 py-2.5 rounded-full hover:opacity-90 transition"
                >
                  view work <ArrowUpRight className="size-3.5 group-hover:rotate-45 transition-transform" />
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 border border-border font-mono text-xs uppercase tracking-[0.18em] px-4 py-2.5 rounded-full hover:border-accent hover:text-accent transition"
                >
                  {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                  {copied ? "copied" : "copy email"}
                </button>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-accent/20 blur-2xl dark:bg-accent/30" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-card noise">
                  <img
                    src={photoAsset.url}
                    alt="Portrait of Aubin Ibsen Rubayita"
                    className="size-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-background/95 to-transparent">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      <span className="text-accent">●</span> ibsen.rubayita
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground">kigali · rw · gmt+2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="mt-16 md:mt-24 border-y border-border overflow-hidden bg-card/40">
          <div className="flex marquee whitespace-nowrap py-4 font-mono text-base md:text-lg">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-8 pr-8">
                {["React", "Node.js", "Python", "PHP", "TypeScript", "PostgreSQL", "Tailwind", "C", "REST", "Git"].map((t) => (
                  <span key={t} className="flex items-center gap-8 text-muted-foreground">
                    <span className="hover:text-accent transition">{t}</span>
                    <span className="text-accent">{"<>"}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / STATS */}
      <section id="about" className="py-16 md:py-24 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="text-accent">#</span> 01 — about
            </p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-600 tracking-tight">
              Full-stack engineer with an eye for <span className="text-accent italic">design</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-8">
            <p className="text-base md:text-lg leading-relaxed">
              I build the entire stack — from pixel-perfect interfaces to the APIs and databases
              behind them. My focus is responsive front-end design that feels effortless on every
              device, paired with back-ends that are reliable and easy to maintain.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-8 border-t border-border">
              {[
                { k: "04", v: "Years building" },
                { k: "05+", v: "Shipped projects" },
                { k: "12+", v: "Languages & tools" },
                { k: "100%", v: "On-time delivery" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl md:text-4xl font-600 tracking-tight">
                    {s.k}
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1.5">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-16 md:py-24 border-t border-border scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                <span className="text-accent">#</span> 02 — selected work
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-600 tracking-tight">
                Recent <span className="text-accent">projects</span>
              </h2>
            </div>
            <span className="hidden md:block font-mono text-[11px] text-muted-foreground">2023 — 2025</span>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {PROJECTS.map((p) => (
              <a
                key={p.n}
                href="#"
                className="group grid grid-cols-12 gap-3 py-5 md:py-7 items-baseline hover:bg-card transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-md"
              >
                <div className="col-span-2 md:col-span-1 font-mono text-[11px] text-muted-foreground">
                  {p.n}
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-display text-lg md:text-2xl font-600 tracking-tight group-hover:text-accent transition-colors">
                    {p.name}
                  </h3>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                    {p.tag}
                  </div>
                </div>
                <div className="col-span-8 md:col-span-5 text-sm text-muted-foreground">{p.desc}</div>
                <div className="col-span-4 md:col-span-2 text-right font-mono text-[11px] text-muted-foreground flex items-center justify-end gap-2">
                  {p.year}
                  <ArrowUpRight className="size-3.5 group-hover:rotate-45 group-hover:text-accent transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="py-16 md:py-24 border-t border-border scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
              <span className="text-accent">#</span> 03 — toolbox
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-600 tracking-tight">
              The <span className="text-accent">stack</span>
            </h2>
            <div className="mt-5 rounded-md border border-border bg-card/60 p-3 font-mono text-xs">
              <div><span className="text-accent">$</span> ls -la /skills</div>
              <div className="text-muted-foreground mt-1">total {Object.values(STACK).flat().length}</div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-8">
            {Object.entries(STACK).map(([cat, items]) => (
              <div key={cat}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
                  <span className="text-accent">{">"}</span> {cat}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((it) => (
                    <li
                      key={it}
                      className="px-3.5 py-1.5 border border-border rounded-md font-mono text-xs hover:border-accent hover:text-accent transition-colors cursor-default bg-card/40"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-24 border-t border-border scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
              <span className="text-accent">#</span> 04 — services
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-600 tracking-tight">
              What I can <span className="text-accent">build for you</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES.map((s, i) => (
              <div
                key={s.t}
                className="group p-5 rounded-lg border border-border bg-card/40 hover:border-accent transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="size-8 grid place-items-center rounded-md bg-accent/10 text-accent">
                    {i === 0 ? <Code2 className="size-4" /> : i === 1 ? <Sparkles className="size-4" /> : i === 2 ? <Terminal className="size-4" /> : <ArrowUpRight className="size-4" />}
                  </span>
                  <h3 className="font-display text-lg font-600">{s.t}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative py-20 md:py-28 border-t border-border bg-foreground text-background overflow-hidden scroll-mt-20"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/60 mb-5">
            <span className="text-accent">#</span> 05 — let&apos;s talk
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-600 leading-[0.95] tracking-[-0.03em]">
            Have an idea?<br />
            <span className="text-accent">Let&apos;s build it.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10 border-t border-background/20">
            {/* Contact info (left) */}
            <div className="space-y-4">
              <a href="mailto:ibsenrubayita@gmail.com" className="flex items-center gap-3 group">
                <Mail className="size-4 text-accent" />
                <span className="font-mono text-sm md:text-base group-hover:text-accent transition">
                  ibsenrubayita@gmail.com
                </span>
              </a>
              <a href="tel:+250791076514" className="flex items-center gap-3 group">
                <Phone className="size-4 text-accent" />
                <span className="font-mono text-sm md:text-base group-hover:text-accent transition">
                  +250 791 076 514
                </span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="size-4 text-accent" />
                <span className="font-mono text-sm md:text-base">Kigali, Rwanda</span>
              </div>
              <a
                href="https://github.com/ibsen-rubayita"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group"
              >
                <Github className="size-4 text-accent" />
                <span className="font-mono text-sm md:text-base group-hover:text-accent transition">
                  github.com/ibsen-rubayita
                </span>
              </a>
              <a
                href="https://linkedin.com/in/aubin-ibsen-rubayita"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group"
              >
                <Linkedin className="size-4 text-accent" />
                <span className="font-mono text-sm md:text-base group-hover:text-accent transition">
                  linkedin.com/in/aubin-ibsen-rubayita
                </span>
              </a>

              <div className="pt-4 mt-2 border-t border-background/20 font-mono text-xs text-background/60 leading-relaxed">
                <div><span className="text-accent">$</span> uptime</div>
                <div className="text-background/80">replies within ~24h · mon–fri</div>
              </div>
            </div>

            {/* Contact form (bottom right) */}
            <div className="lg:justify-self-end w-full lg:max-w-md self-end">
              <ContactForm />
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-background/20 font-mono text-[11px] uppercase tracking-[0.18em] text-background/50">
            <span>© 2026 Aubin Ibsen Rubayita</span>
            <span className="flex items-center gap-2">
              <Download className="size-3" /> built & shipped from kigali
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const msg = String(fd.get("message") || "");
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    setStatus("sending");
    window.location.href = `mailto:ibsenrubayita@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 600);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-background/20 bg-background/5 p-5 backdrop-blur-sm space-y-3"
    >
      <div className="flex items-center justify-between mb-1">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/60">
          <span className="text-accent">▸</span> send a message
        </div>
        <div className="flex gap-1">
          <span className="size-2 rounded-full bg-background/30" />
          <span className="size-2 rounded-full bg-background/30" />
          <span className="size-2 rounded-full bg-accent" />
        </div>
      </div>
      <div>
        <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/60">
          name
        </label>
        <input
          name="name"
          required
          className="mt-1 w-full bg-transparent border-b border-background/30 focus:border-accent outline-none py-1.5 font-sans text-sm"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/60">
          email
        </label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full bg-transparent border-b border-background/30 focus:border-accent outline-none py-1.5 font-sans text-sm"
          placeholder="you@domain.com"
        />
      </div>
      <div>
        <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/60">
          message
        </label>
        <textarea
          name="message"
          required
          rows={3}
          className="mt-1 w-full bg-transparent border-b border-background/30 focus:border-accent outline-none py-1.5 font-sans text-sm resize-none"
          placeholder="Tell me about your project…"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 group w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-[0.18em] px-4 py-2.5 rounded-md hover:opacity-90 transition disabled:opacity-60"
      >
        {status === "sent" ? (
          <>
            <Check className="size-3.5" /> opened in mail
          </>
        ) : (
          <>
            <Send className="size-3.5 group-hover:translate-x-0.5 transition-transform" /> send
          </>
        )}
      </button>
    </form>
  );
}