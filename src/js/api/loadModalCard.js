import { gettingGenresListForModal } from './gettingGenresList';
import makingMarkup from '../api/render-card-markup';
import { setReleaseVote } from './setReleaseDate';
// import MoviesApiService from './moviesApiServiceClass';
import { refs } from '../refs';
import { insertModalMarkupHome } from './insertingIntoDifferentContainers';
import {
  addWatchedLocalStorage,
  addQueueLocalStorage,
  deleteQueue,
  deleteWatched,
} from '../local_storage';
import { translateItems } from '../translation';
import { textModalBtn } from '../modal-btns';
import { BASE_POSTER_URL } from '../api/constants/baseUrls';
import { setReleaseVote } from '../api/setReleaseDate';

// const moviesApiService = new MoviesApiService();
//* для відкриття трейлеру
import { onTrailerClickBtn } from '../movie-trailer';

refs.homeCardsContainer.addEventListener('click', clickOnMovie);
refs.closeModalBtn.addEventListener('click', onCloseModalBtnClick);
refs.modalCardBackdrop.addEventListener('click', onModalCardBackdropClick);

// Додано змінну для умови видалення фільму: головна сторінка чи бібліотека
const style = refs.homeCardsContainer;

function clickOnMovie(e) {
  if (
    e.target.nodeName !== 'IMG' &&
    e.target.nodeName !== 'DIV' &&
    e.target.nodeName !== 'B' &&
    e.target.nodeName !== 'H2' &&
    e.target.nodeName !== 'P'
  ) {
    return;
  }

  document.body.classList.add('show-modal');
  window.addEventListener('keydown', modalCloseByEsc);

  const currentId = e.target.dataset.id;
  const unParsedCurrentArrayFilms = localStorage.getItem('currentFilm');
  const parsedCurrentArrayFilms = JSON.parse(unParsedCurrentArrayFilms);

  // console.log(parsedCurrentArrayFilms.find(obj => obj.id == currentId));
  let currentMovie = parsedCurrentArrayFilms.find(obj => obj.id == currentId);

  const render = makingModalCardMarkup(currentMovie);
  translateItems('.movie__container--rigth-side [data-key]');
  insertModalMarkupHome(render);
  ///////////////////////////////////////////////////////////////////////////
  //** Код для запису об'єктів в LOCAL STORAGE */
  const watchedBtn = document.querySelector('#watched-btn');
  watchedBtn.addEventListener('click', () => {
    // -----------Видалення фільму з сторінки Home----------
    //  Потрібно узгодити із local.storage.js!!!!!!!!!!!
    // let arrayFilmsWatched = [];
    // const w = localStorage.getItem('watched');
    // if (w) {
    //   arrayFilmsWatched = JSON.parse(w);
    // }

    // Перевірка на наявність об'єкта в масиві фільмів "WATCHED"
    // const isAddedFilm = arrayFilmsWatched.find(arr => arr.id == currentId);
    //     if (isAddedFilm) {
    //   console.log('ЗАПУСК!!!!!!!!!!!');
    //   textModalBtn(currentId);
    // }
    //   ? deleteWatched(currentMovie)
    //   : addWatchedLocalStorage(currentMovie);
    // ----------------------------------

    if (watchedBtn.textContent === 'REMOVE FROM WATCHED') {
      watchedBtn.textContent = 'ADD TO WATCHED';
    }
    addWatchedLocalStorage(
      currentMovie,
      watchedBtn,
      style
    );
  });

  const queueBtn = document.querySelector('#queue-btn');
  queueBtn.addEventListener('click', () => {
    // ---------------Видалення фільму з сторінки Home----------
    // let arrayFilmsQueue = [];
    // const q = localStorage.getItem('queue');
    // if (q) {
    //   arrayFilmsQueue = JSON.parse(q);
    // }

    // // Перевірка на наявність об'єкта в масиві фільмів "QUEUE"
    // const isAddedFilm = arrayFilmsQueue.find(arr => arr.id == currentId);
    // isAddedFilm
    //   ? deleteQueue(currentMovie)
    //   : addQueueLocalStorage(currentMovie);
    // -------------------------------------------------
    if (queueBtn.textContent === 'REMOVE FROM QUEUE') {
      queueBtn.textContent = 'ADD TO QUEUE';
    }
    addQueueLocalStorage(
      currentMovie,
      queueBtn,
      style
    );
    // textModalBtn(currentId);
  });
  /////////////////////////////////////////////////////////////////////////////

  //* слухач на відкриття трейлеру
  const btnTrailer = document.querySelector('.movie__btn-trailer');
  btnTrailer.addEventListener('click', onTrailerClickBtn(currentId));

  textModalBtn(currentId);
}

