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
  Check,
  X
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
  { name: "1 pregunta privada", category: "✦ General", priceSoles: 12, priceUSD: 6, emoji: "✦" },
  { name: "Sesión 20 minutos ⭐", category: "✦ General", priceSoles: 30, priceUSD: 18, emoji: "⭐" },
  { name: "Sesión 45 minutos", category: "✦ General", priceSoles: 50, priceUSD: 30, emoji: "✦" },
  { 
    name: "Tirada del ex", 
    category: "💘 Amor", 
    priceSoles: 20, 
    priceUSD: 10, 
    emoji: "💘",
    description: "Ideal para comprender conexiones que aún no cierran: Qué siente, Qué piensa, Si tiene intención de volver."
  },
  { 
    name: "Tirada de pretendientes", 
    category: "💘 Amor", 
    priceSoles: 20, 
    priceUSD: 10, 
    emoji: "💘",
    description: "Explora las intenciones y sentimientos de hasta 2 personas: Qué sienten por ti, Qué intenciones tiene cada uno, Cuál te conviene más."
  },
  { 
    name: "Tirada del \"casi algo\"", 
    category: "💘 Amor", 
    priceSoles: 20, 
    priceUSD: 10, 
    emoji: "💘",
    description: "Para aclarar vínculos inciertos o en pausa: Qué siente, Qué piensa, Si desea formalizar, Si hay terceros..."
  },
  { 
    name: "Tirada de pareja", 
    category: "💘 Amor", 
    priceSoles: 20, 
    priceUSD: 10, 
    emoji: "💘",
    description: "Conoce la energía de tu relación actual: Qué siente tu pareja, Qué piensa sobre la relación y cómo te ve."
  },
  { 
    name: "Tirada general", 
    category: "🔮 Estratégicas", 
    priceSoles: 20, 
    priceUSD: 6, 
    emoji: "🔮",
    description: "Conoce el estado actual de tu energía e influencias: Energía personal, Bloqueos o cargas presentes, Qué estás atrayendo en este momento."
  },
  { 
    name: "Tirada del mes", 
    category: "🔮 Estratégicas", 
    priceSoles: 20, 
    priceUSD: 6, 
    emoji: "🔮",
    description: "Ideal para recibir una guía para el mes en curso: Energía predominante del mes, Aspectos destacados, Desafíos y oportunidades."
  },
  { 
    name: "Tirada de evolución personal", 
    category: "🔮 Estratégicas", 
    priceSoles: 20, 
    priceUSD: 6, 
    emoji: "🔮",
    description: "Explora los cambios que estás atravesando: Energía de tu proceso actual, Qué estás dejando atrás, Qué estás llamado/a a integrar."
  },
  { 
    name: "Tirada de futuro cercano", 
    category: "🔮 Estratégicas", 
    priceSoles: 20, 
    priceUSD: 6, 
    emoji: "🔮",
    description: "Dónde se dirige tu energía próximamente: Situación actual, Influencias o caminos posibles, Resultado o panorama probable."
  },
];

const categories = ["✦ General", "💘 Amor", "🔮 Estratégicas"];

interface PriceItemProps {
  service: Service;
  currency: 'PEN' | 'USD';
}

const PriceItem = ({ service, currency }: PriceItemProps) => {
  const price = currency === 'PEN' ? `S/ ${service.priceSoles}` : (service.priceUSD ? `$${service.priceUSD}` : '—');
  const whatsappUrl = `https://wa.me/51960260123?text=${encodeURIComponent(`Hola tarot.anna, me interesa la lectura: ${service.name}`)}`;
  
  if (currency === 'USD' && service.priceUSD === null) return null;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="notion-card group flex-col items-start gap-1 hover:bg-[#F1F1EF] transition-colors"
    >
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
    </a>
  );
};

