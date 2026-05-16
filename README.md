# Evaluaci-n-II-Unidad

## Descripción

Este proyecto fue desarrollado utilizando Node.js, Express y Cheerio con el objetivo de procesar HTML en backend y extraer información estructurada mediante selectores CSS.

La aplicación obtiene datos desde un archivo HTML local y entrega la información procesada mediante un endpoint REST.

---

# Objetivo

Implementar una solución backend utilizando Cheerio para procesar HTML y extraer información de forma ordenada y estructurada.

---

# Tecnologías utilizadas

- Node.js
- Express
- Cheerio
- Axios
- Git
- GitHub
- Visual Studio Code

---
# Estructura

actividad_2_6_cheerio/
│
├── src/
│   ├── controllers/
│   │   └── scrapeController.js
│   │
│   ├── routes/
│   │   └── scrapeRoutes.js
│   │
│   ├── services/
│   │   └── scrapeService.js
│   │
│   ├── data/
│   │   └── sample.html
│   │
│   └── app.js
│
├── package.json
├── README.md
└── .gitignore

#Explicación de la estructura

routes/
Contiene las rutas del proyecto. Aquí se definen los endpoints disponibles de la API.

controllers/
Contiene la lógica que recibe las solicitudes HTTP y devuelve respuestas al cliente.

services/
Contiene la lógica de negocio y el procesamiento del HTML utilizando Cheerio.

data/
Contiene el archivo HTML utilizado como fuente de datos para el scraping.

app.js
Archivo principal encargado de iniciar el servidor Express.

