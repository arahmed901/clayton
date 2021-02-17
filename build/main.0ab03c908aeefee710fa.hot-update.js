exports.id = "main";
exports.modules = {

/***/ "./src/assets/image-unavailablepng.png":
/*!*********************************************!*\
  !*** ./src/assets/image-unavailablepng.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image-unavailablepng.300f4a6f.png";

/***/ }),

/***/ "./src/components/HomeListingCard/HomeListingCard.js":
/*!***********************************************************!*\
  !*** ./src/components/HomeListingCard/HomeListingCard.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/HomeListingCard/style.js");
/* harmony import */ var _assets_image_unavailablepng_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image-unavailablepng.png */ "./src/assets/image-unavailablepng.png");
/* harmony import */ var _assets_image_unavailablepng_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_unavailablepng_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/lambda_school_loaner_264/Documents/clayton/src/components/HomeListingCard/HomeListingCard.js";




var animationVariants = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: {
        stiffness: 1000,
        velocity: -100
      }
    }
  },
  hidden: {
    scale: 0.8,
    opacity: 0,
    transition: {
      scale: {
        stiffness: 1000
      }
    }
  },
  hover: {
    scale: 1.05
  },
  tap: {
    scale: 0.98
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$listingDetails = _ref.listingDetails,
      imageURL = _ref$listingDetails.imageURL,
      homeName = _ref$listingDetails.homeName,
      startingPrice = _ref$listingDetails.startingPrice,
      beds = _ref$listingDetails.beds,
      baths = _ref$listingDetails.baths,
      sqft = _ref$listingDetails.sqft,
      isMultiSection = _ref$listingDetails.isMultiSection;

  var addErrorSrc = function addErrorSrc(ev) {
    ev.target.src = _assets_image_unavailablepng_png__WEBPACK_IMPORTED_MODULE_3___default.a;
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    variants: animationVariants,
    whileHover: "hover",
    whileTap: "tap",
    positionTransition: true,
    className: "home-listing-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imageURL,
    onError: addErrorSrc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["ListingInfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, homeName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "starting-at-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, "Starting in the $", startingPrice.toLocaleString(), "s"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "listing-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, sqft.toLocaleString(), " sq. ft, \xA0", beds, " beds \xA0", baths, " ", "baths", isMultiSection ? " Multi Section" : ""))));
});

/***/ })

};
//# sourceMappingURL=main.0ab03c908aeefee710fa.hot-update.js.map