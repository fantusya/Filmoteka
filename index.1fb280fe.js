function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var s=i("g887t"),o=i("04jNI"),r=i("jU4ZD"),l=i("7x8k5");i("krGWQ");var c=i("2nhTy"),d=(r=i("jU4ZD"),i("bM0MQ"));const u=new(0,s.default),m=new(0,o.default);u.fetchGenres().then((({genres:e})=>{for(const{id:t,name:n}of e)localStorage.setItem(`genre_${t}`,n)})).catch((e=>console.log(e))),m.show(),u.fetchTrendingMovies().then((({results:e,total_results:t})=>{const n=(0,r.default)(e);m.hide(),(0,l.insertFilmsMarkupToHome)(n),(0,c.createPagination)(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch(d.onFetchError),i("2nhTy"),i("kYzA7");function f(e,t,n){var a,i,s,o,r;function l(){var c=Date.now()-o;c<t&&c>=0?a=setTimeout(l,t-c):(a=null,n||(r=e.apply(s,i),s=i=null))}null==t&&(t=100);var c=function(){s=this,i=arguments,o=Date.now();var c=n&&!a;return a||(a=setTimeout(l,t)),c&&(r=e.apply(s,i),s=i=null),r};return c.clear=function(){a&&(clearTimeout(a),a=null)},c.flush=function(){a&&(r=e.apply(s,i),s=i=null,clearTimeout(a),a=null)},c}f.debounce=f,i("krGWQ");s=i("g887t");var v=i("krGWQ");new(0,s.default);v=i("krGWQ"),s=i("g887t"),o=i("04jNI"),r=i("jU4ZD"),l=i("7x8k5");var g=i("fb9GJ");s=i("g887t"),o=i("04jNI"),r=i("jU4ZD"),l=i("7x8k5"),v=i("krGWQ"),d=i("bM0MQ");const p=new(0,s.default),h=new(0,o.default);function _(t,n){const a=document.getElementById("pagination"),i={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},s=window.matchMedia("(max-width: 768px)");function o(e){e.matches&&(i.visiblePages=3)}s.addEventListener("change",o),o(s);new(e(g))(a,i).on("afterMove",(e=>{v.refs.homeCardsContainer.innerHTML="",h.show(),p.page=e.page,p.query=n,p.fetchSearchingMovies().then((({results:e})=>{const t=(0,r.default)(e);h.hide(),(0,l.insertFilmsMarkupToHome)(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch(d.onFetchError)}))}v=i("krGWQ");function b(){const e=`<p class="search-form--badrequest">${function(){const e=localStorage.getItem("lang");if(!e||"en-US"===e)return"Search result not successful. Enter the correct movie name!";if("uk-UA"===e)return"Упс, нічого не знайдено. Введіть коректну назву фільма!"}()}</p>`;v.refs.filmsSearchList.innerHTML=e;return setTimeout((()=>v.refs.filmsSearchList.innerHTML=""),2e3)}d=i("bM0MQ");const y=new(0,s.default),w=new(0,o.default);v.refs.formSearch.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.searchInput.value.trim();if(!t)return console.log("Field cannot be empty");y.query=t,w.show();try{y.fetchSearchingMovies().then((({results:e,total_results:n})=>{if(w.hide(),0===e.length)return void b();v.refs.homeCardsContainer.innerHTML="";const a=(0,r.default)(e);(0,l.insertFilmsMarkupToHome)(a),_(n,t),localStorage.setItem("currentFilm",JSON.stringify(e))}))}catch(e){(0,d.onFetchError)()}v.refs.inputSearch.value="",v.refs.filmsSearchList.innerHTML="",v.refs.filmsSearchList.classList.remove("search-form__list--bgc")}));var k=i("1drNe");i("jU4ZD"),i("gXqAZ");v=i("krGWQ"),l=i("7x8k5");var M=i("fnyLm"),T=i("ZS19j"),E=i("kYzA7"),L=i("1hBMB"),S=i("gXqAZ");v.refs.homeCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"B"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",x);const t=e.target.dataset.id,n=localStorage.getItem("currentFilm");let a=JSON.parse(n).find((e=>e.id==t));const i=function(e){let t="";t=e.poster_path?`${L.BASE_POSTER_URL}/${e.poster_path}`:"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png";return`<div class="movie__container--left-side">              \n                  <img class="movie__image" src="${t}"\n                    alt="${e.title||e.name}" />\n                    <button type="button" class="movie__btn-trailer">\n                        <svg width='120' height='80' class='youtube-icon' viewBox='0 -77 512.00213 512'>\n                            <path\n                                d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0'\n                                fill='#f00'></path>\n                            <path d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' fill='#fff'></path>\n                        </svg>\n                    </button>                \n            </div>\n            <div class="movie__container--rigth-side">\n                <h2 class="movie__title">${e.title||e.name}</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="votes">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">${(0,S.setReleaseVote)(e.vote_average)}</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">${(0,S.setReleaseVote)(e.vote_count)}</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="popularity">Popularity</td>\n                            <td class="movie__info-numbers">${e.popularity}</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="originalTitle">Original Title</td>\n                            <td class="movie__info-value">${e.original_title||e.original_name}</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name" data-key="genre">Genre</td>\n                            <td class="movie__info-value">${(0,k.gettingGenresListForModal)(e.genre_ids)||"Genre not defined"}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title" data-key="about">About</h2>\n                <p class="movie__about-text">\n                    ${e.overview||"No text"}\n                </p>\n                <div class="movie__btn-container">\n                   \n                    <button type="submit" id="watched-btn" data-id="${e.id}" class="movie__btn btn btn--accent">ADD TO WATCHED\n                        </button>\n                    <button type="submit" id="queue-btn" data-id="${e.id}" class="movie__btn btn btn-queue">ADD TO QUEUE\n                        </button>\n                </div>\n            </div>\n        </div>`}(a);(0,T.translateItems)(".movie__container--rigth-side [data-key]"),(0,l.insertModalMarkupHome)(i);const s=document.querySelector("#watched-btn");s.addEventListener("click",(()=>{"REMOVE FROM WATCHED"===s.textContent&&(s.textContent="ADD TO WATCHED"),(0,M.addWatchedLocalStorage)(a,s,D)}));const o=document.querySelector("#queue-btn");o.addEventListener("click",(()=>{"REMOVE FROM QUEUE"===o.textContent&&(o.textContent="ADD TO QUEUE"),(0,M.addQueueLocalStorage)(a,o,D)})),(0,E.textModalBtn)(t)})),v.refs.closeModalBtn.addEventListener("click",C),v.refs.modalCardBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&C()}));const D=v.refs.homeCardsContainer;function C(){window.removeEventListener("keydown",x),document.body.classList.remove("show-modal"),v.refs.modalCardContainer.innerHTML=""}function x(e){"Escape"===e.code&&C()}i("9tydV"),i("cddKH"),AOS.init(),i("ZS19j"),i("iLDfN");v=i("krGWQ");setTimeout((()=>{v.refs.advertising.classList.add("is-visible")}),5e3),setTimeout((()=>{v.refs.advertising.classList.remove("is-visible"),v.refs.advertising.classList.add("semi-visible")}),1e4);
//# sourceMappingURL=index.1fb280fe.js.map
