import { dataStudents } from './data-students';

// функция открытия и закрытия модального окна ,описывающего студентов

const open = document.querySelector('[modal-open]');
const close = document.querySelector('.modal-btn_students');
const backdrop = document.querySelector('.backdrop_students');

close.addEventListener('click', closeModal);
open.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();
  backdrop.classList.remove('is-hidden');
}

function closeModal() {
  backdrop.classList.add('is-hidden');
  window.addEventListener('keydown', closeKeyboard);
  function closeKeyboard(e) {
    if (e.key === 'Escape') {
      backdrop.classList.add('is-hidden');
    }
  }
}
