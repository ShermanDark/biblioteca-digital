const API_URL = "http://localhost:3000/api";

/**
 * Función genérica para llamadas al backend
 */
async function apiRequest(endpoint, method = "GET", data = null) {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json"
      }
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.mensaje || "Error en la solicitud");
    }

    return await response.json();
  } catch (error) {
    console.error("API error:", error.message);
    throw error;
  }
}

/* ===============================
   AUTH
================================ */
function loginUsuario(datos) {
  return apiRequest("/auth/login", "POST", datos);
}

function registrarUsuario(datos) {
  return apiRequest("/auth/register", "POST", datos);
}

/* ===============================
   LIBROS
================================ */
function obtenerLibros() {
  return apiRequest("/libros");
}

function reservarLibro(idLibro, idUsuario) {
  return apiRequest(`/prestamos/${idLibro}`, "POST", { idUsuario });
}

/* ===============================
   PRÉSTAMOS
================================ */
function obtenerPrestamos(idUsuario) {
  return apiRequest(`/prestamos?idUsuario=${idUsuario}`);
}

function devolverLibro(idPrestamo) {
  return apiRequest(`/prestamos/${idPrestamo}`, "PUT");
}
