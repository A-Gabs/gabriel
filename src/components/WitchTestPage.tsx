import React, { useState, useEffect } from "react";
import { ArrowLeft, RefreshCw, Share2, Sparkles, Check, MessageCircle, ExternalLink, Calendar, Compass, Star } from "lucide-react";
import { ARCANOS_DATA, ArcanoInfo } from "../arcanosData";

export interface ArchetypeResult {
  letter: string;
  emoji: string;
  name: string;
  desc: string;
  fortalezas: string;
  explora: string;
}

export const WITCH_RESULTS: Record<string, ArchetypeResult> = {
  A: {
    letter: "A",
    emoji: "🌿",
    name: "Bruja Verde / Elemental",
    desc: "Tu magia nace de la conexión con lo vivo. Naturaleza, plantas, estaciones, agua, tierra y ciclos naturales pueden convertirse en tus principales lenguajes simbólicos.",
    fortalezas: "conexión, paciencia, sensibilidad y capacidad de enraizarte.",
    explora: "herbolaria, correspondencias de plantas, jardines rituales, elementos y ciclos estacionales."
  },
  B: {
    letter: "B",
    emoji: "🕯️",
    name: "Bruja Ancestral",
    desc: "Tu atención se dirige hacia las historias que existen detrás de las personas. El linaje, la memoria, las tradiciones familiares y los patrones generacionales pueden tener un significado especial para ti.",
    fortalezas: "memoria, profundidad, respeto por la historia y capacidad para reconocer patrones.",
    explora: "genealogía, altares de memoria, historias familiares, tradiciones populares y journaling ancestral."
  },
  C: {
    letter: "C",
    emoji: "👁️",
    name: "Bruja de los Sueños / Intuitiva",
    desc: "Tu mundo interior es especialmente importante. Sueños, símbolos, coincidencias e intuiciones pueden convertirse en herramientas para explorar tu propia mente y espiritualidad.",
    fortalezas: "imaginación, percepción simbólica e intuición.",
    explora: "diario de sueños, meditación, simbolismo, visualización y prácticas contemplativas."
  },
  D: {
    letter: "D",
    emoji: "🃏",
    name: "Bruja Adivinatoria",
    desc: "Necesitas comprender los patrones detrás de las situaciones. Probablemente disfrutas haciendo preguntas, interpretando símbolos y observando posibilidades antes de tomar una decisión.",
    fortalezas: "interpretación, análisis, intuición y capacidad para conectar información aparentemente separada.",
    explora: "tarot, oráculos, runas, péndulo, bibliomancia o sistemas simbólicos."
  },
  E: {
    letter: "E",
    emoji: "🌙",
    name: "Bruja Lunar / Cósmica",
    desc: "Te atraen los ciclos. La Luna, los planetas, las estaciones y el concepto de que existen momentos para comenzar, esperar, terminar o transformar pueden resonar contigo.",
    fortalezas: "observación, sincronización, sensibilidad a los ciclos y visión global.",
    explora: "fases lunares, astrología, ciclos solares y journaling cíclico."
  },
  F: {
    letter: "F",
    emoji: "🔥",
    name: "Bruja del Hogar / Cocina",
    desc: "Tu magia se encuentra en transformar lo cotidiano. Una comida, una vela, un aroma o la forma en que preparas tu espacio pueden convertirse en pequeños rituales cargados de significado.",
    fortalezas: "protección, cuidado, creatividad y capacidad de crear ambientes acogedores.",
    explora: "magia de cocina, velas, infusiones, limpieza simbólica, protección del hogar y correspondencias de especias."
  },
  G: {
    letter: "G",
    emoji: "🗝️",
    name: "Bruja de Sombra",
    desc: "No tienes demasiado interés en quedarte únicamente con la superficie. Te atrae comprender aquello que las personas esconden —incluyéndote a ti misma— y transformar experiencias difíciles en conocimiento.",
    fortalezas: "introspección, valentía emocional, profundidad y transformación.",
    explora: "journaling, trabajo simbólico de sombra, meditación y prácticas de autoconocimiento."
  }
};

export const WITCH_COMBOS = [
  { pair: ["D", "E"], title: "Adivinatoria Cósmica", desc: "Tarot, astrología, ciclos y predicción simbólica." },
  { pair: ["A", "F"], title: "Bruja Verde del Hogar", desc: "Hierbas, cocina, naturaleza y protección del espacio sagrado." },
  { pair: ["B", "G"], title: "Bruja Ancestral de Sombra", desc: "Linaje, patrones familiares, sabiduría oculta y transformación profunda." },
  { pair: ["C", "D"], title: "Bruja Oracular", desc: "Sueños lúcidos, intuición despierta y herramientas adivinatorias." },
  { pair: ["E", "C"], title: "Bruja Lunar Intuitiva", desc: "Ciclos lunares, sueños, mareas cósmicas y percepción simbólica." },
  { pair: ["G", "D"], title: "Bruja de los Misterios", desc: "Profundidad psicológica, tarot, desvelo de secretos y exploración de lo oculto." }
];

export interface QuestionOption {
  letter: string;
  text: string;
}

export interface WitchQuestion {
  emoji: string;
  scenario: string;
  setup: string;
  prompt: string;
  options: QuestionOption[];
}

