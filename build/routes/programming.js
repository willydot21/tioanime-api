import Tioanime_scraper from "tioanime-scraper-beta";
import express from 'express';
const router = express.Router();
router.get('/', async (_req, res) => {
    const items = await Tioanime_scraper.getAnimeProgramming();
    res.json(items).end();
});
export default router;
//# sourceMappingURL=programming.js.map