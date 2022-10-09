import { refs } from './../refs';
import fetchFilms from './fetch_search_films';
import MoviesApiService from '../api/moviesApiServiceClass';
import makingMarkup from '../api/render-card-markup';
import { createPagination } from '../pagination';

const movieApiServise = new MoviesApiService();

refs.formSearch.addEventListener('submit', onSearchFilmByKeyword);

//* функція обробляє результат fetch та викликає на його основі рендеринг головної сторінки
function onSearchFilmByKeyword(e) {
  e.preventDefault();

  const searchFilms = e.currentTarget.elements.searchInput.value.trim();
  movieApiServise.query = searchFilms;

  try {
    fetchFilms(searchFilms).then(({ results, total_results }) => {
      if(results.length === 0) {
        const markup = '<p class="search-form--badrequest">Search result not successful. Enter the correct movie name!</p>';
        refs.filmsSearchList.innerHTML = markup;
        return;
      }
      refs.homeCardsContainer.innerHTML = '';
      makingMarkup(results);
      createPagination(total_results);
    });
  } catch (err) {
    err => console.log(err);
  };

  refs.inputSearch.value = '';
  refs.filmsSearchList.innerHTML = '';
  refs.filmsSearchList.classList.remove('search-form__list--bgc');
};