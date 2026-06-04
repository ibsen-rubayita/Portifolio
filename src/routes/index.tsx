import { createFileRoute } from "@tanstack/react-router";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ibsen Rubayita — Full-Stack Web Developer" },
      { name: "description", content: "Aubin Ibsen Rubayita — Full-stack web developer based in Kigali, Rwanda. 4 years building responsive, refined web experiences." },
      { property: "og:title", content: "Ibsen Rubayita — Full-Stack Web Developer" },
      { property: "og:description", content: "Full-stack web developer based in Kigali, Rwanda. Responsive front-end, robust back-end." },
    ],
  }),
  component: Index,
});

const PROJECTS = [
  { n: "01", name: "Atlas Commerce", tag: "E-commerce · React + Node", year: "2025", desc: "Headless storefront with custom checkout, payments, and a CMS dashboard." },
  { n: "02", name: "Lumen Dashboard", tag: "SaaS · TypeScript + PHP", year: "2024", desc: "Analytics platform with real-time charts, role-based access, and PDF exports." },
  { n: "03", name: "Kigali Eats", tag: "Mobile-first web · Node", year: "2024", desc: "Restaurant discovery and ordering app tuned for low-bandwidth networks." },
  { n: "04", name: "Vault CRM", tag: "Internal tool · Python", year: "2023", desc: "Customer pipeline and invoicing for a regional logistics company." },
  { n: "05", name: "Studio Portfolio", tag: "Brand site · JS + CSS", year: "2023", desc: "Award-style portfolio for a creative studio with custom motion." },
];

const STACK = {
  "Front-end": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind"],
  "Back-end": ["Python", "PHP", "Node.js", "C", "REST", "PostgreSQL"],
  "Craft": ["Responsive design", "Accessibility", "Performance", "Design systems"],
};

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl font-700 tracking-tight">Ibsen<span className="text-accent">.</span></a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#stack" className="hover:text-foreground transition">Stack</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a href="mailto:ibsenrubayita@gmail.com" className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] border border-foreground px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors">
            Hire me <ArrowUpRight className="size-3.5 group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground mb-8">
                <span className="size-2 rounded-full bg-accent animate-pulse" />
                Available for select projects — 2026
              </div>
              <h1 className="font-display font-300 tracking-[-0.04em] leading-[0.88] text-[clamp(3.5rem,11vw,10rem)]">
                Full-stack<br />
                <span className="italic font-500">developer</span><br />
                <span className="text-accent">crafting</span> the web.
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 space-y-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-card grain">
                <img src={heroPortrait} alt="Portrait of Ibsen Rubayita" width={1024} height={1280} className="size-full object-cover" />
              </div>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                <span className="text-foreground">[01]</span> Aubin Ibsen Rubayita — engineer & designer based in Kigali, Rwanda. Four years building responsive, durable products end-to-end.
              </p>
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="mt-24 md:mt-32 border-y border-border overflow-hidden">
          <div className="flex marquee whitespace-nowrap py-6 font-display italic text-5xl md:text-7xl font-300">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12 pr-12">
                {["React", "Node.js", "Python", "PHP", "TypeScript", "PostgreSQL", "Tailwind", "C"].map((t) => (
                  <span key={t} className="flex items-center gap-12">
                    {t}
                    <span className="text-accent">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / STATS */}
      <section id="about" className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">[ 02 — About ]</p>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-10">
            <p className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight font-300">
              I build the entire stack — from <span className="italic">pixel-perfect</span> interfaces to the APIs and databases behind them. My focus is responsive front-end design that feels effortless on every device.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
              {[
                { k: "04", v: "Years building" },
                { k: "05+", v: "Shipped projects" },
                { k: "12+", v: "Languages & tools" },
                { k: "∞", v: "Cups of coffee" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-5xl md:text-6xl font-300 tracking-tight">{s.k}</div>
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mt-2">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-20 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">[ 03 — Selected work ]</p>
              <h2 className="font-display text-5xl md:text-7xl font-300 tracking-tight">Recent <span className="italic">projects</span></h2>
            </div>
            <span className="hidden md:block font-mono text-xs text-muted-foreground">2023 — 2025</span>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {PROJECTS.map((p) => (
              <a key={p.n} href="#" className="group grid grid-cols-12 gap-4 py-8 md:py-10 items-baseline hover:bg-card transition-colors px-2 md:px-4 -mx-2 md:-mx-4">
                <div className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground">{p.n}</div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-display text-3xl md:text-5xl font-300 tracking-tight group-hover:text-accent group-hover:italic transition-all">{p.name}</h3>
                </div>
                <div className="col-span-8 md:col-span-5 text-muted-foreground text-sm md:text-base">{p.desc}</div>
                <div className="col-span-4 md:col-span-2 text-right font-mono text-xs text-muted-foreground flex items-center justify-end gap-2">
                  {p.year}
                  <ArrowUpRight className="size-4 group-hover:rotate-45 group-hover:text-accent transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="py-20 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">[ 04 — Toolbox ]</p>
            <h2 className="font-display text-5xl md:text-6xl font-300 tracking-tight">The <span className="italic">stack</span>.</h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-12">
            {Object.entries(STACK).map(([cat, items]) => (
              <div key={cat}>
                <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">{cat}</h3>
                <ul className="flex flex-wrap gap-3">
                  {items.map((it) => (
                    <li key={it} className="px-5 py-2.5 border border-foreground/80 rounded-full font-mono text-sm hover:bg-foreground hover:text-background transition-colors cursor-default">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-40 border-t border-border bg-foreground text-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-background/60 mb-8">[ 05 — Let's talk ]</p>
          <h2 className="font-display text-6xl md:text-[10rem] font-300 leading-[0.9] tracking-[-0.04em]">
            Have an idea?<br />
            <a href="mailto:ibsenrubayita@gmail.com" className="italic text-accent hover:underline decoration-1 underline-offset-[0.15em]">Let's build it.</a>
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-background/20">
            <div className="space-y-5">
              <a href="mailto:ibsenrubayita@gmail.com" className="flex items-center gap-4 group">
                <Mail className="size-5 text-accent" />
                <span className="font-display text-2xl md:text-3xl group-hover:italic transition-all">ibsenrubayita@gmail.com</span>
              </a>
              <a href="tel:+250791076514" className="flex items-center gap-4 group">
                <Phone className="size-5 text-accent" />
                <span className="font-display text-2xl md:text-3xl group-hover:italic transition-all">+250 791 076 514</span>
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="size-5 text-accent" />
                <span className="font-display text-2xl md:text-3xl">Kigali, Rwanda</span>
              </div>
            </div>
            <div className="space-y-5 md:text-right">
              <a href="https://github.com/ibsen-rubayita" target="_blank" rel="noreferrer" className="flex md:justify-end items-center gap-4 group">
                <span className="font-mono text-sm text-background/60 group-hover:text-accent transition">github.com/ibsen-rubayita</span>
                <Github className="size-5" />
              </a>
              <a href="https://linkedin.com/in/aubin-ibsen-rubayita" target="_blank" rel="noreferrer" className="flex md:justify-end items-center gap-4 group">
                <span className="font-mono text-sm text-background/60 group-hover:text-accent transition">linkedin.com/in/aubin-ibsen-rubayita</span>
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>

          <div className="mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-background/20 font-mono text-xs uppercase tracking-[0.18em] text-background/50">
            <span>© 2026 Aubin Ibsen Rubayita</span>
            <span>Designed & built in Kigali</span>
          </div>
        </div>
      </section>
    </main>
  );
}
