!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var s=n("4Nugj");n("cbazt");var i=n("1VFfL");n("efgtE");var o=n("37jAB"),l=n("j7yxE");s=n("4Nugj");n("cbazt"),n("j1lrD");var u=JSON.parse(localStorage.getItem("watched"));function c(t){u=JSON.parse(localStorage.getItem("".concat(t)));var a=document.getElementById("pagination-library"),r={totalItems:u.length,itemsPerPage:10,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},n=window.matchMedia("(max-width: 768px)");function c(e){e.matches&&(r.visiblePages=3)}n.addEventListener("change",c),c(n);var d=new(e(i))(a,r);function p(e,t,a){s.refs.libraryCardsContainer.innerHTML="";var r=t*(a-=1),n=r+t;if(e){var i=e.slice(r,n),u=(0,o.default)(i);(0,l.insertFilmsMarkupToLibrary)(u)}}p(u,r.itemsPerPage,r.page),d.on("afterMove",(function(e){s.refs.libraryCardsContainer.innerHTML="";var t=e.page;p(u,r.itemsPerPage,t)}))}c("watched"),s.refs.btnWatched.addEventListener("click",(function(e){c("watched"),s.refs.btnWatched.style.backgroundColor="var(--button-bg-cl)",s.refs.btnWatched.style.borderColor="var(--button-bg-cl)",s.refs.btnQueue.style.backgroundColor="transparent",s.refs.btnQueue.style.borderColor="var(--header-text-cl)"})),s.refs.btnQueue.addEventListener("click",(function(e){c("queue"),s.refs.btnQueue.style.backgroundColor="var(--button-bg-cl)",s.refs.btnQueue.style.borderColor="var(--button-bg-cl)",s.refs.btnWatched.style.backgroundColor="transparent",s.refs.btnWatched.style.borderColor="var(--header-text-cl)"})),n("ivF4K"),n("6IdhT"),n("3MGSC")}();
//# sourceMappingURL=library.9dcbffd9.js.map