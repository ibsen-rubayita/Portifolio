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
  Languages,
} from "lucide-react";
import photoAsset from "@/assets/ibsen-photo.png.asset.json";
import cvAsset from "@/assets/ibsen-cv.pdf.asset.json";

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

const STACK: Record<string, string[]> = {
  "front-end": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind"],
  "back-end": ["Python", "PHP", "Node.js", "C", "REST", "PostgreSQL"],
  craft: ["Responsive", "Accessibility", "Performance", "Design systems"],
};

type Lang = "en" | "rw" | "fr";

const T = {
  en: {
    nav: { about: "about", work: "work", stack: "stack", services: "services", contact: "contact" },
    status: "status: available · 2026",
    role: "full-stack web developer",
    expLabel: "experience",
    heroA: "Crafting the web,",
    heroB: "line by line.",
    heroP: "I’m Ibsen — a full-stack developer in Kigali, turning quiet ideas into living interfaces. Four years deep, five-plus stories shipped, still listening to what good code wants to be.",
    viewWork: "view work",
    copyEmail: "copy email",
    copied: "copied",
    downloadCV: "download cv",
    aboutTag: "01 — about",
    aboutHead: ["Full-stack engineer with an eye for ", "design", "."],
    aboutP: "I build the whole stack — from the pixel a user touches to the query a server whispers back. My north star is interfaces that breathe on every screen, resting on back-ends that are calm, honest, and easy to live with.",
    stats: [
      { k: "04", v: "Years building" },
      { k: "05+", v: "Shipped projects" },
      { k: "12+", v: "Languages & tools" },
      { k: "100%", v: "On-time delivery" },
    ],
    workTag: "02 — selected work",
    workHead: ["Recent ", "projects"],
    stackTag: "03 — toolbox",
    stackHead: ["The ", "stack"],
    stackCats: { "front-end": "front-end", "back-end": "back-end", craft: "craft" },
    servicesTag: "04 — services",
    servicesHead: ["What I can ", "build for you"],
    services: [
      { t: "Web apps", d: "End-to-end products with auth, payments, and the wiring that holds them together." },
      { t: "E-commerce storefronts", d: "Online shops with carts, checkout, and inventory — pretty on the surface, sturdy underneath." },
      { t: "APIs & back-end", d: "REST services, Postgres schemas, and integrations that don’t flinch at scale." },
      { t: "Maintenance & support", d: "Ongoing care for live products — fixes, upgrades, and a calm hand on the wheel." },
    ],
    contactTag: "05 — let’s talk",
    contactHead: ["Have an idea?", "Let’s build it."],
    uptime: "replies within ~24h · mon–fri",
    formTitle: "send a message",
    name: "name", email: "email", message: "message",
    namePh: "Your name", emailPh: "you@domain.com", msgPh: "Tell me about your project…",
    send: "send", sending: "sending…", sent: "message sent", retry: "retry",
    sentNote: "Thanks — Ibsen will reply within 24h.",
    errNote: "Something went wrong. Email ibsenrubayita@gmail.com directly.",
    footer: "built & shipped from kigali",
    projects: [
      { name: "ArtSpace", tag: "React · Tailwind · UI/UX", desc: "An art appreciation platform — a quiet gallery where pixels learn to behave like paint." },
      { name: "Calogero Ltd", tag: "Next.js · Responsive · Marketing", desc: "A corporate home for a construction company — concrete trust, rendered in the browser." },
    ],
  },
  rw: {
    nav: { about: "ibyerekeye", work: "imirimo", stack: "ibikoresho", services: "serivisi", contact: "twandikire" },
    status: "imimerere: arahari · 2026",
    role: "umuhanga w’urubuga rwuzuye",
    expLabel: "uburambe",
    heroA: "Kubaka urubuga,",
    heroB: "umurongo ku wundi.",
    heroP: "Nitwa Ibsen — umuhanga w’urubuga uba i Kigali, uhindura ibitekerezo bicye bibe imbuga zibaho. Imyaka ine, imishinga irenga itanu, nkikomeje kumva ibyo kode nziza ishaka kuvuga.",
    viewWork: "reba imirimo",
    copyEmail: "fata imeli",
    copied: "byafashwe",
    downloadCV: "manura cv",
    aboutTag: "01 — ibyerekeye",
    aboutHead: ["Umwubatsi w’urubuga ufite ijisho ku ", "moderi", "."],
    aboutP: "Nubaka byose — uhereye kuri pixel umukoresha akoraho kugeza ku rubuga rw’imbere. Intego yanjye: imbuga zoroshye ku byuma byose, zishingiye ku rusobe rukomeye, rwumvikana kandi rworoshye kubungabunga.",
    stats: [
      { k: "04", v: "Imyaka mbaka" },
      { k: "05+", v: "Imishinga yarangiye" },
      { k: "12+", v: "Indimi & ibikoresho" },
      { k: "100%", v: "Bigeze ku gihe" },
    ],
    workTag: "02 — imirimo nahisemo",
    workHead: ["Imishinga ", "ya vuba"],
    stackTag: "03 — ibikoresho",
    stackHead: ["Ibikoresho ", "byanjye"],
    stackCats: { "front-end": "imbere", "back-end": "inyuma", craft: "ubuhanga" },
    servicesTag: "04 — serivisi",
    servicesHead: ["Icyo nshobora ", "kugukorera"],
    services: [
      { t: "Porogaramu z’urubuga", d: "Ibicuruzwa byuzuye birimo kwinjira, kwishyura, n’imiyoboro yose ibihuza." },
      { t: "Amaduka kuri internet", d: "Amaduka yo kuri internet: agatebo, kwishyura, n’ububiko — ahari neza kandi akomeye." },
      { t: "API & inyuma", d: "Serivisi za REST, Postgres, n’imihuza ihagarara n’imirimo iremereye." },
      { t: "Kwita & gushyigikira", d: "Kwita ku bicuruzwa biri mu kazi — gukosora, kuvugurura, no guhagarara hafi." },
    ],
    contactTag: "05 — tuvugane",
    contactHead: ["Ufite igitekerezo?", "Reka tukibake."],
    uptime: "nsubiza mu masaha ~24 · kuwa mbere–gatanu",
    formTitle: "ohereza ubutumwa",
    name: "izina", email: "imeli", message: "ubutumwa",
    namePh: "Izina ryawe", emailPh: "wowe@urubuga.com", msgPh: "Mbwira ku mushinga wawe…",
    send: "ohereza", sending: "iroherezwa…", sent: "byoherejwe", retry: "ongera",
    sentNote: "Murakoze — Ibsen azasubiza mu masaha 24.",
    errNote: "Hari ikitagenze. Yandikira ibsenrubayita@gmail.com.",
    footer: "byubatswe & byoherejwe i kigali",
    projects: [
      { name: "ArtSpace", tag: "React · Tailwind · UI/UX", desc: "Urubuga rwo kwishimira ubugeni — aho pixel ziga kwitwara nk’irangi." },
      { name: "Calogero Ltd", tag: "Next.js · Responsive · Marketing", desc: "Urubuga rw’isosiyete y’ubwubatsi — icyizere gikomeye, kigaragazwa muri browser." },
    ],
  },
  fr: {
    nav: { about: "à propos", work: "projets", stack: "stack", services: "services", contact: "contact" },
    status: "statut : disponible · 2026",
    role: "développeur web full-stack",
    expLabel: "expérience",
    heroA: "Façonner le web,",
    heroB: "ligne après ligne.",
    heroP: "Je suis Ibsen — développeur full-stack à Kigali, je transforme des idées discrètes en interfaces vivantes. Quatre ans de pratique, plus de cinq produits livrés, toujours à l’écoute de ce que veut un beau code.",
    viewWork: "voir les projets",
    copyEmail: "copier l’email",
    copied: "copié",
    downloadCV: "télécharger cv",
    aboutTag: "01 — à propos",
    aboutHead: ["Ingénieur full-stack à l’œil de ", "designer", "."],
    aboutP: "Je construis toute la pile — du pixel que l’on touche à la requête que le serveur murmure en retour. Mon cap : des interfaces qui respirent sur chaque écran, posées sur des back-ends calmes, honnêtes et faciles à vivre.",
    stats: [
      { k: "04", v: "Années de pratique" },
      { k: "05+", v: "Projets livrés" },
      { k: "12+", v: "Langages & outils" },
      { k: "100%", v: "Livré à temps" },
    ],
    workTag: "02 — projets sélectionnés",
    workHead: ["Projets ", "récents"],
    stackTag: "03 — outils",
    stackHead: ["La ", "stack"],
    stackCats: { "front-end": "front-end", "back-end": "back-end", craft: "savoir-faire" },
    servicesTag: "04 — services",
    servicesHead: ["Ce que je peux ", "construire pour vous"],
    services: [
      { t: "Applications web", d: "Produits de bout en bout : authentification, paiements, et toute la plomberie qui tient l’ensemble." },
      { t: "Boutiques e-commerce", d: "Boutiques en ligne avec panier, paiement et stock — belles en surface, solides en-dessous." },
      { t: "APIs & back-end", d: "Services REST, schémas Postgres et intégrations qui tiennent à l’échelle." },
      { t: "Maintenance & support", d: "Suivi de produits en production — correctifs, mises à jour, et une main calme à la barre." },
    ],
    contactTag: "05 — parlons-en",
    contactHead: ["Une idée ?", "Construisons-la."],
    uptime: "réponses sous ~24h · lun–ven",
    formTitle: "envoyer un message",
    name: "nom", email: "email", message: "message",
    namePh: "Votre nom", emailPh: "vous@domaine.com", msgPh: "Parlez-moi de votre projet…",
    send: "envoyer", sending: "envoi…", sent: "message envoyé", retry: "réessayer",
    sentNote: "Merci — Ibsen répondra sous 24h.",
    errNote: "Une erreur est survenue. Écrivez à ibsenrubayita@gmail.com.",
    footer: "conçu & livré depuis kigali",
    projects: [
      { name: "ArtSpace", tag: "React · Tailwind · UI/UX", desc: "Une plateforme d’appréciation de l’art — une galerie calme où les pixels apprennent à se comporter comme de la peinture." },
      { name: "Calogero Ltd", tag: "Next.js · Responsive · Marketing", desc: "Site corporate pour une entreprise de construction — la confiance du béton, rendue dans le navigateur." },
    ],
  },
} as const;

