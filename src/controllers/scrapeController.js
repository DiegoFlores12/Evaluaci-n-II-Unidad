const {
    scrapeLocalHTML,
    scrapeRemoteHTML
} = require("../services/scrapeService");

const getLocalScrape = (req, res) => {

    try {

        const data = scrapeLocalHTML();

        res.status(200).json({
            success: true,
            data
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getRemoteScrape = async (req, res) => {

    try {

        const { url } = req.query;

        if (!url) {
            return res.status(400).json({
                success: false,
                message: "Debe ingresar una URL"
            });
        }

        const data = await scrapeRemoteHTML(url);

        res.status(200).json({
            success: true,
            data
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Error procesando URL"
        });
    }
};

module.exports = {
    getLocalScrape,
    getRemoteScrape
};