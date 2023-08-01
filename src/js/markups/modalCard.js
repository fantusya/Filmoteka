import { BASE_POSTER_URL, FALLBACK_IMG_PATH } from "../constants/baseUrls";
import { gettingGenresListForModal } from "../helpers/gettingGenresList";
import { setReleaseVote } from "../helpers/setReleaseInfo";

export function makingModalCardMarkup(obj) {
    console.log(obj)
  const { id, poster_path, title, name, vote_average, vote_count, popularity, original_title, original_name, genre_ids, overview } = obj;
    
  let imagePath = ``;
    
  poster_path
    ? (imagePath = `${BASE_POSTER_URL}/${poster_path}`)
    : (imagePath = FALLBACK_IMG_PATH);
    
  const markup = `<div class="movie__container--left-side">              
                  <img class="movie__image" src="${imagePath}" alt="${title || name}" />
                  </div>
            <div class="movie__container--rigth-side">
                <h2 class="movie__title">${title || name}</h2>
                <table class="movie__info">
                    <tbody>
                        <tr class="movie__info-rows">
                            <td class="movie__info-name" data-key="votes">Vote / Votes</td>
                            <td class="movie__info-rating">
                                <span class="movie__info-rating-value movie__info-rating--accent">${setReleaseVote(vote_average)}</span>
                                <span class="movie__info-rating-slash">/</span>
                                <span class="movie__info-rating-value">${setReleaseVote(vote_count)}</span>
                            </td>
                        </tr>
                        <tr class="movie__info-rows">
                            <td class="movie__info-name" data-key="popularity">Popularity</td>
                            <td class="movie__info-numbers">${popularity}</td>
                        </tr>
                        <tr class="movie__info-rows">
                            <td class="movie__info-name" data-key="originalTitle">Original Title</td>
                            <td class="movie__info-value">${original_title || original_name}</td>
                        </tr>
                        <tr class="movie__info-rows movie__info-rows--last">
                            <td class="movie__info-name" data-key="genre">Genre</td>
                            <td class="movie__info-value">${gettingGenresListForModal(genre_ids) || 'Genre not defined'}</td>
                        </tr>
                    </tbody>
                </table>
                <h2 class="movie__about-title" data-key="about">About</h2>
                <p class="movie__about-text">${overview || 'No text'}</p>
                <div class="movie__btn-container">
                    <button type="submit" id="watched-btn" data-id="${id}" class="movie__btn btn btn--accent">ADD TO WATCHED</button>
                    <button type="submit" id="queue-btn" data-id="${id}" class="movie__btn btn btn-queue">ADD TO QUEUE</button>
                </div>
            </div>
        </div>`;
  return markup;
}