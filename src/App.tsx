/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Instagram, X, ChevronLeft, Share2, Camera, Check, BookOpen } from "lucide-react";
import { toPng } from "html-to-image";
import DraggableCarousel from "./components/DraggableCarousel";
import { ARCANOS_DATA } from "./arcanosData";
import BlogPage from "./components/BlogPage";

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
    description: "Alinea tu vibración de abundancia y aprende a cocrear tu reality deseada.",
    image: "https://i.pinimg.com/736x/6e/5e/db/6e5edbfc2b41866286a7ef30d8b2812b.jpg",
    href: "https://www.paypal.com/ncp/payment/Q6MZL572GEFSG",
  },
  {
    id: "compatibilidad",
    title: "Compatibilidad de pareja",
    description: "Explora la sinastría astrológica profunda y tu conexión espiritual con el ser amado.",
    image: "https://i.pinimg.com/736x/4b/81/ef/4b81ef8a1953fbe73dcada3d3d120eb1.jpg",
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
  },
  {
    id: "numerologia-gratis",
    title: "Camino de Vida",
    description: "Calcula tu número de Camino de Vida y descubre el misterio y los talentos de tu vibración de nacimiento.",
    image: "https://i.pinimg.com/1200x/55/e6/33/55e6331a39664a855308cb508c236d95.jpg",
    href: "#",
  },
  {
    id: "compatibilidad-gratis",
    title: "Compatibilidad",
    description: "Calcula la sinastría de pareja, sintonía de corazón y el porcentaje de atracción espiritual con tu persona.",
    image: "https://i.pinimg.com/736x/4b/81/ef/4b81ef8a1953fbe73dcada3d3d120eb1.jpg",
    href: "#",
  },
  {
    id: "saju-gratis",
    title: "Saju: 4 Símbolos",
    description: "Descubre tus Cuatro Pilares del Destino (Año, Mes, Día y Hora) bajo la milenaria sabiduría astrológica coreana.",
    image: "https://i.pinimg.com/1200x/85/b8/e1/85b8e104ae4bf80b356779561407da69.jpg",
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

const NUMEROLOGIA_DATA: Record<number, { name: string; keyEnergy: string; description: string }> = {
  1: {
    name: "El Líder Creador (Número 1)",
    keyEnergy: "Independencia, ambición, originalidad y fuerza de voluntad iniciadora",
    description: "Tienes madera de líder y te encanta tomar la iniciativa. Eres independiente, valoras tu libertad y tienes mucha facilidad para arrancar proyectos desde cero. Tu gran lección práctica en la vida es aprender a confiar en tu propio criterio sin buscar tanto la aprobación ajena, delegar tareas para no sobrecargarte, y evitar impacientarte cuando los demás no van a tu mismo ritmo."
  },
  2: {
    name: "El Pacificador Empático (Número 2)",
    keyEnergy: "Diplomacia, cooperación, sensibilidad de alma y armonía relacional",
    description: "Eres el cable a tierra de tu grupo gracias a tu empatía y tu capacidad de mantener la calma. Sabes escuchar de forma excelente y tienes un radar natural para mediar en los conflictos de manera muy justa. Tu reto práctico es aprender a poner límites claros y decir 'no' sin sentirte culpable, para que no termines descuidando tus propias prioridades."
  },
  3: {
    name: "El Expresivo Creativo (Número 3)",
    keyEnergy: "Optimismo desbordante, comunicación radiante y arte inspirador",
    description: "Tu alegría, sentido del humor y facilidad para comunicar son súper contagiosos. Tienes una mente creativa que busca expresarse constantemente (sea hablando, escribiendo o inventando cosas nuevas). Tu principal desafío práctico en el día a día es ganarle a la procrastinación, enfocar tu atención en una sola tarea a la vez y no dispersar tus talentos."
  },
  4: {
    name: "El Constructor Metódico (Número 4)",
    keyEnergy: "Estabilidad material, disciplina sagrada, orden y bases firmes",
    description: "La constancia, la organización y la confiabilidad son tus mayores virtudes. Cuando te comprometes a hacer algo, la gente sabe que puede darlo por hecho. Te gusta tener bases firmes en tus proyectos, finanzas y relaciones. Tu reto pragmático es flexibilizar la mente ante los cambios y entender que los imprevistos también traen oportunidades."
  },
  5: {
    name: "El Explorador Libre (Número 5)",
    keyEnergy: "Aventura intelectual, cambio constante, libertad y adaptabilidad",
    description: "Te aburre la rutina y necesitas constante movimiento, aprender cosas nuevas o viajar para sentirte plenamente vivo/a. Tienes una capacidad de adaptación envidiable. Tu desafío práctico está en tolerar las fases aburridas o repetitivas de tus proyectos, ser más constante y no salir huyendo cuando sientas la menor sensación de atadura."
  },
  6: {
    name: "El Protector Armonioso (Número 6)",
    keyEnergy: "Amor incondicional, sanación del hogar y servicio compasivo",
    description: "El cuidado, la protección y el bienestar de los tuyos son tu prioridad absoluta. Creas ambientes acogedores allá donde vas y la gente acude a ti para sentirse segura. Tu gran aprendizaje práctico es soltar el rol de salvador/a: no cargues con problemas ajenos que no te corresponden y dedícate la misma atención que das a los demás."
  },
  7: {
    name: "El Buscador Sabio (Número 7)",
    keyEnergy: "Misticismo sagrado, introspección profunda, análisis y fe superior",
    description: "Tienes una mente sumamente analítica, observadora y curiosa. Te encanta el trasfondo de las cosas y tu intuición para detectar intenciones o mentiras es infalible. Tu reto diario es no aislarte demasiado ni sobreanalizar cada conversación o situación; date permiso de sentir e interactuar de forma sencilla sin sobrepensarlo todo."
  },
  8: {
    name: "El Gestor del Poder (Número 8)",
    keyEnergy: "Visión material de abundancia, autoridad justa y maestría kármica",
    description: "Tienes una ambición muy sana, gran sentido práctico y un instinto especial para los negocios, las finanzas o el liderazgo de equipos. Trabajas duro y logras el éxito de forma decisiva. Tu reto diario consiste en equilibrar el trabajo con tu bienestar personal y entender que el éxito real no es solo acumular tareas cumplidas."
  },
  9: {
    name: "El Humanitario Evolutivo (Número 9)",
    keyEnergy: "Altruismo universal, perdón sagrado, transmutación y cierre de ciclo",
    description: "Tienes un corazón súper generoso y empático. Inspiras confianza inmediata y encuentras satisfacción ayudando a otros. Sabes cerrar etapas con mucha sabiduría. Tu lección práctica es aprender a soltar capítulos o relaciones del pasado sin culpa ni nostalgia, y recordar que para ayudar a tu entorno primero debes estar bien tú."
  },
  11: {
    name: "El Mensajero Cósmico (Número Maestro 11)",
    keyEnergy: "Intuición suprasensorial, iluminación espiritual e inspiración estelar",
    description: "Posees una sensibilidad y una empatía excepcionales que te permiten conectar profundamente con la gente. Inspiras a tu entorno con tus palabras y tu visión práctica de la vida. Tu mayor reto es regular tu energía para no abrumarte con el estrés exterior; dedica tiempo de calidad a desconectar y recargar tu propia pila mental."
  },
  22: {
    name: "El Arquitecto Universal (Número Maestro 22)",
    keyEnergy: "Capacidad monumental de manifestar utopías espirituales en el plano real",
    description: "Tienes una capacidad brutal de planeación estratégica y de transformar grandes ideas en realidades concretas. Sabes organizar recursos para lograr metas grupales que beneficien a muchos. Tu lección es no asustarte ante tus propias expectativas elevadas y dar el primer paso práctico sin buscar la perfección inmediata."
  },
  33: {
    name: "El Guía de Almas (Número Maestro 33)",
    keyEnergy: "Amor divino absoluto, compasión crística y vocación terapéutica",
    description: "Destacas por tu inmensa generosidad y vocación de guía. Tu sola presencia transmite alivio y tienes una gran empatía que reconforta corazones. Tu tarea pragmática es cuidar tu salud mental y física: tu intención de ayudar es infinita, pero tus recursos de energía diarios son limitados. Priorízate también a ti."
  }
};

const parseMonth = (mStr: string): number => {
  if (!mStr) return 1;
  const norm = mStr.trim().toLowerCase();
  if (norm.startsWith("ene")) return 1;
  if (norm.startsWith("feb")) return 2;
  if (norm.startsWith("mar")) return 3;
  if (norm.startsWith("abr")) return 4;
  if (norm.startsWith("may")) return 5;
  if (norm.startsWith("jun")) return 6;
  if (norm.startsWith("jul")) return 7;
  if (norm.startsWith("ago")) return 8;
  if (norm.startsWith("sep")) return 9;
  if (norm.startsWith("oct")) return 10;
  if (norm.startsWith("nov")) return 11;
  if (norm.startsWith("dic")) return 12;
  const parsed = parseInt(norm);
  return isNaN(parsed) ? 1 : parsed;
};

export default function App() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sharingState, setSharingState] = useState<'idle' | 'capturing' | 'success' | 'error'>('idle');

  const handleShareResult = async (elementId: string, title: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    setSharingState('capturing');
    
    try {
      // Small pause to allow click effects to settle
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const dataUrl = await toPng(element, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
        filter: (node) => {
          return !((node as HTMLElement).hasAttribute && (node as HTMLElement).hasAttribute('data-html2canvas-ignore'));
        },
      });
      
      const blob = await (await fetch(dataUrl)).blob();
      if (!blob) {
        setSharingState('error');
        setTimeout(() => setSharingState('idle'), 3000);
        return;
      }
      
      const file = new File([blob], `${elementId}.png`, { type: "image/png" });
      const shareUrl = "https://anatarot.xyz/";
      
      let customText = `¡Calculé mi resultado de ${title} en tarot.anna! Es súper acertado, tienes que probarlo gratis aquí: ${shareUrl}`;
      if (title === "Arcano de Nacimiento") {
        customText = `¡No sabía esto sobre mi personalidad! Me calculé mi Arcano de Nacimiento y me describió tal cual. Siento que te va a encantar, calcula el tuyo gratis acá: ${shareUrl}`;
      } else if (title === "Camino de Vida") {
        customText = `¡Acabo de descubrir mi número de Camino de Vida y es idéntico a mí! Define súper bien lo que me pasa en el día a día. Mira tu número natal gratis aquí: ${shareUrl}`;
      } else if (title === "Compatibilidad de Pareja") {
        customText = `¡Hice la prueba de compatibilidad de pareja y la verdad describe nuestra dinámica al revés y al derecho! Haz la tuya súper fácil y gratis aquí: ${shareUrl}`;
      } else if (title === "Saju") {
        customText = `¡Encontré mi Elemento Maestro usando astrología coreana Saju! Te re identificas con lo que te sale. Pruébalo gratis aquí: ${shareUrl}`;
      }

      // Proactively copy the link to the clipboard first, so it is always ready to paste
      try {
        await navigator.clipboard.writeText(customText);
      } catch (clipErr) {
        console.warn("Clipboard auto-copy failed:", clipErr);
      }
      
      // Try Native Share API
      if (typeof navigator !== 'undefined' && navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: `tarot.anna — ${title}`,
            text: customText,
            url: shareUrl
          });
          setSharingState('success');
          setTimeout(() => setSharingState('idle'), 3000);
          return;
        } catch (err) {
          if (err instanceof Error && err.name === "AbortError") {
            setSharingState('idle');
            return;
          }
          console.error("Native share failed:", err);
        }
      }
      
      // Fallback: file downloader
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `tarot-anna-${elementId}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      setSharingState('success');
      setTimeout(() => setSharingState('idle'), 4000);
      
    } catch (error) {
      console.error("Error creating image with html-to-image:", error);
      setSharingState('error');
      setTimeout(() => setSharingState('idle'), 3000);
    }
  };

  // Arcano de nacimiento states
  const [currentView, setCurrentView] = useState<'links' | 'arcano-calc' | 'numerologia-calc' | 'compatibilidad-calc' | 'saju-calc' | 'blog'>(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/blog' || path.startsWith('/blog/') || hash === '#blog' || hash.startsWith('#/blog')) {
        return 'blog';
      }
    }
    return 'links';
  });

  const navigateTo = (view: 'links' | 'arcano-calc' | 'numerologia-calc' | 'compatibilidad-calc' | 'saju-calc' | 'blog') => {
    setCurrentView(view);
    setActiveId(null);
    if (typeof window !== "undefined") {
      if (view === 'blog') {
        window.history.pushState(null, '', '/blog');
      } else {
        if (window.location.pathname === '/blog' || window.location.pathname.startsWith('/blog/')) {
          window.history.pushState(null, '', '/');
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/blog' || path.startsWith('/blog/') || hash === '#blog' || hash.startsWith('#/blog')) {
        setCurrentView('blog');
      } else if (currentView === 'blog') {
        setCurrentView('links');
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, [currentView]);

  const [birthDay, setBirthDay] = useState<string>("1");
  const [birthMonth, setBirthMonth] = useState<string>("1");
  const [birthYear, setBirthYear] = useState<string>("1995");
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [calculationResult, setCalculationResult] = useState<number | null>(null);
  const [loadingText, setLoadingText] = useState<string>("Conectando con tu vibración...");

  // Numerología states
  const [numDay, setNumDay] = useState<string>("1");
  const [numMonth, setNumMonth] = useState<string>("1");
  const [numYear, setNumYear] = useState<string>("1995");
  const [numIsCalculating, setNumIsCalculating] = useState<boolean>(false);
  const [numResult, setNumResult] = useState<number | null>(null);
  const [numLoadingText, setNumLoadingText] = useState<string>("Sintonizando frecuencias numéricas...");

  // Compatibilidad states
  const [compName1, setCompName1] = useState<string>("");
  const [compDay1, setCompDay1] = useState<string>("1");
  const [compMonth1, setCompMonth1] = useState<string>("1");
  const [compYear1, setCompYear1] = useState<string>("1995");
  const [compName2, setCompName2] = useState<string>("");
  const [compDay2, setCompDay2] = useState<string>("1");
  const [compMonth2, setCompMonth2] = useState<string>("1");
  const [compYear2, setCompYear2] = useState<string>("1995");
  const [compIsCalculating, setCompIsCalculating] = useState<boolean>(false);
  const [compResult, setCompResult] = useState<{
    score: number;
    love: number;
    comm: number;
    destiny: number;
    archetype: string;
    desc: string;
  } | null>(null);
  const [compLoadingText, setCompLoadingText] = useState<string>("Alineando cartas natales...");

  // Saju states
  const [sajuDay, setSajuDay] = useState<string>("1");
  const [sajuMonth, setSajuMonth] = useState<string>("1");
  const [sajuYear, setSajuYear] = useState<string>("1995");
  const [sajuHour, setSajuHour] = useState<string>("desconocido");
  const [sajuIsCalculating, setSajuIsCalculating] = useState<boolean>(false);
  const [sajuResult, setSajuResult] = useState<{
    yearPillar: { element: string; emoji: string; animal: string; code: string; desc: string };
    monthPillar: { element: string; emoji: string; animal: string; code: string; desc: string };
    dayPillar: { element: string; emoji: string; animal: string; code: string; desc: string };
    hourPillar: { element: string; emoji: string; animal: string; code: string; desc: string } | null;
    archetype: string;
    advice: string;
  } | null>(null);
  const [sajuLoadingText, setSajuLoadingText] = useState<string>("Consultando los Cuatro Pilares...");

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
      const d = parseInt(birthDay) || 1;
      const m = parseMonth(birthMonth);
      const y = parseInt(birthYear) || 1995;
      
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

  const calculateNumerologia = () => {
    setNumIsCalculating(true);
    setNumResult(null);
    setNumLoadingText("Sintonizando frecuencias numéricas...");
    
    setTimeout(() => {
      setNumLoadingText("Sumando la vibración astral de tu fecha...");
    }, 250);

    setTimeout(() => {
      const d = parseInt(numDay) || 1;
      const m = parseMonth(numMonth);
      const y = parseInt(numYear) || 1995;
      
      // Reduce function
      const reduceNum = (num: number, final: boolean) => {
        let s = num;
        while (s > 9) {
          if (!final && (s === 11 || s === 22)) return s;
          if (final && (s === 11 || s === 22 || s === 33)) return s;
          s = s.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
        return s;
      };

      const dVal = reduceNum(d, false);
      const mVal = reduceNum(m, false);
      const yVal = reduceNum(y, false);
      const sum = dVal + mVal + yVal;
      const finalResult = reduceNum(sum, true);

      setNumResult(finalResult);
      setNumIsCalculating(false);
    }, 600);
  };

  const calculateCompatibilidad = () => {
    setCompIsCalculating(true);
    setCompResult(null);
    setCompLoadingText("Alineando cartas natales...");

    setTimeout(() => {
      setCompLoadingText("Tejiendo hilos de destino astral...");
    }, 250);

    setTimeout(() => {
      const d1 = parseInt(compDay1) || 1;
      const m1 = parseMonth(compMonth1);
      const y1 = parseInt(compYear1) || 1995;
      const d2 = parseInt(compDay2) || 1;
      const m2 = parseMonth(compMonth2);
      const y2 = parseInt(compYear2) || 1995;

      // Deterministic but dynamic algorithm
      const combinedVal = (d1 * m1 * y1) + (d2 * m2 * y2) + (compName1.length * 17) + (compName2.length * 23);
      
      const score = 70 + (combinedVal % 29); // 70% to 98%
      const love = 75 + (combinedVal % 24); // 75% to 98%
      const comm = 70 + ((combinedVal + 11) % 29); // 70% to 98%
      const destiny = 78 + ((combinedVal + 4) % 21); // 78% to 98%

      let archetype = "";
      let desc = "";

      if (score >= 90) {
        archetype = "Conexión Natural e Imbatible";
        desc = `¡La sintonía entre vosotros es brutal! ${compName1 || "Persona 1"} y ${compName2 || "Persona 2"} se entienden casi sin hablar. Se nota que hay una base sólida donde la comunicación fluye con total honestidad y cero dramas. Funcionan genial como equipo: se apoyan en los momentos difíciles y potencian los proyectos del otro. El mayor reto práctico será mantener la magia viva en el día a día para no volverse solo mejores amigos, pero el potencial de construir algo hermoso y duradero es altísimo.`;
      } else if (score >= 80) {
        archetype = "Fuego Creativo y Acción";
        desc = `Vuestra relación derrocha química, risas y dinamismo. Con ${compName1 || "Persona 1"} y ${compName2 || "Persona 2"} nunca hay espacio para el aburrimiento. Tienen una complicidad muy rápida y divertida que los mantiene siempre motivados. Se inspiran para hacer planes, viajar y retar la rutina. Para que sea estable a largo plazo, cuiden de organizar espacios donde puedan desacelerar juntos, hablar de lo que sienten con calma y conectar sin prisas ni distracciones externas.`;
      } else if (score >= 72) {
        archetype = "La Calma y el Refugio Seguro";
        desc = `Esta unión es sinónimo de estabilidad, confort y paz mental. Entre ${compName1 || "Persona 1"} y ${compName2 || "Persona 2"} se respira un ambiente seguro donde cada uno puede ser él mismo sin miedo a ser juzgado. Saben escucharse y se cuidan con ternura cuando el exterior es caótico. Es una relación excelente para consolidar planes a futuro, finanzas compartidas y convivir con total fluidez. Solo tengan cuidado con la comodidad; rétense mutuamente de vez en cuando.`;
      } else {
        archetype = "Crecimiento y Espejo Mutuo";
        desc = `Una relación intensa que los desafía constantemente a crecer y madurar. ${compName1 || "Persona 1"} y ${compName2 || "Persona 2"} funcionan como espejos perfectos de lo que necesitan trabajar internamente. Aunque a veces se presenten debates o choques debido a sus diferentes perspectivas, estos retos son ideales para sanar inseguridades del pasado. El consejo práctico: hablen las cosas en el momento, eviten suponer y cultiven la empatía.`;
      }

      setCompResult({ score, love, comm, destiny, archetype, desc });
      setCompIsCalculating(false);
    }, 600);
  };

  const calculateSaju = () => {
    setSajuIsCalculating(true);
    setSajuResult(null);
    setSajuLoadingText("Invocando el destino ancestral...");

    setTimeout(() => {
      setSajuLoadingText("Alineando el Yin y el Yang de los Elementos...");
    }, 250);

    setTimeout(() => {
      const d = parseInt(sajuDay) || 1;
      const m = parseMonth(sajuMonth);
      const y = parseInt(sajuYear) || 1995;

      // 1. Year animal & element
      const animalYearNames = ["Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra", "Mono", "Gallo", "Perro", "Pig"];
      const animalYearEmojis = ["🐭", "🐂", "🐯", "🐰", "🐲", "🐍", "🐴", "🐑", "🐵", "🐔", "🐶", "🐷"];
      const elementsList = ["Metal", "Agua", "Madera", "Fuego", "Tierra"];
      const elementsHanja = ["金", "水", "木", "火", "土"];
      
      const yearIdx = (y - 1900) % 12;
      const yearAnimal = animalYearNames[yearIdx];
      const yearEmoji = animalYearEmojis[yearIdx];
      
      // Traditional Stem Element of the year based on ending digit
      let yearElem = "Tierra";
      if (y % 10 === 0 || y % 10 === 1) yearElem = "Metal";
      else if (y % 10 === 2 || y % 10 === 3) yearElem = "Agua";
      else if (y % 10 === 4 || y % 10 === 5) yearElem = "Madera";
      else if (y % 10 === 6 || y % 10 === 7) yearElem = "Fuego";
      const yearCode = elementsHanja[elementsList.indexOf(yearElem)];

      // 2. Month animal & element (Solar months mapping)
      const monthAnimals = ["Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra", "Mono", "Gallo", "Perro", "Pig", "Rata"];
      const monthEmojis = ["🐂", "🐯", "🐰", "🐲", "🐍", "🐴", "🐑", "🐵", "🐔", "🐶", "🐷", "🐭"];
      const monthElems = ["Tierra", "Madera", "Madera", "Tierra", "Fuego", "Fuego", "Tierra", "Metal", "Metal", "Tierra", "Agua", "Agua"];
      
      const monthIdx = (m - 1) % 12;
      const monthAnimal = monthAnimals[monthIdx];
      const monthEmoji = monthEmojis[monthIdx];
      const monthElem = monthElems[monthIdx];
      const monthCode = elementsHanja[elementsList.indexOf(monthElem)];

      // 3. Day animal & element (Deterministic from birthday sum + julian)
      const julianDays = Math.floor((y * 365.25) + (m * 30.6) + d);
      const dayAnimalIdx = (julianDays % 12 + 12) % 12;
      const dayElemIdx = (julianDays % 5 + 5) % 5;
      
      const dayAnimal = animalYearNames[dayAnimalIdx];
      const dayEmoji = animalYearEmojis[dayAnimalIdx];
      const dayElem = elementsList[dayElemIdx];
      const dayCode = elementsHanja[dayElemIdx];

      // 4. Hour animal & element (if known)
      let hourPillar = null;
      const isDesconocido = !sajuHour || sajuHour.toLowerCase().includes("desconocido") || sajuHour.toLowerCase().includes("no lo sé") || sajuHour.toLowerCase().includes("no lo se");
      
      if (!isDesconocido) {
        let hourVal = 12; // default fallback
        
        // Match standard format formats (e.g. 14:30, 02:17, 2.17 pm, etc)
        const timeMatch = sajuHour.match(/^(\d{1,2})[.:h ]?(\d{2})?\s*(am|pm|a\.m\.|p\.m\.)?$/i);
        if (timeMatch) {
          let h = parseInt(timeMatch[1]);
          const ampm = timeMatch[3]?.toLowerCase();
          if (ampm && ampm.includes('p') && h < 12) h += 12;
          if (ampm && ampm.includes('a') && h === 12) h = 0;
          hourVal = h;
        } else {
          const splitHour = parseInt(sajuHour.split(":")[0]);
          if (!isNaN(splitHour)) {
            hourVal = splitHour;
          }
        }
        
        // Clamp hourVal to valid hour range
        hourVal = Math.max(0, Math.min(23, hourVal));

        // 2-hour brackets
        let hAnimalIdx = 0;
        if (hourVal >= 23 || hourVal < 1) hAnimalIdx = 0; // Rata
        else hAnimalIdx = Math.floor((hourVal + 1) / 2);

        const hourAnimal = animalYearNames[hAnimalIdx];
        const hourEmoji = animalYearEmojis[hAnimalIdx];
        // Hour stem element depending on animal and Daymaster
        const hourElemIdx = (hAnimalIdx % 5 + dayElemIdx) % 5;
        const hourElem = elementsList[hourElemIdx];
        const hourCode = elementsHanja[hourElemIdx];

        hourPillar = {
          element: hourElem,
          emoji: hourEmoji,
          animal: hourAnimal,
          code: hourCode,
          desc: "Representa tus deseos ocultos, tus planes a futuro y tu lado más privado que no todos conocen."
        };
      }

      // Archetype based on Daymaster element (Daymaster is your true self)
      let archetype = "";
      let advice = "";
      if (dayElem === "Madera") {
        archetype = "Esencia Madera (Crecimiento y Acción)";
        advice = "Tu energía se enfoca en avanzar, emprender y renovarte constantemente. Te encanta ver crecer tus proyectos y tienes una iniciativa natural para liderar de manera fresca. Tu reto diario es ser más flexible cuando las cosas cambian de imprevisto y aprender a terminar lo que empiezas en lugar de dispersarte en mil planes nuevos.";
      } else if (dayElem === "Fuego") {
        archetype = "Esencia Fuego (Pasión y Carisma)";
        advice = "Eres pura energía, carisma y emoción. Te apasionas rápido con lo que te gusta y contagias tu entusiasmo a todos a tu alrededor de forma muy de tú a tú. Tu lección práctica es cuidar tu impulsividad: mantén la cabeza fría antes de tomar decisiones importantes para ahorrar tiempo y energía.";
      } else if (dayElem === "Tierra") {
        archetype = "Esencia Tierra (Estabilidad y Confianza)";
        advice = "Eres la persona de confianza a la que todos acuden cuando necesitan dirección. Eres muy realista, leal y te gusta construir bases seguras en tu vida personal y laboral. Tu mayor desafío es no cerrarte al cambio o estancarte en la rutina: aprende a soltar el control y fluir con lo que venga.";
      } else if (dayElem === "Metal") {
        archetype = "Esencia Metal (Determinación y Enfoque)";
        advice = "Tienes una mente súper nítida, súper organizada y decidida. Te encanta el trabajo bien hecho, valoras la honestidad y tienes una facilidad innata para resolver problemas con lógica y orden. Tu reto es suavizar la autocrítica y no exigirle tanto a tu entorno: recuerda que no todo tiene que ser perfecto.";
      } else {
        archetype = "Esencia Agua (Intuición y Fluidez)";
        advice = "Te adaptas súper fácil a las situaciones y tienes una intuición excelente para leer a las personas o saber qué camino tomar. Eres empático/a e independiente. Tu tarea práctica es evitar el exceso de análisis y no darle tantas vueltas a las cosas para que no te ganes estrés innecesario: actúa con confianza.";
      }

      setSajuResult({
        yearPillar: {
          element: yearElem,
          emoji: yearEmoji,
          animal: yearAnimal,
          code: yearCode,
          desc: "Representa tu herencia ancestral, la primera impresión de la infancia y tu interacción externa inicial con el mundo terrenal."
        },
        monthPillar: {
          element: monthElem,
          emoji: monthEmoji,
          animal: monthAnimal,
          code: monthCode,
          desc: "Rige tu entorno profesional, tus metas de superación social, tu relación parental cercana y tus talentos para crear abundancia."
        },
        dayPillar: {
          element: dayElem,
          emoji: dayEmoji,
          animal: dayAnimal,
          code: dayCode,
          desc: "Tu verdadero yo (Día Maestro). Es la esencia que define tu personalidad profunda, tu fuerza de voluntad íntima y tu relación amorosa principal."
        },
        hourPillar,
        archetype,
        advice
      });
      setSajuIsCalculating(false);
    }, 600);
  };

  const handleOpenCalc = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigateTo('arcano-calc');
  };

  const handleCloseCalc = () => {
    navigateTo('links');
    
    // Arcano Resets
    setCalculationResult(null);
    setIsCalculating(false);
    setBirthDay("1");
    setBirthMonth("1");
    setBirthYear("1995");

    // Numerología Resets
    setNumResult(null);
    setNumIsCalculating(false);
    setNumDay("1");
    setNumMonth("1");
    setNumYear("1995");

    // Compatibilidad Resets
    setCompResult(null);
    setCompIsCalculating(false);
    setCompName1("");
    setCompName2("");
    setCompDay1("1");
    setCompMonth1("1");
    setCompYear1("1995");
    setCompDay2("1");
    setCompMonth2("1");
    setCompYear2("1995");

    // Saju Resets
    setSajuResult(null);
    setSajuIsCalculating(false);
    setSajuDay("1");
    setSajuMonth("1");
    setSajuYear("1995");
    setSajuHour("desconocido");
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
            {card.id === "arcano-gratis" || card.id === "numerologia-gratis" || card.id === "compatibilidad-gratis" || card.id === "saju-gratis" ? (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  if (card.id === "arcano-gratis") navigateTo('arcano-calc');
                  if (card.id === "numerologia-gratis") navigateTo('numerologia-calc');
                  if (card.id === "compatibilidad-gratis") navigateTo('compatibilidad-calc');
                  if (card.id === "saju-gratis") navigateTo('saju-calc');
                  setActiveId(null);
                }}
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

  // Dedicated full-screen view for the Blog
  if (currentView === "blog") {
    return (
      <div className="bg-[#FAF9F5] min-h-screen text-[#1A1A1A] antialiased selection:bg-[#7c2a34]/15">
        <BlogPage onBackToMain={() => navigateTo('links')} />
      </div>
    );
  }

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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        ) : currentView === "arcano-calc" ? (
          /* INTERACTIVE ARCANUM CALCULATOR VIEW */
          <div id="arcano-calc-panel" className="w-full flex flex-col min-h-screen justify-between gap-8 animate-in fade-in duration-300">
            <div className="space-y-6">
              {/* BACK BUTTON */}
              <button 
                id="arcano-back-btn"
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
                <div id="arcano-form" className="bg-white/60 border border-[#1a1a1a]/5 rounded-2xl p-6 shadow-sm space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5 col-span-1">
                        <label className="text-[11px] uppercase tracking-wider text-[#787774] font-semibold font-sans">Día</label>
                        <input 
                          type="text"
                          id="arcano-day-select"
                          value={birthDay}
                          onChange={(e) => setBirthDay(e.target.value)}
                          list="days-list"
                          placeholder="Día"
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        />
                      </div>
 
                      <div className="space-y-1.5 col-span-1">
                        <label className="text-[11px] uppercase tracking-wider text-[#787774] font-semibold font-sans">Mes</label>
                        <input 
                          type="text"
                          id="arcano-month-select"
                          value={birthMonth}
                          onChange={(e) => setBirthMonth(e.target.value)}
                          list="months-list"
                          placeholder="Mes"
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        />
                      </div>
                    </div>
 
                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase tracking-wider text-[#787774] font-semibold font-sans">Año</label>
                      <input 
                        type="text"
                        id="arcano-year-select"
                        value={birthYear}
                        onChange={(e) => setBirthYear(e.target.value)}
                        list="years-list"
                        placeholder="Año"
                        className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                      />
                    </div>
                  </div>

                  <button 
                    id="arcano-submit-btn"
                    onClick={calculateArcano}
                    className="w-full py-3 px-4 bg-black hover:bg-neutral-900 text-white rounded-xl text-[14px] font-semibold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <span>Revelar mi Arcano ✨</span>
                  </button>
                </div>
              )}

              {isCalculating && (
                /* LOADING PANEL */
                <div id="arcano-loading" className="flex flex-col items-center justify-center p-12 text-center space-y-5 animate-in fade-in duration-300">
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
                <div id="arcano-result" className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div id="arcano-card-capture" className="relative bg-[#FCFAF7] border border-[#1a1a1a]/10 rounded-3xl p-6 shadow-sm flex flex-col items-center text-center space-y-4">
                    {/* Share Button */}
                    <button
                      onClick={() => handleShareResult("arcano-card-capture", "Arcano de Nacimiento")}
                      data-html2canvas-ignore="true"
                      className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-black hover:bg-neutral-100/80 rounded-full transition-all cursor-pointer bg-white/50 backdrop-blur-xs shadow-xs border border-[#1a1a1a]/5 flex items-center justify-center"
                      title="Compartir o guardar resultado"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="space-y-3 px-2 pt-4">
                      <div className="space-y-1">
                        <span className="text-[12px] uppercase tracking-[0.25em] text-[#787774] font-semibold block">
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

                    {/* Subtle watermark */}
                    <div className="w-full pt-4 border-t border-[#1a1a1a]/5 text-center mt-2">
                      <span className="text-[9.5px] text-[#1a1a1a]/30 font-sans tracking-widest uppercase font-medium">anatarot.xyz</span>
                    </div>
                  </div>

                  {/* CUSTOM ACTIONS */}
                  <div className="space-y-3">
                    <a 
                      id="arcano-action-btn"
                      href="https://www.paypal.com/ncp/payment/V5FUFJX8KAKUW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 bg-black hover:bg-neutral-900 border border-neutral-800 text-white rounded-xl text-[14.5px] font-semibold text-center flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                    >
                      <span>Agendar lectura general ✨</span>
                    </a>
                    
                    <button 
                      id="arcano-recalc-btn"
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
        ) : currentView === "numerologia-calc" ? (
          /* INTERACTIVE NUMEROLOGIA CALCULATOR VIEW */
          <div id="numerologia-calc-panel" className="w-full flex flex-col min-h-screen justify-between gap-8 animate-in fade-in duration-300">
            <div className="space-y-6">
              {/* BACK BUTTON */}
              <button 
                id="num-back-btn"
                onClick={handleCloseCalc}
                className="flex items-center gap-2 text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors text-[13.5px] font-sans font-medium cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
                <span>Volver al inicio</span>
              </button>

              {/* BRAND HEADER */}
              <div className="space-y-2 text-center py-2">
                <span className="text-[10px] tracking-[0.25em] text-[#787774] font-semibold uppercase">Frecuencias del Destino</span>
                <h2 className="font-serif text-[28px] font-bold text-[#1a1a1a] tracking-tight leading-tight">Número en la Numerología</h2>
                <div className="h-[1px] w-12 bg-[#1a1a1a]/10 mx-auto mt-2" />
                <p className="text-[13.5px] text-[#787774] font-sans font-light leading-relaxed pt-2">
                  La numerología revela la vibración latente de tu fecha de nacimiento. Descubre tu Número de Camino de Vida y tu misión álmica terrenal.
                </p>
              </div>

              {!numResult && !numIsCalculating && (
                /* INPUT FORM PANEL */
                <div id="num-form" className="bg-white/60 border border-[#1a1a1a]/5 rounded-2xl p-6 shadow-sm space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5 col-span-1">
                        <label className="text-[11px] uppercase tracking-wider text-[#787774] font-semibold font-sans">Día</label>
                        <input 
                          type="text"
                          id="num-day-select"
                          value={numDay}
                          onChange={(e) => setNumDay(e.target.value)}
                          list="days-list"
                          placeholder="Día"
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        />
                      </div>
 
                      <div className="space-y-1.5 col-span-1">
                        <label className="text-[11px] uppercase tracking-wider text-[#787774] font-semibold font-sans">Mes</label>
                        <input 
                          type="text"
                          id="num-month-select"
                          value={numMonth}
                          onChange={(e) => setNumMonth(e.target.value)}
                          list="months-list"
                          placeholder="Mes"
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        />
                      </div>
                    </div>
 
                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase tracking-wider text-[#787774] font-semibold font-sans">Año</label>
                      <input 
                        type="text"
                        id="num-year-select"
                        value={numYear}
                        onChange={(e) => setNumYear(e.target.value)}
                        list="years-list"
                        placeholder="Año"
                        className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                      />
                    </div>
                  </div>

                  <button 
                    id="num-submit-btn"
                    onClick={calculateNumerologia}
                    className="w-full py-3 px-4 bg-black hover:bg-neutral-900 text-white rounded-xl text-[14px] font-semibold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <span>Calcular mi Número de Vida 🔢</span>
                  </button>
                </div>
              )}

              {numIsCalculating && (
                /* LOADING PANEL */
                <div id="num-loading" className="flex flex-col items-center justify-center p-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-dashed border-[#1a1a1a]/20 rounded-full animate-spin [animation-duration:8s]" />
                    <div className="text-2xl animate-pulse">🔢</div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[15px] font-serif font-medium text-[#1a1a1a]">{numLoadingText}</p>
                    <p className="text-[12px] text-[#787774] font-light font-sans">Calculando sendero numérico natal...</p>
                  </div>
                </div>
              )}

              {numResult && !numIsCalculating && (
                /* RESULT PANEL */
                <div id="num-result" className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div id="num-card-capture" className="relative bg-[#FCFAF7] border border-[#1a1a1a]/10 rounded-3xl p-6 shadow-sm flex flex-col items-center text-center space-y-4">
                    {/* Share Button */}
                    <button
                      onClick={() => handleShareResult("num-card-capture", "Camino de Vida")}
                      data-html2canvas-ignore="true"
                      className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-black hover:bg-neutral-100/80 rounded-full transition-all cursor-pointer bg-white/50 backdrop-blur-xs shadow-xs border border-[#1a1a1a]/5 flex items-center justify-center"
                      title="Compartir o guardar resultado"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="space-y-3 px-2 pt-4">
                      <div className="space-y-1">
                        <span className="text-[12px] uppercase tracking-[0.25em] text-[#787774] font-semibold block">
                          CAMINO DE VIDA
                        </span>
                        <h3 className="font-serif text-[28px] font-bold text-[#1a1a1a] tracking-tight">
                          {NUMEROLOGIA_DATA[numResult]?.name || `Número de Camino ${numResult}`}
                        </h3>
                        <p className="text-[13px] text-amber-800 font-sans font-medium italic mt-1.5">
                          "{NUMEROLOGIA_DATA[numResult]?.keyEnergy}"
                        </p>
                      </div>
                      
                      <p className="text-[14px] text-[#1a1a1a]/90 font-sans font-light leading-relaxed text-left border-t border-[#1a1a1a]/10 pt-4">
                        {NUMEROLOGIA_DATA[numResult]?.description}
                      </p>
                    </div>

                    {/* Subtle watermark */}
                    <div className="w-full pt-4 border-t border-[#1a1a1a]/5 text-center mt-2">
                      <span className="text-[9.5px] text-[#1a1a1a]/30 font-sans tracking-widest uppercase font-medium">anatarot.xyz</span>
                    </div>
                  </div>

                  {/* CUSTOM ACTIONS */}
                  <div className="space-y-3">
                    <a 
                      id="num-action-btn"
                      href="https://www.paypal.com/ncp/payment/RCQEPWZZHXGLS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 bg-black hover:bg-neutral-900 border border-neutral-800 text-white rounded-xl text-[14.5px] font-semibold text-center flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                    >
                      <span>Lectura Vocacional & Talentos ✨</span>
                    </a>
                    
                    <button 
                      id="num-recalc-btn"
                      onClick={() => {
                        setNumResult(null);
                        setNumIsCalculating(false);
                        setNumDay("1");
                        setNumMonth("1");
                        setNumYear("1995");
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
                tarot.anna — Numerología ✨
              </p>
            </footer>
          </div>
        ) : currentView === "compatibilidad-calc" ? (
          /* INTERACTIVE COMPATIBILIDAD CALCULATOR VIEW */
          <div id="compatibilidad-panel" className="w-full flex flex-col min-h-screen justify-between gap-8 animate-in fade-in duration-300">
            <div className="space-y-6">
              {/* BACK BUTTON */}
              <button 
                id="comp-back-btn"
                onClick={handleCloseCalc}
                className="flex items-center gap-2 text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors text-[13.5px] font-sans font-medium cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
                <span>Volver al inicio</span>
              </button>

              {/* BRAND HEADER */}
              <div className="space-y-2 text-center py-2">
                <span className="text-[10px] tracking-[0.25em] text-[#787774] font-semibold uppercase">Sinastría de Almas</span>
                <h2 className="font-serif text-[28px] font-bold text-[#1a1a1a] tracking-tight leading-tight">Compatibilidad de Pareja</h2>
                <div className="h-[1px] w-12 bg-[#1a1a1a]/10 mx-auto mt-2" />
                <p className="text-[13.5px] text-[#787774] font-sans font-light leading-relaxed pt-2">
                  Revela la sintonía vibracional, afectiva y kármica entre tú y tu ser amado para comprender el propósito espiritual de su unión.
                </p>
              </div>

              {!compResult && !compIsCalculating && (
                /* INPUT FORM PANEL */
                <div id="comp-form" className="bg-white/60 border border-[#1a1a1a]/5 rounded-2xl p-6 shadow-sm space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  {/* Persona 1 */}
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-2 border-b border-[#1a1a1a]/5 pb-1">
                      <span className="text-xs">✨</span>
                      <h3 className="font-serif text-[15px] font-semibold text-[#1a1a1a]">Tu Energía (Persona 1)</h3>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-wider text-[#787774] font-semibold">Tu Nombre</label>
                      <input 
                        type="text" 
                        value={compName1}
                        onChange={(e) => setCompName1(e.target.value)}
                        placeholder="Ej: Sofía"
                        className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="text-[9px] uppercase text-[#787774] block mb-1">Día</label>
                        <input 
                          type="text"
                          value={compDay1} 
                          onChange={(e) => setCompDay1(e.target.value)}
                          list="days-list"
                          placeholder="Día"
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-lg p-1.5 text-xs outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] uppercase text-[#787774] block mb-1">Mes</label>
                        <input 
                          type="text"
                          value={compMonth1} 
                          onChange={(e) => setCompMonth1(e.target.value)}
                          list="months-list"
                          placeholder="Mes"
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-lg p-1.5 text-xs outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] uppercase text-[#787774] block mb-1">Año</label>
                        <input 
                          type="text"
                          value={compYear1} 
                          onChange={(e) => setCompYear1(e.target.value)}
                          list="years-list"
                          placeholder="Año"
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-lg p-1.5 text-xs outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Persona 2 */}
                  <div className="space-y-3.5 pt-2">
                    <div className="flex items-center gap-2 border-b border-[#1a1a1a]/5 pb-1">
                      <span className="text-xs">💖</span>
                      <h3 className="font-serif text-[15px] font-semibold text-[#1a1a1a]">Su Energía (Persona 2)</h3>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-wider text-[#787774] font-semibold">Su Nombre</label>
                      <input 
                        type="text" 
                        value={compName2}
                        onChange={(e) => setCompName2(e.target.value)}
                        placeholder="Ej: Mateo"
                        className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="text-[9px] uppercase text-[#787774] block mb-1">Día</label>
                        <input 
                          type="text"
                          value={compDay2} 
                          onChange={(e) => setCompDay2(e.target.value)}
                          list="days-list"
                          placeholder="Día"
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-lg p-1.5 text-xs outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] uppercase text-[#787774] block mb-1">Mes</label>
                        <input 
                          type="text"
                          value={compMonth2} 
                          onChange={(e) => setCompMonth2(e.target.value)}
                          list="months-list"
                          placeholder="Mes"
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-lg p-1.5 text-xs outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] uppercase text-[#787774] block mb-1">Año</label>
                        <input 
                          type="text"
                          value={compYear2} 
                          onChange={(e) => setCompYear2(e.target.value)}
                          list="years-list"
                          placeholder="Año"
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-lg p-1.5 text-xs outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    id="comp-submit-btn"
                    onClick={calculateCompatibilidad}
                    className="w-full py-3 px-4 bg-black hover:bg-neutral-900 text-white rounded-xl text-[14px] font-semibold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <span>Calcular Sintonía de Almas 💞</span>
                  </button>
                </div>
              )}

              {compIsCalculating && (
                /* LOADING PANEL */
                <div id="comp-loading" className="flex flex-col items-center justify-center p-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-dashed border-[#1a1a1a]/20 rounded-full animate-spin [animation-duration:8s]" />
                    <div className="text-2xl animate-pulse">💖</div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[15px] font-serif font-medium text-[#1a1a1a]">{compLoadingText}</p>
                    <p className="text-[12px] text-[#787774] font-light font-sans">Alineando vibración kármica de amor...</p>
                  </div>
                </div>
              )}

              {compResult && !compIsCalculating && (
                /* RESULT PANEL */
                <div id="comp-result" className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div id="comp-card-capture" className="relative bg-[#FCFAF7] border border-[#1a1a1a]/10 rounded-3xl p-6 shadow-sm space-y-6 flex flex-col items-center">
                    {/* Share Button */}
                    <button
                      onClick={() => handleShareResult("comp-card-capture", "Compatibilidad de Pareja")}
                      data-html2canvas-ignore="true"
                      className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-black hover:bg-neutral-100/80 rounded-full transition-all cursor-pointer bg-white/50 backdrop-blur-xs shadow-xs border border-[#1a1a1a]/5 flex items-center justify-center"
                      title="Compartir o guardar resultado"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Ring score */}
                    <div className="text-center space-y-2 pt-4">
                      <div className="inline-flex items-center justify-center rounded-full bg-rose-50/50 p-4 border border-rose-100/50">
                        <span className="font-serif text-[42px] font-bold text-rose-600 leading-none">
                          {compResult.score}%
                        </span>
                      </div>
                      <h3 className="font-serif text-[22px] font-bold text-[#1a1a1a] mt-2">
                        {compResult.archetype}
                      </h3>
                      <p className="text-[11px] uppercase tracking-wider text-[#787774] font-bold mt-1">
                        Sintonía Álmica entre {compName1 || "Tú"} y {compName2 || "Mateo"}
                      </p>
                    </div>

                    {/* Bars */}
                    <div className="w-full space-y-3.5 border-t border-[#1a1a1a]/5 pt-5">
                      {/* Amor */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-[#1a1a1a]/85">Afecto y Química</span>
                          <span className="font-semibold text-rose-600">{compResult.love}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                          <div className="h-full bg-rose-500 rounded-full transition-all duration-1000" style={{ width: `${compResult.love}%` }} />
                        </div>
                      </div>

                      {/* Comunicación */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-[#1a1a1a]/85">Comunicación y Telepatía</span>
                          <span className="font-semibold text-[#854d0e]">{compResult.comm}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full transition-all duration-1000" style={{ width: `${compResult.comm}%` }} />
                        </div>
                      </div>

                      {/* Destino */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-[#1a1a1a]/85">Propósito de Vida y Karma</span>
                          <span className="font-semibold text-[#3730a3]">{compResult.destiny}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 rounded-full transition-all duration-1000" style={{ width: `${compResult.destiny}%` }} />
                        </div>
                      </div>
                    </div>

                    {/* Description Text */}
                    <p className="text-[13.5px] text-[#1a1a1a]/90 font-sans font-light leading-relaxed border-t border-[#1a1a1a]/10 pt-4 text-left">
                      {compResult.desc}
                    </p>

                    {/* Subtle watermark */}
                    <div className="w-full pt-4 border-t border-[#1a1a1a]/5 text-center mt-2">
                      <span className="text-[9.5px] text-[#1a1a1a]/30 font-sans tracking-widest uppercase font-medium">anatarot.xyz</span>
                    </div>
                  </div>

                  {/* CUSTOM ACTIONS */}
                  <div className="space-y-3">
                    <a 
                      id="comp-action-btn"
                      href="https://www.paypal.com/ncp/payment/XJBKMKJKB9CVU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 bg-black hover:bg-neutral-900 border border-neutral-800 text-white rounded-xl text-[14.5px] font-semibold text-center flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                    >
                      <span>Agendar Sinastría de Parejas Completa ✨</span>
                    </a>
                    
                    <button 
                      id="comp-recalc-btn"
                      onClick={() => {
                        setCompResult(null);
                        setCompIsCalculating(false);
                        setCompName1("");
                        setCompName2("");
                        setCompDay1("1");
                        setCompMonth1("1");
                        setCompYear1("1995");
                        setCompDay2("1");
                        setCompMonth2("1");
                        setCompYear2("1995");
                      }}
                      className="w-full py-2 px-3 border border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/5 text-[#1a1a1a] rounded-lg text-[13px] font-medium transition-colors text-center cursor-pointer"
                    >
                      Calcular con otra pareja
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* SYNCED FOOTER */}
            <footer className="text-center flex flex-col items-center gap-2 py-4">
              <div className="h-[1px] w-12 bg-[#1a1a1a]/10 mx-auto" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#787774] font-medium font-sans">
                tarot.anna — Sinastría 💞
              </p>
            </footer>
          </div>
        ) : (
          /* INTERACTIVE SAJU CALCULATOR VIEW */
          <div id="saju-calc-panel" className="w-full flex flex-col min-h-screen justify-between gap-8 animate-in fade-in duration-300">
            <div className="space-y-6">
              {/* BACK BUTTON */}
              <button 
                id="saju-back-btn"
                onClick={handleCloseCalc}
                className="flex items-center gap-2 text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors text-[13.5px] font-sans font-medium cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
                <span>Volver al inicio</span>
              </button>

              {/* BRAND HEADER */}
              <div className="space-y-2 text-center py-2">
                <span className="text-[10px] tracking-[0.25em] text-[#787774] font-semibold uppercase">Astrología Coreana Ancestral</span>
                <h2 className="font-serif text-[28px] font-bold text-[#1a1a1a] tracking-tight leading-tight">Saju: Los Cuatro Símbolos</h2>
                <div className="h-[1px] w-12 bg-[#1a1a1a]/10 mx-auto mt-2" />
                <p className="text-[13.5px] text-[#787774] font-sans font-light leading-relaxed pt-2">
                  El Saju mapea la matriz cósmica del tiempo en el momento de tu nacimiento, traduciéndola en 4 pilares: Año, Mes, Día e Hora.
                </p>
              </div>

              {!sajuResult && !sajuIsCalculating && (
                /* INPUT FORM PANEL */
                <div id="saju-form" className="bg-white/60 border border-[#1a1a1a]/5 rounded-2xl p-6 shadow-sm space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5 col-span-1">
                        <label className="text-[11px] uppercase tracking-wider text-[#787774] font-semibold font-sans">Día</label>
                        <input 
                          type="text"
                          value={sajuDay}
                          onChange={(e) => setSajuDay(e.target.value)}
                          list="days-list"
                          placeholder="Día"
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5 col-span-1">
                        <label className="text-[11px] uppercase tracking-wider text-[#787774] font-semibold font-sans">Mes</label>
                        <input 
                          type="text"
                          value={sajuMonth}
                          onChange={(e) => setSajuMonth(e.target.value)}
                          list="months-list"
                          placeholder="Mes"
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5 col-span-1">
                        <label className="text-[11px] uppercase tracking-wider text-[#787774] font-semibold font-sans">Año</label>
                        <input 
                          type="text"
                          value={sajuYear}
                          onChange={(e) => setSajuYear(e.target.value)}
                          list="years-list"
                          placeholder="Año"
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5 col-span-1">
                        <label className="text-[11px] uppercase tracking-wider text-[#787774] font-semibold font-sans">Hora de nacimiento</label>
                        <input 
                          type="text"
                          value={sajuHour}
                          onChange={(e) => setSajuHour(e.target.value)}
                          list="hours-list"
                          placeholder="Ej: 2:17"
                          className="w-full bg-[#fcfcfc] border border-[#1a1a1a]/10 rounded-xl px-3 py-2 text-[14px] outline-none focus:border-[#1a1a1a]/30 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    id="saju-submit-btn"
                    onClick={calculateSaju}
                    className="w-full py-3 px-4 bg-black hover:bg-neutral-900 text-white rounded-xl text-[14px] font-semibold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <span>Calcular mis 4 Columnas del Destino 🌌</span>
                  </button>
                </div>
              )}

              {sajuIsCalculating && (
                /* LOADING PANEL */
                <div id="saju-loading" className="flex flex-col items-center justify-center p-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-dashed border-[#1a1a1a]/20 rounded-full animate-spin [animation-duration:8s]" />
                    <div className="text-2xl animate-pulse">☯️</div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[15px] font-serif font-medium text-[#1a1a1a]">{sajuLoadingText}</p>
                    <p className="text-[12px] text-[#787774] font-light font-sans">Alineando los Pilares Ancestrales del Destino...</p>
                  </div>
                </div>
              )}

              {sajuResult && !sajuIsCalculating && (
                /* RESULT PANEL */
                <div id="saju-result" className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div id="saju-card-capture" className="relative bg-[#FCFAF7] border border-[#1a1a1a]/10 rounded-3xl p-6 shadow-sm space-y-6">
                    {/* Share Button */}
                    <button
                      onClick={() => handleShareResult("saju-card-capture", "Saju")}
                      data-html2canvas-ignore="true"
                      className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-black hover:bg-neutral-100/80 rounded-full transition-all cursor-pointer bg-white/50 backdrop-blur-xs shadow-xs border border-[#1a1a1a]/5 flex items-center justify-center"
                      title="Compartir o guardar resultado"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                    
                    {/* Archetype Badge */}
                    <div className="text-center space-y-1 pb-4 pt-4 border-b border-[#1a1a1a]/5">
                      <span className="text-[10px] tracking-[0.2em] text-[#787774] font-bold uppercase block">Elemento Maestro</span>
                      <h3 className="font-serif text-[24px] font-bold text-[#1a1a1a]">
                        {sajuResult.archetype}
                      </h3>
                    </div>

                    {/* Saju 4 Pillars Grid - responsive grid */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {/* DIA - YOUR MASTER */}
                      <div className="bg-[#FDFAF6] border border-amber-600/20 rounded-2xl p-3 text-center space-y-1.5 flex flex-col items-center justify-center">
                        <span className="text-[9.5px] uppercase tracking-wider text-amber-800 font-bold">Día (Maestro Yo)</span>
                        <div className="text-2xl">{sajuResult.dayPillar.emoji}</div>
                        <div className="font-serif text-[16px] font-bold text-[#1a1a1a] flex flex-col">
                          <span>{sajuResult.dayPillar.element}</span>
                          <span className="text-[11px] text-amber-700/80 font-semibold mt-0.5">{sajuResult.dayPillar.code} · {sajuResult.dayPillar.animal}</span>
                        </div>
                      </div>

                      {/* HORA */}
                      <div className="bg-white border border-[#1a1a1a]/5 rounded-2xl p-3 text-center space-y-1.5 flex flex-col items-center justify-center">
                        <span className="text-[9.5px] uppercase tracking-wider text-[#787774] font-semibold">Hora (Secreta)</span>
                        {sajuResult.hourPillar ? (
                          <>
                            <div className="text-2xl">{sajuResult.hourPillar.emoji}</div>
                            <div className="font-serif text-[16px] font-bold text-[#1a1a1a] flex flex-col">
                              <span>{sajuResult.hourPillar.element}</span>
                              <span className="text-[11px] text-neutral-500 font-semibold mt-0.5">{sajuResult.hourPillar.code} · {sajuResult.hourPillar.animal}</span>
                            </div>
                          </>
                        ) : (
                          <div className="flex flex-col items-center justify-center min-h-[66px]">
                            <span className="text-lg">⏳</span>
                            <span className="text-[10.5px] text-[#787774] leading-tight">Desconocida</span>
                          </div>
                        )}
                      </div>

                      {/* Mes */}
                      <div className="bg-white border border-[#1a1a1a]/5 rounded-2xl p-3 text-center space-y-1.5 flex flex-col items-center justify-center">
                        <span className="text-[9.5px] uppercase tracking-wider text-[#787774] font-semibold">Mes (Profesión)</span>
                        <div className="text-2xl">{sajuResult.monthPillar.emoji}</div>
                        <div className="font-serif text-[16px] font-bold text-[#1a1a1a] flex flex-col">
                          <span>{sajuResult.monthPillar.element}</span>
                          <span className="text-[11px] text-neutral-500 font-semibold mt-0.5">{sajuResult.monthPillar.code} · {sajuResult.monthPillar.animal}</span>
                        </div>
                      </div>

                      {/* Año */}
                      <div className="bg-white border border-[#1a1a1a]/5 rounded-2xl p-3 text-center space-y-1.5 flex flex-col items-center justify-center">
                        <span className="text-[9.5px] uppercase tracking-wider text-[#787774] font-semibold">Año (Herencia)</span>
                        <div className="text-2xl">{sajuResult.yearPillar.emoji}</div>
                        <div className="font-serif text-[16px] font-bold text-[#1a1a1a] flex flex-col">
                          <span>{sajuResult.yearPillar.element}</span>
                          <span className="text-[11px] text-neutral-500 font-semibold mt-0.5">{sajuResult.yearPillar.code} · {sajuResult.yearPillar.animal}</span>
                        </div>
                      </div>
                    </div>

                    {/* Explanations list */}
                    <div className="space-y-4 border-t border-[#1a1a1a]/5 pt-5 text-left">
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-[#1a1a1a]">Propósito Elemental:</h4>
                        <p className="text-[13px] text-[#1a1a1a]/85 font-sans font-light leading-relaxed">
                          {sajuResult.advice}
                        </p>
                      </div>

                      <div className="space-y-3.5 text-xs border-t border-[#1a1a1a]/5 pt-4">
                        <div className="font-semibold text-[#787774] uppercase tracking-wider text-[10px]">Esferas Planetarias del Destino:</div>
                        <div className="space-y-2.5 font-sans font-light text-[#1a1a1a]/90 leading-relaxed">
                          <p><strong>Día Maestro (Cuerpo Mental):</strong> {sajuResult.dayPillar.desc}</p>
                          <p><strong>Mes de Acción (Entorno Social):</strong> {sajuResult.monthPillar.desc}</p>
                          <p><strong>Año de Origen (Árbol Ancestral):</strong> {sajuResult.yearPillar.desc}</p>
                          {sajuResult.hourPillar && <p><strong>Hora Secreta (Legado):</strong> {sajuResult.hourPillar.desc}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Subtle watermark */}
                    <div className="w-full pt-4 border-t border-[#1a1a1a]/5 text-center mt-2">
                      <span className="text-[9.5px] text-[#1a1a1a]/30 font-sans tracking-widest uppercase font-medium">anatarot.xyz</span>
                    </div>
                  </div>

                  {/* CUSTOM ACTIONS */}
                  <div className="space-y-3">
                    <a 
                      id="saju-action-btn"
                      href="https://www.paypal.com/ncp/payment/RCQEPWZZHXGLS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 bg-black hover:bg-neutral-900 border border-neutral-800 text-white rounded-xl text-[14.5px] font-semibold text-center flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                    >
                      <span>Lectura de Saju Coreano ✨</span>
                    </a>
                    
                    <button 
                      id="saju-recalc-btn"
                      onClick={() => {
                        setSajuResult(null);
                        setSajuIsCalculating(false);
                        setSajuDay("1");
                        setSajuMonth("1");
                        setSajuYear("1995");
                        setSajuHour("desconocido");
                      }}
                      className="w-full py-2 px-3 border border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/5 text-[#1a1a1a] rounded-lg text-[13px] font-medium transition-colors text-center cursor-pointer"
                    >
                      Calcular otro Saju
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* SYNCED FOOTER */}
            <footer className="text-center flex flex-col items-center gap-2 py-4">
              <div className="h-[1px] w-12 bg-[#1a1a1a]/10 mx-auto" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#787774] font-medium font-sans">
                tarot.anna — Saju ☯️
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

      {/* GLOBAL DATALISTS FOR DYNAMIC WEB TYPE-UIs */}
      <datalist id="days-list">
        {Array.from({ length: 31 }, (_, i) => String(i + 1)).map(d => (
          <option key={d} value={d} />
        ))}
      </datalist>

      <datalist id="months-list">
        {[
          "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
          "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ].map(m => (
          <option key={m} value={m} />
        ))}
        {Array.from({ length: 12 }, (_, i) => String(i + 1)).map(m => (
          <option key={m} value={m} />
        ))}
      </datalist>

      <datalist id="years-list">
        {Array.from({ length: 100 }, (_, i) => String(2026 - i)).map(y => (
          <option key={y} value={y} />
        ))}
      </datalist>

      <datalist id="hours-list">
        <option value="No lo sé / Desconocido" />
        {Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0")).map(h => (
          <option key={h} value={`${h}:00`} />
        ))}
      </datalist>

      {/* GLOBAL FEEDBACK TOAST */}
      {sharingState !== 'idle' && (
        <div data-html2canvas-ignore="true" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-neutral-900/95 backdrop-blur-md text-white text-[13.5px] font-sans px-5 py-3 rounded-full flex items-center gap-3 shadow-2xl border border-white/5 whitespace-nowrap">
            {sharingState === 'capturing' && (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span className="font-medium tracking-wide">Generando imagen de tu lectura...</span>
              </>
            )}
            {sharingState === 'success' && (
              <>
                <div className="bg-emerald-500 rounded-full p-0.5 text-white flex items-center justify-center">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <span className="font-semibold tracking-wide">¡Imagen lista y enlace copiado! ✨</span>
              </>
            )}
            {sharingState === 'error' && (
              <>
                <div className="bg-red-500 rounded-full p-0.5 text-white flex items-center justify-center">
                  <X className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <span className="font-semibold tracking-wide">Error al capturar resultado</span>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
