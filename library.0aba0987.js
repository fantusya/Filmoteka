function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var o=i("krGWQ");i("fnyLm");var s=i("fb9GJ"),r=i("jU4ZD"),l=i("7x8k5");o=i("krGWQ");let d=JSON.parse(localStorage.getItem("watched"));function c(t){d=JSON.parse(localStorage.getItem(`${t}`));const n=document.getElementById("pagination-library");if(!d)return n.innerHTML="",void(o.refs.libraryCardsContainer.innerHTML='<div style="font-size: 20px">Your list is still empty</div>');const a={totalItems:d.length,itemsPerPage:6,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},i=window.matchMedia("(max-width: 768px)");function c(e){e.matches&&(a.visiblePages=3)}i.addEventListener("change",c),c(i);const u=new(e(s))(n,a);function m(e,t,n){o.refs.libraryCardsContainer.innerHTML="";let a=t*(n-=1),i=a+t;if(!e)return;const s=e.slice(a,i),d=(0,r.default)(s);(0,l.insertFilmsMarkupToLibrary)(d)}m(d,a.itemsPerPage,a.page),u.on("afterMove",(e=>{o.refs.libraryCardsContainer.innerHTML="";const t=e.page;m(d,a.itemsPerPage,t)}))}c("watched"),o.refs.btnWatched.addEventListener("click",(function(e){c("watched"),o.refs.btnWatched.style.backgroundColor="var(--button-bg-cl)",o.refs.btnWatched.style.borderColor="var(--button-bg-cl)",o.refs.btnQueue.style.backgroundColor="transparent",o.refs.btnQueue.style.borderColor="var(--header-text-cl)"})),o.refs.btnQueue.addEventListener("click",(function(e){c("queue"),o.refs.btnQueue.style.backgroundColor="var(--button-bg-cl)",o.refs.btnQueue.style.borderColor="var(--button-bg-cl)",o.refs.btnWatched.style.backgroundColor="transparent",o.refs.btnWatched.style.borderColor="var(--header-text-cl)"}));var u=i("1drNe");i("jU4ZD");o=i("krGWQ"),l=i("7x8k5");var m=i("fnyLm"),f=i("kYzA7");function v(){window.removeEventListener("keydown",b),document.body.classList.remove("show-modal"),o.refs.modalCardContainer.innerHTML=""}function b(e){"Escape"===e.code&&v()}o.refs.libraryCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"B"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",b);const t=e.target.dataset.id,n=localStorage.getItem("currentFilm");let a=JSON.parse(n).find((e=>e.id==t));const i=(o=a,`<div class="movie__container--left-side">              \n                  <img class="movie__image" src="https://www.themoviedb.org/t/p/w500${o.poster_path||"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png"}"\n                    alt="${o.title||o.name}" />\n                    <button type="button" class="movie__btn-trailer">\n                        <svg width='100' height='60' class='youtube-icon' viewBox='0 -77 512.00213 512'>\n                            <path\n                                d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0'\n                                fill='#f00'></path>\n                            <path d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' fill='#fff'></path>\n                        </svg>                      \n                    </button>                \n            </div>\n            <div class="movie__container--rigth-side">\n                <h2 class="movie__title">${o.title||o.name}</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">${o.vote_average}</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">${o.vote_count}</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Popularity</td>\n                            <td class="movie__info-numbers">${o.popularity}</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Original Title</td>\n                            <td class="movie__info-value">${o.original_title||o.original_name}</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name">Genre</td>\n                            <td class="movie__info-value">${(0,u.gettingGenresListForModal)(o.genre_ids)||"Genre not defined"}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title">About</h2>\n                <p class="movie__about-text">\n                    ${o.overview||"No text"}\n                </p>\n                <div class="movie__btn-container">\n                   \n                    <button type="submit" id="watched-btn" data-id="${o.id}" class="movie__btn btn btn--accent">ADD TO WATCHED\n                        </button>\n                    <button type="submit" id="queue-btn" data-id="${o.id}" class="movie__btn btn btn-queue">ADD TO QUEUE\n                        </button>\n                </div>\n            </div>\n        </div>`);var o;(0,l.insertModalMarkupHome)(i),document.querySelector("#watched-btn").addEventListener("click",(()=>{let e=[];const n=localStorage.getItem("watched");n&&(e=JSON.parse(n));e.find((e=>e.id==t))?(0,m.deleteWatched)(a):(0,m.addWatchedLocalStorage)(a),(0,f.textModalBtn)(t)})),document.querySelector("#queue-btn").addEventListener("click",(()=>{let e=[];const n=localStorage.getItem("queue");n&&(e=JSON.parse(n));e.find((e=>e.id==t))?(0,m.deleteQueue)(a):(0,m.addQueueLocalStorage)(a),(0,f.textModalBtn)(t)})),(0,f.textModalBtn)(t)})),o.refs.closeModalBtn.addEventListener("click",v),o.refs.modalCardBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&v()})),i("cddKH"),i("9tydV"),i("ZS19j");
//# sourceMappingURL=library.0aba0987.js.map
