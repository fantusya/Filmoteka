!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var i=o("4Nugj");o("cbazt");var r=o("1VFfL"),s=o("37jAB"),l=o("j7yxE"),c=(i=o("4Nugj"),JSON.parse(localStorage.getItem("watched")));function d(t){c=JSON.parse(localStorage.getItem("".concat(t)));var n=document.getElementById("pagination-library");if(!c)return n.innerHTML="",void(i.refs.libraryCardsContainer.innerHTML='<div style="font-size: 20px">Your list is still empty</div>');var a={totalItems:c.length,itemsPerPage:6,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},o=window.matchMedia("(max-width: 768px)");function d(e){e.matches&&(a.visiblePages=3)}o.addEventListener("change",d),d(o);var u=new(e(r))(n,a);function v(e,t,n){i.refs.libraryCardsContainer.innerHTML="";var a=t*(n-=1),o=a+t;if(e){var r=e.slice(a,o),c=(0,s.default)(r);(0,l.insertFilmsMarkupToLibrary)(c)}}v(c,a.itemsPerPage,a.page),u.on("afterMove",(function(e){i.refs.libraryCardsContainer.innerHTML="";var t=e.page;v(c,a.itemsPerPage,t)}))}d("watched"),i.refs.btnWatched.addEventListener("click",(function(e){d("watched"),i.refs.btnWatched.style.backgroundColor="var(--button-bg-cl)",i.refs.btnWatched.style.borderColor="var(--button-bg-cl)",i.refs.btnQueue.style.backgroundColor="transparent",i.refs.btnQueue.style.borderColor="var(--header-text-cl)"})),i.refs.btnQueue.addEventListener("click",(function(e){d("queue"),i.refs.btnQueue.style.backgroundColor="var(--button-bg-cl)",i.refs.btnQueue.style.borderColor="var(--button-bg-cl)",i.refs.btnWatched.style.backgroundColor="transparent",i.refs.btnWatched.style.borderColor="var(--header-text-cl)"}));var u=o("iSn7Y");o("37jAB");i=o("4Nugj"),l=o("j7yxE");var v=o("cbazt"),f=o("4uNB6");function m(){window.removeEventListener("keydown",g),document.body.classList.remove("show-modal"),i.refs.modalCardContainer.innerHTML=""}function g(e){"Escape"===e.code&&m()}i.refs.libraryCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"B"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",g);var t=e.target.dataset.id,n=localStorage.getItem("currentFilm"),a=JSON.parse(n).find((function(e){return e.id==t})),o=(i=a,'<div class="movie__container--left-side">              \n                  <img class="movie__image" src="https://www.themoviedb.org/t/p/w500'.concat(i.poster_path||"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png",'"\n                    alt="').concat(i.title||i.name,"\" />\n\n                    <button type=\"button\" class=\"movie__btn-trailer\">\n                        <svg width='100' height='60' class='youtube-icon' viewBox='0 -77 512.00213 512'>\n                            <path\n                                d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0'\n                                fill='#f00'></path>\n                            <path d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' fill='#fff'></path>\n                        </svg>                      \n                    </button>                \n            </div>\n            <div class=\"movie__container--rigth-side\">\n                <h2 class=\"movie__title\">").concat(i.title||i.name,'</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">').concat(i.vote_average,'</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">').concat(i.vote_count,'</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Popularity</td>\n                            <td class="movie__info-numbers">').concat(i.popularity,'</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Original Title</td>\n                            <td class="movie__info-value">').concat(i.original_title||i.original_name,'</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name">Genre</td>\n                            <td class="movie__info-value">').concat((0,u.gettingGenresListForModal)(i.genre_ids)||"Genre not defined",'</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title">About</h2>\n                <p class="movie__about-text">\n                    ').concat(i.overview||"No text",'\n                </p>\n                <div class="movie__btn-container">\n                   \n                    <button type="submit" id="watched-btn" data-id="').concat(i.id,'" class="movie__btn btn btn--accent">ADD TO WATCHED\n                        </button>\n                    <button type="submit" id="queue-btn" data-id="').concat(i.id,'" class="movie__btn btn btn-queue">ADD TO QUEUE\n                        </button>\n                </div>\n            </div>\n        </div>'));var i;(0,l.insertModalMarkupHome)(o),document.querySelector("#watched-btn").addEventListener("click",(function(){var e=[],n=localStorage.getItem("watched");n&&(e=JSON.parse(n)),e.find((function(e){return e.id==t}))?(0,v.deleteWatched)(a):(0,v.addWatchedLocalStorage)(a),(0,f.textModalBtn)(t)})),document.querySelector("#queue-btn").addEventListener("click",(function(){var e=[],n=localStorage.getItem("queue");n&&(e=JSON.parse(n)),e.find((function(e){return e.id==t}))?(0,v.deleteQueue)(a):(0,v.addQueueLocalStorage)(a),(0,f.textModalBtn)(t)})),(0,f.textModalBtn)(t)})),i.refs.closeModalBtn.addEventListener("click",m),i.refs.modalCardBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&m()})),o("ivF4K"),o("6IdhT"),o("3MGSC")}();
//# sourceMappingURL=library.ee9a42d6.js.map
