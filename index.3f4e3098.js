function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in s)return s[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return s[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n);var i=n("g887t"),r=n("8N7ah");class o{show(){this.refs.spinner.classList.remove("is-hidden")}hide(){this.refs.spinner.classList.add("is-hidden")}constructor(){this.refs=r.refs}}var l=n("iN3f5"),c=n("9h9Ht"),d=n("fb9GJ");i=n("g887t"),l=n("iN3f5"),c=n("9h9Ht"),r=n("8N7ah"),r=n("8N7ah");const u=new o;function f(){u.hide();r.refs.messageContainer.innerHTML='<p class="film-cards__error" data-key="responseError">Sorry, no response from server!</p>'}const p=new(0,i.default),m=new o;function g(t){const s=document.getElementById("pagination"),a={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},n=window.matchMedia("(max-width: 768px)");function i(e){e.matches&&(a.visiblePages=3)}n.addEventListener("change",i),i(n);new(e(d))(s,a).on("afterMove",(e=>{r.refs.homeCardsContainer.innerHTML="",m.show(),p.page=e.page,localStorage.setItem("page",p.page),p.fetchTrendingMovies().then((({results:e})=>{const t=(0,l.default)(e);m.hide(),(0,c.insertFilmsMarkupToHome)(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch(f)}))}const h=new(0,i.default),v=new o;h.fetchGenres().then((({genres:e})=>{for(const{id:t,name:s}of e)localStorage.setItem(`genre_${t}`,s)})).catch((e=>console.log(e))),v.show(),h.fetchTrendingMovies().then((({results:e,total_results:t})=>{const s=(0,l.default)(e);v.hide(),(0,c.insertFilmsMarkupToHome)(s),g(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch(f),n("cH4rS");r=n("8N7ah"),i=n("g887t"),l=n("iN3f5"),c=n("9h9Ht"),d=n("fb9GJ"),i=n("g887t"),l=n("iN3f5"),c=n("9h9Ht"),r=n("8N7ah");const y=new(0,i.default),M=new o;function b(t,s){const a=document.getElementById("pagination"),n={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},i=window.matchMedia("(max-width: 768px)");function o(e){e.matches&&(n.visiblePages=3)}i.addEventListener("change",o),o(i);new(e(d))(a,n).on("afterMove",(e=>{r.refs.homeCardsContainer.innerHTML="",M.show(),y.page=e.page,y.query=s,y.fetchSearchingMovies().then((({results:e})=>{const t=(0,l.default)(e);M.hide(),(0,c.insertFilmsMarkupToHome)(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch(f)}))}r=n("8N7ah");function w(){const e=`<p class="search-form--badrequest">${function(){const e=localStorage.getItem("lang");if(!e||"en-US"===e)return"Search result not successful. Enter the correct movie name!";if("uk-UA"===e)return"Упс, нічого не знайдено. Введіть коректну назву фільма!"}()}</p>`;r.refs.filmsSearchList.innerHTML=e;return setTimeout((()=>r.refs.filmsSearchList.innerHTML=""),2e3)}const S=new(0,i.default),C=new o;r.refs.formSearch.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.searchInput.value.trim();if(!t)return;S.query=t,C.show();try{S.fetchSearchingMovies().then((({results:e,total_results:s})=>{if(C.hide(),0===e.length)return void w();r.refs.homeCardsContainer.innerHTML="";const a=(0,l.default)(e);(0,c.insertFilmsMarkupToHome)(a),b(s,t),localStorage.setItem("currentFilm",JSON.stringify(e))}))}catch(e){f()}r.refs.inputSearch.value="",r.refs.filmsSearchList.innerHTML="",r.refs.filmsSearchList.classList.remove("search-form__list--bgc")}));r=n("8N7ah"),c=n("9h9Ht");var L=n("jekin"),E=n("eTryO"),N=n("cH4rS"),T=n("g4HhO"),H=n("hubyf");r.refs.homeCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"B"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",H.modalCloseByEsc);const t=e.target.dataset.id,s=localStorage.getItem("currentFilm");let a=JSON.parse(s).find((e=>e.id==t));const n=(0,T.makingModalCardMarkup)(a);(0,E.translateItems)(".movie__container--rigth-side [data-key]"),(0,c.insertModalMarkupHome)(n);const i=document.querySelector("#watched-btn");i.addEventListener("click",(()=>{"REMOVE FROM WATCHED"===i.textContent&&(i.textContent="ADD TO WATCHED"),(0,L.addWatchedLocalStorage)(a,i,k)}));const r=document.querySelector("#queue-btn");r.addEventListener("click",(()=>{"REMOVE FROM QUEUE"===r.textContent&&(r.textContent="ADD TO QUEUE"),(0,L.addQueueLocalStorage)(a,r,k)})),(0,N.textModalBtn)(t)})),r.refs.closeModalBtn.addEventListener("click",H.onCloseModalBtnClick),r.refs.modalCardBackdrop.addEventListener("click",H.onModalCardBackdropClick);const k=r.refs.homeCardsContainer;n("fBmr5"),n("liqC1"),AOS.init(),n("eTryO"),n("jeGWj");r=n("8N7ah");setTimeout((()=>{r.refs.advertising.classList.add("is-visible")}),5e3),setTimeout((()=>{r.refs.advertising.classList.remove("is-visible"),r.refs.advertising.classList.add("semi-visible")}),1e4);
//# sourceMappingURL=index.3f4e3098.js.map