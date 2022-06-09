import express from 'express';
import dotenv from 'dotenv';
import routes from '../routes/routes.js';
const __dirname = new URL('../src', import.meta.url);
dotenv.config({
    path: __dirname + '/.env'
});
const PORT = process.env.PORT || 3001;
const app = express();
app.use(['/api/filters', '/api/filter'], routes.anime_filter);
app.use(['/api/anime', '/api/animes'], routes.anime);
app.use(['/api/latest', '/api/latests'], routes.anime_latest);
app.use(['/api/search', '/api/find'], routes.anime_search);
app.use('/api/category', routes.category);
app.use('/api/programming', routes.programming);
app.use((_req, res, _next) => {
    res.status(404).end();
});
app.listen(PORT, () => {
    console.log(`Running at port ${PORT}!`);
});
//# sourceMappingURL=index.js.map