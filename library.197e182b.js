!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var a=o("4Nugj"),i=o("cbazt");a.refs.btnWatched.addEventListener("click",(function(e){(0,i.getWatchedFilms)(),a.refs.btnWatched.style.backgroundColor="var(--button-bg-cl)",a.refs.btnWatched.style.borderColor="var(--button-bg-cl)",a.refs.btnQueue.style.backgroundColor="transparent",a.refs.btnQueue.style.borderColor="var(--header-text-cl)"})),a.refs.btnQueue.addEventListener("click",(function(e){(0,i.getQueueFilms)(),a.refs.btnQueue.style.backgroundColor="var(--button-bg-cl)",a.refs.btnQueue.style.borderColor="var(--button-bg-cl)",a.refs.btnWatched.style.backgroundColor="transparent",a.refs.btnWatched.style.borderColor="var(--header-text-cl)"})),(0,i.getWatchedFilms)();var r=o("iSn7Y");o("37jAB");a=o("4Nugj");var s=o("j7yxE"),d=(i=o("cbazt"),o("4uNB6"));function c(){window.removeEventListener("keydown",l),document.body.classList.remove("show-modal"),a.refs.modalCardContainer.innerHTML=""}function l(e){"Escape"===e.code&&c()}a.refs.libraryCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"B"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",l);var t=e.target.dataset.id,n=localStorage.getItem("currentFilm"),o=JSON.parse(n).find((function(e){return e.id==t})),a=(c=o,'<div class="movie__container--left-side">              \n                  <img class="movie__image" src="https://www.themoviedb.org/t/p/w500'.concat(c.poster_path||"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png",'"\n                    alt="').concat(c.title||c.name,"\" />\n\n                    <button type=\"button\" class=\"movie__btn-trailer\">\n                        <svg width='100' height='60' class='youtube-icon' viewBox='0 -77 512.00213 512'>\n                            <path\n                                d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0'\n                                fill='#f00'></path>\n                            <path d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' fill='#fff'></path>\n                        </svg>                      \n                    </button>                \n            </div>\n            <div class=\"movie__container--rigth-side\">\n                <h2 class=\"movie__title\">").concat(c.title||c.name,'</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">').concat(c.vote_average,'</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">').concat(c.vote_count,'</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Popularity</td>\n                            <td class="movie__info-numbers">').concat(c.popularity,'</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Original Title</td>\n                            <td class="movie__info-value">').concat(c.original_title||c.original_name,'</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name">Genre</td>\n                            <td class="movie__info-value">').concat((0,r.gettingGenresListForModal)(c.genre_ids)||"Genre not defined",'</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title">About</h2>\n                <p class="movie__about-text">\n                    ').concat(c.overview||"No text",'\n                </p>\n                <div class="movie__btn-container">\n                   \n                    <button type="submit" id="watched-btn" data-id="').concat(c.id,'" class="movie__btn btn btn--accent">ADD TO WATCHED\n                        </button>\n                    <button type="submit" id="queue-btn" data-id="').concat(c.id,'" class="movie__btn btn btn-queue">ADD TO QUEUE\n                        </button>\n                </div>\n            </div>\n        </div>'));var c;(0,s.insertModalMarkupHome)(a),document.querySelector("#watched-btn").addEventListener("click",(function(){var e=[],n=localStorage.getItem("watched");n&&(e=JSON.parse(n)),e.find((function(e){return e.id==t}))?(0,i.deleteWatched)(o):(0,i.addWatchedLocalStorage)(o),(0,d.textModalBtn)(t)})),document.querySelector("#queue-btn").addEventListener("click",(function(){var e=[],n=localStorage.getItem("queue");n&&(e=JSON.parse(n)),e.find((function(e){return e.id==t}))?(0,i.deleteQueue)(o):(0,i.addQueueLocalStorage)(o),(0,d.textModalBtn)(t)})),(0,d.textModalBtn)(t)})),a.refs.closeModalBtn.addEventListener("click",c),a.refs.modalCardBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&c()})),o("ivF4K"),o("6IdhT"),o("3MGSC")}();
//# sourceMappingURL=library.197e182b.js.map
