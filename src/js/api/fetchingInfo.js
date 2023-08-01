import MoviesApiService from './moviesApiServiceClass';
import Spinner from '../components/spinner';
import makingMarkup from '../markups/cardItem';
import { insertFilmsMarkupToHome } from '../helpers/insertingIntoDifferentContainers';
import { createPagination } from '../pagination/pagination';
import { onFetchError } from './onFetchError';

const moviesApiService = new MoviesApiService();
const spinner = new Spinner();

// GETTING GENRES TO LOCALSTORAGE
moviesApiService
  .fetchGenres()
  .then(({ genres }) => {
    for (const { id, name } of genres) {
      localStorage.setItem(`genre_${id}`, name);
    }
  })
  .catch(error => console.log(error));

spinner.show();

// RENDERING MARKUP USING GENRES FROM LOCALSTORAGE
moviesApiService
  .fetchTrendingMovies()
  .then(({ results, total_results }) => {
    const markup = makingMarkup(results);

    spinner.hide();

    insertFilmsMarkupToHome(markup);

    createPagination(total_results);

    localStorage.setItem(`currentFilm`, JSON.stringify(results));
  })
  .catch(onFetchError);
