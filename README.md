# 📚 Biblioteca Digital – Sistema de Gestión de Préstamos

Este proyecto es una **aplicación web full stack** desarrollada con **Node.js, Express, MySQL y JavaScript**, cuyo objetivo es optimizar la **experiencia del usuario (UX)** en una **biblioteca digital**.

La aplicación permite **visualizar libros**, **registrarse**, **iniciar sesión**, **reservar libros** y **gestionar préstamos**, mediante una interfaz **moderna, responsiva y accesible**.

---

## 🎯 Funcionalidades principales

- 📖 Listado de libros disponibles
- 👤 Registro e inicio de sesión de usuarios
- 📚 Reserva de libros
- 🗂️ Gestión de préstamos activos
- 🔄 Devolución de libros
- 📱 Interfaz responsiva (desktop y mobile)

---

## 🧩 Requisitos previos

Antes de ejecutar el proyecto, asegúrese de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm**
- **MySQL**
- Un navegador web moderno

> ⚠️ El proyecto se entrega **sin** la carpeta `node_modules` ni el archivo `.env`.

---

## ⚙️ Configuración del entorno (.env)

### 1️⃣ Crear el archivo `.env`

En la **raíz del proyecto**, cree un archivo llamado exactamente:

.env

### 2️⃣ Configurar el archivo `.env`

Use como referencia el archivo incluido en el proyecto:

.env.example


Este archivo se encuentra **documentado** y explica claramente qué valor colocar en cada variable:

- Puerto del backend
- Host de la base de datos
- Puerto de MySQL
- Usuario de la base de datos
- Contraseña de la base de datos
- Nombre de la base de datos.

---

## 🗄️ Configuración de la Base de Datos

1. Cree una base de datos en MySQL (el nombre debe coincidir con la variable `DB_NAME` del `.env`).
2. Ejecute las **querys SQL proporcionadas** junto al proyecto:
   - Creación de tablas
   - Definición de relaciones
   - Inserción de libros de ejemplo

Una vez ejecutadas las querys, la base de datos quedará lista para usarse.

---

## 📦 Instalación de dependencias

En la **raíz del proyecto**, ejecute el siguiente comando:

npm install

Esto instalará todas las dependencias necesarias del backend.

---

## 🚀 Ejecución del Backend

Para iniciar el servidor backend (API REST), ejecute:

npm run dev


Por defecto, el backend se levantará en:

http://localhost:3000


---

## 🌐 Ejecución del Frontend

Abra **otra terminal** y navegue a la carpeta del frontend:

cd frontend

Luego ejecute:

live-server

Aparecerá un mensaje similar a:

Serving "frontend" at http://127.0.0.1:8080
Ready for changes


Copie la URL mostrada y ábrala en el navegador para acceder a la aplicación.

---

## 🐧 Linux y 🪟 Windows

- En **Linux**, `live-server` suele funcionar directamente.
- En **Windows**, si el comando anterior no funciona, puede ejecutar:

npx live-server


El comportamiento de la aplicación es el mismo en ambos sistemas operativos.

---

## ✅ Notas finales

- El proyecto sigue el **patrón de arquitectura MVC**
- Se aplican principios de **Programación Orientada a Objetos**
- Se utilizan **middlewares** para validaciones y manejo de errores
- La interfaz está orientada a **UX** y es totalmente responsiva
- El sistema se encuentra **listo para evaluación académica**
