const express = require("express");
const cors = require("cors");
require("dotenv").config();

const libroRoutes = require("./routes/libro.routes");
const authRoutes = require("./routes/auth.routes");
const prestamoRoutes = require("./routes/prestamo.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/libros", libroRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/prestamos", prestamoRoutes);


app.get("/", (req, res) => {
  res.json({ mensaje: "API Biblioteca funcionando 🚀" });
});

module.exports = app;
