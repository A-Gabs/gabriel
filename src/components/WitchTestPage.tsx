import React, { useState } from "react";
import { ArrowLeft, RefreshCw, Share2, Sparkles, Check } from "lucide-react";

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
      { letter: "D", text: "A la biblioteca llena de libros y manuscritos." },
      { letter: "A", text: "Al jardín trasero, completamente invadido por plantas." },
      { letter: "G", text: "Al sótano. No sabes qué hay allí y precisamente por eso quieres entrar." },
      { letter: "C", text: "Al ático, porque jurarías haber visto algo moverse allí." },
      { letter: "F", text: "A la cocina, llena de frascos, especias y utensilios antiguos." },
      { letter: "B", text: "A una habitación llena de cartas, fotografías y objetos de antiguos habitantes." },
      { letter: "E", text: "A una habitación con una enorme ventana desde donde se ve el cielo." }
    ]
  },
  {
    emoji: "🗝️",
    scenario: "El objeto",
    setup: "Sobre una mesa aparecen siete objetos. Puedes llevarte solamente uno.",
    prompt: "¿Cuál eliges?",
    options: [
      { letter: "E", text: "Un colgante con símbolos del Sol, la Luna y los planetas." },
      { letter: "C", text: "Un espejo negro antiguo." },
      { letter: "A", text: "Un pequeño frasco con semillas desconocidas." },
      { letter: "G", text: "Una llave oxidada sin ninguna cerradura a la vista." },
      { letter: "B", text: "Un medallón que perteneció a varias generaciones de una familia." },
      { letter: "F", text: "Una vela cuyo aroma te recuerda inmediatamente a tu hogar." },
      { letter: "D", text: "Una baraja ilustrada que nunca habías visto." }
    ]
  },
  {
    emoji: "🌙",
    scenario: "Una noche sin obligaciones",
    setup: "Tienes toda la noche para ti.",
    prompt: "¿Qué plan te resulta más atractivo?",
    options: [
      { letter: "F", text: "Preparar algo especial, encender velas y transformar tu espacio en un refugio." },
      { letter: "B", text: "Revisar fotografías, recuerdos o historias de tu familia." },
      { letter: "E", text: "Observar la Luna y descubrir qué está sucediendo astrológicamente." },
      { letter: "A", text: "Caminar por un lugar lleno de naturaleza y perder la noción del tiempo." },
      { letter: "G", text: "Escribir sobre algo de ti que normalmente prefieres evitar." },
      { letter: "D", text: "Sacar cartas, consultar un oráculo o buscar respuestas a una pregunta." },
      { letter: "C", text: "Apagar las luces y experimentar con sueños, meditación o estados de conciencia." }
    ]
  },
  {
    emoji: "👁️",
    scenario: "Tu intuición",
    setup: "Una amiga te cuenta que tiene una sensación extraña sobre una decisión importante.",
    prompt: "¿Qué haces naturalmente?",
    options: [
      { letter: "G", text: "Le haces la pregunta incómoda que nadie más se atreve a hacerle." },
      { letter: "D", text: "Quieres consultar cartas, símbolos o algún método de adivinación." },
      { letter: "A", text: "Le preguntas qué siente físicamente cuando imagina cada opción." },
      { letter: "F", text: "Le propones hablar tranquilamente en un espacio donde pueda sentirse segura." },
      { letter: "C", text: "Presta atención a sueños, coincidencias o sensaciones difíciles de explicar." },
      { letter: "E", text: "Quieres conocer las fechas y observar los ciclos que rodean la situación." },
      { letter: "B", text: "Intentas descubrir si existe algún patrón familiar detrás de la situación." }
    ]
  },
  {
    emoji: "🔥",
    scenario: "El ritual",
    setup: "Si fueras a crear un ritual completamente intuitivo, ¿qué elemento aparecería casi seguro?",
    prompt: "Elige el elemento.",
    options: [
      { letter: "C", text: "Humo, espejos, sueños o símbolos extraños." },
      { letter: "E", text: "Correspondencias planetarias, fases lunares o estrellas." },
      { letter: "G", text: "Papel, fuego y algo que quieras confrontar, transformar o dejar atrás." },
      { letter: "A", text: "Hierbas, flores, agua o tierra." },
      { letter: "D", text: "Cartas, runas, péndulos o símbolos para interpretar." },
      { letter: "F", text: "Velas, alimentos, aromas y objetos cotidianos." },
      { letter: "B", text: "Fotografías, objetos heredados o recuerdos." }
    ]
  },
  {
    emoji: "🌑",
    scenario: "Algo termina",
    setup: "Estás cerrando una etapa importante de tu vida.",
    prompt: "¿Qué sientes que necesitas hacer?",
    options: [
      { letter: "B", text: "Comprender de dónde viene lo que estoy viviendo." },
      { letter: "F", text: "Limpiar y reorganizar mi espacio para sentir que comienzo de nuevo." },
      { letter: "D", text: "Encontrar señales que me ayuden a comprender hacia dónde voy." },
      { letter: "G", text: "Mirar directamente aquello que me dolió y descubrir qué cambió dentro de mí." },
      { letter: "A", text: "Ir a algún lugar natural para recuperar equilibrio." },
      { letter: "E", text: "Esperar el momento adecuado para comenzar mi siguiente etapa." },
      { letter: "C", text: "Estar en silencio y escuchar lo que mi intuición intenta mostrarme." }
    ]
  },
  {
    emoji: "📖",
    scenario: "El conocimiento prohibido",
    setup: "Encuentras un libro que contiene exactamente el conocimiento que más deseas adquirir.",
    prompt: "¿De qué trata?",
    options: [
      { letter: "G", text: "Los deseos, miedos y partes ocultas de la mente humana." },
      { letter: "A", text: "Los secretos y propiedades de plantas, minerales y elementos naturales." },
      { letter: "E", text: "Los patrones secretos que conectan a las personas con el cosmos." },
      { letter: "C", text: "Sueños, espíritus, símbolos y mundos invisibles." },
      { letter: "F", text: "Antiguos rituales domésticos de protección, prosperidad y bienestar." },
      { letter: "D", text: "Cómo interpretar perfectamente cualquier señal u oráculo." },
      { letter: "B", text: "La historia olvidada de tus antepasados." }
    ]
  },
  {
    emoji: "🕯️",
    scenario: "Tu espacio mágico",
    setup: "Puedes crear un pequeño rincón solamente para ti.",
    prompt: "¿Qué tendría?",
    options: [
      { letter: "D", text: "Tarot, oráculos, péndulos y cuadernos llenos de interpretaciones." },
      { letter: "G", text: "Un diario privado donde puedas escribir absolutamente todo sin censura." },
      { letter: "B", text: "Fotografías familiares, recuerdos y objetos con historia." },
      { letter: "E", text: "Una representación de la Luna, el Sol y los planetas." },
      { letter: "A", text: "Muchas plantas, piedras, flores y elementos naturales." },
      { letter: "C", text: "Un espejo, incienso y objetos misteriosos que solo tú comprendes." },
      { letter: "F", text: "Velas, aceites, especias y objetos que hagan sentir protegido el espacio." }
    ]
  },
  {
    emoji: "✨",
    scenario: "El poder",
    setup: "Imagina que mañana despiertas con una habilidad extraordinaria.",
    prompt: "¿Cuál elegirías?",
    options: [
      { letter: "E", text: "Comprender los grandes ciclos de la vida y saber cuándo actuar." },
      { letter: "G", text: "Ver inmediatamente las verdaderas intenciones, miedos y deseos ocultos de una persona." },
      { letter: "C", text: "Viajar conscientemente dentro de tus sueños." },
      { letter: "A", text: "Comprender perfectamente el lenguaje de la naturaleza." },
      { letter: "F", text: "Convertir cualquier espacio en un lugar de paz, protección y abundancia." },
      { letter: "B", text: "Poder conocer las historias de quienes estuvieron antes que tú." },
      { letter: "D", text: "Percibir los posibles caminos futuros de una situación." }
    ]
  },
  {
    emoji: "🔮",
    scenario: "La última elección",
    setup: "Frente a ti aparecen siete puertas. No sabes qué existe detrás de ninguna. Solo tienen un símbolo.",
    prompt: "¿Cuál abres?",
    options: [
      { letter: "F", text: "🔥 Una pequeña llama dentro de una casa." },
      { letter: "D", text: "🃏 Una mano sosteniendo una carta." },
      { letter: "A", text: "🌿 Una rama creciendo alrededor de un círculo." },
      { letter: "G", text: "🗝️ Una llave atravesando un corazón negro." },
      { letter: "C", text: "👁️ Un ojo dentro de una Luna oscura." },
      { letter: "E", text: "☾ Una Luna rodeada de estrellas." },
      { letter: "B", text: "🕯️ Una llama rodeada por pequeñas figuras humanas." }
    ]
  }
];

