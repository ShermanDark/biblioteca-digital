# 📚 Biblioteca Digital – Sistema de Gestión de Préstamos

Este proyecto es una **aplicación web full stack** desarrollada con **Node.js, Express, MySQL y JavaScript**, cuyo objetivo es optimizar la **experiencia del usuario (UX)** en una **biblioteca digital**.

La aplicación permite **visualizar libros**, **registrarse**, **iniciar sesión**, **reservar libros** y **gestionar préstamos**, mediante una interfaz **moderna, responsiva y accesible**.

---

## 🎯 Funcionalidades principales

- **Listado de libros disponibles**
- **Registro e inicio de sesión de usuarios**
- **Reserva de libros**
- **Gestión de préstamos activos**
- **Devolución de libros**
- **Interfaz responsiva (desktop y mobile)**

---

## 🧩 Requisitos previos

Antes de ejecutar el proyecto, asegúrese de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm**
- **MySQL**
- Un navegador web moderno

> ⚠️ El proyecto se entrega **sin** las carpetas `node_modules` ni el archivo `.env`.

---

## ⚙️ Configuración del entorno (.env)

### 1️⃣ Crear el archivo `.env`

En la **raíz del proyecto**, cree un archivo llamado exactamente:

.env

shell
Copiar código

### 2️⃣ Configurar el archivo `.env`

Use como referencia el archivo incluido:

.env.example

yaml
Copiar código

Este archivo está **documentado** y explica qué valor colocar en cada variable:
- Puerto del backend
- Host de la base de datos
- Puerto de MySQL
- Usuario y contraseña
- Nombre de la base de datos

📌 El archivo `.env` **no debe subirse al repositorio**.

---

## 🗄️ Configuración de la Base de Datos

1. Cree una base de datos en MySQL (el nombre debe coincidir con `DB_NAME`).
2. Ejecute las **querys SQL proporcionadas**:
   - Creación de tablas
   - Relaciones
   - Inserción de libros de ejemplo

Una vez ejecutadas, la base de datos quedará lista.

---

## 📦 Instalación de dependencias

En la **raíz del proyecto**, ejecute:

```bash
npm install
🚀 Ejecución del Backend
Para levantar el backend (API REST), ejecute:

bash
Copiar código
npm run dev
El backend se iniciará por defecto en:

arduino
Copiar código
http://localhost:3000
🌐 Ejecución del Frontend
Abra otra terminal y ejecute:

bash
Copiar código
cd frontend
Luego, ejecute:

bash
Copiar código
live-server
Verá un mensaje similar a:

rust
Copiar código
Serving "frontend" at http://127.0.0.1:8080
Ready for changes
Copie esa URL y ábrala en el navegador.

🐧 Linux y 🪟 Windows
En Linux, live-server suele funcionar directamente.

En Windows, si no funciona, puede usar:

bash
Copiar código
npx live-server
El comportamiento del proyecto es el mismo en ambos sistemas.

📁 Estructura general del proyecto
go
Copiar código
/
├── backend/
├── frontend/
├── .env.example
├── package.json
├── README.md
✅ Notas finales
El proyecto sigue el patrón MVC

Se aplican principios de Programación Orientada a Objetos

Se utilizan middlewares para validaciones

La interfaz es responsiva y orientada a UX

El sistema está listo para evaluación académica