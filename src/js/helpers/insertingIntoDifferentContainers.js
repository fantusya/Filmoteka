import { refs } from '../constants/refs';

// FUNCTION FOR INSERTING MARKUP TO HOME-CARDS-CONTAINER
export const insertFilmsMarkupToHome = filmsMarkup =>
  refs.homeCardsContainer.insertAdjacentHTML('beforeend', filmsMarkup);

// FUNCTION FOR INSERTING MARKUP TO LIBRARY-CARDS-CONTAINER
export const insertFilmsMarkupToLibrary = filmsMarkup =>
  refs.libraryCardsContainer.insertAdjacentHTML('beforeend', filmsMarkup);


// FUNCTION FOR INSERTING MARKUP TO MODAL_HOME
export const insertModalMarkupHome = markup => 
refs.modalCardContainer.insertAdjacentHTML('beforeend', markup);