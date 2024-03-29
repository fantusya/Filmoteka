import { refs } from '../constants/refs';
import { getWatchedFilms, getQueueFilms } from './storageActions';
import { createLibraryPagination } from '../pagination/paginationLibrary';

try {
  refs.btnWatched.addEventListener('click', onBtnWatchedClick);
  refs.btnQueue.addEventListener('click', onBtnQueueClick);
} catch {
}

export let currentLibrary = 'watched';
try {
  createLibraryPagination(`${currentLibrary}`);
} catch {
  // console.log('Данных еще нет');
}

function onBtnWatchedClick(e) {
  currentLibrary = 'watched';
  createLibraryPagination(`${currentLibrary}`);

  refs.btnWatched.style.backgroundColor = 'var(--button-bg-cl)';
  refs.btnWatched.style.borderColor = 'var(--button-bg-cl)';
  refs.btnQueue.style.backgroundColor = 'transparent';
  refs.btnQueue.style.borderColor = 'var(--main-bg-cl)';
}

function onBtnQueueClick(e) {
  currentLibrary = 'queue';
  createLibraryPagination(`${currentLibrary}`);

  refs.btnQueue.style.backgroundColor = 'var(--button-bg-cl)';
  refs.btnQueue.style.borderColor = 'var(--button-bg-cl)';
  refs.btnWatched.style.backgroundColor = 'transparent';
  refs.btnWatched.style.borderColor = 'var(--main-bg-cl)';
}
