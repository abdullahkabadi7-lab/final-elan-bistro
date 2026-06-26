import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Menu, X, Star, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter,
  ChevronDown, ChevronLeft, ChevronRight, Award, Utensils, Wine, Check, Send, Sparkles,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import chefImg from "@/assets/chef.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish5 from "@/assets/dish-5.jpg";
import dish6 from "@/assets/dish-6.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Élan Bistro — Modern Fine Dining" },
      { name: "description", content: "Seasonal tasting menus, curated wines, and an unforgettable evening at Élan Bistro." },
      { property: "og:title", content: "Élan Bistro — Modern Fine Dining" },
      { property: "og:description", content: "Seasonal tasting menus, curated wines, and an unforgettable evening." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Élan Bistro",
          servesCuisine: ["French", "Mediterranean", "Contemporary"],
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "21 Rue des Étoiles",
            addressLocality: "Paris",
            postalCode: "75008",
            addressCountry: "FR",
          },
          telephone: "+33 1 42 00 00 00",
          openingHours: "Tu-Su 17:30-23:00",
        }),
      },
    ],
  }),
  component: Page,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Signature", href: "#signature" },
  { label: "Menu", href: "#menu" },
  { label: "Chef", href: "#chef" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Page() {
  return (
    <div className="min-h-dvh bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Signature />
        <MenuSection />
        <Chef />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 group" aria-label="Élan Bistro home">
          <span className="inline-block size-9 rounded-full border border-gold/60 grid place-items-center text-gold font-display text-lg group-hover:rotate-12 transition-transform">É</span>
          <span className="font-display text-xl tracking-wide text-cream">Élan <span className="text-gold">Bistro</span></span>
        </a>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-sm text-cream/80 hover:text-gold transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#reserve"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold to-secondary px-5 py-2.5 text-sm font-medium text-cream shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            <Sparkles className="size-4" /> Reserve
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center size-11 rounded-full border border-gold/30 text-cream"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mt-3 mx-4 rounded-2xl glass-dark p-4"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 text-cream/90 hover:text-gold border-b border-gold/10 last:border-0"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#reserve"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold to-secondary px-5 py-3 text-sm font-medium text-cream"
              >
                <Sparkles className="size-4" /> Reserve a Table
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-dvh min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Candlelit dining room at Élan Bistro"
          className="size-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full mx-auto max-w-6xl px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold"
        >
          <span className="size-1.5 rounded-full bg-gold animate-pulse" />
          Est. 2008 · Paris
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mt-6 font-display font-bold text-cream text-balance leading-[0.95] text-[clamp(2.75rem,8vw,6.5rem)]"
        >
          A taste of <span className="italic text-gold-shimmer">éla<span className="not-italic">n</span></span>,
          <br className="hidden sm:block" /> served by candlelight.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="mt-6 max-w-xl text-cream/80 text-base sm:text-lg text-balance"
        >
          A seasonal tasting menu rooted in French technique, drawn from the Mediterranean,
          and plated with quiet precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold to-secondary px-7 py-3.5 text-sm font-medium text-cream shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            View the Menu
            <Utensils className="size-4 group-hover:rotate-12 transition-transform" />
          </a>
          <a
            href="#reserve"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/5 px-7 py-3.5 text-sm font-medium text-cream backdrop-blur hover:bg-cream/10 transition-all"
          >
            Reserve a Table
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/70 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Discover</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}

/* ---------------- REVEAL ---------------- */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ kicker, title, subtitle, light = false }: { kicker: string; title: React.ReactNode; subtitle?: string; light?: boolean }) {
  return (
    <div className={`max-w-2xl mx-auto text-center ${light ? "text-cream" : ""}`}>
      <Reveal>
        <p className={`text-xs uppercase tracking-[0.3em] ${light ? "text-gold" : "text-secondary"}`}>{kicker}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-balance text-[clamp(2rem,5vw,3.5rem)] leading-[1.05]">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mx-auto mt-5 h-px w-24 gold-divider" />
      </Reveal>
      {subtitle && (
        <Reveal delay={0.15}>
          <p className={`mt-6 text-base sm:text-lg ${light ? "text-cream/70" : "text-muted-foreground"}`}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const stats = [
    { n: "16", l: "Years of craft" },
    { n: "32", l: "Seasonal dishes" },
    { n: "1★", l: "Michelin guide" },
    { n: "120k", l: "Guests welcomed" },
  ];
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 to-secondary/20 blur-2xl" />
            <img
              src={aboutImg}
              alt="Élan Bistro dining room"
              width={1200}
              height={1400}
              loading="lazy"
              className="relative rounded-3xl shadow-elegant w-full aspect-[4/5] object-cover"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 glass rounded-2xl p-5 shadow-elegant max-w-[220px]"
            >
              <div className="flex items-center gap-2 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="mt-2 text-sm text-foreground/90">
                <span className="font-medium">"Quietly extraordinary"</span><br />
                <span className="text-muted-foreground">— Le Figaro</span>
              </p>
            </motion.div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">Our story</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] text-balance">
              A modern bistro <br /> with <em className="text-gold">classical soul</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted-foreground text-base leading-relaxed">
              Founded in a quiet corner of the 8th arrondissement, Élan Bistro began as a six-table
              counter where Chef Julien Marchetti cooked whatever the market gave him that morning.
              Sixteen years later, the spirit hasn't changed — only the room around it.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              We source from small producers within 200km of Paris, age our own vinegars, and pour
              from a 600-label cellar curated by sommelier Léa Dumas.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.l} className="border-l-2 border-gold/40 pl-4">
                  <div className="font-display text-3xl text-foreground">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SIGNATURE DISHES ---------------- */
const SIGNATURE = [
  { img: dish1, name: "Seared Hokkaido Scallops", desc: "Cauliflower velouté, brown butter, sea herbs.", price: "€38", cat: "Sea" },
  { img: dish2, name: "Aged Wagyu Tenderloin", desc: "Black truffle jus, charred shallot, bone marrow.", price: "€72", cat: "Land" },
  { img: dish3, name: "Valrhona Fondant", desc: "70% dark chocolate, raspberry coulis, 24k leaf.", price: "€18", cat: "Sweet" },
  { img: dish4, name: "Oysters de Cancale", desc: "Half-dozen on ice, mignonette, citron.", price: "€32", cat: "Sea" },
  { img: dish5, name: "Black Truffle Tagliolini", desc: "House pasta, périgord truffle, parmigiano 36mo.", price: "€44", cat: "Pasta" },
  { img: dish6, name: "Roast Challans Duck", desc: "Sour cherry gastrique, glazed root vegetables.", price: "€48", cat: "Land" },
];

function Signature() {
  return (
    <section id="signature" className="relative py-24 sm:py-32 bg-muted/40">
      <SectionHeading
        kicker="Signature"
        title={<>The dishes <em className="text-gold">we are known for</em></>}
        subtitle="Six plates that have stayed on the menu through every season — refined, never reinvented."
      />

      <div className="mt-16 mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {SIGNATURE.map((d, i) => (
          <Reveal key={d.name} delay={(i % 3) * 0.08}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-elegant"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-widest text-gold">
                  {d.cat}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl text-foreground">{d.name}</h3>
                  <span className="font-display text-lg text-gold whitespace-nowrap">{d.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-gold/0 group-hover:ring-gold/30 transition-all" />
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FULL MENU ---------------- */
const MENU: Record<string, { name: string; desc: string; price: string }[]> = {
  Starters: [
    { name: "Oysters de Cancale", desc: "Half-dozen, mignonette, citron", price: "€32" },
    { name: "Burrata di Puglia", desc: "Heirloom tomato, basil oil, sourdough", price: "€22" },
    { name: "Foie Gras Terrine", desc: "Brioche toast, fig confit", price: "€28" },
    { name: "Beef Tartare", desc: "Hand-cut, capers, shallot, quail yolk", price: "€26" },
  ],
  "Main Course": [
    { name: "Aged Wagyu Tenderloin", desc: "Truffle jus, charred shallot, bone marrow", price: "€72" },
    { name: "Roast Challans Duck", desc: "Sour cherry gastrique, glazed roots", price: "€48" },
    { name: "Black Truffle Tagliolini", desc: "House pasta, périgord truffle", price: "€44" },
    { name: "Line-Caught Sea Bass", desc: "Fennel velouté, samphire", price: "€42" },
    { name: "Provençal Vegetable Tian", desc: "Slow-roasted, sheep's-milk feta", price: "€32" },
  ],
  Desserts: [
    { name: "Valrhona Fondant", desc: "70% dark, raspberry coulis, 24k leaf", price: "€18" },
    { name: "Tarte au Citron", desc: "Meyer lemon, Italian meringue", price: "€16" },
    { name: "Île Flottante", desc: "Vanilla crème anglaise, almonds", price: "€14" },
    { name: "Selection of Cheeses", desc: "Three artisan cheeses, walnut bread", price: "€22" },
  ],
  Drinks: [
    { name: "Champagne Égly-Ouriet", desc: "Grand cru, brut tradition — glass", price: "€28" },
    { name: "Côte-Rôtie 2018", desc: "Domaine Jamet — glass", price: "€24" },
    { name: "Smoked Old Fashioned", desc: "Cherrywood, orange bitters", price: "€18" },
    { name: "Garden Spritz", desc: "Cucumber, elderflower, tonic", price: "€14" },
    { name: "Espresso Marchetti", desc: "House blend, dark roast", price: "€5" },
  ],
};

function MenuSection() {
  const cats = Object.keys(MENU);
  const [active, setActive] = useState(cats[0]);
  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-ink text-cream">
      <SectionHeading
        kicker="À la carte"
        title={<>The <em className="text-gold">complete</em> menu</>}
        subtitle="A living document. Dishes evolve weekly with the harvest."
        light
      />

      <div className="mt-12 mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap justify-center gap-2">
          {cats.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative rounded-full px-5 py-2.5 text-sm transition-all ${
                  isActive ? "text-ink" : "text-cream/70 hover:text-cream"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="menu-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-gold to-gold-soft"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-12 grid sm:grid-cols-2 gap-x-12 gap-y-7"
          >
            {MENU[active].map((item) => (
              <li key={item.name} className="group">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-xl text-cream">{item.name}</h3>
                  <span className="flex-1 border-b border-dotted border-cream/20 translate-y-[-4px]" />
                  <span className="font-display text-lg text-gold">{item.price}</span>
                </div>
                <p className="mt-1.5 text-sm text-cream/60">{item.desc}</p>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>

        <Reveal delay={0.2}>
          <p className="mt-14 text-center text-xs uppercase tracking-[0.3em] text-cream/40">
            Tasting menu · 7 courses · €145 · with wine pairing €235
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CHEF ---------------- */
function Chef() {
  return (
    <section id="chef" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -top-6 -left-6 size-24 rounded-full border border-gold/40 animate-float" />
            <div className="absolute -bottom-8 -right-6 size-32 rounded-full bg-gradient-to-br from-gold/20 to-accent/10 blur-2xl" />
            <img
              src={chefImg}
              alt="Chef Julien Marchetti"
              width={1000}
              height={1300}
              loading="lazy"
              className="relative rounded-3xl w-full aspect-[4/5] object-cover shadow-elegant"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">Meet the chef</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-balance">
              Julien <em className="text-gold">Marchetti</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted-foreground text-base leading-relaxed">
              Trained under Alain Passard at L'Arpège before earning his stripes at Noma and
              Mirazur, Julien returned to Paris in 2008 with a quiet ambition: to cook the food
              he wanted to eat with his family.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote className="mt-8 pl-6 border-l-2 border-gold/60">
              <p className="font-display italic text-xl text-foreground/90 text-balance">
                "A great dish doesn't ask for attention. It rewards it."
              </p>
              <footer className="mt-2 text-sm text-muted-foreground">— Julien Marchetti</footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Award, t: "Michelin ★", s: "Since 2015" },
                { icon: Utensils, t: "20+ Years", s: "Of fine dining" },
                { icon: Wine, t: "600 Labels", s: "Curated cellar" },
              ].map((a) => (
                <div key={a.t} className="rounded-2xl bg-muted/60 p-5 border border-border">
                  <a.icon className="size-5 text-gold" />
                  <div className="mt-3 font-display text-lg">{a.t}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{a.s}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
const GALLERY = [
  { src: gal1, alt: "Signature smoked cocktail", h: "row-span-2" },
  { src: gal2, alt: "Wine cellar at Élan Bistro", h: "" },
  { src: dish5, alt: "Truffle tagliolini", h: "" },
  { src: gal3, alt: "Chef plating a dish", h: "row-span-2" },
  { src: gal4, alt: "Candlelit table setting", h: "" },
  { src: dish4, alt: "Oysters on ice", h: "" },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-muted/40">
      <SectionHeading
        kicker="Atmosphere"
        title={<>A look <em className="text-gold">inside</em></>}
        subtitle="Warm light, hushed conversation, and the gentle clatter of fine porcelain."
      />

      <div className="mt-16 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4">
          {GALLERY.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 0.06} className={g.h}>
              <button
                onClick={() => setLightbox(i)}
                className="group relative size-full overflow-hidden rounded-2xl shadow-elegant focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={`Open image: ${g.alt}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-left translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <span className="text-xs text-cream/90 font-medium">{g.alt}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm grid place-items-center p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <motion.img
              key={lightbox}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-elegant object-contain"
            />
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="absolute top-6 right-6 size-11 rounded-full glass-dark grid place-items-center text-cream"
              aria-label="Close image"
            >
              <X className="size-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length)); }}
              className="absolute left-4 sm:left-8 size-12 rounded-full glass-dark grid place-items-center text-cream"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? null : (i + 1) % GALLERY.length)); }}
              className="absolute right-4 sm:right-8 size-12 rounded-full glass-dark grid place-items-center text-cream"
              aria-label="Next image"
            >
              <ChevronRight className="size-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const REVIEWS = [
  { name: "Camille R.", role: "Le Figaro", initials: "CR", rating: 5,
    text: "Quietly extraordinary. Élan Bistro doesn't perform — it cooks. Every plate feels considered down to the last grain of salt." },
  { name: "Marcus L.", role: "Frequent guest", initials: "ML", rating: 5,
    text: "I've eaten here forty times. The duck is reason enough. The service, the wine, the room — reason enough again." },
  { name: "Aïcha B.", role: "Time Out Paris", initials: "AB", rating: 5,
    text: "A masterclass in restraint. You leave feeling looked after, not impressed at — and that is the rarest thing in Paris." },
  { name: "Henrik S.", role: "Wine writer", initials: "HS", rating: 5,
    text: "Léa's wine list is a love letter to small growers. Pair it with the tasting menu and surrender the evening." },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="reviews" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="relative">
        <SectionHeading
          kicker="Guests"
          title={<>Kind words, <em className="text-gold">unprompted</em></>}
        />

        <div className="mt-14 mx-auto max-w-3xl px-6">
          <div className="relative h-[280px] sm:h-[240px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 glass rounded-3xl p-8 sm:p-10 shadow-elegant flex flex-col"
              >
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(REVIEWS[idx].rating)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                </div>
                <blockquote className="mt-5 font-display text-xl sm:text-2xl text-foreground/90 leading-relaxed text-balance flex-1">
                  "{REVIEWS[idx].text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-gold to-secondary text-cream font-medium text-sm">
                    {REVIEWS[idx].initials}
                  </span>
                  <span>
                    <span className="block font-medium text-foreground">{REVIEWS[idx].name}</span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">{REVIEWS[idx].role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label="Reviews">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Show review ${i + 1}`}
                aria-selected={i === idx}
                role="tab"
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-2 bg-foreground/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESERVATION ---------------- */
function Reservation() {
  const [form, setForm] = useState({ name: "", email: "", guests: "2", date: "", time: "19:30", note: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 80) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email";
    if (!form.date) e.date = "Please pick a date";
    const n = Number(form.guests);
    if (!Number.isInteger(n) || n < 1 || n > 12) e.guests = "1 – 12 guests";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  return (
    <section id="reserve" className="relative py-24 sm:py-32 bg-ink text-cream overflow-hidden">
      <div className="absolute -top-20 -left-20 size-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 size-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6">
        <SectionHeading
          kicker="Reserve"
          title={<>Save a <em className="text-gold">table</em></>}
          subtitle="We seat from 17:30 to 23:00, Tuesday through Sunday."
          light
        />

        <div className="mt-12 glass-dark rounded-3xl p-6 sm:p-10 shadow-elegant">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="mx-auto size-20 rounded-full bg-gradient-to-br from-gold to-secondary grid place-items-center text-cream"
                >
                  <Check className="size-10" strokeWidth={3} />
                </motion.div>
                <h3 className="mt-6 font-display text-3xl">Reservation received</h3>
                <p className="mt-3 text-cream/70 max-w-md mx-auto">
                  Thank you, {form.name.split(" ")[0] || "guest"}. We'll send a confirmation to{" "}
                  <span className="text-gold">{form.email}</span> shortly. We can't wait to host you.
                </p>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", guests: "2", date: "", time: "19:30", note: "" }); }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-2.5 text-sm hover:bg-cream/5 transition"
                >
                  Make another reservation
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                noValidate
                className="grid sm:grid-cols-2 gap-5"
              >
                <Field label="Full name" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={80}
                    className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-2 text-cream placeholder:text-cream/40"
                    placeholder="Jane Doe"
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-2 text-cream placeholder:text-cream/40"
                    placeholder="jane@example.com"
                  />
                </Field>
                <Field label="Guests" error={errors.guests}>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-2 text-cream"
                  >
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map((n) => (
                      <option key={n} value={n} className="bg-ink">{n} {n === 1 ? "guest" : "guests"}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Time" error={errors.time}>
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-2 text-cream"
                  >
                    {["17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"].map((t) => (
                      <option key={t} value={t} className="bg-ink">{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Date" error={errors.date} className="sm:col-span-2">
                  <input
                    type="date"
                    value={form.date}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-2 text-cream [color-scheme:dark]"
                  />
                </Field>
                <Field label="Special request (optional)" className="sm:col-span-2">
                  <textarea
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    maxLength={400}
                    rows={3}
                    className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-2 text-cream placeholder:text-cream/40 resize-none"
                    placeholder="Anniversary, allergies, seating preference…"
                  />
                </Field>
                <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                  <p className="text-xs text-cream/50">We hold tables for 15 minutes past your reservation time.</p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold to-secondary px-7 py-3 text-sm font-medium text-cream shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
                  >
                    Confirm reservation
                    <Send className="size-4" />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs uppercase tracking-[0.2em] text-cream/60 mb-1">{label}</span>
      {children}
      {error && <span className="block mt-1 text-xs text-accent">{error}</span>}
    </label>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const items = [
    { icon: MapPin, t: "Address", l: "21 Rue des Étoiles, 75008 Paris" },
    { icon: Phone, t: "Phone", l: "+33 1 42 00 00 00" },
    { icon: Mail, t: "Email", l: "bonjour@elanbistro.fr" },
    { icon: Clock, t: "Hours", l: "Tue – Sun · 17:30 – 23:00" },
  ];
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-stretch">
        <Reveal>
          <div className="h-full">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">Visit</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] text-balance">
              Find us in the <em className="text-gold">8th</em>.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              A short walk from the Champs-Élysées, tucked behind a quiet courtyard.
            </p>

            <ul className="mt-10 space-y-5">
              {items.map((it) => (
                <li key={it.t} className="flex items-start gap-4">
                  <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-full bg-muted text-gold">
                    <it.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.t}</div>
                    <div className="mt-1 text-foreground">{it.l}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-elegant border border-border">
            <iframe
              title="Map to Élan Bistro"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.3000%2C48.8650%2C2.3200%2C48.8780&layer=mapnik"
              className="absolute inset-0 size-full grayscale-[0.4]"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4 flex items-center gap-3">
              <MapPin className="size-5 text-gold shrink-0" />
              <div className="min-w-0">
                <div className="font-medium truncate">Élan Bistro</div>
                <div className="text-xs text-muted-foreground truncate">21 Rue des Étoiles, Paris</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative bg-ink text-cream">
      <div className="absolute top-0 inset-x-0 gold-divider" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-block size-9 rounded-full border border-gold/60 grid place-items-center text-gold font-display text-lg">É</span>
            <span className="font-display text-xl">Élan <span className="text-gold">Bistro</span></span>
          </div>
          <p className="mt-4 text-sm text-cream/70 max-w-sm">
            A modern bistro with classical soul. Seasonal tasting menus by Chef Julien Marchetti.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Facebook, Twitter].map((I, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid size-10 place-items-center rounded-full border border-cream/15 hover:border-gold hover:text-gold transition-colors">
                <I className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Explore</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="text-cream/70 hover:text-cream transition">{n.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Newsletter</div>
          <p className="mt-4 text-sm text-cream/70">Seasonal menus and private dinners, twice a year.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex items-center gap-2 rounded-full border border-cream/15 p-1.5 focus-within:border-gold transition-colors"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-cream/40"
              aria-label="Email for newsletter"
            />
            <button className="rounded-full bg-gold/90 hover:bg-gold p-2 text-ink" aria-label="Subscribe">
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Élan Bistro. All rights reserved.</p>
          <p>Crafted with care · Paris</p>
        </div>
      </div>
    </footer>
  );
}
