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
    description: "Naciste bajo el cobijo del Mago. Posees una asombrosa capacidad canalizadora para tomar ideas creativas directas del éter y materializarlas con éxito en el plano físico. Cuentas innatamente con todos los recursos y herramientas para salir victorioso en cualquier meta que te propongas. Tu camino álmico te guiará y exigirá liderar proyectos ambiciosos, iniciar nuevos capítulos con absoluta confianza e inspirar a los demás. Tu gran lección de evolución radica en domar la dispersión, enfocar tu poderosa fuerza mental en un único propósito noble a la vez, y recordar siempre que tu verdadera magia se activa únicamente cuando actúas con alineación ética y determinación pura."
  },
  2: {
    number: "II",
    name: "La Sacerdotisa",
    keyEnergy: "Intuición mística, sabiduría sagrada y misterio divino",
    image: "https://i.pinimg.com/736x/89/37/ef/8937ef39cd2ad37dfb8eb4962c646b14.jpg",
    description: "Tu vibración natal está regida por la Sacerdotisa, la guardiana silenciosa de los misterios cósmicos y del subconsciente profundo. Eres un canal de alta sensibilidad psíquica e intuición extraordinaria, cuyas corazonadas nunca fallan cuando consigues silenciar el murmullo de la mente racional. Tu camino de vida te invita a explorar dimensiones místicas, a confiar en tus sueños y a comprender los ciclos naturales del universo. Tu lección álmica estriba en aprender a sostener el silencio, a cultivar la paciencia sagrada antes de actuar, y a reconocer que no todas las respuestas deben buscarse afuera; las verdades más grandes reveladas para ti ya residen pacientemente en la inmensidad de tu propio interior."
  },
  3: {
    number: "III",
    name: "La Emperatriz",
    keyEnergy: "Abundancia ilimitada, creación fértil y magnetismo de amor",
    image: "https://i.pinimg.com/736x/60/a4/09/60a40954b9f6eece6cd7c0eaf725bf6e.jpg",
    description: "La Emperatriz colma tu vibración de nacimiento con una hermosa energía de magnetismo, sensualidad divina, creatividad expansiva y gracia natural. Tienes el glorioso don divino de hacer florecer y prosperar todo lo que tocan tus manos, desde proyectos, ideas y hogares, hasta relaciones personales. Eres un alma intensamente amorosa que se nutre del contacto directo con la Madre Tierra y la belleza sensorial. Tu misión de alma en esta encarnación te urge a reclamar con orgullo tu valía personal, a permitirte recibir la abundancia por derecho de nacimiento y a compartir tu calidez y amor incondicional con el mundo, enseñando que la vida es un jardín fértil que florece bajo la compasión."
  },
  4: {
    number: "IV",
    name: "El Emperador",
    keyEnergy: "Estructura material segura, estabilidad sólida y liderazgo protector",
    image: "https://i.pinimg.com/736x/43/fa/cf/43facf0fbbff9fb3cb21182270929285.jpg",
    description: "Bajo la influencia arquitectónica del Emperador, tu camino terrestre está guiado por la creación de orden, la disciplina constructiva y la edificación de bases materiales duraderas. Eres un líder innato, un protector inquebrantable de tu círculo y alguien dotado con la templanza necesaria para materializar imperios en tu vida. Tienes una gran facilidad para organizar ideas caóticas de forma racional y pragmática. Tu principal tarea evolutiva en este viaje consiste en flexibilizar tu mente ante los cambios, equilibrar tu inmensa autoridad racional con la empatía del corazón, y edificar un legado tangible que sirva como un refugio seguro, justo y próspero para los que más amas."
  },
  5: {
    number: "V",
    name: "El Sumo Sacerdote",
    keyEnergy: "Sabiduría ancestral, tutoría espiritual y transmisión de verdades éticas",
    image: "https://i.pinimg.com/736x/07/7a/7b/077a7b827e85c13b2c63ef29feec6859.jpg",
    description: "Posees la profunda vibración espiritual del Sumo Sacerdote (o Hierofante). El camino de la sabiduría superior, el estudio de leyes universales y la transmisión de verdades guía toda tu encarnación. Eres un maestro de almas por excelencia; las personas de manera natural buscarán tu sabio consejo y tu equilibrada perspectiva en sus momentos de duda moral o confusión existencial. Tu sagrado propósito evolutivo es tender un puente de luz entre los conceptos sagrados y la vida cotidiana, liderar con el ejemplo de tus propios valores inquebrantables, y recordar que la verdadera guía espiritual no impone dogmas cerrados, sino que despierta la sabiduría innata de cada individuo."
  },
  6: {
    number: "VI",
    name: "Los Enamorados",
    keyEnergy: "Armonía de relaciones, alineación de valores y elecciones del corazón",
    image: "https://i.pinimg.com/736x/a4/4f/d1/a44fd1db0913f4125b448f2178ee7ea4.jpg",
    description: "Nacer bajo el influjo de Los Enamorados indica que tu vida está profundamente entretejida con las relaciones significativas y la alineación moral con tus valores. A lo largo de tu sendero, te enfrentarás con frecuencia a encrucijadas decisivas donde la clave absoluta para el éxito será decidir siempre desde tu verdad sagrada y el amor propio, nunca desde el miedo o la presión social. Tu gran aprendizaje de alma es nutrir primero tu propia completitud, sanar fracturas internas de rechazo para no proyectarlas en los demás, y aprender a cocrear lazos sagrados de correspondencia, respeto mutuo, crecimiento compartido y belleza inigualable."
  },
  7: {
    number: "VII",
    name: "El Carro",
    keyEnergy: "Fuerza de voluntad implacable, enfoque hacia la victoria y maestría emocional",
    image: "https://i.pinimg.com/736x/51/9a/c0/519ac0b89bf22718e265c1926615b1ea.jpg",
    description: "La energía intrépida del Carro te impulsa a transitar tu destino con una determinación magnífica, coraje indomable y una capacidad asombrosa para el triunfo. Eres un guerrero de luz que sabe sostener con firmeza las riendas de fuerzas contrarias de su vida para dirigirlas de forma armónica hacia metas elevadas. Nada puede apartarte de tu norte cuando tienes claridad. Tu misión primordial estriba en mantener enfocado tu impulso creativo sin distraerte con batallas insignificantes, dominar tus emociones para que sean tu motor en lugar de tu obstáculo, y avanzar con paso firme sabiendo que el éxito verdadero de tu alma ya está garantizado."
  },
  8: {
    number: "VIII",
    name: "La Justicia",
    keyEnergy: "Integridad divina, verdad equilibrada y la ley del karma consciente",
    image: "https://i.pinimg.com/736x/fe/15/0e/fe150eb814bc74d08f36c53e87859c25.jpg",
    description: "Tu vibración cósmica es la de la Justicia, revelando un alma imbuida con un inmenso sentido ético, honestidad implacable y devoción por la verdad. Experimentarás con gran dinamismo y rapidez la ley de causa y efecto de tus actos en este plano material. Tu camino te demandará evaluar los sucesos desde una perspectiva neutral y equilibrada, sin dejarte nublar por impulsos emocionales desmedidos. Tu misión natal radica en actuar siempre con la mayor coherencia e integridad posibles, sanar y resolver dinámicas kármicas estancadas con absoluta imparcialidad, y traer paz, discernimiento objetivo y equilibrio moral al mundo."
  },
  9: {
    number: "IX",
    name: "El Ermitaño",
    keyEnergy: "Linterna del alma, introspección luminosa y sabiduría del silencio",
    image: "https://i.pinimg.com/736x/13/fe/78/13fe78d655f4625b6510e14acc73a97a.jpg",
    description: "Bajo la guía sagrada del Ermitaño, tu existencia está profundamente consagrada al autodescubrimiento y la introspección reflexiva. Eres portador de una hermosa luz interior que sirve de guía a otros cuando transitan sus noches oscuras del alma. Las épocas de soledad o retiro no deben asustarte, ya que en ellas se revelan las mayores verdades de tu evolución. Tu sagrada lección es aprender a madurar con sobriedad espiritual, nutrir tu enorme sabiduría trascendental en la calma del silencio, y compartir de forma humilde y amorosa la luz de tus propias experiencias para disipar la oscuridad del mundo."
  },
  10: {
    number: "X",
    name: "La Rueda de la Fortuna",
    keyEnergy: "Evolución cósmica, sincronicidades del destino y adaptabilidad fluida",
    image: "https://i.pinimg.com/736x/44/22/a9/4422a945b4cbf9b14c1eb25816bb1c23.jpg",
    description: "Tu vibración cósmica rige bajo la Rueda de la Fortuna. Tu vida estará sazonada de dinámicas aceleradas, giros imprevistos y sincronicidades que te recordarán constantemente el carácter cíclico del universo. Tu mayor poder radica en cultivar una profunda adaptabilidad, sabiendo que toda tormenta precede a un renacer soleado. Tu aprendizaje álmico es encontrar tu centro inamovible de paz mientras todo giran a tu alrededor, desapegarte de la ilusión de controlar el plano externo, y aprender a fluir hábilmente con las mareas y corrientes divinas para cabalgar con gracia tu propio destino."
  },
  11: {
    number: "XI",
    name: "La Fuerza",
    keyEnergy: "Coraje silencioso, compasión inquebrantable y domesticación de sombras",
    image: "https://i.pinimg.com/736x/8e/3c/6e/8e3c6eed5be292db2f2eb6e57973d4ee.jpg",
    description: "Nacer bajo el arcano de la Fuerza te obsequia un corazón de oro inquebrantable, dotado con una paciencia infinita y una compasión sanadora. Tu verdadero poder jamás se manifestará a través del control rígido ni la violencia física, sino mediante el hermoso arte de abrazar con amor absoluto tus propios miedos, instintos primarios y sombras interiores. Tu misión en la tierra radica en ser un faro de resiliencia ejemplar, suavizar las tensiones de tu entorno mediante tu presencia pacífica, y guiar a otros a curar sus heridas internas a través del amor incondicional y la dulce aceptación de lo que son."
  },
  12: {
    number: "XII",
    name: "El Colgado",
    keyEnergy: "Pausa mística, rendición sagrada y revelación de nuevas perspectivas",
    image: "https://i.pinimg.com/736x/c5/45/de/c545de4dae19cfc1f7bbaed899c717ca.jpg",
    description: "Bajo el portal vibracional del Colgado, tu evolución requiere que aprendas el sagrado arte del desapego mental y de contemplar la existencia desde una nueva y revolucionaria perspectiva. Tu camino te enseñará que pausar conscientemente no es sinónimo de estancamiento, sino un proceso de alquimia interior que te regala respuestas y visiones sublimes que otros ignoran por apurados. Tu supremo aprendizaje álmico es soltar las luchas inútiles del ego contra la corriente existencial, consagrarte a la fe silenciosa y encontrar la liberación absoluta mediante la rendición y aceptación inteligente."
  },
  13: {
    number: "XIII",
    name: "La Muerte (Transformación)",
    keyEnergy: "Transmutación radical, renacimiento permanente e infinita liberación",
    image: "https://i.pinimg.com/736x/ab/db/18/abdb1839e3650222372f8832a8e8db6b.jpg",
    description: "Bajo el portal cósmico del arcano XIII, eres un transformador espiritual innato. Tienes la asombrosa capacidad de cerrar ciclos viejos y obsoletos para renacer fortalecido desde tus cenizas con una sabiduría renovada. Tu paso por el mundo implica derrumbar hábitos y apegos que frenan la evolución de tu alma y la de tu entorno. Tu misión de alma es enseñarle a la humanidad que los finales nunca son definitivos, sino hermosos pasajes sagrados que limpian el camino para que brote una vida infinitamente más luminosa, vibrante, sana y expansiva."
  },
  14: {
    number: "XIV",
    name: "La Templanza",
    keyEnergy: "Armonía divina, alquimia de polaridades y sanación pacífica",
    image: "https://i.pinimg.com/736x/43/60/c8/4360c8e2289c56baefb6b66dd6f837bd8.jpg",
    description: "La vibración de la Templanza baña tu alma con serenidad, paciencia angelical y una magnífica destreza alquímica para asimilar e integrar opuestos en tu vida. Eres sumamente diplomático y posees el don de calmar dolores emocionales ajenos, armonizar entornos tensos e integrar mentes discordantes en unión amorosa. Tu misión existencial es cultivar y salvaguardar tu paz interior frente a cualquier tempestad externa, fluir a un ritmo pausado y balanceado dictado por el espíritu, y ser el puente que sane las dualidades a través del amor y equilibrio celestial."
  },
  15: {
    number: "XV",
    name: "El Diablo",
    keyEnergy: "Confrontación de la sombra, enorme magnetismo creativo y liberación de prisiones",
    image: "https://i.pinimg.com/736x/b6/c1/96/b6c19634dcc6daae872950ba1e4b85c.jpg",
    description: "El portal vibracional del Diablo te invita a transitar un camino de profundo poder personal, gran magnetismo y exploración honestas de tu mente subconsciente. Tu labor álmica consiste en desmitificar tus miedos internos y dependencias invisibles para reclamar tu libertad absoluta. Tienes un caudal creativo, sexual y terrenal inmenso que debe ser canalizado éticamente hacia propósitos constructivos. Estás aquí para domar las trampas del ego, romper cadenas heredadas o autoinfligidas con humor y sabiduría, y experimentar la abundancia terrenal desde un espacio de desapego cósmico."
  },
  16: {
    number: "XVI",
    name: "La Torre",
    keyEnergy: "Despertar abrupto, caída de falsas estructuras e iluminación súbita",
    image: "https://i.pinimg.com/736x/f6/fd/84/f6fd84587efcc28620800b6f9fe31eff.jpg",
    description: "Nacer bajo el arcano de la Torre indica que tu espíritu posee una fortaleza inigualable para pararse fuerte y renacer tras las tormentas más abruptas de la vida. Las crisis o cambios drásticos que experimentes son sacudidas cuánticas amorosas del universo diseñadas para apartarte de caminos ilusorios que encadenaban tu potencial. Tu gran propósito álmico es demoler las estructuras rígidas del ego, derribar cimientos falsos de orgullo o apariencias, y reconstruir tu realidad sobre bases divinas de absoluta verdad, pureza espiritual y autenticidad indestructible."
  },
  17: {
    number: "XVII",
    name: "La Estrella",
    keyEnergy: "Renovación espiritual, sanación cósmica y esperanza divina inagotable",
    image: "https://i.pinimg.com/736x/6f/30/1e/6f301e742be9b6acb8137f8bfb215886.jpg",
    description: "Tu alma nació cobijada por el divino manto de la Estrella, colmándote con una inmensa fe cósmica, optimismo y un aura rebosante de sanación. Tienes el bellísimo don espiritual de transmitir sosiego de forma inconsciente con solo sonreír o estar presente en vidas afligidas. El universo protege constantemente tus pasos con amor infinito. Tu sagrado propósito terrestre es fluir sin corazas ni máscaras, derramar tu vulnerabilidad transparente sobre el mundo de manera libre, y recordarles a todos que, incluso en las noches más frías, siempre brilla una guía divina."
  },
  18: {
    number: "XVIII",
    name: "La Luna",
    keyEnergy: "Intuición psíquica, conexión profunda con el subconsciente y dotes artísticos",
    image: "https://i.pinimg.com/736x/a3/95/94/a395941c4bd7f8d689620ca94aef4355.jpg",
    description: "La mágica e intrigante energía de la Luna envuelve tu ser natal con un halo de misterio, sueños proféticos, imaginación fértil y destrezas intuitivas incomparables. Posees un canal chamánico directo con los mundos sutiles e invisibles. Tu pasaje de vida requiere que aprendas a navegar la niebla de miedos imaginarios o ilusiones sentimentales para que brille tu impecable claridad psíquica. Tienes dotes artísticos y terapéuticos increíbles; tu misión estriba en sumergirte en las aguas del sentir más íntimo para traer luz y magia consoladora al plano físico."
  },
  19: {
    number: "XIX",
    name: "El Sol",
    keyEnergy: "Éxito radiante, alegría pura e iluminación del sendero propio",
    image: "https://i.pinimg.com/736x/b2/8d/62/b28d62635badc6eb66a0fe3871b0cd98.jpg",
    description: "Bajo la gloriosa influencia cósmica del Sol, tu destino está llamado a brillar con un carisma arrollador, éxito material y un optimismo tan puro que irradia vida y calidez a tu paso. Eres portador de una hermosa inocencia y una gran claridad mental que disuelve de inmediato las mentiras, envidias e hipocresías del plano terrenal. Tu sublime misión consiste en vibrar con alegría espontánea, empoderar generosamente a otros para que reclamen su brillo único, y recordar que la abundancia divina es infinita cuando decidimos vivir con un corazón transparente."
  },
  20: {
    number: "XX",
    name: "El Juicio",
    keyEnergy: "Llamado del alma, despertar de consciencia superior y absolución total",
    image: "https://i.pinimg.com/736x/c4/d7/6e/c4d76ea65a6fc5789bcbf1941ee2bba9.jpg",
    description: "El Juicio rige tu vibración natal de nacimiento. Tu encarnación se caracteriza por despertares espirituales monumentales e imperiosos que te invitan a mudar de piel espiritual constantemente. Estás llamado a sanar heridas ancestrales de tu linaje con sabiduría, perdonar tu pasado por completo y responder al gran llamado de tu vocación álmica superior. Tu propósito cósmico es trascender todos los miedos, sonar tu propia trompeta de revelación interior y ayudar con tu testimonio y luz a la resurrección espiritual de de otros."
  },
  21: {
    number: "XXI",
    name: "El Mundo",
    keyEnergy: "Realización plena, integración holística de lecciones y culminación gloriosa",
    image: "https://i.pinimg.com/736x/5f/85/68/5f8568c0788647efad4b03664dcf2e6c.jpg",
    description: "Tu vibración natal es el Mundo, la cima absoluta y consagrada del trayecto del Tarot. Esto denota un espíritu de alta evolución dotado con un entendimiento holístico y elevado del viaje de la existencia. Gozas de una capacidad especial para integrar lecciones kármicas con suma rapidez y cerrar ciclos existenciales de forma exitosa y victoriosa. Tu sagrado propósito estriba en alcanzar tu plenitud personal en todos los ámbitos, expandir tus fronteras conectando con diferentes culturas del mundo, e irradiar tu completitud pacífica eterna."
  },
  22: {
    number: "XXII",
    name: "El Loco",
    keyEnergy: "Libertad absoluta, salto cuántico de fe y aventura pura del espíritu",
    image: "https://i.pinimg.com/736x/2b/2d/a9/2b2da96a090e8f0003013d3326715fef.jpg",
    description: "Tu vibración natal está impulsada por el indómito espíritu libre del Loco (representando el 0 o el 22). No te asustan los comienzos desde cero ni dar un fabuloso salto de fe hacia lo desconocido sin equipajes pesados que te aten. Tienes un corazón permanentemente joven y espontáneo guiado por un viento celestial que te cuida en cada travesía. Tu misión consiste en recordarnos a todos que la existencia en este planeta es un juego sagrado y maravilloso que se debe transitar con gozo, ligereza y absoluta autenticidad cósmica."
  }
};
