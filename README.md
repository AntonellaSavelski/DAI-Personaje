# Como iniciar el proyecto desde cero:
## Pasos
1) Clonar el repositorio
2) Instalar la última versión de node.js
3) Instalar en visual las dependencias: *express,mssql,cors,corsa,dotenv,tedious*
4) Crear un archivo dentro de la carpeta DAI-Personaje, llamado *.env* y copiar el texto indicado en la entrega
5) Copiar el nombre de la computadora y remplazarlo en el *.env* donde dice *DB_SERVER* por **A-CBO-04**
6) Abrir la administración de equipos de la computadora y realizar los pasos necesarios
7) Abrir el sql managment studio y crear una base de datos llamada DAI-Personaje
8) Crear una nueva query, copiar y ejecutar el archivo .sql que se encuentra en esta carpeta llamado *"CreateLoginAndUser.sql"*
9) Crear otra query, copiar y ejecutar el archivo .sql que se encuentra en esta carpeta llamado *"CreateTable.sql"*
10) En la terminal del visual ejecutar el proyecto **npm start**
11) Abrir el postman y abrir la colección *"DAI-Personaje.postman_collection"*, cambiar la variable al puerto que corresponda
12) Generar un token, abriendo la request llamada *"Autenticación"*
13) Copiar el token generado, ir a *"authorization"*, seleccionar **"Bearer Token"** y pegarlo ahi.
