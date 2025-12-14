module.exports = (req, res, next) => {
    const { email, password } = req.body;

    // Campos obligatorios
    if (!email || !password) {
        return res.status(400).json({
            mensaje: "Correo y contraseña son obligatorios"
        });
    }

    // Email válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            mensaje: "El correo electrónico no es válido"
        });
    }

    next();
};
