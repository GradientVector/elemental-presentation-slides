(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@deckdeckgo/core/dist/esm-es5/chunk-9d4bfa8f.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@deckdeckgo/core/dist/esm-es5/chunk-9d4bfa8f.js ***!
  \**********************************************************************/
/*! exports provided: D, a, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return DeckdeckgoDeckUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeckDeckGoUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeckdeckgoSlideUtils; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var DeckDeckGoUtils = /** @class */ (function () {
    function DeckDeckGoUtils() {
    }
    DeckDeckGoUtils.unifyEvent = function (e) {
        return e.changedTouches ? e.changedTouches[0] : e;
    };
    DeckDeckGoUtils.debounce = function (func, timeout) {
        var timer;
        return function ($args) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(func, timeout > 0 ? timeout : 300, $args);
        };
    };
    DeckDeckGoUtils.isMobile = function () {
        if (!window || !navigator) {
            return false;
        }
        var a = navigator.userAgent || navigator.vendor || window.opera;
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)));
    };
    DeckDeckGoUtils.isIOS = function () {
        if (!window || !navigator) {
            return false;
        }
        var a = navigator.userAgent || navigator.vendor || window.opera;
        return /iPad|iPhone|iPod/i.test(a);
    };
    DeckDeckGoUtils.isFullscreen = function () {
        if (!window || !screen) {
            return false;
        }
        return window.innerHeight == screen.height;
    };
    return DeckDeckGoUtils;
}());
var DeckdeckgoDeckUtils = /** @class */ (function () {
    function DeckdeckgoDeckUtils() {
    }
    DeckdeckgoDeckUtils.lazyLoadImages = function (el) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var promises;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    promises = [];
                                    promises.push(this.lazyLoadLazyImgTags(el));
                                    promises.push(this.lazyLoadLazyImgComponents(el));
                                    return [4 /*yield*/, Promise.all(promises)];
                                case 1:
                                    _a.sent();
                                    resolve();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    ;
    DeckdeckgoDeckUtils.lazyLoadLazyImgTags = function (el) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var images;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    images = this.getAllImages(el, 'img');
                                    return [4 /*yield*/, this.lazyLoadSelectedImages(images)];
                                case 1:
                                    _a.sent();
                                    resolve();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    ;
    DeckdeckgoDeckUtils.lazyLoadLazyImgComponents = function (el) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var images;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    images = this.getAllImages(el, 'deckgo-lazy-img');
                                    return [4 /*yield*/, this.lazyLoadSelectedLazyImagesComponent(images)];
                                case 1:
                                    _a.sent();
                                    resolve();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    ;
    DeckdeckgoDeckUtils.lazyLoadSelectedImages = function (images) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        if (!images) {
                            resolve();
                            return;
                        }
                        images.forEach(function (image) {
                            if (image.getAttribute('data-src')) {
                                image.setAttribute('src', image.getAttribute('data-src'));
                                image.removeAttribute('data-src');
                                // If image is part of a reveal group, let it be revealed with the reveal feature
                                if (!image.classList.contains('deckgo-reveal')) {
                                    image.style.setProperty('visibility', 'inherit');
                                }
                            }
                            // Furthermore to lazy loading, we set pointer-events to none. Doing so we prevent images of being dragged.
                            image.style.setProperty('pointer-events', 'none');
                        });
                        resolve();
                    })];
            });
        });
    };
    ;
    DeckdeckgoDeckUtils.lazyLoadSelectedLazyImagesComponent = function (components) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        if (!components) {
                            resolve();
                            return;
                        }
                        components.forEach(function (component) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, component.lazyLoad()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        resolve();
                    })];
            });
        });
    };
    ;
    DeckdeckgoDeckUtils.hideLazyLoadImages = function (el) {
        return new Promise(function (resolve) {
            var images = DeckdeckgoDeckUtils.getAllImages(el, 'img');
            if (!images) {
                resolve();
            }
            else {
                images = images.filter(function (image) { return image.getAttribute('data-src'); });
                images.forEach(function (image) {
                    image.style.setProperty('visibility', 'hidden');
                });
                resolve();
            }
        });
    };
    DeckdeckgoDeckUtils.getAllImages = function (el, tag) {
        var allSlotedImages = el.querySelectorAll('[slot] ' + tag);
        var allShadowImages = el.shadowRoot.querySelectorAll(tag);
        return Array.from(allSlotedImages).concat(Array.from(allShadowImages));
    };
    return DeckdeckgoDeckUtils;
}());
var DeckdeckgoExtraUtils = /** @class */ (function () {
    function DeckdeckgoExtraUtils() {
    }
    DeckdeckgoExtraUtils.lazyLoadContent = function (el, tag) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var promises, elements;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = [];
                        elements = this.getAllElements(el, tag);
                        if (!(elements && elements.length > 0)) return [3 /*break*/, 2];
                        elements.forEach(function (element) {
                            promises.push(element.lazyLoadContent());
                        });
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        resolve();
                        _a.label = 2;
                    case 2:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoExtraUtils.getAllElements = function (el, tag) {
        var allSlottedElements = el.querySelectorAll(tag);
        var allShadowsElements = el.shadowRoot.querySelectorAll(tag);
        return Array.from(allSlottedElements).concat(Array.from(allShadowsElements));
    };
    return DeckdeckgoExtraUtils;
}());
var DeckdeckgoSlideUtils = /** @class */ (function () {
    function DeckdeckgoSlideUtils() {
    }
    DeckdeckgoSlideUtils.hideRevealElements = function (el, revealShowFirst) {
        return new Promise(function (resolve) {
            // No keyboard on mobile device to reveal elements
            if (DeckDeckGoUtils.isMobile()) {
                resolve();
                return;
            }
            var elements = el.querySelectorAll(revealShowFirst ? '[slot] li:not(:first-child), [slot] > p:not(:first-child), [slot] > span:not(:first-child), [slot] > img:not(:first-child), [slot] > deckgo-lazy-img:not(:first-child)' : '[slot] li, [slot] > p, [slot] > span, [slot] > img, [slot] > deckgo-lazy-img');
            if (!elements) {
                resolve();
            }
            else {
                Array.from(elements).forEach(function (element) {
                    element.style.setProperty('visibility', 'hidden');
                    element.style.setProperty('transform', 'var(--slide-reveal-transform)');
                    element.style.setProperty('opacity', '0');
                    element.classList.add('deckgo-reveal');
                    element.style.setProperty('transition', 'all var(--slide-reveal-duration) cubic-bezier(0.23, 1, 0.320, 1)');
                });
            }
        });
    };
    DeckdeckgoSlideUtils.showRevealElement = function (el) {
        return new Promise(function (resolve) {
            var elements = el.querySelectorAll('[slot] li, [slot] > p, [slot] > span, [slot] > img, [slot] > deckgo-lazy-img');
            var couldSwipe = true;
            if (elements) {
                var nextElement = Array.from(elements).find(function (element) {
                    return element.style.getPropertyValue('visibility') === 'hidden';
                });
                if (nextElement) {
                    nextElement.style.setProperty('visibility', 'initial');
                    nextElement.style.setProperty('opacity', '1');
                    nextElement.style.setProperty('transform', 'none');
                    couldSwipe = false;
                }
            }
            resolve(couldSwipe);
        });
    };
    DeckdeckgoSlideUtils.hideRevealElement = function (el) {
        return new Promise(function (resolve) {
            var elements = el.querySelectorAll('[slot] li, [slot] > p, [slot] > span, [slot] > img, [slot] > deckgo-lazy-img');
            var couldSwipe = true;
            if (elements) {
                var nextElement = Array.from(elements).reverse().find(function (element) {
                    var property = element.style.getPropertyValue('visibility');
                    return !property || property === 'initial';
                });
                if (nextElement) {
                    nextElement.style.setProperty('visibility', 'hidden');
                    nextElement.style.setProperty('transform', 'var(--slide-reveal-transform)');
                    nextElement.style.setProperty('opacity', '0');
                    couldSwipe = false;
                }
            }
            resolve(couldSwipe);
        });
    };
    DeckdeckgoSlideUtils.beforeSwipe = function (el, enter, reveal) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var couldSwipe, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!reveal) return [3 /*break*/, 5];
                        if (!enter) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.showRevealElement(el)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.hideRevealElement(el)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        couldSwipe = _a;
                        resolve(couldSwipe);
                        return [3 /*break*/, 6];
                    case 5:
                        resolve(true);
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoSlideUtils.afterSwipe = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    ;
    DeckdeckgoSlideUtils.lazyLoadContent = function (el) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var promises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = [];
                        promises.push(DeckdeckgoDeckUtils.lazyLoadImages(el));
                        promises.push(DeckdeckgoExtraUtils.lazyLoadContent(el, 'deckgo-gif'));
                        promises.push(DeckdeckgoExtraUtils.lazyLoadContent(el, 'deckgo-youtube'));
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return DeckdeckgoSlideUtils;
}());



/***/ })

}]);
//# sourceMappingURL=4.2996beda2cad326cb8ff.js.map