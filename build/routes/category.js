import Tioanime_scraper from "tioanime-scraper-beta";
import express from "express";
import { types, genres } from "../src/utils.js";
const router = express.Router();
router.get('/', (_req, res) => {
    res.json({
        example_url: '/category/shounen?type=ova',
        genres, types
    }).end();
});
router.get('/:category', async (req, res) => {
    if (Array.isArray(req.query.type)) {
        req.query.type = req.query.type[0];
    }
    const category = req.params.category;
    const type = (typeof req.query.type === 'string') ? req.query.type : '';
    const page = req.query.page;
    const pg = (typeof page === 'string') ? parseInt(page || '1') : 1;
    const filters = {
        types: [type],
        genres: [category],
        page: pg
    };
    const items = await Tioanime_scraper.getAnimesFromFilters(filters);
    res.json(items).end();
});
export default router;
//# sourceMappingURL=category.js.map