type View = 'home' | 'pricing';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [currency, setCurrency] = useState<'PEN' | 'USD'>('PEN');
  const [copied, setCopied] = useState(false);
  const [communityCopied, setCommunityCopied] = useState(false);
  const [modalUrl, setModalUrl] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleSelectCurrency = (curr: 'PEN' | 'USD') => {
    setCurrency(curr);
    setView('pricing');
    setExpandedCategory(null);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("+51960260123");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyCommunityLink = () => {
    navigator.clipboard.writeText("https://chat.whatsapp.com/DPpoctnp402IIgEQ85jvdh");
    setCommunityCopied(true);
    setTimeout(() => setCommunityCopied(false), 2000);
  };

  const openModal = (url: string) => {
    setModalUrl(url);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalUrl(null);
    document.body.style.overflow = 'auto';
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
              <div className="w-24 h-24 rounded-full border-2 border-[#E9E9E7] overflow-hidden shadow-sm">
                <img 
                  src="https://i.pinimg.com/736x/ff/3d/f1/ff3df11884ac374f00a6a29cde6fad88.jpg" 
                  alt="tarot.anna" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-[28px] font-bold tracking-tight">tarot.anna</h1>
                <p className="text-[15px] text-[#787774]">
                  Tarot predictivo y evolutivo
                </p>
              </div>
              {/* Social Icons - TikTok & Instagram */}
              <div className="flex gap-4 mt-2">
                <a href="https://tiktok.com/@tis.gabriell" target="_blank" className="hover:opacity-70 transition-opacity">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-6 h-6 text-[#37352F]"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/tis.gabriell" target="_blank" className="hover:opacity-70 transition-opacity">
                  <Instagram className="w-6 h-6 text-[#37352F]" />
                </a>
              </div>
            </header>

            {/* 2 Main Links */}
            <nav className="flex flex-col gap-6">
              {/* Card 1: Tarot */}
              <div 
                className="notion-card flex p-0 overflow-hidden min-h-[140px] items-stretch text-left border-[#E9E9E7] rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-[40%] flex-shrink-0 relative">
                  <img 
                    src="https://i.pinimg.com/736x/3b/76/92/3b7692dfcd49358e911b3bfcf4300fdd.jpg" 
                    className="absolute inset-0 w-full h-full object-cover object-top" 
                    alt="Tarot"
                  />
                </div>
                <div className="flex-1 p-5 flex flex-col justify-center bg-white">
                  <h3 className="text-xl font-bold text-[#37352F]">Tarot</h3>
                  <p className="text-[14px] text-[#787774] mt-0.5">Agenda tu lectura</p>
                  
                  <div className="flex flex-col gap-2 mt-4">
                    <button 
                      onClick={copyToClipboard}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#F7F7F5] border border-[#E9E9E7] rounded-md text-[13px] font-medium text-[#37352F] hover:bg-[#F1F1EF] transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                      {copied ? "Copiado" : "Copiar número"}
                    </button>
                    <a 
                      href="https://wa.me/51960260123?text=Deseo%20agendar%20una%20lectura%20🔮"
                      target="_blank"
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#37352F] text-white rounded-md text-[13px] font-medium hover:bg-black transition-colors"
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-4 h-4"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .011 5.403.011 12.039c0 2.12.553 4.189 1.604 6.039L0 24l6.105-1.602a11.834 11.834 0 005.944 1.599h.005c6.634 0 12.038-5.402 12.038-12.039a11.799 11.799 0 00-3.483-8.52z"/>
                      </svg>
                      Agendar lectura
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Community */}
              <div 
                className="notion-card flex p-0 overflow-hidden min-h-[140px] items-stretch text-left border-[#E9E9E7] rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-[40%] flex-shrink-0 relative">
                  <img 
                    src="https://i.pinimg.com/1200x/4a/fa/43/4afa433df0056bfd817ef24ffa0e116f.jpg" 
                    className="absolute inset-0 w-full h-full object-cover object-center" 
                    alt="Comunidad"
                  />
                </div>
                <div className="flex-1 p-5 flex flex-col justify-center bg-white">
                  <h3 className="text-xl font-bold text-[#37352F]">Comunidad Gratuita</h3>
                  <p className="text-[14px] text-[#787774] mt-0.5">Espacio seguro para tarot 🔮</p>
                  
                  <div className="flex flex-col gap-2 mt-4">
                    <button 
                      onClick={copyCommunityLink}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#F7F7F5] border border-[#E9E9E7] rounded-md text-[13px] font-medium text-[#37352F] hover:bg-[#F1F1EF] transition-colors"
                    >
                      {communityCopied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                      {communityCopied ? "Enlace copiado" : "Copiar enlace"}
                    </button>
                    <a 
                      href="https://chat.whatsapp.com/DPpoctnp402IIgEQ85jvdh"
                      target="_blank"
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#37352F] text-white rounded-md text-[13px] font-medium hover:bg-black transition-colors"
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-4 h-4"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .011 5.403.011 12.039c0 2.12.553 4.189 1.604 6.039L0 24l6.105-1.602a11.834 11.834 0 005.944 1.599h.005c6.634 0 12.038-5.402 12.038-12.039a11.799 11.799 0 00-3.483-8.52z"/>
                      </svg>
                      Unirme al grupo
                    </a>
                  </div>
                </div>
              </div>
            </nav>

            {/* AUTODESCUBRIMIENTO Section */}
            <section className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#787774]">
                  Autodescubrimiento
                </h2>
                <div className="h-[1px] w-12 bg-[#E9E9E7] mx-auto opacity-50" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1: Dones Espirituales */}
                <div className="bg-white border border-[#E9E9E7] rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all group">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop" 
                      alt="Dones Espirituales"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
              <div className="p-5 flex flex-col flex-1 space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-bold text-[#37352F] leading-[1.3] text-[17px] tracking-tight text-balance">Dones <br /> Espirituales</h3>
                      </div>
                      <p className="text-[12px] text-[#787774] font-medium italic">Lectura de carta natal personalizada</p>
                    </div>
                    
                    <div className="space-y-2 pt-2">
                      <button 
                        onClick={() => openModal('https://a-gabs.github.io/Dones/')}
                        className="w-full py-2.5 px-4 text-[13px] font-bold border-2 border-[#E9E9E7] text-[#37352F] rounded-lg hover:bg-[#F1F1EF] transition-colors"
                      >
                        Ver ejemplo
                      </button>
                      <a 
                        href="https://www.paypal.com/ncp/payment/XT7LDZ3H4PAM8" 
                        target="_blank"
                        className="w-full py-2.5 px-4 text-[13px] font-bold bg-[#37352F] text-white rounded-lg hover:opacity-90 transition-opacity text-center block"
                      >
                        Me interesa
                      </a>
                      <p className="text-[10px] text-center text-[#ADACAA]">⏱ Entrega en máximo 24 horas</p>
                    </div>
                  </div>
                </div>

                {/* Card 2: SAJU */}
                <div className="bg-white border border-[#E9E9E7] rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all group">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop" 
                      alt="SAJU"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
              <div className="p-5 flex flex-col flex-1 space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-bold text-[#37352F] leading-[1.3] text-[17px] tracking-tight text-balance">Saju Autoconocimiento</h3>
                      </div>
                      <p className="text-[12px] text-[#787774] font-medium italic">Análisis de destino y ciclos de vida</p>
                    </div>
                    
                    <div className="space-y-2 pt-2">
                      <button 
                        onClick={() => openModal('https://a-gabs.github.io/Dones/')}
                        className="w-full py-2.5 px-4 text-[13px] font-bold border-2 border-[#E9E9E7] text-[#37352F] rounded-lg hover:bg-[#F1F1EF] transition-colors"
                      >
                        Ver ejemplo
                      </button>
                      <a 
                        href="https://www.paypal.com/ncp/payment/XT7LDZ3H4PAM8" 
                        target="_blank"
                        className="w-full py-2.5 px-4 text-[13px] font-bold bg-[#37352F] text-white rounded-lg hover:opacity-90 transition-opacity text-center block"
                      >
                        Me interesa
                      </a>
                      <p className="text-[10px] text-center text-[#ADACAA]">⏱ Entrega en máximo 24 horas</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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

                const isGeneral = cat === "✦ General";
                const isExpanded = expandedCategory === cat || isGeneral;

                return (
                  <div key={cat} className="flex flex-col gap-2">
                    {isGeneral ? (
                      <>
                        <div className="px-1 flex items-center gap-2">
                          <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#787774] opacity-70">
                            {cat.split(' ')[1] || cat}
                          </h2>
                          <div className="h-[1px] flex-1 bg-[#E9E9E7]" />
                        </div>
                        <div className="px-1 mb-1">
                          <p className="text-[12px] text-[#787774] leading-relaxed italic">
                            Las preguntas son privadas y personalizadas según tu situación.
                            La lectura se envía mediante nota de audio, donde se explica detalladamente la tirada y los mensajes que aparecen.
                            <br /><br />
                            Las sesiones se agendan previamente, coordinando un horario disponible para ambas partes.
                          </p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {filteredServices.map((service) => (
                            <div key={service.name}>
                              <PriceItem service={service} currency={currency} />
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <button 
                          onClick={() => setExpandedCategory(expandedCategory === cat ? null : cat)}
                          className="notion-card group text-left flex-col items-start gap-1"
                        >
                          <div className="flex items-center gap-3 w-full">
                            <div className="notion-icon text-lg">
                              {cat.split(' ')[0]}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-[14px] font-bold">{cat}</h3>
                            </div>
                            <ChevronRight className={`w-4 h-4 text-[#D3D3D2] transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                          </div>
                          <p className="text-[12px] text-[#787774] ml-9 leading-snug">
                            {cat === "💘 Amor" 
                              ? "Conoce lo que piensa, lo que siente y hacia dónde se dirige la conexión."
                              : "Analiza tu situación actual y proyecta tu siguiente movimiento con claridad."}
                          </p>
                        </button>
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col gap-1.5 pl-4 border-l-2 border-[#E9E9E7] ml-4"
                            >
                              {filteredServices.map((service) => (
                                <div key={service.name}>
                                  <PriceItem service={service} currency={currency} />
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
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

      <AnimatePresence>
        {modalUrl && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white sm:rounded-2xl w-full max-w-4xl h-full sm:h-auto sm:max-h-[90vh] overflow-hidden relative shadow-2xl"
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md text-[#787774] hover:bg-gray-50 transition-colors border border-[#E9E9E7]"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full h-full sm:h-[600px] sm:max-h-[80vh] pt-14 sm:pt-0">
                <iframe 
                  src={modalUrl} 
                  className="w-full h-full border-none"
                  title="Ejemplo de lectura"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="mt-auto pt-12 text-center flex flex-col items-center gap-4">
        <div className="h-[1px] w-full bg-[#E9E9E7]" />
        <p className="text-[12px] text-[#ADACAA]">
          tarot.anna - Tarot ✨
        </p>
      </footer>
    </div>
  );
}
