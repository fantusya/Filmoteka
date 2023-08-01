import Pagination from 'tui-pagination';
import makingMarkup from '../markups/cardItem';
import { insertFilmsMarkupToLibrary } from '../helpers/insertingIntoDifferentContainers';
import { refs } from '../constants/refs';
import { clearLibrary } from '../helpers/storageActions';
import { addScreenSaver } from '../helpers/storageActions';

export const container = document.getElementById('pagination-library');
export function createLibraryPagination(name) {
  let fullLibrary = JSON.parse(localStorage.getItem(`${name}`));

  if (!fullLibrary || fullLibrary.length === 0) {
    try {
      container.innerHTML = '';
    } catch {
      // console.log('Данных еще нет');
    }
    clearLibrary();
    addScreenSaver();
    return;
  }

  const options = {
    totalItems: fullLibrary.length,
    itemsPerPage: 10,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const mediaQuery = window.matchMedia('(max-width: 768px)');
  mediaQuery.addEventListener('change', handleMobileChange);

  function handleMobileChange(event) {
    if (event.matches) {
      options.visiblePages = 3;
    }
  }
  handleMobileChange(mediaQuery);

  const pagination = new Pagination(container, options);
  displayList(fullLibrary, options.itemsPerPage, options.page);

  pagination.on('afterMove', event => {
    refs.libraryCardsContainer.innerHTML = '';
    const currentPage = event.page;
    displayList(fullLibrary, options.itemsPerPage, currentPage);
  });

  function displayList(items, rows_per_page, page) {
    refs.libraryCardsContainer.innerHTML = '';
    page -= 1;

    let start = rows_per_page * page;
    let end = start + rows_per_page;

    if (!items || items.length === 0) {
      refs.libraryCardsContainer.innerHTML = '';
      container.innerHTML = '';
      return;
    }

    const results = items.slice(start, end);
    const renderWatched = makingMarkup(results);
    insertFilmsMarkupToLibrary(renderWatched);
  }
}
