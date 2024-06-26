
import express, { 
  Router, Request, 
  Response 
} from 'express';

import Tioanime_scraper, {
  AnimeInfo, TioanimeError, 
  AnimeLinks
} from 'tioanime-scraper-v1';

const router: Router = express.Router();

router.get('/:id', async (req: Request, res:Response) => {

  const _id: string = req.params.id;

  const items: AnimeInfo | TioanimeError = await Tioanime_scraper.getAnimeInfo(_id);
  
  res.json(items).end();

});

router.get('/:id/chapter/:chapter', async (req:Request, res:Response) => {

  const _id: string = req.params.id;

  const chapter: string = req.params.chapter;

  try {

    const items: AnimeLinks | TioanimeError = await Tioanime_scraper.getAnimeChapter(
      _id, parseInt(chapter)
    );
      
    res.json(items).end();

  } 
  catch (err) { console.log(err); }

});


export default router;