// "Base de datos simulada" de los sitios recreativos: un bloque { ... } por sitio.
// Para agregar un sitio nuevo, copia un bloque, cámbiale los datos y listo:
// aparece solo en sitios.html (tarjeta) y en sitio.html?id=... (su página).
//
// id          nombre corto sin espacios ni tildes: va en la dirección (sitio.html?id=pipolin)
// nombre      nombre completo (título de la pestaña, textos alternativos)
// nombreCorto el título grande de su página y de su tarjeta
// subtitulo   línea debajo del título (déjalo "" si no lleva)
// carpeta     carpeta con SUS fotos:  imagenes/sitios/<carpeta>/
// fotos       nombres de las fotos del carrusel, en el orden en que se verán.
//             Si agregas o quitas una foto de la carpeta, hazlo también en esta lista.
// descripcion texto de arriba (admite <strong>negrita</strong>)
// servicios   una tarjeta por cada { titulo, icono, texto }. Puede haber 3, 4, 5, 6...
//             icono = archivo dentro de imagenes/servicios/
// ubicacion   texto que va debajo del mapa
// mapaQuery   lo que busca Google Maps: coordenadas ("3.7390,-73.8350") es lo más exacto
// whatsapp    números SIN espacios (la página agrega el +57). [] si no tiene
// instagram   usuario SIN @ ("" si no tiene)
// facebook    enlace COMPLETO a la página ("" si no tiene)

