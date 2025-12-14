module.exports = (req, res, next) => {
    const {
        nombre,
        apellido,
        telefono,
        email,
        password,
        confirmPassword
    } = req.body;

    // Campos vacíos
    if (
        !nombre ||
        !apellido ||
        !telefono ||
        !email ||
        !password ||
        !confirmPassword
    ) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        });
    }

    // Nombre solo letras
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        return res.status(400).json({
            mensaje: "El nombre no debe contener números ni símbolos"
        });
    }

    // Apellido solo letras
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellido)) {
        return res.status(400).json({
            mensaje: "El apellido no debe contener números ni símbolos"
        });
    }

    // Teléfono solo números
    if (!/^[0-9]+$/.test(telefono)) {
        return res.status(400).json({
            mensaje: "El teléfono solo debe contener números"
        });
    }

    // Email válido
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
            mensaje: "El correo electrónico no es válido"
        });
    }

    // Password fuerte
    if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
        return res.status(400).json({
            mensaje:
                "La contraseña debe tener mínimo 8 caracteres, una mayúscula y un número"
        });
    }

    // Confirmar contraseña
    if (password !== confirmPassword) {
        return res.status(400).json({
            mensaje: "Las contraseñas no coinciden"
        });
    }

    next(); // ✅ todo válido
};
