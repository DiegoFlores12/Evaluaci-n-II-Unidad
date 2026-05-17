const express = require("express");

const app = express();

const scrapeRoutes = require("./routes/scrapeRoutes");

app.use(express.json());

app.use("/api", scrapeRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Ruta no encontrada"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});