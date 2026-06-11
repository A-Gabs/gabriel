export interface ArcanoInfo {
  number: string;
  name: string;
  keyEnergy: string;
  image: string;
  description: string;
}

export const ARCANOS_DATA: Record<number, ArcanoInfo> = {
  1: {
    number: "I",
    name: "El Mago",
    keyEnergy: "Manifestación, voluntad divina y potencial creador",
    image: "https://i.pinimg.com/736x/6c/4f/77/6c4f77c5c06fe1dabc19b0d62da562cc.jpg",
    description: "Eres una persona con una facilidad tremenda para pasar de la idea a la acción. Tienes iniciativa nata, eres ingenioso/a y cuando te propones algo, buscas los recursos de donde sea para lograrlo. Tu desafío práctico es no aburrirte ni dejar las cosas a medias por falta de constancia."
  },
  2: {
    number: "II",
    name: "La Sacerdotisa",
    keyEnergy: "Intuición mística, sabiduría sagrada y misterio divino",
    image: "https://i.pinimg.com/736x/89/37/ef/8937ef39cd2ad37dfb8eb4962c646b14.jpg",
    description: "Tu intuición es como un superpoder: casi siempre sabes cuándo una situación no cuadra o cuándo alguien te oculta algo. Eres reservado/a, sabes guardar secretos y prefieres observar antes de actuar. Tu reto práctico es confiar más en tus corazonadas y no dudar tanto de tus propios instintos para evitar bloquearte."
  },
  3: {
    number: "III",
    name: "La Emperatriz",
    keyEnergy: "Abundancia ilimitada, creación fértil y magnetismo de amor",
    image: "https://i.pinimg.com/736x/60/a4/09/60a40954b9f6eece6cd7c0eaf725bf6e.jpg",
    description: "Irradias carisma, calidez y tienes una capacidad natural para hacer que cualquier lugar o proyecto se sienta más vivo, estético y acogedor. Te encanta disfrutar de las cosas buenas de la vida y eres súper creativo/a. Tu lección práctica es aprender a recibir el cariño de los demás y cosechar tus frutos sin culpa, sabiendo que te los mereces de verdad."
  },
  4: {
    number: "IV",
    name: "El Emperador",
    keyEnergy: "Estructura material segura, estabilidad sólida y liderazgo protector",
    image: "https://i.pinimg.com/736x/43/fa/cf/43facf0fbbff9fb3cb21182270929285.jpg",
    description: "Para ti, el orden, la estructura y la estabilidad son fundamentales. Tienes mucha constancia, sabes organizar a las personas y actúas como el protector natural de tu entorno. Tu desafío práctico diario es flexibilizar un poco las reglas y entender que controlar todo es imposible: deja espacio para la espontaneidad y los errores ajenos."
  },
  5: {
    number: "V",
    name: "El Sumo Sacerdote",
    keyEnergy: "Sabiduría ancestral, tutoría espiritual y transmisión de verdades éticas",
    image: "https://i.pinimg.com/736x/07/7a/7b/077a7b827e85c13b2c63ef29feec6859.jpg",
    description: "Eres el consejero natural al que todos van a buscar cuando necesitan una perspectiva madura u objetiva sobre sus vidas. Tienes un profundo sentido ético y te encanta aprender y compartir conocimiento. Tu lección práctica es actuar siempre con el ejemplo de tus palabras, y evitar dogmas estrictos para resolver tus dilemas del día a día."
  },
  6: {
    number: "VI",
    name: "Los Enamorados",
    keyEnergy: "Armonía de relaciones, alineación de valores y elecciones del corazón",
    image: "https://i.pinimg.com/736x/a4/4f/d1/a44fd1db0913f4125b448f2178ee7ea4.jpg",
    description: "Vives y decides desde el corazón, buscando siempre la armonía en tus relaciones. Las grandes encrucijadas de tu vida te obligarán a elegir pensando en lo que tú realmente quieres, no en lo que la gente espera de ti. Tu reto práctico es cultivar primero el amor propio y tomar decisiones firmes sin vacilar por miedo al conflicto."
  },
  7: {
    number: "VII",
    name: "El Carro",
    keyEnergy: "Fuerza de voluntad implacable, enfoque hacia la victoria y maestría emocional",
    image: "https://i.pinimg.com/736x/51/9a/c0/519ac0b89bf22718e265c1926615b1ea.jpg",
    description: "Cuando te pones un objetivo entre ceja y ceja, nadie puede detenerte. Tienes una fuerza de voluntad y una resiliencia brutales para salir adelante ante cualquier bache. Tu tarea de vida práctica es aprender a encauzar esa enorme energía competitiva y activa sin apresurarte ni atropellar tus propios procesos por el ansia de llegar rápido."
  },
  8: {
    number: "VIII",
    name: "La Justicia",
    keyEnergy: "Integridad divina, verdad equilibrada y la ley del karma consciente",
    image: "https://i.pinimg.com/736x/fe/15/0e/fe150eb814bc74d08f36c53e87859c25.jpg",
    description: "Detestas la hipocresía y buscas siempre actuar con honestidad, objetividad y balance en cada aspecto de tu vida. Eres muy coherente y racional. Notarás que en tu vida todo lo que das regresa a ti muy rápido. Tu reto práctico es no ser tan blanco o negro en tus juicios; la compasión, la empatía y los términos medios son necesarios."
  },
  9: {
    number: "IX",
    name: "El Ermitaño",
    keyEnergy: "Linterna del alma, introspección luminosa y sabiduría del silencio",
    image: "https://i.pinimg.com/736x/13/fe/78/13fe78d655f4625b6510e14acc73a97a.jpg",
    description: "Aprecias muchísimo tu espacio personal y tus momentos a solas para pensar con claridad y recargar energía. Hay una madurez interna muy bonita en ti que sirve de guía silenciosa a otros. Tu lección cotidiana es no encerrarte en tu propia mente ni aislarte demasiado del mundo; recuerda compartir activamente lo que sabes."
  },
  10: {
    number: "X",
    name: "La Rueda de la Fortuna",
    keyEnergy: "Evolución cósmica, sincronicidades del destino y adaptabilidad fluida",
    image: "https://i.pinimg.com/736x/44/22/a9/4422a945b4cbf9b14c1eb25816bb1c23.jpg",
    description: "Tu vida tiene un ritmo súper dinámico, lleno de giros imprevistos, cambios de escenario y casualidades increíbles. Tu mayor fortaleza práctica es tu capacidad de adaptarte a cualquier marea. Tu reto es aprender a mantener la calma en el centro del huracán sin intentar forzar o controlar cosas que dependen del tiempo."
  },
  11: {
    number: "XI",
    name: "La Fuerza",
    keyEnergy: "Coraje silencioso, compasión inquebrantable y domesticación de sombras",
    image: "https://i.pinimg.com/736x/8e/3c/6e/8e3c6eed5be292db2f2eb6e57973d4ee.jpg",
    description: "Tu gran poder no proviene de la confrontación, las discusiones o los gritos, sino de un autocontrol y una paciencia silenciosas admirables. Sabes modular tus impulsos y domesticar tus inseguridades con amor. Tu misión terrenal es ser un ejemplo de resiliencia y templar las tensiones de tu entorno a través de la empatía."
  },
  12: {
    number: "XII",
    name: "El Colgado",
    keyEnergy: "Pausa mística, rendición sagrada y revelación de nuevas perspectivas",
    image: "https://i.pinimg.com/736x/c5/45/de/c545de4dae19cfc1f7bbaed899c717ca.jpg",
    description: "A veces sientes que las cosas se pausan o se detienen en seco en tu vida, pero es para que aprendas a ver la realidad desde otra perspectiva. Tienes un lado muy generoso. Tu aprendizaje práctico es dejar ir el control obstinado, fluir con los tiempos naturales y descubrir que parar de vez en cuando no es perder tiempo, sino ganar claridad."
  },
  13: {
    number: "XIII",
    name: "La Muerte (Transformación)",
    keyEnergy: "Transmutación radical, renacimiento permanente e infinita liberación",
    image: "https://i.pinimg.com/736x/ab/db/18/abdb1839e3650222372f8832a8e8db6b.jpg",
    description: "Eres un catalizador de cambios por naturaleza. Tienes una resiliencia genial para cerrar etapas del pasado que ya no te sirven y reinventarte desde las cenizas de manera más íntegra. Tu reto práctico es perderle el miedo a los finales y entender que cada cierre de ciclo libera espacio para cosas infinitamente mejores y más frescas."
  },
  14: {
    number: "XIV",
    name: "La Templanza",
    keyEnergy: "Armonía divina, alquimia de polaridades y sanación pacífica",
    image: "https://i.pinimg.com/736x/43/60/c8/4360c8e2289c56baefb6b66dd6f837bd8.jpg",
    description: "Tienes una gran facilidad para traer equilibrio, reconciliación y paz mental a situaciones tensas o relaciones complicadas. Sabes balancear tus emociones y asimilar opuestos con suavidad. Tu reto de vida práctico es proteger tu propia calma interior frente a las prisas del día a día, fluyendo a tu propio compás saludable."
  },
  15: {
    number: "XV",
    name: "El Diablo",
    keyEnergy: "Confrontación de la sombra, enorme magnetismo creativo y liberación de prisiones",
    image: "https://i.pinimg.com/736x/b6/c1/96/b6c19634dcc6daae872950ba1e4b85c.jpg",
    description: "Irradias un magnetismo, carisma y fuerza de atracción gigantescos. Tienes un lado súper decidido, pasional e inteligente para manejar el plano material y tus finanzas. Tu tarea práctica es cuidar que ese fuego interno no se convierta en dependencia, obsesiones o ganas de control: disfruta de la vida con total libertad."
  },
  16: {
    number: "XVI",
    name: "La Torre",
    keyEnergy: "Despertar abrupto, caída de falsas estructuras e iluminación súbita",
    image: "https://i.pinimg.com/736x/f6/fd/84/f6fd84587efcc28620800b6f9fe31eff.jpg",
    description: "Posees una fortaleza asombrosa para levantarte más fuerte de cualquier crisis repentina o cambio brusco. Las sacudidas inesperadas en tu vida son para limpiarte de situaciones o relaciones ilusorias que ya no te aportaban nada. Tu reto práctico es no aferrarte a lo obsoleto y aprender a soltar para reconstruir verdades duraderas."
  },
  17: {
    number: "XVII",
    name: "La Estrella",
    keyEnergy: "Renovación espiritual, sanación cósmica y esperanza divina inagotable",
    image: "https://i.pinimg.com/736x/6f/30/1e/6f301e742be9b6acb8137f8bfb215886.jpg",
    description: "Tienes una hermosa energía optimista, fe en tu futuro y un aura de sanación que reconforta de forma natural a quienes te rodean. La gente se siente muy inspirada por tu transparencia. Tu tarea diaria es fluir sin corazas ni máscaras, y recordar que, pase lo que pase, tu vida tiene un propósito seguro y alegre."
  },
  18: {
    number: "XVIII",
    name: "La Luna",
    keyEnergy: "Intuición psíquica, conexión profunda con el subconsciente y dotes artísticos",
    image: "https://i.pinimg.com/736x/a3/95/94/a395941c4bd7f8d689620ca94aef4355.jpg",
    description: "Tienes un mundo interno súper rico, una imaginación desbordante y una sensibilidad artística increíble. Captas de inmediato cuando un ambiente está pesado o las emociones de otros cambian. Tu lección práctica es no dejar que los miedos imaginarios o las dudas paralicen tus acciones: guíate por tu impecable intuición."
  },
  19: {
    number: "XIX",
    name: "El Sol",
    keyEnergy: "Éxito radiante, alegría pura e iluminación del sendero propio",
    image: "https://i.pinimg.com/736x/b2/8d/62/b28d62635badc6eb66a0fe3871b0cd98.jpg",
    description: "Tu carisma, alegría sincera y sencillez llenan de luz cualquier lugar en el que estás. Eres transparente, noble y muy asertivo/a. Tu gran lección consiste en compartir generosamente tu energía con el mundo empoderando a otros a brillar, viviendo siempre desde la honestidad y la autenticidad total."
  },
  20: {
    number: "XX",
    name: "El Juicio",
    keyEnergy: "Llamado del alma, despertar de consciencia superior y absolución total",
    image: "https://i.pinimg.com/736x/c4/d7/6e/c4d76ea65a6fc5789bcbf1941ee2bba9.jpg",
    description: "Vives despertares interiores muy importantes que te invitan a reinventar tus metas con frecuencia. Sabes perdonar, sanar dinámicas del pasado de tu entorno o familiares y reinventarte. Tu propósito práctico es responder a tu vocación de vida sin miedo a las críticas u opiniones del 'qué dirán'."
  },
  21: {
    number: "XXI",
    name: "El Mundo",
    keyEnergy: "Realización plena, integración holística de lecciones y culminación gloriosa",
    image: "https://i.pinimg.com/736x/5f/85/68/5f8568c0788647efad4b03664dcf2e6c.jpg",
    description: "Tienes una visión global, madura y completa de las cosas. Sabes integrar tus experiencias pasadas para cerrar ciclos con éxito absoluto y avanzar con paso firme al siguiente nivel de tu vida personal y laboral. Tu reto diario es celebrar cada logro alcanzado y expandir tus fronteras sin timidez."
  },
  22: {
    number: "XXII",
    name: "El Loco",
    keyEnergy: "Libertad absoluta, salto cuántico de fe y aventura pura del espíritu",
    image: "https://i.pinimg.com/736x/2b/2d/a9/2b2da96a090e8f0003013d3326715fef.jpg",
    description: "Amas la libertad absoluta y no temes empezar de cero con tal de seguir tus impulsos auténticos. Eres espontáneo/a, de mente muy abierta y te tomas la vida con una ligereza saludable. Tu reto diario es equilibrar ese hermoso entusiasmo por lo nuevo con un mínimo de planeación práctica para pisar bien firme."
  }
};
