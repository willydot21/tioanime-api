import express from 'express';
import Tioanime_scraper from 'tioanime-scraper-beta';
const router = express.Router();
router.get('/:id', async (req, res) => {
    const _id = req.params.id;
    const items = await Tioanime_scraper.getAnimeInfo(_id);
    res.json(items).end();
});
router.get('/:id/chapter/:chapter', async (req, res) => {
    const _id = req.params.id;
    const chapter = req.params.chapter;
    const items = await Tioanime_scraper.getAnimeChapter(_id, parseInt(chapter));
    res.json(items).end();
});
export default router;
//# sourceMappingURL=anime.js.map