var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},d=e.parcelRequired7c6;null==d&&((d=function(e){if(e in t)return t[e].exports;if(e in a){var d=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,d.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=d),d("lWQcB"),d("gUFwy");var n=d("eTryO"),o=d("8N7ah"),r=d("9h9Ht"),l=d("jekin"),i=d("cH4rS"),c=d("g4HhO"),s=d("hubyf");o.refs.libraryCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"B"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",s.modalCloseByEsc);const t=e.target.dataset.id,a=localStorage.getItem("currentFilm"),d=JSON.parse(a).find((e=>e.id==t)),o=(0,c.makingModalCardMarkup)(d);(0,n.translateItems)(".movie__container--rigth-side [data-key]"),(0,r.insertModalMarkupHome)(o);const f=document.querySelector("#watched-btn");f.addEventListener("click",(()=>{let e=[];const a=localStorage.getItem("watched");a&&(e=JSON.parse(a));e.find((e=>e.id==t))?(0,l.deleteWatched)(d):(0,l.addWatchedLocalStorage)(d,f,u),(0,i.textModalBtn)(t)}));const g=document.querySelector("#queue-btn");g.addEventListener("click",(()=>{let e=[];const a=localStorage.getItem("queue");a&&(e=JSON.parse(a));e.find((e=>e.id==t))?(0,l.deleteQueue)(d):(0,l.addQueueLocalStorage)(d,g,u),(0,i.textModalBtn)(t)})),(0,i.textModalBtn)(t)})),o.refs.closeModalBtn.addEventListener("click",s.onCloseModalBtnClick),o.refs.modalCardBackdrop.addEventListener("click",s.onModalCardBackdropClick);const u=o.refs.homeCardsContainer;d("liqC1"),d("fBmr5"),d("eTryO"),d("jeGWj");
//# sourceMappingURL=library.70d6ab58.js.map