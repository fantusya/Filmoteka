!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var r=i("efgtE"),o=i("j1lrD"),s=i("37jAB"),l=i("j7yxE");i("4Nugj");var c=i("jcFG7"),u=(s=i("37jAB"),i("1S8cL")),d=new(0,r.default),f=new(0,o.default);d.fetchGenres().then((function(e){var t=e.genres,n=!0,a=!1,i=void 0;try{for(var r,o=t[Symbol.iterator]();!(n=(r=o.next()).done);n=!0){var s=r.value,l=s.id,c=s.name;localStorage.setItem("genre_".concat(l),c)}}catch(e){a=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}})).catch((function(e){return console.log(e)})),f.show(),d.fetchTrendingMovies().then((function(e){var t=e.results,n=e.total_results,a=(0,s.default)(t);f.hide(),(0,l.insertFilmsMarkupToHome)(a),(0,c.createPagination)(n),localStorage.setItem("currentFilm",JSON.stringify(t))})).catch(u.onFetchError),i("jcFG7"),i("4uNB6");function m(e,t,n){var a,i,r,o,s;function l(){var c=Date.now()-o;c<t&&c>=0?a=setTimeout(l,t-c):(a=null,n||(s=e.apply(r,i),r=i=null))}null==t&&(t=100);var c=function(){r=this,i=arguments,o=Date.now();var c=n&&!a;return a||(a=setTimeout(l,t)),c&&(s=e.apply(r,i),r=i=null),s};return c.clear=function(){a&&(clearTimeout(a),a=null)},c.flush=function(){a&&(s=e.apply(r,i),r=i=null,clearTimeout(a),a=null)},c}m.debounce=m,i("4Nugj");r=i("efgtE");var v=i("4Nugj");new(0,r.default),v=i("4Nugj"),r=i("efgtE"),o=i("j1lrD"),s=i("37jAB"),l=i("j7yxE");var g=i("1VFfL"),p=(r=i("efgtE"),o=i("j1lrD"),s=i("37jAB"),l=i("j7yxE"),v=i("4Nugj"),u=i("1S8cL"),new(0,r.default)),h=new(0,o.default);function _(t,n){var a=document.getElementById("pagination"),i={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},r=window.matchMedia("(max-width: 768px)");function o(e){e.matches&&(i.visiblePages=3)}r.addEventListener("change",o),o(r),new(e(g))(a,i).on("afterMove",(function(e){v.refs.homeCardsContainer.innerHTML="",h.show(),p.page=e.page,p.query=n,p.fetchSearchingMovies().then((function(e){var t=e.results,n=(0,s.default)(t);h.hide(),(0,l.insertFilmsMarkupToHome)(n),localStorage.setItem("currentFilm",JSON.stringify(t))})).catch(u.onFetchError)}))}v=i("4Nugj");function b(){var e='<p class="search-form--badrequest">'.concat(function(){var e=localStorage.getItem("lang");if(!e||"en-US"===e)return"Search result not successful. Enter the correct movie name!";if("uk-UA"===e)return"Упс, нічого не знайдено. Введіть коректну назву фільма!"}(),"</p>");return v.refs.filmsSearchList.innerHTML=e,setTimeout((function(){return v.refs.filmsSearchList.innerHTML=""}),2e3)}u=i("1S8cL");var y=new(0,r.default),w=new(0,o.default);v.refs.formSearch.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.searchInput.value.trim();if(!t)return console.log("Field cannot be empty");y.query=t,w.show();try{y.fetchSearchingMovies().then((function(e){var n=e.results,a=e.total_results;if(w.hide(),0!==n.length){v.refs.homeCardsContainer.innerHTML="";var i=(0,s.default)(n);(0,l.insertFilmsMarkupToHome)(i),_(a,t),localStorage.setItem("currentFilm",JSON.stringify(n))}else b()}))}catch(e){(0,u.onFetchError)()}v.refs.inputSearch.value="",v.refs.filmsSearchList.innerHTML="",v.refs.filmsSearchList.classList.remove("search-form__list--bgc")}));var E=i("iSn7Y");i("37jAB"),i("h7AsZ");v=i("4Nugj"),l=i("j7yxE");var L=i("cbazt"),S=i("3MGSC"),T=i("4uNB6"),M=i("4QKg3"),N=i("h7AsZ");v.refs.homeCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"B"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",k);var t=e.target.dataset.id,n=localStorage.getItem("currentFilm"),a=JSON.parse(n).find((function(e){return e.id==t})),i=(r=a,o="",o=r.poster_path?"".concat(M.BASE_POSTER_URL,"/").concat(r.poster_path):"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png",'<div class="movie__container--left-side">              \n                  <img class="movie__image" src="'.concat(o,'"\n                    alt="').concat(r.title||r.name,'" /></div>\n            <div class="movie__container--rigth-side">\n                <h2 class="movie__title">').concat(r.title||r.name,'</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="votes">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">').concat((0,N.setReleaseVote)(r.vote_average),'</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">').concat((0,N.setReleaseVote)(r.vote_count),'</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="popularity">Popularity</td>\n                            <td class="movie__info-numbers">').concat(r.popularity,'</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="originalTitle">Original Title</td>\n                            <td class="movie__info-value">').concat(r.original_title||r.original_name,'</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name" data-key="genre">Genre</td>\n                            <td class="movie__info-value">').concat((0,E.gettingGenresListForModal)(r.genre_ids)||"Genre not defined",'</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title" data-key="about">About</h2>\n                <p class="movie__about-text">\n                    ').concat(r.overview||"No text",'\n                </p>\n                <div class="movie__btn-container">\n                   \n                    <button type="submit" id="watched-btn" data-id="').concat(r.id,'" class="movie__btn btn btn--accent">ADD TO WATCHED\n                        </button>\n                    <button type="submit" id="queue-btn" data-id="').concat(r.id,'" class="movie__btn btn btn-queue">ADD TO QUEUE\n                        </button>\n                </div>\n            </div>\n        </div>'));var r,o;(0,S.translateItems)(".movie__container--rigth-side [data-key]"),(0,l.insertModalMarkupHome)(i);var s=document.querySelector("#watched-btn");s.addEventListener("click",(function(){"REMOVE FROM WATCHED"===s.textContent&&(s.textContent="ADD TO WATCHED"),(0,L.addWatchedLocalStorage)(a,s,C)}));var c=document.querySelector("#queue-btn");c.addEventListener("click",(function(){"REMOVE FROM QUEUE"===c.textContent&&(c.textContent="ADD TO QUEUE"),(0,L.addQueueLocalStorage)(a,c,C)})),(0,T.textModalBtn)(t)})),v.refs.closeModalBtn.addEventListener("click",j),v.refs.modalCardBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&j()}));var C=v.refs.homeCardsContainer;function j(){window.removeEventListener("keydown",k),document.body.classList.remove("show-modal"),v.refs.modalCardContainer.innerHTML=""}function k(e){"Escape"===e.code&&j()}i("6IdhT"),i("ivF4K"),AOS.init(),i("3MGSC"),i("9PpgY");v=i("4Nugj");setTimeout((function(){v.refs.advertising.classList.add("is-visible")}),5e3),setTimeout((function(){v.refs.advertising.classList.remove("is-visible"),v.refs.advertising.classList.add("semi-visible")}),1e4)}();
//# sourceMappingURL=index.484bf123.js.map
