import { translateItems } from '../translation/translationMap';
import { refs } from '../constants/refs';
import { insertModalMarkupHome } from '../helpers/insertingIntoDifferentContainers';
import {
  addWatchedLocalStorage,
  addQueueLocalStorage,
  deleteQueue,
  deleteWatched,
} from '../helpers/storageActions';
import { textModalBtn } from '../helpers/modalButtons';
import { makingModalCardMarkup } from '../markups/modalCard';
import { onCloseModalBtnClick, modalCloseByEsc, onModalCardBackdropClick } from '../helpers/modalActions';

refs.libraryCardsContainer.addEventListener('click', clickOnMovie);
refs.closeModalBtn.addEventListener('click', onCloseModalBtnClick);
refs.modalCardBackdrop.addEventListener('click', onModalCardBackdropClick);

// Додано змінну для умови видалення фільму: головна сторінка чи бібліотека
const style = refs.homeCardsContainer;

function clickOnMovie(e) {
  if (
    e.target.nodeName !== 'IMG' &&
    e.target.nodeName !== 'B' &&
    e.target.nodeName !== 'P'
  ) {
    return;
  }

  document.body.classList.add('show-modal');
  window.addEventListener('keydown', modalCloseByEsc);

  const currentId = e.target.dataset.id;

  const currentFilms = localStorage.getItem('currentFilm');
  const parsedCurrentFilms = JSON.parse(currentFilms);

  const libraryMovieWatched = parsedCurrentFilms.find(obj => obj.id == currentId);

  const render = makingModalCardMarkup(libraryMovieWatched);

  translateItems('.movie__container--rigth-side [data-key]');
  insertModalMarkupHome(render);
  //** Код для запису об'єктів в LOCAL STORAGE */
  const watchedBtn = document.querySelector('#watched-btn');
  watchedBtn.addEventListener('click', () => {
    let arrayFilmsWatched = [];

    const watched = localStorage.getItem('watched');

    if (watched) {
      arrayFilmsWatched = JSON.parse(watched);
    }

    // Перевірка на наявність об'єкта в масиві фільмів "WATCHED"
    const isAddedFilm = arrayFilmsWatched.find(arr => arr.id == currentId);
    isAddedFilm
      ? deleteWatched(libraryMovieWatched)
      : addWatchedLocalStorage(libraryMovieWatched, watchedBtn, style);
    textModalBtn(currentId);
  });

  const queueBtn = document.querySelector('#queue-btn');
  queueBtn.addEventListener('click', () => {
    let arrayFilmsQueue = [];
    const q = localStorage.getItem('queue');
    if (q) {
      arrayFilmsQueue = JSON.parse(q);
    }

    // Перевірка на наявність об'єкта в масиві фільмів "QUEUE"
    const isAddedFilm = arrayFilmsQueue.find(arr => arr.id == currentId);
    isAddedFilm
      ? deleteQueue(libraryMovieWatched)
      : addQueueLocalStorage(libraryMovieWatched, queueBtn, style);
    textModalBtn(currentId);
  });
  textModalBtn(currentId);
}