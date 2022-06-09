
import Tioanime_scraper, {
  AnimeSearch,
  TioanimeError
} from "tioanime-scraper-v1";

import express, {
  Request, Response,
  Router
} from 'express';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {

  const {q, p} =  req.query;
  // q , is title query (string)
  // p, is page (number)

  if( (typeof q === 'string') || (q === undefined) ) {
    
    const query_title: string = q? q: '';

    const pg: number = (typeof p === 'string')? parseInt(p ||'1'):1;

    const items: TioanimeError | AnimeSearch = await Tioanime_scraper.getByQuery(
      query_title, pg
    );
    
    res.json(items).end();

  } else {

    res.json({
      message: 'cannot get query, check if url has correct title and page queries.'
    }).end();

  }

});

export default router;