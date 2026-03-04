/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Instagram, 
  MessageCircle, 
  Sparkles, 
  Globe,
  MapPin,
  ChevronRight,
  ArrowLeft,
  Copy,
  Check
} from "lucide-react";

interface Service {
  name: string;
  category: string;
  priceSoles: number;
  priceUSD: number | null;
  emoji: string;
  description?: string;
}

const services: Service[] = [
  { name: "1 pregunta · live", category: "🔴 Live", priceSoles: 8, priceUSD: null, emoji: "🔴" },
  { name: "Pack 2 preguntas · live", category: "🔴 Live", priceSoles: 10, priceUSD: null, emoji: "🔴" },
  { name: "1 pregunta privada", category: "✦ General", priceSoles: 12, priceUSD: 6, emoji: "✦" },
  { name: "Sesión 20 minutos ⭐", category: "✦ General", priceSoles: 30, priceUSD: 18, emoji: "⭐" },
  { name: "Sesión 45 minutos", category: "✦ General", priceSoles: 50, priceUSD: 30, emoji: "✦" },
  { 
    name: "Tirada del ex", 
    category: "💗 Amor", 
    priceSoles: 20, 
    priceUSD: 10, 
    emoji: "💗",
    description: "Ideal para comprender conexiones que aún no cierran: Qué siente, Qué piensa, Si tiene intención de volver."
  },
  { 
    name: "Tirada de pretendientes", 
    category: "💗 Amor", 
    priceSoles: 20, 
    priceUSD: 10, 
    emoji: "💗",
    description: "Explora las intenciones y sentimientos de hasta 2 personas: Qué sienten por ti, Qué intenciones tiene cada uno, Cuál te conviene más."
  },
  { 
    name: "Tirada del \"casi algo\"", 
    category: "💗 Amor", 
    priceSoles: 20, 
    priceUSD: 10, 
    emoji: "💗",
    description: "Para aclarar vínculos inciertos o en pausa: Qué siente, Qué piensa, Si desea formalizar, Si hay terceros..."
  },
  { 
    name: "Tirada de pareja", 
    category: "💗 Amor", 
    priceSoles: 20, 
    priceUSD: 10, 
    emoji: "💗",
    description: "Conoce la energía de tu relación actual: Qué siente tu pareja, Qué piensa sobre la relación y cómo te ve."
  },
  { 
    name: "Tirada general", 
    category: "✨ Rápidas", 
    priceSoles: 20, 
    priceUSD: 6, 
    emoji: "✨",
    description: "Conoce el estado actual de tu energía e influencias: Energía personal, Bloqueos o cargas presentes, Qué estás atrayendo en este momento."
  },
  { 
    name: "Tirada del mes", 
    category: "✨ Rápidas", 
    priceSoles: 20, 
    priceUSD: 6, 
    emoji: "✨",
    description: "Ideal para recibir una guía para el mes en curso: Energía predominante del mes, Aspectos destacados, Desafíos y oportunidades."
  },
  { 
    name: "Tirada de evolución personal", 
    category: "✨ Rápidas", 
    priceSoles: 20, 
    priceUSD: 6, 
    emoji: "✨",
    description: "Explora los cambios que estás atravesando: Energía de tu proceso actual, Qué estás dejando atrás, Qué estás llamado/a a integrar."
  },
  { 
    name: "Tirada de futuro cercano", 
    category: "✨ Rápidas", 
    priceSoles: 20, 
    priceUSD: 6, 
    emoji: "✨",
    description: "Dónde se dirige tu energía próximamente: Situación actual, Influencias o caminos posibles, Resultado o panorama probable."
  },
];

const categories = ["🔴 Live", "✦ General", "💗 Amor", "✨ Rápidas"];

interface PriceItemProps {
  service: Service;
  currency: 'PEN' | 'USD';
}

const PriceItem = ({ service, currency }: PriceItemProps) => {
  const price = currency === 'PEN' ? `S/ ${service.priceSoles}` : (service.priceUSD ? `$${service.priceUSD}` : '—');
  
  if (currency === 'USD' && service.priceUSD === null) return null;

  return (
    <div className="notion-card group cursor-default flex-col items-start gap-1">
      <div className="flex items-center gap-3 w-full">
        <div className="notion-icon text-lg">
          {service.emoji}
        </div>
        <div className="flex-1">
          <h3 className="text-[14px] font-medium leading-tight">{service.name}</h3>
        </div>
        <div className="text-[14px] font-semibold text-[#37352F]">
          {price}
        </div>
      </div>
      {service.description && (
        <p className="text-[12px] text-[#787774] ml-9 leading-snug">
          {service.description}
        </p>
      )}
    </div>
  );
};

