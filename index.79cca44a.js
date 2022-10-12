function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r.register("jU4ZD",(function(t,n){e(t.exports,"default",(function(){return a}));var o=r("1drNe");r("krGWQ");function a(e){return e.map((({title:e,name:t,poster_path:n,genre_ids:r,release_date:a,first_air_date:i,vote_average:c,id:d})=>{let s="";return s=null===n?"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png":`https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500/${n}`,`<li data-aos="fade-up"\n    data-aos-offset="200"\n    data-aos-delay="100"\n    data-aos-duration="1000"\n    data-aos-easing="ease-in-out"\n     class="movie-card">\n        <div class="movie-card__link" href="#">\n        <p class="movie-card__raiting">\n                        <b>${m=c,m?m.toFixed(1):"No vote"}</b>\n                    </p>\n                <img data-id="${d}" width="280" height="402" class="movie-card__img" src="${s}" alt="${e||t}" loading="lazy"/>\n    <div data-aos="fade-right"\n    data-aos-delay="50"\n    data-aos-duration="1000"\n    data-aos-easing="ease-in-out"\n    data-aos-once="false"\n     class="movie-card__cont">\n                  <h2 class="movie-card__title">${e||t}</h2>\n                    <p class="movie-card__info">\n                        <b>${(0,o.gettingGenresListForCard)(r)||"Genre not defined"} | </b>\n                    </p>\n                    <p class="movie-card__info">\n                        <b>${l=a,u=i,(l?l.slice(0,4):u.slice(0,4))||"No data"}</b>\n                    </p>\n                       \n                    </div>\n                    </div>\n            </li>`;var l,u,m})).join("")}})),r.register("1drNe",(function(t,n){function o(e){let t="";for(const n of e){const e=localStorage.getItem(`genre_${n}`);e&&(t&&(t+=", "),t+=e)}return t}function r(e){let t="";if(e.length<=2){for(const n of e){let e=localStorage.getItem(`genre_${n}`);e&&(t&&(t+=", "),t+=e)}return t}if(e.length>=3){let n=0;for(const o of e){let e=localStorage.getItem(`genre_${o}`);if(e){if(n+=1,3===n){t+=", Other";break}t&&(t+=", "),t+=e}}return t}}e(t.exports,"gettingGenresListForModal",(function(){return o})),e(t.exports,"gettingGenresListForCard",(function(){return r}))})),r.register("krGWQ",(function(t,n){e(t.exports,"refs",(function(){return o}));const o={homeCardsContainer:document.querySelector(".cards__list--home"),libraryCardsContainer:document.querySelector(".cards__list--library"),btnWatched:document.querySelector("#watched"),btnQueue:document.querySelector("#queue"),btnAddToWatched:document.querySelector(".modal_watched"),btnAddToQueue:document.querySelector(".modal_queue"),closeModalBtn:document.querySelector(".modal-close-button"),DEBOUNCE_DELAY:300,formSearch:document.querySelector(".search-form"),filmsSearchList:document.querySelector(".search-form__list"),modalCardBackdrop:document.querySelector(".modal-card-backdrop"),modalCardContainer:document.querySelector(".movie__container"),inputSearch:document.querySelector(".search-form__input")}})),r.register("7x8k5",(function(t,n){e(t.exports,"insertFilmsMarkupToHome",(function(){return a})),e(t.exports,"insertFilmsMarkupToLibrary",(function(){return i}));var o=r("krGWQ");const a=e=>o.refs.homeCardsContainer.insertAdjacentHTML("beforeend",e),i=e=>o.refs.libraryCardsContainer.insertAdjacentHTML("beforeend",e)})),r.register("fnyLm",(function(t,n){e(t.exports,"addWatchedLocalStorage",(function(){return c})),e(t.exports,"addQueueLocalStorage",(function(){return d})),e(t.exports,"getWatchedFilms",(function(){return s})),e(t.exports,"getQueueFilms",(function(){return l}));var o=r("krGWQ"),a=r("jU4ZD"),i=r("7x8k5");function c(e){let t=[];const n=localStorage.getItem("watched");n&&(t=JSON.parse(n));const o=e.id;if(!t.find((e=>e.id===o)))return t.push(e),localStorage.setItem("watched",JSON.stringify(t)),t}function d(e){let t=[];const n=localStorage.getItem("queue");n&&(t=JSON.parse(n));const o=e.id;if(!t.find((e=>e.id===o)))return t.push(e),localStorage.setItem("queue",JSON.stringify(t)),t}function s(){u();try{const e=localStorage.getItem("watched");if(null===e)return void m();const t=JSON.parse(e);if(0===t.length)return void m();const n=(0,a.default)(t);(0,i.insertFilmsMarkupToLibrary)(n)}catch(e){console.log(e)}}function l(){u();try{const e=localStorage.getItem("queue");if(null===e)return void m();const t=JSON.parse(e);if(0===t.length)return void m();const n=(0,a.default)(t);(0,i.insertFilmsMarkupToLibrary)(n)}catch(e){console.log(e)}}function u(){o.refs.libraryCardsContainer.innerHTML=""}function m(){o.refs.libraryCardsContainer.innerHTML='<strong \n    style="\n    font-size: 18px;\n    color: var(--secondary-text-cl);">\n    Sorry, no information has been added\n    </strong>'}})),r.register("9tydV",(function(e,t){const n=document.getElementById("scroll-up");n.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){n.hidden=pageYOffset<document.documentElement.clientHeight}))})),r.register("cddKH",(function(e,t){var n=r("ffErT");console.log(n.data);const o={open:document.querySelector("[modal-open]"),close:document.querySelector(".modal-btn_students"),backdrop:document.querySelector(".backdrop_students")};function a(){o.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",i)}function i(e){"Escape"===e.key&&a()}o.close.addEventListener("click",a),o.open.addEventListener("click",(function(e){e.preventDefault(),window.addEventListener("keydown",i),o.backdrop.classList.remove("is-hidden")})),o.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&a()}));const c=[];!function(e,t,o){const r=360/e;for(let t=0;t<=e;t++)c.push(r/180*t*Math.PI);!function(e,t,o){let r=document.getElementById(o),a=parseInt(window.getComputedStyle(r).height.slice(0,-2)),i=[];for(let o=0;o<e;o++){const e=document.createElement("li");e.className="circle number"+o,i.push(e),i[o].posx=Math.round(t*Math.cos(c[o]))+"px",i[o].posy=Math.round(t*Math.sin(c[o]))+"px",i[o].style.position="absolute",i[o].style.backgroundImage=n.data[o].url,console.log(n.data[o].url),i[o].style.top=a/2-parseInt(i[o].posy.slice(0,-2))+"px",i[o].style.left=a/2+parseInt(i[o].posx.slice(0,-2))+"px",r.appendChild(i[o])}}(e,t,o)}(10,280,"main");const d=document.querySelectorAll(".circle"),s=document.querySelector(".data-student");function l(){s.classList.toggle("is-hidden")}console.log(d),d.forEach((e=>{e.addEventListener("click",l)}))})),r.register("ffErT",(function(t,n){e(t.exports,"data",(function(){return o}));const o=[{id:"1",name:"name",information:"information",url:"http://dummyimage.com/80"},{id:"2",name:"name",information:"information",url:"http://dummyimage.com/80"},{id:"3",name:"name",information:"information",url:"http://dummyimage.com/80"},{id:"4",name:"name",information:"information",url:"http://dummyimage.com/80"},{id:"5",name:"name",information:"information",url:"http://dummyimage.com/80"},{id:"6",name:"name",information:"information",url:"http://dummyimage.com/80"},{id:"7",name:"name",information:"information",url:"http://dummyimage.com/80"},{id:"8",name:"name",information:"information",url:"http://dummyimage.com/80"},{id:"9",name:"name",information:"information",url:"http://dummyimage.com/80"},{id:"10",name:"name",information:"information",url:"http://dummyimage.com/80"}]}));
//# sourceMappingURL=index.79cca44a.js.map
