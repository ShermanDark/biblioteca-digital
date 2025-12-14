const db = require("../config/db");
const Persona = require("./Persona");

class Usuario extends Persona {

  static async crear({ nombre, apellido, email, password }) {
    const [result] = await db.query(
      `INSERT INTO usuarios (nombre, apellido, email, password)
       VALUES (?, ?, ?, ?)`,
      [nombre, apellido, email, password]
    );
    return result.insertId;
  }

  static async buscarPorEmail(email) {
    const [rows] = await db.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    );
    return rows[0];
  }
}

module.exports = Usuario;