const PROJECT_META = [
  { n: "01", year: "2025", href: "https://artspace-canvas.lovable.app" },
  { n: "02", year: "2025", href: "https://calogero-alpha.vercel.app" },
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

function useLang() {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = (typeof localStorage !== "undefined"
      ? (localStorage.getItem("lang") as Lang | null)
      : null);
    if (saved && (saved === "en" || saved === "rw" || saved === "fr")) setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };
  return { lang, setLang };
}

function Index() {
  const { theme, toggle } = useTheme();
  const { lang, setLang } = useLang();
  const t = T[lang];
  const [copied, setCopied] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

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
            {([
              ["about", t.nav.about],
              ["work", t.nav.work],
              ["stack", t.nav.stack],
              ["services", t.nav.services],
              ["contact", t.nav.contact],
            ] as const).map(([id, label]) => (
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
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                onBlur={() => setTimeout(() => setLangOpen(false), 150)}
                aria-label="Change language"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] border border-foreground px-3 py-1.5 rounded-full hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
              >
                <Languages className="size-3.5" />
                {lang}
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-md border border-border bg-card shadow-lg overflow-hidden">
                  {([
                    ["en", "English"],
                    ["rw", "Kinyarwanda"],
                    ["fr", "Français"],
                  ] as const).map(([code, label]) => (
                    <button
                      key={code}
                      onMouseDown={(e) => { e.preventDefault(); setLang(code); setLangOpen(false); }}
                      className={`w-full text-left px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-accent hover:text-accent-foreground transition ${lang === code ? "text-accent" : ""}`}
                    >
                      {code} · {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
                <span>{t.status}</span>
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
                    {t.role}
                  </div>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-2 pl-3 border-l border-border">
                  <div className="text-right">
                    <div className="font-display text-lg font-600 leading-none text-accent">4y</div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{t.expLabel}</div>
                  </div>
                </div>
              </div>

              <h1 className="font-display font-600 tracking-[-0.03em] leading-[0.95] text-[clamp(2.4rem,7.5vw,5.5rem)]">
                {t.heroA}<br />
                <span className="text-accent">{t.heroB}</span>
              </h1>
              <p className="mt-6 max-w-xl text-sm md:text-base text-muted-foreground">
                {t.heroP}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  onClick={(e) => onSmoothScroll(e, "work")}
                  className="group inline-flex items-center gap-2 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-[0.18em] px-4 py-2.5 rounded-full hover:opacity-90 transition"
                >
                  {t.viewWork} <ArrowUpRight className="size-3.5 group-hover:rotate-45 transition-transform" />
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 border border-border font-mono text-xs uppercase tracking-[0.18em] px-4 py-2.5 rounded-full hover:border-accent hover:text-accent transition"
                >
                  {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                  {copied ? t.copied : t.copyEmail}
                </button>
                <a
                  href={cvAsset.url}
                  download="Ibsen_Rubayita_CV.pdf"
                  className="inline-flex items-center gap-2 border border-border font-mono text-xs uppercase tracking-[0.18em] px-4 py-2.5 rounded-full hover:border-accent hover:text-accent transition"
                >
                  <Download className="size-3.5" /> {t.downloadCV}
                </a>
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
              <span className="text-accent">#</span> {t.aboutTag}
            </p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-600 tracking-tight">
              {t.aboutHead[0]}<span className="text-accent italic">{t.aboutHead[1]}</span>{t.aboutHead[2]}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-8">
            <p className="text-base md:text-lg leading-relaxed">
              {t.aboutP}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-8 border-t border-border">
              {t.stats.map((s) => (
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
                <span className="text-accent">#</span> {t.workTag}
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-600 tracking-tight">
                {t.workHead[0]}<span className="text-accent">{t.workHead[1]}</span>
              </h2>
            </div>
            <span className="hidden md:block font-mono text-[11px] text-muted-foreground">2023 — 2025</span>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {t.projects.map((p, i) => {
              const meta = PROJECT_META[i];
              return (
                <a
                  key={meta.n}
                  href={meta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-12 gap-3 py-5 md:py-7 items-baseline hover:bg-card transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-md"
                >
                  <div className="col-span-2 md:col-span-1 font-mono text-[11px] text-muted-foreground">
                    {meta.n}
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
                    {meta.year}
                    <ArrowUpRight className="size-3.5 group-hover:rotate-45 group-hover:text-accent transition-all" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="py-16 md:py-24 border-t border-border scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
              <span className="text-accent">#</span> {t.stackTag}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-600 tracking-tight">
              {t.stackHead[0]}<span className="text-accent">{t.stackHead[1]}</span>
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
                  <span className="text-accent">{">"}</span> {t.stackCats[cat as keyof typeof t.stackCats]}
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
              <span className="text-accent">#</span> {t.servicesTag}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-600 tracking-tight">
              {t.servicesHead[0]}<span className="text-accent">{t.servicesHead[1]}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.services.map((s, i) => (
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
        className="relative py-20 md:py-28 border-t border-border overflow-hidden scroll-mt-20"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-5">
            <span className="text-accent">#</span> {t.contactTag}
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-600 leading-[0.95] tracking-[-0.03em]">
            {t.contactHead[0]}<br />
            <span className="text-accent">{t.contactHead[1]}</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10 border-t border-border">
            {/* Contact info (left) */}
            <div className="space-y-4">
              <a
                href="mailto:ibsenrubayita@gmail.com?subject=Hello%20Ibsen&body=Hi%20Ibsen%2C%0A%0A"
                className="flex items-center gap-3 group"
              >
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

              <div className="pt-4 mt-2 border-t border-border font-mono text-xs text-muted-foreground leading-relaxed">
                <div><span className="text-accent">$</span> uptime</div>
                <div className="text-foreground/80">{t.uptime}</div>
              </div>
            </div>

            {/* Contact form (bottom right) */}
            <div className="lg:justify-self-end w-full lg:max-w-md self-end">
              <ContactForm t={t} />
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-border font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>© 2026 Aubin Ibsen Rubayita</span>
            <span className="flex items-center gap-2">
              <Download className="size-3" /> {t.footer}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactForm({ t }: { t: (typeof T)[Lang] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/ibsenrubayita@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          message: fd.get("message"),
          _subject: `Portfolio enquiry from ${fd.get("name")}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm space-y-3"
    >
      <div className="flex items-center justify-between mb-1">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="text-accent">▸</span> {t.formTitle}
        </div>
        <div className="flex gap-1">
          <span className="size-2 rounded-full bg-muted-foreground/30" />
          <span className="size-2 rounded-full bg-muted-foreground/30" />
          <span className="size-2 rounded-full bg-accent" />
        </div>
      </div>
      <div>
        <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {t.name}
        </label>
        <input
          name="name"
          required
          className="mt-1 w-full bg-transparent border-b border-border focus:border-accent outline-none py-1.5 font-sans text-sm"
          placeholder={t.namePh}
        />
      </div>
      <div>
        <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {t.email}
        </label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full bg-transparent border-b border-border focus:border-accent outline-none py-1.5 font-sans text-sm"
          placeholder={t.emailPh}
        />
      </div>
      <div>
        <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {t.message}
        </label>
        <textarea
          name="message"
          required
          rows={3}
          className="mt-1 w-full bg-transparent border-b border-border focus:border-accent outline-none py-1.5 font-sans text-sm resize-none"
          placeholder={t.msgPh}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 group w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-[0.18em] px-4 py-2.5 rounded-md hover:opacity-90 transition disabled:opacity-60"
      >
        {status === "sent" ? (
          <><Check className="size-3.5" /> {t.sent}</>
        ) : status === "sending" ? (
          <><Send className="size-3.5 animate-pulse" /> {t.sending}</>
        ) : status === "error" ? (
          <><Send className="size-3.5" /> {t.retry}</>
        ) : (
          <><Send className="size-3.5 group-hover:translate-x-0.5 transition-transform" /> {t.send}</>
        )}
      </button>
      {status === "sent" && (
        <p className="font-mono text-[10px] text-accent text-center">
          {t.sentNote}
        </p>
      )}
      {status === "error" && (
        <p className="font-mono text-[10px] text-destructive text-center">
          {t.errNote}
        </p>
      )}
    </form>
  );
}