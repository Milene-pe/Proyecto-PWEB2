# FINAL PROYECT PWEB 2: Cineplanet Proyect

## Integrantes
Pacheco Esquinarila Milene
Salas Idme Nikole

## 🚀 Descripción

Este proyecto es un sistema de gestión de cine que permite a los usuarios ver información sobre películas, estrenos, y comprar entradas. El sistema se divide en un frontend desarrollado con Angular y un backend desarrollado con Django.

## 🎯 Estructura del Proyecto

El proyecto se divide en dos partes principales: `cinema_frontend` y `cinema_proyect`.


### 🎇 cinema_frontend

Esta es la parte del frontend del proyecto, construida con Angular. Incluye:

- **Páginas y Componentes**:
  - `AppComponent` ([cinema_frontend/src/app/app.component.ts](cinema_frontend/src/app/app.component.ts)): Componente raíz de la aplicación.
  - `EstrenosComponent` ([cinema_frontend/src/app/estrenos/estrenos.component.ts](cinema_frontend/src/app/estrenos/estrenos.component.ts)): Muestra los estrenos de películas y permite comprar entradas.
  - `PeliculasComponent` ([cinema_frontend/src/app/peliculas/peliculas.component.ts](cinema_frontend/src/app/peliculas/peliculas.component.ts)): Lista todas las películas disponibles.
  - `CategoriasComponent` ([cinema_frontend/src/app/categorias/categorias.component.ts](cinema_frontend/src/app/categorias/categorias.component.ts)): Muestra películas organizadas por categorías.
  - `LoginComponent` ([cinema_frontend/src/app/login/login.component.ts](cinema_frontend/src/app/login/login.component.ts)): Formulario de autenticación de usuarios.
  - `RegistroComponent` ([cinema_frontend/src/app/registro/registro.component.ts](cinema_frontend/src/app/registro/registro.component.ts)): Formulario de registro de nuevos usuarios.

- **Servicios**:
  - `PeliculaService` ([cinema_frontend/src/app/services/pelicula.service.ts](cinema_frontend/src/app/services/pelicula.service.ts)): Servicio para interactuar con la API de películas.
  - `UsuarioService` ([cinema_frontend/src/app/services/usuario.service.ts](cinema_frontend/src/app/services/usuario.service.ts)): Servicio para gestionar la autenticación y el registro de usuarios.
  - `CompraService` ([cinema_frontend/src/app/services/compra.service.ts](cinema_frontend/src/app/services/compra.service.ts)): Servicio para manejar las compras de entradas.

- **Estilos**:
  - Los estilos para `EstrenosComponent` se encuentran en [cinema_frontend/src/app/estrenos/estrenos.component.css](cinema_frontend/src/app/estrenos/estrenos.component.css).
  - Los estilos globales de la aplicación están en [cinema_frontend/src/styles.css](cinema_frontend/src/styles.css).

### 💻 cinema_proyect

Este es el backend del proyecto, desarrollado con Django. Incluye aplicaciones para:

- **Movies** ([cinema_proyect/movies/models.py](cinema_proyect/movies/models.py)): Gestión de películas.
  - Modelos principales: `Pelicula`, `Genero`.
  - Vistas y URLs para listar, crear, editar y eliminar películas.
  - Serializadores para la API REST.

- **Users** ([cinema_proyect/users/models.py](cinema_proyect/users/models.py)): Registro y autenticación de usuarios.
  - Modelos principales: `Usuario`.
  - Vistas y URLs para el registro, login y gestión de perfiles de usuarios.
  - Serializadores para la API REST.

- **Tickets** ([cinema_proyect/tickets/models.py](cinema_proyect/tickets/models.py)): Manejo de entradas de cine.
  - Modelos principales: `Ticket`.
  - Vistas y URLs para la compra y validación de tickets.
  - Serializadores para la API REST.

- **Halls** ([cinema_proyect/halls/models.py](cinema_proyect/halls/models.py)): Gestión de salas de cine.
  - Modelos principales: `Sala`.
  - Vistas y URLs para crear, editar y eliminar salas.
  - Serializadores para la API REST.

- **Purchases** ([cinema_proyect/purchases/models.py](cinema_proyect/purchases/models.py)): Manejo de compras.
  - Modelos principales: `Compra`.
  - Vistas y URLs para la gestión de compras.
  - Serializadores para la API REST.

