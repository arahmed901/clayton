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

  var addErrorSrc = function addErrorSrc(e) {
    e.target.src = "https://i.imgur.com/PqOHzY8_d.webp?maxwidth=760&fidelity=grand";
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    variants: animationVariants,
    whileHover: "hover",
    whileTap: "tap",
    positionTransition: true,
    className: "home-listing-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imageURL,
    onError: addErrorSrc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["ListingInfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, homeName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "starting-at-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, "Starting in the $", startingPrice.toLocaleString(), "s"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "listing-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, sqft.toLocaleString(), " sq. ft, \xA0", beds, " beds \xA0", baths, " ", "baths", isMultiSection ? " Multi Section" : ""))));
});

/***/ }),

/***/ "./src/components/HomeListingCard/style.js":
/*!*************************************************!*\
  !*** ./src/components/HomeListingCard/style.js ***!
  \*************************************************/
/*! exports provided: Container, ListingInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingInfo", function() { return ListingInfo; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  padding: .3rem .8rem;\n  h3 {\n    font-weight: 500;\n    font-size: 1.1rem;\n    margin: 0;\n    padding: 0;\n  }\n\n  .starting-at-price {\n    color: #555;\n    font-size: .7rem;\n  }\n\n  .listing-details {\n    font-size: .8rem;\n    font-weight: 500;\n    margin-top: .1rem;\n  }\n  \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 100%;\n  width: 100%;\n  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);\n  border-radius: .2rem;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 15rem;\n    object-fit: cover;\n  }\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Container = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)(_templateObject());
var ListingInfo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());

/***/ })

};
//# sourceMappingURL=main.3ca3be29ed76768980f2.hot-update.js.map