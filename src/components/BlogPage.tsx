import React, { useState, useEffect } from "react";
import { 
  X, 
  Search, 
  Moon, 
  Sun, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Heart, 
  Send, 
  Sparkles, 
  BookOpen, 
  Calendar as CalendarIcon, 
  ArrowLeft,
  Share2,
  Check,
  ExternalLink,
  MessageCircle,
  HelpCircle
} from "lucide-react";
import WitchTestPage from "./WitchTestPage";

interface StoryItem {
  id: number;
  tag: string;
  title: string;
  date: string;
  placeholder: string;
  img: string;
  excerpt?: string;
  content?: string[];
}

interface PostItem {
  id: number;
  tag: string;
  date: string;
  title: string;
  placeholder: string;
  img: string;
  comments: number;
  excerpt: string;
  content?: string[];
}

interface TrackItem {
  n: number;
  name: string;
  dur: string;
  artist?: string;
}

interface GuestbookItem {
  name: string;
  msg: string;
  date?: string;
}

interface Props {
  onBackToMain?: () => void;
}

export default function BlogPage({ onBackToMain }: Props) {
  // Navigation & Category filter
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === "/blog/witch" || path.startsWith("/blog/witch") || hash === "#blog/witch" || hash === "#/blog/witch") {
        return "WITCH";
      }
    }
    return "INICIO";
  });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState<boolean>(false);
  const [subscribeEmail, setSubscribeEmail] = useState<string>("");
  const [subscribedSuccess, setSubscribedSuccess] = useState<boolean>(false);

  // Sync with browser history and URL for /blog/witch
  useEffect(() => {
    const handleUrlChange = () => {
      if (typeof window !== "undefined") {
        const path = window.location.pathname.toLowerCase();
        const hash = window.location.hash.toLowerCase();
        if (path === "/blog/witch" || path.startsWith("/blog/witch") || hash === "#blog/witch" || hash === "#/blog/witch") {
          setActiveTab("WITCH");
        } else if (activeTab === "WITCH" && (path === "/blog" || hash === "#blog" || hash === "#/blog")) {
          setActiveTab("INICIO");
        }
      }
    };

    window.addEventListener("popstate", handleUrlChange);
    window.addEventListener("hashchange", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      window.removeEventListener("hashchange", handleUrlChange);
    };
  }, [activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchQuery("");
    if (typeof window !== "undefined") {
      if (tab === "WITCH") {
        window.history.pushState(null, "", "/blog/witch");
      } else {
        if (window.location.pathname === "/blog/witch" || window.location.pathname.startsWith("/blog/witch")) {
          window.history.pushState(null, "", "/blog");
        }
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Modals for reading content
  const [readingPost, setReadingPost] = useState<PostItem | StoryItem | null>(null);
  const [showRitualModal, setShowRitualModal] = useState<boolean>(false);
  const [showTarotModal, setShowTarotModal] = useState<boolean>(false);
  const [showCosmicModal, setShowCosmicModal] = useState<boolean>(false);
  const [showAboutModal, setShowAboutModal] = useState<boolean>(false);
  const [showGuestbookModal, setShowGuestbookModal] = useState<boolean>(false);

  // Guestbook state
  const [guestName, setGuestName] = useState<string>("");
  const [guestMsg, setGuestMsg] = useState<string>("");
  const [guestbookList, setGuestbookList] = useState<GuestbookItem[]>([
    { name: "Cami", msg: "me encanta tu blog, cada post se siente como un abrazo ✨", date: "Hoy" },
    { name: "Vale", msg: "el ritual de luna nueva me cambió la semana!!", date: "Ayer" },
    { name: "Roci", msg: "necesito más posts de hechizos porfa 🔮", date: "Hace 2 días" },
  ]);

  // Sudoku state (6x6 interactive grid)
  const initialSudoku = [
    5, 3, 0, 0, 7, 0,
    6, 0, 0, 1, 9, 5,
    0, 9, 8, 0, 0, 0,
    8, 0, 0, 0, 6, 0,
    4, 0, 0, 8, 0, 3,
    7, 0, 0, 0, 2, 0
  ];
  const [sudokuGrid, setSudokuGrid] = useState<(number | string)[]>(
    initialSudoku.map(n => n === 0 ? "" : n)
  );

  // Music player simulation
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [trackProgress, setTrackProgress] = useState<number>(35);

  const tracks: TrackItem[] = [
    { n: 1, name: "Afterglow", dur: "3:45", artist: "Luna Mystic" },
    { n: 2, name: "Blood Moon", dur: "4:12", artist: "Coven Beats" },
    { n: 3, name: "Midnight Drive", dur: "3:33", artist: "Ethereal Sound" },
    { n: 4, name: "Shadow Self", dur: "4:01", artist: "Ritual Room" },
  ];

  // Simulated playback timer
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setTrackProgress(prev => (prev >= 100 ? 0 : prev + 2));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Featured Story
  const featuredStory = {
    id: 100,
    tag: "HISTORIA DESTACADA",
    title: "¿Debo tener poderes para hacer magia?",
    img: "https://i.pinimg.com/1200x/aa/86/c5/aa86c5e43a955856b3337696aa9724ba.jpg",
    excerpt: "Es la pregunta que más me hacen las que recién empiezan. La respuesta corta: no. La brujería no es un don que se tiene o no se tiene, es una práctica que se construye con constancia e intención.",
    content: [
      "Es la pregunta que más me hacen las personas que recién empiezan en este sendero: '¿Debo tener poderes especiales para hacer magia o leer el tarot?'",
      "La respuesta corta y directa es: no. La brujería contemporánea y las artes místicas no son un don hereditario reservado a un grupo selecto de elegidas, sino una práctica consciente que se cultiva con estudio, autoconocimiento, disciplina y alineación energética.",
      "La verdadera magia ocurre cuando conectas con tus propios ritmos internos, aprendes a escuchar tu intuición sin juicio y utilizas los símbolos y rituales como un puente entre tu mente subconsciente y el universo.",
      "No necesitas haber nacido con clarividencia para consagrar un altar, realizar un ritual de luna o encontrar claridad en las cartas. Tu mayor poder radica en tu presencia, tu honestidad contigo misma y tu voluntad de transformarte en cada ciclo."
    ]
  };

  const stories: StoryItem[] = [
    { 
      id: 101, 
      tag: "FUNDAMENTOS", 
      title: "Introducción a la brujería", 
      date: "05 AGO, 2026", 
      placeholder: "foto: libro y cristales", 
      img: "https://i.pinimg.com/736x/8e/f9/ee/8ef9ee07e838e1d4f515298aee218eb0.jpg",
      excerpt: "No hay una sola forma de practicar. Antes de hechizos y herramientas, vale la pena entender de dónde viene todo esto y qué significa para ti abrir esta puerta.",
      content: [
        "Iniciar en el mundo esotérico puede sentirse abrumador por la cantidad de información disponible. Sin embargo, el primer paso no requiere comprar docenas de cristales ni memorizar libros enteros.",
        "La base fundamental de toda práctica mágica es el autoconocimiento. Aprender a meditar, registrar tus sueños y entender la fase lunar en la que te encuentras son los primeros cimientos firmes.",
        "Recuerda que cada bruja forja su propia tradición: lo que resuena contigo es exactamente lo que debes integrar en tu práctica diaria."
      ]
    },
    { 
      id: 102, 
      tag: "REFLEXIÓN", 
      title: "La noche oscura del alma", 
      date: "24 JUL, 2026", 
      placeholder: "foto: cielo nocturno", 
      img: "https://i.pinimg.com/736x/69/d1/9a/69d19af474b33dcea6b7d4fc5b5bbfb2.jpg",
      excerpt: "Hay etapas que se sienten como quedarse a oscuras. No son un error del camino, son parte de él. Esto es lo que aprendí atravesando la mía.",
      content: [
        "La noche oscura del alma no es un castigo ni un síntoma de fracaso espiritual. Es una deconstrucción necesaria del ego para dar paso a una conciencia mucho más madura y despierta.",
        "Durante esta etapa, las viejas certezas se derrumban y lo que antes nos motivaba pierde sentido. La clave práctica no es forzar la salida rápida, sino permitir que el vacío haga su trabajo depurador.",
        "Al otro lado de esa oscuridad siempre aguarda una autenticidad mucho más luminosa y libre."
      ]
    },
    { 
      id: 103, 
      tag: "CIENCIA & MAGIA", 
      title: "Física cuántica y brujería", 
      date: "21 JUL, 2026", 
      placeholder: "foto: cuaderno con diagramas", 
      img: "https://i.pinimg.com/1200x/5f/07/aa/5f07aa657f914f0dfadf96ef6cb91bf3.jpg",
      excerpt: "La física cuántica y la magia se parecen más de lo que pensamos: ambas hablan de posibilidad, observación y energía. Aquí conecto los puntos.",
      content: [
        "El principio de incertidumbre y el efecto del observador en la física cuántica demuestran que la realidad no es un bloque estático, sino un campo de probabilidades que responde a la atención y la frecuencia.",
        "En términos mágicos, esto es exactamente lo que llamamos 'intención': focalizar la energía mental y emocional para colapsar una posibilidad específica en el plano material.",
        "Cuando unimos el rigor del pensamiento estratégico con la profundidad del ritual, la manifestación deja de ser un misterio y se convierte en una danza de coherencia energética."
      ]
    },
    { 
      id: 104, 
      tag: "PREGUNTAS FRECUENTES", 
      title: "¿Puedo leer el tarot si soy católica/cristiana?", 
      date: "17 JUL, 2026", 
      placeholder: "foto: cartas de tarot", 
      img: "https://i.pinimg.com/736x/e0/17/c1/e017c1fef950a3e6c88a0498e8d9ad87.jpg",
      excerpt: "Totalmente. El tarot es una herramienta de introspección psicológica y arquetípica, un espejo del alma que no contradice tu fe personal.",
      content: [
        "Existe el mito de que el tarot pertenece a 'fuerzas oscuras' o que entra en conflicto con las creencias religiosas tradicionales. Nada más alejado de la realidad.",
        "Históricamente, el tarot de Marsella y el Rider-Waite contienen una enorme cantidad de simbolismo iconográfico cristiano (los cuatro evangelistas en el Mundo, la templanza como virtud cardinal, el juicio final).",
        "El tarot evolutivo funciona como un mapa psicológico de arquetipos humanos que te ayuda a reflexionar sobre tus decisiones éticas y tu crecimiento espiritual."
      ]
    },
  ];

  const posts: PostItem[] = [
    { 
      id: 1, 
      tag: "ESCUELA PARA BRUJAS", 
      date: "08 AGO, 2026", 
      title: "¡Bienvenidas a mi escuela de brujas!!!", 
      placeholder: "foto: altar con velas", 
      img: "https://i.pinimg.com/736x/0b/7e/ad/0b7ead76833e00d094f29a4a6ceb2ee2.jpg", 
      comments: 27,
      excerpt: "Empieza aquí. Este espacio nació para acompañarte a dar tus primeros pasos: aprender conceptos, explorar prácticas y, sobre todo, formar tu propia visión de lo que la brujería significa para ti.",
      content: [
        "¡Bienvenidas a este rincón sagrado de aprendizaje y expansión! Abrir esta escuela es materializar un sueño que nació de la necesidad de desmitificar las artes mágicas.",
        "Aquí no encontrarás dogmas estrictos ni recetas rígidas. Te brindaremos herramientas pedagógicas sobre astrología, tarot, correspondencias herbales, ciclos lunares y rituales prácticos.",
        "Cada mes exploraremos un módulo temático con ejercicios reflexivos, guías descargables y sesiones de preguntas en comunidad para que construyas una práctica a tu medida."
      ]
    },
    { 
      id: 2, 
      tag: "FUNDAMENTOS", 
      date: "05 AGO, 2026", 
      title: "Introducción a la brujería", 
      placeholder: "foto: libro y cristales", 
      img: "https://i.pinimg.com/736x/8e/f9/ee/8ef9ee07e838e1d4f515298aee218eb0.jpg", 
      comments: 19,
      excerpt: "No hay una sola forma de practicar. Antes de hechizos y herramientas, vale la pena entender de dónde viene todo esto y qué significa para ti abrir esta puerta.",
      content: [
        "La brujería es, en su esencia más pura, una relación íntima y reverente con los ritmos de la naturaleza y los elementos primordiales: Tierra, Aire, Fuego y Agua.",
        "Antes de adquirir herramientas costosas, comienza por afinar tu instrumento más valioso: tu cuerpo y tu mente. La respiración consciente y la observación del cielo son tus primeras lecciones.",
        "Dedica tiempo a reflexionar: ¿qué te atrae del misticismo? ¿Qué heridas o anhelos buscas sanar a través de este lenguaje simbólico?"
      ]
    },
    { 
      id: 3, 
      tag: "HECHIZOS", 
      date: "02 AGO, 2026", 
      title: "Empezamos por los hechizos", 
      placeholder: "foto: velas y hierbas", 
      img: "https://i.pinimg.com/736x/1b/0d/33/1b0d336bf7cb58a50f9747db08cd15d3.jpg", 
      comments: 22,
      excerpt: "En agosto arrancamos con lo práctico. Hechizos sencillos de protección, abundancia y claridad, pensados para quienes recién están empezando.",
      content: [
        "Un hechizo no es más que una plegaria teatralizada con correspondencias físicas que anclan una intención en la materia.",
        "Para comenzar, te recomiendo tres hechizos básicos:\n1. Un saquito de sal marina y romero detrás de la puerta para protección energética.\n2. Una vela verde vestida con canela y laurel para atraer oportunidades laborales.\n3. Un baño de lavanda y manzanilla para calmar la mente y abrir la intuición.",
        "Recuerda siempre la regla de oro: la energía que proyectes debe ser limpia y orientada a tu más alto bien y el de los que te rodean."
      ]
    },
    { 
      id: 4, 
      tag: "FUNDAMENTOS", 
      date: "30 JUL, 2026", 
      title: "El Grimorio", 
      placeholder: "foto: cuaderno artesanal", 
      img: "https://i.pinimg.com/1200x/cf/30/53/cf3053dee80e8bd6efd9c8fac864df52.jpg", 
      comments: 15,
      excerpt: "Tu grimorio es tu diario, tu archivo y tu espejo. Aquí te cuento cómo empecé el mío y qué anoto en cada página.",
      content: [
        "El grimorio o Libro de Sombras es el diario de a bordo de cualquier practicante esotérica. No necesita ser un tomo medieval de cuero; basta un cuaderno que te inspire.",
        "¿Qué puedes anotar en él? Tiradas de tarot semanales, intenciones de luna nueva, resultados de tus rituales, recetas de infusiones y tus reflexiones más íntimas.",
        "Con el paso de los años, tu grimorio se convertirá en un testimonio vivo de tu propia evolución espiritual."
      ]
    },
    { 
      id: 5, 
      tag: "FUNDAMENTOS", 
      date: "27 JUL, 2026", 
      title: "El Altar", 
      placeholder: "foto: altar con cristales", 
      img: "https://i.pinimg.com/1200x/32/12/5c/32125c4d7d64f8f5256e20cbfacfec72.jpg", 
      comments: 12,
      excerpt: "Un altar no necesita ser perfecto ni caro. Necesita ser tuyo. Te cuento qué elementos elegí para el mío y por qué.",
      content: [
        "Tu altar es un punto focal en tu hogar que le recuerda a tu mente que existe un espacio reservado para la calma y la conexión.",
        "Para estructurarlo, puedes representar los cuatro elementos: un incienso o pluma (Aire), una vela (Fuego), una copa con agua fresca (Agua) y un cristal o sal (Tierra).",
        "Mantenlo limpio y cámbiale las flores o el agua periódicamente como un acto de autocuidado y respeto por tu santuario."
      ]
    },
    { 
      id: 6, 
      tag: "REFLEXIÓN", 
      date: "24 JUL, 2026", 
      title: "La noche oscura del alma", 
      placeholder: "foto: cielo nocturno", 
      img: "https://i.pinimg.com/736x/69/d1/9a/69d19af474b33dcea6b7d4fc5b5bbfb2.jpg", 
      comments: 34,
      excerpt: "Hay etapas que se sienten como quedarse a oscuras. No son un error del camino, son parte de él. Esto es lo que aprendí atravesando la mía.",
      content: [
        "A veces la vida nos despoja de lo que creíamos seguro para obligarnos a mirar hacia adentro sin distracciones.",
        "La noche oscura es un rito de paso universal. Cuando sientas que nada florece, recuerda que las semillas pasan su tiempo más crucial bajo tierra antes de ver el sol.",
        "Sé paciente y amable con tu proceso: la claridad regresa en el momento exacto en que estás lista para sostenerla."
      ]
    },
    { 
      id: 7, 
      tag: "CIENCIA & MAGIA", 
      date: "21 JUL, 2026", 
      title: "Física cuántica y brujería", 
      placeholder: "foto: cuaderno con diagramas", 
      img: "https://i.pinimg.com/1200x/5f/07/aa/5f07aa657f914f0dfadf96ef6cb91bf3.jpg", 
      comments: 28,
      excerpt: "La física cuántica y la magia se parecen más de lo que pensamos: ambas hablan de posibilidad, observación y energía. Aquí conecto los puntos.",
      content: [
        "Tanto la física teórica como las tradiciones chamánicas coinciden en que todo en el cosmos está interconectado por una red invisible de vibración.",
        "Cuando emites un pensamiento o realizas un ritual con alta carga emocional, estás influyendo en tu campo electromagnético y atrayendo sintonías afines.",
        "Comprender la ciencia detrás de la magia te permite practicar con mayor confianza, desterrando supersticiones y potenciando tu soberanía personal."
      ]
    },
    { 
      id: 8, 
      tag: "FUNDAMENTOS", 
      date: "18 JUL, 2026", 
      title: "La verdadera \"herramienta\" eres tú", 
      placeholder: "foto: manos sosteniendo cristal", 
      img: "https://i.pinimg.com/736x/4d/fd/d5/4dfdd5106780fcedcbfbf2e3dd8dd1b6.jpg", 
      comments: 20,
      excerpt: "Cristales, cartas, velas: todo ayuda, pero nada reemplaza tu propia energía e intención. La herramienta más importante siempre fuiste tú.",
      content: [
        "Puedes tener la varita más hermosa o el mazo de cartas de edición limitada más exclusivo, pero sin tu presencia consciente son solo objetos inertes.",
        "La verdadera alquimia se produce en tu sistema nervioso, en tu corazón y en la coherencia entre lo que piensas, sientes y haces.",
        "Confía en tu voz interior: cuando tú te alineas, el universo entero conspira para respaldar tus creaciones."
      ]
    },
  ];

  const favPhotos = [
    { id: 1, img: "https://i.pinimg.com/1200x/33/5b/7d/335b7d4ae1983c66631cf77ddb494e95.jpg" },
    { id: 2, img: "https://i.pinimg.com/736x/7e/42/1e/7e421e6da02bc22223c28eb178a51a52.jpg" },
    { id: 3, img: "https://i.pinimg.com/736x/2c/ba/ce/2cbace29ae97b4ce0ec94d2ed5c75dae.jpg" },
    { id: 4, img: "https://i.pinimg.com/736x/be/bb/6f/bebb6f930bf36321d1261a6d482504fc.jpg" },
  ];

  const popular = [
    { id: 1, title: "¡Bienvenidas a mi escuela de brujas!!!", date: "08 AGO, 2026", img: "https://i.pinimg.com/736x/0b/7e/ad/0b7ead76833e00d094f29a4a6ceb2ee2.jpg" },
    { id: 2, title: "La noche oscura del alma", date: "24 JUL, 2026", img: "https://i.pinimg.com/736x/69/d1/9a/69d19af474b33dcea6b7d4fc5b5bbfb2.jpg" },
    { id: 3, title: "Física cuántica y brujería", date: "21 JUL, 2026", img: "https://i.pinimg.com/1200x/5f/07/aa/5f07aa657f914f0dfadf96ef6cb91bf3.jpg" },
  ];

  const calendarDays = (() => {
    const dias = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
    const cells = dias.map(d => ({ label: d, color: '#7c2a34', bg: 'transparent', weight: 600 }));
    for (let i = 1; i <= 31; i++) {
      cells.push({ 
        label: String(i), 
        color: i === 17 ? '#fff' : '#5a463c', 
        bg: i === 17 ? '#7c2a34' : 'transparent', 
        weight: i === 17 ? 600 : 400 
      });
    }
    return cells;
  })();

  const badges = [
    { label: "ESCUELA DE BRUJAS" },
    { label: "TAROT DIARIO" },
    { label: "LUNA NUEVA" },
    { label: "MYSTIC RING" },
    { label: "AFILIADAS ✦" },
    { label: "TOP BLOGS" },
  ];

  // Handle Sudoku cell input
  const handleSudokuChange = (index: number, val: string) => {
    if (initialSudoku[index] !== 0) return; // Locked original cell
    const num = parseInt(val);
    const newGrid = [...sudokuGrid];
    if (val === "" || (num >= 1 && num <= 9)) {
      newGrid[index] = val === "" ? "" : num;
      setSudokuGrid(newGrid);
    }
  };

  // Filter posts based on active navigation tab or search
  const filteredPosts = posts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tag.toLowerCase().includes(searchQuery.toLowerCase());
      
    if (!matchesSearch) return false;
    
    if (activeTab === "INICIO") return true;
    if (activeTab === "RITUALES") return post.tag.includes("HECHIZOS") || post.tag.includes("FUNDAMENTOS");
    if (activeTab === "COMUNIDAD") return post.tag.includes("ESCUELA") || post.tag.includes("REFLEXIÓN");
    if (activeTab === "WITCH") return post.tag.includes("GRIMORIO") || post.tag.includes("FUNDAMENTOS") || post.tag.includes("ESCUELA");
    if (activeTab === "BIBLIOTECA") return post.tag.includes("CIENCIA") || post.tag.includes("PREGUNTAS");
    return true;
  });

  const handleAddGuestbook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestMsg.trim()) return;
    setGuestbookList(prev => [
      { name: guestName.trim(), msg: guestMsg.trim(), date: "Justo ahora" },
      ...prev
    ]);
    setGuestName("");
    setGuestMsg("");
    setShowGuestbookModal(false);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail.includes("@")) return;
    setSubscribedSuccess(true);
    setTimeout(() => {
      setSubscribedSuccess(false);
      setShowSubscribeModal(false);
      setSubscribeEmail("");
    }, 2500);
  };

  // Dedicated full-page view for the Witch Test
  if (activeTab === "WITCH") {
    return (
      <WitchTestPage
        onBackToBlog={() => handleTabChange("INICIO")}
        onBackToMain={onBackToMain}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f4ece1] text-[#3a2a24] font-jost antialiased selection:bg-[#e3b8bb] pb-12">
      
      {/* TOP BAR / RETURN NAVIGATION */}
      <div className="w-full bg-[#3a2a24] text-[#f4ece1] px-4 py-2 text-xs flex items-center justify-between border-b border-[#2a1c18]">
        <div className="flex items-center gap-2">
          <span className="text-[#e2c3c6]">✦</span>
          <span className="tracking-wider uppercase font-medium">tarot.anna / blog oficial</span>
        </div>
        {onBackToMain && (
          <button
            onClick={onBackToMain}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#7c2a34] hover:bg-[#a8404c] text-white rounded-full text-[11.5px] transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al inicio</span>
          </button>
        )}
      </div>

      <div className="max-w-[1440px] mx-auto relative px-4 sm:px-8 md:px-12">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row items-center md:items-start justify-between pt-9 pb-5 gap-6 border-b border-[#e2d2bf]/60">
          
          {/* Left: Tagline & Subscribe button */}
          <div className="flex flex-col items-center md:items-start gap-2.5 min-w-[170px] pt-1.5 order-2 md:order-1">
            <button 
              onClick={() => setShowSubscribeModal(true)}
              className="flex items-center gap-2 text-xs tracking-[2px] text-[#7c2a34] hover:text-[#a8404c] font-medium transition-colors cursor-pointer"
            >
              <span>✦</span>
              <span className="underline underline-offset-4">SUSCRÍBETE</span>
            </button>
            <div className="font-caveat text-[22px] leading-tight text-[#a8404c] -rotate-3 max-w-[170px] text-center md:text-left">
              la magia es estrategia en alineación
            </div>
          </div>

          {/* Center: Brand Title */}
          <div className="text-center pt-1 order-1 md:order-2">
            <div className="font-cormorant text-4xl sm:text-5xl md:text-6xl tracking-[6px] text-[#7c2a34] flex items-center justify-center gap-4 font-normal">
              <span>MYSTIC</span>
              <span className="text-[22px] text-[#c98a8f]">✦</span>
              <span>LAB</span>
            </div>
            <div className="text-[11px] tracking-[3px] text-[#8a6a5c] mt-1.5 font-medium uppercase">
              ✦ ARTES ESOTÉRICAS ✦ ESTRATEGIA ✦ TRANSFORMACIÓN ✦
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 pt-2.5 min-w-[170px] justify-center md:justify-end order-3">
            <button 
              onClick={() => setShowSearchModal(true)}
              title="Buscar en el blog"
              className="text-lg text-[#7c2a34] hover:text-[#a8404c] transition-colors p-1.5 cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setShowRitualModal(true)}
              title="Energía lunar"
              className="text-lg text-[#7c2a34] hover:text-[#a8404c] transition-colors p-1.5 cursor-pointer"
            >
              <Moon className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setShowAboutModal(true)}
              title="Sobre Luna"
              className="w-[38px] h-[38px] rounded-full bg-[#e2c3c6] hover:bg-[#d8b0b4] flex items-center justify-center text-base text-[#7c2a34] transition-all cursor-pointer shadow-sm"
            >
              <span>☾</span>
            </button>
          </div>
        </header>

        {/* NAVIGATION BAR */}
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-10 py-4 border-b border-[#e2d2bf] text-[13px] tracking-[1.5px] text-[#5a463c] font-medium">
          {["INICIO", "RITUALES", "COMUNIDAD", "WITCH", "BIBLIOTECA"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`transition-all py-1 cursor-pointer uppercase ${
                activeTab === tab
                  ? "text-[#7c2a34] border-b-2 border-[#7c2a34] font-semibold"
                  : "hover:text-[#7c2a34]"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* ACTIVE SEARCH FILTER INDICATOR */}
        {searchQuery && (
          <div className="mt-4 p-3 bg-[#fbf5ec] border border-[#e2d2bf] rounded-md flex items-center justify-between text-xs text-[#7c2a34]">
            <span>Resultados para: <strong>"{searchQuery}"</strong></span>
            <button 
              onClick={() => setSearchQuery("")}
              className="text-[#5a463c] hover:text-[#7c2a34] underline cursor-pointer"
            >
              Limpiar filtro
            </button>
          </div>
        )}

        {/* MAIN BODY GRID: Posts feed + Right Sidebar */}
        <main className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 pt-8 items-start">

          {/* LEFT / CENTER FEED */}
          <div className="flex flex-col gap-10">

            {/* FEATURED STORY */}
            {activeTab === "INICIO" && !searchQuery && (
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#faf2e5]/40 p-5 rounded-lg border border-[#e2d2bf]/50">
                <div className="relative p-3.5 bg-white shadow-[0_10px_28px_rgba(60,30,20,0.14)] -rotate-1 hover:rotate-0 transition-transform duration-300 rounded-sm">
                  <div className="overflow-hidden rounded-[2px]">
                    <img
                      src={featuredStory.img}
                      alt={featuredStory.title}
                      className="w-full h-[320px] sm:h-[340px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-xs tracking-[2px] text-[#7c2a34] mb-2.5 font-semibold">
                    ✦ {featuredStory.tag}
                  </div>
                  <h2 className="font-cormorant text-3xl sm:text-4xl leading-tight text-[#3a2a24] mb-3.5 font-normal">
                    {featuredStory.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[#5a463c] mb-4">
                    {featuredStory.excerpt}
                  </p>
                  <div>
                    <button
                      onClick={() => setReadingPost(featuredStory)}
                      className="inline-block text-[12.5px] tracking-[1.5px] text-[#7c2a34] hover:text-[#a8404c] border-b border-[#7c2a34] pb-0.5 font-medium transition-colors cursor-pointer"
                    >
                      LEE EL ARTÍCULO →
                    </button>
                  </div>
                </div>
              </section>
            )}

            {/* STORIES GRID (COMPACT CAROUSEL/GRID) */}
            {activeTab === "INICIO" && !searchQuery && (
              <section>
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-cormorant italic text-2xl text-[#3a2a24]">
                    Historias para tu magia + estrategia
                  </h3>
                  <button 
                    onClick={() => setActiveTab("RITUALES")}
                    className="text-[11.5px] tracking-wider text-[#7c2a34] hover:text-[#a8404c] transition-colors cursor-pointer"
                  >
                    VER TODAS →
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                  {stories.map((s) => (
                    <div 
                      key={s.id} 
                      onClick={() => setReadingPost(s)}
                      className="flex flex-col gap-2.5 group cursor-pointer"
                    >
                      <div className="overflow-hidden rounded-md bg-white p-1 shadow-sm border border-[#e2d2bf]/50">
                        <img
                          src={s.img}
                          alt={s.title}
                          className="w-full h-[150px] object-cover rounded-[3px] group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="text-[10.5px] tracking-[1.5px] text-[#7c2a34] font-medium uppercase">
                        {s.tag}
                      </div>
                      <h4 className="font-cormorant text-lg leading-snug text-[#3a2a24] group-hover:text-[#7c2a34] transition-colors">
                        {s.title}
                      </h4>
                      <div className="text-[11.5px] text-[#9a8474]">
                        {s.date}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ELEGANT DIVIDER */}
            <div className="flex items-center gap-4 text-[#c8a4a8]">
              <div className="flex-1 h-[1px] bg-[#e2d2bf]"></div>
              <span className="text-sm">✦ ⚹ ✦</span>
              <div className="flex-1 h-[1px] bg-[#e2d2bf]"></div>
            </div>

            {/* FULL POSTS FEED */}
            <section className="flex flex-col gap-10">
              {filteredPosts.length === 0 ? (
                <div className="p-8 text-center bg-[#fbf5ec] border border-[#e2d2bf] rounded-lg">
                  <p className="text-sm text-[#5a463c]">No se encontraron artículos en esta categoría o con esta búsqueda.</p>
                  <button 
                    onClick={() => { setActiveTab("INICIO"); setSearchQuery(""); }}
                    className="mt-3 px-4 py-1.5 bg-[#7c2a34] text-white rounded text-xs tracking-wider cursor-pointer"
                  >
                    Ver todos los artículos
                  </button>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="flex flex-col gap-3.5 pb-9 border-b border-dashed border-[#ddc6b3]"
                  >
                    <div className="flex gap-2 items-center text-[10.5px] tracking-[1.5px] text-[#7c2a34] font-medium uppercase">
                      <span>{post.tag}</span>
                      <span className="text-[#c8a4a8]">•</span>
                      <span className="text-[#9a8474] font-normal">{post.date}</span>
                    </div>
                    
                    <h3 
                      onClick={() => setReadingPost(post)}
                      className="font-cormorant text-2xl sm:text-3xl leading-snug text-[#3a2a24] hover:text-[#7c2a34] transition-colors cursor-pointer"
                    >
                      {post.title}
                    </h3>
                    
                    <div 
                      onClick={() => setReadingPost(post)}
                      className="overflow-hidden rounded-md bg-white p-1.5 shadow-sm border border-[#e2d2bf]/50 cursor-pointer"
                    >
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-[240px] sm:h-[280px] object-cover rounded-[3px] hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                    
                    <p className="text-sm leading-relaxed text-[#5a463c]">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex justify-between items-center mt-1.5 pt-2">
                      <button
                        onClick={() => setReadingPost(post)}
                        className="text-[12.5px] tracking-wider text-[#7c2a34] hover:text-[#a8404c] border-b border-[#7c2a34] pb-0.5 font-medium transition-colors cursor-pointer"
                      >
                        SEGUIR LEYENDO →
                      </button>
                      <span className="text-xs text-[#9a8474] flex items-center gap-1">
                        <span>✦</span> {post.comments} comentarios
                      </span>
                    </div>
                  </article>
                ))
              )}
            </section>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="flex flex-col gap-6">

            {/* Author Photo */}
            <div className="p-3 bg-white shadow-[0_6px_16px_rgba(60,30,20,0.12)] -rotate-2 rounded-sm border border-[#e2d2bf]/40">
              <img
                src="https://i.pinimg.com/1200x/72/9b/47/729b473c214ea65b0cd532246de244bd.jpg"
                alt="Luna - Autora de Mystic Lab"
                className="w-full h-[220px] object-cover rounded-[2px]"
              />
            </div>

            {/* Author Bio */}
            <div>
              <h4 className="font-cormorant italic text-2xl text-[#7c2a34] mb-1.5">
                hola, soy luna
              </h4>
              <p className="text-[13.5px] leading-relaxed text-[#5a463c]">
                Combino estrategia con ritual, ayudando a creadoras a construir marcas soñadas que se sienten como un hogar.
              </p>
              <button 
                onClick={() => setShowAboutModal(true)}
                className="inline-block mt-2 text-xs tracking-wider text-[#7c2a34] hover:text-[#a8404c] border-b border-[#7c2a34] pb-0.5 cursor-pointer font-medium"
              >
                MÁS SOBRE MÍ →
              </button>
            </div>

            {/* Social Icons */}
            <div>
              <div className="text-[11px] tracking-[1.5px] text-[#8a6a5c] mb-2 font-medium uppercase">
                CONECTA
              </div>
              <div className="flex gap-4 text-base text-[#7c2a34]">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">◍</a>
                <button onClick={() => setShowSubscribeModal(true)} className="hover:scale-110 transition-transform cursor-pointer">▤</button>
                <button onClick={() => setShowTarotModal(true)} className="hover:scale-110 transition-transform cursor-pointer">✦</button>
                <button onClick={() => setShowGuestbookModal(true)} className="hover:scale-110 transition-transform cursor-pointer">✉</button>
              </div>
            </div>

            {/* Sticky Quote Note */}
            <div className="bg-[#faf2e5] border border-[#e6d5c2] p-4 rotate-1 shadow-[0_4px_10px_rgba(60,30,20,0.06)] rounded-sm">
              <div className="font-caveat text-[19px] leading-snug text-[#5a463c]">
                No apresures la magia. Todo lo que necesitas ya se está convirtiendo.
              </div>
            </div>

            {/* Favorite Photos */}
            <div>
              <div className="text-[11px] tracking-[1.5px] text-[#8a6a5c] mb-2 font-medium uppercase">
                MIS FOTOS FAVORITAS
              </div>
              <div className="grid grid-cols-2 gap-2">
                {favPhotos.map((fp) => (
                  <div key={fp.id} className="overflow-hidden rounded-[3px] bg-white p-0.5 border border-[#e2d2bf]/60 shadow-xs">
                    <img
                      src={fp.img}
                      alt="Foto favorita"
                      className="w-full h-[70px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Current Energy Box */}
            <div className="bg-[#fbf5ec] border border-[#e2d2bf] rounded-md p-4 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs tracking-wider text-[#7c2a34] mb-2 font-semibold">
                <span>☾</span> ENERGÍA ACTUAL
              </div>
              <div className="text-sm font-semibold text-[#3a2a24]">
                Luna Nueva en Escorpio
              </div>
              <div className="text-xs text-[#6b5548] leading-relaxed mt-1">
                Suelta. Realinea. Eleva. Trabajo profundo, poder silencioso.
              </div>
              <button 
                onClick={() => setShowRitualModal(true)}
                className="inline-block mt-2 text-[11.5px] tracking-wider text-[#7c2a34] hover:text-[#a8404c] border-b border-[#7c2a34] pb-0.5 cursor-pointer font-medium"
              >
                VER RITUAL →
              </button>
            </div>

            {/* Card of the Day */}
            <div className="bg-[#fbf5ec] border border-[#e2d2bf] rounded-md p-4 shadow-xs">
              <div className="text-xs tracking-wider text-[#7c2a34] mb-2.5 font-semibold text-center">
                ✧ CARTA DEL DÍA ✧
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src="https://i.pinimg.com/736x/22/5a/20/225a20e948a352ae61b77651424096e6.jpg"
                  alt="Carta El Sol"
                  className="w-[56px] h-[90px] object-cover rounded-sm border border-[#e2d2bf] flex-none shadow-sm"
                />
                <div>
                  <div className="text-sm font-bold text-[#3a2a24]">
                    EL SOL
                  </div>
                  <div className="text-xs text-[#6b5548] leading-relaxed mt-1">
                    Éxito, alegría y abundancia. Confía en tu luz y sigue brillando.
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setShowTarotModal(true)}
                className="inline-block mt-2.5 text-[11.5px] tracking-wider text-[#7c2a34] hover:text-[#a8404c] border-b border-[#7c2a34] pb-0.5 cursor-pointer font-medium"
              >
                VER SIGNIFICADO →
              </button>
            </div>

            {/* Witch Test CTA Button */}
            <button
              onClick={() => handleTabChange("WITCH")}
              className="w-full text-center py-3.5 px-4 bg-[#7c2a34] hover:bg-[#963541] text-[#f4ece1] text-[12px] tracking-[1.5px] rounded-full font-medium cursor-pointer btn-glow-wine shadow-sm flex items-center justify-center gap-2"
            >
              <span>🔮</span>
              <span>TESTS MÍSTICOS & ARCANO ✦</span>
            </button>

            {/* Escuela para Brujas Button */}
            <button
              onClick={() => {
                setActiveTab("COMUNIDAD");
                window.scrollTo({ top: 400, behavior: "smooth" });
              }}
              className="w-full text-center py-3 px-4 bg-[#a8404c] text-[#f4ece1] text-[12px] tracking-[1.5px] rounded-full font-medium cursor-pointer hover:bg-[#b84d59] transition-colors shadow-xs"
            >
              ESCUELA PARA BRUJAS ✦
            </button>

            {/* Sudoku Místico */}
            <div className="bg-[#faf2e5] border border-[#e6d5c2] p-3.5 rounded-md shadow-xs">
              <div className="text-[11px] tracking-[1.5px] text-[#8a6a5c] mb-1.5 font-medium uppercase">
                SUDOKU MÍSTICO
              </div>
              <div className="grid grid-cols-6 gap-[2px] text-[10px] text-center text-[#5a463c]">
                {sudokuGrid.map((cell, idx) => {
                  const isLocked = initialSudoku[idx] !== 0;
                  return (
                    <input
                      key={idx}
                      type="text"
                      maxLength={1}
                      value={cell}
                      onChange={(e) => handleSudokuChange(idx, e.target.value)}
                      disabled={isLocked}
                      className={`h-7 w-full text-center border border-[#e6d5c2] outline-none text-xs ${
                        isLocked 
                          ? "bg-white font-bold text-[#3a2a24]" 
                          : "bg-[#fffdfa] text-[#7c2a34] focus:bg-[#f3e6e8]"
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Escuela de Tarot Button */}
            <button
              onClick={() => {
                setShowTarotModal(true);
              }}
              className="w-full text-center py-3.5 px-4 bg-[#a8404c] text-[#f4ece1] text-[12.5px] tracking-[1.5px] rounded-full font-medium cursor-pointer btn-glow-wine shadow-sm"
            >
              ESCUELA DE TAROT ✦
            </button>

            {/* Actualización Cósmica */}
            <div className="bg-[#fbf5ec] border border-[#e2d2bf] rounded-md p-4 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs tracking-wider text-[#7c2a34] mb-2 font-semibold">
                <span>☾</span> ACTUALIZACIÓN CÓSMICA
              </div>
              <div className="text-xs leading-relaxed text-[#5a463c]">
                La energía de hoy: claridad intensa, trabajo de sombra y acción audaz.
              </div>
              <button 
                onClick={() => setShowCosmicModal(true)}
                className="inline-block mt-2 text-[11.5px] tracking-wider text-[#7c2a34] hover:text-[#a8404c] border-b border-[#7c2a34] pb-0.5 cursor-pointer font-medium"
              >
                VER PRONÓSTICO →
              </button>
            </div>

            {/* Now Playing / Playlist */}
            <div className="bg-[#fbf5ec] border border-[#e2d2bf] rounded-md p-4 shadow-xs">
              <div className="text-xs tracking-wider text-[#7c2a34] mb-3 font-semibold">
                SONANDO AHORA ✦
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src="https://i.pinimg.com/1200x/1b/06/2e/1b062e8d288b37b76cdbf5b840eb1e5b.jpg"
                  alt="Playlist Modo Ritual"
                  className="w-[56px] h-[56px] object-cover rounded-md border border-[#e2d2bf] shadow-xs"
                />
                <div>
                  <div className="text-sm font-semibold text-[#3a2a24]">
                    Playlist Modo Ritual
                  </div>
                  <div className="text-[11.5px] text-[#8a6a5c] leading-tight mt-0.5">
                    {tracks[currentTrackIndex]?.name} — {tracks[currentTrackIndex]?.artist}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#e2d2bf] h-1 rounded-full mt-3 overflow-hidden">
                <div 
                  className="bg-[#7c2a34] h-full transition-all duration-300"
                  style={{ width: `${trackProgress}%` }}
                ></div>
              </div>

              {/* Player Controls */}
              <div className="flex justify-center items-center gap-4 my-3 text-base text-[#7c2a34]">
                <button 
                  onClick={() => setCurrentTrackIndex(prev => (prev === 0 ? tracks.length - 1 : prev - 1))}
                  className="hover:scale-110 transition-transform cursor-pointer p-1"
                >
                  <SkipBack className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-7 h-7 rounded-full bg-[#7c2a34] hover:bg-[#a8404c] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                </button>
                <button 
                  onClick={() => setCurrentTrackIndex(prev => (prev === tracks.length - 1 ? 0 : prev + 1))}
                  className="hover:scale-110 transition-transform cursor-pointer p-1"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Track list */}
              <div className="flex flex-col gap-1.5 border-t border-[#e2d2bf] pt-2.5">
                {tracks.map((t, idx) => (
                  <div 
                    key={t.n}
                    onClick={() => {
                      setCurrentTrackIndex(idx);
                      setIsPlaying(true);
                      setTrackProgress(10);
                    }}
                    className={`flex justify-between text-xs py-1 px-1.5 rounded cursor-pointer transition-colors ${
                      currentTrackIndex === idx 
                        ? "bg-[#e2d2bf]/50 text-[#7c2a34] font-medium" 
                        : "text-[#5a463c] hover:bg-[#faf2e5]"
                    }`}
                  >
                    <span>{t.n}. {t.name}</span>
                    <span className="text-[#9a8474]">{t.dur}</span>
                  </div>
                ))}
              </div>
              <a 
                href="https://spotify.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block mt-2.5 text-[11px] tracking-wider text-[#7c2a34] hover:text-[#a8404c] border-b border-[#7c2a34] pb-0.5"
              >
                ABRIR EN SPOTIFY →
              </a>
            </div>

            {/* Popular Posts */}
            <div className="bg-[#fbf5ec] border border-[#e2d2bf] rounded-md p-4 shadow-xs">
              <div className="text-xs tracking-wider text-[#7c2a34] mb-3 font-semibold">
                LO MÁS POPULAR
              </div>
              <div className="flex flex-col gap-3">
                {popular.map((p) => (
                  <div 
                    key={p.id}
                    onClick={() => {
                      const found = posts.find(item => item.id === p.id);
                      if (found) setReadingPost(found);
                    }}
                    className="flex gap-2.5 items-start group cursor-pointer"
                  >
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-11 h-11 object-cover rounded-sm flex-none border border-[#e2d2bf] group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <div className="text-xs leading-snug text-[#3a2a24] group-hover:text-[#7c2a34] transition-colors">
                        {p.title}
                      </div>
                      <div className="text-[10.5px] text-[#9a8474] mt-0.5">
                        {p.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="bg-[#fbf5ec] border border-[#e2d2bf] rounded-md p-4 shadow-xs">
              <div className="text-xs tracking-wider text-[#7c2a34] mb-3 font-semibold text-center">
                AGOSTO 2026
              </div>
              <div className="grid grid-cols-7 gap-1 text-[10.5px] text-center text-[#9a8474]">
                {calendarDays.map((d, i) => (
                  <div
                    key={i}
                    style={{ 
                      color: d.color, 
                      backgroundColor: d.bg, 
                      fontWeight: d.weight 
                    }}
                    className="py-1 rounded-sm"
                  >
                    {d.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Guestbook Widget */}
            <div className="bg-[#fbf5ec] border border-[#e2d2bf] rounded-md p-4 shadow-xs">
              <div className="text-xs tracking-wider text-[#7c2a34] mb-3 font-semibold">
                LIBRO DE VISITAS
              </div>
              <div className="flex flex-col gap-3">
                {guestbookList.slice(0, 3).map((g, i) => (
                  <div 
                    key={i} 
                    className="text-xs leading-relaxed text-[#5a463c] border-l-2 border-[#e2d2bf] pl-2.5"
                  >
                    <span className="text-[#7c2a34] font-semibold">{g.name}:</span> {g.msg}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setShowGuestbookModal(true)}
                className="inline-block mt-3 text-[11px] tracking-wider text-[#7c2a34] hover:text-[#a8404c] border-b border-[#7c2a34] pb-0.5 cursor-pointer font-medium"
              >
                DEJAR UN MENSAJE →
              </button>
            </div>

            {/* Partner Badges */}
            <div>
              <div className="text-[11px] tracking-[1.5px] text-[#8a6a5c] mb-2 font-medium uppercase">
                SITIOS AMIGOS
              </div>
              <div className="flex flex-wrap gap-1.5">
                {badges.map((b, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      if (b.label === "ESCUELA DE BRUJAS") {
                        handleTabChange("WITCH");
                      } else if (b.label === "TAROT DIARIO") {
                        setShowTarotModal(true);
                      } else if (b.label === "LUNA NUEVA") {
                        setShowRitualModal(true);
                      }
                    }}
                    className="w-[88px] h-[31px] bg-[#7c2a34] hover:bg-[#a8404c] text-[#f4ece1] text-[9.5px] flex items-center justify-center text-center tracking-tight rounded-xs cursor-pointer transition-colors shadow-xs"
                  >
                    {b.label}
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </main>

        {/* NEWSLETTER FOOTER */}
        <footer className="mt-14 mb-8 bg-[#7c2a34] text-[#f4ece1] rounded-lg p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-md text-center md:text-left">
            <h3 className="font-cormorant text-3xl font-normal tracking-wide text-white mb-2">
              Únete al Círculo Místico ✦
            </h3>
            <p className="text-xs leading-relaxed text-[#f4ece1]/80">
              Recibe rituales de luna, tiradas colectivas de tarot y notas de estrategia directamente en tu correo cada semana.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="tu.correo@ejemplo.com"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              required
              className="px-4 py-3 bg-[#f4ece1] text-[#3a2a24] rounded text-xs tracking-wider outline-none min-w-[240px]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#3a2a24] hover:bg-[#201410] text-[#f4ece1] text-xs tracking-[1.5px] rounded font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              {subscribedSuccess ? "¡UNIDA CON ÉXITO! ✨" : "ÚNETE ✦"}
            </button>
          </form>
        </footer>

        {/* BOTTOM BRAND FOOTER */}
        <div className="text-center py-6 text-xs text-[#8a6a5c] border-t border-[#e2d2bf]">
          <p>© 2026 MYSTIC LAB • tarot.anna • Todos los derechos reservados.</p>
        </div>

      </div>

      {/* ARTICLE READER MODAL */}
      {readingPost && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#f4ece1] text-[#3a2a24] max-w-2xl w-full max-h-[90vh] rounded-lg shadow-2xl overflow-y-auto border border-[#e2d2bf] relative p-6 sm:p-8">
            <button
              onClick={() => setReadingPost(null)}
              className="absolute top-4 right-4 text-[#7c2a34] hover:text-[#3a2a24] p-1.5 bg-[#fbf5ec] rounded-full border border-[#e2d2bf] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs tracking-[2px] text-[#7c2a34] font-semibold uppercase mb-2">
              ✦ {readingPost.tag}
            </div>

            <h2 className="font-cormorant text-3xl sm:text-4xl text-[#3a2a24] leading-tight mb-4 font-normal">
              {readingPost.title}
            </h2>

            <div className="w-full h-[260px] sm:h-[320px] rounded-md overflow-hidden mb-6 bg-white p-1 border border-[#e2d2bf]">
              <img
                src={readingPost.img}
                alt={readingPost.title}
                className="w-full h-full object-cover rounded-[3px]"
              />
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-[#5a463c] font-jost">
              {readingPost.content ? (
                readingPost.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))
              ) : (
                <p>{readingPost.excerpt}</p>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-[#e2d2bf] flex justify-between items-center text-xs text-[#8a6a5c]">
              <span>Publicado por <strong>Luna</strong></span>
              <button 
                onClick={() => setReadingPost(null)}
                className="px-4 py-2 bg-[#7c2a34] text-white rounded text-xs tracking-wider cursor-pointer hover:bg-[#a8404c]"
              >
                Cerrar lectura
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RITUAL MODAL */}
      {showRitualModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#fbf5ec] text-[#3a2a24] max-w-lg w-full rounded-lg shadow-2xl border border-[#e2d2bf] p-6 sm:p-8 relative">
            <button
              onClick={() => setShowRitualModal(false)}
              className="absolute top-4 right-4 text-[#7c2a34] hover:text-[#3a2a24] p-1.5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center">
              <div className="text-2xl text-[#7c2a34] mb-1">☾</div>
              <h3 className="font-cormorant text-2xl text-[#7c2a34] font-semibold mb-1">
                Ritual de Luna Nueva en Escorpio
              </h3>
              <p className="text-xs text-[#8a6a5c] tracking-wider uppercase mb-4">
                Transmutación profunda y siembra de intenciones
              </p>
            </div>
            <div className="text-xs leading-relaxed text-[#5a463c] space-y-3 font-jost">
              <p><strong>1. Preparación del espacio:</strong> Enciende una vela negra o morada y quema un poco de mirra o romero para limpiar el ambiente de cargas residuales.</p>
              <p><strong>2. Trabajo de sombra:</strong> En una hoja blanca, escribe aquello que estás lista para soltar: miedos, apegos obsoletos o hábitos que frenan tu poder.</p>
              <p><strong>3. Transmutación:</strong> Quema el papel con la llama de la vela (en un cuenco seguro) y visualiza cómo el fuego transforma esas cadenas en ceniza fértil.</p>
              <p><strong>4. Siembra:</strong> En una nueva hoja, escribe tres intenciones sagradas para este ciclo lunar y colócalas bajo un cristal de cuarzo o selenita.</p>
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowRitualModal(false)}
                className="px-6 py-2 bg-[#7c2a34] hover:bg-[#a8404c] text-white rounded text-xs tracking-wider cursor-pointer"
              >
                Entendido ✦
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAROT CARD MODAL */}
      {showTarotModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#fbf5ec] text-[#3a2a24] max-w-md w-full rounded-lg shadow-2xl border border-[#e2d2bf] p-6 text-center relative">
            <button
              onClick={() => setShowTarotModal(false)}
              className="absolute top-4 right-4 text-[#7c2a34] hover:text-[#3a2a24] p-1.5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-[100px] h-[160px] mx-auto overflow-hidden rounded-md border-2 border-[#e2d2bf] shadow-md mb-3">
              <img
                src="https://i.pinimg.com/736x/22/5a/20/225a20e948a352ae61b77651424096e6.jpg"
                alt="El Sol"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-cormorant text-2xl text-[#7c2a34] font-semibold mb-1">
              ARCANO XIX: EL SOL
            </h3>
            <p className="text-xs text-[#8a6a5c] tracking-wider uppercase mb-3">
              Claridad • Éxito • Vitalidad • Verdad
            </p>
            <p className="text-xs leading-relaxed text-[#5a463c] font-jost text-left">
              El Sol anuncia un período de lucidez radiante. Las dudas se disipan y los proyectos que sembraste con paciencia comienzan a florecer a plena vista. Es momento de compartir tus talentos con el mundo sin timidez ni modestia falsa.
            </p>
            <button
              onClick={() => setShowTarotModal(false)}
              className="mt-5 px-6 py-2 bg-[#7c2a34] hover:bg-[#a8404c] text-white rounded text-xs tracking-wider cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* COSMIC UPDATE MODAL */}
      {showCosmicModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#fbf5ec] text-[#3a2a24] max-w-md w-full rounded-lg shadow-2xl border border-[#e2d2bf] p-6 relative">
            <button
              onClick={() => setShowCosmicModal(false)}
              className="absolute top-4 right-4 text-[#7c2a34] hover:text-[#3a2a24] p-1.5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-cormorant text-2xl text-[#7c2a34] font-semibold mb-2">
              Pronóstico Cósmico Semanal
            </h3>
            <p className="text-xs text-[#8a6a5c] tracking-wider uppercase mb-3">
              Agosto 2026 • Clima Astrológico
            </p>
            <div className="text-xs leading-relaxed text-[#5a463c] space-y-2.5 font-jost">
              <p>• <strong>Mercurio en aspecto armónico:</strong> Excelente momento para redactar propuestas, firmar contratos y comunicar tus ideas creativas.</p>
              <p>• <strong>Venus en tránsito inspirador:</strong> Abre tu corazón a colaboraciones sinceras. Atrae proyectos que respeten tu valor auténtico.</p>
              <p>• <strong>Consejo del oráculo:</strong> Prioriza tu descanso mental. No confundas hiperactividad con progreso real.</p>
            </div>
            <button
              onClick={() => setShowCosmicModal(false)}
              className="mt-5 w-full py-2 bg-[#7c2a34] hover:bg-[#a8404c] text-white rounded text-xs tracking-wider cursor-pointer"
            >
              Comprendido ✦
            </button>
          </div>
        </div>
      )}

      {/* ABOUT AUTHOR MODAL */}
      {showAboutModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#f4ece1] text-[#3a2a24] max-w-lg w-full rounded-lg shadow-2xl border border-[#e2d2bf] p-6 sm:p-8 relative">
            <button
              onClick={() => setShowAboutModal(false)}
              className="absolute top-4 right-4 text-[#7c2a34] hover:text-[#3a2a24] p-1.5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex gap-4 items-center mb-4">
              <img
                src="https://i.pinimg.com/1200x/72/9b/47/729b473c214ea65b0cd532246de244bd.jpg"
                alt="Luna"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#7c2a34]"
              />
              <div>
                <h3 className="font-cormorant italic text-2xl text-[#7c2a34]">Luna</h3>
                <p className="text-xs text-[#8a6a5c]">Bruja, estratega y mentora de marcas</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#5a463c] font-jost space-y-2">
              Llevo más de 8 años explorando la intersección entre el pensamiento simbólico, el tarot evolutivo y el diseño de vida consciente. Creo firmemente que la espiritualidad no es evasión, sino el fundamento para tomar decisiones valientes en el mundo real.
            </p>
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setShowAboutModal(false)}
                className="px-5 py-2 bg-[#7c2a34] text-white rounded text-xs tracking-wider cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GUESTBOOK MODAL */}
      {showGuestbookModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#fbf5ec] text-[#3a2a24] max-w-md w-full rounded-lg shadow-2xl border border-[#e2d2bf] p-6 relative">
            <button
              onClick={() => setShowGuestbookModal(false)}
              className="absolute top-4 right-4 text-[#7c2a34] hover:text-[#3a2a24] p-1.5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-cormorant text-2xl text-[#7c2a34] font-semibold mb-1">
              Deja un mensaje en el libro
            </h3>
            <p className="text-xs text-[#8a6a5c] mb-4">
              Comparte tu amor, dudas o intenciones con la comunidad de Mystic Lab.
            </p>
            <form onSubmit={handleAddGuestbook} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#7c2a34] mb-1">Tu nombre o apodo</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Sofia"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#e2d2bf] rounded text-xs outline-none focus:border-[#7c2a34]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#7c2a34] mb-1">Tu mensaje</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Escribe algo bonito..."
                  value={guestMsg}
                  onChange={(e) => setGuestMsg(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#e2d2bf] rounded text-xs outline-none focus:border-[#7c2a34] resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-[#7c2a34] hover:bg-[#a8404c] text-white rounded text-xs font-semibold tracking-wider cursor-pointer transition-colors"
              >
                PUBLICAR MENSAJE ✦
              </button>
            </form>
          </div>
        </div>
      )}

      {/* SEARCH MODAL */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#f4ece1] text-[#3a2a24] max-w-md w-full rounded-lg shadow-2xl border border-[#e2d2bf] p-6 relative">
            <button
              onClick={() => setShowSearchModal(false)}
              className="absolute top-4 right-4 text-[#7c2a34] hover:text-[#3a2a24] p-1.5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-cormorant text-2xl text-[#7c2a34] font-semibold mb-3">
              Buscar en Mystic Lab
            </h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Hechizos, tarot, física cuántica..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="flex-1 px-3.5 py-2.5 bg-white border border-[#e2d2bf] rounded text-xs outline-none focus:border-[#7c2a34]"
              />
              <button
                onClick={() => setShowSearchModal(false)}
                className="px-4 py-2.5 bg-[#7c2a34] text-white rounded text-xs font-semibold cursor-pointer"
              >
                Buscar
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="text-[11px] text-[#8a6a5c] w-full">Temas populares:</span>
              {["Hechizos", "Grimorio", "Altar", "Física cuántica", "Tarot", "Escorpio"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSearchQuery(tag);
                    setShowSearchModal(false);
                  }}
                  className="px-2.5 py-1 bg-[#faf2e5] hover:bg-[#e2d2bf] text-[#7c2a34] rounded text-[11px] cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBSCRIBE MODAL */}
      {showSubscribeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#fbf5ec] text-[#3a2a24] max-w-md w-full rounded-lg shadow-2xl border border-[#e2d2bf] p-6 text-center relative">
            <button
              onClick={() => setShowSubscribeModal(false)}
              className="absolute top-4 right-4 text-[#7c2a34] hover:text-[#3a2a24] p-1.5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-3xl text-[#7c2a34] mb-1">✦</div>
            <h3 className="font-cormorant text-3xl text-[#7c2a34] font-semibold mb-1">
              Círculo de Luna
            </h3>
            <p className="text-xs text-[#5a463c] leading-relaxed mb-4">
              Suscríbete para recibir cada domingo notas de tarot, recetas de hierbas y rituales exclusivos para suscriptoras.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                required
                placeholder="tu.correo@ejemplo.com"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#e2d2bf] rounded text-xs outline-none focus:border-[#7c2a34] text-center"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#7c2a34] hover:bg-[#a8404c] text-white rounded text-xs font-semibold tracking-wider cursor-pointer transition-colors"
              >
                {subscribedSuccess ? "¡UNIDA CON ÉXITO! ✨" : "CONFIRMAR SUSCRIPCIÓN ✦"}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
