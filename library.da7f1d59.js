!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n("4Nugj"),l=n("cbazt");o.refs.btnWatched.addEventListener("click",(function(e){(0,l.getWatchedFilms)(),o.refs.btnWatched.style.backgroundColor="var(--button-bg-cl)",o.refs.btnWatched.style.borderColor="var(--button-bg-cl)",o.refs.btnQueue.style.backgroundColor="transparent",o.refs.btnQueue.style.borderColor="var(--header-text-cl)"})),o.refs.btnQueue.addEventListener("click",(function(e){(0,l.getQueueFilms)(),o.refs.btnQueue.style.backgroundColor="var(--button-bg-cl)",o.refs.btnQueue.style.borderColor="var(--button-bg-cl)",o.refs.btnWatched.style.backgroundColor="transparent",o.refs.btnWatched.style.borderColor="var(--header-text-cl)"})),(0,l.getWatchedFilms)()}();
//# sourceMappingURL=library.da7f1d59.js.map
