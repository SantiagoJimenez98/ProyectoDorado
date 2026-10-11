// "Base de datos simulada": cada sitio es un objeto con sus campos.
// Para agregar un sitio nuevo, copia un bloque { ... }, cámbiale los datos y listo.
// imagen: nombre del archivo dentro de la carpeta imagenes/ (o null si aún no hay).
const sitios = [
  {
    id: "pipolin",
    nombre: "Centro Turístico Pipolin",
    nombreCorto: "Pipolin",
    imagen: "pipolin.png",
    descripcion: "Es uno de los balnearios más emblemáticos del municipio por combinar piscinas de agua natural con una amplia vista panorámica sobre el llano y el piedemonte.",
    servicios: [
      ["Piscinas de agua natural", "Cuenta con piscinas escalonadas alimentadas por corrientes de agua limpia y natural que bajan de la montaña, acondicionadas para adultos y niños."],
      ["Mirador paisajístico", "Al estar situado en una zona de colina, ofrece un punto de contemplación privilegiado para apreciar el paisaje llanero y los atardeceres."],
      ["Gastronomía criolla", "Servicio de restaurante con platos típicos de la región (mamona/carne a la llanera en días festivos, pescados, sancochos y platos a la carta)."],
      ["Zona de eventos y bar", "Espacios cubiertos tipo kiosco para reuniones familiares, pasadías grupales y venta de bebidas frías."],
      ["Alojamiento", "Dispone de opciones sencillas de hospedaje en habitaciones/cabañas para quienes desean quedarse el fin de semana."]
    ],
    ubicacion: "Ubicado a 100 metros de la cabecera municipal por la vía hacia la vereda La Cumbre. Dirección: Cl 5 #7-24, El Dorado.",
    telefonos: ["313 840 1005"],
    redes: "Instagram: @el_dorado_meta_pipolin_"
  },
  {
    id: "tres-guaduas",
    nombre: "Tres Guaduas: La Playita",
    nombreCorto: "Tres Guaduas",
    imagen: "tresguadas.jpg",
    descripcion: "Tres Guaduas está diseñado bajo un concepto de descanso campestre, aventura y alojamiento. Su propuesta de valor se centra en ofrecer un refugio ideal para fines de semana, combinando la tranquilidad de la naturaleza con opciones de entretenimiento activo para familias y grupos de amigos.",
    tituloServicios: "Instalaciones y servicios",
    servicios: [
      ["Piscina \"tipo playita\"", "Cuenta con una piscina de diseño moderno con entrada en declive suave (estilo playa), ideal para tomar el sol, relajarse y muy segura para los niños."],
      ["Alojamiento en cabañas", "Dispone de cabañas privadas equipadas para pasar la noche, brindando comodidad sin perder el contacto con el entorno natural."],
      ["Cancha de voleibol", "Espacio deportivo al aire libre acondicionado para la diversión y la integración de los visitantes."],
      ["Kiosco con terraza y TV", "Una zona social cómoda y techada para compartir, descansar y disfrutar de programación o eventos deportivos."],
      ["Servicio de cuatrimotos", "Opción de entretenimiento y aventura para añadir un toque de adrenalina a la experiencia campestre."]
    ],
    ubicacion: "Ubicado a unos 800 metros del casco urbano de El Dorado, saliendo por la vía principal que conduce hacia la vereda El Diamante.",
    telefonos: ["321 900 3181"],
    redes: "Instagram: @tresguaduas"
  },
  {
    id: "alto-del-sapo",
    nombre: "El Alto del Sapo",
    nombreCorto: "Alto del Sapo",
    imagen: "altoDelSapo.jpg",
    descripcion: "Reconocido estadero y complejo campestre; un destino muy popular en la región del Ariari gracias a su privilegiado mirador con vistas panorámicas del paisaje llanero, su refrescante piscina de agua natural y una variada oferta de entretenimiento que incluye gastronomía típica criolla, canchas de tejo, billares y opciones tanto de pasadía como de alojamiento para el descanso familiar.",
    servicios: [
      ["Piscina de agua natural", "Su atracción insignia es una refrescante piscina alimentada por fuentes de agua natural, rodeada de vegetación y acondicionada para el disfrute de niños y adultos."],
      ["Mirador y entorno paisajístico", "Gracias a su ubicación elevada en las colinas de la zona, ofrece una vista panorámica privilegiada del paisaje llanero y del entorno natural que rodea a El Dorado."],
      ["Gastronomía y servicio de restaurante", "Ofrece platos típicos de la región y comida criolla, siendo un punto de encuentro ideal para almuerzos familiares o pasadías."],
      ["Recreación y deportes", "Cuenta con canchas de tejo, mesas de billar y espacios para la integración y el entretenimiento."],
      ["Alojamiento y pasadía", "Además de recibir visitantes para pasadías, dispone de opciones de hospedaje y zona de descanso para quienes buscan desconectarse de la rutina durante el fin de semana."]
    ],
    ubicacion: "Ubicado a solo tres minutos del casco urbano de El Dorado, Meta, sobre la vía a la vereda Caño Leche.",
    telefonos: ["313 398 5967"],
    redes: "Facebook: EL ALTO DEL SAPO"
  },
  {
    id: "el-morro",
    nombre: "El Morro",
    nombreCorto: "El Morro",
    imagen: null,
    descripcion: "Destacado mirador turístico y balneario en la región del Ariari por ser un punto elevado estratégico que ofrece impresionantes vistas panorámicas de la Cordillera Oriental, los llanos y los atardeceres de la zona.",
    servicios: [
      ["Mirador paisajístico", "Ofrece una perspectiva privilegiada del piedemonte y las llanuras, siendo un punto muy concurrido para la toma de fotografías y la contemplación del paisaje."],
      ["Entorno natural y balneario", "Cuenta con acceso a fuentes de agua y caños naturales característicos de la vereda Caño Leche para disfrutar de un día de baño y descanso."],
      ["Gastronomía llanera", "Ofrece servicio de restaurante con platos típicos criollos y bebidas para los visitantes que realizan pasadía."]
    ],
    ubicacion: "Ubicado en la vereda Caño Leche del municipio de El Dorado, Meta (siguiendo unos 2 km arriba de la ruta hacia El Alto del Sapo).",
    telefonos: ["302 463 5792"],
    redes: "Facebook: Centro Turístico El Morro - El Dorado, Meta"
  },
  {
    id: "destino-dorado",
    nombre: "Destino Dorado",
    nombreCorto: "Destino Dorado",
    imagen: null,
    descripcion: "Estadero y complejo recreativo campestre muy concurrido por familias y grupos de amigos que buscan un espacio para el descanso, el entretenimiento y el contacto con la naturaleza sin alejarse del pueblo.",
    servicios: [
      ["Piscina de agua natural", "Cuenta con una amplia piscina alimentada por corrientes de agua natural, rodeada de áreas verdes para disfrutar del clima cálido de la región."],
      ["Gastronomía y restaurante", "Ofrece un variado menú con platos típicos de la región llanera, pescados, carnes a la llanera y platos a la carta ideales para un almuerzo de fin de semana."],
      ["Servicio de bar y zonas de descanso", "Áreas con sombra, kioscos y terraza para disfrutar de bebidas frías, cerveza y pasabocas durante la jornada de pasadía."],
      ["Espacios de recreación", "Zonas verdes aptas para juegos, integración familiar, reuniones sociales y eventos privados."]
    ],
    ubicacion: "Ubicado muy cerca del casco urbano, en el sector de la vereda La Esmeralda.",
    telefonos: ["321 461 3668"],
    redes: "Facebook: Destino Dorado El Dorado Meta"
  },
  {
    id: "juanba",
    nombre: "Centro Recreacional JuanBa",
    nombreCorto: "Juanba",
    imagen: null,
    descripcion: "Es uno de los puntos turísticos y de esparcimiento más conocidos en la zona.",
    servicios: [
      ["Cancha de fútbol sintética", "Espacio iluminado para partidos de fútbol 5, campeonatos y alquiler por horas."],
      ["Piscina y pasadía", "Ofrece áreas de piscina para adultos y niños, ideales para refrescarse y pasar un día de integración en un ambiente familiar y campestre."],
      ["Gastronomía y restaurante", "Servicio de restaurante con platos de la región llanera, pescados y opciones a la carta."],
      ["Espacios de esparcimiento", "Zonas techadas, kioscos y espacios para eventos o reuniones grupales."]
    ],
    ubicacion: "Ubicado estratégicamente sobre la vía que conecta al municipio de Cubarral con El Dorado, Meta.",
    telefonos: ["322 344 8115", "310 857 6190"],
    redes: null
  }
];
