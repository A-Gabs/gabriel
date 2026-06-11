/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Instagram, X, ChevronLeft } from "lucide-react";
import DraggableCarousel from "./components/DraggableCarousel";
import { ARCANOS_DATA } from "./arcanosData";

interface CardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const row1: CardItem[] = [
  {
    id: "tarot",
    title: "Tarot",
    description: "Agenda tu lectura personalizada de tarot predictivo y evolutivo.",
    image: "https://i.pinimg.com/736x/3b/76/92/3b7692dfcd49358e911b3bfcf4300fdd.jpg",
    href: "https://www.paypal.com/ncp/payment/V5FUFJX8KAKUW",
  },
  {
    id: "vocacion-pedido",
    title: "Vocación profesional",
    description: "Descubre tu camino de éxito y propósito de vida alineado a tus astros.",
    image: "https://i.pinimg.com/736x/50/b9/bc/50b9bc9574ae6ff7cdaa7ec35e65c297.jpg",
    href: "https://www.paypal.com/ncp/payment/RCQEPWZZHXGLS",
  },
  {
    id: "dones-pedido",
    title: "Dones Espirituales",
    description: "Conoce tus talentos mágicos innatos y canaliza tu poder espiritual.",
    image: "https://i.pinimg.com/736x/15/68/d7/1568d714f086b3d4e5b15a632b66de64.jpg",
    href: "https://www.paypal.com/ncp/payment/XT7LDZ3H4PAM8",
  }
];

const row2: CardItem[] = [
  {
    id: "manifestacion",
    title: "Manifestación",
    description: "Alinea tu vibración de abundancia y aprende a cocrear tu realidad deseada.",
    image: "https://i.pinimg.com/736x/6e/5e/db/6e5edbfc2b41866286a7ef30d8b2812b.jpg",
    href: "https://www.paypal.com/ncp/payment/Q6MZL572GEFSG",
  },
  {
    id: "compatibilidad",
    title: "Compatibilidad de pareja",
    description: "Explora la sinastría astrológica profunda y tu conexión espiritual con el ser amado.",
    image: "https://i.pinimg.com/736x/a8/99/d5/a899d508d9de2031cfe18f1fb98adc24.jpg",
    href: "https://www.paypal.com/ncp/payment/XJBKMKJKB9CVU",
  },
  {
    id: "saju",
    title: "Autoconocimiento",
    description: "Análisis milenario de destino y tus ciclos energéticos de vida.",
    image: "https://i.pinimg.com/736x/fe/6b/98/fe6b9850a9b089b4cd477cd2e7b3b127.jpg",
    href: "https://www.paypal.com/ncp/payment/QHRG2XQ7KLW38",
  },
  {
    id: "vocacion-auto",
    title: "Vocación profesional",
    description: "Encuentra tu verdadera vocación y brilla profesionalmente con tu energía astral.",
    image: "https://i.pinimg.com/736x/50/b9/bc/50b9bc9574ae6ff7cdaa7ec35e65c297.jpg",
    href: "https://www.paypal.com/ncp/payment/RCQEPWZZHXGLS",
  }
];

const row3: CardItem[] = [
  {
    id: "comunidad",
    title: "Comunidad Gratuita",
    description: "Únete a nuestro canal de WhatsApp para recursos diarios, lecturas de tarot y sabiduría colectiva.",
    image: "https://i.pinimg.com/1200x/4a/fa/43/4afa433df0056bfd817ef24ffa0e116f.jpg",
    href: "https://chat.whatsapp.com/DPpoctnp402IIgEQ85jvdh",
  },
  {
    id: "arcano-gratis",
    title: "Arcano de nacimiento",
    description: "Descubre tu arcano de nacimiento de forma interactiva y conoce la energía que rige tu destino, virtudes y misión de alma.",
    image: "https://i.pinimg.com/1200x/9f/9c/57/9f9c57466a354a7a583c4e8c024d9cec.jpg",
    href: "#",
  }
];

