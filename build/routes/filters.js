import Tioanime_scraper from "tioanime-scraper-beta";
import { handlerParseQuery } from "../src/utils.js";
import express from "express";
const router = express.Router();
router.get('/', async (req, res) => {
    const { type, genre, year, status, sort, page } = req.query;
    const filters = {
        types: handlerParseQuery(type),
        genres: handlerParseQuery(genre),
        years: handlerParseQuery(year),
        status: (typeof status === 'string') ? status : '',
        sort: (typeof sort === 'string') ? sort : '',
        page: (typeof page === 'string') ? (parseInt(page) || 1) : 1
    };
    const items = await Tioanime_scraper.getAnimesFromFilters(filters);
    res.json(items).end();
});
export default router;
//# sourceMappingURL=filters.js.map