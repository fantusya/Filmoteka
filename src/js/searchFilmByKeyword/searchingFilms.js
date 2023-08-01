import { refs } from '../constants/refs';
import MoviesApiService from '../api/moviesApiServiceClass';
import Spinner from '../components/spinner';
import makingMarkup from '../markups/cardItem';
import { insertFilmsMarkupToHome } from '../helpers/insertingIntoDifferentContainers';
import { createPagination } from '../pagination/paginationQuery';
import timeoutForBadRequest from './timeoutForBadRequest';
import { onFetchError } from '../api/onFetchError';


const movieApiServise = new MoviesApiService();
const spinner = new Spinner();

refs.formSearch.addEventListener('submit', onSearchFilmByKeyword);

//* функція обробляє результат fetch та викликає на його основі рендеринг головної сторінки
function onSearchFilmByKeyword(e) {
  e.preventDefault();

  const searchFilms = e.currentTarget.elements.searchInput.value.trim();
  if (!searchFilms) {
    return 
  }

  movieApiServise.query = searchFilms;

  spinner.show();
  try {
    movieApiServise
      .fetchSearchingMovies()
      .then(({ results, total_results }) => {
        spinner.hide();

        if (results.length === 0) {
          timeoutForBadRequest();
          return;
        }

        refs.homeCardsContainer.innerHTML = '';
        const searchingMarkup = makingMarkup(results);
        insertFilmsMarkupToHome(searchingMarkup);
        createPagination(total_results, searchFilms);
        localStorage.setItem(`currentFilm`, JSON.stringify(results));
      });
  } catch (err) {
    onFetchError();
  }

  refs.inputSearch.value = '';
  refs.filmsSearchList.innerHTML = '';
  refs.filmsSearchList.classList.remove('search-form__list--bgc');
}
