!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var i=o("4Nugj");o("cbazt");var r=o("1VFfL"),s=o("37jAB"),l=o("j7yxE");function c(t){var n=JSON.parse(localStorage.getItem("".concat(t))),a=document.getElementById("pagination-library");if(!n||0===n.length)return a.innerHTML="",void(i.refs.libraryCardsContainer.innerHTML='<div style="font-size: 20px" data-key="emptyList">Your list is still empty</div>');console.log(n.length);var o={totalItems:n.length,itemsPerPage:6,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},c=window.matchMedia("(max-width: 768px)");function d(e){e.matches&&(o.visiblePages=3)}c.addEventListener("change",d),d(c);var u=new(e(r))(a,o);function v(e,t,n){i.refs.libraryCardsContainer.innerHTML="";var a=t*(n-=1),o=a+t;if(e&&0!==e.length){var r=e.slice(a,o),c=(0,s.default)(r);(0,l.insertFilmsMarkupToLibrary)(c)}else i.refs.libraryCardsContainer.innerHTML=""}v(n,o.itemsPerPage,o.page),u.on("afterMove",(function(e){i.refs.libraryCardsContainer.innerHTML="";var t=e.page;v(n,o.itemsPerPage,t)}))}(i=o("4Nugj")).refs.btnWatched.addEventListener("click",(function(e){c("watched"),i.refs.btnWatched.style.backgroundColor="var(--button-bg-cl)",i.refs.btnWatched.style.borderColor="var(--button-bg-cl)",i.refs.btnQueue.style.backgroundColor="transparent",i.refs.btnQueue.style.borderColor="var(--header-text-cl)"})),i.refs.btnQueue.addEventListener("click",(function(e){c("queue"),i.refs.btnQueue.style.backgroundColor="var(--button-bg-cl)",i.refs.btnQueue.style.borderColor="var(--button-bg-cl)",i.refs.btnWatched.style.backgroundColor="transparent",i.refs.btnWatched.style.borderColor="var(--header-text-cl)"})),c("watched");var d=o("iSn7Y");o("37jAB");i=o("4Nugj"),l=o("j7yxE");var u=o("cbazt"),v=o("4uNB6"),f=o("4QKg3"),m=o("h7AsZ");function g(){window.removeEventListener("keydown",p),document.body.classList.remove("show-modal"),i.refs.modalCardContainer.innerHTML=""}function p(e){"Escape"===e.code&&g()}i.refs.libraryCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"B"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",p);var t=e.target.dataset.id,n=localStorage.getItem("currentFilm"),a=JSON.parse(n).find((function(e){return e.id==t})),o=(i=a,r="",r=i.poster_path?"".concat(f.BASE_POSTER_URL,"/").concat(i.poster_path):"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png",'<div class="movie__container--left-side">              \n                  <img class="movie__image" src="'.concat(r,'"\n                    alt="').concat(i.title||i.name,"\" />\n                    <button type=\"button\" class=\"movie__btn-trailer\">\n                        <svg width='120' height='80' class='youtube-icon' viewBox='0 -77 512.00213 512'>\n                            <path\n                                d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0'\n                                fill='#f00'></path>\n                            <path d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' fill='#fff'></path>\n                        </svg>\n                    </button>                \n            </div>\n            <div class=\"movie__container--rigth-side\">\n                <h2 class=\"movie__title\">").concat(i.title||i.name,'</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="votes">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">').concat((0,m.setReleaseVote)(i.vote_average),'</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">').concat((0,m.setReleaseVote)(i.vote_count),'</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="popularity">Popularity</td>\n                            <td class="movie__info-numbers">').concat(i.popularity,'</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="originalTitle">Original Title</td>\n                            <td class="movie__info-value">').concat(i.original_title||i.original_name,'</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name" data-key="genre">Genre</td>\n                            <td class="movie__info-value">').concat((0,d.gettingGenresListForModal)(i.genre_ids)||"Genre not defined",'</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title" data-key="about">About</h2>\n                <p class="movie__about-text">\n                    ').concat(i.overview||"No text",'\n                </p>\n                <div class="movie__btn-container">\n                   \n                    <button type="submit" id="watched-btn" data-id="').concat(i.id,'" class="movie__btn btn btn--accent">ADD TO WATCHED\n                        </button>\n                    <button type="submit" id="queue-btn" data-id="').concat(i.id,'" class="movie__btn btn btn-queue">ADD TO QUEUE\n                        </button>\n                </div>\n            </div>\n        </div>'));var i,r;(0,l.insertModalMarkupHome)(o),document.querySelector("#watched-btn").addEventListener("click",(function(){var e=[],n=localStorage.getItem("watched");n&&(e=JSON.parse(n)),e.find((function(e){return e.id==t}))?(0,u.deleteWatched)(a):(0,u.addWatchedLocalStorage)(a),(0,v.textModalBtn)(t)})),document.querySelector("#queue-btn").addEventListener("click",(function(){var e=[],n=localStorage.getItem("queue");n&&(e=JSON.parse(n)),e.find((function(e){return e.id==t}))?(0,u.deleteQueue)(a):(0,u.addQueueLocalStorage)(a),(0,v.textModalBtn)(t)})),(0,v.textModalBtn)(t)})),i.refs.closeModalBtn.addEventListener("click",g),i.refs.modalCardBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&g()})),o("ivF4K"),o("6IdhT"),o("3MGSC"),o("9PpgY")}();
//# sourceMappingURL=library.ae0077fd.js.map
