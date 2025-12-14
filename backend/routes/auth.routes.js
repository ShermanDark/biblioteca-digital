const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const validarRegistro = require("../middlewares/validarRegistro");
const validarLogin = require("../middlewares/validarLogin");

router.post("/register", validarRegistro, authController.register);
router.post("/login", validarLogin, authController.login);

module.exports = router;
