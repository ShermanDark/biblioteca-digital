const db = require("../config/db");

class Prestamo {
  static async crear(idUsuario, idLibro) {
    const conn = await db.getConnection();
    try {
      await conn.beginTransaction();

      // 1) Crear préstamo
      await conn.query(
        `INSERT INTO prestamos (id_usuario, id_libro)
         VALUES (?, ?)`,
        [idUsuario, idLibro]
      );

      // 2) Cambiar estado del libro
      await conn.query(
        `UPDATE libros
         SET estado='no_disponible'
         WHERE id_libro=?`,
        [idLibro]
      );

      await conn.commit();
    } catch (err) {
      await conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  }

  static async obtenerPorUsuario(idUsuario) {
    const [rows] = await db.query(
      `SELECT
        p.id_prestamo,
        p.fecha_prestamo,
        p.estado,
        l.titulo,
        l.autor,
        l.imagen
     FROM prestamos p
     JOIN libros l ON p.id_libro = l.id_libro
     WHERE p.id_usuario = ?
       AND p.estado = 'activo'`,
      [idUsuario]
    );
    return rows;
  }

  static async devolver(idPrestamo) {
    const conn = await db.getConnection();
    try {
      await conn.beginTransaction();

      // 1) Obtener libro del préstamo
      const [[prestamo]] = await conn.query(
        `SELECT id_libro FROM prestamos WHERE id_prestamo=?`,
        [idPrestamo]
      );

      // 2) Marcar préstamo como devuelto
      await conn.query(
        `UPDATE prestamos
         SET estado='devuelto', fecha_devolucion=NOW()
         WHERE id_prestamo=?`,
        [idPrestamo]
      );

      // 3) Volver libro a disponible
      await conn.query(
        `UPDATE libros
         SET estado='disponible'
         WHERE id_libro=?`,
        [prestamo.id_libro]
      );

      await conn.commit();
    } catch (err) {
      await conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  }
}

module.exports = Prestamo;
