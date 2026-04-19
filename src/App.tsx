/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Facebook,
  MapPin,
  Monitor,
  Layout,
  Bus,
  Maximize,
  CheckCircle2,
  ChevronLeft
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logoSrc from '../MEDIA/logo.png';
import greyLogoSrc from '../MEDIA/affissione.comlogogrey.png';
import logo1 from '../MEDIA/1.png';
import logo2 from '../MEDIA/2.png';
import logo3 from '../MEDIA/3.png';
import logo4 from '../MEDIA/4.png';
import logo6 from '../MEDIA/6.png';
import logo7 from '../MEDIA/7.png';
import logo8 from '../MEDIA/8.png';
import post1Src from '../MEDIA/post-1.jpg';
import maxi1Src from '../MEDIA/maxi1.jpg';
import pensiliSrc from '../MEDIA/pensiline.jpg';
import impianti5Src from '../MEDIA/5.jpg';
import mapSrc from '../MEDIA/map.jpg';

const partnerLogos = [logo1, logo2, logo3, logo4, logo6, logo7, logo8];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["AZIENDA", "PRODOTTI", "CONTATTI", "BLOG", "CASI STUDIO"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close on desktop resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* Background layer — slides down from top on scroll or menu open */}
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out"
          style={{
            transform: scrolled || menuOpen ? 'translateY(0)' : 'translateY(-100%)',
            background: 'rgba(10, 22, 40, 0.93)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 h-[72px] flex items-center">
          {/* Desktop left nav links */}
          <div className="hidden md:flex items-center gap-8">
            {["AZIENDA", "PRODOTTI", "CONTATTI", "BLOG"].map((item) => (
              <a key={item} href="#" className="text-[11px] font-bold tracking-[0.14em] text-white/80 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 -ml-2 relative z-10 shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-[2px] bg-white rounded-full"
              style={{
                transition: 'transform 300ms ease',
                transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
              }}
            />
            <span
              className="block w-6 h-[2px] bg-white rounded-full my-[5px]"
              style={{
                transition: 'opacity 300ms ease',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-[2px] bg-white rounded-full"
              style={{
                transition: 'transform 300ms ease',
                transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
              }}
            />
          </button>

          {/* Center logo absolutely positioned */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <img src={logoSrc} alt="affissione.com" className="h-9 brightness-200" />
          </div>

          {/* Desktop right: CASI STUDIO + CTA button */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <a href="#" className="text-[11px] font-bold tracking-[0.14em] text-white/80 hover:text-white transition-colors">
              CASI STUDIO
            </a>
            <button className="gradient-teal text-white px-6 py-2.5 rounded-full text-[11px] font-bold tracking-[0.05em] transition-all">
              RICHEDI UN PREVENTIVO
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="md:hidden fixed left-0 right-0 bottom-0 z-40"
        style={{
          top: '72px',
          background: 'rgba(10, 22, 40, 0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          transition: 'opacity 300ms ease, visibility 300ms ease',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          overflowY: 'auto',
        }}
      >
        <div className="flex flex-col px-8 pt-8 pb-16">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href="#"
              animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
              transition={{ duration: 0.3, delay: menuOpen ? i * 0.07 : 0 }}
              className="text-white/80 hover:text-white font-bold text-2xl tracking-[0.06em] py-5 border-b border-white/10 block"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </motion.a>
          ))}
          <motion.div
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: menuOpen ? navItems.length * 0.07 : 0 }}
            className="mt-10"
          >
            <button className="gradient-teal text-white w-full py-4 rounded-full text-sm font-bold tracking-[0.05em]">
              RICHIEDI UN PREVENTIVO
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const Hero = () => (
  <section
    className="relative pt-32 pb-0 text-white text-center"
    style={{ background: 'linear-gradient(to bottom, #0a1628 0%, #003d3d 55%, #007070 100%)' }}
  >
    {/* Radial teal glow */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #00a8a8 0%, transparent 65%)' }}
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
          {/* Overlapping avatars */}
          <div className="flex -space-x-3 shrink-0">
            {[
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border-2 border-white/30 shadow-sm"
              />
            ))}
          </div>
          {/* Text */}
          <div className="text-left">
            <div className="text-sm font-bold text-white leading-tight">Oltre 100 aziende</div>
            <div className="text-xs text-white/60 leading-tight">hanno usufruito del nostro servizio</div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8">
          Impatto <span className="text-gradient">Senza Confini.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
          Dominia il panorama urbano con soluzioni di affissione premium.
          Trasformiamo ogni spazio in un'opportunità di dialogo memorabile tra brand e pubblico.
        </p>

        <div className="relative inline-block mb-16">
          {/* Glow behind button */}
          <div
            className="absolute -inset-4 rounded-full blur-2xl opacity-55 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #008080 0%, #00a8a8 100%)' }}
          />
          <button className="relative gradient-teal text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-[1.04] hover:brightness-110">
            Richiedi Preventivo
          </button>
        </div>

        {/* Video with gradient border — extends 50% below hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-[2.2rem] p-[10px] mb-[-18rem]"
          style={{
            background: 'linear-gradient(135deg, #008080 0%, #004040 100%)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,128,128,0.3)'
          }}
        >
          <div className="rounded-[1.6rem] overflow-hidden aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/i-e3w6FqQrw?autoplay=1&mute=1&loop=1&playlist=i-e3w6FqQrw"
              title="Affissione.com Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* White wave SVG — separates hero from logo strip */}
    <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: '180px' }}
      >
        <path d="M0,140 C360,10 1080,10 1440,140 L1440,200 L0,200 Z" fill="white" />
      </svg>
    </div>
  </section>
);

const Partners = () => (
  <section className="pt-[22rem] pb-16 bg-white overflow-hidden">
    <div className="relative flex">
      <div className="flex animate-scroll-logos shrink-0">
        {[...partnerLogos, ...partnerLogos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center px-14 shrink-0">
            <img
              src={logo}
              alt={`Partner ${(i % partnerLogos.length) + 1}`}
              className="h-12 object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const bentoItems = [
  { img: post1Src, tag: "OUTDOOR", title: "Maxi Poster", desc: "Poster tutto facciata", span: "lg:col-span-2" },
  { img: maxi1Src, tag: "DIGITAL MEDIA", title: "Maxi Schermi LED", desc: "Maxi schermi digitali", span: "lg:col-span-1" },
  { img: pensiliSrc, tag: "CITY PULSE", title: "Arredo Urbano", desc: "Pensiline autobus", span: "lg:col-span-1" },
  { img: impianti5Src, tag: "OOH NETWORK", title: "Impianti Outdoor e Indoor", desc: "Poster 6×3 – Poster 6×6 – Poster 12×3", span: "lg:col-span-2" },
];

const Services = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-14">
        <h2 className="text-4xl font-display font-bold mb-4">Il Nostro Arsenale</h2>
        <p className="text-gray-500 max-w-xl">Dalla potenza del Grande Formato alla precisione capillare dell'Arredo Urbano.</p>
      </div>

      {/* Bento grid — 3 cols, 2 rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[320px]">
        {bentoItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3 }}
            className={`group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer ${item.span}`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-teal-light mb-2 block">
                {item.tag}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-white/65">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <div className="relative inline-block">
          <div
            className="absolute -inset-3 rounded-full blur-xl opacity-40 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #008080 0%, #00a8a8 100%)' }}
          />
          <button className="relative gradient-teal text-white px-10 py-4 rounded-full text-sm font-bold tracking-wide transition-all hover:scale-[1.03] hover:brightness-110 shadow-lg shadow-brand-teal/20">
            Visualizza tutti i prodotti
          </button>
        </div>
      </div>
    </div>
  </section>
);

const aboutStats = [
  { value: "3.500", label: "Facciate Pubblicitarie" },
  { value: "200", label: "Comuni serviti dai nostri impianti" },
  { value: "7.200", label: "Campagne espletate" },
  { value: "7 Milioni", label: "Persone raggiunte ogni giorno" },
];

const aboutFeatures = [
  "Pianifichiamo la migliore soluzione",
  "Moderni supporti di stampa digitale",
  "Ripristino in caso di danneggiamento",
  "Report sulla postazione contrattualizzata",
];

const About = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      {/* Two-column: map left, text right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-0">

        {/* Left — Sicily map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200"
        >
          <img src={mapSrc} alt="Copertura Sicilia" className="w-full object-cover" />
        </motion.div>

        {/* Right — text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-wider uppercase mb-6">
            Player di Riferimento
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
            Siamo un Player<br />di riferimento
          </h2>

          <p className="text-gray-500 leading-relaxed mb-4">
            Siamo una Media Agency leader nel settore advertising outdoor e indoor, rappresentata da un Team con oltre 20 anni di esperienza sul territorio siciliano.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Il nostro patrimonio conta oltre 3500 facciate pubblicitarie distribuite capillarmente nei nove capoluoghi di provincia siciliana e comuni minori, in location esclusive: Catania, Messina, Siracusa, Ragusa, Enna, Caltanissetta, Agrigento, Trapani, Palermo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {aboutFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-gray-700">{f}</span>
              </div>
            ))}
          </div>

          <div className="relative inline-block">
            <div
              className="absolute -inset-3 rounded-full blur-xl opacity-40 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, #008080 0%, #00a8a8 100%)' }}
            />
            <button className="relative gradient-teal text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:scale-[1.03] hover:brightness-110 transition-all shadow-lg shadow-brand-teal/20">
              Richiedi Preventivo
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats row — full width, grid with 1px divider trick */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden mt-16 border border-gray-100">
        {aboutStats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white px-8 py-10 text-center"
          >
            <div className="text-4xl lg:text-5xl font-display font-bold text-brand-teal mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-500 leading-snug">{stat.label}</div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

const processSteps = [
  { num: "01", title: "Consulenza", subtitle: "Analisi preliminare", desc: "Consulenza preliminare e analisi degli obiettivi della campagna per definire insieme la strategia migliore." },
  { num: "02", title: "Territorio", subtitle: "Targeting", desc: "Individuazione del territorio, del bacino di utenza da coprire e del target da colpire." },
  { num: "03", title: "Budget", subtitle: "Pianificazione economica", desc: "Definizione del budget da destinare alla campagna in base agli obiettivi e alla portata desiderata." },
  { num: "04", title: "Pianificazione", subtitle: "Mezzi e strategia", desc: "Ricerca e pianificazione dei migliori mezzi pubblicitari in rapporto al territorio e al budget disponibile." },
  { num: "05", title: "Creatività", subtitle: "Messaggio", desc: "Gestione della creatività e del messaggio pubblicitario in collaborazione con l'agenzia di grafica." },
  { num: "06", title: "Esecuzione", subtitle: "Affissione", desc: "Espletamento della campagna: stampa, affissione e report fotografico dettagliato." },
  { num: "07", title: "Monitoraggio", subtitle: "Risultati", desc: "Analisi e monitoraggio dei risultati ottenuti per misurare l'efficacia della campagna." },
];

const CARD_W = 340;
const CARD_GAP = 24;
const STEP_SIZE = CARD_W + CARD_GAP;

const Process = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const activeStepRef = useRef(0);
  const total = processSteps.length;

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      // Skip on mobile (element hidden, offsetHeight = 0)
      if (!wrapper || wrapper.offsetHeight === 0) return;
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const maxScroll = wrapper.offsetHeight - window.innerHeight;
      const rawProgress = Math.max(0, Math.min(1, (window.scrollY - wrapperTop) / maxScroll));
      const newStep = Math.min(total - 1, Math.floor(rawProgress * total));
      if (newStep !== activeStepRef.current) {
        activeStepRef.current = newStep;
        setActiveStep(newStep);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [total]);

  return (
    <>
      {/* ── DESKTOP version: sticky scroll animation ── */}
      <div ref={wrapperRef} className="hidden md:block" style={{ height: '700vh' }}>
        <div className="sticky top-0 h-screen bg-gray-50 flex flex-col justify-center overflow-hidden">

          {/* Header */}
          <div className="pb-5 px-14 md:px-20 shrink-0 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-wider uppercase mb-4">
              Il Processo
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
              La tua{' '}
              <em className="not-italic italic text-brand-teal">campagna</em>
              {' '}in 7 step
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
              Un percorso strutturato per trasformare la tua idea pubblicitaria in una campagna di successo sul territorio.
            </p>
          </div>

          {/* Progress track */}
          <div className="px-14 md:px-20 shrink-0 mb-3">
            <div className="relative h-[3px] bg-gray-200 rounded-full">
              {/* Fill */}
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${(activeStep / (total - 1)) * 100}%`,
                  transition: 'width 600ms ease',
                  background: 'linear-gradient(90deg, #004040, #008080)',
                }}
              />
              {/* Dots */}
              {processSteps.map((_, i) => {
                const isActive = i === activeStep;
                const isPast = i < activeStep;
                return (
                  <div
                    key={i}
                    className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${(i / (total - 1)) * 100}%` }}
                  >
                    <div
                      className="rounded-full border-2 transition-all duration-500"
                      style={{
                        width: isActive ? 16 : 12,
                        height: isActive ? 16 : 12,
                        background: isPast || isActive ? '#008080' : '#fff',
                        borderColor: isPast || isActive ? '#008080' : '#d1d5db',
                        boxShadow: isActive ? '0 0 0 4px rgba(0,128,128,0.18), 0 0 14px rgba(0,128,128,0.45)' : 'none',
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Step labels */}
            <div className="flex justify-between mt-3">
              {processSteps.map((s, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    transition: 'color 400ms ease',
                    color: i === activeStep ? 'var(--color-brand-teal)'
                      : i < activeStep ? 'rgba(0,128,128,0.4)'
                        : '#d1d5db',
                  }}
                >
                  {s.title}
                </span>
              ))}
            </div>
          </div>

          {/* Horizontal card row */}
          <div className="shrink-0 px-14 md:px-20 overflow-hidden" style={{ height: 280 }}>
            <div
              style={{
                display: 'flex',
                gap: CARD_GAP,
                transform: `translateX(-${activeStep * STEP_SIZE}px)`,
                transition: 'transform 700ms cubic-bezier(0.22,1,0.36,1)',
                height: '100%',
                alignItems: 'center',
              }}
            >
              {processSteps.map((s, i) => {
                const isActive = i === activeStep;
                const isPast = i < activeStep;
                return (
                  <div
                    key={i}
                    style={{
                      width: CARD_W,
                      flexShrink: 0,
                      height: 260,
                      borderRadius: 24,
                      padding: '2rem',
                      background: '#fff',
                      border: isActive ? '1.5px solid rgba(0,128,128,0.3)' : '1.5px solid #f0f0f0',
                      boxShadow: isActive
                        ? '0 8px 40px rgba(0,128,128,0.13), 0 2px 8px rgba(0,0,0,0.06)'
                        : '0 2px 8px rgba(0,0,0,0.04)',
                      opacity: isActive ? 1 : isPast ? 0.45 : 0.35,
                      transform: isActive ? 'scale(1)' : 'scale(0.97)',
                      transition: 'opacity 500ms ease, transform 500ms ease, box-shadow 500ms ease',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    {/* Watermark number */}
                    <div
                      style={{
                        position: 'absolute',
                        right: -8,
                        top: -8,
                        fontSize: '7rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        lineHeight: 1,
                        color: 'rgba(0,128,128,0.05)',
                        userSelect: 'none',
                        pointerEvents: 'none',
                      }}
                    >
                      {s.num}
                    </div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <span style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#008080',
                        display: 'block',
                        marginBottom: 10,
                      }}>
                        {s.subtitle}
                      </span>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.6rem',
                        fontWeight: 700,
                        color: '#001a1a',
                        marginBottom: 14,
                        lineHeight: 1.2,
                      }}>
                        {s.title}
                      </h3>
                      <p style={{ color: '#6b7280', fontSize: '0.92rem', lineHeight: 1.65 }}>
                        {s.desc}
                      </p>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginTop: 16,
                    }}>
                      <div style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        background: isActive ? 'linear-gradient(135deg, #008080, #004040)' : '#f3f4f6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 500ms ease',
                      }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: isActive ? '#fff' : '#9ca3af' }}>
                          {s.num}
                        </span>
                      </div>
                      <span style={{ fontSize: 11, color: '#9ca3af', fontWeight: 500 }}>
                        Step {i + 1} di {total}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom hint */}
          <div className="pb-4 text-center shrink-0">
            <span className="text-xs text-gray-400 font-medium tracking-[0.18em] uppercase">
              {activeStep + 1} / {total}
            </span>
          </div>

        </div>
      </div>

      {/* ── MOBILE version: vertical stacked cards ── */}
      <section className="md:hidden py-16 bg-gray-50 px-5">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-wider uppercase mb-4">
            Il Processo
          </div>
          <h2 className="text-3xl font-display font-bold mb-3">
            La tua{' '}
            <em className="not-italic italic text-brand-teal">campagna</em>
            {' '}in 7 step
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
            Un percorso strutturato per trasformare la tua idea pubblicitaria in una campagna di successo.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-5 bottom-5 w-[2px] bg-gradient-to-b from-brand-teal to-brand-teal/10" />

          <div className="space-y-5">
            {processSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative pl-16"
              >
                {/* Step circle on timeline */}
                <div
                  className="absolute left-0 top-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-md"
                  style={{ background: 'linear-gradient(135deg, #008080, #004040)' }}
                >
                  {s.num}
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-teal block mb-1">
                    {s.subtitle}
                  </span>
                  <h3 className="font-display font-bold text-lg text-brand-navy leading-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const CtaBanner = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div
        className="relative rounded-[2.5rem] overflow-hidden"
        style={{ minHeight: 420 }}
      >
        {/* Background image with dark overlay */}
        <img
          src={post1Src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(120deg, rgba(0,20,20,0.88) 0%, rgba(0,64,64,0.70) 55%, rgba(0,128,128,0.35) 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-10 md:p-16" style={{ minHeight: 420 }}>
          <div className="max-w-xl">
            {/* Label */}
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-brand-teal-light block mb-4">
              Un semplice click per la tua
            </span>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-5">
              Campagna<br />Pubblicitaria
            </h2>

            {/* Description */}
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-sm">
              Prenota la tua prossima Campagna Pubblicitaria outdoor su impianti di prestigio.
            </p>

            {/* Features */}
            <ul className="flex flex-col gap-2.5 mb-10">
              {[
                'Mappa interattiva',
                'Supporto dedicato',
                'Pianificazione affissioni entro 24 ore',
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-white/80 text-sm font-medium">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(0,168,168,0.25)', border: '1px solid rgba(0,168,168,0.5)' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#00a8a8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 text-white font-semibold text-sm group"
            >
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #008080, #004040)' }}
              >
                <ArrowRight className="w-4 h-4" />
              </span>
              Scopri di più
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const newsItems = [
  {
    cat: "PUBBLICITÀ OUTDOOR",
    title: "I Vantaggi della Pubblicità Mirata",
    desc: "Scopri perché una campagna di affissione mirata sul territorio genera risultati concreti e misurabili per il tuo brand.",
    date: "8 Agosto 2023",
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=1200"
  },
  {
    cat: "AFFISSIONE ESTERNA",
    title: "Pubblicità Esterna",
    desc: "Cartelloni, pensiline, maxi poster: le forme di pubblicità esterna che dominano la scena urbana e catturano l'attenzione.",
    date: "8 Agosto 2023",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
  },
  {
    cat: "STRATEGIA",
    title: "Pubblicità Tradizionale vs Pubblicità Digitale",
    desc: "Un confronto diretto tra i due mondi: quando conviene investire nell'offline e quando il digitale fa la differenza.",
    date: "8 Agosto 2023",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
  },
];

const Journal = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-4xl font-display font-bold">News</h2>
        <a href="#" className="text-brand-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all">
          Vedi tutte le news <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item, i) => (
          <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col">
            <div className="h-52 overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <span className="text-xs font-bold text-brand-teal tracking-widest uppercase mb-3 block">{item.cat}</span>
              <h3 className="text-xl font-bold mb-3 leading-snug">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
              <div className="flex items-center gap-2 mt-6 pt-5 border-t border-gray-100">
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-brand-navy rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-10 lg:p-20 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Iniziamo il Brief</h2>
            <p className="text-gray-400 text-lg mb-12">
              Raccontaci il tuo progetto. I nostri consulenti svilupperanno una strategia di affissione su misura per massimizzare il tuo ROI.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-teal-light">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Scrivici</div>
                  <div className="text-lg font-medium">info@affissione.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-teal-light">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Chiamaci</div>
                  <div className="text-lg font-medium">+39 02 1234 5678</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 bg-gray-50 p-10 lg:p-20">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Nome Completo</label>
                <input type="text" placeholder="Mario Rossi" className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-brand-teal outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Aziendale</label>
                <input type="email" placeholder="mario@azienda.it" className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-brand-teal outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Interesse</label>
              <select className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-brand-teal outline-none transition-all appearance-none">
                <option>Grandi Formati</option>
                <option>Digital OOH</option>
                <option>Arredo Urbano</option>
                <option>Transport Advertising</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Messaggio</label>
              <textarea rows={4} placeholder="Descrivi brevemente il tuo progetto..." className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-brand-teal outline-none transition-all resize-none" />
            </div>
            <button className="w-full py-5 rounded-xl gradient-teal text-white font-bold text-lg shadow-xl shadow-brand-teal/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              Invia Richiesta <ChevronRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-6">
            <img src={greyLogoSrc} alt="affissione.com" className="h-10 opacity-80" />
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            Elevando l'impatto visivo dei brand nel panorama urbano globale con innovazione e precisione.
          </p>
          <div className="flex gap-4 mt-8">
            {[Instagram, Linkedin, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-teal hover:border-brand-teal transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">AZIENDA</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            {["About Us", "Portfolio", "News", "Careers"].map((item) => (
              <li key={item}><a href="#" className="hover:text-brand-teal transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">LEGALE</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <li key={item}><a href="#" className="hover:text-brand-teal transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-gray-200 flex flex-col md:row justify-between items-center gap-4">
        <div className="text-xs text-gray-400">© 2026 AFFISSIONE.COM. All rights reserved.</div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <About />
      <Process />
      <CtaBanner />
      <Journal />
      <Contact />
      <Footer />
    </div>
  );
}
