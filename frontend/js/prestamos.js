document.addEventListener("DOMContentLoaded", async () => {

  const grid = document.getElementById("prestamosGrid");
  const user = JSON.parse(localStorage.getItem("usuario"));

  // Protección
  if (!user) {
    grid.innerHTML = `
    <p style="opacity:.7; margin-top:20px">
      🔒 Debes iniciar sesión para ver tus préstamos
    </p>
  `;
    return;
  }

  async function cargarPrestamos() {
    try {
      const prestamos = await obtenerPrestamos(user.id);

      grid.innerHTML = "";

      if (prestamos.length === 0) {
        grid.innerHTML = `
          <p style="opacity:.7">No tienes préstamos activos 📚</p>
        `;
        return;
      }

      prestamos.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <img src="assets/img/libros/${p.imagen}" alt="${p.titulo}">
          <h3>${p.titulo}</h3>
          <p>${p.autor}</p>
          <p class="estado prestado">Prestado</p>
          <p class="fecha">📅 ${new Date(p.fecha_prestamo).toLocaleDateString()}</p>
          <button class="btn-primary">Devolver</button>
        `;

        card.querySelector("button").addEventListener("click", async () => {
          await devolverLibro(p.id_prestamo);
          cargarPrestamos();
        });

        grid.appendChild(card);
      });

    } catch (error) {
      grid.innerHTML = "<p>Error al cargar préstamos</p>";
    }
  }

  cargarPrestamos();
});