export const WITCH_QUESTIONS: WitchQuestion[] = [
  {
    emoji: "🏚️",
    scenario: "La casa abandonada",
    setup: "Llegas a una casa antigua que lleva décadas abandonada. Solo puedes explorar primero un lugar.",
    prompt: "¿A dónde vas?",
    options: [
      { letter: "A", text: "🌿 Al jardín cubierto de maleza, donde las plantas siguen creciendo sin control." },
      { letter: "B", text: "🕯️ Al ático lleno de baúles viejos, fotos familiares y cartas sin abrir." },
      { letter: "C", text: "👁️ Al dormitorio principal, donde hay un espejo antiguo que parece tener memoria." },
      { letter: "D", text: "🃏 A la biblioteca, a revisar los libros raros y papeles sobre la mesa." },
      { letter: "E", text: "🌙 A la azotea, para observar cómo cambia el cielo desde lo alto." },
      { letter: "F", text: "🔥 A la cocina, donde todavía huele a humo y madera vieja." },
      { letter: "G", text: "🗝️ Al sótano cerrado con un candado que alguien intentó forzar." }
    ]
  },
  {
    emoji: "💎",
    scenario: "El objeto",
    setup: "Encuentras una caja enterrada. Al abrirla, solo puedes quedarte con una cosa.",
    prompt: "¿Qué eliges?",
    options: [
      { letter: "A", text: "🌿 Una raíz seca que aún huele a bosque húmedo." },
      { letter: "B", text: "🕯️ Un anillo antiguo que perteneció a alguien que no conoces." },
      { letter: "C", text: "👁️ Una piedra pulida que parece cambiar de color en la penumbra." },
      { letter: "D", text: "🃏 Una baraja desgastada con símbolos dibujados a mano." },
      { letter: "E", text: "🌙 Un calendario de bronce con fases lunares grabadas." },
      { letter: "F", text: "🔥 Un mortero de piedra con restos de especias." },
      { letter: "G", text: "🗝️ Una llave pesada de hierro que no tiene cerradura a la vista." }
    ]
  },
  {
    emoji: "🌌",
    scenario: "Una noche sin obligaciones",
    setup: "Tienes una noche entera para ti, en silencio. Nadie te espera y no tienes que ser productiva.",
    prompt: "¿Cómo pasas ese tiempo?",
    options: [
      { letter: "A", text: "🌿 Cuidando plantas, caminando afuera o abriendo las ventanas para que entre el aire fresco." },
      { letter: "B", text: "🕯️ Revisando recuerdos, escuchando música antigua o pensando en personas que ya no están." },
      { letter: "C", text: "👁️ Escribiendo lo que soñaste, leyendo sobre símbolos o perdiéndote en tus pensamientos." },
      { letter: "D", text: "🃏 Barajando cartas, haciendo preguntas y buscando patrones en lo que te pasa." },
      { letter: "E", text: "🌙 Mirando el cielo, revisando en qué fase está la Luna o cómo se siente la noche." },
      { letter: "F", text: "🔥 Encendiendo velas, preparando una infusión o limpiando tu espacio para que se sienta bien." },
      { letter: "G", text: "🗝️ Escribiendo en un diario aquello que no le dirías a nadie más." }
    ]
  },
  {
    emoji: "✨",
    scenario: "Tu intuición",
    setup: "Cuando algo importante está a punto de pasar, ¿cómo te avisa tu cuerpo o tu mente?",
    prompt: "¿Cómo lo percibes?",
    options: [
      { letter: "A", text: "🌿 Sientes cambios físicos: tensión, escalofríos o una sensación de que el entorno cambió." },
      { letter: "B", text: "🕯️ Te acuerdas de pronto de una persona de tu pasado o de tu familia." },
      { letter: "C", text: "👁️ Lo ves en un sueño antes de que ocurra o se te repite una imagen." },
      { letter: "D", text: "🃏 Empiezas a notar coincidencias, números repetidos o señales que parecen conectadas." },
      { letter: "E", text: "🌙 Notas que tu estado de ánimo cambia de golpe según el día o el ciclo lunar." },
      { letter: "F", text: "🔥 Sientes una punzada en el estómago que te dice si confiar o retirarte." },
      { letter: "G", text: "🗝️ Se te cae la venda de los ojos respecto a alguien: ves claramente lo que ocultaba." }
    ]
  },
  {
    emoji: "🕯️",
    scenario: "El ritual",
    setup: "Si tuvieras que hacer un ritual simple para cambiar la energía de tu vida, ¿qué elemento principal usarías?",
    prompt: "¿Cuál sería tu base?",
    options: [
      { letter: "A", text: "🌿 Hojas de laurel, romero, tierra o agua de lluvia." },
      { letter: "B", text: "🕯️ Una vela blanca encendida en memoria de tus ancestros o de tu historia." },
      { letter: "C", text: "👁️ Un espejo, una libreta de sueños o una meditación profunda en silencio." },
      { letter: "D", text: "🃏 Una tirada de tarot de tres cartas para entender qué camino tomar." },
      { letter: "E", text: "🌙 Esperar a la Luna Nueva o Luna Llena para iniciar algo." },
      { letter: "F", text: "🔥 Una infusión de canela, humo de incienso o una limpieza profunda de tu casa." },
      { letter: "G", text: "🗝️ Quemar un papel con lo que quieres soltar y mirar la ceniza hasta que se apague." }
    ]
  },
  {
    emoji: "🍂",
    scenario: "Algo termina",
    setup: "Cuando una etapa importante de tu vida se acaba definitivamente (una relación, un trabajo, un lugar), ¿qué haces para procesarlo?",
    prompt: "¿Cómo cierras el ciclo?",
    options: [
      { letter: "A", text: "🌿 Buscas aire libre, necesitas que la naturaleza te limpie y te devuelva la calma." },
      { letter: "B", text: "🕯️ Guardas algo como recuerdo y buscas entender qué aprendizaje dejó en tu linaje." },
      { letter: "C", text: "👁️ Te sumerges en tu mundo interno: escribes, sueñas y dejas que el inconsciente lo ordene." },
      { letter: "D", text: "🃏 Consultas las cartas para entender por qué pasó y qué viene después." },
      { letter: "E", text: "🌙 Confías en que era el tiempo cósmico justo: todo tiene un ciclo de inicio y fin." },
      { letter: "F", text: "🔥 Reordenas todo tu espacio, cambias cosas de lugar y renuevas la energía del hogar." },
      { letter: "G", text: "🗝️ Vas al fondo del dolor: necesitas sentirlo entero antes de volver a levantarte." }
    ]
  },
  {
    emoji: "📖",
    scenario: "El conocimiento prohibido",
    setup: "Si pudieras abrir un libro que responde con certeza a una sola de estas preguntas, ¿cuál elegirías?",
    prompt: "¿Qué secreto te gustaría revelar?",
    options: [
      { letter: "A", text: "🌿 Cómo comunicarte con las plantas y entender los secretos medicinales de la tierra." },
      { letter: "B", text: "🕯️ Qué historias y secretos guardaban tus antepasados que nadie te contó." },
      { letter: "C", text: "👁️ Qué significan realmente los mundos que visitas cuando sueñas." },
      { letter: "D", text: "🃏 Qué va a pasar exactamente en tu vida en los próximos cinco años." },
      { letter: "E", text: "🌙 Cómo influyen las fuerzas del universo en el destino de cada persona." },
      { letter: "F", text: "🔥 Cómo proteger para siempre a las personas y los lugares que amas." },
      { letter: "G", text: "🗝️ La verdad absoluta sobre por qué las personas hacen las cosas oscuras que hacen." }
    ]
  },
  {
    emoji: "🔮",
    scenario: "Tu espacio mágico",
    setup: "Si pudieras diseñar un rincón sagrado en tu casa, ¿qué no podría faltar nunca?",
    prompt: "¿Qué elemento preside tu espacio?",
    options: [
      { letter: "A", text: "🌿 Muchas plantas, ramas secas, piedras y flores frescas." },
      { letter: "B", text: "🕯️ Fotos antiguas, recuerdos heredados y objetos con historia familiar." },
      { letter: "C", text: "👁️ Un diario de papel grueso, velas tenues y figuras simbólicas." },
      { letter: "D", text: "🃏 Varios mazos de tarot, tapetes de tela y un cuaderno de lecturas." },
      { letter: "E", text: "🌙 Cristales alineados, un mapa estelar y agua de luna." },
      { letter: "F", text: "🔥 Velas aromáticas, tarros de especias, canela y aceites esenciales." },
      { letter: "G", text: "🗝️ Objetos oscuros, obsidiana, candados antiguos y un espacio privado bajo llave." }
    ]
  },
  {
    emoji: "⚡",
    scenario: "El poder",
    setup: "Si pudieras desarrollar un don especial al máximo nivel, ¿cuál te gustaría tener?",
    prompt: "¿Qué don despierta tu alma?",
    options: [
      { letter: "A", text: "🌿 Sanar con las manos, con hierbas y con la energía de la naturaleza." },
      { letter: "B", text: "🕯️ Escuchar los consejos de quienes vivieron antes que tú." },
      { letter: "C", text: "👁️ Viajar conscientemente a través de los sueños y recibir revelaciones." },
      { letter: "D", text: "🃏 Leer el destino de cualquier persona con solo mirar sus ojos o sus cartas." },
      { letter: "E", text: "🌙 Moverte en perfecta sincronía con los ciclos del universo y no fallar nunca el momento." },
      { letter: "F", text: "🔥 Crear un escudo de protección que ninguna mala energía pueda romper." },
      { letter: "G", text: "🗝️ Ver la verdad oculta de cualquier persona sin que pueda engañarte jamás." }
    ]
  },
  {
    emoji: "🚪",
    scenario: "La última elección",
    setup: "Llegas al final del camino. Frente a ti hay siete puertas de distintos materiales. Solo puedes cruzar una.",
    prompt: "¿Cuál abres?",
    options: [
      { letter: "A", text: "🌿 Una puerta de madera viva cubierta de hiedra y flores silvestres." },
      { letter: "B", text: "🕯️ Una puerta de roble antiguo con un escudo familiar tallado a mano." },
      { letter: "C", text: "👁️ Una puerta de cristal translúcido que parece reflejar un cielo estrellado." },
      { letter: "D", text: "🃏 Una puerta grabada con los 22 Arcanos Mayores del Tarot." },
      { letter: "E", text: "🌙 Una puerta de piedra oscura con una media luna de plata incrustada." },
      { letter: "F", text: "🔥 Una puerta de madera cálida por donde sale olor a pan recién horneado y romero." },
      { letter: "G", text: "🗝️ Una puerta de hierro negro con una cerradura que brilla suavemente en la oscuridad." }
    ]
  }
];

