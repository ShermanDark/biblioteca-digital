const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");

exports.register = async (req, res) => {
  try {
    const { nombre, apellido, telefono, email, password } = req.body;

    const existe = await Usuario.buscarPorEmail(email);
    if (existe) {
      return res.status(400).json({
        mensaje: "El correo ya está registrado"
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const id = await Usuario.crear({
      nombre,
      apellido,
      telefono,
      email,
      password: hash
    });

    res.status(201).json({
      mensaje: "Usuario registrado correctamente",
      id
    });
  } catch (err) {
    res.status(500).json({
      mensaje: "Error al registrar usuario"
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await Usuario.buscarPorEmail(email);

    if (!usuario) {
      return res.status(401).json({
        mensaje: "Credenciales incorrectas"
      });
    }

    const valido = await bcrypt.compare(password, usuario.password);

    if (!valido) {
      return res.status(401).json({
        mensaje: "Credenciales incorrectas"
      });
    }

    res.json({
      mensaje: "Inicio de sesión exitoso",
      usuario: {
        id: usuario.id_usuario,
        nombre: usuario.nombre,
        email: usuario.email
      }
    });
  } catch (err) {
    res.status(500).json({
      mensaje: "Error al iniciar sesión"
    });
  }
};