const rowTarot: CardItem[] = [
  {
    id: "tarot-lectura",
    title: "Tarot",
    description: "Agenda tu lectura personalizada de tarot predictivo y evolutivo para iluminar tu camino.",
    image: "https://i.pinimg.com/736x/3b/76/92/3b7692dfcd49358e911b3bfcf4300fdd.jpg",
    href: "https://www.paypal.com/ncp/payment/V5FUFJX8KAKUW",
  },
  {
    id: "orientaciones",
    title: "Orientaciones",
    description: "Orientación espiritual y terapéutica para encontrar claridad y respuestas en tu situación actual.",
    image: "https://i.pinimg.com/736x/36/33/eb/3633eb930771b2546bc3a24a8ba550ea.jpg",
    href: "https://wa.me/51960260123?text=Hola%20tarot.anna,%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20de%20Orientaci%C3%B3n%20✨",
  }
];

export default function App() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  // Arcano de nacimiento states
  const [currentView, setCurrentView] = useState<'links' | 'arcano-calc'>('links');
  const [birthDay, setBirthDay] = useState<string>("1");
  const [birthMonth, setBirthMonth] = useState<string>("1");
  const [birthYear, setBirthYear] = useState<string>("1995");
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [calculationResult, setCalculationResult] = useState<number | null>(null);
  const [loadingText, setLoadingText] = useState<string>("Conectando con tu vibración...");

  // Calculations
  const getArcanoEmoji = (num: number): string => {
    const emojis: Record<number, string> = {
      1: "🪄", 2: "🔮", 3: "👑", 4: "🏰", 5: "📜",
      6: "❤️", 7: "🏎️", 8: "⚖️", 9: "🕯️", 10: "🎡",
      11: "🦁", 12: "🧭", 13: "💀", 14: "🕊️", 15: "😈",
      16: "⚡", 17: "⭐", 18: "🌙", 19: "☀️", 20: "🔔",
      21: "🌍", 22: "🃏"
    };
    return emojis[num] || "✨";
  };

  const calculateArcano = () => {
    setIsCalculating(true);
    setCalculationResult(null);
    setLoadingText("Conectando con tu vibración...");
    
    setTimeout(() => {
      setLoadingText("Calculando...");
    }, 250);

    setTimeout(() => {
      const d = parseInt(birthDay);
      const m = parseInt(birthMonth);
      const y = parseInt(birthYear);
      
      const sum = d + m + y;
      let tempSum = sum;
      while (tempSum > 22) {
        tempSum = tempSum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
      }
      
      let finalNum = tempSum;
      if (finalNum < 1) finalNum = 1;
      
      setCalculationResult(finalNum);
      setIsCalculating(false);
    }, 600);
  };

  const handleOpenCalc = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentView('arcano-calc');
    setActiveId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseCalc = () => {
    setCurrentView('links');
    setCalculationResult(null);
    setIsCalculating(false);
    setBirthDay("1");
    setBirthMonth("1");
    setBirthYear("1995");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const popupDismissed = sessionStorage.getItem("whatsapp_popup_dismissed");
    if (!popupDismissed) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCopyWhatsApp = () => {
    const numberToCopy = "+51 960 260 123";
    navigator.clipboard.writeText(numberToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  };

  const dismissPopup = () => {
    setShowPopup(false);
    sessionStorage.setItem("whatsapp_popup_dismissed", "true");
  };

  const closeOverlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveId(null);
  };

  const renderCard = (card: CardItem, uniqueId: string) => {
    const isActive = activeId === card.id;

    return (
      <div 
        key={uniqueId}
        className="relative aspect-[3/4] w-[200px] shrink-0 snap-start group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[0.98] active:scale-95 select-none"
      >
        {/* Background Image */}
        <img 
          src={card.image} 
          alt={card.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Default Title View (graduated bottom overlay, 70% black opacity fading to transparent up to mid-height) */}
        <div 
          className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pb-5 px-4 flex items-end transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}
        >
          <h3 className="font-serif text-[18px] md:text-[20px] font-semibold text-white tracking-wide text-shadow-custom leading-tight">
            {card.title}
          </h3>
        </div>

        {/* Overlay Block */}
        <div 
          className={`absolute inset-0 bg-black/45 backdrop-blur-md transition-all duration-300 flex flex-col justify-between p-4 z-10 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          {/* Close button top-right */}
          <div className="flex justify-end">
            <button 
              onClick={closeOverlay}
              className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-all duration-200"
              aria-label="Cerrar"
            >
              <X className="w-4.5 h-4.5" strokeWidth={2.5} />
            </button>
          </div>

          {/* Info and button at the bottom */}
          <div className="space-y-3">
            <div className="space-y-1">
              <h4 className="font-serif text-[18px] font-medium text-white tracking-wide leading-tight">
                {card.title}
              </h4>
              <p className="text-[12.5px] text-white/90 font-light leading-snug">
                {card.description}
              </p>
            </div>
            {card.id === "arcano-gratis" ? (
              <button 
                onClick={handleOpenCalc}
                className="w-full py-2 px-3 bg-black text-white hover:bg-[#1a1a1a]/90 border border-neutral-800 rounded-lg text-[13.5px] font-sans font-medium transition-colors text-center inline-block cursor-pointer"
              >
                Calcular ahora ✨
              </button>
            ) : (
              <a 
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full py-2 px-3 bg-black text-white hover:bg-neutral-950 border border-neutral-800 rounded-lg text-[13px] font-sans font-medium transition-colors text-center inline-block"
              >
                Cuéntame más &rarr;
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#FDFAF6] min-h-screen text-[#1a1a1a] antialiased flex flex-col justify-between selection:bg-[#1a1a1a]/10">
      <div className="w-full max-w-[480px] mx-auto px-6 py-12 md:py-20 flex flex-col min-h-screen justify-between gap-12">
        {currentView === "links" ? (
          <>
            {/* HEADER */}
            <header className="flex flex-col gap-4 w-full text-left">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Circular Avatar with subtle dashed trim */}
                  <div className="relative w-24 h-24 rounded-full p-[3px] border border-dashed border-[#1a1a1a]/20 shrink-0 transition-transform duration-700 hover:rotate-12">
                    <img 
                      src="https://i.pinimg.com/736x/ff/3d/f1/ff3df11884ac374f00a6a29cde6fad88.jpg" 
                      alt="tarot.anna" 
                      className="w-full h-full rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Username & Social Icons side-by-side inside this inner row */}
                  <div className="space-y-2">
                    <h1 className="font-serif text-[32px] font-bold text-[#1a1a1a] tracking-tight leading-none">tarot.anna</h1>
                    
                    {/* Social Icons (TikTok, Instagram & WhatsApp) */}
                    <div className="flex gap-2.5 items-center">
                      <a 
                        href="https://tiktok.com/@tis.gabriell" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-all duration-300"
                        aria-label="TikTok"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://instagram.com/tis.gabriell" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-[18px] h-[18px]" />
                      </a>
                      <a 
                        href="https://wa.me/51960260123" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-all duration-300"
                        aria-label="WhatsApp"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                          <path d="M12.004 2c-5.518 0-9.996 4.477-9.996 9.996 0 1.764.459 3.42 1.258 4.872L2 22l5.318-1.396A9.957 9.957 0 0 0 12.004 22c5.517 0 9.996-4.477 9.996-9.996v-.004C22.004 6.479 17.525 2 12.004 2zm5.726 14.129c-.244.693-1.42 1.272-1.942 1.353-.459.072-.942.135-2.923-.684-2.535-1.045-4.148-3.636-4.275-3.805-.126-.171-1.03-1.373-1.03-2.62s.644-1.854.873-2.111c.229-.257.5-.324.667-.324.167 0 .333.004.477.01.144.004.337-.054.527.404.194.472.667 1.624.726 1.742.06.117.099.252.02.409-.079.158-.12.257-.239.396-.12.139-.252.311-.359.419-.12.117-.245.244-.105.487.139.243.621 1.022 1.332 1.656.914.815 1.683 1.066 1.923 1.185.24.117.378.099.518-.063.139-.162.603-.698.766-.937.162-.239.324-.198.545-.117.22.079 1.405.662 1.644.78.24.117.396.176.455.275.058.099.058.572-.185 1.265z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Share action button on the right matching Pinterest/Linktree */}
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'tarot.anna',
                        text: 'Tarot predictivo y evolutivo',
                        url: window.location.href,
                      }).catch(console.error);
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('¡Enlace de tarot.anna copiado al portapapeles!');
                    }
                  }}
                  className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] p-2.5 rounded-full hover:bg-[#1a1a1a]/5 transition-colors shrink-0" 
                  aria-label="Compartir"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                    <polyline points="16 6 12 2 8 6"/>
                    <line x1="12" x2="12" y1="2" y2="15"/>
                  </svg>
                </button>
              </div>

              {/* Subtitle below name & image row */}
              <div className="mt-1 space-y-0.5">
                <p className="text-[17px] text-[#1a1a1a]/85 font-sans font-normal tracking-wide">Tarot predictivo y evolutivo</p>
                <p className="text-[13px] text-[#787774] font-sans font-light tracking-wide">Envio lecturas a todo el mundo 🌍</p>
              </div>
            </header>

            {/* MAIN NAVIGATION & CARD GRID */}
            <main className="flex-1 flex flex-col gap-10">
              
              {/* Row 1 — Más pedidos */}
              <section className="space-y-4">
                <div className="text-left space-y-1.5">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#787774] font-sans">
                    Más pedidos →
                  </h2>
                  <div className="h-[1px] w-8 bg-[#1a1a1a]/10" />
                </div>
                <DraggableCarousel 
                  items={row1} 
                  activeId={activeId} 
                  setActiveId={setActiveId} 
                  renderCard={renderCard} 
                />
              </section>

              {/* Row 2 — Autodescubrimiento */}
              <section className="space-y-4">
                <div className="text-left space-y-1.5">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#787774] font-sans">
                    Autodescubrimiento →
                  </h2>
                  <div className="h-[1px] w-8 bg-[#1a1a1a]/10" />
                </div>
                <DraggableCarousel 
                  items={row2} 
                  activeId={activeId} 
                  setActiveId={setActiveId} 
                  renderCard={renderCard} 
                />
              </section>

              {/* Row Tarot — Tarot */}
              <section className="space-y-4">
                <div className="text-left space-y-1.5">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#787774] font-sans">
                    Tarot →
                  </h2>
                  <div className="h-[1px] w-8 bg-[#1a1a1a]/10" />
                </div>
                <DraggableCarousel 
                  items={rowTarot} 
                  activeId={activeId} 
                  setActiveId={setActiveId} 
                  renderCard={renderCard} 
                />
              </section>

              {/* Row 3 — Free */}
              <section className="space-y-4 flex flex-col items-stretch">
                <div className="text-left space-y-1.5">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#787774] font-sans">
                    Free →
                  </h2>
                  <div className="h-[1px] w-8 bg-[#1a1a1a]/10" />
                </div>
                <DraggableCarousel 
                  items={row3} 
                  activeId={activeId} 
                  setActiveId={setActiveId} 
                  renderCard={renderCard} 
                />
              </section>

            </main>

            {/* FOOTER */}
            <footer className="mt-8 text-center flex flex-col items-center gap-4">
              <div className="h-[1px] w-12 bg-[#1a1a1a]/10 mx-auto" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#787774] font-medium">
                tarot.anna — Tarot ✨
              </p>
            </footer>
          </>
        ) : (
          /* INTERACTIVE ARCANUM CALCULATOR VIEW */
          <div className="w-full flex flex-col min-h-screen justify-between gap-8 animate-in fade-in duration-300">
            <div className="space-y-6">
              {/* BACK BUTTON */}
              <button 
                onClick={handleCloseCalc}
                className="flex items-center gap-2 text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors text-[13.5px] font-sans font-medium cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
                <span>Volver al inicio</span>
              </button>

              {/* BRAND HEADER */}
              <div className="space-y-2 text-center py-2">
                <span className="text-[10px] tracking-[0.25em] text-[#787774] font-semibold uppercase">Numerología Sagrada</span>
                <h2 className="font-serif text-[28px] font-bold text-[#1a1a1a] tracking-tight leading-tight">Arcano de Nacimiento</h2>
                <div className="h-[1px] w-12 bg-[#1a1a1a]/10 mx-auto mt-2" />
                <p className="text-[13.5px] text-[#787774] font-sans font-light leading-relaxed pt-2">
                  Ingresa tu fecha de nacimiento para revelar cuál de los 22 Arcanos Mayores rige tu energía de vida y tu propósito de alma.
                </p>
              </div>

              {!calculationResult && !isCalculating && (
                /* INPUT FORM PANEL */
                <div className="bg-white/60 border border-[#1a1a1a]/5 rounded-2xl p-6 shadow-sm space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5 col-span-1">
                        <label className="text-[11px] uppercase tracking-wider text-[#787774] font-semibold font-sans">Día</label>
                        <select 
                          value={birthDay}
                          onChange={(e) => setBirthDay(e.target.value)}
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        >
                          {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                            <option key={d} value={String(d)}>{d}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5 col-span-1">
                        <label className="text-[11px] uppercase tracking-wider text-[#787774] font-semibold font-sans">Mes</label>
                        <select 
                          value={birthMonth}
                          onChange={(e) => setBirthMonth(e.target.value)}
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        >
                          {[
                            { val: "1", label: "Enero" },
                            { val: "2", label: "Febrero" },
                            { val: "3", label: "Marzo" },
                            { val: "4", label: "Abril" },
                            { val: "5", label: "Mayo" },
                            { val: "6", label: "Junio" },
                            { val: "7", label: "Julio" },
                            { val: "8", label: "Agosto" },
                            { val: "9", label: "Septiembre" },
                            { val: "10", label: "Octubre" },
                            { val: "11", label: "Noviembre" },
                            { val: "12", label: "Diciembre" },
                          ].map(m => (
                            <option key={m.val} value={m.val}>{m.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase tracking-wider text-[#787774] font-semibold font-sans">Año</label>
                      <select 
                        value={birthYear}
                        onChange={(e) => setBirthYear(e.target.value)}
                        className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                      >
                        {Array.from({ length: 90 }, (_, i) => 2026 - i).map(y => (
                          <option key={y} value={String(y)}>{y}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button 
                    onClick={calculateArcano}
                    className="w-full py-3 px-4 bg-black hover:bg-neutral-900 text-white rounded-xl text-[14px] font-semibold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <span>Revelar mi Arcano ✨</span>
                  </button>
                </div>
              )}

              {isCalculating && (
                /* LOADING PANEL */
                <div className="flex flex-col items-center justify-center p-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-dashed border-[#1a1a1a]/20 rounded-full animate-spin [animation-duration:8s]" />
                    <div className="text-2xl animate-pulse">🔮</div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[15px] font-serif font-medium text-[#1a1a1a]">{loadingText}</p>
                    <p className="text-[12px] text-[#787774] font-light font-sans">Calculando Arcano de Nacimiento...</p>
                  </div>
                </div>
              )}

              {calculationResult && !isCalculating && (
                /* RESULT PANEL */
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="bg-white/80 border border-[#1a1a1a]/5 rounded-3xl p-6 shadow-sm flex flex-col items-center text-center space-y-4">
                    <div className="space-y-3 px-2">
                      <div className="space-y-1">
                        <span className="text-[12px] uppercase tracking-[0.25em] text-[#787774] font-semibold">
                          ARCANO {ARCANOS_DATA[calculationResult].number}
                        </span>
                        <h3 className="font-serif text-[28px] font-bold text-[#1a1a1a] tracking-tight">
                          {ARCANOS_DATA[calculationResult].name}
                        </h3>
                        <p className="text-[13px] text-amber-800 font-sans font-medium italic mt-1.5">
                          "{ARCANOS_DATA[calculationResult].keyEnergy}"
                        </p>
                      </div>
                      
                      <p className="text-[14px] text-[#1a1a1a]/90 font-sans font-light leading-relaxed text-left border-t border-[#1a1a1a]/10 pt-4">
                        {ARCANOS_DATA[calculationResult].description}
                      </p>
                    </div>
                  </div>

                  {/* CUSTOM ACTIONS */}
                  <div className="space-y-3">
                    <a 
                      href="https://www.paypal.com/ncp/payment/V5FUFJX8KAKUW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 bg-black hover:bg-neutral-900 border border-neutral-800 text-white rounded-xl text-[14.5px] font-semibold text-center flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                    >
                      <span>Agendar lectura general ✨</span>
                    </a>
                    
                    <button 
                      onClick={() => {
                        setCalculationResult(null);
                        setIsCalculating(false);
                        setBirthDay("1");
                        setBirthMonth("1");
                        setBirthYear("1995");
                      }}
                      className="w-full py-2 px-3 border border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/5 text-[#1a1a1a] rounded-lg text-[13px] font-medium transition-colors text-center cursor-pointer"
                    >
                      Calcular otra fecha
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* SYNCED FOOTER */}
            <footer className="text-center flex flex-col items-center gap-2 py-4">
              <div className="h-[1px] w-12 bg-[#1a1a1a]/10 mx-auto" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#787774] font-medium font-sans">
                tarot.anna — Arcanos ✨
              </p>
            </footer>
          </div>
        )}
      </div>

      {/* POPUP MODAL FOR WHATSAPP */}
      {showPopup && (
        <div 
          onClick={dismissPopup}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-6 transition-all duration-300"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FDFAF6] border border-[#1a1a1a]/10 rounded-2xl p-6 w-full max-w-[340px] shadow-2xl relative text-center flex flex-col items-center gap-5 transition-all duration-300 transform scale-100 animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Close button in corner */}
            <button 
              onClick={dismissPopup}
              className="absolute top-4 right-4 text-[#1a1a1a]/40 hover:text-[#1a1a1a] p-1.5 rounded-full hover:bg-[#1a1a1a]/5 transition-all outline-none"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Decorative Icon */}
            <div className="w-12 h-12 bg-[#1a1a1a]/5 rounded-full flex items-center justify-center text-xl shadow-sm border border-[#1a1a1a]/5">
              🔮
            </div>

            {/* Header Text */}
            <div className="space-y-1.5">
              <h3 className="font-serif text-[22px] font-bold text-[#1a1a1a] tracking-tight leading-tight">
                Copia mi WhatsApp
              </h3>
              <p className="text-[13px] text-[#787774] font-sans font-light leading-relaxed px-1">
                Escríbeme directamente por WhatsApp para agendar tu lectura o hacerme cualquier consulta ✨
              </p>
            </div>

            {/* Display Box for Number */}
            <div className="w-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-xl py-2.5 px-4 font-serif text-[18px] font-semibold text-[#1a1a1a] tracking-wider select-all">
              +51 960 260 123
            </div>

            {/* Copy Link Button (Pristine, styled identically to the design instructions/image) */}
            <button 
              onClick={handleCopyWhatsApp}
              className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 rounded-xl text-[13.5px] font-sans font-medium transition-all shadow-sm active:scale-[0.98] ${copied ? 'border-emerald-500 bg-emerald-50/20' : ''}`}
            >
              {copied ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-emerald-700 font-semibold">¡Copiado con éxito!</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 shrink-0">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                  </svg>
                  <span>Copiar enlace</span>
                </>
              )}
            </button>

            {/* Direct Link Alternative */}
            <a 
              href="https://wa.me/51960260123"
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismissPopup}
              className="text-[12px] font-medium text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-all hover:underline"
            >
              O abrir chat directamente →
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
