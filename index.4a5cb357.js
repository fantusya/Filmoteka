function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=s);var i=s("g887t"),o=s("jU4ZD"),r=s("7x8k5");s("krGWQ");var l=s("fb9GJ"),c=(i=s("g887t"),o=s("jU4ZD"),r=s("7x8k5"),s("krGWQ")),d=s("04jNI");const u=new(0,i.default);function m(t){const n=document.getElementById("pagination"),a={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},s=window.matchMedia("(max-width: 768px)");function i(e){e.matches&&(a.visiblePages=3)}s.addEventListener("change",i),i(s);new(e(l))(n,a).on("afterMove",(e=>{c.refs.homeCardsContainer.innerHTML="",(0,d.createSpinner)(),u.page=e.page,u.fetchTrendingMovies().then((({results:e})=>{const t=(0,o.default)(e);(0,r.insertFilmsMarkupToHome)(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch((e=>console.log(e)))}))}d=s("04jNI");const f=new(0,i.default);async function p(e){const t=document.querySelector("#queue-btn"),n=document.querySelector("#watched-btn");if(g(e,"watched")){console.log("есть такой в watched"),n.textContent="Added to watched",n.disabled=!0,setTimeout((function(){console.log("Функція працює!!!!"),n.disabled=!1,n.textContent="Remove from watched",n.classList.add("active")}),1e3)}else console.log("нет такого в watched"),n.textContent="Add to watched",n.classList.remove("active"),console.log("удаляем класс active"),n.disabled=!1;if(g(e,"queue")){console.log("есть такой в queue"),t.textContent="Added to queue",t.disabled=!0,setTimeout((function(){t.disabled=!1,t.textContent="Remove from queue",t.classList.add("active")}),1e3)}else console.log("нет такого в queue"),t.textContent="Add to queue",t.classList.remove("active"),t.disabled=!1}function g(e,t){return!!v(t).find((t=>t.id==e))}f.fetchGenres().then((({genres:e})=>{for(const{id:t,name:n}of e)localStorage.setItem(`genre_${t}`,n)})).catch((e=>console.log(e))),(0,d.createSpinner)(),f.fetchTrendingMovies().then((({results:e,total_results:t})=>{const n=(0,o.default)(e);(0,r.insertFilmsMarkupToHome)(n),m(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch((e=>console.log(e))),s("krGWQ");const v=e=>{try{let t=localStorage.getItem(e);return t=JSON.parse(t)||void 0}catch(e){console.error("Get state error: ",e)}};function h(e,t,n){var a,s,i,o,r;function l(){var c=Date.now()-o;c<t&&c>=0?a=setTimeout(l,t-c):(a=null,n||(r=e.apply(i,s),i=s=null))}null==t&&(t=100);var c=function(){i=this,s=arguments,o=Date.now();var c=n&&!a;return a||(a=setTimeout(l,t)),c&&(r=e.apply(i,s),i=s=null),r};return c.clear=function(){a&&(clearTimeout(a),a=null)},c.flush=function(){a&&(r=e.apply(i,s),i=s=null,clearTimeout(a),a=null)},c}h.debounce=h,s("krGWQ");i=s("g887t"),c=s("krGWQ");new(0,i.default);c=s("krGWQ"),i=s("g887t"),o=s("jU4ZD"),r=s("7x8k5"),l=s("fb9GJ"),i=s("g887t"),o=s("jU4ZD"),r=s("7x8k5"),c=s("krGWQ"),d=s("04jNI");const _=new(0,i.default);function b(t,n){const a=document.getElementById("pagination"),s={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},i=window.matchMedia("(max-width: 768px)");function u(e){e.matches&&(s.visiblePages=3)}i.addEventListener("change",u),u(i);new(e(l))(a,s).on("afterMove",(e=>{c.refs.homeCardsContainer.innerHTML="",(0,d.createSpinner)(),_.page=e.page,_.query=n,_.fetchSearchingMovies().then((({results:e})=>{const t=(0,o.default)(e);(0,r.insertFilmsMarkupToHome)(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch((e=>console.log(e)))}))}c=s("krGWQ");function w(){c.refs.filmsSearchList.innerHTML='<p class="search-form--badrequest">Search result not successful. Enter the correct movie name!</p>';return setTimeout((()=>c.refs.filmsSearchList.innerHTML=""),2e3)}d=s("04jNI");const y=new(0,i.default);c.refs.formSearch.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.searchInput.value.trim();y.query=t,(0,d.createSpinner)();try{y.fetchSearchingMovies().then((({results:e,total_results:n})=>{if(0===e.length)return void w();c.refs.homeCardsContainer.innerHTML="";const a=(0,o.default)(e);(0,r.insertFilmsMarkupToHome)(a),b(n,t)}))}catch(e){}c.refs.inputSearch.value="",c.refs.filmsSearchList.innerHTML="",c.refs.filmsSearchList.classList.remove("search-form__list--bgc")}));var L=s("1drNe");s("jU4ZD");c=s("krGWQ"),r=s("7x8k5");var S=s("fnyLm");function T(){window.removeEventListener("keydown",k),document.body.classList.remove("show-modal"),c.refs.modalCardContainer.innerHTML=""}function k(e){"Escape"===e.code&&T()}c.refs.homeCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"B"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",k);const t=e.target.dataset.id,n=localStorage.getItem("currentFilm");let a=JSON.parse(n).find((e=>e.id==t));const s=(i=a,`<div class="movie__container--left-side">              \n                  <img class="movie__image" src="https://www.themoviedb.org/t/p/w500${i.poster_path||"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png"}"\n                    alt="${i.title||i.name}" />\n\n                    <button type="button" class="movie__btn-trailer">\n                        <svg width='100' height='60' class='youtube-icon' viewBox='0 -77 512.00213 512'>\n                            <path\n                                d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0'\n                                fill='#f00'></path>\n                            <path d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' fill='#fff'></path>\n                        </svg>                      \n                    </button>                \n            </div>\n            <div class="movie__container--rigth-side">\n                <h2 class="movie__title">${i.title||i.name}</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">${i.vote_average}</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">${i.vote_count}</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Popularity</td>\n                            <td class="movie__info-numbers">${i.popularity}</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Original Title</td>\n                            <td class="movie__info-value">${i.original_title||i.original_name}</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name">Genre</td>\n                            <td class="movie__info-value">${(0,L.gettingGenresListForModal)(i.genre_ids)||"Genre not defined"}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title">About</h2>\n                <p class="movie__about-text">\n                    ${i.overview||"No text"}\n                </p>\n                <div class="movie__btn-container">\n                   \n                    <button type="submit" id="watched-btn" data-id="${i.id}" class="movie__btn btn btn--accent">ADD TO WATCHED\n                        </button>\n                    <button type="submit" id="queue-btn" data-id="${i.id}" class="movie__btn btn btn-queue">ADD TO QUEUE\n                        </button>\n                </div>\n            </div>\n        </div>`);var i;(0,r.insertModalMarkupHome)(s),document.querySelector("#watched-btn").addEventListener("click",(()=>{(0,S.addWatchedLocalStorage)(a),p(t)})),document.querySelector("#queue-btn").addEventListener("click",(()=>{(0,S.addQueueLocalStorage)(a),p(t)}))})),c.refs.closeModalBtn.addEventListener("click",T),c.refs.modalCardBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&T()})),s("9tydV"),s("cddKH"),AOS.init();
//# sourceMappingURL=index.4a5cb357.js.map
