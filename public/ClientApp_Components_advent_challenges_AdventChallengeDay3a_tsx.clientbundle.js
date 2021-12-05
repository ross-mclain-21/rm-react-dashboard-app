"use strict";
(self["webpackChunkrm_react_dashboard_app"] = self["webpackChunkrm_react_dashboard_app"] || []).push([["ClientApp_Components_advent_challenges_AdventChallengeDay3a_tsx"],{

/***/ "./ClientApp/Components/advent/challenges/AdventChallengeDay3a.tsx":
/*!*************************************************************************!*\
  !*** ./ClientApp/Components/advent/challenges/AdventChallengeDay3a.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Advent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Advent.scss */ "./ClientApp/Components/advent/Advent.scss");
/* harmony import */ var _data_AdventDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/AdventDataSource */ "./ClientApp/Components/advent/data/AdventDataSource.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function AdventChallengeDay1b() {
  var solvePuzzle = function solvePuzzle(inputData) {
    var indicesMap = new Map();
    var gammaRate = "";
    var epsilonRate = "";
    inputData.map(function (value) {
      Array.from(value).map(function (bit, index) {
        var _indicesMap$get;

        if (indicesMap.has(index) == false) indicesMap.set(index, []);
        indicesMap === null || indicesMap === void 0 ? void 0 : (_indicesMap$get = indicesMap.get(index)) === null || _indicesMap$get === void 0 ? void 0 : _indicesMap$get.push(parseInt(bit));
      });
    });
    indicesMap.forEach(function (value) {
      var zeroCount = value.reduce(function (acc, v, i) {
        return acc += v === 0 ? 1 : 0;
      }, 0);
      var oneCount = value.length - zeroCount;
      gammaRate += zeroCount > oneCount ? "0" : "1";
      epsilonRate += zeroCount < oneCount ? "0" : "1";
    });
    var result = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
    return [gammaRate, epsilonRate, result];
  };

  var _solvePuzzle = solvePuzzle(_data_AdventDataSource__WEBPACK_IMPORTED_MODULE_2__.adventDay3Data),
      _solvePuzzle2 = _slicedToArray(_solvePuzzle, 3),
      gammaRate = _solvePuzzle2[0],
      epsilonRate = _solvePuzzle2[1],
      result = _solvePuzzle2[2];

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
  }, _data_AdventDataSource__WEBPACK_IMPORTED_MODULE_2__.adventDay3Data.join(", ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mb-2"
  }, "Problem Solution:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "color-code-green"
  }, "Given our input, the resulting gamma rate is: ", gammaRate, " while the resulting epsilon rate is: ", epsilonRate, " leaving us with a result of: ", result))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mb-2"
  }, "Code:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    className: "color-code-green small code mb-0"
  }, " const solvePuzzle = (inputData: string[]) => {\n    const indicesMap = new Map<number, number[]>();\n    let gammaRate = \"\";\n    let epsilonRate = \"\";\n    inputData.map((value) => {\n      Array.from(value).map((bit, index) => {\n        if (indicesMap.has(index) == false) indicesMap.set(index, []);\n        indicesMap?.get(index)?.push(parseInt(bit));\n      });\n    });\n    indicesMap.forEach((value) => {\n      const zeroCount = value.reduce(\n        (acc, v, i) => (acc += v === 0 ? 1 : 0),\n        0\n      );\n      const oneCount = value.length - zeroCount;\n      gammaRate += zeroCount > oneCount ? \"0\" : \"1\";\n      epsilonRate += zeroCount < oneCount ? \"0\" : \"1\";\n    });\n\n    const result = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);\n\n    return [gammaRate, epsilonRate, result];\n  };"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mb-2"
  }, "Code Explanation:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "color-code-green small code mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Take in binary code input array as :", "<string>[]", "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Loop over each binary number, turning it into a char array and adding each bit to a map of", " ", "<index, array of bits at that index across all binary numbers>", "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Once we have a map of all bits at each index, we can then determine how many 0s, and from that how many 1s there are at each index."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "For the gammaRate we want 0 or 1 depending on which bit is", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "most"), " prevalent."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "For the epsilonRate we want 0 or 1 depending on which bit is", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "least"), " prevalent."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "This code loops once through the initial array to make the map, then uses reduce on each array based on the length of the binary code. Making this solution in Big O notation:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "N + (N * C) which should reduce down to 2N"))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdventChallengeDay1b);

/***/ })

}]);
//# sourceMappingURL=ClientApp_Components_advent_challenges_AdventChallengeDay3a_tsx.clientbundle.js.map