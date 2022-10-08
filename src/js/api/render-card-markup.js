import gettingGenresList from './gettingGenresList';

const BASE_POSTER_URL = `https://image.tmdb.org/t/p/w500`;

// export default function makingMarkup(data) {
//   const res = data.results;
//   return res
//     .map(
//       ({
//         title,
//         name,
//         release_date,
//         genre_ids,
//         first_air_date,
//         poster_path,
//         vote_average,
//       }) => {
//         return `<div class="movie-card">
//             <img class="movie-card__img" src="${BASE_POSTER_URL}/${poster_path}" alt="" loading="lazy"/>
//             <div class="info">
//                 <p class="info-item">
//                     <b>${title || name}</b>
//                 </p>
//                 <p class="info-item">
//                     <b>${release_date || first_air_date}</b>
//                 </p>
//                 <p class="info-item">
//                     <b>${vote_average}</b>
//                 </p>
//             </div>
//         </div>
//     `;
//       }
//     )
//     .join('');
// }

export default function makingMarkup(results) {
  const markup = results
    .map(
      ({
        title,
        name,
        poster_path,
        genre_ids,
        release_date,
        first_air_date,
        vote_average,
      }) => {
        return `<li class="movie-card">
                <img class="movie-card__img" src="${BASE_POSTER_URL}/${poster_path}" alt="" loading="lazy"/>
                  <h2 class="movie-card__title">${title || name}</h2>
                    <p class="movie-card__info">
                        <b>${gettingGenresList(genre_ids)} </b>
                    </p>
                    <p class="movie-card__info">
                    conslo
                        <b>${release_date || first_air_date}</b>
                    </p>
                       <p class="movie-card__raiting">
                        <b>${vote_average}</b>
                    </p>
            </li>`;
      }
    )
    .join('');
  return markup;
}
