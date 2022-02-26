"use strict";
(self["webpackChunkrm_react_dashboard_app"] = self["webpackChunkrm_react_dashboard_app"] || []).push([["ClientApp_Components_advent_challenges_AdventChallengeDay3b_tsx"],{

/***/ "./ClientApp/Components/advent/challenges/AdventChallengeDay3b.tsx":
/*!*************************************************************************!*\
  !*** ./ClientApp/Components/advent/challenges/AdventChallengeDay3b.tsx ***!
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





function AdventChallengeDay3b() {
  var determineCommonBit = function determineCommonBit(inputData, mostCommon) {
    var resultBinary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    console.log(inputData, mostCommon, resultBinary);

    if (inputData.length == 1) {
      resultBinary += inputData[0];
      return resultBinary;
    }

    var zeroMap = [];
    var oneMap = [];
    inputData.map(function (value, index) {
      value.startsWith("0") ? zeroMap.push(value) : oneMap.push(value);
    });

    if (mostCommon === true && oneMap.length >= zeroMap.length || mostCommon === false && oneMap.length < zeroMap.length) {
      resultBinary += "1";
      return determineCommonBit(oneMap.map(function (value) {
        return value.substring(1);
      }), mostCommon, resultBinary);
    }

    resultBinary += "0";
    return determineCommonBit(zeroMap.map(function (value) {
      return value.substring(1);
    }), mostCommon, resultBinary);
  };

  var solvePuzzle = function solvePuzzle(inputData) {
    var oxygenGeneratorRating = determineCommonBit(inputData, true);
    var co2ScrubberRating = determineCommonBit(inputData, false);
    var result = parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);
    return [parseInt(oxygenGeneratorRating, 2), parseInt(co2ScrubberRating, 2), result];
  };

  var _solvePuzzle = solvePuzzle(_data_AdventDataSource__WEBPACK_IMPORTED_MODULE_2__.adventDay3Data),
      _solvePuzzle2 = _slicedToArray(_solvePuzzle, 3),
      oxygenGeneratorRating = _solvePuzzle2[0],
      co2ScrubberRating = _solvePuzzle2[1],
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
  }, " ", "The Oxygen Generator Rating is: ", oxygenGeneratorRating, ", while the C02 Scrubber Rating is: ", co2ScrubberRating, ", giving us the result of", " ", result, "."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mb-2"
  }, "Code:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    className: "color-code-green small code mb-0"
  }, "const solvePuzzle = (inputData: string[]) => {\n    const oxygenGeneratorRating = determineCommonBit(inputData, true);\n    const co2ScrubberRating = determineCommonBit(inputData, false);\n    const result =\n      parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);\n    return [\n      parseInt(oxygenGeneratorRating, 2),\n      parseInt(co2ScrubberRating, 2),\n      result,\n    ];\n  };\n          \n const determineCommonBit = (\n    inputData: string[],\n    mostCommon: boolean,\n    resultBinary: string = \"\"\n  ): string => {\n    console.log(inputData, mostCommon, resultBinary);\n\n    if (inputData.length == 1) {\n      resultBinary += inputData[0];\n      return resultBinary;\n    }\n\n    const zeroMap: string[] = [];\n    const oneMap: string[] = [];\n    inputData.map((value, index) => {\n      value.startsWith(\"0\") ? zeroMap.push(value) : oneMap.push(value);\n    });\n\n    if (\n      (mostCommon === true && oneMap.length >= zeroMap.length) ||\n      (mostCommon === false && oneMap.length < zeroMap.length)\n    ) {\n      resultBinary += \"1\";\n      return determineCommonBit(\n        oneMap.map((value) => value.substring(1)),\n        mostCommon,\n        resultBinary\n      );\n    }\n\n    resultBinary += \"0\";\n    return determineCommonBit(\n      zeroMap.map((value) => value.substring(1)),\n      mostCommon,\n      resultBinary\n    );\n  };"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mb-2"
  }, "Code Explanation:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "color-code-green small mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Take in binary code input array as :", "<string>[]", "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Use my recursive function to get the Oxygen Generator Rating and the CO2 Scrubber Rating."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Loop over each binary number, separating the array into a 0 array and 1 array based on the leading number."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Build the result binary bit by bit as I remove the leading bit of each binary and then pass an array of the most common values into my recursive function to continually cut out the least/most common bits until we get to 1 binary number."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Parse the binary values for Oxygen Generator Rating and CO2 Scrubber Rating into numbers then multiply them to get the answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "This code loops over the array initially twice, one for oxygen and again for co2. It then breaks the array into roughly half based on which bit is most/least common. Then it does it again, looking at the half it broke off. That leads me to believe that this function is ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "2Nlog(N) according to Big O notation."))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdventChallengeDay3b);

/***/ })

}]);
//# sourceMappingURL=ClientApp_Components_advent_challenges_AdventChallengeDay3b_tsx.clientbundle.js.map