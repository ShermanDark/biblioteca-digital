const db = require("../config/db");

class Libro {
  static async obtenerTodos() {
    const [rows] = await db.query("SELECT * FROM libros");
    return rows;
  }

  static async crear(data) {
    const { titulo, autor, categoria, descripcion, imagen } = data;

    const [result] = await db.query(
      `INSERT INTO libros (titulo, autor, categoria, descripcion, imagen)
       VALUES (?, ?, ?, ?, ?)`,
      [titulo, autor, categoria, descripcion, imagen]
    );

    return result.insertId;
  }

  static async actualizar(id, data) {
    const { titulo, autor, categoria, descripcion, estado } = data;

    await db.query(
      `UPDATE libros
       SET titulo=?, autor=?, categoria=?, descripcion=?, estado=?
       WHERE id_libro=?`,
      [titulo, autor, categoria, descripcion, estado, id]
    );
  }

  static async eliminar(id) {
    await db.query(
      "DELETE FROM libros WHERE id_libro=?",
      [id]
    );
  }
}

module.exports = Libro;
