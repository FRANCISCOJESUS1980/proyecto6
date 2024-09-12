# API de con Express y MongoDb de Proyectos y Usuarios

Esta API permite gestionar usuarios y proyectos con una relación entre ellos.

## Endpoints

Usuarios

- Crear un usuario: POST /usuarios
- Obtener todos los usuarios: GET /usuarios
- Actualizar un usuario: PUT /usuarios/:id
- Eliminar un usuario: DELETE /usuarios/:id

PROYECTOS

- Crear un proyecto: POST /proyectos
- Obtener todos los proyectos: GET /proyectos
- Actualizar un proyecto: PUT /proyectos/:id
- Eliminar un proyecto: DELETE /proyectos/:id

estan separados los controladores de las rutas para una mejor practica
se ha creado una semilla para la base de datos donde he metido a nuestro amigo paquito
tenemos un archivo .env para nuestras claves
he utilizado chat gpt para hacer este readme basicamente porque no lo habia hecho nunca y ademas no sabia ni como hacerlo, tambien le he consultado algunos fallos que me daba el servidor
