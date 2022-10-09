import { getWatchedFilms } from './local_storage';
import { getQueueFilms } from './local_storage';
// import { gallery } from './refs';

// КНОПКИ БІБЛІОТЕКИ!!!!!!!!!!!!!!!!
// const btnWatchedLib = document.querySelector('.watched');
// const btnQueueLib = document.querySelector('.queue');

// clickWatched(btnWatchedLib, btnQueueLib);
// clickQueue(btnWatchedLib, btnQueueLib);

// function clickWatched(btnWatchedLib, btnQueueLib) {
//   btnWatchedLib.addEventListener('click', getWatchedFilms);

//   getWatchedFilms();
// }

// function clickQueue(btnWatchedLib, btnQueueLib) {
//   btnQueueLib.addEventListener('click', getQueueFilms);

//   getQueueFilms();
// }

// ФУНКЦІЯ ЗМІНИ ТЕКСТУ КНОПОК МОДАЛЬНОГО ВІКНА!!!!!!!!!!!!!!!!

async function textModalBtn(id) {
  const modalWatched = document.querySelector('.btn--accent');
  const modalQueue = document.querySelector('.btn-queue');
  // inList - функція перевірки НЯВНОСТІ фільму у бібліотеках!!!!!
  if (inList(id, 'watched')) {
    console.log('есть такой в watched');
    modalWatched.textContent = 'Added to watched';
    modalWatched.disabled = true;
    function changeText() {
      modalWatched.disabled = false;
      modalWatched.textContent = 'Remove from watched';
      modalWatched.classList.add('active');
    }
  } else {
    console.log('нет такого в watched');
    modalWatched.textContent = 'Add to watched';
    modalWatched.classList.remove('active');
    console.log('удаляем класс active');
    modalWatched.disabled = false;
  }
  // inList - функція перевірки НЯВНОСТІ фільму у бібліотеках!!!!!
  if (inList(id, 'queue')) {
    console.log('есть такой в queue');
    modalQueue.textContent = 'Added to queue';
    modalQueue.disabled = true;
    function changeText() {
      modalQueue.disabled = false;
      modalQueue.textContent = 'Remove from queue';
      modalQueue.classList.add('active');
    }
  } else {
    console.log('нет такого в queue');
    modalQueue.textContent = 'Add to queue';
    modalQueue.classList.remove('active');
    modalQueue.disabled = false;
  }
}

const modalQueue = document.querySelector('.btn-queue');
const modalWatched = document.querySelector('.btn--accent');

modalQueue.addEventListener('click', getQueueFilms);
modalWatched.addEventListener('click', getWatchedFilms);

// function inList(id, list) {

// }
