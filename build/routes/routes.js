import * as anime_router from './anime.js';
import * as anime_latest_router from './latest.js';
import * as anime_search from './search.js';
import * as category from './category.js';
import * as programming from './programming.js';
import * as filters from './filters.js';
const routes = {
    anime: anime_router.default,
    anime_latest: anime_latest_router.default,
    anime_search: anime_search.default,
    anime_filter: filters.default,
    category: category.default,
    programming: programming.default,
};
export default routes;
//# sourceMappingURL=routes.js.map