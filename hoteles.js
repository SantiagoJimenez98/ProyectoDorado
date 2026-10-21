// "Base de datos simulada" de hoteles. Mismo patrón que sitios en datos.js:
// un objeto por hotel. Para agregar uno nuevo, copia un bloque { ... }.
//
// FOTOS: cada hotel tiene su propia carpeta dentro de imagenes/hoteles/
//   carpeta: el nombre exacto de esa carpeta
//   fotos:   lista con el nombre de cada foto, en el orden en que se verán
//            (la primera es la que aparece al abrir la página)
// Si agregas o quitas una foto de la carpeta, agrégala o quítala también de
// esta lista: el navegador no puede "leer" una carpeta por sí solo.
//
// mapaQuery: lo que va después de "q=" en el link de Google Maps
// (coordenadas o el nombre del lugar).

const hoteles = [
  {
    id: "hotel-fortuna",
    nombre: "Hotel Casa La Fortuna",
    carpeta: "hotelFortuna",
    fotos: ["foto1.jpeg", "foto2.jpeg", "foto3.jpeg", "foto4.jpeg", "foto5.jpeg", "foto6.jpeg"],
    descripcion: "Con más de 10 años de trayectoria, el Hotel Boutique Casa La Fortuna ofrece un ambiente acogedor y un excelente servicio personalizado en El Dorado, Meta.<br><br>Cuenta con 9 exclusivas habitaciones ideales para el descanso.<br><br><strong>Contacto:</strong> 3133926772 - 3223506259<br><strong>Dirección:</strong> Carrera 7 # 9 - 36",
    ubicacion: "Carrera 7 # 9 - 36, El Dorado, Meta, Colombia",
    mapaQuery: "Hotel Casa La Fortuna, El Dorado, Meta, Colombia"
  },
  {
    id: "hotel-marce",
    nombre: "Marce Hotel",
    carpeta: "hotelMarce",
    fotos: ["foto1.jpeg", "foto2.jpeg", "foto3.jpeg", "foto4.jpeg", "foto5.jpeg", "foto6.jpeg"],
    descripcion: "Marce Hotel combina sencillez, elegancia y calidez para ofrecerte una estancia tranquila e inolvidable.<br><br>Cuenta con espacios cómodos y una atención cercana pensada para hacerte sentir como en casa desde el primer momento.<br><br><strong>Contacto:</strong> 3133339156 - 3138517985<br><strong>Dirección:</strong> Carrera 4 # 8 - 63",
    ubicacion: "Carrera 4 # 8 - 63, El Dorado, Meta, Colombia",
    mapaQuery: "3.741910, -73.835383"
  },
  {
    id: "hotel-dorado",
    nombre: "Dorado Hotel",
    carpeta: "hotelDorado",
    fotos: ["foto1.jpeg", "foto2.jpeg", "foto3.jpeg", "foto4.jpeg", "foto5.jpeg", "foto6.jpeg"],
    descripcion: "Ubicado en el corazón del municipio, Dorado Hotel te ofrece un ambiente acogedor y cómodo para tu descanso.<br><br>Cuenta con instalaciones modernas, excelente servicio y una ubicación privilegiada para disfrutar de tu estadía en El Dorado.<br><br><strong>Contacto:</strong> 3113308805 - 3214033295 <br><strong>Dirección:</strong> Carrera  4 # 3 - 22",
    ubicacion: "Carrera 4 # 3 - 22, El Dorado, Meta, Colombia",
    mapaQuery: "Cra. 6 #3-14, El Dorado, Meta."
  }
];
