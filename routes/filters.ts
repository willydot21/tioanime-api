
import Tioanime_scraper, {
  TioanimeError, FiltersResult,
  Filters 
} from "tioanime-scraper-beta";

import {handlerParseQuery} from "../src/utils.js";

import express, {
  Router, Request, Response
} from "express";

const router: Router = express.Router();

router.get('/', async (req:Request, res:Response) => {

  const {
    type, genre,
    year, status,
    sort, page
  } = req.query;

  const filters: Filters = {
    types: handlerParseQuery(type),
    genres: handlerParseQuery(genre),
    years: handlerParseQuery(year),
    status: (typeof status === 'string')? status : '',
    sort: (typeof sort === 'string')? sort : '',
    page: (typeof page === 'string')? (parseInt(page) || 1): 1
  }
  
  const items: FiltersResult | TioanimeError = await Tioanime_scraper.getAnimesFromFilters(filters);

  res.json(items).end();

});

export default router;