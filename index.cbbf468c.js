function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},t.parcelRequired7c6=a);var i=a("g887t"),o=a("krGWQ");class r{show(){this.refs.spinner.classList.remove("is-hidden")}hide(){this.refs.spinner.classList.add("is-hidden")}constructor(){this.refs=o.refs}}var l=a("jU4ZD"),c=a("7x8k5");a("krGWQ");var d=a("fb9GJ");i=a("g887t"),l=a("jU4ZD"),c=a("7x8k5"),o=a("krGWQ");const u=new(0,i.default),m=new r;function f(t){const n=document.getElementById("pagination"),s={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},a=window.matchMedia("(max-width: 768px)");function i(e){e.matches&&(s.visiblePages=3)}a.addEventListener("change",i),i(a);new(e(d))(n,s).on("afterMove",(e=>{o.refs.homeCardsContainer.innerHTML="",m.show(),u.page=e.page,u.fetchTrendingMovies().then((({results:e})=>{const t=(0,l.default)(e);m.hide(),(0,c.insertFilmsMarkupToHome)(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch((e=>console.log(e)))}))}l=a("jU4ZD");const p=new(0,i.default),g=new r;p.fetchGenres().then((({genres:e})=>{for(const{id:t,name:n}of e)localStorage.setItem(`genre_${t}`,n)})).catch((e=>console.log(e))),g.show(),p.fetchTrendingMovies().then((({results:e,total_results:t})=>{const n=(0,l.default)(e);g.hide(),(0,c.insertFilmsMarkupToHome)(n),f(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch((e=>console.log(e)));new Swiper(".swiper",{watchSlidesProgress:!0,loop:!0,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:10},1280:{slidesPerView:5,spaceBetween:10}}});a("kYzA7");function v(e,t,n){var s,a,i,o,r;function l(){var c=Date.now()-o;c<t&&c>=0?s=setTimeout(l,t-c):(s=null,n||(r=e.apply(i,a),i=a=null))}null==t&&(t=100);var c=function(){i=this,a=arguments,o=Date.now();var c=n&&!s;return s||(s=setTimeout(l,t)),c&&(r=e.apply(i,a),i=a=null),r};return c.clear=function(){s&&(clearTimeout(s),s=null)},c.flush=function(){s&&(r=e.apply(i,a),i=a=null,clearTimeout(s),s=null)},c}v.debounce=v,a("krGWQ");i=a("g887t"),o=a("krGWQ");new(0,i.default);o=a("krGWQ"),i=a("g887t"),l=a("jU4ZD"),c=a("7x8k5"),d=a("fb9GJ"),i=a("g887t"),l=a("jU4ZD"),c=a("7x8k5"),o=a("krGWQ");const h=new(0,i.default),b=new r;function _(t,n){const s=document.getElementById("pagination"),a={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},i=window.matchMedia("(max-width: 768px)");function r(e){e.matches&&(a.visiblePages=3)}i.addEventListener("change",r),r(i);new(e(d))(s,a).on("afterMove",(e=>{o.refs.homeCardsContainer.innerHTML="",b.show(),h.page=e.page,h.query=n,h.fetchSearchingMovies().then((({results:e})=>{const t=(0,l.default)(e);b.hide(),(0,c.insertFilmsMarkupToHome)(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch((e=>console.log(e)))}))}o=a("krGWQ");function w(){const e=`<p class="search-form--badrequest">${function(){const e=localStorage.getItem("lang");if(!e||"en-US"===e)return"Search result not successful. Enter the correct movie name!";if("uk-UA"===e)return"Упс, нічого не знайдено. Введіть коректну назву фільма!"}()}</p>`;o.refs.filmsSearchList.innerHTML=e;return setTimeout((()=>o.refs.filmsSearchList.innerHTML=""),2e3)}const y=new(0,i.default),k=new r;o.refs.formSearch.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.searchInput.value.trim();if(!t)return console.log("Field cannot be empty");y.query=t,k.show();try{y.fetchSearchingMovies().then((({results:e,total_results:n})=>{if(k.hide(),0===e.length)return void w();o.refs.homeCardsContainer.innerHTML="";const s=(0,l.default)(e);(0,c.insertFilmsMarkupToHome)(s),_(n,t),localStorage.setItem("currentFilm",JSON.stringify(e))}))}catch(e){}o.refs.inputSearch.value="",o.refs.filmsSearchList.innerHTML="",o.refs.filmsSearchList.classList.remove("search-form__list--bgc")}));var S=a("1drNe");a("jU4ZD"),a("gXqAZ");o=a("krGWQ"),c=a("7x8k5");var L=a("fnyLm"),T=a("ZS19j"),M=a("kYzA7"),E=a("1hBMB"),C=a("gXqAZ");o.refs.homeCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"B"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",q);const t=e.target.dataset.id,n=localStorage.getItem("currentFilm");let s=JSON.parse(n).find((e=>e.id==t));const a=function(e){let t="";t=e.poster_path?`${E.BASE_POSTER_URL}/${e.poster_path}`:"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png";return`<div class="movie__container--left-side">              \n                  <img class="movie__image" src="${t}"\n                    alt="${e.title||e.name}" />\n                    <button type="button" class="movie__btn-trailer">\n                        <svg width='120' height='80' class='youtube-icon' viewBox='0 -77 512.00213 512'>\n                            <path\n                                d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0'\n                                fill='#f00'></path>\n                            <path d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' fill='#fff'></path>\n                        </svg>\n                    </button>                \n            </div>\n            <div class="movie__container--rigth-side">\n                <h2 class="movie__title">${e.title||e.name}</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="votes">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">${(0,C.setReleaseVote)(e.vote_average)}</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">${(0,C.setReleaseVote)(e.vote_count)}</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="popularity">Popularity</td>\n                            <td class="movie__info-numbers">${e.popularity}</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="originalTitle">Original Title</td>\n                            <td class="movie__info-value">${e.original_title||e.original_name}</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name" data-key="genre">Genre</td>\n                            <td class="movie__info-value">${(0,S.gettingGenresListForModal)(e.genre_ids)||"Genre not defined"}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title" data-key="about">About</h2>\n                <p class="movie__about-text">\n                    ${e.overview||"No text"}\n                </p>\n                <div class="movie__btn-container">\n                   \n                    <button type="submit" id="watched-btn" data-id="${e.id}" class="movie__btn btn btn--accent">ADD TO WATCHED\n                        </button>\n                    <button type="submit" id="queue-btn" data-id="${e.id}" class="movie__btn btn btn-queue">ADD TO QUEUE\n                        </button>\n                </div>\n            </div>\n        </div>`}(s);(0,T.translateItems)(".movie__container--rigth-side [data-key]"),(0,c.insertModalMarkupHome)(a),document.querySelector("#watched-btn").addEventListener("click",(()=>{"REMOVE FROM WATCHED"===document.querySelector("#watched-btn").textContent&&(document.querySelector("#watched-btn").textContent="ADD TO WATCHED"),(0,L.addWatchedLocalStorage)(s,document.querySelector("#watched-btn"),D)})),document.querySelector("#queue-btn").addEventListener("click",(()=>{"REMOVE FROM QUEUE"===document.querySelector("#queue-btn").textContent&&(document.querySelector("#queue-btn").textContent="ADD TO QUEUE"),(0,L.addQueueLocalStorage)(s,document.querySelector("#queue-btn"),D)})),(0,M.textModalBtn)(t)})),o.refs.closeModalBtn.addEventListener("click",x),o.refs.modalCardBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&x()}));const D=o.refs.homeCardsContainer;function x(){window.removeEventListener("keydown",q),document.body.classList.remove("show-modal"),o.refs.modalCardContainer.innerHTML=""}function q(e){"Escape"===e.code&&x()}a("9tydV"),a("cddKH"),AOS.init(),a("ZS19j");o=a("krGWQ");setTimeout((()=>{o.refs.advertising.classList.add("is-visible")}),5e3),setTimeout((()=>{o.refs.advertising.classList.remove("is-visible"),o.refs.advertising.classList.add("semi-visible")}),1e4);
//# sourceMappingURL=index.cbbf468c.js.map
