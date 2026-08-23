import React, { useState, useEffect } from "react";
import { ArrowLeft, Share2, Printer, Check, Bookmark, Calendar, User, Clock, ChevronRight, BookOpen, Award, Building2 } from "lucide-react";

export type ArticleSlug = "destacada-en-esan" | "organizacion-en-el-tarot";

interface NewsArticlePageProps {
  initialSlug?: ArticleSlug;
  onBackToMain: () => void;
}

interface ArticleData {
  slug: ArticleSlug;
  category: string;
  editionDate: string;
  readTime: string;
  headline: string;
  subheadline: string;
  author: string;
  authorRole: string;
  location: string;
  heroImage: string;
  heroCaption: string;
  content: {
    introDropCap: string;
    introRest: string;
    sections: {
      title?: string;
      paragraphs: string[];
      quote?: {
        text: string;
        author: string;
      };
      sidebarBox?: {
        title: string;
        items: { label: string; value: string }[];
      };
    }[];
  };
}

const ARTICLES: Record<ArticleSlug, ArticleData> = {
  "destacada-en-esan": {
    slug: "destacada-en-esan",
    category: "EDUCACIÓN SUPERIOR & TALENTO JOVEN / INGENIERÍA",
    editionDate: "Domingo, 23 de Agosto de 2026",
    readTime: "4 min de lectura",
    headline: "Ana Chávez: Excelencia Académica y Liderazgo Innovador en las Aulas de Ingeniería de la Universidad ESAN",
    subheadline: "Con un enfoque analítico riguroso y una visión multidisciplinaria orientada a la optimización de procesos y gestión estratégica, Ana Chávez se consolida como una de las figuras más prometedoras de la prestigiosa escuela de negocios y tecnología.",
    author: "Redacción La Calle Académica",
    authorRole: "Sección de Investigación Universitaria y Liderazgo",
    location: "LIMA, PERÚ",
    heroImage: "https://i.pinimg.com/736x/ff/3d/f1/ff3df11884ac374f00a6a29cde6fad88.jpg",
    heroCaption: "Ana Chávez durante una jornada de estudio y análisis de procesos en el campus de la Universidad ESAN.",
    content: {
      introDropCap: "E",
      introRest: "n un ecosistema académico cada vez más demandante, donde la convergencia entre la ciencia computacional, la ingeniería y la estrategia directiva define el futuro de las organizaciones, el nombre de Ana Chávez resalta con singular nitidez en los claustros de la Universidad ESAN.",
      sections: [
        {
          title: "I. Formación de élite y metodología analítica",
          paragraphs: [
            "Reconocida por su constancia y agudeza intelectual, Ana ha demostrado a lo largo de su formación universitaria una habilidad sobresaliente para asimilar y aplicar modelos de investigación operativa, diseño de sistemas y optimización de recursos.",
            "Docentes y compañeros destacan su capacidad no solo para resolver ecuaciones complejas o modelar arquitecturas de datos, sino para traducir problemas abstractos en planes de acción pragmáticos y sostenibles en el tiempo."
          ],
          quote: {
            text: "La verdadera ingeniería no consiste únicamente en optimizar algoritmos fríos, sino en comprender la armonía, la estructura y la interconexión de todas las variables que mueven un sistema.",
            author: "Ana Chávez — Universidad ESAN"
          }
        },
        {
          title: "II. Pensamiento sistémico y liderazgo interdisciplinario",
          paragraphs: [
            "Lo que distingue el perfil de Ana Chávez de la media tradicional es su vocación integradora. Formada bajo el estándar de excelencia de ESAN —institución pionera en la educación ejecutiva en América Latina—, su perspectiva trasciende el mero cálculo numérico para incorporar una profunda comprensión de la psicología organizacional y la toma de decisiones estratégicas.",
            "En sus proyectos académicos, ha liderado equipos multidisciplinarios implementando marcos ágiles, diagnósticos de cuellos de botella y metodologías orientadas a la maximización del valor en cadenas operativas."
          ],
          sidebarBox: {
            title: "FICHA ACADÉMICA / PERFIL DESTACADO",
            items: [
              { label: "Estudiante", value: "Ana Chávez" },
              { label: "Institución", value: "Universidad ESAN (Lima, Perú)" },
              { label: "Área", value: "Ingeniería y Gestión Estratégica" },
              { label: "Especialidades", value: "Optimización de Procesos, Modelado de Sistemas, Liderazgo" },
              { label: "Distinción", value: "Alto Rendimiento y Pensamiento Sistémico" }
            ]
          }
        },
        {
          title: "III. Proyección y visión de futuro",
          paragraphs: [
            "Con una mirada puesta en los desafíos de la transformación digital y la gestión inteligente de recursos, Ana Chávez representa a la nueva generación de ingenieros peruanos: profesionales dotados de una sólida base matemática, pero con la sensibilidad y el criterio ético necesarios para liderar organizaciones humanas en tiempos de cambio permanente.",
            "Su trayectoria en ESAN reafirma que la disciplina, la curiosidad intelectual y el método son los pilares fundamentales sobre los cuales se forja la verdadera excelencia profesional."
          ]
        }
      ]
    }
  },
  "organizacion-en-el-tarot": {
    slug: "organizacion-en-el-tarot",
    category: "CULTURA, CIENCIA & ARQUETIPOS / ENSAYO CENTRAL",
    editionDate: "Domingo, 23 de Agosto de 2026",
    readTime: "5 min de lectura",
    headline: "Estructura, Método y Patrones: Cómo la Ciencia de la Organización está Codificada en el Tarot",
    subheadline: "Lejos de la superstición vulgar, Ana Chávez expone cómo los 78 arcanos constituyen un sofisticado mapa de arquitectura sistémica, gestión de crisis y optimización de etapas vitales que dialoga directamente con la ingeniería.",
    author: "Por Redacción La Calle Cultural",
    authorRole: "Crónica de Pensamiento y Ensayos Contemporáneos",
    location: "LIMA, PERÚ",
    heroImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200",
    heroCaption: "Los arquetipos del tarot leídos bajo una lente estructural de procesos y fases de evolución.",
    content: {
      introDropCap: "D",
      introRest: "esde una perspectiva superficial, el tarot suele ser reducido erróneamente a un pasatiempo oracular. Sin embargo, cuando se le examina a través del prisma de la ingeniería y la teoría general de sistemas, se revela como uno de los tratados de organización humana y ciclos de procesos más antiguos y rigurosos de la civilización.",
      sections: [
        {
          title: "I. El Tarot como mapa de flujo y ciclo de vida de proyectos",
          paragraphs: [
            "Ana Chávez plantea una tesis fascinante: la secuencia de los 22 Arcanos Mayores replica con asombrosa precisión las fases que atraviesa cualquier sistema complejo —desde una startup tecnológica hasta una transformación personal.",
            "El recorrido que inicia con 'El Loco' (la fase de ideación y asunción de riesgo cero), pasa por 'El Mago' (la asignación de recursos y herramientas), se formaliza con 'El Emperador' (la gobernanza, normas y estructura) y culmina en 'El Mundo' (la consolidación y el cierre exitoso del ciclo)."
          ],
          quote: {
            text: "Una empresa sin estructura colapsa por entropía; una vida sin método se dispersa en el caos. El tarot es, en su raíz más pura, un manual arquetípico para diagnosticar cuellos de botella y restaurar el orden.",
            author: "Ana Chávez — Investigadora y Analista"
          }
        },
        {
          title: "II. Los Cuatro Palos: Los Cuatro Pilares Organizacionales",
          paragraphs: [
            "En el análisis estructural que propone Chávez, los cuatro palos de los Arcanos Menores representan exactamente las cuatro áreas nodales que sostienen a cualquier organización equilibrada:",
            "• Bastos (Fuego): El liderazgo, la visión directiva, la innovación y la energía impulsora del proyecto.\n• Copas (Agua): El clima laboral, la cultura organizacional, el talento humano y la inteligencia emocional.\n• Espadas (Aire): La estrategia analítica, la toma de decisiones lógicas, los contratos y la gestión de crisis.\n• Oros (Tierra): Los activos financieros, los recursos materiales, la infraestructura y los resultados tangibles."
          ],
          sidebarBox: {
            title: "MATRIZ DE CORRESPONDENCIA SISTÉMICA",
            items: [
              { label: "El Emperador (IV)", value: "Gobernanza, Políticas y Marco Estructural" },
              { label: "La Rueda (X)", value: "Ciclos de Mercado, Variabilidad y Adaptabilidad" },
              { label: "La Torre (XVI)", value: "Gestión de Crisis y Reingeniería Forzada" },
              { label: "La Templanza (XIV)", value: "Equilibrio Operativo y Sinergia de Equipos" },
              { label: "El Juicio (XX)", value: "Auditoría, Evaluación y Rendición de Cuentas" }
            ]
          }
        },
        {
          title: "III. La Gestión de Crisis a través del Arquetipo de 'La Torre'",
          paragraphs: [
            "Uno de los puntos más agudos del planteamiento de Ana radica en la reinterpretación de arcanos tradicionalmente temidos como 'La Torre'. En términos organizacionales, La Torre no representa una tragedia gratuita, sino el colapso inevitable de una estructura construida sobre cimientos deficientes o premisas obsoletas.",
            "Al integrar la lógica de la ingeniería con la sabiduría de los arquetipos, Ana Chávez demuestra que el orden no es enemigo del misterio, sino su manifestación más elevada: el lenguaje universal con el que la realidad se estructura a sí misma."
          ]
        }
      ]
    }
  }
};

