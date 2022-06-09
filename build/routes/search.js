import Tioanime_scraper from "tioanime-scraper-beta";
import express from 'express';
const router = express.Router();
router.get('/', async (req, res) => {
    const { title, page } = req.query;
    if ((typeof title === 'string') || (title === undefined)) {
        const query_title = title ? title : '';
        const pg = (typeof page === 'string') ? parseInt(page || '1') : 1;
        const items = await Tioanime_scraper.getByQuery(query_title, pg);
        res.json(items).end();
    }
    else {
        res.json({
            message: 'cannot get query, check if url has correct title and page queries.'
        }).end();
    }
});
export default router;
//# sourceMappingURL=search.js.map