const sitios = [
  {
    id: "pipolin",
    nombre: "Centro Turístico Pipolin",
    nombreCorto: "Pipolin",
    subtitulo: "Centro Turístico",
    carpeta: "pipolin",
    fotos: ["foto1.jpeg", "foto2.jpeg", "foto3.jpeg", "foto4.jpeg","foto5.jpeg","foto6.jpeg","foto7.jpeg","foto8.jpeg","foto9.jpeg","foto10.jpeg"],
    descripcion: "Es uno de los balnearios más emblemáticos del municipio por combinar piscinas de agua natural con una amplia vista panorámica sobre el llano y el piedemonte.",
    servicios: [
      { titulo: "Piscinas de agua natural", icono: "piscina.png", texto: "Cuenta con piscinas escalonadas alimentadas por corrientes de agua limpia y natural que bajan de la montaña, acondicionadas para adultos y niños." },
      { titulo: "Mirador paisajístico", icono: "mirador.png", texto: "Al estar situado en una zona de colina, ofrece un punto de contemplación privilegiado para apreciar el paisaje llanero y los atardeceres." },
      { titulo: "Gastronomía", icono: "gastronomia.png", texto: "Ofrecemos un variado menú de platos a la carta con las mejores carnes, pechugas y preparaciones tradicionales para disfrutar en familia. Sabor casero y recién preparado para todos los gustos." },
      { titulo: "Zona de eventos y bar", icono: "bebidas.png", texto: "Espacio amplio y cubierto ideal para reuniones familiares, pasadías grupales y celebración de eventos. Cuenta con servicio de bar con venta de cervezas, licores y bebidas frías para acompañar tus mejores momentos." },
      { titulo: "Alojamiento", icono: "cabañas.png", texto: "Dispone de opciones sencillas de hospedaje en habitaciones/cabañas para quienes desean quedarse el fin de semana." }
    ],
    ubicacion: "Ubicado a 100 metros de la cabecera municipal por la vía hacia la vereda La Cumbre. Dirección: Cl 5 #7-24, El Dorado.",
    mapaQuery: "Centro Turístico Pipolin, El Dorado, Meta, Colombia",
    whatsapp: ["3138401005"],
    instagram: "el_dorado_meta_pipolin_",
    facebook: ""
  },
  {
    id: "tres-guaduas",
    nombre: "TresGuaduas: La Playita",
    nombreCorto: "TresGuaduas",
    subtitulo: "La Playita",
    carpeta: "tres-guaduas",
    fotos: ["foto1.png", "foto2.jpeg", "foto3.jpeg", "foto4.jpeg","foto5.jpeg","foto6.jpeg","foto7.jpeg","foto8.jpeg","foto9.jpeg","foto10.jpeg","foto11.jpeg","foto12.png"],
    descripcion: "TresGuaduas está diseñado bajo un concepto de <strong>descanso campestre</strong>, aventura y alojamiento. Su propuesta de valor se centra en ofrecer un refugio ideal para <strong>fines de semana</strong>, combinando la tranquilidad de la naturaleza con opciones de entretenimiento activo para familias y grupos de amigos.",
    servicios: [
      { titulo: "Piscina tipo “playita”", icono: "piscina2.png", texto: "Cuenta con una piscina de diseño moderno con entrada en declive suave (estilo playa), ideal para tomar el sol, relajarse y muy segura para los niños." },
      { titulo: "Cabañas", icono: "cabañas.png", texto: "Dispone de cabañas privadas equipadas para pasar la noche, brindando comodidad sin perder el contacto con el entorno natural. Incluyen jacuzzi privado para un relax total y un pequeño asador BBQ para disfrutar de tus propias preparaciones al aire libre." },
      { titulo: "Cancha de voleibol", icono: "cancha.png", texto: "Espacio deportivo al aire libre acondicionado para el juego, la diversión y la integración de todos nuestros visitantes. Ideal para armar partidos con amigos o disfrutar de un momento activo en familia." },
      { titulo: "Zona de eventos y bar", icono: "bebidas2.png", texto: "El espacio ideal para celebrar cumpleaños, reuniones familiares y eventos privados. Cuenta con un ambiente cómodo y un servicio de bar con deliciosos cócteles, bebidas especiales y cervezas bien frías para brindar en tus mejores fechas." },
      { titulo: "Cuatrimotos", icono: "cuatrimotos.png", texto: "Opción de entretenimiento y aventura para añadir un toque de adrenalina a la experiencia campestre." },
      { titulo: "Gastronomía", icono: "gastronomia2.png", texto: "El lugar ideal para almorzar y picar algo rico durante el día con deliciosos platos a la carta, entradas, picadas para compartir, bebidas refrescantes y snacks para tu día de descanso." }
    ],
    ubicacion: "Ubicado a unos 800 metros del casco urbano de El Dorado, saliendo por la vía principal que conduce hacia la vereda El Diamante.",
    mapaQuery: "Tres Guaduas, El Dorado, Meta, Colombia",
    whatsapp: ["3219003181"],
    instagram: "tresguaduas",
    facebook: ""
  },
  {
    id: "alto-del-sapo",
    nombre: "El Alto del Sapo",
    nombreCorto: "El Alto del Sapo",
    subtitulo: "Centro Turístico",
    carpeta: "alto-del-sapo",
    fotos: ["foto1.jpeg", "foto2.jpeg", "foto3.jpeg", "foto4.jpeg","foto5.jpeg","foto6.jpeg","foto7.jpeg","foto8.jpeg","foto9.jpeg","foto10.jpeg"],
    descripcion: "Reconocido estadero y complejo campestre; un destino muy popular en la región del Ariari gracias a su privilegiado mirador con vistas panorámicas del paisaje llanero, su refrescante piscina de agua natural y una variada oferta de entretenimiento que incluye gastronomía típica criolla, canchas de tejo, billares y opciones tanto de pasadía como de alojamiento para el descanso familiar.",
    servicios: [
      { titulo: "Piscina de agua natural", icono: "piscina3.png", texto: "Su atracción insignia es una refrescante piscina alimentada por fuentes de agua natural, rodeada de vegetación y acondicionada para el disfrute de niños y adultos." },
      { titulo: "Mirador y entorno paisajístico", icono: "mirador2.png", texto: "Gracias a su ubicación elevada en las colinas de la zona, ofrece una vista panorámica privilegiada del paisaje llanero y del entorno natural que rodea a El Dorado." },
      { titulo: "Gastronomía y servicio de restaurante", icono: "gastronomia3.png", texto: "Ofrece platos típicos de la región y comida criolla, siendo un punto de encuentro ideal para almuerzos familiares o pasadías." },
      { titulo: "Recreación y deportes", icono: "recreacion.png", texto: "Cuenta con canchas de tejo, mesas de billar y espacios para la integración y el entretenimiento." },
      { titulo: "Alojamiento y pasadía", icono: "cabañas.png", texto: "Además de recibir visitantes para pasadías, dispone de opciones de hospedaje y zona de descanso para quienes buscan desconectarse de la rutina durante el fin de semana." }
    ],
    ubicacion: "Ubicado a solo tres minutos del casco urbano de El Dorado, Meta, sobre la vía a la vereda Caño Leche.",
    mapaQuery: "El Alto del Sapo, El Dorado, Meta, Colombia",
    whatsapp: ["3133985967"],
    instagram: "elaltodelsapo",
    facebook: ""   // pendiente: pegar el enlace de la página de Facebook (EL ALTO DEL SAPO)
  },
  {
    id: "el-morro",
    nombre: "El Morro",
    nombreCorto: "El Morro",
    subtitulo: "Centro Recreacional",
    carpeta: "el-morro",
    fotos: ["foto1.jpeg", "foto2.jpeg", "foto3.jpeg", "foto4.jpeg","foto5.jpeg","foto6.jpeg","foto7.jpeg","foto8.jpeg","foto9.jpeg","foto10.jpeg"],
    descripcion: "Destacado mirador turístico y balneario en la región del Ariari por ser un punto elevado estratégico que ofrece impresionantes vistas panorámicas de la Cordillera Oriental, los llanos y los atardeceres de la zona.",
    servicios: [
      { titulo: "Piscina de agua natural", icono: "piscina5.png", texto: "El espacio preferido por los visitantes: una amplia piscina de agua natural rodeada de un hermoso paisaje. Diseñada con zonas aptas para toda la familia, ideal para refrescarse, jugar y descansar bajo el sol." },
      { titulo: "Mirador paisajístico", icono: "mirador3.png", texto: "Ofrece una perspectiva privilegiada del piedemonte y las llanuras, siendo un punto muy concurrido para la toma de fotografías y la contemplación del paisaje." },
      { titulo: "Alojamiento", icono: "cabañas.png", texto: "Descansa en una moderna cabaña campestre rodeada de verde y aire puro. Con un diseño tipo A muy acogedor y una vista panorámica al horizonte, es el lugar perfecto para pasar la noche, relajarse y recargar energías lejos del ruido de la ciudad."},
      { titulo: "Gastronomía llanera", icono: "gastronomia4.png", texto: "Disfruta de una deliciosa experiencia gastronómica durante tu visita. Cuenta con una variedad de platos típicos criollos y bebidas frías, pensados para recargar energías y disfrutar al máximo de tu pasadía." }
    ],
    ubicacion: "Ubicado en la vereda Caño Leche del municipio de El Dorado, Meta (junto a El Alto del Sapo).",
    mapaQuery: "El Morro, El Dorado, Meta, Colombia",
    whatsapp: ["3024635792"],
    instagram: "el_morro_dorado",
    facebook: ""   // pendiente: pegar el enlace de la página de Facebook (Centro Turístico El Morro - El Dorado, Meta)
  },
  {
    id: "destino-dorado",
    nombre: "Destino Dorado",
    nombreCorto: "Destino Dorado",
    subtitulo: "Centro Turístico",
    carpeta: "destino-dorado",
    fotos: ["foto1.jpeg", "foto2.jpeg", "foto3.jpeg", "foto4.jpeg","foto5.jpeg","foto6.jpeg","foto7.jpeg","foto8.jpeg","foto9.jpeg","foto10.jpeg"],
    descripcion: "Un acogedor espacio de tradición campestre, ideal para compartir en familia y con amigos. El destino perfecto para disfrutar de un pasadía lleno de integración, descanso y buen ambiente a solo unos minutos del pueblo.",
    servicios: [
      { titulo: "Piscina de agua natural", icono: "piscina4.png", texto: "Cuenta con una amplia piscina alimentada por corrientes de agua natural, rodeada de áreas verdes para disfrutar del clima cálido de la región." },
      { titulo: "Mirador paisajístico", icono: "mirador4.png", texto: "Situado en la cima de la colina, regala una panorámica majestuosa e ininterrumpida de todo el llano. Una parada obligatoria para quienes buscan la mejor postal de su pasadía y atardeceres memorables." },
      { titulo: "Gastronomía y restaurante", icono: "gastronomia5.png", texto: "Disfruta de una excelente variedad de platos a la carta y preparaciones tradicionales pensadas para complacer a todos los gustos. El complemento ideal para compartir a la mesa durante tu pasadía de fin de semana." },
      { titulo: "Espacios de recreación", icono: "recreacion2.png", texto: "Zonas verdes aptas para juegos, integración familiar, reuniones sociales y eventos privados." }
    ],
    ubicacion: "Ubicado cerca del casco urbano, en el sector de la vereda La Esmeralda.",
    mapaQuery: "Destino Dorado, El Dorado, Meta, Colombia",
    whatsapp: ["3209136651"],
    instagram: "",
    facebook: ""   // pendiente: pegar el enlace de la página de Facebook (Destino Dorado El Dorado Meta)
  },
  {
    id: "juanba",
    nombre: "Centro Recreacional JuanBa",
    nombreCorto: "Juanba",
    subtitulo: "Centro Recreacional",
    carpeta: "juanba",
    fotos: ["foto1.jpeg", "foto2.jpeg", "foto3.jpeg", "foto4.jpeg","foto5.jpeg","foto6.jpeg","foto7.jpeg","foto8.jpeg","foto9.jpeg","foto10.jpeg"],
    descripcion: "Un espacio único diseñado para la integración, la diversión y la alegría de grandes y chicos. Ven a vivir pasadías memorables llenos de energía, tradición y momentos de relajación al aire libre. El lugar donde el deporte, el buen sabor y las celebraciones se unen para crear recuerdos para siempre.",
    servicios: [
      { titulo: "Cancha de fútbol sintética", icono: "futbol.png", texto: "Espacio iluminado para partidos de fútbol 5, campeonatos y alquiler por horas." },
      { titulo: "Piscina y pasadía", icono: "piscina6.png", texto: "Ofrece áreas de piscina para adultos y niños, ideales para refrescarse y pasar un día de integración en un ambiente familiar y campestre." },
      { titulo: "Gastronomía y restaurante", icono: "gastronomia6.png", texto: "Disfruta del auténtico sabor de nuestra tierra con el servicio de restaurante. Ofrecemos la tradicional carne a la llanera preparada con la mejor sazón y una variada selección de platos a la carta para deleitar a toda la familia." },
      { titulo: "Espacios de esparcimiento", icono: "recreacion3.png", texto: "Un rincón diseñado para la integración y la diversión de todas las edades. Disfruta de un ambiente de esparcimiento único equipado con mesas de billar, canchas de tejo y bolirana para los adultos, además de un saltarín donde los más pequeños podrán jugar y divertirse en total seguridad." },
      { titulo: "Zona de Eventos", icono: "eventos.png", texto: "El escenario ideal para convertir tus momentos especiales en recuerdos inolvidables. Ofrecemos espacios acondicionados para la realización de cumpleaños, grados, matrimonios, reuniones familiares y todo tipo de celebraciones privadas en un ambiente único y acogedor." }
    ],
    ubicacion: "Ubicado estratégicamente sobre la vía que conecta al municipio de Cubarral con El Dorado, Meta.",
    mapaQuery: "Centro Recreacional JuanBa, El Dorado, Meta, Colombia",
    whatsapp: ["3504423144", "3114648335"],
    tiktok: "juanbacentrorecreacional"
  }
];
