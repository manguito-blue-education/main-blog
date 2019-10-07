---
title:  "Tutorial Básico de Node API"
date:   2019-09-15 20:00:07
description: "Lo más básico de cómo hacer una API con Node"
---

Estos son los pasos de cómo desarrollar tu primera REST API con NodeJS y Express.

## 0. Empezando

Primero lo primero, necesitas tener todas las herramientas necesarias listas. Para eso necesitas tener instalado *Node* and *NPM*.

Para verificar que todo está listo, necesitas ejecutar lo siguiente:
```bash
# Revisa por la versión de NPM, salida esperada 6.11.3 o similar
npm -v


# Revisa por la versión de Node, salida esperada v10.15.3 o similar
node --version
```

## 1. Instala las dependencias
Para ser capaces de ejecutar el servidor de APIs, necesitamos express. Para instalar express, necesitamos inicializar un repositorio de npm con:

```bash
npm init -y
```

esto generará un archivo `package.json` para tener el control de todas las dependencias. Después deberás ejecutar lo siguiente: 

```bash
npm i express --save
```

lo que descargará y añadirá a express en el folder `node_modules` , donde se agregarán todas las dependencias que usemos en el proyecto.

## 2. Escribe el archivo de tu servidor
Crea un archivo en la ubicación de tu preferencia. Nos referiremos a este folder como `raíz`.

En el folder raíz, con el editor de tu preferencia, agrega un archivo llamado `index.js`.

Dentro de este archivo, escribiremos lo siguiente (no te preocupes, revisaremos línea por línea después):

```js
const app = require('express')();

app.get('/', (req, res) => res.send('Hola Mundo!'));

app.listen(5000, () => console.log('Servidor ejecutándose... '));
```

## 3. Ejecuta tu servidor
Para ejecutar tu servidor, sólo necesitas ejecutar:
```bash
node index.js # Salida esperada: Servidor ejecutándose...
```

Este comando ejecutará tu archivo, y correrá el servidor. Dejemos el servidor corriendo y probémoslo.

## 4. Probando tu API
Recuerda que esta API tiene una arquitectura de cliente-servidor. En este caso ya tenemos el servidor, por lo que ahora sólo nos faltaría un cliente.

Hay muchos clientes que podemos usar, pero `curl` es el comando más fácil y rápido para crear una petición http. Es por eso que para probar nuestro servidor, sólo necesitamos ejecutar:

```bash
# Salida esperada: Hola Mundo!
curl http://localhost:5000/
```

## 5. Conclusion
Estos son los pasos más básicos de cómo crear una API, en la cual podrás recibir y responder peticiones HTTP.
