import Tioanime_scraper from 'tioanime-scraper-beta';
import express from 'express';
const router = express.Router();
router.get('/', async (_req, res) => {
    const items = await Tioanime_scraper.getLatest('*');
    res.json({
        animes: items.animes.length,
        chapters: items.chapters.length,
        movies: items.movies.length,
        ovas: items.ovas.length,
        specials: items.specials.length
    }).end();
});
router.get('/:section', async (req, res) => {
    const section = req.params.section;
    const items = await Tioanime_scraper.getLatest(section);
    res.json(items).end();
});
export default router;
//# sourceMappingURL=latest.js.map