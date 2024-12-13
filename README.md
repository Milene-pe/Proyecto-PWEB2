
=======
# FINAL PROYECT PWEB 2: Cineplanet Proyect

## Integrantes
Pacheco Esquinarila Milene
Salas Idme Nikole

## 🚀 Descripción

Este proyecto es un sistema de gestión de cine que permite a los usuarios ver información sobre películas, estrenos, y comprar entradas. El sistema se divide en un frontend desarrollado con Angular y un backend desarrollado con Django.


## 📌 URL del Proyecto 

- [Repositorio en GitHub](https://github.com/Milene-pe/Proyecto-PWEB2.git)

## 📌 Informe del Proyecto
- Informe` ([](Informe%20Final%20PWEB2.pdf))


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


## Configuración del Entorno

### Requisitos Previos

- **Node.js y npm**: Para ejecutar y gestionar el frontend.
- **Angular CLI**: Para desarrollar y construir la aplicación Angular.
- **Python y pip**: Para ejecutar y gestionar el backend.
- **Django**: Framework de desarrollo web para el backend.
- **Virtualenv**: Para crear un entorno virtual aislado en Python.

### Instalación

#### Frontend

1. Navega al directorio `cinema_frontend`:

    cd cinema_frontend
    

2. Instala las dependencias de Node.js:

    npm install
    

3. Ejecuta el servidor de desarrollo:

    ng serve
    

#### Backend

1. Navega al directorio `cinema_proyect`:


    cd cinema_proyect
    

2. Crea un entorno virtual:

    virtualenv env


3. Activa el entorno virtual:

    - En Windows:

        .\env\Scripts\activate

    - En Unix o MacOS:

        source env/bin/activate

4. Instala las dependencias de Python:

    pip install -r requirements.txt


5. Realiza las migraciones de la base de datos:

    python manage.py migrate


6. Ejecuta el servidor de desarrollo:

    python manage.py runserver


## Ejecución del Proyecto

### Frontend

Para ejecutar el frontend, navega al directorio `cinema_frontend` y ejecuta:

```sh
cd cinema_frontend
ng serve
Esto iniciará el servidor de desarrollo de Angular y la aplicación estará disponible en http://localhost:4200.

Backend
Para ejecutar el backend, navega al directorio cinema_proyect y ejecuta:

sh
Copy code
cd cinema_proyect
python manage.py runserver
Esto iniciará el servidor de desarrollo de Django y la aplicación estará disponible en http://localhost:8000.

Funcionalidades
- Gestión de Películas
- Visualización de Películas: Los usuarios pueden ver una lista de todas las películas disponibles, incluyendo información detallada como título, descripción, género, duración y calificación.
- Categorías de Películas: Las películas están organizadas en diferentes categorías como estreno, populares y recomendadas, facilitando la navegación y búsqueda.
- Búsqueda de Películas: Funcionalidad de búsqueda para encontrar películas específicas por título o género.
- Gestión de Entradas
- Compra de Entradas: Los usuarios pueden seleccionar una película, elegir la sala y horario, y comprar entradas en línea.
- Historial de Compras: Los usuarios pueden ver su historial de compras y detalles de sus tickets.
- Validación de Tickets: Sistema para la validación de tickets en el cine, asegurando la autenticidad de las entradas.
- Gestión de Usuarios
- Registro y Autenticación: Sistema de registro y login para usuarios, asegurando que solo usuarios autenticados puedan realizar compras.
- Perfil de Usuario: Cada usuario tiene un perfil donde puede ver y editar su información personal.
- Recuperación de Contraseña: Funcionalidad para la recuperación de contraseñas olvidadas a través de correo electrónico.
- Gestión de Salas
- Administración de Salas: Los administradores pueden crear, editar y eliminar salas de cine.
- Asignación de Películas a Salas: Las películas pueden ser asignadas a diferentes salas y horarios.
- Capacidad de Salas: Gestión de la capacidad de cada sala, asegurando que no se vendan más entradas de las disponibles.
>>>>>>> 6ad6fb1f5563092e927c18f25e4d19fa0fcf3932
