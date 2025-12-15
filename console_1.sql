CREATE DATABASE IF NOT EXISTS biblioteca_db;
USE biblioteca_db;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol ENUM('usuario','admin') DEFAULT 'usuario',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE libros (
    id_libro INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    descripcion TEXT,
    imagen VARCHAR(150) NOT NULL,
    estado ENUM('disponible','no_disponible') DEFAULT 'disponible',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE prestamos (
    id_prestamo INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_libro INT NOT NULL,
    fecha_prestamo TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_devolucion TIMESTAMP NULL,
    estado ENUM('activo','devuelto','cancelado') DEFAULT 'activo',

    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_libro) REFERENCES libros(id_libro)
);

CREATE TABLE historial_prestamos (
    id_historial INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_libro INT NOT NULL,
    accion ENUM('prestamo','devolucion','cancelacion') NOT NULL,
    fecha_accion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_libro) REFERENCES libros(id_libro)
);

INSERT INTO libros (titulo, autor, categoria, descripcion, imagen) VALUES
('1984', 'George Orwell', 'Novela', 'Distopía sobre el control y la vigilancia totalitaria.', '1984.webp'),
('Cien años de soledad', 'Gabriel García Márquez', 'Literatura', 'Historia de la familia Buendía en Macondo.', 'cien_anos_soledad.webp'),
('El principito', 'Antoine de Saint-Exupéry', 'Fábula', 'Reflexión poética sobre la vida y la amistad.', 'el_principito.webp'),
('Don Quijote de la Mancha', 'Miguel de Cervantes', 'Clásico', 'Aventuras del caballero de la triste figura.', 'don_quijote.webp'),
('Harry Potter y la piedra filosofal', 'J.K. Rowling', 'Fantasía', 'Inicio de la saga del joven mago.', 'harry_potter_1.webp'),
('El señor de los anillos', 'J.R.R. Tolkien', 'Fantasía', 'Épica lucha entre el bien y el mal en la Tierra Media.', 'senor_anillos.webp'),
('Orgullo y prejuicio', 'Jane Austen', 'Romance', 'Relato sobre el amor y las clases sociales.', 'orgullo_prejuicio.webp'),
('Crónica de una muerte anunciada', 'Gabriel García Márquez', 'Novela', 'Historia de un asesinato anunciado.', 'cronica_muerte.webp'),
('La sombra del viento', 'Carlos Ruiz Zafón', 'Misterio', 'Un libro maldito y secretos ocultos.', 'sombra_viento.webp'),
('Los juegos del hambre', 'Suzanne Collins', 'Ciencia ficción', 'Competencia mortal en un futuro distópico.', 'juegos_hambre.webp'),
('El código Da Vinci', 'Dan Brown', 'Suspenso', 'Misterios ocultos en obras de arte.', 'codigo_davinci.webp'),
('El alquimista', 'Paulo Coelho', 'Autoayuda', 'Búsqueda personal y destino.', 'el_alquimista.webp'),
('Fahrenheit 451', 'Ray Bradbury', 'Ciencia ficción', 'Un mundo donde los libros están prohibidos.', 'fahrenheit_451.webp'),
('La metamorfosis', 'Franz Kafka', 'Clásico', 'Transformación absurda de un hombre.', 'la_metamorfosis.webp'),
('It', 'Stephen King', 'Terror', 'El mal toma forma en un pequeño pueblo.', 'it.webp'),
('Drácula', 'Bram Stoker', 'Terror', 'El clásico vampiro de Transilvania.', 'dracula.webp'),
('El nombre de la rosa', 'Umberto Eco', 'Misterio', 'Asesinatos en un monasterio medieval.', 'nombre_rosa.webp'),
('Sapiens', 'Yuval Noah Harari', 'Historia', 'Breve historia de la humanidad.', 'sapiens.webp'),
('Hábitos atómicos', 'James Clear', 'Autoayuda', 'Pequeños hábitos, grandes cambios.', 'habitos_atomicos.webp'),
('Clean Code', 'Robert C. Martin', 'Tecnología', 'Buenas prácticas para escribir código limpio.', 'clean_code.webp');