interface WitchTestPageProps {
  onBackToBlog?: () => void;
  onBackToMain?: () => void;
}

export const WitchTestPage: React.FC<WitchTestPageProps> = ({
  onBackToBlog,
  onBackToMain,
}) => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [copied, setCopied] = useState<boolean>(false);

  const totalQuestions = WITCH_QUESTIONS.length;
  const isFinished = step >= totalQuestions;

  const handleSelect = (letter: string) => {
    const nextAnswers = [...answers];
    nextAnswers[step] = letter;
    setAnswers(nextAnswers);
    setStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate results
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

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(
        `🔮 Hice el Test de Bruja en Mystic Lab y mi resultado es: ${primaryResult.emoji} ${primaryResult.name}. ¡Descubre qué tipo de bruja eres tú!`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const progressPct = Math.round((step / totalQuestions) * 100);
  const currentQ = !isFinished ? WITCH_QUESTIONS[step] : null;

  return (
    <div className="font-jost bg-[#f4ece1] text-[#3a2a24] min-h-screen antialiased selection:bg-[#e3b8bb] pb-16">
      
      {/* TOP BAR / RETURN NAVIGATION */}
      <div className="w-full bg-[#3a2a24] text-[#f4ece1] px-4 py-2 text-xs flex items-center justify-between border-b border-[#2a1c18]">
        <div className="flex items-center gap-2">
          <span className="text-[#e2c3c6]">✦</span>
          <span className="tracking-wider uppercase font-medium">MYSTIC LAB / TEST DE BRUJA</span>
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

      {/* MAIN CONTAINER */}
      <div className="max-w-[640px] mx-auto px-5 py-8 sm:py-12">
        
        {!isFinished && currentQ ? (
          <div>
            {/* INTRO HEADER */}
            <div className="text-center mb-8">
              <div className="text-[12px] tracking-[2px] text-[#7c2a34] font-medium mb-2 uppercase">
                ✦ WITCH · TEST DE BRUJA ✦
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
                    onClick={() => handleSelect(opt.letter)}
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
                    onClick={handlePrevious}
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
              
              <div className="pt-3 border-t border-[#e2d2bf]/60">
                <div className="text-[11px] tracking-[1.5px] text-[#8a6a5c] font-semibold uppercase mb-1.5">
                  TUS FORTALEZAS
                </div>
                <div className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#3a2a24] capitalize">
                  {primaryResult.fortalezas}
                </div>
              </div>

              <div className="pt-3 border-t border-[#e2d2bf]/60">
                <div className="text-[11px] tracking-[1.5px] text-[#8a6a5c] font-semibold uppercase mb-1.5">
                  EXPLORA
                </div>
                <div className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#3a2a24]">
                  {primaryResult.explora}
                </div>
              </div>
            </div>

            {/* ECLECTIC NOTE (if top 3 are very close) */}
            {isEclectic && (
              <div className="mt-5 bg-[#faf2e5] border border-[#e6d5c2] p-5 rounded-xl shadow-xs -rotate-0.5">
                <div className="font-caveat text-xl sm:text-[22px] leading-snug text-[#5a463c]">
                  Tienes tres resultados muy cercanos: probablemente tengas un perfil ecléctico. Tu práctica natural consiste en combinar diferentes caminos en lugar de limitarte a uno solo.
                </div>
              </div>
            )}

            {/* SECONDARY RESULT & COMBO (if applicable) */}
            {!isEclectic && secondaryResult && (
              <div className="mt-5">
                <div className="text-xs tracking-wider text-[#7c2a34] mb-2.5 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>ENERGÍA SECUNDARIA: {secondaryResult.emoji} {secondaryResult.name}</span>
                </div>
                <div className="bg-white border border-dashed border-[#ddc6b3] rounded-xl p-5 shadow-xs">
                  {foundCombo ? (
                    <div>
                      <div className="font-cormorant italic text-lg sm:text-xl text-[#3a2a24] font-medium mb-1.5">
                        {foundCombo.title}
                      </div>
                      <p className="text-sm leading-relaxed text-[#5a463c]">
                        {foundCombo.desc}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="font-cormorant italic text-lg text-[#3a2a24] font-medium mb-1">
                        Sinergia con {secondaryResult.name}
                      </div>
                      <p className="text-sm leading-relaxed text-[#5a463c]">
                        {secondaryResult.desc}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* DISCLAIMER / FOOTNOTE */}
            <p className="mt-6 text-[12.5px] leading-relaxed text-[#8a6a5c] text-center">
              ✨ No hay un resultado mejor que otro. El quiz describe afinidades simbólicas y espirituales.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8">
              <button
                onClick={handleRestart}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#7c2a34] hover:bg-[#963541] text-[#f4ece1] text-xs font-semibold tracking-widest rounded-full transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>VOLVER A HACER EL TEST ✦</span>
              </button>

              <button
                onClick={handleShare}
                className="w-full sm:w-auto px-5 py-3.5 bg-white hover:bg-[#fbf5ec] border border-[#7c2a34]/30 text-[#7c2a34] text-xs font-medium tracking-wider rounded-full transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? "¡Copiado al portapapeles!" : "Compartir resultado"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WitchTestPage;
