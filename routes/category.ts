
import Tioanime_scraper, {
  TioanimeError, Filters,
  FiltersResult
} from "tioanime-scraper-v1";

import express, { 
  Router, Request, Response
} from "express";

import { types, genres } from "../src/utils.js";

const router: Router = express.Router();

router.get('/', (_req:Request, res:Response) => {
  res.json({
    example_url: '/category/shounen?type=ova',
    genres, types
  }).end();
});

router.get('/:category', async (req:Request, res:Response) => {

  if(Array.isArray(req.query.type)) {
    req.query.type = req.query.type[0];
  }

  const category: string = req.params.category;

  const type: string = (typeof req.query.type === 'string')? req.query.type:'';

  const page = req.query.p; // page

  const pg: number = (typeof page === 'string')? parseInt(page || '1'): 1;

  const filters: Filters = {
    types: [type],
    genres: [category],
    page: pg
  }

  const items: TioanimeError | FiltersResult = await Tioanime_scraper.getAnimesFromFilters(filters);

  res.json(items).end();

});

export default router;
