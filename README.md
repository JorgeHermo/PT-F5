

INSTALACIONES NECESARIAS

1 - Instalar Visual Studio Code (editor de código)  -> https://code.visualstudio.com/.

2 - Instalar Git (control de versiones) -> https://gitforwindows.org/

3 - Descargar el repositorio de Github -> https://github.com/JorgeHermo/PT-F5.git

4 - Abri en tu terminal e instalar las dependencias (en mi caso "npm install")

5 - claves .env 
    
    Fron-end : - REACT_APP_API_URL=http://localhost:5005/api

    Back-end :  - PORT=5005
                - ORIGIN=http://localhost:3000
                - MONGODB_URI=mongodb://127.0.0.1:27017/PT-F5
                - TOKEN_SECRET=suepersecret


PROCESO DE DESARROLLO

He elegido la arquitectura del stack MERN, por ser el stack en el que más comodo me encuentro a la hora de trabajar en un proyecto.

Este stack consta de MongoDB como base de datos, ReactJs como framwork front-end, nodeJs con express como framwork back-end.

PROCESO

1 - Mock-up de la aplicación para tener refuerzo visual del objetivo

2 - Planificar las necesidades de la aplicación y diferenciar sus partes.

3 - Planificar las rutas necesarias.

4 - Crear el repositorio y preparar el entorno de la App.
    
     + Instalación boilerplate (Ironlauncher). ReactApp + basic server.
     + Depurar componentes y archivos innecesarios

5 - Crear los modelos necesarios para nutrir la base de datos.

6 - CRUD BACK-END y testeo de cada ruta.

7 - Plantear componentes y sus visualizacion correspondientes

8 - Crear componentes y sus vistas en orden.

9 - Comprobar la comunicación de las peticiones al back

10 - Retoques visuales
    
TECNOLOGÍAS

MongoDB
Express JS
React JS
NodeJS
React bootstrap
Bootstrap
Axios
Bcrypt

NOTAS PERSONALES

Escalado

    - Subir imagenes como archivos y guardalas en Cloudinary
    - Loading component para gestioner los tiempos de carga fuera de localhost
    - Roles para los usuarios
    - Rutas para gestionar los perfil de usurio
    - Admin panel
    - Mejor gestión de errores
    - Feedback a los usuarios mediante toast o similar