const MONTH_NAMES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

interface WitchTestPageProps {
  onBackToBlog?: () => void;
  onBackToMain?: () => void;
}

export const WitchTestPage: React.FC<WitchTestPageProps> = ({
  onBackToBlog,
  onBackToMain,
}) => {
  // Test Selector Mode: "WITCH_QUIZ" | "ARCANO_BIRTH"
  const [activeTest, setActiveTest] = useState<"WITCH_QUIZ" | "ARCANO_BIRTH">("WITCH_QUIZ");

  // State for Witch Quiz
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [copiedWitch, setCopiedWitch] = useState<boolean>(false);

  // State for Arcano de Nacimiento
  const [birthDay, setBirthDay] = useState<string>("1");
  const [birthMonth, setBirthMonth] = useState<string>("1");
  const [birthYear, setBirthYear] = useState<string>("1998");
  const [isCalculatingArcano, setIsCalculatingArcano] = useState<boolean>(false);
  const [arcanoResultNumber, setArcanoResultNumber] = useState<number | null>(null);
  const [arcanoLoadingPhase, setArcanoLoadingPhase] = useState<string>("");
  const [copiedArcano, setCopiedArcano] = useState<boolean>(false);

  const totalQuestions = WITCH_QUESTIONS.length;
  const isWitchFinished = step >= totalQuestions;

  // WHATSAPP & PATREON LINKS
  const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/DPpoctnp402IIgEQ85jvdh?s=cl&p=a&mlu=4";
  const PATREON_POST_URL = "https://www.patreon.com/MysticLabs369/posts/como-empezar-en-167309757?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link";

  const handleSelectWitchOption = (letter: string) => {
    const nextAnswers = [...answers];
    nextAnswers[step] = letter;
    setAnswers(nextAnswers);
    setStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePreviousWitch = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleRestartWitch = () => {
    setStep(0);
    setAnswers([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate Witch Archetype
  const tally: Record<string, number> = {};
  answers.forEach((letter) => {
    tally[letter] = (tally[letter] || 0) + 1;
  });

  const sortedLetters = Object.keys(tally).sort((a, b) => tally[b] - tally[a]);
  const primaryLetter = sortedLetters[0] || "A";
  const secondaryLetter = sortedLetters[1];
  const counts = sortedLetters.map((l) => tally[l]);
  const isEclectic = sortedLetters.length >= 3 && counts[0] - counts[2] <= 1;

  const primaryResult = WITCH_RESULTS[primaryLetter] || WITCH_RESULTS["A"];
  const secondaryResult = secondaryLetter ? WITCH_RESULTS[secondaryLetter] : null;

  const foundCombo = secondaryLetter
    ? WITCH_COMBOS.find(
        (c) => c.pair.includes(primaryLetter) && c.pair.includes(secondaryLetter)
      )
    : null;

  const handleShareWitch = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(
        `🔮 Hice el Test de Bruja en Mystic Lab y mi resultado es: ${primaryResult.emoji} ${primaryResult.name}. ¡Descubre qué tipo de bruja eres tú!`
      );
      setCopiedWitch(true);
      setTimeout(() => setCopiedWitch(false), 2500);
    }
  };

  // Calculate Arcano de Nacimiento
  const handleCalculateArcano = () => {
    setIsCalculatingArcano(true);
    setArcanoResultNumber(null);
    setArcanoLoadingPhase("Sintonizando tu vibración natal...");

    setTimeout(() => {
      setArcanoLoadingPhase("Conectando con los 22 Arcanos Mayores...");
    }, 450);

    setTimeout(() => {
      const d = parseInt(birthDay) || 1;
      const m = parseInt(birthMonth) || 1;
      const y = parseInt(birthYear) || 1998;

      const sum = d + m + y;
      let tempSum = sum;
      while (tempSum > 22) {
        tempSum = tempSum.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
      }

      let finalNum = tempSum;
      if (finalNum < 1) finalNum = 1;

      setArcanoResultNumber(finalNum);
      setIsCalculatingArcano(false);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }, 950);
  };

  const handleResetArcano = () => {
    setArcanoResultNumber(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const arcanoInfo: ArcanoInfo | null = arcanoResultNumber ? ARCANOS_DATA[arcanoResultNumber] : null;

  const handleShareArcano = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard && arcanoInfo) {
      navigator.clipboard.writeText(
        `🃏 Mi Arcano de Nacimiento es el arcano ${arcanoInfo.number} - ${arcanoInfo.name} (${arcanoInfo.keyEnergy}). ¡Calcula el tuyo en Mystic Lab!`
      );
      setCopiedArcano(true);
      setTimeout(() => setCopiedArcano(false), 2500);
    }
  };

  const progressPct = Math.round((step / totalQuestions) * 100);
  const currentQ = !isWitchFinished ? WITCH_QUESTIONS[step] : null;

  return (
    <div className="font-jost bg-[#f4ece1] text-[#3a2a24] min-h-screen antialiased selection:bg-[#e3b8bb] pb-20">
      
      {/* TOP NAVIGATION BAR */}
      <div className="w-full bg-[#3a2a24] text-[#f4ece1] px-4 py-2.5 text-xs flex items-center justify-between border-b border-[#2a1c18]">
        <div className="flex items-center gap-2">
          <span className="text-[#e2c3c6]">✦</span>
          <span className="tracking-wider uppercase font-medium">MYSTIC LAB / ESCUELA MÁGICA</span>
        </div>
        <div className="flex items-center gap-2">
          {onBackToBlog && (
            <button
              onClick={onBackToBlog}
              className="flex items-center gap-1.5 px-3 py-1 bg-[#7c2a34] hover:bg-[#a8404c] text-white rounded-full text-[11.5px] transition-all cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver al Blog</span>
            </button>
          )}
          {onBackToMain && !onBackToBlog && (
            <button
              onClick={onBackToMain}
              className="flex items-center gap-1.5 px-3 py-1 bg-[#7c2a34] hover:bg-[#a8404c] text-white rounded-full text-[11.5px] transition-all cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </button>
          )}
        </div>
      </div>

      {/* HEADER LOGO */}
      <div className="flex items-center justify-center pt-8 pb-4 border-b border-[#e2d2bf]/70">
        <button
          onClick={onBackToBlog || onBackToMain}
          className="font-cormorant text-2xl sm:text-3xl tracking-[4px] text-[#7c2a34] hover:text-[#a8404c] flex items-center gap-2 font-normal transition-colors cursor-pointer"
        >
          <span>MYSTIC</span>
          <span className="text-sm text-[#c98a8f]">✦</span>
          <span>LAB</span>
        </button>
      </div>

      {/* DUAL TEST SELECTOR TABS */}
      <div className="max-w-xl mx-auto px-4 pt-6">
        <div className="bg-[#ebdccb] p-1.5 rounded-full flex items-center border border-[#d8c5b0] shadow-xs">
          <button
            id="tab-witch-type-btn"
            onClick={() => {
              setActiveTest("WITCH_QUIZ");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`flex-1 py-2.5 px-3 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              activeTest === "WITCH_QUIZ"
                ? "bg-[#7c2a34] text-[#f4ece1] shadow-sm"
                : "text-[#5a463c] hover:text-[#3a2a24] hover:bg-[#e2d0bd]"
            }`}
          >
            <span>🔮</span>
            <span className="uppercase text-[11px] sm:text-xs">¿Qué Bruja Eres?</span>
          </button>

          <button
            id="tab-arcano-birth-btn"
            onClick={() => {
              setActiveTest("ARCANO_BIRTH");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`flex-1 py-2.5 px-3 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              activeTest === "ARCANO_BIRTH"
                ? "bg-[#7c2a34] text-[#f4ece1] shadow-sm"
                : "text-[#5a463c] hover:text-[#3a2a24] hover:bg-[#e2d0bd]"
            }`}
          >
            <span>🃏</span>
            <span className="uppercase text-[11px] sm:text-xs">Arcano de Nacimiento</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SECTION 1: TEST 1 - QUÉ TIPO DE BRUJA ERES */}
      {/* ======================================================== */}
      {activeTest === "WITCH_QUIZ" && (
        <div className="max-w-[640px] mx-auto px-5 py-8 sm:py-10 animate-fadeIn">
          
          {!isWitchFinished && currentQ ? (
            <div>
              {/* INTRO HEADER */}
              <div className="text-center mb-8">
                <div className="text-[12px] tracking-[2px] text-[#7c2a34] font-medium mb-2 uppercase flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>TEST DE AFINIDAD MÁGICA</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <h1 className="font-cormorant text-3xl sm:text-4xl text-[#3a2a24] font-normal leading-tight">
                  🔮 ¿Qué tipo de bruja eres?
                </h1>
                <p className="text-sm leading-relaxed text-[#5a463c] mt-3 max-w-lg mx-auto">
                  Hay una forma de magia hacia la que pareces inclinarte naturalmente. Elige la opción que más te atraiga instintivamente en cada pregunta.
                </p>
              </div>

              {/* PROGRESS BAR */}
              <div className="h-1.5 bg-[#e6d5c2] rounded-full mb-2 overflow-hidden">
                <div
                  className="h-full bg-[#7c2a34] rounded-full transition-all duration-300"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <div className="text-right text-[11.5px] text-[#9a8474] mb-6 font-medium">
                Pregunta {step + 1} de {totalQuestions}
              </div>

              {/* QUESTION CARD */}
              <div className="bg-[#fbf5ec] border border-[#e2d2bf] rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="font-cormorant text-2xl sm:text-[26px] text-[#3a2a24] font-semibold mb-2 flex items-center gap-2">
                  <span>{currentQ.emoji}</span>
                  <span>{currentQ.scenario}</span>
                </div>
                <p className="text-[14.5px] leading-relaxed text-[#5a463c] mb-4">
                  {currentQ.setup}
                </p>
                <div className="font-cormorant italic text-lg sm:text-xl text-[#7c2a34] mb-5 font-medium">
                  {currentQ.prompt}
                </div>

                {/* OPTIONS LIST */}
                <div className="flex flex-col gap-2.5">
                  {currentQ.options.map((opt) => (
                    <button
                      key={opt.letter}
                      onClick={() => handleSelectWitchOption(opt.letter)}
                      className="group flex items-start gap-3 p-3.5 sm:p-4 bg-white hover:bg-[#fdf8f2] border border-[#e6d5c2] hover:border-[#c8a4a8] rounded-lg cursor-pointer text-left transition-all duration-200 shadow-xs active:scale-[0.99]"
                    >
                      <span className="text-[13px] font-bold text-[#7c2a34] min-w-[18px] pt-0.5 group-hover:scale-110 transition-transform">
                        {opt.letter}.
                      </span>
                      <span className="text-[13.5px] sm:text-[14px] leading-snug text-[#3a2a24] group-hover:text-[#1a1a1a]">
                        {opt.text}
                      </span>
                    </button>
                  ))}
                </div>

                {/* BACK BUTTON */}
                {step > 0 && (
                  <div className="mt-6 pt-4 border-t border-[#e6d5c2]/60">
                    <button
                      onClick={handlePreviousWitch}
                      className="inline-flex items-center gap-1.5 text-xs tracking-wider text-[#7c2a34] hover:text-[#a8404c] font-medium border-b border-[#7c2a34]/40 hover:border-[#a8404c] transition-all cursor-pointer pb-0.5"
                    >
                      <ArrowLeft className="w-3 h-3" />
                      <span>ANTERIOR</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* RESULT VIEW */
            <div className="animate-fadeIn">
              <div className="text-center mb-2 text-xs tracking-[2px] text-[#7c2a34] font-medium uppercase">
                ✦ TU RESULTADO ✦
              </div>
              <h1 className="text-center font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#3a2a24] font-normal mb-6 leading-tight">
                {primaryResult.emoji} {primaryResult.name}
              </h1>

              {/* PRIMARY RESULT CARD */}
              <div className="bg-[#fbf5ec] border border-[#e2d2bf] rounded-xl p-6 sm:p-8 shadow-sm flex flex-col gap-5">
                <p className="text-[15px] sm:text-[15.5px] leading-relaxed text-[#5a463c]">
                  {primaryResult.desc}
                </p>
                
                <div className="border-t border-[#e6d5c2] pt-4">
                  <span className="font-semibold text-xs tracking-wider uppercase text-[#7c2a34]">
                    ✦ Tus fortalezas:
                  </span>
                  <p className="text-sm text-[#5a463c] mt-1">
                    {primaryResult.fortalezas}
                  </p>
                </div>

                <div className="border-t border-[#e6d5c2] pt-4">
                  <span className="font-semibold text-xs tracking-wider uppercase text-[#7c2a34]">
                    ✦ Áreas para explorar:
                  </span>
                  <p className="text-sm text-[#5a463c] mt-1">
                    {primaryResult.explora}
                  </p>
                </div>
              </div>

              {/* SECONDARY & COMBOS */}
              {secondaryResult && (
                <div className="mt-5 bg-[#fbf5ec] border border-[#e2d2bf] rounded-xl p-5 sm:p-6 shadow-sm">
                  <div className="text-[11.5px] tracking-[1.5px] text-[#7c2a34] font-semibold uppercase mb-1">
                    ✦ Tu energía secundaria
                  </div>
                  <h3 className="font-cormorant text-xl text-[#3a2a24] font-medium mb-2">
                    {secondaryResult.emoji} {secondaryResult.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5a463c] leading-relaxed">
                    {secondaryResult.desc}
                  </p>
                </div>
              )}

              {foundCombo && (
                <div className="mt-5 bg-[#ebdccb] border border-[#d8c5b0] rounded-xl p-5 sm:p-6 shadow-sm">
                  <div className="text-[11.5px] tracking-[1.5px] text-[#7c2a34] font-semibold uppercase mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Tu combinación mágica</span>
                  </div>
                  <h3 className="font-cormorant text-xl text-[#3a2a24] font-semibold mb-2">
                    ✦ {foundCombo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5a463c] leading-relaxed">
                    {foundCombo.desc}
                  </p>
                </div>
              )}

              {isEclectic && (
                <div className="mt-5 bg-[#fbf5ec] border border-[#e2d2bf] rounded-xl p-5 shadow-sm text-xs sm:text-sm text-[#5a463c] italic leading-relaxed">
                  🔮 Tus respuestas estuvieron muy repartidas entre varios tipos. Tienes un perfil <strong>ecléctico</strong>: tu práctica probablemente combine elementos de varias tradiciones sin necesidad de limitarte a una sola.
                </div>
              )}

              <p className="text-center text-[12px] text-[#8c7464] italic mt-6">
                ✨ No hay un resultado mejor que otro. El quiz describe afinidades simbólicas y espirituales.
              </p>

              {/* COMMUNITY & NEXT STEPS / 2 BOTONES DE COMUNIDAD Y PATREON */}
              <div className="mt-8 bg-[#fbf5ec] border border-[#e2d2bf] rounded-2xl p-6 sm:p-7 text-center shadow-sm">
                <div className="text-[11px] tracking-[2px] text-[#7c2a34] font-semibold uppercase mb-1.5 flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CONTINÚA TU CAMINO MÁGICO</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-cormorant text-2xl sm:text-3xl text-[#3a2a24] font-medium mb-2">
                  Únete al Círculo de Mystic Lab
                </h3>
                <p className="text-sm text-[#5a463c] max-w-md mx-auto mb-6 leading-relaxed">
                  Conéctate con nuestra comunidad, comparte tus lecturas y aprende a profundizar en tu práctica mágica:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* 1. Botón WhatsApp */}
                  <a
                    id="witch-test-whatsapp-link"
                    href={WHATSAPP_COMMUNITY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 px-5 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-medium text-[12.5px] tracking-wider shadow-sm transition-all transform hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>UNIRTE AL WHATSAPP ✦</span>
                  </a>

                  {/* 2. Botón Patreon */}
                  <a
                    id="witch-test-patreon-link"
                    href={PATREON_POST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 px-5 py-4 bg-[#7c2a34] hover:bg-[#963541] text-[#f4ece1] rounded-xl font-medium text-[12.5px] tracking-wider shadow-sm transition-all transform hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>CÓMO EMPEZAR EN PATREON ✦</span>
                  </a>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-6">
                <button
                  onClick={handleRestartWitch}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#7c2a34] hover:bg-[#963541] text-[#f4ece1] text-xs font-semibold tracking-widest rounded-full transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>VOLVER A HACER EL TEST ✦</span>
                </button>

                <button
                  onClick={handleShareWitch}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#fbf5ec] border border-[#d4c3b0] text-[#3a2a24] text-xs font-semibold tracking-widest rounded-full transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2"
                >
                  {copiedWitch ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedWitch ? "¡COPIADO AL PORTAPAPELES!" : "COMPARTIR RESULTADO"}</span>
                </button>
              </div>

              {/* SWITCH TO ARCANO CTA */}
              <div className="mt-8 text-center pt-6 border-t border-[#e2d2bf]/60">
                <button
                  onClick={() => {
                    setActiveTest("ARCANO_BIRTH");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#7c2a34] hover:text-[#a8404c] border-b border-[#7c2a34]/40 hover:border-[#a8404c] pb-0.5 cursor-pointer"
                >
                  <span>🃏 ¿Quieres conocer también tu Arcano de Nacimiento? Haz clic aquí ➔</span>
                </button>
              </div>
            </div>
          )}

        </div>
      )}

      {/* ======================================================== */}
      {/* SECTION 2: TEST 2 - ARCANO DE NACIMIENTO */}
      {/* ======================================================== */}
      {activeTest === "ARCANO_BIRTH" && (
        <div className="max-w-[680px] mx-auto px-5 py-8 sm:py-10 animate-fadeIn">
          
          {/* HEADER INTRO */}
          <div className="text-center mb-8">
            <div className="text-[12px] tracking-[2px] text-[#7c2a34] font-medium mb-2 uppercase flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TEST NUMEROLÓGICO DEL TAROT</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <h1 className="font-cormorant text-3xl sm:text-4xl text-[#3a2a24] font-normal leading-tight">
              🃏 ¿Cuál es tu Arcano de Nacimiento?
            </h1>
            <p className="text-sm leading-relaxed text-[#5a463c] mt-3 max-w-lg mx-auto">
              Cada fecha de nacimiento está sintonizada con uno de los 22 Arcanos Mayores. Esta carta rige tu misión espiritual, tus dones innatos y tus principales desafíos evolutivos.
            </p>
          </div>

          {/* DATE INPUT FORM */}
          <div className="bg-[#fbf5ec] border border-[#e2d2bf] rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
            <div className="text-center mb-6">
              <span className="text-xs font-semibold tracking-widest text-[#7c2a34] uppercase">
                ✦ INGRESA TU FECHA DE NACIMIENTO ✦
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
              {/* Día */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#7c2a34] font-semibold mb-1.5 text-center">
                  Día
                </label>
                <select
                  value={birthDay}
                  onChange={(e) => setBirthDay(e.target.value)}
                  className="w-full bg-white border border-[#d8c5b0] text-[#3a2a24] text-sm py-2.5 px-3 rounded-lg text-center font-medium focus:outline-hidden focus:border-[#7c2a34] shadow-2xs"
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mes */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#7c2a34] font-semibold mb-1.5 text-center">
                  Mes
                </label>
                <select
                  value={birthMonth}
                  onChange={(e) => setBirthMonth(e.target.value)}
                  className="w-full bg-white border border-[#d8c5b0] text-[#3a2a24] text-sm py-2.5 px-2 rounded-lg text-center font-medium focus:outline-hidden focus:border-[#7c2a34] shadow-2xs"
                >
                  {MONTH_NAMES.map((mName, i) => (
                    <option key={i + 1} value={i + 1}>
                      {mName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Año */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#7c2a34] font-semibold mb-1.5 text-center">
                  Año
                </label>
                <select
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  className="w-full bg-white border border-[#d8c5b0] text-[#3a2a24] text-sm py-2.5 px-3 rounded-lg text-center font-medium focus:outline-hidden focus:border-[#7c2a34] shadow-2xs"
                >
                  {Array.from({ length: 85 }, (_, i) => 2026 - i).map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* BOTÓN CALCULAR */}
            <button
              id="calculate-arcano-birth-btn"
              onClick={handleCalculateArcano}
              disabled={isCalculatingArcano}
              className="w-full py-4 px-6 bg-[#7c2a34] hover:bg-[#963541] text-[#f4ece1] text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              {isCalculatingArcano ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-[#e3b8bb]" />
                  <span>{arcanoLoadingPhase}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>REVELAR MI ARCANO REGENTE ✦</span>
                </>
              )}
            </button>
          </div>

          {/* ARCANO RESULT SECTION */}
          {arcanoInfo && arcanoResultNumber && (
            <div className="animate-fadeIn">
              
              {/* CARD REVEAL CONTAINER */}
              <div className="bg-[#fbf5ec] border border-[#e2d2bf] rounded-2xl p-6 sm:p-8 shadow-sm mb-6">
                <div className="text-center mb-4">
                  <span className="text-[11px] tracking-[2px] uppercase text-[#7c2a34] font-semibold">
                    ✦ TU ARCANO MAYOR REGENTE ✦
                  </span>
                  <h2 className="font-cormorant text-3xl sm:text-5xl text-[#3a2a24] font-normal mt-1 mb-2">
                    {arcanoInfo.number} · {arcanoInfo.name}
                  </h2>
                  <p className="font-cormorant italic text-base sm:text-lg text-[#7c2a34] max-w-md mx-auto">
                    "{arcanoInfo.keyEnergy}"
                  </p>
                </div>

                {/* TAROT CARD ART */}
                <div className="max-w-[240px] sm:max-w-[270px] mx-auto my-6 rounded-xl overflow-hidden shadow-lg border-2 border-[#c8a4a8] bg-[#2a1c18]">
                  <img
                    src={arcanoInfo.image}
                    alt={arcanoInfo.name}
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* DETAILED INTERPRETATION */}
                <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#5a463c] pt-2">
                  <div className="bg-white/80 p-4 sm:p-5 rounded-xl border border-[#e6d5c2]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#7c2a34] mb-1.5 flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5" />
                      <span>Tu Esencia y Dones Arquetípicos</span>
                    </h4>
                    <p>{arcanoInfo.description}</p>
                  </div>

                  <div className="bg-[#ebdccb]/60 p-4 rounded-xl border border-[#d8c5b0] text-xs sm:text-[13.5px]">
                    <span className="font-bold text-[#7c2a34] uppercase tracking-wider block mb-1">
                      ✦ Clave de Integración Práctica:
                    </span>
                    <span>
                      Medita con esta carta en tus momentos de duda. Tu arcano te recuerda que tus mayores talentos y tus mayores sombras provienen de la misma fuente de poder.
                    </span>
                  </div>
                </div>
              </div>

              {/* COMMUNITY & NEXT STEPS / 2 BOTONES DE COMUNIDAD Y PATREON */}
              <div className="bg-[#fbf5ec] border border-[#e2d2bf] rounded-2xl p-6 sm:p-7 text-center shadow-sm mb-6">
                <div className="text-[11px] tracking-[2px] text-[#7c2a34] font-semibold uppercase mb-1.5 flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CONTINÚA TU CAMINO MÁGICO</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-cormorant text-2xl sm:text-3xl text-[#3a2a24] font-medium mb-2">
                  Únete al Círculo de Mystic Lab
                </h3>
                <p className="text-sm text-[#5a463c] max-w-md mx-auto mb-6 leading-relaxed">
                  Conéctate con nuestra comunidad, comparte tu arcano y aprende a trabajar conscientemente con su energía:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* 1. Botón WhatsApp */}
                  <a
                    id="arcano-test-whatsapp-link"
                    href={WHATSAPP_COMMUNITY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 px-5 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-medium text-[12.5px] tracking-wider shadow-sm transition-all transform hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>UNIRTE AL WHATSAPP ✦</span>
                  </a>

                  {/* 2. Botón Patreon */}
                  <a
                    id="arcano-test-patreon-link"
                    href={PATREON_POST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 px-5 py-4 bg-[#7c2a34] hover:bg-[#963541] text-[#f4ece1] rounded-xl font-medium text-[12.5px] tracking-wider shadow-sm transition-all transform hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>CÓMO EMPEZAR EN PATREON ✦</span>
                  </a>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <button
                  onClick={handleResetArcano}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#7c2a34] hover:bg-[#963541] text-[#f4ece1] text-xs font-semibold tracking-widest rounded-full transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>CALCULAR OTRA FECHA ✦</span>
                </button>

                <button
                  onClick={handleShareArcano}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#fbf5ec] border border-[#d4c3b0] text-[#3a2a24] text-xs font-semibold tracking-widest rounded-full transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2"
                >
                  {copiedArcano ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedArcano ? "¡COPIADO AL PORTAPAPELES!" : "COMPARTIR MI ARCANO"}</span>
                </button>
              </div>

              {/* SWITCH TO WITCH QUIZ CTA */}
              <div className="mt-8 text-center pt-6 border-t border-[#e2d2bf]/60">
                <button
                  onClick={() => {
                    setActiveTest("WITCH_QUIZ");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#7c2a34] hover:text-[#a8404c] border-b border-[#7c2a34]/40 hover:border-[#a8404c] pb-0.5 cursor-pointer"
                >
                  <span>🔮 ¿Quieres descubrir también qué tipo de bruja eres? Haz el test aquí ➔</span>
                </button>
              </div>

            </div>
          )}

        </div>
      )}

    </div>
  );
};

export default WitchTestPage;
