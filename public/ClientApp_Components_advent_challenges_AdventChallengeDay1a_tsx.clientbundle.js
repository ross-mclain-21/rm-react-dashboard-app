"use strict";
(self["webpackChunkrm_react_dashboard_app"] = self["webpackChunkrm_react_dashboard_app"] || []).push([["ClientApp_Components_advent_challenges_AdventChallengeDay1a_tsx"],{

/***/ "./ClientApp/Components/advent/challenges/AdventChallengeDay1a.tsx":
/*!*************************************************************************!*\
  !*** ./ClientApp/Components/advent/challenges/AdventChallengeDay1a.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Advent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Advent.scss */ "./ClientApp/Components/advent/Advent.scss");
/* harmony import */ var _data_AdventDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/AdventDataSource */ "./ClientApp/Components/advent/data/AdventDataSource.ts");




function AdventChallengeDay1a() {
  var solvePuzzle = function solvePuzzle(inputData) {
    return inputData.reduce(function (acc, v, i) {
      return acc += v < inputData[i + 1] ? 1 : 0;
    }, 0);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex-fill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mb-2"
  }, "Problem Input:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-3 small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "small data-box"
  }, _data_AdventDataSource__WEBPACK_IMPORTED_MODULE_2__.adventDay1Data.join(", ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mb-2"
  }, "Problem Solution:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "color-code-green"
  }, "There are ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, solvePuzzle(_data_AdventDataSource__WEBPACK_IMPORTED_MODULE_2__.adventDay1Data)), " measurements that are larger than the previous measurement."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mb-2"
  }, "Code:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    className: "color-code-green small code mb-0"
  }, "const solvePuzzle = (inputData: number[]) =>\n    inputData.reduce((acc, v, i) => (acc += v < inputData[i + 1] ? 1 : 0), 0);"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mb-2"
  }, "Code Explanation:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "color-code-green small mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Take in input array as :number[]. I took the data from the advent website and stored it as json"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Use Array.prototype.reduce() to use built-in functionality to add to the accumulated int if value is less than the next value in the array."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "This code only loops once through the array making this solution in Big O notation:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "N")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, "This is with an assumption that the Array.prototype.reduce() function doesn't do any extra iterating.", " ")))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdventChallengeDay1a);

/***/ })

}]);
//# sourceMappingURL=ClientApp_Components_advent_challenges_AdventChallengeDay1a_tsx.clientbundle.js.map