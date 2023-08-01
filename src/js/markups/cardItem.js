import { gettingGenresListForCard } from '../helpers/gettingGenresList';
import { setReleaseDate, setReleaseVote } from '../helpers/setReleaseInfo';
import { BASE_POSTER_URL, FALLBACK_IMG_PATH } from '../constants/baseUrls';
import { genresNotFound, noYearData } from '../helpers/noInfoFound';


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
        id,
      }) => {
        let imagePath = ``;
        !poster_path
          ? (imagePath = FALLBACK_IMG_PATH)
          : (imagePath = `${BASE_POSTER_URL}/${poster_path}`);

        return `<li data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
     class="movie-card">
        <div data-id="${id}" class="movie-card__link" href="#">
        <p data-id="${id}" class="movie-card__raiting">
                        <b data-id="${id}">${setReleaseVote(vote_average)}</b>
                    </p>
<img data-id="${id}" width="280" height="402" class="movie-card__img" src="${imagePath}" alt="${
          title || name
        } " loading="lazy"/>
    <div data-id="${id}" data-aos="fade-right"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"
     class="movie-card__cont">
                  <h2 data-id="${id}" class="movie-card__title">${
          title || name
        }</h2>
                    <p data-id="${id}" class="movie-card__info">
                        <b data-id="${id}">${
          gettingGenresListForCard(genre_ids) || genresNotFound()
        } | </b>
                    </p>
                    <p data-id="${id}" class="movie-card__info">
                      <b data-id="${id}">${
          setReleaseDate(release_date, first_air_date) || noYearData()
        }
                        </b>
                    </p>   
                    </div>
                    </div>
                </li>`;
      }
    )
    .join('');
  return markup;
}




