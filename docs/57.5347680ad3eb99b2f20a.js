(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-ba834eff.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-ba834eff.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _this = undefined;

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var router;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) return [3 /*break*/, 2];
                router = document.querySelector('ion-router');
                if (!router) return [3 /*break*/, 2];
                if (ev != null) {
                    ev.preventDefault();
                }
                return [4 /*yield*/, router.componentOnReady()];
            case 1:
                _a.sent();
                return [2 /*return*/, router.push(url, direction)];
            case 2: return [2 /*return*/, false];
        }
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-spinner.entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-spinner.entry.js ***!
  \********************************************************************/
/*! exports provided: ion_spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_spinner", function() { return Spinner; });
/* harmony import */ var _chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-84f6bf13.js */ "./node_modules/@ionic/core/dist/esm-es5/chunk-84f6bf13.js");
/* harmony import */ var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-1074393c.js */ "./node_modules/@ionic/core/dist/esm-es5/chunk-1074393c.js");
/* harmony import */ var _chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-ba834eff.js */ "./node_modules/@ionic/core/dist/esm-es5/chunk-ba834eff.js");



var spinners = {
    'lines': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            var transform = "rotate(" + (30 * index + (index < 6 ? 180 : -180)) + "deg)";
            var animationDelay = (dur * index / total) - dur + "ms";
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            var transform = "rotate(" + (30 * index + (index < 6 ? 180 : -180)) + "deg)";
            var animationDelay = (dur * index / total) - dur + "ms";
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function (dur, index, total) {
            var animationDelay = (dur * index / total) - dur + "ms";
            var angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': 9 * Math.sin(angle) + "px",
                    'left': 9 * Math.cos(angle) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: function (dur, index, total) {
            var step = index / total;
            var animationDelay = (dur * step) - dur + "ms";
            var angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': 9 * Math.sin(angle) + "px",
                    'left': 9 * Math.cos(angle) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: function () {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: function (_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': 9 - (9 * index) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
var SPINNERS = spinners;
var Spinner = /** @class */ (function () {
    function Spinner(hostRef) {
        Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the spinner's animation will be paused.
         */
        this.paused = false;
    }
    Spinner.prototype.getName = function () {
        var name = this.name || _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner');
        var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        if (name) {
            return name;
        }
        return (mode === 'ios') ? 'lines' : 'crescent';
    };
    Spinner.prototype.hostData = function () {
        var _a;
        var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return {
            class: Object.assign({}, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), (_a = {}, _a[mode] = true, _a["spinner-" + this.getName()] = true, _a['spinner-paused'] = !!this.paused || _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('_testing'), _a))
        };
    };
    Spinner.prototype.__stencil_render = function () {
        var name = this.getName();
        var spinner = SPINNERS[name] || SPINNERS['lines'];
        var duration = (typeof this.duration === 'number' && this.duration > 10 ? this.duration : spinner.dur);
        var svgs = [];
        if (spinner.circles !== undefined) {
            for (var i = 0; i < spinner.circles; i++) {
                svgs.push(buildCircle(spinner, duration, i, spinner.circles));
            }
        }
        else if (spinner.lines !== undefined) {
            for (var i = 0; i < spinner.lines; i++) {
                svgs.push(buildLine(spinner, duration, i, spinner.lines));
            }
        }
        return svgs;
    };
    Spinner.prototype.render = function () { return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render()); };
    Object.defineProperty(Spinner, "style", {
        get: function () { return ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}\@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}"; },
        enumerable: true,
        configurable: true
    });
    return Spinner;
}());
var buildCircle = function (spinner, duration, index, total) {
    var data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + "ms";
    return (Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { viewBox: "0 0 64 64", style: data.style }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", { transform: "translate(32,32)", r: data.r })));
};
var buildLine = function (spinner, duration, index, total) {
    var data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + "ms";
    return (Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { viewBox: "0 0 64 64", style: data.style }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("line", { transform: "translate(32,32)", y1: data.y1, y2: data.y2 })));
};



/***/ })

}]);
//# sourceMappingURL=57.5347680ad3eb99b2f20a.js.map