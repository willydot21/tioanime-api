
import Tioanime_scraper, {
  TioanimeError, AnimeAllLatest,
  ArticleItem, SectionItem
} from 'tioanime-scraper-beta';

import express, { 
  Router, Request, 
  Response 
} from 'express';

const router: Router = express.Router();

router.get('/', async (_req: Request, res: Response) => {

  const items: AnimeAllLatest = await Tioanime_scraper.getLatest('*') as AnimeAllLatest;
  
  res.json({
    animes: items.animes.length,
    chapters: items.chapters.length,
    movies: items.movies.length,
    ovas: items.ovas.length,
    specials: items.specials.length
  }).end();

});

router.get('/:section', async (req: Request, res: Response) => {

  const section: string = req.params.section;

  const items: 
    TioanimeError | AnimeAllLatest | 
    ArticleItem[] | SectionItem[] = await Tioanime_scraper.getLatest(section);

  res.json(items).end();

});

export default router;