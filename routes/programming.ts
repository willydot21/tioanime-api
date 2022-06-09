
import Tioanime_scraper, {
  TioanimeError, AnimeProgramming
} from "tioanime-scraper-v1";

import express, {
  Request, Response, Router
} from 'express';

const router: Router = express.Router();

router.get('/', async (_req:Request, res:Response) => {

  const items: TioanimeError | AnimeProgramming = await Tioanime_scraper.getAnimeProgramming();

  res.json(items).end();

})

export default router;

