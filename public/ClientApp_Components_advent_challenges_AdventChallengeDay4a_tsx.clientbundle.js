"use strict";
(self["webpackChunkrm_react_dashboard_app"] = self["webpackChunkrm_react_dashboard_app"] || []).push([["ClientApp_Components_advent_challenges_AdventChallengeDay4a_tsx"],{

/***/ "./ClientApp/Components/advent/challenges/AdventChallengeDay4a.tsx":
/*!*************************************************************************!*\
  !*** ./ClientApp/Components/advent/challenges/AdventChallengeDay4a.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Advent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Advent.scss */ "./ClientApp/Components/advent/Advent.scss");
/* harmony import */ var _data_AdventDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/AdventDataSource */ "./ClientApp/Components/advent/data/AdventDataSource.ts");
/* harmony import */ var _components_AdventChallengeBingoBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AdventChallengeBingoBoard */ "./ClientApp/Components/advent/challenges/components/AdventChallengeBingoBoard.tsx");





function AdventChallengeDay4a() {
  var solvePuzzle = function solvePuzzle(inputData) {
    return null;
  };

  var result = solvePuzzle(_data_AdventDataSource__WEBPACK_IMPORTED_MODULE_2__.adventDay4Data);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex-fill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mb-2"
  }, "Problem Input:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-3 small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Randomly Selected Numbers:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "small data-box"
  }, _data_AdventDataSource__WEBPACK_IMPORTED_MODULE_2__.adventDay4Data.randomSelectedNumbers.join(", ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Bingo Boards:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "small data-box data-box-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, _data_AdventDataSource__WEBPACK_IMPORTED_MODULE_2__.adventDay4Data.bingoBoards.map(function (value, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AdventChallengeBingoBoard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      bingo: value
    });
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mb-2"
  }, "Problem Solution:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "color-code-green"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mb-2"
  }, "Code:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    className: "color-code-green small code mb-0"
  }, ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mb-2"
  }, "Code Explanation:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "color-code-green small mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Take in binary code input array as :", "<string>[]", "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Loop over each binary number, turning it into a char array and adding each bit to a map of", " ", "<index, array of bits at that index across all binary numbers>", "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Once we have a map of all bits at each index, we can then determine how many 0s, and from that how many 1s there are at each index."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "For the gammaRate we want 0 or 1 depending on which bit is", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "most"), " prevalent."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "For the epsilonRate we want 0 or 1 depending on which bit is", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "least"), " prevalent."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "This code loops once through the initial array to make the map, then uses reduce on each array based on the length of the binary code. Making this solution in Big O notation:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "N + (N * C) which should reduce down to 2N"))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdventChallengeDay4a);

/***/ }),

/***/ "./ClientApp/Components/advent/challenges/components/AdventChallengeBingoBoard.tsx":
/*!*****************************************************************************************!*\
  !*** ./ClientApp/Components/advent/challenges/components/AdventChallengeBingoBoard.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function AdventChallengeBingoBoard(_ref) {
  var bingo = _ref.bingo;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-4 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column p-3 bingo-board"
  }, bingo.map(function (y, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex align-items-center"
    }, y.map(function (x) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "flex-fill"
      }, x);
    }));
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdventChallengeBingoBoard);

/***/ })

}]);
//# sourceMappingURL=ClientApp_Components_advent_challenges_AdventChallengeDay4a_tsx.clientbundle.js.map