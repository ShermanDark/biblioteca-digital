const Libro = require("../models/Libro");

exports.getAll = async (req, res) => {
  try {
    const libros = await Libro.obtenerTodos();
    res.json(libros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const id = await Libro.crear(req.body);
    res.status(201).json({ mensaje: "Libro creado", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    await Libro.actualizar(req.params.id, req.body);
    res.json({ mensaje: "Libro actualizado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Libro.eliminar(req.params.id);
    res.json({ mensaje: "Libro eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
