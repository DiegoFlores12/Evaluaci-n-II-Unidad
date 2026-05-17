const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const scrapeLocalHTML = () => {

    const filePath = path.join(__dirname, "../data/sample.html");

    const html = fs.readFileSync(filePath, "utf-8");

    // Validación HTML vacío
    if (!html || html.trim() === "") {
        throw new Error("HTML vacío");
    }

    const $ = cheerio.load(html);

    const results = [];

    $(".news").each((index, element) => {

        const title = $(element).find(".title").text().trim();
        const author = $(element).find(".author").text().trim();
        const date = $(element).find(".date").text().trim();

        // Validación campos vacíos
        if (!title || !author || !date) {
            return;
        }

        results.push({
            title,
            author,
            date
        });
    });

    // Validación selectores sin resultados
    if (results.length === 0) {
        throw new Error("No se encontraron resultados con los selectores");
    }

    return results;
};

const scrapeRemoteHTML = async (url) => {

    try {

        // Validación URL
        if (!url || !url.startsWith("http")) {
            throw new Error("URL inválida");
        }

        const response = await axios.get(url);

        const html = response.data;

        // Validación HTML vacío
        if (!html || html.trim() === "") {
            throw new Error("No se obtuvo HTML");
        }

        const $ = cheerio.load(html);

        const titles = [];

        $("h2").each((index, element) => {

            const text = $(element).text().trim();

            if (text) {
                titles.push(text);
            }
        });

        // Validación sin resultados
        if (titles.length === 0) {
            throw new Error("No se encontraron títulos");
        }

        return titles;

    } catch (error) {

        throw new Error(`Error procesando URL: ${error.message}`);
    }
};

module.exports = {
    scrapeLocalHTML,
    scrapeRemoteHTML
};