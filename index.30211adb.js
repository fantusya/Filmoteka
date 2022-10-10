!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var n={};function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,e,n){e&&i(t.prototype,e);n&&i(t,n);return t};var a="e09f06c48afcb3ebfd8a25b0b6965d1e",o="https://api.themoviedb.org/3/",r=function(){"use strict";function i(){t(e)(this,i),this.searchQuery="",this._page=1}return t(n)(i,[{key:"fetchTrendingMovies",value:function(){var t="".concat(o,"trending/all/day?&api_key=").concat(a,"&page=").concat(this._page);return fetch(t).then((function(t){return t.json()}))}},{key:"fetchGenres",value:function(){var t="".concat("https://api.themoviedb.org/3/genre/movie/list?","&language=en-US&api_key=").concat(a);return fetch(t).then((function(t){return t.json()}))}},{key:"fetchSearchingMovies",value:function(){var t="".concat(o,"search/movie?api_key=").concat(a,"&page=").concat(this._page,"&query=").concat(this.searchQuery);return fetch(t).then((function(t){return t.json()}))}},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}},{key:"resetPage",value:function(){this.page=1}},{key:"page",get:function(){return this._page},set:function(t){this._page=t}}]),i}();function s(t){var e="",n=!0,i=!1,a=void 0;try{for(var o,r=t[Symbol.iterator]();!(n=(o=r.next()).done);n=!0){var s=o.value,c=localStorage.getItem("genre_".concat(s));c&&(e&&(e+=", "),e+=c)}}catch(t){i=!0,a=t}finally{try{n||null==r.return||r.return()}finally{if(i)throw a}}return e}var c={homeCardsContainer:document.querySelector(".cards__list--home"),libraryCardsContainer:document.querySelector(".cards__list--library"),btnWatched:document.querySelector("#watched"),btnQueue:document.querySelector("#queue"),btnAddToWatched:document.querySelector(".modal_watched"),btnAddToQueue:document.querySelector(".modal_queue"),closeModalBtn:document.querySelector(".modal-close-button"),DEBOUNCE_DELAY:300,formSearch:document.querySelector(".search-form"),filmsSearchList:document.querySelector(".search-form__list"),modalCardBackdrop:document.querySelector(".modal-card-backdrop"),modalCardContainer:document.querySelector(".movie__container"),inputSearch:document.querySelector(".search-form__input")},u="https://image.tmdb.org/t/p/w500";function l(t){return t.map((function(t){var e,n=t.title,i=t.name,a=t.poster_path,o=t.genre_ids,r=t.release_date,c=t.first_air_date,l=t.vote_average,f=t.id,d="";return d=null===a?"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png":"".concat(u,"/").concat(u,"/").concat(a),'<li data-aos="fade-up"\n    data-aos-offset="200"\n    data-aos-delay="100"\n    data-aos-duration="1000"\n    data-aos-easing="ease-in-out"\n     class="movie-card">\n        <a class="movie-card__link" href="#">\n        <p class="movie-card__raiting">\n                        <b>'.concat((e=l,e?e.toFixed(1):"No vote"),'</b>\n                    </p>\n                <img data-id="').concat(f,'" width="280" height="402" class="movie-card__img" src="').concat(d,'" alt="').concat(n||i,'" loading="lazy"/>\n    <div data-aos="fade-right"\n    data-aos-delay="50"\n    data-aos-duration="1000"\n    data-aos-easing="ease-in-out"\n    data-aos-once="false"\n     class="movie-card__cont">\n                  <h2 class="movie-card__title">').concat(n||i,'</h2>\n                    <p class="movie-card__info">\n                        <b>').concat(s(o)||"Thriller",' | </b>\n                    </p>\n                    <p class="movie-card__info">\n                        <b>').concat(p(r)||p(c),"</b>\n                    </p>\n                       \n                    </div>\n                    </a>\n            </li>")})).join("")}function p(t){return t?t.slice(0,4):"No data"}var f,d=function(t){return c.homeCardsContainer.insertAdjacentHTML("beforeend",t)},h={};window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
f=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,a,o,r=Object.prototype.hasOwnProperty;for(a=1,o=arguments.length;a<o;a+=1)for(i in n=arguments[a])r.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),a=n(17),o=n(6);t.exports=function(t,e,n){i(t)?a(t,e,n):o(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),a=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(a(n,e.static),delete e.static),a(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var a,o;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,a=n;n>=0&&a<o;a+=1)if(e[a]===t)return a;return-1}},function(t,e,n){"use strict";var i=n(29),a=n(30),o=n(5),r={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),a=o(t)?t(e):i(t,e);return n.innerHTML=a,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){a("pagination","UA-129987462-1")}};t.exports=r},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),a=n(7),o=n(0),r=n(1),s=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=a({init:function(t,e){this._options=o({},u,e),this._currentPage=0,this._view=new s(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),a=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=i>1,e.nextMore=i<a,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,a=this._getLastPage(),o=this._options.visiblePages,r=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(o/2),(n=(e=Math.max(t-i,1))+o-1)>a&&(e=Math.max(a-o+1,1),n=a)):(e=(r-1)*o+1,n=r*o,n=Math.min(n,a)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){r(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l},function(t,e,n){"use strict";var i=n(0),a=n(14),o=n(4),r=n(16),s=n(2),c=n(5),u=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;a(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;a(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;o(t)?(t=t.split(l),u(t,(function(t){i._bindEvent(t,e,n)}))):r(t)&&(n=e,u(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(r(t))return n=e,void u(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function a(){e.apply(n,arguments),i.off(t,a,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(s(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var a=t===i.handler,o=e===i.context,r=a&&o;return r&&n._forgetContext(i.context),r}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),a=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,a):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?u(t,(function(t,e){i.off(e,t)})):o(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):r(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,a;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(a=e[i]).handler.apply(a.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var i=n(1),a=n(15);t.exports=function(t){return!i(t)&&!a(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,a=t.length;for(n=n||null;i<a&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),a=n(7),o=n(21),r=n(22),s=n(24),c=n(25),u=n(0),l=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],m=["prev","next"],g=a({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(h,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(h,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(m,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,a=t.rightPageNumber;for(n=i;n<=a;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==a||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();r(e,"click",(function(e){var n,i,a=o(e);s(e),(i=this._getButtonType(a))||(n=this._getPageNumber(a)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),a=n(3),o=n(23);function r(t,e,n,i){function r(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,r):"attachEvent"in t&&t.attachEvent("on"+e,r),function(t,e,n,i){var r=o(t,e),s=!1;a(r,(function(t){return t.handler!==n||(s=!0,!1)})),s||r.push({handler:n,wrappedHandler:i})}(t,e,n,r)}t.exports=function(t,e,n,o){i(e)?a(e.split(/\s+/g),(function(e){r(t,e,n,o)})):a(e,(function(e,i){r(t,i,e,n)}))}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,a=t[i];return a||(a=t[i]={}),(n=a[e])||(n=a[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),a=n(8),o=n(26),r=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,c=[];s?i(n,(function(e){t.classList.add(e)})):((e=o(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){a(t,c)<0&&c.push(t)})),r(t,c))}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),a=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),a(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var i=n(8),a=n(3),o=n(2),r=n(4),s=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,h=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],o=0,r=0;return a(e,(function(t,a){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(r,a)),r=a+1)})),i.push(e.slice(r)),{exps:n,sourcesInsideIf:i}}(t,e),o=!1,r="";return a(i.exps,(function(t,e){return(o=b(t,n))&&(r=x(i.sourcesInsideIf[e],n)),!o})),r},each:function(t,e,n){var i=b(t,n),r=o(i)?"@index":"@key",c={},u="";return a(i,(function(t,i){c[r]=i,c["@this"]=t,s(n,c),u+=x(e.slice(),n)})),u},with:function(t,e,n){var a=i("as",t),o=t[a+1],r=b(t.slice(0,a),n),c={};return c[o]=r,x(e,s(n,c))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,a=[],o=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,a.push(t.slice(o,i)),o=i+n[0].length,n=e.exec(t);return a.push(t.slice(o)),a};function _(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:d.test(t)?i=t.replace(h,""):u.test(t)?i=_((n=t.split(l))[0],e)[_(n[1],e)]:p.test(t)?i=_((n=t.split(f))[0],e)[n[1]]:m.test(t)&&(i=parseFloat(t)),i}function y(t,e,n){for(var i,a,o,s,c=g[t],u=1,l=2,p=e[l];u&&r(p);)0===p.indexOf(t)?u+=1:0===p.indexOf("/"+t)&&(u-=1,i=l),p=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(a=0,o=i,(s=e.splice(a+1,o-a)).pop(),s),n),e}function b(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return a(e,(function(t){i.push(_(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function x(t,e){for(var n,i,a,o=1,s=t[o];r(s);)i=(n=s.split(" "))[0],g[i]?(a=y(i,t.splice(o,t.length-o),e),t=t.concat(a)):t[o]=b(n,e),s=t[o+=2];return t.join("")}t.exports=function(t,e){return x(v(t,c),e)}},function(t,e,n){"use strict";var i=n(1),a=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",r=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(r&&!function(t){return(new Date).getTime()-t>6048e5}(r)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||a("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),a="";return i(e,(function(t,e){a+="&"+e+"="+t})),a=a.substring(1),n.src=t+"?"+a,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},h=f();var m=new r;function g(e){var n=document.getElementById("pagination"),i={totalItems:e,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},a=window.matchMedia("(max-width: 768px)");function o(t){t.matches&&(i.visiblePages=3)}a.addEventListener("change",o),o(a),new(t(h))(n,i).on("afterMove",(function(t){c.homeCardsContainer.innerHTML="",m.page=t.page,m.fetchTrendingMovies().then((function(t){var e=t.results,n=l(e);d(n),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch((function(t){return console.log(t)}))}))}var v=new r;v.fetchGenres().then((function(t){var e=t.genres,n=!0,i=!1,a=void 0;try{for(var o,r=e[Symbol.iterator]();!(n=(o=r.next()).done);n=!0){var s=o.value,c=s.id,u=s.name;localStorage.setItem("genre_".concat(c),u)}}catch(t){i=!0,a=t}finally{try{n||null==r.return||r.return()}finally{if(i)throw a}}})).catch((function(t){return console.log(t)})),v.fetchTrendingMovies().then((function(t){var e=t.results,n=t.total_results,i=l(e);d(i),g(n),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch((function(t){return console.log(t)}));function _(t,e,n){var i,a,o,r,s;function c(){var u=Date.now()-r;u<e&&u>=0?i=setTimeout(c,e-u):(i=null,n||(s=t.apply(o,a),o=a=null))}null==e&&(e=100);var u=function(){o=this,a=arguments,r=Date.now();var u=n&&!i;return i||(i=setTimeout(c,e)),u&&(s=t.apply(o,a),o=a=null),s};return u.clear=function(){i&&(clearTimeout(i),i=null)},u.flush=function(){i&&(s=t.apply(o,a),o=a=null,clearTimeout(i),i=null)},u}_.debounce=_;new r;var y=new r;function b(e,n){var i=document.getElementById("pagination"),a={totalItems:e,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},o=window.matchMedia("(max-width: 768px)");function r(t){t.matches&&(a.visiblePages=3)}o.addEventListener("change",r),r(o),new(t(h))(i,a).on("afterMove",(function(t){c.homeCardsContainer.innerHTML="",y.page=t.page,y.query=n,y.fetchSearchingMovies().then((function(t){var e=t.results,n=l(e);d(n),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch((function(t){return console.log(t)}))}))}var x=new r;function P(){window.removeEventListener("keydown",w),document.body.classList.remove("show-modal"),c.modalCardContainer.innerHTML=""}function w(t){"Escape"===t.code&&P()}c.formSearch.addEventListener("submit",(function(t){t.preventDefault();var e=t.currentTarget.elements.searchInput.value.trim();x.query=e;try{x.fetchSearchingMovies().then((function(t){var n=t.results,i=t.total_results;if(0!==n.length){c.homeCardsContainer.innerHTML="";var a=l(n);d(a),b(i,e)}else{c.filmsSearchList.innerHTML='<p class="search-form--badrequest">Search result not successful. Enter the correct movie name!</p>'}}))}catch(t){}c.inputSearch.value="",c.filmsSearchList.innerHTML="",c.filmsSearchList.classList.remove("search-form__list--bgc")})),c.homeCardsContainer.addEventListener("click",(function(t){if("IMG"!==t.target.nodeName&&"B"!==t.target.nodeName)return;var e=t.target.dataset.id,n=localStorage.getItem("currentFilm"),i=JSON.parse(n);console.log(i.find((function(t){return t.id==e}))),a=i.find((function(t){return t.id==e})),o='<div class="movie__container--left-side">\n                <img class="movie__image" src="https://www.themoviedb.org/t/p/w500'.concat(a.poster_path,'"\n                    alt="').concat(a.title||a.name,'" />\n            </div>\n            <div class="movie__container--rigth-side">\n                <h2 class="movie__title">').concat(a.title||a.name,'</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">').concat(a.vote_average,'</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">').concat(a.vote_count,'</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Popularity</td>\n                            <td class="movie__info-numbers">').concat(a.popularity,'</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name">Original Title</td>\n                            <td class="movie__info-value">').concat(a.original_title||a.original_name,'</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name">Genre</td>\n                            <td class="movie__info-value">').concat(s(a.genre_ids)||"Thriller",'</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title">About</h2>\n                <p class="movie__about-text">\n                    ').concat(a.overview,"\n                </p>\n                <div class=\"movie__btn-container\">\n                    <button type=\"button\" class=\"movie__btn btn btn-trailer\">\n                        <svg width='20' height='20' class='youtube-icon' viewBox='0 -77 512.00213 512'>\n                            <path\n                                d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0'\n                                fill='#f00'></path>\n                            <path d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' fill='#fff'></path>\n                        </svg>\n                        Watch trailer\n                    </button>\n                    <button type=\"submit\" id=\"watched-btn\" data-id=\"").concat(a.id,'" class="movie__btn btn btn--accent">add\n                        to Watched</button>\n                    <button type="submit" id="queue-btn" data-id="').concat(a.id,'" class="movie__btn btn btn-queue">add to\n                        queue</button>\n                </div>\n            </div>\n        </div>'),c.modalCardContainer.insertAdjacentHTML("beforeend",o),document.body.classList.add("show-modal"),window.addEventListener("keydown",w);var a,o})),c.closeModalBtn.addEventListener("click",P),c.modalCardBackdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&P()}));var C=document.getElementById("scroll-up");C.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){C.hidden=pageYOffset<document.documentElement.clientHeight}));var E={open:document.querySelector("[modal-open]"),close:document.querySelector(".modal-btn_students"),backdrop:document.querySelector(".backdrop_students")};function M(){E.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",I)}function I(t){"Escape"===t.key&&M()}E.close.addEventListener("click",M),E.open.addEventListener("click",(function(t){t.preventDefault(),window.addEventListener("keydown",I),E.backdrop.classList.remove("is-hidden")})),E.backdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&M()}));var L=[];!function(t,e,n){for(var i=360/t,a=0;a<=t;a++)L.push(i/180*a*Math.PI);!function(t,e,n){for(var i=document.getElementById(n),a=parseInt(window.getComputedStyle(i).height.slice(0,-2)),o=[],r=['url("http://dummyimage.com/80")','url("http://dummyimage.com/80")','url("http://dummyimage.com/80")','url("http://dummyimage.com/80")','url("http://dummyimage.com/80")','url("http://dummyimage.com/80")','url("http://dummyimage.com/80")','url("http://dummyimage.com/80")','url("http://dummyimage.com/80")','url("http://dummyimage.com/80")','url("http://dummyimage.com/80")'],s=0;s<t;s++){var c=document.createElement("li");c.className="circle number"+s,o.push(c),o[s].posx=Math.round(e*Math.cos(L[s]))+"px",o[s].posy=Math.round(e*Math.sin(L[s]))+"px",o[s].style.position="absolute",o[s].style.backgroundImage=r[s],o[s].style.top=a/2-parseInt(o[s].posy.slice(0,-2))+"px",o[s].style.left=a/2+parseInt(o[s].posx.slice(0,-2))+"px",i.appendChild(o[s])}}(t,e,n)}(11,280,"main")}();
//# sourceMappingURL=index.30211adb.js.map