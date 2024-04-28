import server from "./server";
//* Importamos la instancia de express que almacena el servidor para levantarse.

import { PORT } from "./config/envs";
//* Importamos el puerto en nuestro .env para que así no sea visible a simple vista.

import "reflect-metadata";

import { AppDataSource } from "./config/data-source";
//* Importamos el archivo principal de typeorm para poder comunicarnos con la base de datos de postgre.

AppDataSource.initialize().then((res) => {
  console.log("Conexión exitosa con la base de datos.");
  //* Inicializamos la conexión con la base de daots y mandamos un mensaje cuándo haya salido todo correctamente.

  server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
  //* Inicializamos el servidor y mandamos un mensaje cuándo ya se haya terminado de levantar.
});
