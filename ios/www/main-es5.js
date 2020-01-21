function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historydate/historydate.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historydate/historydate.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHistorydateHistorydatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <button (click)=\"dismiss()\">\n      <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n    </button>\n    <ion-title>history date</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let log of logs_array\">\n    <ion-card-content (click)=\"getdate(log)\"><p>{{log.date | date:'EEEE, LLLL MM, yyyy hh:mm a'}}</p></ion-card-content>\n  </ion-card>\n\n  <div *ngIf=\"logs_array.length==0\">\n    <ion-card>\n      <ion-card-content><p> No entries to display. Make an entry. </p></ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n</ion-footer>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-home-home-module */
        "pages-home-home-module").then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'entry',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-entry-entry-module */
        "pages-entry-entry-module").then(__webpack_require__.bind(null,
        /*! ./pages/entry/entry.module */
        "./src/app/pages/entry/entry.module.ts")).then(function (m) {
          return m.EntryPageModule;
        });
      }
    }, {
      path: 'history/entry',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-entry-entry-module */
        "pages-entry-entry-module").then(__webpack_require__.bind(null,
        /*! ./pages/entry/entry.module */
        "./src/app/pages/entry/entry.module.ts")).then(function (m) {
          return m.EntryPageModule;
        });
      }
    }, {
      path: 'history',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-history-history-module */
        [__webpack_require__.e("default~pages-history-history-module~pages-settings-setting-module"), __webpack_require__.e("pages-history-history-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/history/history.module */
        "./src/app/pages/history/history.module.ts")).then(function (m) {
          return m.HistoryPageModule;
        });
      }
    }, {
      path: 'setting',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-settings-setting-module */
        [__webpack_require__.e("default~pages-history-history-module~pages-settings-setting-module"), __webpack_require__.e("pages-settings-setting-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/settings/setting.module */
        "./src/app/pages/settings/setting.module.ts")).then(function (m) {
          return m.SettingPageModule;
        });
      }
    }, {
      path: 'history/setting',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-settings-setting-module */
        [__webpack_require__.e("default~pages-history-history-module~pages-settings-setting-module"), __webpack_require__.e("pages-settings-setting-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/settings/setting.module */
        "./src/app/pages/settings/setting.module.ts")).then(function (m) {
          return m.SettingPageModule;
        });
      }
    }, {
      path: 'e-camera',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-e-camera-e-camera-module */
        "pages-e-camera-e-camera-module").then(__webpack_require__.bind(null,
        /*! ./pages/e-camera/e-camera.module */
        "./src/app/pages/e-camera/e-camera.module.ts")).then(function (m) {
          return m.ECameraPageModule;
        });
      }
    }, {
      path: 'e-camera/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-e-camera-e-camera-module */
        "pages-e-camera-e-camera-module").then(__webpack_require__.bind(null,
        /*! ./pages/e-camera/e-camera.module */
        "./src/app/pages/e-camera/e-camera.module.ts")).then(function (m) {
          return m.ECameraPageModule;
        });
      }
    }, {
      path: 'e-url',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-e-url-e-url-module */
        "pages-e-url-e-url-module").then(__webpack_require__.bind(null,
        /*! ./pages/e-url/e-url.module */
        "./src/app/pages/e-url/e-url.module.ts")).then(function (m) {
          return m.EUrlPageModule;
        });
      }
    }, {
      path: 'e-url/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-e-url-e-url-module */
        "pages-e-url-e-url-module").then(__webpack_require__.bind(null,
        /*! ./pages/e-url/e-url.module */
        "./src/app/pages/e-url/e-url.module.ts")).then(function (m) {
          return m.EUrlPageModule;
        });
      }
    }, {
      path: 'e-voice',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-e-voice-e-voice-module */
        "pages-e-voice-e-voice-module").then(__webpack_require__.bind(null,
        /*! ./pages/e-voice/e-voice.module */
        "./src/app/pages/e-voice/e-voice.module.ts")).then(function (m) {
          return m.EVoicePageModule;
        });
      }
    }, {
      path: 'e-voice/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-e-voice-e-voice-module */
        "pages-e-voice-e-voice-module").then(__webpack_require__.bind(null,
        /*! ./pages/e-voice/e-voice.module */
        "./src/app/pages/e-voice/e-voice.module.ts")).then(function (m) {
          return m.EVoicePageModule;
        });
      }
    }, {
      path: 'e-search',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-e-search-e-search-module */
        "pages-e-search-e-search-module").then(__webpack_require__.bind(null,
        /*! ./pages/e-search/e-search.module */
        "./src/app/pages/e-search/e-search.module.ts")).then(function (m) {
          return m.ESearchPageModule;
        });
      }
    }, {
      path: 'e-search/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-e-search-e-search-module */
        "pages-e-search-e-search-module").then(__webpack_require__.bind(null,
        /*! ./pages/e-search/e-search.module */
        "./src/app/pages/e-search/e-search.module.ts")).then(function (m) {
          return m.ESearchPageModule;
        });
      }
    }, {
      path: 'e-description',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-e-description-e-description-module */
        "pages-e-description-e-description-module").then(__webpack_require__.bind(null,
        /*! ./pages/e-description/e-description.module */
        "./src/app/pages/e-description/e-description.module.ts")).then(function (m) {
          return m.EDescriptionPageModule;
        });
      }
    }, {
      path: 'e-description/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-e-description-e-description-module */
        "pages-e-description-e-description-module").then(__webpack_require__.bind(null,
        /*! ./pages/e-description/e-description.module */
        "./src/app/pages/e-description/e-description.module.ts")).then(function (m) {
          return m.EDescriptionPageModule;
        });
      }
    }, {
      path: 'e-barcode',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-e-barcode-e-barcode-module */
        "pages-e-barcode-e-barcode-module").then(__webpack_require__.bind(null,
        /*! ./pages/e-barcode/e-barcode.module */
        "./src/app/pages/e-barcode/e-barcode.module.ts")).then(function (m) {
          return m.EBarcodePageModule;
        });
      }
    }, {
      path: 'e-barcode/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-e-barcode-e-barcode-module */
        "pages-e-barcode-e-barcode-module").then(__webpack_require__.bind(null,
        /*! ./pages/e-barcode/e-barcode.module */
        "./src/app/pages/e-barcode/e-barcode.module.ts")).then(function (m) {
          return m.EBarcodePageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/speech-recognition/ngx */
    "./node_modules/@ionic-native/speech-recognition/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _pages_historydate_historydate_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/historydate/historydate.page */
    "./src/app/pages/historydate/historydate.page.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js"); // import {FooterBarComponent} from './footer-bar/footer-bar.component';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _pages_historydate_historydate_page__WEBPACK_IMPORTED_MODULE_17__["HistoryDatePage"]],
      entryComponents: [_pages_historydate_historydate_page__WEBPACK_IMPORTED_MODULE_17__["HistoryDatePage"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_16__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__["BarcodeScanner"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_15__["SpeechRecognition"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/model/card.ts":
  /*!*******************************!*\
    !*** ./src/app/model/card.ts ***!
    \*******************************/

  /*! exports provided: EntryCard */

  /***/
  function srcAppModelCardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntryCard", function () {
      return EntryCard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var EntryCard = function EntryCard(day, entries, platform, id) {
      _classCallCheck(this, EntryCard);

      this.date = new Date(day.seconds * 1000);
      this.entries = entries; //will be a list -> entry,modality

      this.platform = platform;
      this.docId = id;
    };
    /***/

  },

  /***/
  "./src/app/model/log.ts":
  /*!******************************!*\
    !*** ./src/app/model/log.ts ***!
    \******************************/

  /*! exports provided: LogData */

  /***/
  function srcAppModelLogTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogData", function () {
      return LogData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var LogData = function LogData() {
      _classCallCheck(this, LogData);
    };
    /***/

  },

  /***/
  "./src/app/pages/historydate/historydate.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/historydate/historydate.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHistorydateHistorydatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: rgb(246, 205, 96);\n  color: white;\n}\n\np {\n  color: white;\n}\n\nion-icon {\n  font-size: 3em;\n  color: white;\n}\n\nion-content {\n  --background: rgb(242, 168, 70);\n}\n\nion-card {\n  --background: #009979;\n}\n\nion-card-content {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2hpc3RvcnlkYXRlL2hpc3RvcnlkYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGlzdG9yeWRhdGUvaGlzdG9yeWRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRElBO0VBQ0ksK0JBQUE7QUNESjs7QURJQTtFQUVFLHFCQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yeWRhdGUvaGlzdG9yeWRhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5we1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDV2dztcbn1cblxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbn1cblxuaW9uLWNhcmR7XG4vLyAgY29sb3I6Ymx1ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5OTc5O1xufVxuXG5pb24tY2FyZC1jb250ZW50e1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnAge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogIzAwOTk3OTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/historydate/historydate.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/historydate/historydate.page.ts ***!
    \*******************************************************/

  /*! exports provided: HistoryDatePage */

  /***/
  function srcAppPagesHistorydateHistorydatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryDatePage", function () {
      return HistoryDatePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _model_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../model/card */
    "./src/app/model/card.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var HistoryDatePage =
    /*#__PURE__*/
    function () {
      function HistoryDatePage(router, logService, afs, modalController) {
        _classCallCheck(this, HistoryDatePage);

        this.router = router;
        this.logService = logService;
        this.afs = afs;
        this.modalController = modalController;
        this.calendar_date = new Date();
        this.pass_date = new Date();
        this.logs_array = new Array();
        this.logsCollection = this.afs.collection(this.logService.username, function (ref) {
          return ref.orderBy('date', 'asc');
        });
        this.logs_array = this.getentries();
      }

      _createClass(HistoryDatePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          //closes the modal
          this.modalController.dismiss(this.pass_date);
        }
      }, {
        key: "getentries",
        value: function getentries() {
          //collects all entries in the database
          var entry = [];
          var logs = this.logsCollection.snapshotChanges();
          logs.subscribe(function (array) {
            array.forEach(function (element) {
              var ele = element.payload.doc.data(); // checks the date

              var dates = new _model_card__WEBPACK_IMPORTED_MODULE_4__["EntryCard"](ele.date, ele.entries, ele.platform, element.payload.doc.id);
              entry.push(dates);
            });
          });
          return entry;
        }
      }, {
        key: "getdate",
        value: function getdate(log) {
          //gets the date of the clicked entry
          var x = new Date(log.date);
          this.pass_date = x;
          this.dismiss();
        }
      }]);

      return HistoryDatePage;
    }();

    HistoryDatePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    HistoryDatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-historydate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./historydate.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historydate/historydate.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./historydate.page.scss */
      "./src/app/pages/historydate/historydate.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], HistoryDatePage);
    /***/
  },

  /***/
  "./src/app/services/log.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/log.service.ts ***!
    \*****************************************/

  /*! exports provided: LogService */

  /***/
  function srcAppServicesLogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogService", function () {
      return LogService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/log */
    "./src/app/model/log.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");

    var LogService =
    /*#__PURE__*/
    function () {
      function LogService(afStorage, afs, loadingController) {
        _classCallCheck(this, LogService);

        this.afStorage = afStorage;
        this.afs = afs;
        this.loadingController = loadingController; // this.username = 'yhuai';

        this.data = new _model_log__WEBPACK_IMPORTED_MODULE_2__["LogData"]();
        this.data.date = new Date();
        this.data.entries = [];
        firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"]().signInAnonymously(); // console.log(firebase.auth());
      }

      _createClass(LogService, [{
        key: "clear",
        value: function clear() {
          this.data.date = new Date();
          this.data.entries = [];
        }
      }, {
        key: "setName",
        value: function setName(name) {
          this.username = name;
          this.logsCollection = this.afs.collection(this.username, function (ref) {
            return ref.orderBy('date', 'asc');
          });
        }
      }, {
        key: "setPlatform",
        value: function setPlatform(platform) {
          this.data.platform = platform;
        }
      }, {
        key: "addEntry",
        value: function addEntry(entry) {
          this.data.entries.push(entry);
        }
      }, {
        key: "remove",
        value: function remove(docId) {
          console.log(docId); // const collection = this.firedb.collection(this.col, ref => ref.orderBy('date', 'desc'));

          var tmpCol = this.afs.collection(this.username, function (ref) {
            return ref.orderBy('date', 'desc');
          });
          tmpCol.doc(docId)["delete"]();
          tmpCol.doc('--last--').get().toPromise().then(function (doc) {
            if (doc.data().id === docId) {
              // deleting last document
              var targetID = '';
              tmpCol.get().toPromise().then(function (snapshot) {
                snapshot.forEach(function (_doc) {
                  if (targetID === '' && _doc.id !== docId) {
                    targetID = _doc.id;
                    tmpCol.doc('--last--').set({
                      id: targetID
                    });
                  }
                });
              });
            }
          });
        }
      }, {
        key: "push",
        value: function push() {
          var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.username === '')) {
                      _context2.next = 3;
                      break;
                    }

                    console.log('Error: Need an username.');
                    return _context2.abrupt("return");

                  case 3:
                    _context2.next = 5;
                    return this.loadingController.create({
                      message: 'Please wait',
                      duration: 99999
                    });

                  case 5:
                    loading = _context2.sent;
                    loading.present();
                    this.logsCollection.add({
                      date: new Date(),
                      platform: this.data.platform,
                      contextLogged: false,
                      entries: []
                    }).then(function (doc) {
                      var docId = doc.id;

                      var update = _this2.logsCollection.doc('--last--').set({
                        id: docId
                      });

                      var promises = [update];
                      var fileCounter = 0;

                      _this2.data.entries.forEach(function (element) {
                        var obj = {};
                        var mod = element['modality'];
                        obj['modality'] = element['modality'];

                        if (element['entry'] === 'base64_img') {
                          var fileName = docId + '_' + fileCounter.toString();
                          fileCounter++;

                          var task = _this2.afStorage.ref(_this2.username + '/' + fileName).putString(element['data'], 'data_url');

                          fileCounter++;
                          var t = task.snapshotChanges().toPromise().then(function (state) {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee() {
                              var downloadURL;
                              return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      _context.next = 2;
                                      return this.afStorage.ref(this.username + '/' + fileName).getDownloadURL().toPromise();

                                    case 2:
                                      downloadURL = _context.sent;
                                      this.logsCollection.doc(docId).set(_defineProperty({}, 'entries', firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                                        modality: 'foodImg',
                                        entry: fileName,
                                        url: downloadURL
                                      })), {
                                        merge: true
                                      });

                                    case 4:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee, this);
                            }));
                          });
                          promises.push(t); // obj['entry'] = doc.id + '_' + fileCounter.toString();
                          // fileCounter++;
                          // this.afStorage.ref(this.username + '/' + obj['entry']).putString(element['data'], 'data_url');
                        } else {
                          // obj['entry'] = element['entry'];
                          // const mod = this.convertToModality(entries[i].title);
                          var _t = _this2.logsCollection.doc(docId).set(_defineProperty({}, 'entries', firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                            modality: mod,
                            entry: element['entry']
                          })), {
                            merge: true
                          });

                          promises.push(_t);
                        }
                      });

                      Promise.all(promises).then(function () {
                        loading.dismiss();

                        if (callback) {
                          callback();
                        }
                      });
                    });

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return LogService;
    }();

    LogService.ctorParameters = function () {
      return [{
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }];
    };

    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])], LogService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyAblxF7GcUGxUlxaDHh-13bzeHJ-6ucw_4",
        authDomain: "food-journal-6d639.firebaseapp.com",
        databaseURL: "https://food-journal-6d639.firebaseio.com",
        projectId: "food-journal-6d639",
        storageBucket: "food-journal-6d639.appspot.com",
        messagingSenderId: "800956425653"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/yuqihuai/Documents/GitHub/multimodal-food-apps/mobile v2/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map