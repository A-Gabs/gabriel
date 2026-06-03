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
    keyEnergy: "Manifestación, poder de voluntad y acción inspirada",
    image: "https://i.pinimg.com/736x/6c/4f/77/6c4f77c5c06fe1dabc19b0d62da562cc.jpg",
    description: "Naciste bajo el signo del Mago. Posees la capacidad natural para tomar ideas del éter y hacerlas tangibles en la tierra. Tienes todos los elementos necesarios (aire, fuego, agua y tierra) a tu disposición para manifestar tus metas. Tu camino te guiará a liderar proyectos, iniciar nuevos capítulos con confianza y recordar siempre que tu fuerza proviene de tu mente y tu enfoque."
  },
  2: {
    number: "II",
    name: "La Sacerdotisa",
    keyEnergy: "Intuición profunda, misterio y sabiduría interior",
    image: "https://i.pinimg.com/736x/89/37/ef/8937ef39cd2ad37dfb8eb4962c646b14.jpg",
    description: "Tu energía de nacimiento es la de la Sacerdotisa, la guardiana de lo oculto y los misterios de la vida. Eres una persona altamente intuitiva con una conexión especial hacia lo invisible. Tu guía interior nunca te falla; tu lección de vida consiste en aprender a escuchar el silencio, confiar en tus corazonadas por encima del ruido externo y saber cuándo esperar pacientemente que el velo del misterio se corra."
  },
  3: {
    number: "III",
    name: "La Emperatriz",
    keyEnergy: "Abundancia, creación consciente y nutrición",
    image: "https://i.pinimg.com/736x/60/a4/09/60a40954b9f6eece6cd7c0eaf725bf6e.jpg",
    description: "La Emperatriz rige tu vibración natal, llenando tu vida de magnetismo, creatividad y abundancia. Tienes un don especial para nutrir ideas, proyectos, plantas o personas y hacerlos florecer. Eres sumamente sensorial y conectas con la belleza de la naturaleza de manera innata. Cree en tu potencial creativo; tu misión de alma consiste en dar vida a nuevas bellezas terrenales compartiendo tu calidez y amor incondicional."
  },
  4: {
    number: "IV",
    name: "El Emperador",
    keyEnergy: "Estructura, autoridad constructiva y estabilidad",
    image: "https://i.pinimg.com/736x/43/fa/cf/43facf0fbbff9fb3cb21182270929285.jpg",
    description: "Bajo la influencia del Emperador, tu camino está guiado por la disciplina, el orden y la creación de bases sólidas. Tienes madera de líder y protector para tu familia o comunidad. Tu aprendizaje consiste en balancear tu gran fuerza organizativa con la flexibilidad. Estás aquí para estructurar tu vida, construir legados estables en el plano material y brindar un refugio seguro a los que amas."
  },
  5: {
    number: "V",
    name: "El Sumo Sacerdote",
    keyEnergy: "Sabiduría tradicional, guía espiritual y aprendizaje",
    image: "https://i.pinimg.com/736x/07/7a/7b/077a7b827e85c13b2c63ef29feec6859.jpg",
    description: "Posees la vibración del Sumo Sacerdote (o Hierofante). El camino del conocimiento, la sabiduría milenaria y la enseñanza guían tu vida. Eres maestro nato; las personas suelen buscar tu consejo y tu perspectiva equilibrada en momentos difíciles. Tu misión te impulsa a conectar lo espiritual con lo racional, a guiar con compasión y a mantener vivos los principios éticos más profundos."
  },
  6: {
    number: "VI",
    name: "Los Enamorados",
    keyEnergy: "Armonía, decisiones del corazón e intimidad verdadera",
    image: "https://i.pinimg.com/736x/a4/4f/d1/a44fd1db0913f4125b448f2178ee7ea4.jpg",
    description: "Tu vibración natal es la de Los Enamorados, indicando que las relaciones significativas y la alineación con tus valores internos rigen tu existencia. Te enfrentarás a encrucijadas de vida donde la clave será elegir siempre desde el corazón y tu verdad ética, no desde el miedo. Tu misión consiste en aprender a amarte primero a ti para poder cocrear lazos armoniosos y sinceros de mutuo crecimiento."
  },
  7: {
    number: "VII",
    name: "El Carro",
    keyEnergy: "Determinación implacable, fuerza de voluntad y triunfo",
    image: "https://i.pinimg.com/736x/51/9a/c0/519ac0b89bf22718e265c1926615b1ea.jpg",
    description: "La energía del Carro te impulsa a avanzar siempre con determinación y enfoque hacia tus metas. Eres una persona resiliente que sabe equilibrar fuerzas opuestas para obtener el triunfo. Aunque encuentres obstáculos en tu ruta, tu fuerza de voluntad te sacará adelante. Tu misión de alma es mantener las riendas de tu vida con claridad y guiar con propósito, sin dejarte desviar por distracciones temporales."
  },
  8: {
    number: "VIII",
    name: "La Justicia",
    keyEnergy: "Verdad objetiva, equilibrio del karma e integridad",
    image: "https://i.pinimg.com/736x/fe/15/0e/fe150eb814bc74d08f36c53e87859c25.jpg",
    description: "Tu energía natal de la Justicia revela que posees un gran sentido ético, integridad y amor por la verdad. Experimentarás la ley cósmica de causa y efecto de manera directa. Tu aprendizaje estriba en mantener la calma y la perspectiva neutral, sopesando las situaciones fríamente. Tienes un alma diseñada para traer balance, equidad y decisiones honestas a este plano terrestre."
  },
  9: {
    number: "IX",
    name: "El Ermitaño",
    keyEnergy: "Luz interior, guía solitaria y autodescrubrimiento",
    image: "https://i.pinimg.com/736x/13/fe/78/13fe78d655f4625b6510e14acc73a97a.jpg",
    description: "Bajo la guía del Ermitaño, tu camino está imbuido por la introspección y la búsqueda de la verdad profunda. Eres una linterna para los demás en tiempos de oscuridad. No le temas a los momentos de soledad, pues de ellos brotan tus comprensiones más valiosas. Tu misión te invita a madurar espiritualmente, alimentar tu sabiduría interior y compartir la luz de tu propia experiencia con el mundo desde un lugar humilde."
  },
  10: {
    number: "X",
    name: "La Rueda de la Fortuna",
    keyEnergy: "Ciclos cósmicos, sincronía y adaptabilidad",
    image: "https://i.pinimg.com/736x/44/22/a9/4422a945b4cbf9b14c1eb25816bb1c23.jpg",
    description: "Tu vibración cósmica es la Rueda de la Fortuna. Tu vida experimentará dinámicas en constante cambio, enseñándote que todo en el universo es cíclico. Tu mayor fortaleza reside en la adaptabilidad y en aprender a centrarte en el eje inamovible de la rueda mientras las circunstancias giran a tu alrededor. Estás aquí para descifrar las sincronías celestiales y fluir con maestría ante el destino."
  },
  11: {
    number: "XI",
    name: "La Fuerza",
    keyEnergy: "Valentía silenciosa, compasión y control de impulsos",
    image: "https://i.pinimg.com/736x/8e/3c/6e/8e3c6eed5be292db2f2eb6e57973d4ee.jpg",
    description: "Tu arcano de nacimiento es la Fuerza. Tienes un corazón inquebrantable revestido de suma ternura y compasión. Comprendes que el verdadero dominio no se logra con violencia ni control externo, sino abrazando silenciosamente tus propias sombras y temores con infinito amor propio. Tu misión natal radica en ser un faro de resiliencia y un bálsamo reconfortante en situaciones desafiantes."
  },
  12: {
    number: "XII",
    name: "El Colgado",
    keyEnergy: "Nuevas perspectivas, pausa sagrada y entrega espiritual",
    image: "https://i.pinimg.com/736x/c5/45/de/c545de4dae19cfc1f7bbaed899c717ca.jpg",
    description: "Bajo el portal vibracional del Colgado, tu camino espiritual requiere que aprendas a rendirte al flujo cósmico y a ver el mundo al revés. No siempre el progreso significa correr aceleradamente; la pausa reflexiva te brindará revelaciones increíbles que otros ignoran. Tu lección de alma consiste en soltar el control y encontrar la libertad plena mediante el desapego y la aceptación consciente."
  },
  13: {
    number: "XIII",
    name: "La Muerte (Transformación)",
    keyEnergy: "Renacimiento, desprendimiento de estructuras y liberación",
    image: "https://i.pinimg.com/736x/ab/db/18/abdb1839e3650222372f8832a8e8db6b.jpg",
    description: "Nacer bajo el arcano XIII indica que eres un agente de evolución natural e infinita transformación. Tienes la habilidad innata de cerrar ciclos viejos con gracia e impulsarte fortalecido hacia el renacimiento. No temas a las transiciones; representas al fénix que purifica lo caduco para dar vida a nuevas experiencias luminosas y vibrantes de tu alma."
  },
  14: {
    number: "XIV",
    name: "La Templanza",
    keyEnergy: "Alquimia personal, balance divino e integración pacífica",
    image: "https://i.pinimg.com/736x/43/60/c8/4360c8e2289c56baefb6b66dd6f837bd8.jpg",
    description: "Rige tu vibración la Templanza, llenando tu alma de calma, diplomacia y talento alquímico para balancear opuestos. Puedes unificar ideas discordantes y sanar estados de ánimo revueltos de forma amorosa. Tu misión vital radica en enseñar serenidad, cultivar un ritmo fluido en tu día a día, y nutrir tu paz interior como el tesoro más resplandeciente frente a cualquier tormenta."
  },
  15: {
    number: "XV",
    name: "El Diablo",
    keyEnergy: "Pasión terrenal, confrontación de sombras y libertad",
    image: "https://i.pinimg.com/736x/b6/c1/96/b6c19634dcc6daae8729505ba1e4b85c.jpg",
    description: "La vibración del Diablo estimula un camino donde conectarás con tu magnetismo terrenal, tu fuerza salvaje y tus límites psicológicos. No debes temerle a esta vibración; su gran regalo es enseñarte a desmitificar tus sombras, romper cadenas de apegos limitantes y sanar tabúes. Estás aquí para domar la ilusión de la mente y vivir tu pasión física y creativa libremente con honestidad cósmica."
  },
  16: {
    number: "XVI",
    name: "La Torre",
    keyEnergy: "Liberación súbita del ego, caída de ilusiones y renacer sólido",
    image: "https://i.pinimg.com/736x/f6/fd/84/f6fd84587efcc28620800b6f9fe31eff.jpg",
    description: "El arcano de la Torre indica que tu vida está marcada por momentos de despertar estrepitoso y sacudidas cuánticas diseñadas para apartarte del camino equivocado rápidamente. Tienes la inmensa fortaleza espiritual para pararte erguido tras el rayo. Tu misión consiste en destruir cimientos viejos e ilusorios del ego y edificar una vida infinitamente auténtica basada en la verdad divina incorruptible."
  },
  17: {
    number: "XVII",
    name: "La Estrella",
    keyEnergy: "Sanación profunda, esperanza divina e inspiración",
    image: "https://i.pinimg.com/736x/6f/30/1e/6f301e742be9b6acb8137f8bfb215886.jpg",
    description: "Naciste cobijado bajo la sublime energía de la Estrella. Eres portador de optimismo cósmico, inspiración y renovación espiritual. Allá donde vayas, dejas un rastro de sosiego y paz sanadora para quienes sufren. Cree firmemente que el universo cuida tu sendero; tu misión divina es fluir libremente con tu autenticidad desnuda, transmitiendo un mensaje de fe absoluta y belleza a la humanidad."
  },
  18: {
    number: "XVIII",
    name: "La Luna",
    keyEnergy: "Emociones de marea, intuición onírica y conexión psíquica",
    image: "https://i.pinimg.com/736x/a3/95/94/a395941c4bd7f8d689620ca94aef4355.jpg",
    description: "La sutil y mágica energía de la Luna envuelve tu ser natal. Tienes un lazo indisoluble con tus sueños, la intuición clarividente, el subconsciente profundo y las artes místicas. Tu pasaje de alma consiste en cruzar la niebla de ansiedades o dudas y encontrar tu luz psíquica. Tienes un corazón chamánico capaz de navegar las profundas aguas de la compasión y el arte expresivo."
  },
  19: {
    number: "XIX",
    name: "El Sol",
    keyEnergy: "Brillo luminoso, alegría infantil pura y éxito radiante",
    image: "https://i.pinimg.com/736x/b2/8d/62/b28d62635badc6eb66a0fe3871b0cd98.jpg",
    description: "Bajo la espectacular vibración del Sol, tu vida está llamada a manifestar abundancia, claridad de juicio y un espléndido optimismo que contagia. Tienes la pureza espiritual de los niños y un carisma de luz que disuelve las mentiras y sombras de forma innata. Tu propósito natal es brillar auténticamente, inspirando con alegría a otros a reconectar con su propia luz cósmica."
  },
  20: {
    number: "XX",
    name: "El Juicio",
    keyEnergy: "Llamado del destino, despertar de consciencia y redención",
    image: "https://i.pinimg.com/736x/c4/d7/6e/c4d76ea65a6fc5789bcbf1941ee2bba9.jpg",
    description: "El Juicio comanda tu vibración de nacimiento. Eres un alma que experimenta llamados espirituales imponentes y transformaciones súbitas hacia caminos más elevados de consciencia. Estás llamado a trascender el pasado, liberarte de viejas culpas o patrones familiares y asumir con orgullo tu verdadera identidad álmica. Estás aquí para sonar tu propia trompeta despertando a otros."
  },
  21: {
    number: "XXI",
    name: "El Mundo",
    keyEnergy: "Realización plena, final exitoso de ciclos e integración celestial",
    image: "https://i.pinimg.com/736x/5f/85/68/5f8568c0788647efad4b03664dcf2e6c.jpg",
    description: "Tu vibración natal es el Mundo, la máxima realización del viaje cósmico del Tarot. Posees una sintonía bendita que te facilita el entendimiento holístico de la vida e integrar lecciones kármicas con madurez exquisita. Estás aquí para culminar grandes propósitos con éxito formidable, viajar, conectar con múltiples planos cósmicos o culturales, e irradiar tu completitud pacífica."
  },
  22: {
    number: "XXII", // Also matches 22 reduction representing El Loco/0
    name: "El Loco",
    keyEnergy: "Salto de fe, libertad infinita e inicios mágicos",
    image: "https://i.pinimg.com/736x/2b/2d/a9/2b2da96a090e8f0003013d3326715fef.jpg",
    description: "Rige tu alma el espíritu libre y sagrado del Loco (vibración 22/0). Eres el eterno viajero cósmico, no te asustan los comienzos puros, los giros inesperados, ni dar un fabuloso salto de fe hacia lo desconocido sin equipajes que te aten. Tu destino destaca por tu frescura, autenticidad inquebrantable y por recordarle al mundo que el juego de la existencia es para disfrutarlo ligeros."
  }
};
