export function genresNotFound() {
  const lang = localStorage.getItem('lang');
  if (!lang || lang === 'en-US') {
    return 'Genres not found';
  }
  if (lang === 'uk-UA') {
    return 'Жанри не знайдено';
  }
}

export function noYearData() {
  const lang = localStorage.getItem('lang');
  if (!lang || lang === 'en-US') {
    return 'No data';
  }
  if (lang === 'uk-UA') {
    return 'Немає даних';
  }
}