function onCloseModalBtnClick() {
  window.removeEventListener('keydown', modalCloseByEsc);
  document.body.classList.remove('show-modal');
  refs.modalCardContainer.innerHTML = '';
}

function modalCloseByEsc(e) {
  if (e.code === 'Escape') {
    onCloseModalBtnClick();
  }
}

function onModalCardBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModalBtnClick();
  }
}
//function creatPoster(poster_path) {
//return poster_path
// ? `https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png`
// : `${BASE_POSTER_URL}/${BASE_POSTER_URL}/${poster_path}`;
//}

function makingModalCardMarkup(obj) {
  let imagePath = ``;
  !obj.poster_path
    ? (imagePath = `https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png`)
    : (imagePath = `${BASE_POSTER_URL}/${obj.poster_path}`);
  const markup = `<div class="movie__container--left-side">              
                  <img class="movie__image" src="${imagePath}"
                    alt="${obj.title || obj.name}" />
                    <button type="button" class="movie__btn-trailer">
                    </button>                
            </div>
            <div class="movie__container--rigth-side">
                <h2 class="movie__title">${obj.title || obj.name}</h2>
                <table class="movie__info">
                    <tbody>
                        <tr class="movie__info-rows">
                            <td class="movie__info-name" data-key="votes">Vote / Votes</td>
                            <td class="movie__info-rating">
                                <span class="movie__info-rating-value movie__info-rating--accent">${setReleaseVote(
                                  obj.vote_average
                                )}</span>
                                <span class="movie__info-rating-slash">/</span>
                                <span class="movie__info-rating-value">${setReleaseVote(
                                  obj.vote_count
                                )}</span>
                            </td>
                        </tr>
                        <tr class="movie__info-rows">
                            <td class="movie__info-name" data-key="popularity">Popularity</td>
                            <td class="movie__info-numbers">${
                              obj.popularity
                            }</td>
                        </tr>
                        <tr class="movie__info-rows">
                            <td class="movie__info-name" data-key="originalTitle">Original Title</td>
                            <td class="movie__info-value">${
                              obj.original_title || obj.original_name
                            }</td>
                        </tr>
                        <tr class="movie__info-rows movie__info-rows--last">
                            <td class="movie__info-name" data-key="genre">Genre</td>
                            <td class="movie__info-value">${
                              gettingGenresListForModal(obj.genre_ids) ||
                              'Genre not defined'
                            }</td>
                        </tr>
                    </tbody>
                </table>
                <h2 class="movie__about-title" data-key="about">About</h2>
                <p class="movie__about-text">
                    ${obj.overview || 'No text'}
                </p>
                <div class="movie__btn-container">
                   
                    <button type="submit" id="watched-btn" data-id="${
                      obj.id
                    }" class="movie__btn btn btn--accent">ADD TO WATCHED
                        </button>
                    <button type="submit" id="queue-btn" data-id="${
                      obj.id
                    }" class="movie__btn btn btn-queue">ADD TO QUEUE
                        </button>
                </div>
            </div>
        </div>`;
  return markup;
}

export { makingModalCardMarkup };
