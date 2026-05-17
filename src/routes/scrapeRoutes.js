const express = require("express");

const router = express.Router();

const {
    getLocalScrape,
    getRemoteScrape
} = require("../controllers/scrapeController");

router.get("/scrape", getLocalScrape);

router.get("/scrape-url", getRemoteScrape);

module.exports = router;