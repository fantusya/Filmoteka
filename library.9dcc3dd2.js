var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("7x0LX"),a("4NjsD");var o=a("1drNe"),i=a("ZS19j");a("jU4ZD");var s=a("krGWQ"),d=a("7x8k5"),r=a("fnyLm"),l=a("kYzA7"),c=a("1hBMB"),m=a("gXqAZ");s.refs.libraryCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"B"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",v);const t=e.target.dataset.id,n=localStorage.getItem("watched"),a=localStorage.getItem("queue"),s=JSON.parse(n),u=JSON.parse(a);let f=s.find((e=>e.id==t)),g=u.find((e=>e.id==t));const p=function(e){let t="";t=e.poster_path?`${c.BASE_POSTER_URL}/${e.poster_path}`:"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png";return`<div class="movie__container--left-side">              \n                  <img class="movie__image" src="${t}"\n                    alt="${e.title||e.name}" />\n                    <button type="button" class="movie__btn-trailer">\n                        <svg width='120' height='80' class='youtube-icon' viewBox='0 -77 512.00213 512'>\n                            <path\n                                d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0'\n                                fill='#f00'></path>\n                            <path d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' fill='#fff'></path>\n                        </svg>\n                    </button>                \n            </div>\n            <div class="movie__container--rigth-side">\n                <h2 class="movie__title">${e.title||e.name}</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="votes">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">${(0,m.setReleaseVote)(e.vote_average)}</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">${(0,m.setReleaseVote)(e.vote_count)}</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="popularity">Popularity</td>\n                            <td class="movie__info-numbers">${e.popularity}</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="originalTitle">Original Title</td>\n                            <td class="movie__info-value">${e.original_title||e.original_name}</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name" data-key="genre">Genre</td>\n                            <td class="movie__info-value">${(0,o.gettingGenresListForModal)(e.genre_ids)||"Genre not defined"}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title" data-key="about">About</h2>\n                <p class="movie__about-text">\n                    ${e.overview||"No text"}\n                </p>\n                <div class="movie__btn-container">\n                   \n                    <button type="submit" id="watched-btn" data-id="${e.id}" class="movie__btn btn btn--accent">ADD TO WATCHED\n                        </button>\n                    <button type="submit" id="queue-btn" data-id="${e.id}" class="movie__btn btn btn-queue">ADD TO QUEUE\n                        </button>\n                </div>\n            </div>\n        </div>`}(f||g);(0,i.translateItems)(".movie__container--rigth-side [data-key]"),(0,d.insertModalMarkupHome)(p);const b=document.querySelector("#watched-btn");b.addEventListener("click",(()=>{let e=[];const n=localStorage.getItem("watched");n&&(e=JSON.parse(n));e.find((e=>e.id==t))?(0,r.deleteWatched)(f):(0,r.addWatchedLocalStorage)(g,b,_),(0,l.textModalBtn)(t)}));const h=document.querySelector("#queue-btn");h.addEventListener("click",(()=>{let e=[];const n=localStorage.getItem("queue");n&&(e=JSON.parse(n));e.find((e=>e.id==t))?(0,r.deleteQueue)(g):(0,r.addQueueLocalStorage)(f,h,_),(0,l.textModalBtn)(t)})),(0,l.textModalBtn)(t)})),s.refs.closeModalBtn.addEventListener("click",u),s.refs.modalCardBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&u()}));const _=s.refs.homeCardsContainer;function u(){window.removeEventListener("keydown",v),document.body.classList.remove("show-modal"),s.refs.modalCardContainer.innerHTML=""}function v(e){"Escape"===e.code&&u()}a("cddKH"),a("9tydV"),a("ZS19j"),a("iLDfN");
//# sourceMappingURL=library.9dcc3dd2.js.map
