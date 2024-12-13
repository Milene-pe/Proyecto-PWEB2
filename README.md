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
