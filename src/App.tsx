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
import { useState } from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/50 backdrop-blur-lg border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
        </div>
        <span className="text-xl font-display font-bold tracking-tighter text-white">AFFISSIONE.COM</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {["Home", "Services", "Inventory", "Case Studies", "About Us"].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm font-medium text-gray-300 hover:text-brand-teal transition-colors">
            {item}
          </a>
        ))}
      </div>

      <button className="bg-brand-teal text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-teal-light transition-all shadow-lg shadow-brand-teal/20">
        Contact Us
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-0 overflow-hidden bg-brand-navy text-white text-center">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-teal)_0%,_transparent_70%)] opacity-20" />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal-light text-xs font-bold uppercase tracking-widest mb-8">
          <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
          Leader in Out-of-Home
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8">
          Impatto <span className="text-brand-teal-light text-gradient">Senza Confini.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
          Dominia il panorama urbano con soluzioni di affissione premium. 
          Trasformiamo ogni spazio in un'opportunità di dialogo memorabile tra brand e pubblico.
        </p>

        <button className="bg-brand-teal text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-brand-teal-light transition-all shadow-2xl shadow-brand-teal/40 mb-20">
          Inizia Ora
        </button>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border-[12px] border-brand-teal/20 shadow-2xl shadow-black/50 aspect-video mb-[-100px]"
        >
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/i-e3w6FqQrw?autoplay=1&mute=1&loop=1&playlist=i-e3w6FqQrw" 
            title="Affissione.com Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Partners = () => (
  <section className="pt-40 pb-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        {["HubSpot", "Auping", "Heineken", "Expomark", "Astra-Net"].map((name) => (
          <div key={name} className="text-2xl font-display font-bold text-brand-navy tracking-tighter">
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl font-display font-bold mb-4">Il Nostro Arsenale</h2>
          <p className="text-gray-500 max-w-xl">Dalla potenza del Grande Formato alla precisione capillare dell'Arredo Urbano.</p>
        </div>
        <div className="flex gap-2">
          <button className="p-3 rounded-full border border-gray-200 hover:bg-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-full border border-gray-200 hover:bg-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            title: "Grandi Formati", 
            tag: "Iconic Presence",
            desc: "Maxi teli e billboard di dimensioni spettacolari per una visibilità incontrastata.",
            img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
          },
          { 
            title: "Digital OOH", 
            tag: "Dynamic Media",
            desc: "Contenuti dinamici e interattivi per catturare l'attenzione in tempo reale.",
            img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
          },
          { 
            title: "Arredo Urbano", 
            tag: "City Pulse",
            desc: "Pensiline e totem retroilluminati posizionati strategicamente nel cuore della città.",
            img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=800"
          },
          { 
            title: "Transport Advertising", 
            tag: "Moving Impact",
            desc: "Campagne in movimento su bus, tram e metropolitane per seguire il flusso del pubblico.",
            img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800"
          }
        ].map((service, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-teal-light mb-2 block">{service.tag}</span>
              <h3 className="text-2xl text-white mb-3">{service.title}</h3>
              <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Method = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-display font-bold mb-20 relative inline-block">
        Il Nostro Metodo
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand-teal" />
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { num: "01", title: "Brief & Analisi", desc: "Studiamo i tuoi obiettivi e il target di riferimento per identificare i touchpoint più efficaci nel contesto urbano." },
          { num: "02", title: "Pianificazione", desc: "Selezioniamo strategicamente gli spazi dal nostro network per massimizzare la copertura e la frequenza del messaggio." },
          { num: "03", title: "Esecuzione", desc: "Gestiamo l'intero processo creativo e produttivo, garantendo un'installazione impeccabile e un impatto garantito." }
        ].map((step, i) => (
          <div key={i} className="relative p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-brand-teal/30 transition-all group">
            <div className="text-7xl font-display font-bold text-gray-200 absolute top-6 right-8 group-hover:text-brand-teal/10 transition-colors">{step.num}</div>
            <div className="relative z-10 text-left">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6 text-brand-teal">
                {i === 0 && <Layout className="w-6 h-6" />}
                {i === 1 && <Maximize className="w-6 h-6" />}
                {i === 2 && <CheckCircle2 className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Journal = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-4xl font-display font-bold">Journal of Impact</h2>
        <a href="#" className="text-brand-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all">
          Vedi tutti i casi studio <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            cat: "AUTOMOTIVE",
            title: "Lancio Nuova SUV Elettrica",
            desc: "Un'operazione di maxi affissioni nelle principali città italiane con +40% di brand awareness registrata.",
            author: "Marketing Manager",
            company: "Global Auto Brand",
            img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=1200"
          },
          {
            cat: "TECH & LIFESTYLE",
            title: "Digital Urban Network",
            desc: "Campagna iper-targettizzata su circuiti DOOH nelle stazioni ferroviarie durante il periodo natalizio.",
            author: "Media Planner",
            company: "Leading Tech Agency",
            img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
          }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
            <div className="h-64 overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="p-10">
              <span className="text-xs font-bold text-brand-teal tracking-widest uppercase mb-4 block">{item.cat}</span>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 mb-8">{item.desc}</p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-teal font-bold">
                  {item.author[0]}
                </div>
                <div>
                  <div className="text-sm font-bold">{item.author}</div>
                  <div className="text-xs text-gray-400">{item.company}</div>
                </div>
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
        <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-5xl font-display font-bold mb-8">Iniziamo il Brief</h2>
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

        <div className="lg:w-1/2 bg-white p-12 lg:p-20">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Nome Completo</label>
                <input type="text" placeholder="Mario Rossi" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-teal outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Aziendale</label>
                <input type="email" placeholder="mario@azienda.it" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-teal outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Interesse</label>
              <select className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-teal outline-none transition-all appearance-none">
                <option>Grandi Formati</option>
                <option>Digital OOH</option>
                <option>Arredo Urbano</option>
                <option>Transport Advertising</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Messaggio</label>
              <textarea rows={4} placeholder="Descrivi brevemente il tuo progetto..." className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-teal outline-none transition-all resize-none" />
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
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter text-brand-navy">AFFISSIONE.COM</span>
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
        <div className="text-xs text-gray-400">© 2024 AFFISSIONE.COM. All rights reserved.</div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <MapPin className="w-3 h-3" /> Milano, Italia
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
      <Method />
      <Journal />
      <Contact />
      <Footer />
    </div>
  );
}
