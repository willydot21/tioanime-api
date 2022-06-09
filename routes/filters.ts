
import Tioanime_scraper, {
  TioanimeError, FiltersResult,
  Filters 
} from "tioanime-scraper-v1";

import {handlerParseQuery} from "../src/utils.js";

import express, {
  Router, Request, Response
} from "express";

const router: Router = express.Router();

router.get('/', async (req:Request, res:Response) => {

  const {
    type, genre,
    year, status,
    sort, p
  } = req.query;
  // p is page.

  const filters: Filters = {
    types: handlerParseQuery(type),
    genres: handlerParseQuery(genre),
    years: handlerParseQuery(year),
    status: (typeof status === 'string')? status : '',
    sort: (typeof sort === 'string')? sort : '',
    page: (typeof p === 'string')? (parseInt(p) || 1): 1
  }
  
  const items: FiltersResult | TioanimeError = await Tioanime_scraper.getAnimesFromFilters(filters);

  res.json(items).end();

});

export default router;