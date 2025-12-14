const Prestamo = require("../models/Prestamo");

exports.reservar = async (req, res) => {
  try {
    const { idUsuario } = req.body;
    const { idLibro } = req.params;

    await Prestamo.crear(idUsuario, idLibro);
    res.status(201).json({ mensaje: "Libro reservado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listar = async (req, res) => {
  try {
    const { idUsuario } = req.query;
    const prestamos = await Prestamo.obtenerPorUsuario(idUsuario);
    res.json(prestamos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.devolver = async (req, res) => {
  try {
    const { idPrestamo } = req.params;
    await Prestamo.devolver(idPrestamo);
    res.json({ mensaje: "Libro devuelto" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
