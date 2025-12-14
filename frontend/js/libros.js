const librosGrid = document.getElementById("librosGrid");

async function cargarLibros() {
  try {
    const libros = await obtenerLibros(); // api.js

    librosGrid.innerHTML = "";

    libros.forEach(libro => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="assets/img/libros/${libro.imagen}" alt="${libro.titulo}">
        <h3>${libro.titulo}</h3>
        <p>${libro.autor}</p>
        <p class="estado ${libro.estado}">
          ${libro.estado === "disponible" ? "Disponible" : "No disponible"}
        </p>
          ${libro.estado === "disponible"
          ? `<button class="btn-primary">Reservar</button>`
          : ``
        }
`;

      const btn = card.querySelector("button");
      if (btn) {
        btn.addEventListener("click", () => reservar(libro.id_libro));
      }

      librosGrid.appendChild(card);
    });
  } catch (err) {
    alert("Error cargando libros");
  }
}

async function reservar(idLibro) {
  const user = JSON.parse(localStorage.getItem("usuario"));
  if (!user) {
    document.getElementById("authModal").classList.remove("hidden");
    return;
  }

  await reservarLibro(idLibro, user.id); // api.js
  await cargarLibros();
}

cargarLibros();
