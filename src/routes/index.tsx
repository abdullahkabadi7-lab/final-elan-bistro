import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Menu, X, Star, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter,
  ChevronDown, ChevronLeft, ChevronRight, Award, Utensils, Wine, Check, Send, Sparkles,
} from "lucide-react";

import heroImg from "@/assets/elan-bistro-dining-room-hero.jpg";
import heroImg640Webp from "@/assets/elan-bistro-dining-room-hero-640.webp";
import heroImg1024Webp from "@/assets/elan-bistro-dining-room-hero-1024.webp";
import heroImg1920Webp from "@/assets/elan-bistro-dining-room-hero-1920.webp";
import heroImg640Jpg from "@/assets/elan-bistro-dining-room-hero-640.jpg";
import heroImg1024Jpg from "@/assets/elan-bistro-dining-room-hero-1024.jpg";

import aboutImg from "@/assets/elan-bistro-dining-room.jpg";
import aboutImg640Webp from "@/assets/elan-bistro-dining-room-640.webp";
import aboutImg1024Webp from "@/assets/elan-bistro-dining-room-1024.webp";

import chefImg from "@/assets/chef-julien-marchetti.jpg";
import chefImg400Webp from "@/assets/chef-julien-marchetti-400.webp";
import chefImg800Webp from "@/assets/chef-julien-marchetti-800.webp";

import dish1 from "@/assets/seared-hokkaido-scallops.jpg";
import dish1_400Webp from "@/assets/seared-hokkaido-scallops-400.webp";
import dish1_800Webp from "@/assets/seared-hokkaido-scallops-800.webp";

import dish2 from "@/assets/aged-wagyu-tenderloin.jpg";
import dish2_400Webp from "@/assets/aged-wagyu-tenderloin-400.webp";
import dish2_800Webp from "@/assets/aged-wagyu-tenderloin-800.webp";

import dish3 from "@/assets/valrhona-fondant.jpg";
import dish3_400Webp from "@/assets/valrhona-fondant-400.webp";
import dish3_800Webp from "@/assets/valrhona-fondant-800.webp";

import dish4 from "@/assets/oysters-de-cancale.jpg";
import dish4_400Webp from "@/assets/oysters-de-cancale-400.webp";
import dish4_800Webp from "@/assets/oysters-de-cancale-800.webp";

import dish5 from "@/assets/black-truffle-tagliolini.jpg";
import dish5_400Webp from "@/assets/black-truffle-tagliolini-400.webp";
import dish5_800Webp from "@/assets/black-truffle-tagliolini-800.webp";

import dish6 from "@/assets/roast-challans-duck.jpg";
import dish6_400Webp from "@/assets/roast-challans-duck-400.webp";
import dish6_800Webp from "@/assets/roast-challans-duck-800.webp";

import gal1 from "@/assets/signature-smoked-cocktail.jpg";
import gal1_400Webp from "@/assets/signature-smoked-cocktail-400.webp";
import gal1_800Webp from "@/assets/signature-smoked-cocktail-800.webp";

import gal2 from "@/assets/elan-bistro-wine-cellar.jpg";
import gal2_400Webp from "@/assets/elan-bistro-wine-cellar-400.webp";
import gal2_800Webp from "@/assets/elan-bistro-wine-cellar-800.webp";

import gal3 from "@/assets/chef-plating-dish.jpg";
import gal3_400Webp from "@/assets/chef-plating-dish-400.webp";
import gal3_800Webp from "@/assets/chef-plating-dish-800.webp";

