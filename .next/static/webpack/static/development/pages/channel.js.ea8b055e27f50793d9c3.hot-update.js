webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./components/PodcastList.js":
/*!***********************************!*\
  !*** ./components/PodcastList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/home/andres/Projects/podcasts-nextjs/components/PodcastList.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var PodcastList = function PodcastList(props) {
  var podcasts = props.podcasts;
  return __jsx("div", {
    className: "jsx-4221894053",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, podcasts.map(function (podcast) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/podcast?id=".concat(podcast.id),
      key: podcast.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: "jsx-4221894053" + " " + 'podcast',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, __jsx("h3", {
      className: "jsx-4221894053",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, podcast.title), __jsx("div", {
      className: "jsx-4221894053" + " " + 'meta',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, Math.ceil(podcast.duration / 60), " minutes")));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4221894053",
    __self: _this
  }, ".podcast.jsx-4221894053{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-4221894053:hover{color:#000;}.podcast.jsx-4221894053 h3.jsx-4221894053{margin:0;}.podcast.jsx-4221894053 .meta.jsx-4221894053{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJlcy9Qcm9qZWN0cy9wb2RjYXN0cy1uZXh0anMvY29tcG9uZW50cy9Qb2RjYXN0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmtCLEFBR3lCLEFBUUgsQUFHRixBQUdFLFNBRmIsRUFIQSxBQU1tQixHQWRJLGNBZUwsZ0JBQ2xCLG9CQWZhLFdBQ0UsYUFDOEIsd0NBQzVCLGVBQ2pCIiwiZmlsZSI6Ii9ob21lL2FuZHJlcy9Qcm9qZWN0cy9wb2RjYXN0cy1uZXh0anMvY29tcG9uZW50cy9Qb2RjYXN0TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFBvZGNhc3RMaXN0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcG9kY2FzdHMgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtwb2RjYXN0cy5tYXAoKHBvZGNhc3QpID0+IChcbiAgICAgICAgPExpbmsgaHJlZj17YC9wb2RjYXN0P2lkPSR7cG9kY2FzdC5pZH1gfSBrZXk9e3BvZGNhc3QuaWR9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncG9kY2FzdCc+XG4gICAgICAgICAgICA8aDM+e3BvZGNhc3QudGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXRhJz5cbiAgICAgICAgICAgICAge01hdGguY2VpbChwb2RjYXN0LmR1cmF0aW9uIC8gNjApfSBtaW51dGVzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wb2RjYXN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucG9kY2FzdDpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLnBvZGNhc3QgaDMge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAucG9kY2FzdCAubWV0YSB7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9kY2FzdExpc3Q7XG4iXX0= */\n/*@ sourceURL=/home/andres/Projects/podcasts-nextjs/components/PodcastList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (PodcastList);

/***/ })

})
//# sourceMappingURL=channel.js.ea8b055e27f50793d9c3.hot-update.js.map