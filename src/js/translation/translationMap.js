import i18next from 'i18next';
import { refs } from '../constants/refs';
import MoviesApiService from '../api/moviesApiServiceClass';
import makingMarkup from '../markups/cardItem';
import { insertFilmsMarkupToHome } from '../helpers/insertingIntoDifferentContainers';

const moviesApiService = new MoviesApiService();

i18next.init(
  {
    lng: localStorage.getItem('lang'),
    debug: false,
    returnObjects: true,
    resources: {
      'en-US': {
        translation: {
          home: 'Home',
          library: 'My library',
          search: 'Movie search',
          watched: 'Watched',
          queue: 'Queue',
          rights: '| All Rights Reserved |',
          developed: 'Developed with',
          students: 'by GoIT Students',
          support: 'Support',
          emptyList: 'Your list is still empty',
          votes: 'Vote / Votes',
          popularity: 'Popularity',
          originalTitle: 'Original Title',
          genre: 'Genre',
          about: 'About',
          other: 'Other',
          responseError: 'Sorry, no response from server!',
        },
      },
      'uk-UA': {
        translation: {
          home: 'Головна',
          library: 'Моя бібліотека',
          search: 'Пошук фільмів',
          watched: 'Переглянуто',
          queue: 'В черзі',
          rights: '| Всі права захищено |',
          developed: 'Розроблено з',
          students: 'студентами GoIT',
          support: 'Підтримати',
          emptyList: 'Наразі тут пусто',
          votes: 'Рейтинг / Голосів',
          popularity: 'Популярність',
          originalTitle: 'Оригінальна назва',
          genre: 'Жанр',
          about: 'Опис',
          other: 'Інші',
          responseError: 'Вибачте, сервер не відповідає!',
        },
      },
    },
  },
  function (err, t) {
    if (!localStorage.getItem('lang')) {
      i18next.changeLanguage('en-US');
    }
    updateContent();
    bindLanguageSwitcher();
  }
);

function updateContent() {
  document.querySelectorAll('[data-key]').forEach(translateElement);
}
function translateElement(element) {
  const key = element.getAttribute('data-key');

  if (element.tagName === 'INPUT') {
    element.placeholder = i18next.t(key);
  }
  element.innerText = i18next.t(key);
}
function bindLanguageSwitcher() {
  const switcher = document.querySelector('[data-switcher]');
  switcher.value = i18next.language;
  switcher.onchange = event => {
    if (!localStorage.getItem('page')) {
      moviesApiService.page = 1;
    } else {
      moviesApiService.page = localStorage.getItem('page');
    }
    changeLanguage(event.target.value);
    const libraryLink = document.querySelector('.library');
    if (!libraryLink.classList.contains('menu__link--current')) {
      refs.homeCardsContainer.innerHTML = '';
      moviesApiService
        .fetchGenres()
        .then(({ genres }) => {
          for (const { id, name } of genres) {
            localStorage.setItem(`genre_${id}`, name);
          }
        })
        .catch(error => console.log(error));

      moviesApiService
        .fetchTrendingMovies()
        .then(({ results }) => {
          const markup = makingMarkup(results);

          insertFilmsMarkupToHome(markup);
          localStorage.setItem(`currentFilm`, JSON.stringify(results));
        })
        .catch(error => console.log(error));
    }
  };
}
localStorage.removeItem('page');

function changeLanguage(lng) {
  localStorage.setItem('lang', lng);
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});

export function translateItems(string) {
  setTimeout(() => {
    document.querySelectorAll(string).forEach(translateElement);
  }, 200);
}
