function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var r=i("krGWQ");i("fnyLm");var o=i("fb9GJ"),s=i("jU4ZD"),l=i("7x8k5");function d(t){fullLibrary=JSON.parse(localStorage.getItem(`${t}`));const n=document.getElementById("pagination-library");if(!fullLibrary||0===fullLibrary.length)return n.innerHTML="",void(r.refs.libraryCardsContainer.innerHTML='<div style="font-size: 20px" data-key="emptyList">Your list is still empty</div>');console.log(fullLibrary.length);const a={totalItems:fullLibrary.length,itemsPerPage:6,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},i=window.matchMedia("(max-width: 768px)");function d(e){e.matches&&(a.visiblePages=3)}i.addEventListener("change",d),d(i);const c=new(e(o))(n,a);function u(e,t,n){r.refs.libraryCardsContainer.innerHTML="";let a=t*(n-=1),i=a+t;if(!e||0===e.length)return void(r.refs.libraryCardsContainer.innerHTML="");const o=e.slice(a,i),d=(0,s.default)(o);(0,l.insertFilmsMarkupToLibrary)(d)}u(fullLibrary,a.itemsPerPage,a.page),c.on("afterMove",(e=>{r.refs.libraryCardsContainer.innerHTML="";const t=e.page;u(fullLibrary,a.itemsPerPage,t)}))}(r=i("krGWQ")).refs.btnWatched.addEventListener("click",(function(e){d("watched"),r.refs.btnWatched.style.backgroundColor="var(--button-bg-cl)",r.refs.btnWatched.style.borderColor="var(--button-bg-cl)",r.refs.btnQueue.style.backgroundColor="transparent",r.refs.btnQueue.style.borderColor="var(--header-text-cl)"})),r.refs.btnQueue.addEventListener("click",(function(e){d("queue"),r.refs.btnQueue.style.backgroundColor="var(--button-bg-cl)",r.refs.btnQueue.style.borderColor="var(--button-bg-cl)",r.refs.btnWatched.style.backgroundColor="transparent",r.refs.btnWatched.style.borderColor="var(--header-text-cl)"})),d("watched");var c=i("1drNe");i("jU4ZD");r=i("krGWQ"),l=i("7x8k5");var u=i("fnyLm"),f=i("kYzA7"),m=i("1hBMB"),b=i("gXqAZ");function v(){window.removeEventListener("keydown",g),document.body.classList.remove("show-modal"),r.refs.modalCardContainer.innerHTML=""}function g(e){"Escape"===e.code&&v()}r.refs.libraryCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"B"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",g);const t=e.target.dataset.id,n=localStorage.getItem("currentFilm");let a=JSON.parse(n).find((e=>e.id==t));const i=function(e){let t="";t=e.poster_path?`${m.BASE_POSTER_URL}/${e.poster_path}`:"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png";return`<div class="movie__container--left-side">              \n                  <img class="movie__image" src="${t}"\n                    alt="${e.title||e.name}" />\n                    <button type="button" class="movie__btn-trailer">\n                        <svg width='120' height='80' class='youtube-icon' viewBox='0 -77 512.00213 512'>\n                            <path\n                                d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0'\n                                fill='#f00'></path>\n                            <path d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' fill='#fff'></path>\n                        </svg>\n                    </button>                \n            </div>\n            <div class="movie__container--rigth-side">\n                <h2 class="movie__title">${e.title||e.name}</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="votes">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">${(0,b.setReleaseVote)(e.vote_average)}</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">${(0,b.setReleaseVote)(e.vote_count)}</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="popularity">Popularity</td>\n                            <td class="movie__info-numbers">${e.popularity}</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="originalTitle">Original Title</td>\n                            <td class="movie__info-value">${e.original_title||e.original_name}</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name" data-key="genre">Genre</td>\n                            <td class="movie__info-value">${(0,c.gettingGenresListForModal)(e.genre_ids)||"Genre not defined"}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title" data-key="about">About</h2>\n                <p class="movie__about-text">\n                    ${e.overview||"No text"}\n                </p>\n                <div class="movie__btn-container">\n                   \n                    <button type="submit" id="watched-btn" data-id="${e.id}" class="movie__btn btn btn--accent">ADD TO WATCHED\n                        </button>\n                    <button type="submit" id="queue-btn" data-id="${e.id}" class="movie__btn btn btn-queue">ADD TO QUEUE\n                        </button>\n                </div>\n            </div>\n        </div>`}(a);(0,l.insertModalMarkupHome)(i),document.querySelector("#watched-btn").addEventListener("click",(()=>{let e=[];const n=localStorage.getItem("watched");n&&(e=JSON.parse(n));e.find((e=>e.id==t))?(0,u.deleteWatched)(a):(0,u.addWatchedLocalStorage)(a),(0,f.textModalBtn)(t)})),document.querySelector("#queue-btn").addEventListener("click",(()=>{let e=[];const n=localStorage.getItem("queue");n&&(e=JSON.parse(n));e.find((e=>e.id==t))?(0,u.deleteQueue)(a):(0,u.addQueueLocalStorage)(a),(0,f.textModalBtn)(t)})),(0,f.textModalBtn)(t)})),r.refs.closeModalBtn.addEventListener("click",v),r.refs.modalCardBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&v()})),i("cddKH"),i("9tydV"),i("ZS19j"),i("iLDfN");
//# sourceMappingURL=library.27cf953e.js.map
