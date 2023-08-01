import { refs } from '../constants/refs';
import { insertModalMarkupHome } from '../helpers/insertingIntoDifferentContainers';
import {addWatchedLocalStorage,addQueueLocalStorage} from '../helpers/storageActions';
import { translateItems } from '../translation/translationMap';
import { textModalBtn } from '../helpers/modalButtons';
import { makingModalCardMarkup } from '../markups/modalCard';
import { onCloseModalBtnClick, modalCloseByEsc, onModalCardBackdropClick } from '../helpers/modalActions';

refs.homeCardsContainer.addEventListener('click', clickOnMovie);
refs.closeModalBtn.addEventListener('click', onCloseModalBtnClick);
refs.modalCardBackdrop.addEventListener('click', onModalCardBackdropClick);

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

  const unParsedCurrentArrayFilms = localStorage.getItem('currentFilm');
  const parsedCurrentArrayFilms = JSON.parse(unParsedCurrentArrayFilms);

  let currentMovie = parsedCurrentArrayFilms.find(obj => obj.id == currentId);

  const render = makingModalCardMarkup(currentMovie);
  translateItems('.movie__container--rigth-side [data-key]');
  insertModalMarkupHome(render);

  //** Код для запису об'єктів в LOCAL STORAGE */
  const watchedBtn = document.querySelector('#watched-btn');
  watchedBtn.addEventListener('click', () => {

    if (watchedBtn.textContent === 'REMOVE FROM WATCHED') {
      watchedBtn.textContent = 'ADD TO WATCHED';
    }
    addWatchedLocalStorage(currentMovie, watchedBtn, style);
  });

  const queueBtn = document.querySelector('#queue-btn');
  queueBtn.addEventListener('click', () => {
    
    if (queueBtn.textContent === 'REMOVE FROM QUEUE') {
      queueBtn.textContent = 'ADD TO QUEUE';
    }
    addQueueLocalStorage(currentMovie, queueBtn, style);
  });
 

  textModalBtn(currentId);
}
