(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/@deckdeckgo/core/dist/esm-es5/deckgo-deck_13.entry.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/core/dist/esm-es5/deckgo-deck_13.entry.js ***!
  \****************************************************************************/
/*! exports provided: deckgo_deck, deckgo_gif, deckgo_pager, deckgo_slide_author, deckgo_slide_code, deckgo_slide_content, deckgo_slide_countdown, deckgo_slide_gif, deckgo_slide_split, deckgo_slide_title, deckgo_slide_youtube, deckgo_social, deckgo_youtube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_deck", function() { return DeckdeckgoDeck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_gif", function() { return DeckdeckgoGif; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_pager", function() { return DeckdeckgoPager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_slide_author", function() { return DeckdeckgoSlideAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_slide_code", function() { return DeckdeckgoSlideCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_slide_content", function() { return DeckdeckgoSlideContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_slide_countdown", function() { return DeckdeckgoSlideCountdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_slide_gif", function() { return DeckdeckgoSlideGif; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_slide_split", function() { return DeckdeckgoSlideSplit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_slide_title", function() { return DeckdeckgoSlideTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_slide_youtube", function() { return DeckdeckgoSlideYoutube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_social", function() { return DeckdeckgoSocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_youtube", function() { return DeckdeckgoYoutube; });
/* harmony import */ var _chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-e073be0a.js */ "./node_modules/@deckdeckgo/core/dist/esm-es5/chunk-e073be0a.js");
/* harmony import */ var _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-9d4bfa8f.js */ "./node_modules/@deckdeckgo/core/dist/esm-es5/chunk-9d4bfa8f.js");
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