type View = 'home' | 'pricing';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [currency, setCurrency] = useState<'PEN' | 'USD'>('PEN');
  const [copied, setCopied] = useState(false);

  const handleSelectCurrency = (curr: 'PEN' | 'USD') => {
    setCurrency(curr);
    setView('pricing');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("+51960260123");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen max-w-[480px] mx-auto px-6 py-12 md:py-20 flex flex-col">
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex flex-col gap-10"
          >
            {/* Header */}
            <header className="flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 rounded-full bg-[#F7F7F5] border border-[#E9E9E7] overflow-hidden shadow-sm">
                <img 
                  src="https://i.pinimg.com/736x/ff/3d/f1/ff3df11884ac374f00a6a29cde6fad88.jpg" 
                  alt="Gabriel" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-[24px] font-bold tracking-tight">Gabriel</h1>
                <p className="text-[14px] text-[#787774] max-w-[280px]">
                  Tarot predictivo y evolutivo
                </p>
              </div>
            </header>

            {/* Main Buttons */}
            <nav className="flex flex-col gap-3">
              <button 
                onClick={() => handleSelectCurrency('PEN')}
                className="notion-card group text-left"
              >
                <div className="notion-icon">
                  <MapPin className="w-5 h-5 text-[#37352F]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[14px] font-medium">Lecturas en Perú</h3>
                  <p className="text-[12px] text-[#787774]">Precios locales y medios de pago nacionales</p>
                </div>
                <ChevronRight className="w-4 h-4 text-[#D3D3D2]" />
              </button>

              <button 
                onClick={() => handleSelectCurrency('USD')}
                className="notion-card group text-left"
              >
                <div className="notion-icon">
                  <Globe className="w-5 h-5 text-[#37352F]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[14px] font-medium">Lecturas Extranjero</h3>
                  <p className="text-[12px] text-[#787774]">Pagos internacionales vía PayPal</p>
                </div>
                <ChevronRight className="w-4 h-4 text-[#D3D3D2]" />
              </button>

              <div className="px-1 mt-6 mb-1">
                <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#787774] opacity-70">
                  Contacto
                </h2>
              </div>

              <a href="https://wa.me/51960260123" target="_blank" className="notion-card group">
                <div className="notion-icon">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[14px] font-medium">WhatsApp</h3>
                </div>
                <ChevronRight className="w-4 h-4 text-[#D3D3D2]" />
              </a>

              <a href="https://instagram.com/tis.gabriell" target="_blank" className="notion-card group">
                <div className="notion-icon">
                  <Instagram className="w-5 h-5 text-[#E4405F]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[14px] font-medium">Instagram</h3>
                </div>
                <ChevronRight className="w-4 h-4 text-[#D3D3D2]" />
              </a>
            </nav>
          </motion.div>
        ) : (
          <motion.div
            key="pricing"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-8"
          >
            {/* Pricing Header */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setView('home')}
                className="p-2 -ml-2 hover:bg-[#F1F1EF] rounded-md transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-[#37352F]" />
              </button>
              <h2 className="text-[18px] font-bold">
                {currency === 'PEN' ? 'Precios Perú' : 'Precios Internacional'}
              </h2>
            </div>

            {/* Services List */}
            <div className="flex flex-col gap-6">
              {categories.map((cat) => {
                const filteredServices = services.filter(s => s.category === cat);
                const hasVisibleServices = currency === 'PEN' 
                  ? filteredServices.length > 0 
                  : filteredServices.some(s => s.priceUSD !== null);

                if (!hasVisibleServices) return null;

                return (
                  <div key={cat} className="flex flex-col gap-2">
                    <div className="px-1 flex items-center gap-2">
                      <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#787774] opacity-70">
                        {cat.split(' ')[1] || cat}
                      </h2>
                      <div className="h-[1px] flex-1 bg-[#E9E9E7]" />
                    </div>
                    {cat === "🔴 Live" && (
                      <div className="px-1 mb-1">
                        <p className="text-[12px] text-[#787774] leading-relaxed italic">
                          Envía un mensaje con tu nombre, fecha de nacimiento, tu pregunta y la captura de pago. Recibirás la respuesta en un audio.
                        </p>
                      </div>
                    )}
                    {cat === "✦ General" && (
                      <div className="px-1 mb-1">
                        <p className="text-[12px] text-[#787774] leading-relaxed italic">
                          Las preguntas son privadas y personalizadas según tu situación.
                          La lectura se envía mediante nota de audio, donde se explica detalladamente la tirada y los mensajes que aparecen.
                          <br /><br />
                          Las sesiones se agendan previamente, coordinando un horario disponible para ambas partes.
                        </p>
                      </div>
                    )}
                    <div className="flex flex-col gap-1.5">
                      {filteredServices.map((service) => (
                        <div key={service.name}>
                          <PriceItem service={service} currency={currency} />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-4 bg-[#F7F7F5] border border-[#E9E9E7] rounded-lg flex flex-col gap-4">
              <div className="space-y-3">
                <p className="text-[13px] text-[#787774] leading-relaxed">
                  {currency === 'PEN' 
                    ? "Aceptamos Yape y Agora al número:"
                    : "Pagos seguros vía PayPal. Una vez realizado el pago, envía el comprobante por WhatsApp."}
                </p>
                
                {currency === 'PEN' && (
                  <div className="flex items-center justify-between bg-white border border-[#E9E9E7] rounded-md p-2 pl-3">
                    <span className="text-[14px] font-mono font-medium text-[#37352F]">+51 960 260 123</span>
                    <button 
                      onClick={copyToClipboard}
                      className="p-2 hover:bg-[#F1F1EF] rounded-md transition-colors flex items-center gap-2 text-[12px] font-medium text-[#787774]"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                      {copied ? "Copiado" : "Copiar"}
                    </button>
                  </div>
                )}
              </div>

              <a 
                href="https://wa.me/51960260123" 
                target="_blank"
                className="w-full flex items-center justify-center gap-2 py-2 bg-[#37352F] text-white rounded-md text-[14px] font-medium hover:bg-black transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="mt-auto pt-12 text-center flex flex-col items-center gap-4">
        <div className="h-[1px] w-full bg-[#E9E9E7]" />
        <p className="text-[12px] text-[#ADACAA]">
          Tarot de Luna ✨
        </p>
      </footer>
    </div>
  );
}
