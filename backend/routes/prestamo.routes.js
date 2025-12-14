const express = require("express");
const router = express.Router();
const controller = require("../controllers/prestamo.controller");

router.post("/:idLibro", controller.reservar);
router.get("/", controller.listar);
router.put("/:idPrestamo", controller.devolver);

module.exports = router;