var DeckdeckgoDeckBackgroundUtils = /** @class */ (function () {
    function DeckdeckgoDeckBackgroundUtils() {
    }
    // Lazy load images from slot=background
    DeckdeckgoDeckBackgroundUtils.lazyBackgroundImages = function (el) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var promises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = [];
                        promises.push(this.lazyBackgroundImgTags(el));
                        promises.push(this.lazyBackgroundImgComponents(el));
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeckBackgroundUtils.lazyBackgroundImgTags = function (el) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var allSlottedImages, allShadowImages, images;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allSlottedImages = el.querySelectorAll('img[slot=\'background\']');
                        allShadowImages = el.querySelectorAll('[slot=\'background\'] img');
                        images = Array.from(allSlottedImages).concat(Array.from(allShadowImages));
                        return [4 /*yield*/, _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["D"].lazyLoadSelectedImages(images)];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeckBackgroundUtils.lazyBackgroundImgComponents = function (el) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var allShadowImagesComponents, images;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allShadowImagesComponents = el.querySelectorAll(':scope > [slot=\'background\'] deckgo-lazy-img');
                        images = Array.from(allShadowImagesComponents);
                        return [4 /*yield*/, _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["D"].lazyLoadSelectedLazyImagesComponent(images)];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeckBackgroundUtils.cloneAndLoadBackground = function (el, slides, cloneBackground) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var background;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        background = el.querySelector(':scope > [slot=\'background\']');
                        if (!background) {
                            resolve();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.lazyBackgroundImages(el)];
                    case 1:
                        _a.sent();
                        if (!cloneBackground) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.cloneSlots(el, slides, 'background')];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.showHideBackgroundSlot(el, cloneBackground)];
                    case 4:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeckBackgroundUtils.showHideBackgroundSlot = function (el, cloneBackground) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var slider;
            return __generator(this, function (_a) {
                slider = el.shadowRoot.host;
                if (!slider) {
                    resolve();
                    return [2 /*return*/];
                }
                if (!cloneBackground) {
                    slider.style.removeProperty('--background-display');
                }
                resolve();
                return [2 /*return*/];
            });
        }); });
    };
    DeckdeckgoDeckBackgroundUtils.cloneSlots = function (el, slides, slotName) {
        return new Promise(function (resolve) {
            if (!slides || slides.length <= 0) {
                resolve();
                return;
            }
            var slotElement = el.querySelector(':scope > [slot=\'' + slotName + '\']');
            if (slotElement) {
                slides.forEach(function (slide) {
                    var custom = slide.hasAttribute('custom-' + slotName);
                    if (!custom) {
                        var currentSlotElement = slide.querySelector(':scope > [slot=\'' + slotName + '\']');
                        if (currentSlotElement) {
                            slide.removeChild(currentSlotElement);
                        }
                        slide.appendChild(slotElement.cloneNode(true));
                    }
                });
            }
            resolve();
        });
    };
    DeckdeckgoDeckBackgroundUtils.removeSlots = function (slides, slotName) {
        return new Promise(function (resolve) {
            if (!slides || slides.length <= 0) {
                resolve();
                return;
            }
            slides.forEach(function (slide) {
                var custom = slide.hasAttribute('custom-' + slotName);
                if (!custom) {
                    var currentSlotElement = slide.querySelector(':scope > [slot=\'' + slotName + '\']');
                    if (currentSlotElement) {
                        slide.removeChild(currentSlotElement);
                    }
                }
            });
            resolve();
        });
    };
    return DeckdeckgoDeckBackgroundUtils;
}());
var DeckdeckgoDeck = /** @class */ (function () {
    function DeckdeckgoDeck(hostRef) {
        var _this = this;
        Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.keyboard = true;
        this.embedded = false;
        this.cloneBackground = true;
        this.rtl = false;
        this.startX = null;
        this.deckTranslateX = 0;
        this.autoSwipeRatio = 10;
        this.block = false;
        this.activeIndex = 0;
        this.length = 0;
        this.fullscreen = false;
        this.cursorHidden = false;
        this.keyboardAssist = function ($event) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ($event.defaultPrevented) {
                            return [2 /*return*/];
                        }
                        if (!($event.key === 'ArrowLeft')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.slideNextPrev(false, true)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!($event.key === 'ArrowRight')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.slideNextPrev(true, true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.slidesDidLoad = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "slidesDidLoad", 7);
        this.slideNextDidChange = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "slideNextDidChange", 7);
        this.slidePrevDidChange = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "slidePrevDidChange", 7);
        this.slideToChange = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "slideToChange", 7);
        this.slideDrag = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "slideDrag", 7);
        this.slideWillChange = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "slideWillChange", 7);
        this.mouseInactivity = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "mouseInactivity", 7);
    }
    DeckdeckgoDeck.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initRtl()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initSlideSize()];
                    case 1:
                        _a.sent();
                        this.initWindowResize();
                        this.initKeyboardAssist();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.initRtl = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (document && document.documentElement) {
                var htmlDir = document.documentElement.getAttribute('dir');
                _this.rtl = htmlDir && htmlDir === 'rtl';
            }
            resolve();
        });
    };
    DeckdeckgoDeck.prototype.initWindowResize = function () {
        var _this = this;
        if (window) {
            window.addEventListener('resize', _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["a"].debounce(function () { return __awaiter(_this, void 0, void 0, function () {
                var toggleFullscreen;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.initSlideSize()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.slideTo(this.activeIndex)];
                        case 2:
                            _a.sent();
                            toggleFullscreen = _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["a"].isFullscreen();
                            return [4 /*yield*/, this.hideOrClearMouseCursorTimer(toggleFullscreen)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.showHideActionsSlot(toggleFullscreen)];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, 100));
        }
    };
    DeckdeckgoDeck.prototype.initSlideSize = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var slider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slider = this.el.shadowRoot.querySelector('div.deckgo-deck');
                        if (!slider) {
                            resolve();
                            return [2 /*return*/];
                        }
                        if (!!this.embedded) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initSlideSizeStandard(slider)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.initSlideSizeEmbedded(slider)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeck.prototype.initSlideSizeStandard = function (slider) {
        return new Promise(function (resolve) {
            if (!window || !screen) {
                resolve();
                return;
            }
            if (_chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["a"].isIOS()) {
                slider.style.setProperty('--slide-width', (screen.width > window.innerWidth ? screen.width : window.innerWidth) + "px");
            }
            else {
                slider.style.setProperty('--slide-width', window.innerWidth + "px");
            }
            resolve();
        });
    };
    DeckdeckgoDeck.prototype.initSlideSizeEmbedded = function (slider) {
        return new Promise(function (resolve) {
            if (!slider.offsetParent) {
                resolve();
                return;
            }
            if (slider.offsetParent) {
                if (slider.offsetParent.clientWidth > 0) {
                    slider.style.setProperty('--slide-width', '' + slider.offsetParent.clientWidth + 'px');
                }
                if (slider.offsetParent.clientHeight > 0) {
                    slider.style.setProperty('--slide-height', '' + slider.offsetParent.clientHeight + 'px');
                }
            }
            resolve();
        });
    };
    DeckdeckgoDeck.prototype.initKeyboardAssist = function () {
        if (document && this.keyboard) {
            document.addEventListener('keydown', this.keyboardAssist, { passive: true });
        }
    };
    DeckdeckgoDeck.prototype.toggleKeyboardAssist = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!document) {
                    return [2 /*return*/];
                }
                if (!this.keyboard) {
                    return [2 /*return*/];
                }
                if (state) {
                    document.addEventListener('keydown', this.keyboardAssist, { passive: true });
                }
                else {
                    // @ts-ignore
                    document.removeEventListener('keydown', this.keyboardAssist, { passive: true });
                }
                return [2 /*return*/];
            });
        });
    };
    /* BEGIN: Handle swipe */
    DeckdeckgoDeck.prototype.mousedown = function ($event) {
        this.start($event);
    };
    DeckdeckgoDeck.prototype.touchstart = function ($event) {
        this.start($event);
    };
    DeckdeckgoDeck.prototype.mouseup = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stop($event)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.touchend = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stop($event)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.mousemove = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.move($event)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.touchmove = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.move($event)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.dblclick = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.startX = null;
                return [2 /*return*/];
            });
        });
    };
    DeckdeckgoDeck.prototype.contextMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.startX = null;
                return [2 /*return*/];
            });
        });
    };
    DeckdeckgoDeck.prototype.scrolling = function ($event) {
        this.block = $event ? $event.detail : false;
    };
    DeckdeckgoDeck.prototype.keypress = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clearMouseCursorTimer(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.start = function (e) {
        this.startX = _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["a"].unifyEvent(e).clientX;
    };
    DeckdeckgoDeck.prototype.move = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var deltaX, transformX;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clearMouseCursorTimer(true)];
                    case 1:
                        _a.sent();
                        if (this.block) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getDeltaX(e)];
                    case 2:
                        deltaX = _a.sent();
                        if (!deltaX) {
                            return [2 /*return*/];
                        }
                        transformX = deltaX.swipeLeft ? this.deckTranslateX - deltaX.deltaX : this.deckTranslateX + deltaX.deltaX;
                        deltaX.slider.style.setProperty('--transformX', transformX + 'px');
                        deltaX.slider.style.setProperty('--transformXDuration', '0ms');
                        this.slideDrag.emit(transformX);
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.stop = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var deltaX;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.block) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getDeltaX(e)];
                    case 1:
                        deltaX = _a.sent();
                        return [4 /*yield*/, this.swipeSlide(deltaX)];
                    case 2:
                        _a.sent();
                        this.startX = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.swipeSlide = function (deltaX, emitEvent) {
        var _this = this;
        if (emitEvent === void 0) { emitEvent = true; }
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var couldSwipeLeft, couldSwipeRight, sliderWidth;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!deltaX || !window) {
                            resolve();
                            return [2 /*return*/];
                        }
                        couldSwipeLeft = deltaX.swipeLeft && this.activeIndex < this.length - 1;
                        couldSwipeRight = !deltaX.swipeLeft && this.activeIndex > 0;
                        if (this.rtl) {
                            couldSwipeLeft = deltaX.swipeLeft && this.activeIndex > 0;
                            couldSwipeRight = !deltaX.swipeLeft && this.activeIndex < this.length - 1;
                        }
                        if (!(couldSwipeLeft || couldSwipeRight)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getSliderWidth()];
                    case 1:
                        sliderWidth = _a.sent();
                        if (deltaX.deltaX > (sliderWidth / this.autoSwipeRatio)) {
                            this.deckTranslateX = deltaX.swipeLeft ? this.deckTranslateX - sliderWidth : this.deckTranslateX + sliderWidth;
                            if (this.isNextChange(deltaX.swipeLeft)) {
                                this.activeIndex++;
                                if (emitEvent) {
                                    this.slideNextDidChange.emit(this.activeIndex);
                                }
                            }
                            else {
                                this.activeIndex--;
                                if (emitEvent) {
                                    this.slidePrevDidChange.emit(this.activeIndex);
                                }
                            }
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.doSwipeSlide(deltaX.slider)];
                    case 3:
                        _a.sent();
                        // We want to lazy load the next slide images
                        return [4 /*yield*/, this.lazyLoadContent(this.activeIndex + 1)];
                    case 4:
                        // We want to lazy load the next slide images
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeck.prototype.getSliderWidth = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.embedded) {
                resolve(window.innerWidth);
                return;
            }
            var slider = _this.el.shadowRoot.querySelector('div.deckgo-deck');
            if (!slider || !slider.offsetParent || slider.offsetParent.clientWidth <= 0) {
                resolve(window.innerWidth);
                return;
            }
            resolve(slider.offsetParent.clientWidth);
        });
    };
    DeckdeckgoDeck.prototype.isNextChange = function (swipeLeft) {
        return (swipeLeft && !this.rtl) || (!swipeLeft && this.rtl);
    };
    DeckdeckgoDeck.prototype.doSwipeSlide = function (slider, speed) {
        var _this = this;
        return new Promise(function (resolve) {
            slider.style.setProperty('--transformX', _this.deckTranslateX + 'px');
            slider.style.setProperty('--transformXDuration', '' + (!isNaN(speed) ? speed : 300) + 'ms');
            _this.slideWillChange.emit(_this.deckTranslateX);
            _this.startX = null;
            resolve();
        });
    };
    DeckdeckgoDeck.prototype.getDeltaX = function (e) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.startX) {
                resolve(null);
                return;
            }
            var slider = _this.el.shadowRoot.querySelector('div.deckgo-deck');
            if (!slider) {
                resolve(null);
                return;
            }
            var currentX = _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["a"].unifyEvent(e).clientX;
            if (_this.startX === currentX) {
                resolve(null);
                return;
            }
            var swipeLeft = _this.startX > currentX;
            resolve({
                slider: slider,
                swipeLeft: swipeLeft,
                deltaX: swipeLeft ? (_this.startX - currentX) : (currentX - _this.startX)
            });
        });
    };
    /* END: Handle swipe */
    /* BEGIN: Slide length and active index */
    DeckdeckgoDeck.prototype.slideDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateLength()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afterSlidesDidLoad()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.updateLength = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filteredSlides;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDefinedFilteredSlides()];
                    case 1:
                        filteredSlides = _a.sent();
                        this.length = filteredSlides ? filteredSlides.length : 0;
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.afterSlidesDidLoad = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var slidesDefinition;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSlidesDefinition()];
                    case 1:
                        slidesDefinition = _a.sent();
                        if (!(slidesDefinition && slidesDefinition.length > 0)) return [3 /*break*/, 3];
                        this.slidesDidLoad.emit(slidesDefinition);
                        return [4 /*yield*/, this.onAllSlidesDidLoadLazyAndClone()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeck.prototype.onAllSlidesDidLoadLazyAndClone = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var filteredSlides, promises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDefinedFilteredSlides()];
                    case 1:
                        filteredSlides = _a.sent();
                        promises = [];
                        promises.push(this.lazyLoadFirstSlides());
                        promises.push(DeckdeckgoDeckBackgroundUtils.cloneSlots(this.el, filteredSlides, 'actions'));
                        promises.push(DeckdeckgoDeckBackgroundUtils.cloneAndLoadBackground(this.el, filteredSlides, this.cloneBackground));
                        return [4 /*yield*/, Promise.all(promises)];
                    case 2:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeck.prototype.getSlidesDefinition = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var loadedSlides, filteredSlides, definedSlidesLength, orderedSlidesTagNames;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loadedSlides = this.el.querySelectorAll('.deckgo-slide-container');
                        if (!loadedSlides || loadedSlides.length <= 0) {
                            resolve(null);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getDefinedFilteredSlides()];
                    case 1:
                        filteredSlides = _a.sent();
                        definedSlidesLength = filteredSlides ? filteredSlides.length : 0;
                        // Are all slides loaded?
                        if (loadedSlides.length !== definedSlidesLength) {
                            resolve(null);
                            return [2 /*return*/];
                        }
                        orderedSlidesTagNames = [];
                        Array.from(loadedSlides).forEach(function (slide) {
                            var notes = slide.querySelector('[slot=\'notes\']');
                            var title = slide.querySelector('[slot=\'title\']');
                            orderedSlidesTagNames.push({
                                name: slide.tagName,
                                title: title ? title.innerHTML : null,
                                notes: notes ? notes.innerHTML : null
                            });
                        });
                        resolve(orderedSlidesTagNames);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeck.prototype.getDefinedFilteredSlides = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var definedSlides, filteredSlides;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        definedSlides = this.el.children;
                        return [4 /*yield*/, this.filterSlides(definedSlides)];
                    case 1:
                        filteredSlides = _a.sent();
                        resolve(filteredSlides);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeck.prototype.lazyLoadFirstSlides = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var lazyLoadContentFirstSlide, lazyLoadContentSecondSlide;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lazyLoadContentFirstSlide = this.lazyLoadContent(0);
                        lazyLoadContentSecondSlide = this.lazyLoadContent(1);
                        return [4 /*yield*/, Promise.all([lazyLoadContentFirstSlide, lazyLoadContentSecondSlide])];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeck.prototype.loadBackground = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var filteredSlides;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDefinedFilteredSlides()];
                    case 1:
                        filteredSlides = _a.sent();
                        if (!filteredSlides || filteredSlides.length <= 0) {
                            resolve();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, DeckdeckgoDeckBackgroundUtils.removeSlots(filteredSlides, 'background')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, DeckdeckgoDeckBackgroundUtils.cloneAndLoadBackground(this.el, filteredSlides, this.cloneBackground)];
                    case 3:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    // The last children might be slots (background, note or action)
    DeckdeckgoDeck.prototype.filterSlides = function (definedSlides) {
        return new Promise(function (resolve) {
            if (!definedSlides || definedSlides.length <= 0) {
                resolve(null);
                return;
            }
            var slides = Array.from(definedSlides).filter(function (slide) {
                return slide.tagName.toLocaleLowerCase().indexOf('deckgo-slide-') > -1;
            });
            resolve(slides);
        });
    };
    DeckdeckgoDeck.prototype.isBeginning = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.activeIndex === 0);
        });
    };
    DeckdeckgoDeck.prototype.isEnd = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.activeIndex === _this.length - 1);
        });
    };
    DeckdeckgoDeck.prototype.getActiveIndex = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.activeIndex);
        });
    };
    DeckdeckgoDeck.prototype.getLength = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.length);
        });
    };
    /* END: Slide length and active index */
    /* BEGIN: Manual sliding */
    DeckdeckgoDeck.prototype.slideNext = function (slideAnimation, emitEvent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.slideNextPrev(!this.rtl, slideAnimation, emitEvent)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.slidePrev = function (slideAnimation, emitEvent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.slideNextPrev(this.rtl, slideAnimation, emitEvent)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.slideNextPrev = function (swipeLeft, slideAnimation, emitEvent) {
        if (slideAnimation === void 0) { slideAnimation = true; }
        return __awaiter(this, void 0, void 0, function () {
            var slider, couldSwipe, deltaX;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slider = this.el.shadowRoot.querySelector('div.deckgo-deck');
                        if (!slider || !window) {
                            return [2 /*return*/];
                        }
                        if (!!slideAnimation) return [3 /*break*/, 1];
                        couldSwipe = true;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.beforeSwipe(this.isNextChange(swipeLeft))];
                    case 2:
                        couldSwipe = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!couldSwipe) return [3 /*break*/, 6];
                        deltaX = {
                            slider: slider,
                            swipeLeft: swipeLeft,
                            deltaX: window.innerWidth
                        };
                        return [4 /*yield*/, this.swipeSlide(deltaX, emitEvent)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.afterSwipe(swipeLeft)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.beforeSwipe = function (enter) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var slide, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slide = this.el.querySelector('.deckgo-slide-container:nth-child(' + (this.activeIndex + 1) + ')');
                        if (!!slide) return [3 /*break*/, 1];
                        // If we find no slide, we are cool something went wrong but the talk/show must go on
                        resolve(true);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, slide.beforeSwipe(enter)];
                    case 2:
                        result = _a.sent();
                        resolve(result);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeck.prototype.afterSwipe = function (swipeLeft) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var indexPreviousSlide, slide;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        indexPreviousSlide = swipeLeft ? this.activeIndex - 1 : this.activeIndex + 1;
                        if (isNaN(indexPreviousSlide) || indexPreviousSlide < 0 || indexPreviousSlide > this.length) {
                            resolve();
                            return [2 /*return*/];
                        }
                        slide = this.el.querySelector('.deckgo-slide-container:nth-child(' + (indexPreviousSlide + 1) + ')');
                        if (!!slide) return [3 /*break*/, 1];
                        // Might be a swipe after the first or last slide
                        resolve();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, slide.afterSwipe()];
                    case 2:
                        _a.sent();
                        resolve();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeck.prototype.lazyLoadContent = function (index) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var slide;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slide = this.el.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')');
                        if (!slide) return [3 /*break*/, 2];
                        return [4 /*yield*/, slide.lazyLoadContent()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeck.prototype.slideTo = function (index, speed, emitEvent) {
        if (emitEvent === void 0) { emitEvent = true; }
        return __awaiter(this, void 0, void 0, function () {
            var slider, slideWidth;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (index > this.length || index < 0) {
                            return [2 /*return*/];
                        }
                        slider = this.el.shadowRoot.querySelector('div.deckgo-deck');
                        if (!slider || !window) {
                            return [2 /*return*/];
                        }
                        slideWidth = this.length > 0 && slider.offsetWidth > 0 ? (slider.offsetWidth / this.length) : window.innerWidth;
                        this.deckTranslateX = index * slideWidth * (this.rtl ? 1 : -1);
                        this.activeIndex = index;
                        return [4 /*yield*/, this.lazyLoadContent(this.activeIndex)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.doSwipeSlide(slider, speed)];
                    case 2:
                        _a.sent();
                        if (emitEvent) {
                            this.slideToChange.emit(index);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.deleteActiveSlide = function () {
        return __awaiter(this, void 0, void 0, function () {
            var slide;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.activeIndex > this.length || this.activeIndex < 0) {
                            return [2 /*return*/];
                        }
                        slide = this.el.querySelector('.deckgo-slide-container:nth-child(' + (this.activeIndex + 1) + ')');
                        if (!slide) {
                            return [2 /*return*/];
                        }
                        slide.parentElement.removeChild(slide);
                        this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : 0;
                        this.length = this.length > 0 ? this.length - 1 : 0;
                        if (!(this.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.slideTo(this.activeIndex, 0)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.blockSlide = function (block) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.block = block;
                // If we want to block, then we reset then previous start position as we don't want to start the slide to scroll when the blocking will be resolved
                if (this.block) {
                    this.startX = null;
                }
                return [2 /*return*/];
            });
        });
    };
    /* END: Manual sliding */
    /* BEGIN: Full screen */
    DeckdeckgoDeck.prototype.toggleFullScreen = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var doc, docEl, requestFullScreen, cancelFullScreen;
            return __generator(this, function (_a) {
                doc = window.document;
                docEl = doc.documentElement;
                requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
                cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
                // @ts-ignore
                if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                    requestFullScreen.call(docEl);
                }
                else {
                    cancelFullScreen.call(doc);
                }
                resolve();
                return [2 /*return*/];
            });
        }); });
    };
    DeckdeckgoDeck.prototype.hideOrClearMouseCursorTimer = function (toggleFullscreen) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!toggleFullscreen) return [3 /*break*/, 1];
                        this.fullscreen = true;
                        this.hideMouseCursorWithDelay();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.clearMouseCursorTimer(false)];
                    case 2:
                        _a.sent();
                        this.fullscreen = false;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.clearMouseCursorTimer = function (hideWithDelay) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.fullscreen) {
                            return [2 /*return*/];
                        }
                        if (this.idleMouseTimer > 0) {
                            clearTimeout(this.idleMouseTimer);
                        }
                        return [4 /*yield*/, this.showHideMouseCursor(true)];
                    case 1:
                        _a.sent();
                        if (hideWithDelay) {
                            this.hideMouseCursorWithDelay();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoDeck.prototype.hideMouseCursorWithDelay = function () {
        var _this = this;
        if (!this.fullscreen) {
            return;
        }
        this.idleMouseTimer = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showHideMouseCursor(false)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, 2000);
    };
    DeckdeckgoDeck.prototype.showHideMouseCursor = function (show) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.fullscreen) {
                resolve();
                return;
            }
            if (!_this.cursorHidden && show) {
                // Cursor already displayed, we don't want to touch the style multiple times if not needed
                resolve();
                return;
            }
            var slider = _this.el.shadowRoot.querySelector('div.deckgo-deck');
            if (!slider) {
                resolve();
                return;
            }
            slider.style.setProperty('cursor', show ? 'initial' : 'none');
            _this.mouseInactivity.emit(show);
            _this.cursorHidden = !show;
            resolve();
        });
    };
    DeckdeckgoDeck.prototype.showHideActionsSlot = function (toggleFullscreen) {
        var _this = this;
        return new Promise(function (resolve) {
            var slider = _this.el.shadowRoot.querySelector('div.deckgo-deck');
            if (!slider) {
                resolve();
                return;
            }
            if (toggleFullscreen) {
                slider.style.setProperty('--slide-actions-display', 'none');
            }
            else {
                slider.style.removeProperty('--slide-actions-display');
            }
        });
    };
    /* END: Full screen */
    /* BEGIN: Utils */
    DeckdeckgoDeck.prototype.doPrint = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!window) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.lazyLoadAllContent()];
                    case 1:
                        _a.sent();
                        window.print();
                        _a.label = 2;
                    case 2:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoDeck.prototype.lazyLoadAllContent = function () {
        var promises = [];
        for (var i = 0; i < this.length; i++) {
            promises.push(this.lazyLoadContent(i));
        }
        return Promise.all(promises);
    };
    DeckdeckgoDeck.prototype.isMobile = function () {
        return new Promise(function (resolve) {
            resolve(_chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["a"].isMobile());
        });
    };
    /* END: Utils */
    DeckdeckgoDeck.prototype.render = function () {
        return [
            Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-deck" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "actions" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "background" })),
            Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-pager" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("deckgo-pager", { "active-index": this.activeIndex, length: this.length }))
        ];
    };
    Object.defineProperty(DeckdeckgoDeck.prototype, "el", {
        get: function () { return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoDeck, "style", {
        get: function () { return "div.deckgo-deck{display:-ms-flexbox;display:flex;position:absolute;top:0;bottom:0;z-index:var(--zIndex);--transformX:0px;--transformXDuration:0ms;-webkit-transform:translate3d(var(--transformX),0,0);transform:translate3d(var(--transformX),0,0);-webkit-transition-duration:var(--transformXDuration,0ms);transition-duration:var(--transformXDuration,0ms);--slide-width:100vw;--slide-height:100vh}div.deckgo-deck ::-webkit-scrollbar{display:none}div.deckgo-pager{position:absolute;bottom:0;left:var(--pager-position-left);right:var(--pager-position-right);display:var(--pager-display)}::slotted([slot=background]){display:var(--background-display,none);pointer-events:none}::slotted([slot=actions]){display:none}\@media print{div.deckgo-deck{display:initial;position:static}::slotted([slot=background]){display:none}}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoDeck;
}());
var DeckdeckgoGif = /** @class */ (function () {
    function DeckdeckgoGif(hostRef) {
        Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.fullscreen = false;
        this.loaded = false;
        this.gifLoaded = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "gifLoaded", 7);
    }
    DeckdeckgoGif.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var img;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["D"].hideLazyLoadImages(this.el)];
                    case 1:
                        _a.sent();
                        img = this.el.shadowRoot.querySelector('img');
                        if (img) {
                            img.addEventListener('load', function () {
                                _this.loaded = true;
                                _this.gifLoaded.emit(true);
                            }, false);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoGif.prototype.lazyLoadContent = function () {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["D"].lazyLoadImages(this.el);
    };
    DeckdeckgoGif.prototype.render = function () {
        return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
                'deckgo-gif-fullscreen': this.fullscreen,
                'deckgo-gif-hidden': !this.loaded
            } }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-gif" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "header" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { "data-src": this.src, alt: this.alt }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "footer" })));
    };
    Object.defineProperty(DeckdeckgoGif.prototype, "el", {
        get: function () { return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoGif, "style", {
        get: function () { return "div.deckgo-gif{position:relative;border-radius:var(--border-radius)}div.deckgo-gif img{width:var(--width);height:var(--height)}div.deckgo-gif ::slotted([slot=footer]),div.deckgo-gif ::slotted([slot=header]){position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);text-align:center;background:var(--background);color:var(--color);padding:var(--padding,8px)}div.deckgo-gif ::slotted([slot=header]){top:0}div.deckgo-gif ::slotted([slot=footer]){bottom:0}:host(.deckgo-gif-fullscreen) div.deckgo-gif{width:var(--slide-width);height:var(--slide-height);--width:var(--slide-width);overflow:hidden}:host(.deckgo-gif-fullscreen) div.deckgo-gif img{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;top:50%;left:50%}:host(.deckgo-gif-fullscreen) div.deckgo-gif ::slotted([slot=footer]),:host(.deckgo-gif-fullscreen) div.deckgo-gif ::slotted([slot=header]){z-index:var(--zIndex,2)}:host(.deckgo-gif-hidden) ::slotted([slot=footer]),:host(.deckgo-gif-hidden) ::slotted([slot=header]){display:none}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoGif;
}());
var DeckdeckgoPager = /** @class */ (function () {
    function DeckdeckgoPager(hostRef) {
        Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.percentageProgression = 0;
        this.pagerClick = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "pagerClick", 7);
    }
    DeckdeckgoPager.prototype.calculateProgression = function () {
        this.percentageProgression = this.length > 0 ? Math.round(((this.activeIndex + 1) / this.length) * 100) : 0;
    };
    // Nice circular percentage chart from the article of Sergio Pedercini
    // https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705
    DeckdeckgoPager.prototype.render = function () {
        var _this = this;
        var ratio = '' + this.percentageProgression + ', 100';
        return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: function () { return _this.pagerClick.emit(); } }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { viewBox: "0 0 36 36", class: "deckgo-pager-circular-chart" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { class: "deckgo-pager-circle-bg", d: "M18 2.0845\n            a 15.9155 15.9155 0 0 1 0 31.831\n            a 15.9155 15.9155 0 0 1 0 -31.831" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { class: "deckgo-pager-circle", "stroke-dasharray": ratio, d: "M18 2.0845\n        a 15.9155 15.9155 0 0 1 0 31.831\n        a 15.9155 15.9155 0 0 1 0 -31.831" }), this.renderText()));
    };
    DeckdeckgoPager.prototype.renderText = function () {
        return [
            Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("text", { x: "18", y: "20.35", class: "deckgo-pager-progression deckgo-pager-percentage" }, this.percentageProgression, "%"),
            Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("text", { x: "18", y: "20.35", class: "deckgo-pager-progression deckgo-pager-slides" }, (this.length > 0 ? this.activeIndex + 1 : 0), "/", this.length)
        ];
    };
    Object.defineProperty(DeckdeckgoPager, "watchers", {
        get: function () {
            return {
                "length": ["calculateProgression"],
                "activeIndex": ["calculateProgression"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoPager, "style", {
        get: function () { return ":host{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;cursor:pointer}.deckgo-pager-circular-chart{height:var(--pager-size,56px);width:var(--pager-size,56px);margin:var(--pager-margin-top,8px) var(--pager-margin-end,8px) var(--pager-margin-bottom,8px) var(--pager-margin-start,8px);display:block}.deckgo-pager-circle-bg{fill:none;stroke:var(--pager-background,#eee);stroke-width:var(--pager-stroke-outer-width,2.8)}.deckgo-pager-circle{stroke:var(--pager-color,#4c8dff);fill:none;stroke-width:var(--pager-stroke-inner-width,1.8);stroke-linecap:round;-webkit-transition:stroke-dasharray .5s cubic-bezier(.23,1,.32,1);transition:stroke-dasharray .5s cubic-bezier(.23,1,.32,1)}.deckgo-pager-progression{fill:var(--pager-text-color,#4c8dff);font-size:var(--pager-text-size,.5em);text-anchor:middle;font-weight:300}.deckgo-pager-progression.deckgo-pager-percentage{display:var(--pager-text-percentage-display,none)}.deckgo-pager-progression.deckgo-pager-slides{display:var(--pager-text-slides-display,none)}\@media print{.deckgo-pager-circular-chart{display:none}}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoPager;
}());
var DeckdeckgoSlideAuthor = /** @class */ (function () {
    function DeckdeckgoSlideAuthor(hostRef) {
        Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.customActions = false;
        this.customBackground = false;
        this.slideDidLoad = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "slideDidLoad", 7);
    }
    DeckdeckgoSlideAuthor.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["D"].hideLazyLoadImages(this.el)];
                    case 1:
                        _a.sent();
                        this.slideDidLoad.emit();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoSlideAuthor.prototype.beforeSwipe = function (_enter) {
        return new Promise(function (resolve) {
            resolve(true);
        });
    };
    DeckdeckgoSlideAuthor.prototype.afterSwipe = function () {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].afterSwipe();
    };
    DeckdeckgoSlideAuthor.prototype.lazyLoadContent = function () {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].lazyLoadContent(this.el);
    };
    DeckdeckgoSlideAuthor.prototype.render = function () {
        return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: { 'deckgo-slide-container': true } }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-slide" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "title" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-slide-author deckgo-slide-author-start" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { "data-src": this.imgSrc, alt: this.imgAlt })), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-slide-author deckgo-slide-author-end" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "author" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-slide-author-social" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "social-link" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "social-link" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "social-link" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "social-link" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "social-link" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "social-link" }))), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "notes" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "actions" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "background" })));
    };
    Object.defineProperty(DeckdeckgoSlideAuthor.prototype, "el", {
        get: function () { return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoSlideAuthor, "style", {
        get: function () { return ":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px;--slide-reveal-transform:translateX(-4px);--slide-reveal-duration:200ms}\@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}\@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-flow:row;flex-flow:row;padding:0;width:var(--slide-width)}div.deckgo-slide-author{height:100%;width:50%;display:-ms-flexbox;display:flex;-ms-flex-align:var(--slide-author-align,inherit);align-items:var(--slide-author-align,inherit);text-align:var(--slide-author-text-align,inherit);padding:var(--slide-author-padding-top,var(--slide-padding-top-default)) var(--slide-author-padding-end,var(--slide-padding-end-default)) var(--slide-author-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-author-padding-start,var(--slide-padding-start-default))}div.deckgo-slide-author.deckgo-slide-author-start{background:var(--slide-author-background-start);color:var(--slide-author-color-start);-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}div.deckgo-slide-author.deckgo-slide-author-start img{border-radius:50%;width:var(--slide-author-img-size,80%)}div.deckgo-slide-author.deckgo-slide-author-end{background:var(--slide-author-background-end);color:var(--slide-author-color-end);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}div.deckgo-slide-author.deckgo-slide-author-end div.deckgo-slide-author-social{display:grid;grid-template-columns:50% 50%;grid-gap:10px;padding-top:var(--slide-author-social-padding-top,var(--slide-padding-top-default))}\@media (min-width:992px){div.deckgo-slide-author.deckgo-slide-author-start{width:calc(100% / 3 * 1)}div.deckgo-slide-author.deckgo-slide-author-end{width:calc(100% / 3 * 2)}div.deckgo-slide-author.deckgo-slide-author-end div.deckgo-slide-author-social{grid-template-columns:30% 30% 30%}}\@media screen and (max-width:768px){div.deckgo-slide-author.deckgo-slide-author-start{padding-right:var(--slide-author-padding-end,0)}div.deckgo-slide-author.deckgo-slide-author-end div.deckgo-slide-author-social{grid-template-columns:100%}}::slotted([slot=title]){display:none}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoSlideAuthor;
}());
var DeckdeckgoSlideCodeAction;
(function (DeckdeckgoSlideCodeAction) {
    DeckdeckgoSlideCodeAction[DeckdeckgoSlideCodeAction["SWIPE"] = 0] = "SWIPE";
    DeckdeckgoSlideCodeAction[DeckdeckgoSlideCodeAction["SCROLL"] = 1] = "SCROLL";
})(DeckdeckgoSlideCodeAction || (DeckdeckgoSlideCodeAction = {}));
var DeckdeckgoSlideCode = /** @class */ (function () {
    function DeckdeckgoSlideCode(hostRef) {
        Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.anchor = '// DeckDeckGo';
        this.anchorZoom = '// DeckDeckGoZoom';
        this.hideAnchor = true;
        this.language = 'javascript';
        this.mobile = false;
        this.action = DeckdeckgoSlideCodeAction.SWIPE;
        this.customActions = false;
        this.customBackground = false;
        this.slideDidLoad = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "slideDidLoad", 7);
        this.scrolling = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "scrolling", 7);
    }
    DeckdeckgoSlideCode.prototype.componentWillLoad = function () {
        this.mobile = _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["a"].isMobile();
    };
    DeckdeckgoSlideCode.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["D"].hideLazyLoadImages(this.el)];
                    case 1:
                        _a.sent();
                        this.slideDidLoad.emit();
                        return [4 /*yield*/, this.moveSlots()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.showInfo()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoSlideCode.prototype.moveSlots = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var code = _this.el.querySelector('[slot=\'code\']');
            var codeComponent = _this.el.shadowRoot.querySelector('deckgo-highlight-code');
            if (codeComponent && code) {
                codeComponent.appendChild(code);
            }
            resolve();
        });
    };
    DeckdeckgoSlideCode.prototype.showInfo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Only on mobile devices
            if (_chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["a"].isMobile()) {
                var info = _this.el.querySelector('[slot=\'info\']');
                if (info) {
                    info.classList.add('deckgo-show-info');
                }
            }
            resolve();
        });
    };
    DeckdeckgoSlideCode.prototype.hideInfo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Only on mobile devices
            if (_chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["a"].isMobile()) {
                var info = _this.el.querySelector('[slot=\'info\']');
                if (info && info.classList.contains('deckgo-show-info')) {
                    info.classList.remove('deckgo-show-info');
                    info.style.setProperty('pointer-events', 'none');
                    resolve(true);
                    return;
                }
            }
            resolve(false);
        });
    };
    DeckdeckgoSlideCode.prototype.beforeSwipe = function (_enter) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var couldSwipe;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.scrollToNext(_enter)];
                    case 1:
                        couldSwipe = _a.sent();
                        if (!couldSwipe) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.zoomCode(false)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        resolve(couldSwipe);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoSlideCode.prototype.afterSwipe = function () {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].afterSwipe();
    };
    DeckdeckgoSlideCode.prototype.scrollToNext = function (enter) {
        var _this = this;
        var element = this.el.shadowRoot.querySelector('deckgo-highlight-code');
        if (element && 'findNextAnchor' in element) {
            return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                var nextAnchor, container, previousScrollTop;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, element.findNextAnchor(enter)];
                        case 1:
                            nextAnchor = _a.sent();
                            container = this.el.shadowRoot.querySelector('div.deckgo-slide-code-container');
                            if (!(nextAnchor && container)) return [3 /*break*/, 4];
                            previousScrollTop = container.scrollTop;
                            container.scrollTop = nextAnchor.offsetTop;
                            if (!('zoomCode' in element)) return [3 /*break*/, 3];
                            return [4 /*yield*/, element.zoomCode(nextAnchor.hasLineZoom)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            resolve(nextAnchor.offsetTop === 0 && previousScrollTop === 0);
                            return [3 /*break*/, 5];
                        case 4:
                            resolve(true);
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            return new Promise(function (resolve) {
                resolve(true);
            });
        }
    };
    DeckdeckgoSlideCode.prototype.zoomCode = function (zoom) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var element, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = this.el.shadowRoot.querySelector('deckgo-highlight-code');
                        if (!(element && 'zoomCode' in element)) return [3 /*break*/, 2];
                        return [4 /*yield*/, element.zoomCode(zoom)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        title = this.el.querySelector('[slot=\'title\']');
                        if (title) {
                            title.style.setProperty('opacity', zoom ? '0' : '1');
                        }
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoSlideCode.prototype.lazyLoadContent = function () {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].lazyLoadContent(this.el);
    };
    DeckdeckgoSlideCode.prototype.switchAction = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var infoRemoved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.mobile) {
                            // Scrolling is allowed on not mobile devices
                            resolve();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.hideInfo()];
                    case 1:
                        infoRemoved = _a.sent();
                        if (infoRemoved) {
                            // On the first click, we just want to hide the info
                            resolve();
                            return [2 /*return*/];
                        }
                        this.action = this.action === DeckdeckgoSlideCodeAction.SWIPE ? DeckdeckgoSlideCodeAction.SCROLL : DeckdeckgoSlideCodeAction.SWIPE;
                        this.scrolling.emit(this.action === DeckdeckgoSlideCodeAction.SCROLL);
                        if (this.action === DeckdeckgoSlideCodeAction.SCROLL) {
                            this.unlockScroll();
                        }
                        else {
                            this.lockScroll();
                        }
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoSlideCode.prototype.lockScroll = function () {
        var container = this.el.shadowRoot.querySelector('div.deckgo-slide-code-container');
        container.style.setProperty('overflow-y', 'hidden');
    };
    DeckdeckgoSlideCode.prototype.unlockScroll = function () {
        var container = this.el.shadowRoot.querySelector('div.deckgo-slide-code-container');
        container.style.setProperty('overflow-y', 'auto');
    };
    // DeckDeckGo
    DeckdeckgoSlideCode.prototype.render = function () {
        var _this = this;
        var containerStyle = 'deckgo-slide-code-container';
        if (this.mobile) {
            containerStyle += ' deckgo-slide-code-container-mobile';
        }
        return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: { 'deckgo-slide-container': true } }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-slide", onClick: function () { return _this.switchAction(); } }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "title" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: containerStyle }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("deckgo-highlight-code", { src: this.src, anchor: this.anchor, anchorZoom: this.anchorZoom, hideAnchor: this.hideAnchor, language: this.language })), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "code" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "info" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "notes" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "actions" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "background" })));
    };
    Object.defineProperty(DeckdeckgoSlideCode.prototype, "el", {
        get: function () { return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoSlideCode, "style", {
        get: function () { return ":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px;--slide-reveal-transform:translateX(-4px);--slide-reveal-duration:200ms}\@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}\@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start;position:relative}div.deckgo-slide-code-container{width:100%;overflow-y:auto;scroll-behavior:smooth}div.deckgo-slide-code-container.deckgo-slide-code-container-mobile{overflow-y:hidden}::slotted([slot=title]){-webkit-transition:opacity .5s ease-in;transition:opacity .5s ease-in}::slotted([slot=info]){display:none;pointer-events:none}::slotted([slot=info].deckgo-show-info){position:absolute;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;background:var(--deckgo-show-info-background);z-index:var(--deckgo-show-info-zindex,1);pointer-events:auto}\@media print{div.deckgo-slide{height:100%}}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoSlideCode;
}());
var DeckdeckgoSlideContent = /** @class */ (function () {
    function DeckdeckgoSlideContent(hostRef) {
        Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.reveal = false;
        this.revealShowFirst = false;
        this.customActions = false;
        this.customBackground = false;
        this.slideDidLoad = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "slideDidLoad", 7);
    }
    DeckdeckgoSlideContent.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["D"].hideLazyLoadImages(this.el)];
                    case 1:
                        _a.sent();
                        this.slideDidLoad.emit();
                        if (!this.reveal) return [3 /*break*/, 3];
                        return [4 /*yield*/, _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].hideRevealElements(this.el, this.revealShowFirst)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoSlideContent.prototype.beforeSwipe = function (enter) {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].beforeSwipe(this.el, enter, this.reveal);
    };
    DeckdeckgoSlideContent.prototype.afterSwipe = function () {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].afterSwipe();
    };
    DeckdeckgoSlideContent.prototype.lazyLoadContent = function () {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].lazyLoadContent(this.el);
    };
    DeckdeckgoSlideContent.prototype.render = function () {
        return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: { 'deckgo-slide-container': true } }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-slide" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "title" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "content" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "notes" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "actions" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "background" })));
    };
    Object.defineProperty(DeckdeckgoSlideContent.prototype, "el", {
        get: function () { return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoSlideContent, "style", {
        get: function () { return ":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px;--slide-reveal-transform:translateX(-4px);--slide-reveal-duration:200ms}\@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}\@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoSlideContent;
}());
var DeckdeckgoSlideCountdown = /** @class */ (function () {
    function DeckdeckgoSlideCountdown(hostRef) {
        Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.mDays = 0;
        this.mHours = 0;
        this.mMinutes = 0;
        this.mSeconds = 0;
        this.mTotalSeconds = 0;
        this.mCountdownInterval = -1;
        this.customActions = false;
        this.customBackground = false;
        this.slideDidLoad = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "slideDidLoad", 7);
    }
    DeckdeckgoSlideCountdown.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clearUp()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.init()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.startCountdown()];
                    case 3:
                        _a.sent();
                        this.slideDidLoad.emit();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoSlideCountdown.prototype.componentDidUnload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.clearUp();
                return [2 /*return*/];
            });
        });
    };
    DeckdeckgoSlideCountdown.prototype.beforeSwipe = function (_enter) {
        return Promise.resolve(true);
    };
    DeckdeckgoSlideCountdown.prototype.afterSwipe = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clearUp()];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoSlideCountdown.prototype.lazyLoadContent = function () {
        return Promise.resolve();
    };
    DeckdeckgoSlideCountdown.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.startCountdown()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoSlideCountdown.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clearUp()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @internal
     */
    DeckdeckgoSlideCountdown.prototype.clearUp = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.mCountdownInterval > -1) {
                clearInterval(_this.mCountdownInterval);
                _this.mCountdownInterval = -1;
            }
            resolve();
        });
    };
    /**
     * @internal
     */
    DeckdeckgoSlideCountdown.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var startAt, now, diff, diffHours;
            return __generator(this, function (_a) {
                if (this.until && this.until !== undefined && this.until !== '') {
                    startAt = new Date(this.until);
                    now = new Date();
                    if (startAt && startAt.getTime() > now.getTime()) {
                        diff = (startAt.getTime() - now.getTime()) / (60 * 60 * 1000);
                        if (diff >= 24) {
                            diffHours = diff / 24;
                            this.mDays = diffHours >= 99 ? 99 : Math.floor(diffHours);
                            this.mHours = Math.floor((diffHours % 1) * 24);
                        }
                        else {
                            this.mDays = 0;
                            this.mHours = Math.floor(diff);
                        }
                        diff = (diff % 1) * 60;
                        this.mMinutes = Math.floor(diff);
                        diff = (diff % 1) * 60;
                        this.mSeconds = Math.floor(diff);
                        this.mTotalSeconds = ((this.mDays * 24 * 60 * 60) + (this.mHours * 60 * 60) + (this.mMinutes * 60) + this.mSeconds);
                        resolve();
                        return [2 /*return*/];
                    }
                }
                this.mDays = this.days;
                this.mHours = this.hours;
                this.mMinutes = this.minutes;
                this.mSeconds = this.seconds;
                this.mTotalSeconds = ((this.mDays * 24 * 60 * 60) + (this.mHours * 60 * 60) + (this.mMinutes * 60) + this.mSeconds);
                resolve();
                return [2 /*return*/];
            });
        }); });
    };
    /**
     * @internal
     */
    DeckdeckgoSlideCountdown.prototype.startCountdown = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.mCountdownInterval = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.mTotalSeconds > 0) {
                        --this.mSeconds;
                        if (this.mMinutes >= 0 && this.mSeconds < 0) {
                            this.mSeconds = 59;
                            --this.mMinutes;
                        }
                        if (this.mHours >= 0 && this.mMinutes < 0) {
                            this.mMinutes = 59;
                            --this.mHours;
                        }
                        --this.mTotalSeconds;
                    }
                    else {
                        clearInterval(this.mCountdownInterval);
                        this.mCountdownInterval = -1;
                    }
                    return [2 /*return*/];
                });
            }); }, 1000);
            resolve();
        });
    };
    DeckdeckgoSlideCountdown.prototype.render = function () {
        return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: { 'deckgo-slide-container': true } }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-slide" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "title" }), this.renderCountdown(), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "notes" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "actions" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "background" })));
    };
    DeckdeckgoSlideCountdown.prototype.renderCountdown = function () {
        if (this.mDays >= 1) {
            return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-countdown-container" }, this.renderCountdownTime('days', this.mDays), this.renderCountdownTime('hours', this.mHours), this.renderCountdownTime('minutes', this.mMinutes));
        }
        else {
            return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-countdown-container" }, this.renderCountdownTime('hours', this.mHours), this.renderCountdownTime('minutes', this.mMinutes), this.renderCountdownTime('seconds', this.mSeconds));
        }
    };
    DeckdeckgoSlideCountdown.prototype.renderCountdownTime = function (slotName, value) {
        return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "time-container" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: slotName }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "figure-container" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "figure tens" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "" + (value >= 10 ? Math.floor(value / 10) % 10 : 0))), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "figure unit" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "" + value % 10))));
    };
    Object.defineProperty(DeckdeckgoSlideCountdown, "style", {
        get: function () { return ":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px;--slide-reveal-transform:translateX(-4px);--slide-reveal-duration:200ms}\@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}\@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}::slotted([slot=content]),::slotted([slot=title]){text-align:center}div.deckgo-countdown-container{padding-bottom:var(--slide-countdown-container-padding-bottom,64px);width:inherit;max-width:var(--slide-countdown-digits-max-width,36em);display:grid;grid-template-columns:repeat(auto-fit,minmax(var(--slide-countdown-digits-minmax-width,12em),1fr))}div.deckgo-countdown-container div.time-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}div.deckgo-countdown-container div.time-container div.figure-container{display:-ms-flexbox;display:flex;text-align:center}div.deckgo-countdown-container div.time-container div.figure-container div.figure{width:var(--slide-countdown-digits-width,4em);height:var(--slide-countdown-digits-height,4em);background:var(--slide-countdown-digits-background,#fff);border-radius:var(--slide-countdown-digits-border-radius,.5em);-webkit-box-shadow:var(--slide-countdown-digits-box-shadow,0 3px 4px 0 rgba(0,0,0,.2),inset 2px 4px 0 0 hsla(0,0%,100%,.08));box-shadow:var(--slide-countdown-digits-box-shadow,0 3px 4px 0 rgba(0,0,0,.2),inset 2px 4px 0 0 hsla(0,0%,100%,.08));display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}div.deckgo-countdown-container div.time-container div.figure-container div.figure:first-of-type{margin-right:var(--slide-countdown-digit-margin-right,.625em)}div.deckgo-countdown-container div.time-container div.figure-container div.figure>span{font-size:var(--slide-countdown-digits-font-size,3em);font-weight:var(--slide-countdown-digits-font-weight);color:var(--slide-countdown-digits-color)}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoSlideCountdown;
}());
var DeckdeckgoSlideGif = /** @class */ (function () {
    function DeckdeckgoSlideGif(hostRef) {
        Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.fullscreen = true;
        this.loaded = false;
        this.customActions = false;
        this.customBackground = false;
        this.slideDidLoad = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "slideDidLoad", 7);
    }
    DeckdeckgoSlideGif.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["D"].hideLazyLoadImages(this.el)];
                    case 1:
                        _a.sent();
                        this.slideDidLoad.emit();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoSlideGif.prototype.beforeSwipe = function (_enter) {
        return new Promise(function (resolve) {
            resolve(true);
        });
    };
    DeckdeckgoSlideGif.prototype.afterSwipe = function () {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].afterSwipe();
    };
    DeckdeckgoSlideGif.prototype.lazyLoadContent = function () {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].lazyLoadContent(this.el);
    };
    DeckdeckgoSlideGif.prototype.onGifLoaded = function ($event) {
        this.loaded = $event && $event.detail;
    };
    DeckdeckgoSlideGif.prototype.render = function () {
        return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
                'deckgo-slide-container': true,
                'deckgo-slide-container-fullscreen': this.fullscreen,
                'deckgo-slide-gif-hidden': !this.loaded
            } }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-slide" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "title" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-gif-container" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "header" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("deckgo-gif", { src: this.src, alt: this.alt, fullscreen: this.fullscreen }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "footer" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "notes" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "actions" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "background" }))));
    };
    Object.defineProperty(DeckdeckgoSlideGif.prototype, "el", {
        get: function () { return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoSlideGif, "style", {
        get: function () { return ":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px;--slide-reveal-transform:translateX(-4px);--slide-reveal-duration:200ms}\@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}\@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}:host(.deckgo-slide-container-fullscreen) ::slotted([slot=title]){display:none}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start}div.deckgo-gif-container{width:100%;height:100%;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}div.deckgo-gif-container ::slotted([slot=footer]),div.deckgo-gif-container ::slotted([slot=header]){position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);text-align:center;background:var(--background);color:var(--color);padding:var(--padding,8px);z-index:var(--zIndex,2)}div.deckgo-gif-container ::slotted([slot=header]){top:0}div.deckgo-gif-container ::slotted([slot=footer]){bottom:0}:host(.deckgo-slide-gif-hidden) ::slotted([slot=footer]),:host(.deckgo-slide-gif-hidden) ::slotted([slot=header]){display:none}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoSlideGif;
}());
var DeckdeckgoSlideSplit = /** @class */ (function () {
    function DeckdeckgoSlideSplit(hostRef) {
        Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.reveal = false;
        this.revealShowFirst = false;
        this.customActions = false;
        this.customBackground = false;
        this.slideDidLoad = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "slideDidLoad", 7);
    }
    DeckdeckgoSlideSplit.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["D"].hideLazyLoadImages(this.el)];
                    case 1:
                        _a.sent();
                        this.slideDidLoad.emit();
                        if (!this.reveal) return [3 /*break*/, 3];
                        return [4 /*yield*/, _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].hideRevealElements(this.el, this.revealShowFirst)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoSlideSplit.prototype.beforeSwipe = function (enter) {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].beforeSwipe(this.el, enter, this.reveal);
    };
    DeckdeckgoSlideSplit.prototype.afterSwipe = function () {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].afterSwipe();
    };
    DeckdeckgoSlideSplit.prototype.lazyLoadContent = function () {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].lazyLoadContent(this.el);
    };
    DeckdeckgoSlideSplit.prototype.render = function () {
        return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: { 'deckgo-slide-container': true } }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-slide" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "title" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-slide-split deckgo-slide-split-start" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" })), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-slide-split deckgo-slide-split-end" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" })), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "notes" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "actions" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "background" })));
    };
    Object.defineProperty(DeckdeckgoSlideSplit.prototype, "el", {
        get: function () { return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoSlideSplit, "style", {
        get: function () { return ":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px;--slide-reveal-transform:translateX(-4px);--slide-reveal-duration:200ms}\@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}\@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-flow:row wrap;flex-flow:row wrap;padding:0;width:var(--slide-width);height:var(--slide-height)}div.deckgo-slide-split{-ms-flex:1;flex:1;height:calc(var(--slide-height) - (var(--slide-split-padding-bottom, var(--slide-padding-bottom-default))) - (var(--slide-split-padding-top, var(--slide-padding-top-default))));width:calc((var(--slide-width) - (2 * var(--slide-split-padding-end, var(--slide-padding-end-default))) - (2 * var(--slide-split-padding-start, var(--slide-padding-start-default)))) / 2);display:-ms-flexbox;display:flex;-ms-flex-align:var(--slide-split-align,inherit);align-items:var(--slide-split-align,inherit);text-align:var(--slide-split-text-align,inherit);padding:var(--slide-split-padding-top,0) var(--slide-split-padding-end,var(--slide-padding-end-default)) var(--slide-split-padding-bottom,0) var(--slide-split-padding-start,var(--slide-padding-start-default))}div.deckgo-slide-split.deckgo-slide-split-start{background:var(--slide-split-background-start);color:var(--slide-split-color-start)}div.deckgo-slide-split.deckgo-slide-split-end{background:var(--slide-split-background-end);color:var(--slide-split-color-end)}::slotted([slot=title]){-ms-flex:1 100%;flex:1 100%;display:var(--slide-split-title-display,none);padding:var(--slide-split-title-padding-top,var(--slide-padding-top-default)) var(--slide-split-title-padding-end,var(--slide-padding-end-default)) var(--slide-split-title-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-split-title-padding-start,var(--slide-padding-start-default))}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoSlideSplit;
}());
var DeckdeckgoSlideTitle = /** @class */ (function () {
    function DeckdeckgoSlideTitle(hostRef) {
        Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.reveal = false;
        this.revealShowFirst = false;
        this.customActions = false;
        this.customBackground = false;
        this.slideDidLoad = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "slideDidLoad", 7);
    }
    DeckdeckgoSlideTitle.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["D"].hideLazyLoadImages(this.el)];
                    case 1:
                        _a.sent();
                        this.slideDidLoad.emit();
                        if (!this.reveal) return [3 /*break*/, 3];
                        return [4 /*yield*/, _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].hideRevealElements(this.el, this.revealShowFirst)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoSlideTitle.prototype.beforeSwipe = function (enter) {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].beforeSwipe(this.el, enter, this.reveal);
    };
    DeckdeckgoSlideTitle.prototype.afterSwipe = function () {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].afterSwipe();
    };
    DeckdeckgoSlideTitle.prototype.lazyLoadContent = function () {
        return _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].lazyLoadContent(this.el);
    };
    DeckdeckgoSlideTitle.prototype.render = function () {
        return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: { 'deckgo-slide-container': true } }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-slide" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "title" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "content" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "notes" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "actions" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "background" })));
    };
    Object.defineProperty(DeckdeckgoSlideTitle.prototype, "el", {
        get: function () { return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoSlideTitle, "style", {
        get: function () { return ":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px;--slide-reveal-transform:translateX(-4px);--slide-reveal-duration:200ms}\@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}\@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}::slotted([slot=content]),::slotted([slot=title]){text-align:center}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoSlideTitle;
}());
var DeckdeckgoSlideYoutube = /** @class */ (function () {
    function DeckdeckgoSlideYoutube(hostRef) {
        var _this = this;
        Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.isPlaying = false;
        this.customActions = false;
        this.customBackground = false;
        this.onResizeContent = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initSize()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.resizeContent()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.slideDidLoad = Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "slideDidLoad", 7);
    }
    DeckdeckgoSlideYoutube.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["D"].hideLazyLoadImages(this.el)];
                    case 1:
                        _a.sent();
                        this.initWindowResize();
                        return [4 /*yield*/, this.initFrameTitle()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.initSize()];
                    case 3:
                        _a.sent();
                        this.slideDidLoad.emit();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoSlideYoutube.prototype.beforeSwipe = function (_enter) {
        return new Promise(function (resolve) {
            resolve(true);
        });
    };
    DeckdeckgoSlideYoutube.prototype.afterSwipe = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Stop video after swipe to prev or next slide
                    return [4 /*yield*/, this.playPauseVideo(false)];
                    case 1:
                        // Stop video after swipe to prev or next slide
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoSlideYoutube.prototype.lazyLoadContent = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["b"].lazyLoadContent(this.el)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.initSize()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.resizeContent()];
                    case 3:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoSlideYoutube.prototype.play = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playPauseVideo(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoSlideYoutube.prototype.pause = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playPauseVideo(false)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoSlideYoutube.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playPauseVideo(!this.isPlaying)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoSlideYoutube.prototype.playPauseVideo = function (play) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = this.el.shadowRoot.querySelector('deckgo-youtube');
                        if (!element) {
                            resolve();
                            return [2 /*return*/];
                        }
                        if (!play) return [3 /*break*/, 2];
                        return [4 /*yield*/, element.play()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, element.pause()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.isPlaying = play;
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoSlideYoutube.prototype.initFrameTitle = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var title = _this.el.querySelector('[slot=\'title\']');
            if (title) {
                _this.frameTitle = title.innerHTML;
            }
            resolve();
        });
    };
    DeckdeckgoSlideYoutube.prototype.initSize = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // If width and height, use them otherwise full size
            if (_this.width > 0 && _this.height > 0) {
                _this.videoWidth = _this.width;
                _this.videoHeight = _this.height;
            }
            else {
                var container = _this.el.shadowRoot.querySelector('div.deckgo-youtube-container');
                if (container) {
                    _this.videoWidth = container.clientWidth;
                    _this.videoHeight = container.clientHeight;
                }
            }
            resolve();
        });
    };
    DeckdeckgoSlideYoutube.prototype.initWindowResize = function () {
        if (window) {
            window.addEventListener('resize', _chunk_9d4bfa8f_js__WEBPACK_IMPORTED_MODULE_1__["a"].debounce(this.onResizeContent));
        }
    };
    DeckdeckgoSlideYoutube.prototype.resizeContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = this.el.shadowRoot.querySelector('deckgo-youtube');
                        if (!element) return [3 /*break*/, 2];
                        return [4 /*yield*/, element.updateIFrame(this.videoWidth, this.videoHeight)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoSlideYoutube.prototype.render = function () {
        return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: { 'deckgo-slide-container': true } }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-slide" }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "title" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "content" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deckgo-youtube-container" }, this.renderVideo()), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "notes" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "actions" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "background" })));
    };
    DeckdeckgoSlideYoutube.prototype.renderVideo = function () {
        return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("deckgo-youtube", { src: this.src, width: this.videoWidth, height: this.videoHeight, "frame-title": this.frameTitle });
    };
    Object.defineProperty(DeckdeckgoSlideYoutube.prototype, "el", {
        get: function () { return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoSlideYoutube, "style", {
        get: function () { return ":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px;--slide-reveal-transform:translateX(-4px);--slide-reveal-duration:200ms}\@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}\@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start}div.deckgo-youtube-container{width:calc(var(--slide-width) - var(--slide-padding-end, 64px) - var(--slide-padding-start, 64px));height:calc(((var(--slide-height) - var(--slide-padding-end, 64px) - var(--slide-padding-start, 64px)) * 9) / 16);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}\@media screen and (max-width:1024px){div.deckgo-youtube-container{width:calc(var(--slide-width) - var(--slide-padding-end, 32px) - var(--slide-padding-start, 32px));height:calc(((var(--slide-height) - var(--slide-padding-end, 32px) - var(--slide-padding-start, 32px)) * 9) / 16)}}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoSlideYoutube;
}());
var DeckdeckgoSocial = /** @class */ (function () {
    function DeckdeckgoSocial(hostRef) {
        Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    DeckdeckgoSocial.prototype.componentDidLoad = function () {
        this.concatTwitterUrl();
        this.concatLinkedinUrl();
        this.concatMediumUrl();
        this.concatDevUrl();
        this.concatGithubUrl();
        this.concatFullUrl();
    };
    DeckdeckgoSocial.prototype.lazyLoadContent = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    DeckdeckgoSocial.prototype.concatTwitterUrl = function () {
        if (!this.twitter) {
            return;
        }
        this.url = 'https://twitter.com/' + this.twitter;
    };
    DeckdeckgoSocial.prototype.concatLinkedinUrl = function () {
        if (!this.linkedin) {
            return;
        }
        this.url = 'https://www.linkedin.com/in/' + this.linkedin;
    };
    DeckdeckgoSocial.prototype.concatMediumUrl = function () {
        if (!this.medium) {
            return;
        }
        this.url = 'https://medium.com/@' + this.medium;
    };
    DeckdeckgoSocial.prototype.concatDevUrl = function () {
        if (!this.dev) {
            return;
        }
        this.url = 'https://dev.to/' + this.dev;
    };
    DeckdeckgoSocial.prototype.concatGithubUrl = function () {
        if (!this.github) {
            return;
        }
        this.url = 'https://github.com/' + this.github;
    };
    DeckdeckgoSocial.prototype.concatFullUrl = function () {
        if (!this.fullUrl) {
            return;
        }
        this.url = this.fullUrl;
    };
    DeckdeckgoSocial.prototype.render = function () {
        return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: this.url }, Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon" }), Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
    };
    Object.defineProperty(DeckdeckgoSocial, "watchers", {
        get: function () {
            return {
                "twitter": ["concatTwitterUrl"],
                "linkedin": ["concatLinkedinUrl"],
                "medium": ["concatMediumUrl"],
                "dev": ["concatDevUrl"],
                "github": ["concatGithubUrl"],
                "fullUrl": ["concatFullUrl"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoSocial, "style", {
        get: function () { return "a{color:inherit;text-decoration:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}::slotted([slot=icon]){margin-right:8px}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoSocial;
}());
var DeckdeckgoYoutube = /** @class */ (function () {
    function DeckdeckgoYoutube(hostRef) {
        Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    DeckdeckgoYoutube.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addPreconnectLink()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoYoutube.prototype.addPreconnectLink = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.src) {
                resolve();
                return;
            }
            var links = document.head.querySelectorAll('link[rel=\'preconnect\']');
            if (links && links.length > 0) {
                resolve();
                return;
            }
            var link = document.createElement('link');
            link.rel = 'preconnect';
            link.href = 'https://www.youtube.com';
            document.head.appendChild(link);
            resolve();
        });
    };
    DeckdeckgoYoutube.prototype.updateIFrame = function (width, height) {
        return __awaiter(this, void 0, void 0, function () {
            var iframe;
            return __generator(this, function (_a) {
                iframe = this.el.shadowRoot.querySelector('iframe');
                if (iframe) {
                    iframe.width = '' + width;
                    iframe.height = '' + height;
                }
                return [2 /*return*/];
            });
        });
    };
    DeckdeckgoYoutube.prototype.lazyLoadContent = function () {
        return this.createIFrame();
    };
    DeckdeckgoYoutube.prototype.onSrcUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createIFrame()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoYoutube.prototype.createIFrame = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var iframe, element, allow, allowFullScreen, _a, div;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.src) {
                            resolve();
                            return [2 /*return*/];
                        }
                        iframe = this.el.shadowRoot.querySelector('iframe');
                        if (iframe && !iframe.parentElement) {
                            resolve();
                            return [2 /*return*/];
                        }
                        if (iframe) {
                            iframe.parentElement.removeChild(iframe);
                        }
                        element = document.createElement('iframe');
                        allow = document.createAttribute('allow');
                        allow.value = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
                        allowFullScreen = document.createAttribute('allowfullscreen');
                        allowFullScreen.value = '';
                        element.setAttributeNode(allow);
                        element.setAttributeNode(allowFullScreen);
                        _a = element;
                        return [4 /*yield*/, this.formatSrc()];
                    case 1:
                        _a.src = _b.sent();
                        element.width = '' + this.width;
                        element.height = '' + this.height;
                        element.frameBorder = '0';
                        element.title = this.frameTitle;
                        div = this.el.shadowRoot.querySelector('div');
                        if (!div) {
                            resolve();
                            return [2 /*return*/];
                        }
                        div.appendChild(element);
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoYoutube.prototype.formatSrc = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var videoId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findVideoId()];
                    case 1:
                        videoId = _a.sent();
                        if (videoId) {
                            // In such a case return a link which could be embedded
                            resolve('https://www.youtube.com/embed/' + videoId + '?enablejsapi=1');
                        }
                        else {
                            // Otherwise we try the provided url
                            resolve(this.src);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoYoutube.prototype.findVideoId = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var url = new URL(_this.src);
            var videoId = url.searchParams.get('v');
            if (!videoId) {
                var host = url.host;
                if (host === 'youtu.be') {
                    // For shortened url
                    var pathname = url.pathname;
                    if (pathname) {
                        var split = url.pathname.split('/');
                        if (split && split.length >= 2) {
                            videoId = url.pathname.split('/')[1];
                        }
                    }
                }
            }
            resolve(videoId);
        });
    };
    DeckdeckgoYoutube.prototype.play = function () {
        return this.playPauseVideo(true);
    };
    DeckdeckgoYoutube.prototype.pause = function () {
        return this.playPauseVideo(false);
    };
    DeckdeckgoYoutube.prototype.playPauseVideo = function (play) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var iframe;
            return __generator(this, function (_a) {
                iframe = this.el.shadowRoot.querySelector('iframe');
                if (!iframe) {
                    resolve();
                    return [2 /*return*/];
                }
                iframe.contentWindow.postMessage(JSON.stringify({
                    event: 'command',
                    func: play ? 'playVideo' : 'pauseVideo',
                    args: ''
                }), '*');
                resolve();
                return [2 /*return*/];
            });
        }); });
    };
    DeckdeckgoYoutube.prototype.render = function () {
        return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null);
    };
    Object.defineProperty(DeckdeckgoYoutube.prototype, "el", {
        get: function () { return Object(_chunk_e073be0a_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoYoutube, "watchers", {
        get: function () {
            return {
                "src": ["onSrcUpdate"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoYoutube, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoYoutube;
}());



/***/ })

}]);
//# sourceMappingURL=87.17212f5bc530075427ef.js.map