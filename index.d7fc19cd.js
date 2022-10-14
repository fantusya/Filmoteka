function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},t.parcelRequired7c6=a);class i{fetchTrendingMovies(){const e=`https://api.themoviedb.org/3/trending/all/day?&api_key=e09f06c48afcb3ebfd8a25b0b6965d1e&page=${this._page}`;return fetch(e).then((e=>e.json()))}fetchGenres(){return fetch("https://api.themoviedb.org/3/genre/movie/list?&language=en-US&api_key=e09f06c48afcb3ebfd8a25b0b6965d1e").then((e=>e.json()))}fetchSearchingMovies(){const e=`https://api.themoviedb.org/3/search/movie?api_key=e09f06c48afcb3ebfd8a25b0b6965d1e&page=${this._page}&query=${this.searchQuery}`;return fetch(e).then((e=>e.json()))}get query(){return this.searchQuery}set query(e){this.searchQuery=e}resetPage(){this.page=1}get page(){return this._page}set page(e){this._page=e}constructor(){this.searchQuery="",this._page=1}}var r=a("krGWQ");class o{show(){this.refs.spinner.classList.remove("is-hidden")}hide(){this.refs.spinner.classList.add("is-hidden")}constructor(){this.refs=r.refs}}var c=a("jU4ZD"),l=a("7x8k5");a("krGWQ");var d=a("fb9GJ");c=a("jU4ZD"),l=a("7x8k5"),r=a("krGWQ");const u=new i,m=new o;function p(t){const n=document.getElementById("pagination"),s={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},a=window.matchMedia("(max-width: 768px)");function i(e){e.matches&&(s.visiblePages=3)}a.addEventListener("change",i),i(a);new(e(d))(n,s).on("afterMove",(e=>{r.refs.homeCardsContainer.innerHTML="",m.show(),u.page=e.page,u.fetchTrendingMovies().then((({results:e})=>{const t=(0,c.default)(e);m.hide(),(0,l.insertFilmsMarkupToHome)(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch((e=>console.log(e)))}))}const f=new i,g=new o;f.fetchGenres().then((({genres:e})=>{for(const{id:t,name:n}of e)localStorage.setItem(`genre_${t}`,n)})).catch((e=>console.log(e))),g.show(),f.fetchTrendingMovies().then((({results:e,total_results:t})=>{const n=(0,c.default)(e);g.hide(),(0,l.insertFilmsMarkupToHome)(n),p(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch((e=>console.log(e))),a("kYzA7");function h(e,t,n){var s,a,i,r,o;function c(){var l=Date.now()-r;l<t&&l>=0?s=setTimeout(c,t-l):(s=null,n||(o=e.apply(i,a),i=a=null))}null==t&&(t=100);var l=function(){i=this,a=arguments,r=Date.now();var l=n&&!s;return s||(s=setTimeout(c,t)),l&&(o=e.apply(i,a),i=a=null),o};return l.clear=function(){s&&(clearTimeout(s),s=null)},l.flush=function(){s&&(o=e.apply(i,a),i=a=null,clearTimeout(s),s=null)},l}h.debounce=h,a("krGWQ");r=a("krGWQ");new i;r=a("krGWQ"),c=a("jU4ZD"),l=a("7x8k5"),d=a("fb9GJ"),c=a("jU4ZD"),l=a("7x8k5"),r=a("krGWQ");const v=new i,b=new o;function _(t,n){const s=document.getElementById("pagination"),a={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},i=window.matchMedia("(max-width: 768px)");function o(e){e.matches&&(a.visiblePages=3)}i.addEventListener("change",o),o(i);new(e(d))(s,a).on("afterMove",(e=>{r.refs.homeCardsContainer.innerHTML="",b.show(),v.page=e.page,v.query=n,v.fetchSearchingMovies().then((({results:e})=>{const t=(0,c.default)(e);b.hide(),(0,l.insertFilmsMarkupToHome)(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch((e=>console.log(e)))}))}r=a("krGWQ");function y(){r.refs.filmsSearchList.innerHTML='<p class="search-form--badrequest">Search result not successful. Enter the correct movie name!</p>';return setTimeout((()=>r.refs.filmsSearchList.innerHTML=""),2e3)}const w=new i,k=new o;r.refs.formSearch.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.searchInput.value.trim();w.query=t,r.refs.homeCardsContainer.innerHTML="",k.show();try{w.fetchSearchingMovies().then((({results:e,total_results:n})=>{if(0===e.length)return void y();const s=(0,c.default)(e);k.hide(),(0,l.insertFilmsMarkupToHome)(s),_(n,t),localStorage.setItem("currentFilm",JSON.stringify(e))}))}catch(e){}r.refs.inputSearch.value="",r.refs.filmsSearchList.innerHTML="",r.refs.filmsSearchList.classList.remove("search-form__list--bgc")}));var L=a("1drNe");a("jU4ZD");r=a("krGWQ"),l=a("7x8k5");var M=a("fnyLm");function S(){window.removeEventListener("keydown",T),document.body.classList.remove("show-modal"),r.refs.modalCardContainer.innerHTML=""}function T(e){"Escape"===e.code&&S()}a("kYzA7"),r.refs.homeCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"B"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",T);const t=e.target.dataset.id,n=localStorage.getItem("currentFilm");let s=JSON.parse(n).find((e=>e.id==t));const a=(i=s,`<div class="movie__container--left-side">              \n                  <img class="movie__image" src="https://www.themoviedb.org/t/p/w500${i.poster_path||"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png"}"\n                    alt="${i.title||i.name}" />\n                    <button type="button" class="movie__btn-trailer">\n                        <svg width='120' height='80' class='youtube-icon' viewBox='0 -77 512.00213 512'>\n                            <path\n                                d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0'\n                                fill='#f00'></path>\n                            <path d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' fill='#fff'></path>\n                        </svg>\n                    </button>                \n            </div>\n            <div class="movie__container--rigth-side">\n                <h2 class="movie__title">${i.title||i.name}</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">${i.vote_average}</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">${i.vote_count}</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Popularity</td>\n                            <td class="movie__info-numbers">${i.popularity}</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Original Title</td>\n                            <td class="movie__info-value">${i.original_title||i.original_name}</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name">Genre</td>\n                            <td class="movie__info-value">${(0,L.gettingGenresListForModal)(i.genre_ids)||"Genre not defined"}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title">About</h2>\n                <p class="movie__about-text">\n                    ${i.overview||"No text"}\n                </p>\n                <div class="movie__btn-container">\n                   \n                    <button type="submit" id="watched-btn" data-id="${i.id}" class="movie__btn btn btn--accent">ADD TO WATCHED\n                        </button>\n                    <button type="submit" id="queue-btn" data-id="${i.id}" class="movie__btn btn btn-queue">ADD TO QUEUE\n                        </button>\n                </div>\n            </div>\n        </div>`);var i;(0,l.insertModalMarkupHome)(a),document.querySelector("#watched-btn").addEventListener("click",(()=>{"REMOVE FROM WATCHED"===document.querySelector("#watched-btn").textContent&&(document.querySelector("#watched-btn").textContent="ADD TO WATCHED"),(0,M.addWatchedLocalStorage)(s,document.querySelector("#watched-btn"))})),document.querySelector("#queue-btn").addEventListener("click",(()=>{"REMOVE FROM QUEUE"===document.querySelector("#queue-btn").textContent&&(document.querySelector("#queue-btn").textContent="ADD TO QUEUE"),(0,M.addQueueLocalStorage)(s,document.querySelector("#queue-btn"))}))})),r.refs.closeModalBtn.addEventListener("click",S),r.refs.modalCardBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&S()})),a("9tydV"),a("cddKH"),AOS.init(),a("ZS19j");r=a("krGWQ");setTimeout((()=>{r.refs.advertising.classList.add("is-visible")}),5e3),setTimeout((()=>{r.refs.advertising.classList.remove("is-visible"),r.refs.advertising.classList.add("semi-visible")}),1e4);
//# sourceMappingURL=index.d7fc19cd.js.map