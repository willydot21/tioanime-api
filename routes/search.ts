
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

  const {title, page} =  req.query;

  if( (typeof title === 'string') || (title === undefined) ) {
    
    const query_title: string = title? title: '';

    const pg: number = (typeof page === 'string')? parseInt(page ||'1'):1;

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