exports.id = "main";
exports.modules = {

/***/ "./src/components/HomeListings/HomeListings.js":
/*!*****************************************************!*\
  !*** ./src/components/HomeListings/HomeListings.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/HomeListings/style.js");
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common */ "./src/components/Common/index.js");
/* harmony import */ var _HomeListingCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HomeListingCard */ "./src/components/HomeListingCard/index.js");
/* harmony import */ var _data_listings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/listings */ "./src/data/listings.js");

var _jsxFileName = "/Users/lambda_school_loaner_264/Documents/pubweb.codechallenge/src/components/HomeListings/HomeListings.js";





var sortValues = {
  ASCENDING: {
    value: "ASCENDING",
    display: "Price: Low to high"
  },
  DESCENDING: {
    value: "DESCENDING",
    display: "Price: High to low"
  }
};
var loadListingInterval = 3;
var animationVariants = {
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  },
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(window.innerWidth),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(sortValues.ASCENDING),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      sort = _useState4[0],
      updateSort = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      loadCount = _useState6[0],
      updateLoadCount = _useState6[1];

  var breakpoint = 500;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var handleResizeWindow = function handleResizeWindow() {
      return setWidth(window.innerWidth);
    }; // subscribe to window resize event "onComponentDidMount"


    window.addEventListener("resize", handleResizeWindow);
    return function () {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  var sortedListings = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var sorted = _data_listings__WEBPACK_IMPORTED_MODULE_5__["default"].sort(function (a, b) {
      if (sort.value === sortValues.ASCENDING.value) {
        return a.startingPrice > b.startingPrice ? 1 : -1;
      } else {
        return a.startingPrice < b.startingPrice ? 1 : -1;
      }
    });
    return sorted;
  }, [sort, _data_listings__WEBPACK_IMPORTED_MODULE_5__["default"]]);
  var listingsToDisplay = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var totalListingsCount = _data_listings__WEBPACK_IMPORTED_MODULE_5__["default"].length;
    var initialLoadCount = window.innerWidth > breakpoint ? 9 : 3;
    var listingsRequested = initialLoadCount + loadCount * loadListingInterval;
    return sortedListings.slice(0, listingsRequested > totalListingsCount ? totalListingsCount : listingsRequested);
  }, [sort, loadCount, sortedListings, _data_listings__WEBPACK_IMPORTED_MODULE_5__["default"]]);

  var loadMoreListings = function loadMoreListings() {
    updateLoadCount(function (currentLoadCount) {
      return currentLoadCount + 1;
    });
  };

  var onSortToggle = function onSortToggle(newVal) {
    updateSort(sortValues[newVal]);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["InfoBar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["Counter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, _data_listings__WEBPACK_IMPORTED_MODULE_5__["default"].length, " homes available"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["SortContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "sort-toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, "Sort By"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    onChange: onSortToggle,
    options: Object.values(sortValues),
    value: sort.value,
    id: "sort-toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["CardsContainer"], {
    variants: animationVariants,
    initial: "hidden",
    animate: "visible",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, listingsToDisplay.map(function (listing, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HomeListingCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      listingDetails: listing,
      key: "".concat(listing.homeName, "-").concat(listing.sqft, "-").concat(listing.startingPrice, "-container"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      }
    });
  })), listingsToDisplay.length < _data_listings__WEBPACK_IMPORTED_MODULE_5__["default"].length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: loadMoreListings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, "Load More"));
});

/***/ })

};
//# sourceMappingURL=main.2026ca83784a1aad250e.hot-update.js.map