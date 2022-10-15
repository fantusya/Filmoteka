import MoviesApiService from './api/moviesApiServiceClass';
import renderTrailer from './searchFilmByKeyword/render-trailer';
import renderBadRequest from './searchFilmByKeyword/renderBadRequest';

const movieApiServise = new MoviesApiService();

function onTrailerClickBtn(currentId) {
  try {
    movieApiServise
      .fetchFilmTrailer(currentId).then(films => {
        if (films.results.length === 0) {
          renderBadRequest()
          return;
        }
        renderTrailer(films.results[0].key);
    });
  } catch (err) {
    err => console.log(err);
  }
};

export { onTrailerClickBtn };