import gal4 from "@/assets/candlelit-table-setting.jpg";
import gal4_400Webp from "@/assets/candlelit-table-setting-400.webp";
import gal4_800Webp from "@/assets/candlelit-table-setting-800.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "google-site-verification", content: "google5858753cd54c0199" },
      { title: "Élan Bistro | Modern French-Mediterranean Restaurant Showcase" },
      { name: "description", content: "Explore the Élan Bistro concept showcase: a fictional modern French-Mediterranean tasting-menu experience in Paris." },
      { property: "og:title", content: "Élan Bistro | Modern French-Mediterranean Restaurant Showcase" },
      { property: "og:description", content: "Explore the Élan Bistro concept showcase: a fictional modern French-Mediterranean tasting-menu experience in Paris." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Élan Bistro" },
      { property: "og:url", content: "https://final-elan-bistro.vercel.app/" },
      { property: "og:image", content: "https://final-elan-bistro.vercel.app/elan-bistro-dining-room-hero.jpg" },
      { property: "og:image:width", content: "1920" },
      { property: "og:image:height", content: "1280" },
      { property: "og:image:alt", content: "Élan Bistro candlelit dining room showcase" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Élan Bistro | Modern French-Mediterranean Restaurant Showcase" },
      { name: "twitter:description", content: "Explore the Élan Bistro concept showcase: a fictional modern French-Mediterranean tasting-menu experience in Paris." },
      { name: "twitter:image", content: "https://final-elan-bistro.vercel.app/elan-bistro-dining-room-hero.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://final-elan-bistro.vercel.app/" },
      {
        rel: "preload",
        as: "image",
        type: "image/webp",
        imageSrcSet: `${heroImg640Webp} 640w, ${heroImg1024Webp} 1024w, ${heroImg1920Webp} 1920w`,
        imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw",
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Restaurant",
              "@id": "https://final-elan-bistro.vercel.app/#restaurant",
              name: "Élan Bistro",
              description:
                "A fictional modern French-Mediterranean bistro demonstration project featuring seasonal tasting menus in Paris.",
              url: "https://final-elan-bistro.vercel.app/",
              servesCuisine: ["French", "Mediterranean"],
              hasMenu: "https://final-elan-bistro.vercel.app/#menu",
              acceptsReservations: "https://final-elan-bistro.vercel.app/#reserve",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "17:30",
                  closes: "23:00",
                },
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://final-elan-bistro.vercel.app/#website",
              name: "Élan Bistro",
              url: "https://final-elan-bistro.vercel.app/",
            },
            {
              "@type": "FAQPage",
              "@id": "https://final-elan-bistro.vercel.app/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is Élan Bistro a real operating restaurant?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Élan Bistro is a fictional demonstration project created to showcase modern frontend web design, typography, and interactive UI for a luxury culinary concept.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What type of cuisine is represented on the concept menu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The showcase presents a seasonal French-Mediterranean concept featuring classical French culinary technique paired with Mediterranean ingredients.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where is the restaurant concept set?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The fictional concept is set in Paris's 8th arrondissement near the Champs-Élysées.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What tasting menu is featured on the showcase?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The concept features a 7-course seasonal tasting menu priced at €145, with an optional wine pairing at €235.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the concept opening hours?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The dining concept is imagined as open Tuesday through Sunday from 17:30 to 23:00, closed on Mondays.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does the reservation form place a real booking?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The reservation form is a frontend demonstration component with client-side validation; it does not process real bookings or submit personal data to a restaurant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are the reviews, awards, and chef credentials real?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. All reviews, quotes, chef biography details, and accolades shown on this website are entirely fictional demonstration content.",
                  },
                },
              ],
            },
          ],
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
  { label: "FAQ", href: "#faq" },
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
        <FAQ />
        <DisclaimerNotice />
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
        <picture>
          <source
            type="image/webp"
            srcSet={`${heroImg640Webp} 640w, ${heroImg1024Webp} 1024w, ${heroImg1920Webp} 1920w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
          <source
            type="image/jpeg"
            srcSet={`${heroImg640Jpg} 640w, ${heroImg1024Jpg} 1024w, ${heroImg} 1920w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
          <img
            src={heroImg}
            alt="Élan Bistro candlelit dining room in Paris"
            className="size-full object-cover"
            width={1920}
            height={1280}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </picture>
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
          Culinary Concept · Paris 8ème
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
  const GLANCE_FACTS = [
    { label: "Concept name", value: "Élan Bistro" },
    { label: "Project type", value: "Fictional demonstration" },
    { label: "Cuisine style", value: "French-Mediterranean" },
    { label: "Menu format", value: "7-Course Seasonal Tasting" },
    { label: "Location setting", value: "Paris, 8th Arrondissement" },
    { label: "Hours concept", value: "Tuesday–Sunday, 17:30–23:00" },
    { label: "Dress code", value: "Smart Casual" },
    { label: "Bookings", value: "Frontend UI demo" },
  ];

  const stats = [
    { n: "7", l: "Tasting courses" },
    { n: "32", l: "Curated recipes" },
    { n: "600", l: "Cellar labels" },
    { n: "100%", l: "Seasonal focus" },
  ];
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 to-secondary/20 blur-2xl" />
            <picture>
              <source
                type="image/webp"
                srcSet={`${aboutImg640Webp} 640w, ${aboutImg1024Webp} 1024w`}
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <img
                src={aboutImg}
                alt="Élan Bistro dining room interior in Paris"
                width={1200}
                height={1400}
                loading="lazy"
                decoding="async"
                className="relative rounded-3xl shadow-elegant w-full aspect-[4/5] object-cover"
              />
            </picture>
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
                <span className="text-muted-foreground">— Concept Review</span>
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
            <p id="about-summary" className="mt-6 text-muted-foreground text-base leading-relaxed">
              Conceived as an intimate culinary demonstration in Paris's 8th arrondissement, Élan Bistro explores the balance of classical French technique and Mediterranean warmth. Every plate is crafted to evoke quiet candlelit evenings, seasonal ingredients, and meticulous artisan craft.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              The showcase highlights seasonal sourcing, house-crafted culinary elements, and a 600-label cellar concept curated to accompany a seven-course tasting journey.
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

          <Reveal delay={0.25}>
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-xs text-muted-foreground/80 leading-relaxed italic">
                Notice: Élan Bistro is a fictional design and frontend development demonstration. All details, menus, and reviews shown are for illustrative showcase purposes only.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 sm:mt-24 mx-auto max-w-7xl px-6">
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border/60 bg-card/60 p-7 sm:p-10 shadow-elegant backdrop-blur-sm">
            <div className="border-b border-border/40 pb-4 mb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary font-medium">At a glance</p>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl text-foreground">
                Élan Bistro <span className="italic text-gold">at a glance</span>
              </h3>
            </div>

            <dl id="glance-facts" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {GLANCE_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-border/40 bg-background/60 p-4 sm:p-5 transition-all hover:border-gold/30 hover:bg-background/80"
                >
                  <dt className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm sm:text-base font-medium text-foreground leading-snug">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SIGNATURE DISHES ---------------- */
const SIGNATURE = [
  { img: dish1, webp400: dish1_400Webp, webp800: dish1_800Webp, name: "Seared Hokkaido Scallops", desc: "Cauliflower velouté, brown butter, sea herbs.", price: "€38", cat: "Sea", alt: "Seared Hokkaido scallops served at Élan Bistro" },
  { img: dish2, webp400: dish2_400Webp, webp800: dish2_800Webp, name: "Aged Wagyu Tenderloin", desc: "Black truffle jus, charred shallot, bone marrow.", price: "€72", cat: "Land", alt: "Aged Wagyu tenderloin at Élan Bistro" },
  { img: dish3, webp400: dish3_400Webp, webp800: dish3_800Webp, name: "Valrhona Fondant", desc: "70% dark chocolate, raspberry coulis, 24k leaf.", price: "€18", cat: "Sweet", alt: "Valrhona chocolate fondant dessert" },
  { img: dish4, webp400: dish4_400Webp, webp800: dish4_800Webp, name: "Oysters de Cancale", desc: "Half-dozen on ice, mignonette, citron.", price: "€32", cat: "Sea", alt: "Oysters de Cancale on ice at Élan Bistro" },
  { img: dish5, webp400: dish5_400Webp, webp800: dish5_800Webp, name: "Black Truffle Tagliolini", desc: "House pasta, périgord truffle, parmigiano 36mo.", price: "€44", cat: "Pasta", alt: "Black truffle tagliolini pasta at Élan Bistro" },
  { img: dish6, webp400: dish6_400Webp, webp800: dish6_800Webp, name: "Roast Challans Duck", desc: "Sour cherry gastrique, glazed root vegetables.", price: "€48", cat: "Land", alt: "Roast Challans duck served at Élan Bistro" },
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
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${d.webp400} 400w, ${d.webp800} 800w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <img
                    src={d.img}
                    alt={d.alt}
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={768}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-widest text-gold font-medium">
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

      <div className="mt-8 max-w-2xl mx-auto px-6 text-center">
        <Reveal delay={0.15}>
          <p className="text-sm sm:text-base text-cream/75 leading-relaxed text-balance">
            Élan Bistro’s seasonal French-Mediterranean menu is rooted in classical French technique and Mediterranean culinary inspiration, plated with quiet precision. Sourced from small producers within 200km of Paris, our dishes evolve weekly with the harvest across starters, mains, desserts, and cellar pairings, alongside a seven-course seasonal tasting menu.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Menu categories">
          {cats.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                role="tab"
                id={`menu-tab-${c.toLowerCase().replace(/\s+/g, "-")}`}
                aria-selected={isActive}
                aria-controls={`menu-panel-${c.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActive(c)}
                className={`relative rounded-full px-5 py-2.5 text-sm transition-all ${
                  isActive ? "text-ink font-medium" : "text-cream/70 hover:text-cream"
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

        <div className="mt-12">
          {cats.map((c) => {
            const isCurrent = c === active;
            return (
              <div
                key={c}
                role="tabpanel"
                id={`menu-panel-${c.toLowerCase().replace(/\s+/g, "-")}`}
                aria-labelledby={`menu-tab-${c.toLowerCase().replace(/\s+/g, "-")}`}
                className={isCurrent ? "block" : "hidden"}
              >
                <div className="flex items-center justify-between border-b border-cream/15 pb-3 mb-8">
                  <h3 className="font-display text-xl text-gold font-normal tracking-wide">
                    {c}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-cream/50">
                    {c === "Drinks" ? "Cellar & Bar" : "Course"}
                  </span>
                </div>

                <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-7">
                  {MENU[c].map((item) => (
                    <li key={item.name} className="group" itemScope itemType="https://schema.org/MenuItem">
                      <meta itemProp="menuSection" content={c} />
                      <div className="flex items-baseline gap-3">
                        <h4 className="font-display text-xl text-cream" itemProp="name">{item.name}</h4>
                        <span className="flex-1 border-b border-dotted border-cream/20 translate-y-[-4px]" />
                        <span className="font-display text-lg text-gold whitespace-nowrap" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                          <span itemProp="price">{item.price}</span>
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-cream/65 leading-relaxed" itemProp="description">
                        <span className="sr-only">Ingredients: </span>
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 rounded-2xl border border-gold/25 bg-cream/5 px-6 py-6 text-center backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="font-display text-base sm:text-lg text-gold">
              Élan Bistro 7-Course Seasonal Tasting Menu
            </h3>
            <p className="mt-1 text-xs sm:text-sm uppercase tracking-[0.2em] text-cream/80">
              7 courses · €145 · with sommelier wine pairing €235
            </p>
            <p className="mt-3 text-xs text-cream/60 leading-relaxed">
              Dedicated vegetarian tasting menu available upon request. We gladly accommodate dietary allergies and gluten-conscious dining with 24 hours advance notice.
            </p>
          </div>
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
            <picture>
              <source
                type="image/webp"
                srcSet={`${chefImg400Webp} 400w, ${chefImg800Webp} 800w`}
                sizes="(max-width: 768px) 100vw, 416px"
              />
              <img
                src={chefImg}
                alt="Chef Julien Marchetti at Élan Bistro"
                width={1000}
                height={1300}
                loading="lazy"
                decoding="async"
                className="relative rounded-3xl w-full aspect-[4/5] object-cover shadow-elegant"
              />
            </picture>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">Culinary vision</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-balance">
              Julien <em className="text-gold">Marchetti</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted-foreground text-base leading-relaxed">
              The culinary vision of Chef Julien Marchetti reflects a deep reverence for classical French foundations and Mediterranean warmth—sourcing vibrant seasonal produce and crafting thoughtful harmonies of flavor.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote className="mt-8 pl-6 border-l-2 border-gold/60">
              <p className="font-display italic text-xl text-foreground/90 text-balance">
                "A great dish doesn't ask for attention. It rewards it."
              </p>
              <footer className="mt-2 text-sm text-muted-foreground">— Julien Marchetti (Concept Chef)</footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Award, t: "Haute Cuisine", s: "Creative direction" },
                { icon: Utensils, t: "Classical Base", s: "Modern technique" },
                { icon: Wine, t: "600 Labels", s: "Curated cellar concept" },
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
  { src: gal1, webp400: gal1_400Webp, webp800: gal1_800Webp, alt: "Signature smoked cocktail at Élan Bistro", h: "row-span-2", w: 800, hdim: 1200 },
  { src: gal2, webp400: gal2_400Webp, webp800: gal2_800Webp, alt: "Wine cellar at Élan Bistro", h: "", w: 800, hdim: 600 },
  { src: dish5, webp400: dish5_400Webp, webp800: dish5_800Webp, alt: "Black truffle tagliolini at Élan Bistro", h: "", w: 800, hdim: 600 },
  { src: gal3, webp400: gal3_400Webp, webp800: gal3_800Webp, alt: "Chef plating a dish at Élan Bistro", h: "row-span-2", w: 800, hdim: 1200 },
  { src: gal4, webp400: gal4_400Webp, webp800: gal4_800Webp, alt: "Candlelit table setting at Élan Bistro", h: "", w: 800, hdim: 600 },
  { src: dish4, webp400: dish4_400Webp, webp800: dish4_800Webp, alt: "Oysters de Cancale on ice at Élan Bistro", h: "", w: 800, hdim: 600 },
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
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${g.webp400} 400w, ${g.webp800} 800w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    width={g.w}
                    height={g.hdim}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </picture>
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
              width={GALLERY[lightbox].w}
              height={GALLERY[lightbox].hdim}
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
  { name: "Camille R.", role: "Concept Reviewer", initials: "CR", rating: 5,
    text: "Quietly extraordinary. Élan Bistro doesn't perform — it cooks. Every plate feels considered down to the last grain of salt." },
  { name: "Marcus L.", role: "Sample Guest", initials: "ML", rating: 5,
    text: "I've returned to this counter through every season. The duck is reason enough. The service, the room — reason enough again." },
  { name: "Aïcha B.", role: "Design Reviewer", initials: "AB", rating: 5,
    text: "A masterclass in restraint. You leave feeling looked after, not impressed at — and that is the rarest thing in fine dining." },
  { name: "Henrik S.", role: "Sommelier Note", initials: "HS", rating: 5,
    text: "The wine list is a thoughtful tribute to small independent growers. A lovely pairing for the seasonal tasting menu." },
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
          kicker="Demonstration"
          title={<>Sample guest <em className="text-gold">impressions</em></>}
          subtitle="Fictional sample testimonials illustrating guest experience and brand tone."
        />

        <div className="mt-14 mx-auto max-w-3xl px-6">
          <div className="relative h-[280px] sm:h-[240px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={idx}
                id="review-panel"
                role="tabpanel"
                aria-label={`Testimonial ${idx + 1} of ${REVIEWS.length} by ${REVIEWS[idx].name}`}
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

          <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label="Review pagination">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`View review ${i + 1} of ${REVIEWS.length}: ${REVIEWS[i].name}`}
                aria-selected={i === idx}
                aria-controls="review-panel"
                role="tab"
                className={`h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${i === idx ? "w-8 bg-gold" : "w-2.5 bg-foreground/30"}`}
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
                <Field label="Full name" id="res-name" error={errors.name}>
                  <input
                    id="res-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={80}
                    aria-describedby={errors.name ? "res-name-error" : undefined}
                    className="w-full bg-transparent border-b border-cream/25 focus:border-gold outline-none py-2 text-cream placeholder:text-cream/65"
                    placeholder="Jane Doe"
                  />
                </Field>
                <Field label="Email" id="res-email" error={errors.email}>
                  <input
                    id="res-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    aria-describedby={errors.email ? "res-email-error" : undefined}
                    className="w-full bg-transparent border-b border-cream/25 focus:border-gold outline-none py-2 text-cream placeholder:text-cream/65"
                    placeholder="jane@example.com"
                  />
                </Field>
                <Field label="Guests" id="res-guests" error={errors.guests}>
                  <select
                    id="res-guests"
                    name="guests"
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/25 focus:border-gold outline-none py-2 text-cream"
                  >
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map((n) => (
                      <option key={n} value={n} className="bg-ink">{n} {n === 1 ? "guest" : "guests"}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Time" id="res-time" error={errors.time}>
                  <select
                    id="res-time"
                    name="time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/25 focus:border-gold outline-none py-2 text-cream"
                  >
                    {["17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"].map((t) => (
                      <option key={t} value={t} className="bg-ink">{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Date" id="res-date" error={errors.date} className="sm:col-span-2">
                  <input
                    id="res-date"
                    name="date"
                    type="date"
                    value={form.date}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    aria-describedby={errors.date ? "res-date-error" : undefined}
                    className="w-full bg-transparent border-b border-cream/25 focus:border-gold outline-none py-2 text-cream [color-scheme:dark]"
                  />
                </Field>
                <Field label="Special request (optional)" id="res-note" className="sm:col-span-2">
                  <textarea
                    id="res-note"
                    name="note"
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    maxLength={400}
                    rows={3}
                    className="w-full bg-transparent border-b border-cream/25 focus:border-gold outline-none py-2 text-cream placeholder:text-cream/65 resize-none"
                    placeholder="Anniversary, allergies, seating preference…"
                  />
                </Field>
                <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                  <p className="text-xs text-cream/70">Notice: Demonstration form only. Submissions validate in the browser and do not create real restaurant reservations.</p>
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

function Field({ label, id, error, children, className = "" }: { label: string; id: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`block ${className}`}>
      <label htmlFor={id} className="block text-xs uppercase tracking-[0.2em] text-cream/80 mb-1 font-medium">{label}</label>
      {children}
      {error && <span id={`${id}-error`} role="alert" className="block mt-1 text-xs text-accent">{error}</span>}
    </div>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const items = [
    {
      icon: MapPin,
      t: "Address",
      content: (
        <div>
          <span className="block text-foreground font-medium">21 Rue des Étoiles, 75008 Paris (Fictional Location)</span>
          <span className="block text-xs text-muted-foreground mt-0.5">8th Arrondissement · Concept Setting</span>
        </div>
      ),
    },
    {
      icon: Phone,
      t: "Phone",
      content: (
        <a
          href="tel:+33142000000"
          className="text-foreground hover:text-gold transition-colors font-medium inline-block"
          aria-label="Sample demonstration phone +33 1 42 00 00 00"
        >
          +33 1 42 00 00 00 (Sample Demo)
        </a>
      ),
    },
    {
      icon: Mail,
      t: "Email",
      content: (
        <a
          href="mailto:bonjour@elanbistro.fr"
          className="text-foreground hover:text-gold transition-colors font-medium inline-block"
          aria-label="Sample demonstration email bonjour@elanbistro.fr"
        >
          bonjour@elanbistro.fr (Demo Contact)
        </a>
      ),
    },
    {
      icon: Clock,
      t: "Hours",
      content: (
        <div>
          <span className="block text-foreground font-medium">Tuesday – Sunday · 17:30 – 23:00 (Concept)</span>
          <span className="block text-xs text-muted-foreground mt-0.5">Closed Mondays</span>
        </div>
      ),
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-stretch">
        <Reveal>
          <div id="contact-details" className="h-full">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">Visit</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] text-balance">
              Find us in the <em className="text-gold">8th</em>.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              A fictional dining concept imagined in a quiet courtyard steps from the Champs-Élysées.
            </p>

            <ul className="mt-10 space-y-5">
              {items.map((it) => (
                <li key={it.t} className="flex items-start gap-4">
                  <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-full bg-muted text-gold">
                    <it.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.t}</div>
                    <div className="mt-1">{it.content}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Transit & Setting (Concept)</div>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Métro Concept:</strong> Franklin D. Roosevelt (Lines 1 & 9) or George V (Line 1).<br />
                <strong className="text-foreground">Note:</strong> Displayed for demonstration and location immersion purposes only.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative h-[420px] lg:h-full min-h-[420px] rounded-3xl overflow-hidden shadow-elegant border border-border flex flex-col justify-between">
            <iframe
              title="Map to Élan Bistro Paris"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.3000%2C48.8650%2C2.3200%2C48.8780&layer=mapnik"
              className="absolute inset-0 size-full grayscale-[0.4]"
              loading="lazy"
            />
            <div className="relative m-4 self-end flex gap-2">
              <span className="glass-dark rounded-full px-3.5 py-1.5 text-xs text-cream shadow">
                Concept Map View
              </span>
            </div>
            <div className="relative m-4 glass rounded-2xl p-4 flex items-center gap-3">
              <MapPin className="size-5 text-gold shrink-0" />
              <div className="min-w-0">
                <div className="font-medium truncate text-foreground">Élan Bistro (Concept)</div>
                <div className="text-xs text-muted-foreground truncate">21 Rue des Étoiles, 75008 Paris (Fictional)</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQS = [
    {
      q: "Is Élan Bistro a real operating restaurant?",
      a: "No. Élan Bistro is a fictional demonstration project created to showcase modern frontend web design, typography, and interactive UI for a luxury culinary concept.",
    },
    {
      q: "What type of cuisine is represented on the concept menu?",
      a: "The showcase presents a seasonal French-Mediterranean concept featuring classical French culinary technique paired with Mediterranean ingredients.",
    },
    {
      q: "Where is the restaurant concept set?",
      a: "The fictional concept is set in Paris's 8th arrondissement near the Champs-Élysées.",
    },
    {
      q: "What tasting menu is featured on the showcase?",
      a: "The concept features a 7-course seasonal tasting menu priced at €145, with an optional wine pairing at €235.",
    },
    {
      q: "What are the concept opening hours?",
      a: "The dining concept is imagined as open Tuesday through Sunday from 17:30 to 23:00, closed on Mondays.",
    },
    {
      q: "Does the reservation form place a real booking?",
      a: "No. The reservation form is a frontend demonstration component with client-side validation; it does not process real bookings or submit personal data to a restaurant.",
    },
    {
      q: "Are the reviews, awards, and chef credentials real?",
      a: "No. All reviews, quotes, chef biography details, and accolades shown on this website are entirely fictional demonstration content.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-muted/30">
      <SectionHeading
        kicker="Questions"
        title={<>Frequently asked <em className="text-gold">questions</em></>}
        subtitle="Common questions about this culinary concept and demonstration showcase."
      />

      <div className="mt-12 sm:mt-16 mx-auto max-w-3xl px-6 space-y-4">
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={faq.q} delay={(i % 4) * 0.05}>
              <div className="rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm p-5 sm:p-6 shadow-sm transition-all hover:border-gold/30">
                <button
                  type="button"
                  id={`faq-question-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <h3 className="font-display text-lg sm:text-xl text-foreground group-hover:text-gold transition-colors">
                    {faq.q}
                  </h3>
                  <span
                    className={`shrink-0 grid size-8 place-items-center rounded-full border border-border/60 bg-background/50 text-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 border-gold/40 text-gold" : ""
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-border/40" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- TRANSPARENCY NOTICE ---------------- */
function DisclaimerNotice() {
  return (
    <section id="transparency" className="relative border-t border-cream/15 bg-ink py-12 px-6 text-cream">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gold/30 bg-cream/5 p-6 sm:p-8 backdrop-blur-sm text-center">
        <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-[11px] uppercase tracking-widest text-gold font-medium mb-3">
          Project Transparency Notice
        </span>
        <h3 className="font-display text-xl sm:text-2xl text-cream">
          Fictional Demonstration Showcase
        </h3>
        <p className="mt-3 text-xs sm:text-sm text-cream/75 leading-relaxed max-w-2xl mx-auto">
          Élan Bistro is a fictional culinary concept created exclusively for frontend web development, design, and SEO demonstration purposes. It is <strong>not</strong> an active or operating restaurant. All menus, chef profiles, testimonials, press quotes, and accolades displayed across this website are fictional demonstration content.
        </p>
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
          <p className="mt-4 text-sm text-cream/80 max-w-sm">
            A modern bistro with classical soul. Seasonal tasting menus by Chef Julien Marchetti.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { Icon: Instagram, label: "Élan Bistro Instagram demonstration page" },
              { Icon: Facebook, label: "Élan Bistro Facebook demonstration page" },
              { Icon: Twitter, label: "Élan Bistro Twitter demonstration page" },
            ].map(({ Icon, label }, i) => (
              <a
                key={i}
                href="#"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-cream/20 hover:border-gold hover:text-gold transition-colors text-cream"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Explore</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="text-cream/80 hover:text-cream transition">{n.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Newsletter</div>
          <p className="mt-4 text-sm text-cream/80">Seasonal menus and private dinners, twice a year.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex items-center gap-2 rounded-full border border-cream/25 p-1.5 focus-within:border-gold transition-colors"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address for newsletter</label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-cream/65 text-cream"
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              className="rounded-full bg-gold/90 hover:bg-gold p-2 text-ink"
              aria-label="Subscribe to newsletter"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/70">
          <p>© {new Date().getFullYear()} Élan Bistro. All rights reserved.</p>
          <p>Crafted with care · Paris</p>
        </div>
      </div>
    </footer>
  );
}
