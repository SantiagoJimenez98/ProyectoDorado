// script.js — comportamiento que se repite en toda la página.
// Hoy solo tiene el carrusel, pero cualquier cosa interactiva futura
// (menú desplegable, validaciones, etc.) va aquí.

// querySelectorAll busca TODOS los elementos con class="carrusel" en la
// página (puede haber varios, como en sitios.html). forEach repite el
// código de adentro una vez por cada carrusel que encuentre.
document.querySelectorAll(".carrusel").forEach((carrusel) => {
  // Dentro de cada carrusel buscamos sus propias piezas con querySelector
  // (sin la S al final: busca solo la primera coincidencia)
  const pista = carrusel.querySelector(".carrusel-pista");
  const botonAnterior = carrusel.querySelector(".carrusel-anterior");
  const botonSiguiente = carrusel.querySelector(".carrusel-siguiente");

  if (!pista || !botonAnterior || !botonSiguiente) return; // por seguridad

  function desplazar(direccion) {
    // Medimos el primer elemento de la pista (una foto o una tarjeta)
    // para saber cuánto avanzar: su ancho + el espacio (gap) entre ellos
    const primerItem = pista.firstElementChild;
    const ancho = primerItem ? primerItem.getBoundingClientRect().width : 300;
    const gap = parseInt(getComputedStyle(pista).gap) || 24;

    pista.scrollBy({ left: direccion * (ancho + gap), behavior: "smooth" });
  }

  botonAnterior.addEventListener("click", () => desplazar(-1));
  botonSiguiente.addEventListener("click", () => desplazar(1));
});
