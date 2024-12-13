"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_js_modules_catalog-cards-list_js"],{

/***/ "./src/js/modules/catalog-cards-list.js":
/*!**********************************************!*\
  !*** ./src/js/modules/catalog-cards-list.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction catalogCardsList() {\n  var iconTile = document.querySelector('.catalog__items-icon-tile');\n  var iconRow = document.querySelector('.catalog__items-icon-row');\n  var iconTileSvg = document.querySelector('.catalog__items-icon-tile-svg');\n  var iconRowSvg = document.querySelector('.catalog__items-icon-row-svg');\n  var catalogItem1 = document.querySelector('.catalog__item');\n  var catalogItem2 = document.querySelector('.catalog__item-2');\n  iconTile.addEventListener('click', () => {\n    catalogItem1.classList.remove('hide');\n    catalogItem2.classList.add('hide');\n    iconRowSvg.classList.remove('scale');\n    iconTileSvg.classList.add('scale');\n  });\n  console.log(\"catalogCardsList called\");\n  iconRow.addEventListener('click', () => {\n    catalogItem1.classList.add('hide');\n    catalogItem2.classList.remove('hide');\n    iconTileSvg.classList.remove('scale');\n    iconRowSvg.classList.add('scale');\n  });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (catalogCardsList);\n\n//# sourceURL=webpack:///./src/js/modules/catalog-cards-list.js?");

/***/ })

}]);