export const NewsArticlePage: React.FC<NewsArticlePageProps> = ({
  initialSlug = "destacada-en-esan",
  onBackToMain
}) => {
  const [currentSlug, setCurrentSlug] = useState<ArticleSlug>(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes("organizacion") || hash.includes("organizacion")) {
        return "organizacion-en-el-tarot";
      }
      if (path.includes("destacada") || hash.includes("destacada") || path.includes("esan") || hash.includes("esan")) {
        return "destacada-en-esan";
      }
    }
    return initialSlug;
  });

  const [copied, setCopied] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  useEffect(() => {
    const handleUrlChange = () => {
      if (typeof window !== "undefined") {
        const path = window.location.pathname.toLowerCase();
        const hash = window.location.hash.toLowerCase();
        if (path.includes("organizacion") || hash.includes("organizacion")) {
          setCurrentSlug("organizacion-en-el-tarot");
        } else if (path.includes("destacada") || hash.includes("destacada") || path.includes("esan") || hash.includes("esan")) {
          setCurrentSlug("destacada-en-esan");
        }
      }
    };

    window.addEventListener("popstate", handleUrlChange);
    window.addEventListener("hashchange", handleUrlChange);
    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      window.removeEventListener("hashchange", handleUrlChange);
    };
  }, []);

  const switchArticle = (slug: ArticleSlug) => {
    setCurrentSlug(slug);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `/lacalle/${slug}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const article = ARTICLES[currentSlug] || ARTICLES["destacada-en-esan"];

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      const url = typeof window !== "undefined" ? window.location.href : `https://anatarot.xyz/lacalle/${article.slug}`;
      navigator.clipboard.writeText(`${article.headline} - Leer en Diario La Calle: ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div id="newspaper-article-view" className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen antialiased selection:bg-[#7c2a34]/20 pb-20">
      
      {/* TOP COMPACT NAV BAR */}
      <nav id="newspaper-top-bar" className="w-full bg-[#1A1A1A] text-[#FAF8F5] px-4 py-2 text-xs flex items-center justify-between border-b border-black">
        <div className="flex items-center gap-2">
          <span className="text-[#C49A45]">★</span>
          <span className="font-serif font-bold tracking-widest uppercase">DIARIO LA CALLE · EDICIÓN DIGITAL</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            id="back-to-home-btn"
            onClick={onBackToMain}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#7c2a34] hover:bg-[#963541] text-white rounded text-[11px] font-sans tracking-wide transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Volver a AnaTarot</span>
          </button>
        </div>
      </nav>

      {/* NEWSPAPER MASTHEAD (Cabecera de Periódico) */}
      <header id="newspaper-masthead" className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-4">
        {/* Newspaper Top Bar Info */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#2C2C2C] pb-1.5 mb-2 text-[11px] font-serif text-[#555] tracking-wider uppercase">
          <span>AÑO XIV · N° 4,892</span>
          <span>LIMA, PERÚ · PRECIO AL PÚBLICO: EDICIÓN ESPECIAL</span>
          <span>{article.editionDate}</span>
        </div>

        {/* Big Masthead Logo */}
        <div className="text-center py-4 border-b-4 border-double border-[#1A1A1A]">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1A1A1A] uppercase leading-none">
            DIARIO LA CALLE
          </h1>
          <p className="font-serif italic text-xs sm:text-sm text-[#555] mt-1 tracking-widest">
            "Verdad, rigor analítico y pensamiento crítico al servicio de la sociedad"
          </p>
        </div>

        {/* Section Navigation & Link Switcher */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#1A1A1A] py-2 text-xs font-serif tracking-wider uppercase">
          <div className="flex items-center gap-4 text-[#7c2a34] font-bold">
            <span>{article.category}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[#777] text-[11px]">Artículos disponibles:</span>
            <button
              id="switch-art-1-btn"
              onClick={() => switchArticle("destacada-en-esan")}
              className={`px-2.5 py-0.5 rounded text-[11px] transition-all cursor-pointer ${
                currentSlug === "destacada-en-esan"
                  ? "bg-[#1A1A1A] text-white font-bold"
                  : "bg-transparent text-[#555] hover:text-black underline"
              }`}
            >
              1. Destacada en ESAN
            </button>
            <button
              id="switch-art-2-btn"
              onClick={() => switchArticle("organizacion-en-el-tarot")}
              className={`px-2.5 py-0.5 rounded text-[11px] transition-all cursor-pointer ${
                currentSlug === "organizacion-en-el-tarot"
                  ? "bg-[#1A1A1A] text-white font-bold"
                  : "bg-transparent text-[#555] hover:text-black underline"
              }`}
            >
              2. Organización & Tarot
            </button>
          </div>
        </div>
      </header>

      {/* MAIN ARTICLE BODY CONTAINER */}
      <main id="newspaper-main-content" className="max-w-4xl mx-auto px-4 sm:px-6 pt-4">
        
        {/* ARTICLE HEADER */}
        <div className="mb-6">
          <div className="inline-block bg-[#7c2a34] text-white text-[10px] font-sans font-bold tracking-widest px-2.5 py-0.5 uppercase rounded-xs mb-3">
            REPORTAJE CENTRAL
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#111] leading-[1.15] tracking-tight mb-4">
            {article.headline}
          </h2>

          <p className="font-serif italic text-base sm:text-xl text-[#444] leading-relaxed pb-4 border-b border-[#D4C8B8]">
            {article.subheadline}
          </p>
        </div>

        {/* METADATA BYLINE & ACTIONS */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 mb-6 border-b border-[#D4C8B8] text-xs font-sans text-[#666]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-serif font-bold text-xs">
              LC
            </div>
            <div>
              <p className="font-bold text-[#1A1A1A]">{article.author}</p>
              <p className="text-[11px] text-[#777]">{article.authorRole} · {article.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-[#777] mr-2">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>

            <button
              id="article-share-btn"
              onClick={handleShare}
              className="flex items-center gap-1 px-3 py-1.5 bg-white border border-[#D4C8B8] hover:border-black rounded text-[11.5px] font-medium transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? "Enlace copiado" : "Compartir"}</span>
            </button>

            <button
              id="article-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-1 px-3 py-1.5 bg-white border border-[#D4C8B8] hover:border-black rounded text-[11.5px] font-medium transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
          </div>
        </div>

        {/* HERO IMAGE */}
        <figure className="mb-8 border border-[#D4C8B8] p-1.5 bg-white shadow-xs">
          <div className="w-full max-h-[420px] overflow-hidden bg-[#EEE]">
            <img
              src={article.heroImage}
              alt={article.headline}
              className="w-full h-full object-cover max-h-[420px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <figcaption className="text-[11.5px] font-serif italic text-[#666] pt-2 px-1 text-center">
            {article.heroCaption}
          </figcaption>
        </figure>

        {/* EDITORIAL CONTENT */}
        <div className="font-serif text-[16.5px] sm:text-[17.5px] text-[#222] leading-[1.75] space-y-6">
          
          {/* INTRO PARAGRAPH WITH NEWSPAPER DROP CAP */}
          <p className="leading-relaxed">
            <span className="float-left font-serif text-5xl sm:text-6xl font-bold leading-none pr-3 pt-1 text-[#7c2a34]">
              {article.content.introDropCap}
            </span>
            {article.content.introRest}
          </p>

          {/* SECTIONS & HIGHLIGHTS */}
          {article.content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4 pt-2">
              {sec.title && (
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111] pt-3 pb-1 border-b border-[#E2D5C3]">
                  {sec.title}
                </h3>
              )}

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="whitespace-pre-line">
                  {p}
                </p>
              ))}

              {/* PULL QUOTE (Cita Destacada de Periódico) */}
              {sec.quote && (
                <blockquote className="my-6 p-5 sm:p-6 bg-[#F3ECE0] border-l-4 border-[#7c2a34] rounded-r-sm">
                  <p className="font-serif italic text-lg sm:text-xl text-[#1A1A1A] font-medium leading-relaxed mb-2">
                    "{sec.quote.text}"
                  </p>
                  <cite className="block text-xs font-sans font-bold text-[#7c2a34] uppercase tracking-wider not-italic">
                    — {sec.quote.author}
                  </cite>
                </blockquote>
              )}

              {/* SIDEBAR BOX (Recuadro de Ficha Periodística) */}
              {sec.sidebarBox && (
                <div className="my-6 p-5 bg-white border border-[#2C2C2C] rounded-sm shadow-xs">
                  <div className="flex items-center gap-2 border-b border-[#1A1A1A] pb-2 mb-3">
                    <Award className="w-4 h-4 text-[#7c2a34]" />
                    <h4 className="font-serif font-bold text-xs tracking-widest uppercase text-[#1A1A1A]">
                      {sec.sidebarBox.title}
                    </h4>
                  </div>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
                    {sec.sidebarBox.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="bg-[#FAF8F5] p-2.5 border border-[#E8DFC8]">
                        <dt className="text-[#777] font-semibold uppercase text-[10px] tracking-wider mb-0.5">
                          {item.label}
                        </dt>
                        <dd className="font-serif font-bold text-[#1A1A1A] text-sm">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* NEWSPAPER FOOTER / ARTICLE SIGN-OFF */}
        <div className="mt-12 pt-6 border-t-2 border-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif text-[#666]">
          <div>
            <p className="font-bold text-[#111]">© DIARIO LA CALLE · DERECHOS RESERVADOS 2026</p>
            <p className="text-[11px]">Artículo indexado bajo la colección especial de ensayos y semblanzas.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => switchArticle(currentSlug === "destacada-en-esan" ? "organizacion-en-el-tarot" : "destacada-en-esan")}
              className="px-4 py-2 bg-[#1A1A1A] hover:bg-black text-white font-sans text-xs font-semibold rounded transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Leer el otro artículo</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* DIRECT LINK HINT BOX */}
        <div className="mt-8 p-4 bg-[#F0EAE1] border border-[#D8CCBD] text-center text-xs font-sans text-[#555] rounded-sm">
          <p className="font-semibold text-[#1A1A1A] mb-1">Enlaces directos a estos artículos:</p>
          <p className="font-mono text-[11.5px] text-[#7c2a34] select-all">
            anatarot.xyz/lacalle/destacada-en-esan &nbsp; | &nbsp; anatarot.xyz/lacalle/organizacion-en-el-tarot
          </p>
        </div>

      </main>
    </div>
  );
};

export default NewsArticlePage;
