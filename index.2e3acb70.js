!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var s=i("efgtE"),o=i("j1lrD"),r=i("37jAB"),l=i("j7yxE");i("4Nugj");var c=i("1VFfL"),u=(s=i("efgtE"),o=i("j1lrD"),r=i("37jAB"),l=i("j7yxE"),i("4Nugj"));u=i("4Nugj"),r=i("37jAB");var d=new(0,s.default),m=new(0,o.default);function f(t){var n=document.getElementById("pagination"),a={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},i=window.matchMedia("(max-width: 768px)");function s(e){e.matches&&(a.visiblePages=3)}i.addEventListener("change",s),s(i),new(e(c))(n,a).on("afterMove",(function(e){u.refs.homeCardsContainer.innerHTML="",m.show(),d.page=e.page,d.fetchTrendingMovies().then((function(e){var t=e.results,n=(0,r.default)(t);m.hide(),(0,l.insertFilmsMarkupToHome)(n),localStorage.setItem("currentFilm",JSON.stringify(t))})).catch((function(e){return console.log(e)}))}))}r=i("37jAB");var p=new(0,s.default),g=new(0,o.default);p.fetchGenres().then((function(e){var t=e.genres,n=!0,a=!1,i=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var r=s.value,l=r.id,c=r.name;localStorage.setItem("genre_".concat(l),c)}}catch(e){a=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}})).catch((function(e){return console.log(e)})),g.show(),p.fetchTrendingMovies().then((function(e){var t=e.results,n=e.total_results,a=(0,r.default)(t);g.hide(),(0,l.insertFilmsMarkupToHome)(a),f(n),localStorage.setItem("currentFilm",JSON.stringify(t))})).catch((function(e){return console.log(e)}));new Swiper(".swiper",{watchSlidesProgress:!0,loop:!0,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:10},1280:{slidesPerView:5,spaceBetween:10}}});i("4uNB6");function v(e,t,n){var a,i,s,o,r;function l(){var c=Date.now()-o;c<t&&c>=0?a=setTimeout(l,t-c):(a=null,n||(r=e.apply(s,i),s=i=null))}null==t&&(t=100);var c=function(){s=this,i=arguments,o=Date.now();var c=n&&!a;return a||(a=setTimeout(l,t)),c&&(r=e.apply(s,i),s=i=null),r};return c.clear=function(){a&&(clearTimeout(a),a=null)},c.flush=function(){a&&(r=e.apply(s,i),s=i=null,clearTimeout(a),a=null)},c}v.debounce=v,i("4Nugj");s=i("efgtE"),u=i("4Nugj");new(0,s.default),u=i("4Nugj"),s=i("efgtE"),o=i("j1lrD"),r=i("37jAB"),l=i("j7yxE"),c=i("1VFfL"),s=i("efgtE"),o=i("j1lrD"),r=i("37jAB"),l=i("j7yxE"),u=i("4Nugj");var h=new(0,s.default),b=new(0,o.default);function _(t,n){var a=document.getElementById("pagination"),i={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},s=window.matchMedia("(max-width: 768px)");function o(e){e.matches&&(i.visiblePages=3)}s.addEventListener("change",o),o(s),new(e(c))(a,i).on("afterMove",(function(e){u.refs.homeCardsContainer.innerHTML="",b.show(),h.page=e.page,h.query=n,h.fetchSearchingMovies().then((function(e){var t=e.results,n=(0,r.default)(t);b.hide(),(0,l.insertFilmsMarkupToHome)(n),localStorage.setItem("currentFilm",JSON.stringify(t))})).catch((function(e){return console.log(e)}))}))}u=i("4Nugj");var y=new(0,s.default),w=new(0,o.default);u.refs.formSearch.addEventListener("submit",(function(e){if(e.preventDefault(),""===e.currentTarget.elements.searchInput.value.trim())return console.warn("Field cannot be empty");var t=e.currentTarget.elements.searchInput.value.trim();y.query=t,u.refs.homeCardsContainer.innerHTML="",w.show();try{y.fetchSearchingMovies().then((function(e){var n=e.results,a=e.total_results;if(0===n.length)return u.refs.filmsSearchList.innerHTML='<p class="search-form--badrequest">Search result not successful. Enter the correct movie name!</p>',void setTimeout((function(){return u.refs.filmsSearchList.innerHTML=""}),2e3);var i=(0,r.default)(n);w.hide(),(0,l.insertFilmsMarkupToHome)(i),_(a,t),localStorage.setItem("currentFilm",JSON.stringify(n))}))}catch(e){}u.refs.inputSearch.value="",u.refs.filmsSearchList.innerHTML="",u.refs.filmsSearchList.classList.remove("search-form__list--bgc")}));var E=i("iSn7Y");i("37jAB");u=i("4Nugj"),l=i("j7yxE");var S=i("cbazt"),T=i("3MGSC"),M=i("4uNB6");u.refs.homeCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"B"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",C);var t=e.target.dataset.id,n=localStorage.getItem("currentFilm"),a=JSON.parse(n).find((function(e){return e.id==t})),i=(s=a,o="https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png",'<div class="movie__container--left-side">              \n                  <img class="movie__image" src="https://www.themoviedb.org/t/p/w500'.concat(s.poster_path||o,'"\n                    alt="').concat(s.title||s.name,"\" />\n                    <button type=\"button\" class=\"movie__btn-trailer\">\n                        <svg width='120' height='80' class='youtube-icon' viewBox='0 -77 512.00213 512'>\n                            <path\n                                d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0'\n                                fill='#f00'></path>\n                            <path d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' fill='#fff'></path>\n                        </svg>\n                    </button>                \n            </div>\n            <div class=\"movie__container--rigth-side\">\n                <h2 class=\"movie__title\">").concat(s.title||s.name,'</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="votes">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">').concat(s.vote_average,'</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">').concat(s.vote_count,'</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="popularity">Popularity</td>\n                            <td class="movie__info-numbers">').concat(s.popularity,'</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="originalTitle">Original Title</td>\n                            <td class="movie__info-value">').concat(s.original_title||s.original_name,'</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name" data-key="genre">Genre</td>\n                            <td class="movie__info-value">').concat((0,E.gettingGenresListForModal)(s.genre_ids)||"Genre not defined",'</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title" data-key="about">About</h2>\n                <p class="movie__about-text">\n                    ').concat(s.overview||"No text",'\n                </p>\n                <div class="movie__btn-container">\n                   \n                    <button type="submit" id="watched-btn" data-id="').concat(s.id,'" class="movie__btn btn btn--accent">ADD TO WATCHED\n                        </button>\n                    <button type="submit" id="queue-btn" data-id="').concat(s.id,'" class="movie__btn btn btn-queue">ADD TO QUEUE\n                        </button>\n                </div>\n            </div>\n        </div>'));var s,o;(0,T.translateItems)(".movie__container--rigth-side [data-key]"),(0,l.insertModalMarkupHome)(i),document.querySelector("#watched-btn").addEventListener("click",(function(){"REMOVE FROM WATCHED"===document.querySelector("#watched-btn").textContent&&(document.querySelector("#watched-btn").textContent="ADD TO WATCHED"),(0,S.addWatchedLocalStorage)(a,document.querySelector("#watched-btn"),L)})),document.querySelector("#queue-btn").addEventListener("click",(function(){"REMOVE FROM QUEUE"===document.querySelector("#queue-btn").textContent&&(document.querySelector("#queue-btn").textContent="ADD TO QUEUE"),(0,S.addQueueLocalStorage)(a,document.querySelector("#queue-btn"),L)})),(0,M.textModalBtn)(t)})),u.refs.closeModalBtn.addEventListener("click",N),u.refs.modalCardBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&N()}));var L=u.refs.homeCardsContainer;function N(){window.removeEventListener("keydown",C),document.body.classList.remove("show-modal"),u.refs.modalCardContainer.innerHTML=""}function C(e){"Escape"===e.code&&N()}i("6IdhT"),i("ivF4K"),AOS.init(),i("3MGSC");u=i("4Nugj");setTimeout((function(){u.refs.advertising.classList.add("is-visible")}),5e3),setTimeout((function(){u.refs.advertising.classList.remove("is-visible"),u.refs.advertising.classList.add("semi-visible")}),1e4)}();
//# sourceMappingURL=index.2e3acb70.js.map
