function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-history-history-module~pages-settings-setting-module"], {
  /***/
  "./node_modules/@fivethree/core/fesm2015/fivethree-core.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@fivethree/core/fesm2015/fivethree-core.js ***!
    \*****************************************************************/

  /*! exports provided: CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, DrawerState, FabState, FivAppBar, FivAppBarModule, FivAppBarTab, FivBackButton, FivBackButtonModule, FivBottomSheet, FivBottomSheetContent, FivBottomSheetModule, FivButton, FivButtonModule, FivCenterModule, FivCollapsableMenuButton, FivCollapsableModule, FivDialog, FivDialogModule, FivDialogService, FivEditableLabel, FivEditableLabelModule, FivExpandable, FivExpandableIndicator, FivExpandableModule, FivFab, FivFabModule, FivFeature, FivFeatureDiscovery, FivFeatureDiscoveryModule, FivGallery, FivGalleryImage, FivGalleryModule, FivIconModule, FivIfModule, FivLazyImage, FivLazyImageModule, FivLoadingProgressBar, FivLoadingProgressBarModule, FivLoadingService, FivNetworkStatus, FivNetworkStatusModule, FivOverflowButtons, FivOverflowButtonsModule, FivOverlay, FivOverlayModule, FivOverlayService, FivPasswordInput, FivPasswordInputModule, FivPermissionsModule, FivPopoverModule, FivPullModule, FivRefresher, FivRefresherModule, FivRouterItem, FivRouterItemModule, FivRoutingStateService, FivSearchbar, FivSearchbarModule, FivSpinnerModule, FivStep, FivStepContent, FivStepHeader, FivStepper, FivStepperHorizontal, FivStepperModule, FivViewportModule, ImageService, Position, isNavigateable, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp */

  /***/
  function node_modulesFivethreeCoreFesm2015FivethreeCoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR", function () {
      return CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function () {
      return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrawerState", function () {
      return DrawerState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FabState", function () {
      return FabState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivAppBar", function () {
      return FivAppBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivAppBarModule", function () {
      return FivAppBarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivAppBarTab", function () {
      return FivAppBarTab;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivBackButton", function () {
      return FivBackButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivBackButtonModule", function () {
      return FivBackButtonModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivBottomSheet", function () {
      return FivBottomSheet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivBottomSheetContent", function () {
      return FivBottomSheetContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivBottomSheetModule", function () {
      return FivBottomSheetModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivButton", function () {
      return FivButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivButtonModule", function () {
      return FivButtonModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivCenterModule", function () {
      return FivCenterModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivCollapsableMenuButton", function () {
      return FivCollapsableMenuButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivCollapsableModule", function () {
      return FivCollapsableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivDialog", function () {
      return FivDialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivDialogModule", function () {
      return FivDialogModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivDialogService", function () {
      return FivDialogService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivEditableLabel", function () {
      return FivEditableLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivEditableLabelModule", function () {
      return FivEditableLabelModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivExpandable", function () {
      return FivExpandable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivExpandableIndicator", function () {
      return FivExpandableIndicator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivExpandableModule", function () {
      return FivExpandableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivFab", function () {
      return FivFab;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivFabModule", function () {
      return FivFabModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivFeature", function () {
      return FivFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivFeatureDiscovery", function () {
      return FivFeatureDiscovery;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivFeatureDiscoveryModule", function () {
      return FivFeatureDiscoveryModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivGallery", function () {
      return FivGallery;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivGalleryImage", function () {
      return FivGalleryImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivGalleryModule", function () {
      return FivGalleryModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivIconModule", function () {
      return FivIconModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivIfModule", function () {
      return FivIfModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivLazyImage", function () {
      return FivLazyImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivLazyImageModule", function () {
      return FivLazyImageModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivLoadingProgressBar", function () {
      return FivLoadingProgressBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivLoadingProgressBarModule", function () {
      return FivLoadingProgressBarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivLoadingService", function () {
      return FivLoadingService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivNetworkStatus", function () {
      return FivNetworkStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivNetworkStatusModule", function () {
      return FivNetworkStatusModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivOverflowButtons", function () {
      return FivOverflowButtons;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivOverflowButtonsModule", function () {
      return FivOverflowButtonsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivOverlay", function () {
      return FivOverlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivOverlayModule", function () {
      return FivOverlayModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivOverlayService", function () {
      return FivOverlayService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivPasswordInput", function () {
      return FivPasswordInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivPasswordInputModule", function () {
      return FivPasswordInputModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivPermissionsModule", function () {
      return FivPermissionsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivPopoverModule", function () {
      return FivPopoverModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivPullModule", function () {
      return FivPullModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivRefresher", function () {
      return FivRefresher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivRefresherModule", function () {
      return FivRefresherModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivRouterItem", function () {
      return FivRouterItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivRouterItemModule", function () {
      return FivRouterItemModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivRoutingStateService", function () {
      return FivRoutingStateService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivSearchbar", function () {
      return FivSearchbar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivSearchbarModule", function () {
      return FivSearchbarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivSpinnerModule", function () {
      return FivSpinnerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivStep", function () {
      return FivStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivStepContent", function () {
      return FivStepContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivStepHeader", function () {
      return FivStepHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivStepper", function () {
      return FivStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivStepperHorizontal", function () {
      return FivStepperHorizontal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivStepperModule", function () {
      return FivStepperModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivViewportModule", function () {
      return FivViewportModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageService", function () {
      return ImageService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Position", function () {
      return Position;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isNavigateable", function () {
      return isNavigateable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return FivAppBarFabDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return FivIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return FivCenter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return FivSpinner;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return FivCollapsableMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return FivOverlayContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return FivPull;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return fade;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return FivGalleryToolbar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return FivGalleryToolbarContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return FivIfPlatform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return FivRefresherContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return FivPopover;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return PopoverElementDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return FivPermissions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return FivViewport;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @fivethree/ngx-rxjs-animations */
    "./node_modules/@fivethree/ngx-rxjs-animations/fesm2015/fivethree-ngx-rxjs-animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/icon/icon.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivIcon =
    /*#__PURE__*/
    function () {
      function FivIcon() {
        _classCallCheck(this, FivIcon);

        this._badge = 0;
        this.state = 'normal';
        this.off = false;
        this.transitionDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.indicatorState = 'scale';
        this.badgeState = 'scale';
      }
      /**
       * @return {?}
       */


      _createClass(FivIcon, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
        /**
         * @param {?} name
         * @return {?}
         */

      }, {
        key: "transform",
        value: function transform(name) {
          this.temp = name;
          this.state = 'rotate';
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "transformIndicator",
        value: function transformIndicator(value) {
          if (this.dotVisible) {
            this._badge = value;
            return;
          }

          if (value === 0) {
            this._badge = value;
            this.indicatorState = 'normal';
            this.badgeState = 'scale';
          } else {
            this.indicatorState = 'scale';

            if (this.badgeState === 'scale') {
              this.badgeState = 'normal';
              this._badge = value;
            } else {
              this.tempValue = value;
              this.badgeState = 'scale';
            }
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "rotateAnimDone",
        value: function rotateAnimDone(event) {
          if (event.fromState === 'normal' && event.toState === 'rotate') {
            this._name = this.temp;
            this.state = 'normal';
          }

          if (event.fromState === 'rotate' && event.toState === 'normal') {
            this.transitionDone.emit(this._name);
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "incrementDone",
        value: function incrementDone(event) {
          if (event.fromState === 'normal' && event.toState === 'scale') {
            if (this.tempValue > 0) {
              this.badgeState = 'normal';
              this._badge = this.tempValue;
            } else {
              this._badge = this.tempValue;
            }
          }
        }
      }, {
        key: "name",
        get: function get() {
          return this._name;
        }
        /**
         * @param {?} name
         * @return {?}
         */
        ,
        set: function set(name) {
          if (this._name) {
            this.transform(name);
          } else {
            this._name = name;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "badge",
        get: function get() {
          return this._badge;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.transformIndicator(value);
        }
        /**
         * @param {?} dotVisible
         * @return {?}
         */

      }, {
        key: "dotVisible",
        set: function set(dotVisible) {
          this._dotVisible = dotVisible;

          if (dotVisible) {
            this.indicatorState = 'normal';
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._dotVisible;
        }
      }]);

      return FivIcon;
    }();

    FivIcon.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-icon',
        template: "<ion-icon [slot]=\"slot\" [@rotateAnim]=\"state\" (@rotateAnim.done)=\"rotateAnimDone($event)\" [name]=\"_name\"\n    [color]=\"color\"></ion-icon>\n<span [@scaleAnim]=\"indicatorState\" *ngIf=\"dotVisible\" class=\"indicator\"></span>\n<span *ngIf=\"_badge > 0 || dotVisible\" class=\"indicator-background\"></span>\n<span class=\"off-background\" *ngIf=\"off\"></span>\n<span class=\"off\" *ngIf=\"off\"></span>\n<span *ngIf=\"smallIcon && badge == 0 && !dotVisible\" class=\"indicator-icon\">\n    <ion-icon [color]=\"color\" slot=\"icon-only\" [name]=\"smallIcon\"></ion-icon>\n</span>\n<span *ngIf=\"badge > 0 && !dotVisible\" [@scaleAnim]=\"badgeState\" (@scaleAnim.done)=\"incrementDone($event)\"\n    class=\"indicator-value\">\n    <span *ngIf=\"badge <= 9\">{{badge}}</span>\n    <span *ngIf=\"badge > 9\">9+</span>\n</span>",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => rotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotate => normal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '0',
          transform: 'scale(0) rotateZ(45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '1',
          transform: 'scale(1) rotateZ(0deg)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scaleAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => normal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '0',
          transform: 'scale(0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '1',
          transform: 'scale(1)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => scale', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('scale => normal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('scale', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '0',
          transform: 'scale(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '1',
          transform: 'scale(1)'
        }))])],
        styles: [":host{--fiv-padding-end:0;--fiv-padding-start:0;--fiv-dot-right:-6px;--fiv-dot-top:-2px;--fiv-color-icon:inherit;--fiv-icon-height:inherit;--fiv-icon-width:inherit;position:relative;display:inline-block}ion-icon{margin:0;font-size:1.8em;color:var(--fiv-color-icon);padding-right:var(--fiv-padding-end);padding-left:var(--fiv-padding-start);height:var(--fiv-icon-height,28px);width:var(--fiv-icon-width,28px)}.indicator{position:absolute;width:var(--fiv-dot-width,8px);height:var(--fiv-dot-height,8px);background-color:var(--fiv-dot-color,var(--fiv-color-indicator,--ion-color-primary));top:calc(var(--fiv-dot-top,0px) + 3px);border-radius:100%;right:calc(var(--fiv-dot-right,4px) + 3px);z-index:12}.indicator-value{position:absolute;min-width:var(--fiv-dot-width,14px);height:var(--fiv-dot-height,14px);background-color:var(--fiv-dot-color,var(--ion-color-primary));color:var(--fiv-dot-color-background,var(--ion-color-light));top:var(--fiv-dot-top,0);border-radius:14px;right:var(--fiv-dot-right,4px);z-index:13}.indicator-value *{position:absolute;transform:translateX(-50%) translateY(-50%);left:50%;top:50%;font-size:.6em}.indicator-icon{position:absolute;min-width:var(--fiv-dot-width,14px);height:var(--fiv-dot-height,14px);background-color:var(--fiv-dot-color-background,#fff);top:0;border-radius:14px;right:0;z-index:13}.indicator-icon *{position:absolute;transform:translateX(-50%) translateY(-50%);left:50%;top:50%;font-size:1em}.indicator-background{position:absolute;width:var(--fiv-dot-width,18px);height:var(--fiv-dot-height,18px);background-color:var(--fiv-dot-color-background,var(--ion-color-light));top:calc(var(--fiv-dot-top,0px) - 2px);border-radius:100%;right:calc(var(--fiv-dot-right,4px) - 2px);z-index:11}.off{width:120%;height:2px;background:var(--fiv-color-icon);position:absolute;left:0;transform:rotateZ(45deg) translateY(10px) translateX(6px)}.off-background{width:120%;height:2px;background:#000;position:absolute;background-color:var(--fiv-dot-color-background,var(--ion-color-light));left:2px;transform:rotateZ(45deg) translateY(10px) translateX(6px)}"]
      }]
    }];
    /** @nocollapse */

    FivIcon.ctorParameters = function () {
      return [];
    };

    FivIcon.propDecorators = {
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slot: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      smallIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      off: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      transitionDone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      badge: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dotVisible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/icon/icon.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivIconModule = function FivIconModule() {
      _classCallCheck(this, FivIconModule);
    };

    FivIconModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivIcon],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [FivIcon]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/feature-discovery/feature-discovery.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivFeatureDiscovery =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} renderer
       * @param {?} platform
       */
      function FivFeatureDiscovery(renderer, platform) {
        _classCallCheck(this, FivFeatureDiscovery);

        this.renderer = renderer;
        this.platform = platform;
        this.top = 0;
        this.left = 0;
        this.width = 420;
        this.height = 420;
        this.innerDiameter = 0;
        this.featurePadding = 0;
        this.contentTop = 0;
        this.contentLeft = 0;
        this.contentWidth = 0;
        this.contentHeight = 0;
        this.contentOffset = 0;
        this.animationState = 'hidden';
        this.pulse = 'small';
        this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivBackdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivAnimation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(FivFeatureDiscovery, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {}
        /**
         * @param {?} bounds
         * @return {?}
         */

      }, {
        key: "setBounds",
        value: function setBounds(bounds) {
          this.bounds = bounds;
          this.innerDiameter = bounds.height > bounds.width ? bounds.height : bounds.width;
          this.top = bounds.top + bounds.height / 2 - this.height / 2;
          this.left = bounds.left + bounds.width / 2 - this.width / 2;
          this.calculateContentBounds();

          if (!this.icon) {
            /** @type {?} */
            var gradient = "-webkit-radial-gradient(transparent ".concat(this.innerDiameter / 2 + 5, "px, var(--fiv-color-feature) ").concat(this.innerDiameter / 2 + 5, "px)");
            /** @type {?} */

            var pulseGradient = "-webkit-radial-gradient(transparent ".concat(this.innerDiameter / 2 + 5, "px, var(--fiv-color-pulse) ").concat(this.innerDiameter / 2 + 5, "px)");
            this.renderer.setStyle(this.circle.nativeElement, 'background', gradient);
            this.renderer.setStyle(this.innerPulse.nativeElement, 'background', pulseGradient);
            this.renderer.setStyle(this.outerPulse.nativeElement, 'background', pulseGradient);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "calculateContentBounds",
        value: function calculateContentBounds() {
          /** @type {?} */
          var absoluteCenter = {
            x: this.platform.width() / 2,
            y: this.platform.height() / 2
          };
          /** @type {?} */

          var center = {
            x: this.left + this.width / 2,
            y: this.top + this.width / 2
          };
          /** @type {?} */

          var rectWidth = Math.sqrt(Math.pow(this.width, 2) / 2);
          /** @type {?} */

          var isTop = center.y < absoluteCenter.y;
          /** @type {?} */

          var isLeft = center.x < absoluteCenter.x;
          /** @type {?} */

          var innerRadius = this.innerDiameter / 2;
          /** @type {?} */

          var padding = this.featurePadding / 2;
          /** @type {?} */

          var contentRight = 0;
          /** @type {?} */

          var contentBottom = 0;

          if (isLeft) {
            this.contentLeft = center.x - innerRadius;
            contentRight = Math.min(center.x + rectWidth / 2 + this.contentOffset, this.platform.width());
          } else {
            this.contentLeft = Math.max(center.x - rectWidth / 2 - this.contentOffset, 0);
            contentRight = center.x + innerRadius;
          }

          if (isTop) {
            this.contentTop = center.y + innerRadius + padding;
            contentBottom = center.y + rectWidth / 2 + -1 * this.contentOffset;
          } else {
            this.contentTop = center.y - rectWidth / 2 + this.contentOffset;
            contentBottom = center.y - innerRadius - padding;
          }

          this.contentWidth = Math.abs(this.contentLeft - contentRight);
          this.contentHeight = Math.abs(this.contentTop - contentBottom);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "handleCircleAnimation",
        value: function handleCircleAnimation(event) {
          this.fivAnimation.emit(event);

          if (event.toState === 'visible') {
            this.fivOpen.emit();
          }

          if (event.fromState === 'visible' && event.toState === 'hidden') {
            this.fivClose.emit();
          }

          if (event.fromState === 'visible' && event.toState === 'execute') {
            this.fivClose.emit();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          this.animationState = 'visible';
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          this.animationState = 'hidden';
        }
        /**
         * @return {?}
         */

      }, {
        key: "featureClick",
        value: function featureClick() {
          this.animationState = 'execute';
        }
        /**
         * @param {?} icon
         * @return {?}
         */

      }, {
        key: "setIcon",
        value: function setIcon(icon) {
          if (icon) {
            this.icon = icon.name;
          }
        }
      }]);

      return FivFeatureDiscovery;
    }();

    FivFeatureDiscovery.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-feature-discovery',
        template: "<div class=\"backdrop\" (click)=\"fivBackdropClick.emit()\"></div>\n<div [@scale]=\"animationState\" (@scale.done)=\"handleCircleAnimation($event)\" #circle class=\"circle\"\n  [style.height]=\"height + 'px'\" [style.width]=\"width + 'px'\" [style.top]=\"top + 'px'\" [style.left]=\"left + 'px'\">\n  <div #pOuter class=\"feature center pulse\" [style.height]=\"(innerDiameter + featurePadding) + 'px'\"\n    [style.width]=\"(innerDiameter + featurePadding) + 'px'\">\n  </div>\n  <div #pInner class=\"feature center inner  ion-activatable\" (click)=\"fivClick.emit()\"\n    [style.height]=\"(innerDiameter + (icon ? featurePadding : 0)) + 'px'\"\n    [style.width]=\"(innerDiameter + (icon ? featurePadding : 0)) + 'px'\">\n    <fiv-icon class=\"center\" *ngIf=\"icon\" [name]=\"icon\"></fiv-icon>\n    <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n  </div>\n</div>\n<div class=\"content\" *ngIf=\"animationState === 'visible'\" [@contentAnim] [style.width]=\"contentWidth + 'px'\"\n  [style.height]=\"contentHeight + 'px'\" [style.top]=\"contentTop + 'px'\" [style.left]=\"contentLeft + 'px'\">\n  <ng-content></ng-content>\n</div>",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scale', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(0)',
          opacity: '0'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('240ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1)',
          opacity: '1'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1)',
          opacity: '1'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('215ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(0)',
          opacity: '0'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => execute', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1)',
          opacity: '1'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('215ms 0.15s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1.4)',
          opacity: '0'
        }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('contentAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '0'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms 240ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '1'
        }))])])],
        styles: [":host{display:block;height:100vh;width:100vw;position:absolute;--fiv-color-feature:rgba(56, 128, 255, 0.97);--fiv-color-pulse:var(--ion-color-light);--fiv-color-icon:var(--fiv-color-feature, var(--ion-color-primary))}.backdrop{display:block;height:100vh;width:100vw;position:absolute}.circle{position:absolute;border-radius:100%;background:var(--fiv-color-feature);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.feature{border-radius:100%;background:var(--fiv-color-pulse)}.feature.center.pulse{-webkit-animation:1.4s infinite shadow-pulse;animation:1.4s infinite shadow-pulse}@-webkit-keyframes shadow-pulse{0%{transform:scale(1) translate(-50%,-50%);border-radius:100%;box-shadow:0 0 0 0 rgba(0,0,0,.24)}50%{transform:scale(1.1) translate(-45%,-45%)}100%{transform:scale(1) translate(-50%,-50%);border-radius:100%;box-shadow:0 0 0 28px transparent}}@keyframes shadow-pulse{0%{transform:scale(1) translate(-50%,-50%);border-radius:100%;box-shadow:0 0 0 0 rgba(0,0,0,.24)}50%{transform:scale(1.1) translate(-45%,-45%)}100%{transform:scale(1) translate(-50%,-50%);border-radius:100%;box-shadow:0 0 0 28px transparent}}.content{position:absolute}.center{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"]
      }]
    }];
    /** @nocollapse */

    FivFeatureDiscovery.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    FivFeatureDiscovery.propDecorators = {
      circle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['circle', {
          "static": false
        }]
      }],
      rect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['rect', {
          "static": false
        }]
      }],
      innerPulse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['pInner', {
          "static": false,
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }]
      }],
      outerPulse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['pOuter', {
          "static": false
        }]
      }],
      fivClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivBackdropClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivAnimation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/loading-progress-bar/loading.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivLoadingService =
    /*#__PURE__*/
    function () {
      function FivLoadingService() {
        _classCallCheck(this, FivLoadingService);

        this.loading = false;
        this.isComplete = false;
        this.loadChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.loading);
        this.completeChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.isComplete);
      }
      /**
       * @return {?}
       */


      _createClass(FivLoadingService, [{
        key: "load",
        value: function load() {
          this.loading = true;
          this.loadChange.next(this.loading);
        }
        /**
         * @return {?}
         */

      }, {
        key: "unload",
        value: function unload() {
          this.loading = false;
          this.loadChange.next(this.loading);
          this.isComplete = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "toggleSpinner",
        value: function toggleSpinner() {
          this.loading = !this.loading;
        }
        /**
         * @return {?}
         */

      }, {
        key: "complete",
        value: function complete() {
          this.isComplete = true;
          this.completeChange.next(this.isComplete);
        }
      }]);

      return FivLoadingService;
    }();

    FivLoadingService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FivLoadingService.ctorParameters = function () {
      return [];
    };
    /** @nocollapse */


    FivLoadingService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FivLoadingService_Factory() {
        return new FivLoadingService();
      },
      token: FivLoadingService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/loading-progress-bar/loading-progress-bar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivLoadingProgressBar =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} loadingService
       * @param {?} builder
       */
      function FivLoadingProgressBar(loadingService, builder) {
        _classCallCheck(this, FivLoadingProgressBar);

        this.loadingService = loadingService;
        this.builder = builder;
        this.loading = false;
        this.global = false;
        this.isComplete = false;
        this.progress = 0;
        this.verticalAlign = 'top';
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDoneShrinking = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.animating = false;
      }
      /**
       * @return {?}
       */


      _createClass(FivLoadingProgressBar, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.global) {
            this.loadingService.completeChange.subscribe(
            /**
            * @param {?} isComplete
            * @return {?}
            */
            function (isComplete) {
              if (isComplete) {
                _this.complete(null);
              }
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.global) {
            this.loadingService.completeChange.unsubscribe();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "toggleSpinner",
        value: function toggleSpinner() {
          this.loading = !this.loading;
        }
        /**
         * @return {?}
         */

      }, {
        key: "load",
        value: function load() {
          this.loading = true;
          this.fivRefresh.emit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "unload",
        value: function unload() {
          this.loading = false;

          if (this.isComplete) {
            this.isComplete = false;
          }
        }
        /**
         * @param {?=} param
         * @return {?}
         */

      }, {
        key: "complete",
        value: function complete(param) {
          this.param = param;
          this.isComplete = true;
          this.fillIn(850);
        }
        /**
         * @param {?} isComplete
         * @return {?}
         */

      }, {
        key: "fillAnimationComplete",
        value: function fillAnimationComplete(isComplete) {
          if (isComplete) {
            this.fivComplete.emit(this.param);
            this.isComplete = false;
            this.param = null;

            if (this.global) {
              this.loadingService.unload();
            } else {
              this.unload();
            }
          }
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "setProgress",
        value: function setProgress(progress) {
          if (progress < 0) {
            this.progress = 0;
            return;
          }

          if (progress > 100) {
            this.progress = 100;
            return;
          }

          this.progress = progress;
        }
        /**
         * @param {?} ms
         * @return {?}
         */

      }, {
        key: "fillIn",
        value: function fillIn(ms) {
          var _this2 = this;

          // first define a reusable animation
          this.progress = 0;
          /** @type {?} */

          var myAnimation = this.builder.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            width: "".concat(this.progress, "%")
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(ms, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            width: '100%'
          }))]); // use the returned factory object to create a player

          /** @type {?} */

          var player = myAnimation.create(this.linear.nativeElement);
          /** @type {?} */

          var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, ms / 100).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this2.progress <= 0) {
              return t.unsubscribe();
            }

            _this2.progress++;
          });
          player.play();
          player.onDone(
          /**
          * @return {?}
          */
          function () {
            if (_this2.animating) {
              _this2.fillAnimationComplete(true);

              _this2.stopProgressAnimation();
            }
          });
          this.stopProgressAnimation();
          this.animating = true;
          this._progressPlayer = player;
        }
        /**
         * @param {?} ms
         * @return {?}
         */

      }, {
        key: "shrinkIn",
        value: function shrinkIn(ms) {
          var _this3 = this;

          // first define a reusable animation
          this.progress = 100;
          /** @type {?} */

          var myAnimation = this.builder.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            width: "".concat(this.progress, "%")
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(ms, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            width: 0
          }))]); // use the returned factory object to create a player

          /** @type {?} */

          var player = myAnimation.create(this.linear.nativeElement);
          /** @type {?} */

          var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, ms / 100).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this3.progress <= 0) {
              return t.unsubscribe();
            }

            _this3.progress--;
          });
          player.play();
          player.onDone(
          /**
          * @return {?}
          */
          function () {
            if (_this3.animating) {
              _this3.fivDoneShrinking.emit(true);

              _this3.stopProgressAnimation();
            }
          });
          this.stopProgressAnimation();
          this.animating = true;
          this._progressPlayer = player;
        }
        /**
         * @return {?}
         */

      }, {
        key: "stopProgressAnimation",
        value: function stopProgressAnimation() {
          if (this._progressPlayer) {
            this._progressPlayer.destroy();

            this._progressPlayer = null;
            this.animating = false;
          }
        }
      }]);

      return FivLoadingProgressBar;
    }();

    FivLoadingProgressBar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-loading-progress-bar',
        template: "<div [@progressAnim] *ngIf=\"(!global && loading) || (global && loadingService.loading)\" class=\"slider\" [ngClass]=\"{'top':verticalAlign == 'top','bottom': verticalAlign == 'bottom'}\" >\n  <div class=\"line\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline inc\"></div>\n  <!-- <div *ngIf=\"isComplete\" [@fillAnim] (@fillAnim.done)=\"fillAnimationComplete(isComplete)\" class=\"subline fill\"></div> -->\n  <div *ngIf=\"!isComplete\" class=\"subline dec\"></div>\n</div>\n<div #linear [@progressAnimLinear] class=\"progress\"  [ngClass]=\"{'top':verticalAlign == 'top','bottom': verticalAlign == 'bottom'}\" ></div>\n",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('progressAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '0px'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('299ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '0px'
        }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('progressAnimLinear', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '0px'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('65ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('299ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '0px'
        }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fillAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: '0px'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('850ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: '100%'
        }))])])],
        styles: [":host{--background-progress-bar:var(--ion-color-primary);--background-progress:var(--ion-color-primary-shade);--color-spin-0:var(--background-progress);--color-spin-25:var(--background-progress);--color-spin-50:var(--background-progress);--color-spin-75:var(--background-progress);--color-spin-100:var(--background-progress)}.slider{position:absolute;width:100%;height:5px;overflow-x:hidden;z-index:5000}.progress{position:absolute;height:5px;width:0;overflow-x:hidden;z-index:5000;background:var(--background-progress-bar);transition:240ms}.line{position:absolute;opacity:.4;width:240%;height:5px;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}.subline{position:absolute;height:5px;background:inherit}.inc{-webkit-animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin;animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin}.dec{-webkit-animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin;animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin}.fill{left:0;width:100%;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}@-webkit-keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@-webkit-keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@-webkit-keyframes colorspin{0%{background-color:var(--color-spin-0)}25%{background-color:var(--color-spin-25)}50%{background-color:var(--color-spin-50)}75%{background-color:var(--color-spin-75)}100%{background-color:var(--color-spin-100)}}@keyframes colorspin{0%{background-color:var(--color-spin-0)}25%{background-color:var(--color-spin-25)}50%{background-color:var(--color-spin-50)}75%{background-color:var(--color-spin-75)}100%{background-color:var(--color-spin-100)}}.top{top:0;left:0}.bottom{bottom:0;left:0}"]
      }]
    }];
    /** @nocollapse */

    FivLoadingProgressBar.ctorParameters = function () {
      return [{
        type: FivLoadingService
      }, {
        type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"]
      }];
    };

    FivLoadingProgressBar.propDecorators = {
      loading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      global: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isComplete: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      verticalAlign: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivComplete: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivDoneShrinking: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivRefresh: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      bar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['bar', {
          "static": false
        }]
      }],
      linear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['linear', {
          "static": false
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/spinner/spinner.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var BASE_SIZE = 100;

    var FivSpinner =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _document
       * @param {?} _elementRef
       * @param {?} change
       * @param {?} builder
       * @param {?} sanitizer
       */
      function FivSpinner(_document, _elementRef, change, builder, sanitizer) {
        _classCallCheck(this, FivSpinner);

        this._document = _document;
        this._elementRef = _elementRef;
        this.change = change;
        this.builder = builder;
        this.sanitizer = sanitizer;
        this._diameter = BASE_SIZE;
        this._strokeWidth = 10;
        this._value = 0;
        this.fivProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mode = 'indeterminate';
        this.circleRadius = 45;
        this._color = 'var(--fiv-spin-color)';
      }
      /**
       * @return {?}
       */


      _createClass(FivSpinner, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "_attachStyleNode",

        /**
         * Dynamically generates a style tag containing the correct animation for this diameter.
         * @private
         * @return {?}
         */
        value: function _attachStyleNode() {
          /** @type {?} */
          var styleTag = FivSpinner.styleTag;

          if (!styleTag) {
            styleTag = this._document.createElement('style');

            this._document.head.appendChild(styleTag);

            FivSpinner.styleTag = styleTag;
          }

          if (styleTag && styleTag.sheet) {
            /** @type {?} */
            styleTag.sheet.insertRule(this._getAnimationText(), 0);
          }

          FivSpinner.diameters.add(this.diameter);
        }
        /**
         * Generates animation styles adjusted for the spinner's diameter.
         * @private
         * @return {?}
         */

      }, {
        key: "_getAnimationText",
        value: function _getAnimationText() {
          /** @type {?} */
          var INDETERMINATE_ANIMATION_TEMPLATE = "\n    @keyframes fiv-progress-spinner-stroke-rotate-DIAMETER {\n       0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n       12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n       12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n       25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n       25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n       37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n       37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n       50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n       50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n       62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n       62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n       75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n       75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n       87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n       87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n       100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n     }\n   ";
          return INDETERMINATE_ANIMATION_TEMPLATE // Animation should begin at 5% and end at 80%
          .replace(/START_VALUE/g, "".concat(0.95 * this.strokeCircumference)).replace(/END_VALUE/g, "".concat(0.2 * this.strokeCircumference)).replace(/DIAMETER/g, "".concat(this.diameter));
        }
        /**
         * @param {?} duration
         * @return {?}
         */

      }, {
        key: "completeIn",
        value: function completeIn(duration) {
          var _this4 = this;

          this.mode = 'determinate';
          this.change.detectChanges();
          /** @type {?} */

          var animation = this.builder.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            'stroke-dasharray': 180,
            'stroke-dashoffset': 90,
            transformOrigin: 'center',
            stroke: 'var(--fiv-spin-color)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(duration, "ms ease-out"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            'stroke-dasharray': 315,
            'stroke-dashoffset': 0,
            transformOrigin: 'center',
            stroke: 'var(--fiv-spin-color)',
            opacity: 0
          }))]);
          /** @type {?} */

          var player = animation.create(this.determinateCircle.nativeElement);
          player.play();
          player.onDone(
          /**
          * @return {?}
          */
          function () {
            _this4.fivComplete.emit(_this4);

            _this4._value = 0;
          });
          /** @type {?} */

          var i = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(duration / 100);
          /** @type {?} */

          var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(duration + duration / 50);
          /** @type {?} */

          var progress = i.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(t));
          progress.subscribe(
          /**
          * @param {?} p
          * @return {?}
          */
          function (p) {
            _this4.fivProgress.emit(p);
          });
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(progress) {
          this.mode = 'determinate';
          this._value = progress;
          this.change.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "spin",
        value: function spin() {
          this.mode = 'indeterminate';
          this.change.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "stop",
        value: function stop() {
          this._value = 0;
          this.change.detectChanges();
        }
        /**
         * @param {?} mode
         * @return {?}
         */

      }, {
        key: "setMode",
        value: function setMode(mode) {
          this.mode = mode;
          this.change.detectChanges();
        }
      }, {
        key: "class",
        get: function get() {
          return this.mode + ' fiv-spinner fiv-progress-spinner fiv-progress-spinner-indeterminate-animation';
        }
      }, {
        key: "viewBox",
        get: function get() {
          /** @type {?} */
          var viewBox = this.circleRadius * 2 + this.strokeWidth;
          return "0 0 ".concat(viewBox, " ").concat(viewBox);
        }
        /**
         * The stroke circumference of the svg circle.
         * @return {?}
         */

      }, {
        key: "strokeCircumference",
        get: function get() {
          return 2 * Math.PI * this.circleRadius;
        }
        /**
         * The dash offset of the svg circle.
         * @return {?}
         */

      }, {
        key: "strokeDashOffset",
        get: function get() {
          if (this.mode === 'determinate') {
            return this.strokeCircumference * (100 - this._value) / 100;
          }

          return null;
        }
        /**
         * Stroke width of the circle in percent.
         * @return {?}
         */

      }, {
        key: "circleStrokeWidth",
        get: function get() {
          return this.strokeWidth / this.diameter * 100;
        }
        /**
         * Value of the progress circle.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this.mode === 'determinate' ? this._value : 0;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          this._value = Math.max(0, Math.min(100, newValue));
        }
        /**
         * @return {?}
         */

      }, {
        key: "diameter",
        get: function get() {
          return this._diameter;
        }
        /**
         * @param {?} size
         * @return {?}
         */
        ,
        set: function set(size) {
          this._diameter = size;

          if (!FivSpinner.diameters.has(this._diameter)) {
            this._attachStyleNode();
          }
        }
        /**
         * Stroke width of the progress spinner.
         * @return {?}
         */

      }, {
        key: "strokeWidth",
        get: function get() {
          return this._strokeWidth || this.diameter / 10;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._strokeWidth = value;
        }
      }]);

      return FivSpinner;
    }();

    FivSpinner.diameters = new Set([BASE_SIZE]);
    FivSpinner.styleTag = null;
    FivSpinner.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-spinner',
        template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"viewBox\"\n  preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" [ngSwitch]=\"mode == 'indeterminate'\">\n  <circle [attr.stroke]=\"_color\" *ngSwitchCase=\"true\" cx=\"50%\" cy=\"50%\" [attr.r]=\"circleRadius\"\n    [style.animation-name]=\"'fiv-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"strokeDashOffset\" [style.stroke-dasharray.px]=\"strokeCircumference\"\n    [style.stroke-width.%]=\"circleStrokeWidth\"></circle>\n\n  <circle [attr.stroke]=\"_color\" class=\"determinate-circle\" #determinateCircle *ngSwitchCase=\"false\" cx=\"50%\" cy=\"50%\"\n    [attr.r]=\"circleRadius\" [style.stroke-dashoffset.px]=\"strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"strokeCircumference\" [style.stroke-width.%]=\"circleStrokeWidth\"></circle>\n</svg>",
        // tslint:disable-next-line:use-host-property-decorator
        host: {
          '[style.width.px]': 'diameter',
          '[style.height.px]': 'diameter'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: ["fiv-spinner{display:block;position:relative}fiv-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}fiv-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}fiv-spinner.fiv-progress-spinner-indeterminate-animation.determinate circle{transition-property:stroke;-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}fiv-spinner.fiv-progress-spinner-indeterminate-animation.indeterminate{-webkit-animation:2s linear infinite fiv-progress-spinner-linear-rotate;animation:2s linear infinite fiv-progress-spinner-linear-rotate}fiv-spinner.fiv-progress-spinner-indeterminate-animation.indeterminate circle{transition-property:stroke;-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes fiv-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes fiv-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes fiv-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.6061718819px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677646px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677646px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.6061718819px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.6061718819px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677646px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677646px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.6061718819px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.6061718819px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677646px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677646px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.6061718819px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.6061718819px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677646px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677646px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.6061718819px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes fiv-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.6061718819px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677646px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677646px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.6061718819px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.6061718819px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677646px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677646px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.6061718819px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.6061718819px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677646px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677646px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.6061718819px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.6061718819px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677646px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677646px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.6061718819px;transform:rotateX(180deg) rotate(341.5deg)}}"]
      }]
    }];
    /** @nocollapse */

    FivSpinner.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }];
    };

    FivSpinner.propDecorators = {
      fivProgress: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivComplete: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      determinateCircle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['determinateCircle', {
          "static": false
        }]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      circleRadius: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      "class": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class']
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      diameter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      strokeWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fab/fab.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivFab =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} renderer
       * @param {?} platform
       * @param {?} content
       */
      function FivFab(renderer, platform, content) {
        _classCallCheck(this, FivFab);

        this.renderer = renderer;
        this.platform = platform;
        this.content = content;
        this.vertical = 'none';
        this.horizontal = 'none';
        this.mode = 'normal';
        this.spinColor = 'primary';
        this.disabled = false;
        this.visible = true;
        this.pulse = false;
        this._scroll = false;
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivTransition = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loading = false;
        this.extended = false;
        this.iconState = 'normal';
        this.currentDeltaY = 0;
        this.$onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }
      /**
       * @param {?} scroll
       * @return {?}
       */


      _createClass(FivFab, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this5 = this;

          if (!this.content) {
            return;
          }

          if (!this.scroll) {
            return;
          }

          this.content.scrollEvents = true;
          /** @type {?} */

          var directionChange = this.content.ionScroll.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} ev
          * @return {?}
          */
          function (ev) {
            return ev.detail.deltaY;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                y1 = _ref2[0],
                y2 = _ref2[1];

            return y2 < y1 ? 'Up' : 'Down';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.content.ionScrollEnd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["repeat"])());
          /** @type {?} */

          var up = directionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @param {?} direction
          * @return {?}
          */
          function (direction) {
            return direction === 'Up';
          }));
          /** @type {?} */

          var down = directionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @param {?} direction
          * @return {?}
          */
          function (direction) {
            return direction === 'Down';
          }));
          up.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return _this5.labelComp ? _this5.extended = true : _this5.visible = true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy)).subscribe();
          down.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return _this5.labelComp ? _this5.extended = false : _this5.visible = false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy)).subscribe();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.$onDestroy.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.extended = !!this.labelComp;
        }
        /**
         * @return {?}
         */

      }, {
        key: "load",
        value: function load() {
          this.loading = true;
          this.fivRefresh.emit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "unload",
        value: function unload() {
          if (this.bar) {
            this.bar.unload();
          }

          this.loading = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "complete",
        value: function complete() {
          if (this.loading) {
            if (this.spinner) {
              this.spinner.completeIn(1000);
            } else if (this.bar) {
              this.bar.complete();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "fillAnimationDone",
        value: function fillAnimationDone() {
          this.fivComplete.emit(this);
          this.unload();
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "rotate",
        value: function rotate(progress) {
          this.renderer.setStyle(this.spinner._elementRef.nativeElement, 'transform', "rotateZ(".concat(progress / 200 * 360, "deg)"));
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "fabAnimDone",
        value: function fabAnimDone(event) {
          if (event.fromState === 'void') {
            this.fivShow.emit(this);
          }

          if (event.toState === 'void') {
            this.fivHidden.emit(this);
          }
        }
      }, {
        key: "scroll",
        set: function set(scroll) {
          this._scroll = scroll;
          this.$onDestroy.next();
          this.ngOnInit();
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._scroll;
        }
      }]);

      return FivFab;
    }();

    FivFab.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-fab',
        template: "<ion-fab *ngIf=\"visible\" (@fabAnim.done)=\"fabAnimDone($event)\" [@fabAnim]=\"horizontal\"\n  [ngClass]=\"[mode,horizontal,vertical]\" [slot]=\"slot\">\n  <fiv-spinner *ngIf=\"!extended && loading\" (fivProgress)=\"rotate($event)\" #spinner (fivComplete)=\"fillAnimationDone()\"\n    class=\"spinner\" [circleRadius]=\"30\" [diameter]=\"68\" [strokeWidth]=\"4\" [mode]=\"'indeterminate'\">\n  </fiv-spinner>\n\n  <ion-button [ngClass]=\"{'pulse': pulse, 'small':!labelComp || !extended}\" [color]=\"color\" [disabled]=\"disabled\">\n    <fiv-loading-progress-bar *ngIf=\"extended\" [loading]=\"loading\" (fivComplete)=\"fillAnimationDone()\" #bar>\n    </fiv-loading-progress-bar>\n    <ng-content select=\"fiv-icon\"></ng-content>\n    <ng-content select=\"ion-icon\"></ng-content>\n    <div [@labelAnim] *ngIf=\"labelComp && extended\">\n      <ng-content select=\"ion-label\"></ng-content>\n    </div>\n  </ion-button>\n</ion-fab>",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fabAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(-50%) scale(0) '
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(-50%) scale(1)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('center => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(-50%) scale(1) '
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: ' translateX(-50%) scale(0)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(0)'
        }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('labelAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: '0',
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('140ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: '*',
          opacity: 1
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: '*',
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('120ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: 0,
          opacity: 0
        }))])])],
        styles: [":host{--fiv-fab-size:56px;--fiv-spinner-size:calc(var(--fiv-fab-size) + 12px);--fiv-fab-bottom:calc(10px + env(safe-area-inset-bottom));--fiv-fab-top:calc(10px + env(safe-area-inset-top));--background-fab-progress-bar:var(--ion-color-primary);--background-fab-progress:var(--ion-color-primary-shade)}fiv-loading-progress-bar{--background-progress-bar:var(--background-fab-progress-bar);--background-progress:var(--background-fab-progress)}:host(.button-disabled){pointer-events:none}::ng-deep ng-deep fiv-icon.ios{--fiv-icon-height:24px;--fiv-icon-width:24px}::ng-deep fiv-icon:not(.ios){--fiv-icon-height:25px;--fiv-icon-width:25px}ion-button{--border-radius:calc(var(--fiv-fab-size) / 2);height:var(--fiv-fab-size);min-width:var(--fiv-fab-size);-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;margin:0}ion-fab.top{top:var(--fiv-fab-top)}ion-fab.top.edge{top:calc(var(--fiv-fab-top) - 38px)}ion-fab.middle{top:calc(50% - var(--fiv-spinner-size))}ion-fab.bottom.edge{bottom:calc(var(--fiv-fab-bottom) - 38px)}ion-fab.bottom{bottom:var(--fiv-fab-bottom)}ion-fab.center{left:50%;transform:translateX(-50%)}ion-fab.start{left:10px}ion-fab.end{right:calc(10px + var(--ion-safe-area-right,0px))}.pulse{-webkit-animation:1.2s infinite shadow-pulse;animation:1.2s infinite shadow-pulse}fiv-spinner{position:absolute;left:calc((var(--fiv-spinner-size) - var(--fiv-fab-size))/ -2);top:calc((var(--fiv-spinner-size) - var(--fiv-fab-size))/ -2)}@-webkit-keyframes shadow-pulse{0%{border-radius:calc(var(--fiv-spinner-size)/ 2);box-shadow:0 0 0 0 rgba(0,0,0,.2)}100%{border-radius:calc(var(--fiv-spinner-size)/ 2);box-shadow:0 0 0 28px transparent}}@keyframes shadow-pulse{0%{border-radius:calc(var(--fiv-spinner-size)/ 2);box-shadow:0 0 0 0 rgba(0,0,0,.2)}100%{border-radius:calc(var(--fiv-spinner-size)/ 2);box-shadow:0 0 0 28px transparent}}"]
      }]
    }];
    /** @nocollapse */

    FivFab.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    FivFab.propDecorators = {
      vertical: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      horizontal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slot: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      spinColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      visible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pulse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      feature: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivComplete: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivRefresh: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivHidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivShow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivTransition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      spinner: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['spinner', {
          "static": false
        }]
      }],
      featureDiscovery: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['feature', {
          "static": false
        }]
      }],
      bar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['bar', {
          "static": false
        }]
      }],
      labelComp: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], {
          "static": false
        }]
      }]
    };

    if (false) {}
    /**
     * @record
     */


    function FabTransitionEvent() {}

    if (false) {}
    /** @enum {number} */


    var FabState = {
      HIDDEN: 0,
      NORMAL: 1,
      EXTENDED: 2
    };
    FabState[FabState.HIDDEN] = 'HIDDEN';
    FabState[FabState.NORMAL] = 'NORMAL';
    FabState[FabState.EXTENDED] = 'EXTENDED';
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/app-bar/app-bar-fab.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivAppBarFabDirective = function FivAppBarFabDirective() {
      _classCallCheck(this, FivAppBarFabDirective);
    };

    FivAppBarFabDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[fivAppBarFab]',
        exportAs: 'fivAppBarFab'
      }]
    }];
    FivAppBarFabDirective.propDecorators = {
      fivAppBarFab: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/app-bar/app-bar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivAppBar =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} router
       * @param {?} ionTabs
       */
      function FivAppBar(router, ionTabs) {
        _classCallCheck(this, FivAppBar);

        this.router = router;
        this.ionTabs = ionTabs;
        this._fabVisible = true;
        this.cutoutVisible = true;
        this.transitioning = false;
        this.titleLayout = 'hide';
        this.fivFabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }
      /**
       * @return {?}
       */


      _createClass(FivAppBar, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.onDestroy$.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {} // merge(...this.tabs.map(tab => tab.ionTabButtonClick))
        //   .pipe(
        //     tap((event: TabButtonClickEventDetail) =>
        //       this.ionTabButtonClick(event)
        //     ),
        //     takeUntil(this.onDestroy$)
        //   )
        //   .subscribe();

        /**
         * @return {?}
         */

      }, {
        key: "fabClick",
        value: function fabClick() {
          this.fivFabClick.emit(this);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "ionTabButtonClick",
        value: function ionTabButtonClick(event) {
          this.ionTabs.select(event.tab);
        }
      }]);

      return FivAppBar;
    }();

    FivAppBar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-app-bar',
        template: "<div class=\"appbar\"\n  [ngClass]=\"{'cutout': cutoutVisible, 'left': fivFab.fivAppBarFab === 'left', 'right': fivFab.fivAppBarFab === 'right'}\">\n  <div class=\"appbar-rect left\">\n    <div class=\"tabs\">\n      <ng-content select=\"[left]\"></ng-content>\n    </div>\n  </div>\n  <ng-content select=\"fiv-fab\"></ng-content>\n  <svg viewBox=\"0 0 100 50\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <defs>\n      <path d=\"M0,0 C0,28 22,50 50,50 C78,50 100,28 100,0 L101,50 L0,50\" id=\"path-1\">\n      </path>\n    </defs>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1px\" fill=\"none\" fill-rule=\"evenodd\">\n      <g id=\"cutout\">\n        <mask id=\"mask-2\" fill=\"white\">\n          <use xlink:href=\"#path-1\"></use>\n        </mask>\n        <g id=\"Path\"></g>\n        <polygon id=\"Path\" fill-rule=\"nonzero\" mask=\"url(#mask-2)\" points=\"0 0 100 0 100 50 0 50\">\n        </polygon>\n      </g>\n    </g>\n  </svg>\n  <div class=\"rect-filler\"></div>\n  <div class=\"appbar-rect right\">\n    <div class=\"tabs\">\n\n      <ng-content select=\"[right]\"></ng-content>\n    </div>\n  </div>\n</div>",
        styles: [":host{display:block;position:relative;--fiv-radius:72px;--fiv-appbar-fab-size:56px;--fiv-appbar-height:56px;height:calc(var(--fiv-appbar-height) + env(safe-area-inset-bottom) + var(--fiv-appbar-fab-size)/ 2);width:100%;--fiv-border-radius:6px;--fiv-color-appbar:var(--ion-color-light);--fiv-side-width:12px}svg{height:calc(var(--fiv-radius)/ 2);width:var(--fiv-radius);left:calc(50% - (var(--fiv-radius)/ 2));position:absolute;top:calc(var(--fiv-appbar-fab-size)/ 2 + var(--fiv-border-radius))}svg polygon{fill:var(--fiv-color-appbar)}.appbar{width:100%;position:absolute;bottom:0;left:0;height:100%;background:rgba(0,0,0,0);z-index:5000}.appbar .appbar-rect{overflow:hidden;position:absolute;width:calc(50% - (var(--fiv-radius)/ 2));height:calc(var(--fiv-appbar-height) + env(safe-area-inset-bottom));bottom:0;box-shadow:3px -4px 5px 0 rgba(0,0,0,.1)}.appbar .appbar-rect.left{left:0;background:var(--fiv-color-appbar);border-top-right-radius:var(--fiv-border-radius)}.appbar .appbar-rect.right{right:0;background:var(--fiv-color-appbar);border-top-left-radius:var(--fiv-border-radius)}.appbar ::ng-deep fiv-fab{position:absolute;left:calc(50% - .5 * var(--fiv-fab-size));top:var(--fiv-border-radius);display:block;--fiv-fab-size:var(--fiv-appbar-fab-size);z-index:14}.appbar ::ng-deep fiv-fab fiv-icon{--fiv-color-icon:var(--fiv-color-fab-icon)}.appbar .rect-filler{width:var(--fiv-radius);height:calc(env(safe-area-inset-bottom) + var(--fiv-appbar-height) - var(--fiv-radius)/ 2 - var(--fiv-border-radius));position:absolute;overflow:hidden;bottom:0;left:calc(50% - (var(--fiv-radius)/ 2));background:var(--fiv-color-appbar)}.appbar:not(.cutout) .appbar-rect.left{border-top-right-radius:0}.appbar:not(.cutout) .appbar-rect.right{border-top-left-radius:0}.appbar.left .appbar-rect.left{width:var(--fiv-side-width)}.appbar.left .appbar-rect.right{width:calc(100% - var(--fiv-radius) - var(--fiv-side-width))}.appbar.left .rect-filler,.appbar.left svg{left:var(--fiv-side-width)}.appbar.left ::ng-deep fiv-fab{transform:translateX(0);left:calc(var(--fiv-side-width) + var(--fiv-radius)/ 2 - var(--fiv-appbar-fab-size)/ 2);position:absolute}.appbar.right .appbar-rect.left{width:calc(100% - var(--fiv-radius) - var(--fiv-side-width))}.appbar.right .appbar-rect.right{width:var(--fiv-side-width)}.appbar.right .rect-filler,.appbar.right svg{left:calc(100% - var(--fiv-radius) - var(--fiv-side-width))}.appbar.right ::ng-deep fiv-fab{transform:translateX(0);left:calc(100% - var(--fiv-side-width) - var(--fiv-radius)/ 2 - var(--fiv-appbar-fab-size)/ 2)}.tabs{display:flex;width:100%;height:100%;position:relative}"]
      }]
    }];
    /** @nocollapse */

    FivAppBar.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabs"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    FivAppBar.propDecorators = {
      fab: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['fab', {
          "static": false
        }]
      }],
      titleLayout: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivFabClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivFab: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [FivAppBarFabDirective, {
          "static": false
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/app-bar/app-bar-tab/app-bar-tab.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivAppBarTab =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} appBar
       * @param {?} router
       * @param {?} el
       */
      function FivAppBarTab(appBar, router, el) {
        _classCallCheck(this, FivAppBarTab);

        this.appBar = appBar;
        this.router = router;
        this.el = el;
        this.type = 'unbounded';
        this.badge = -1;
      }
      /**
       * @return {?}
       */


      _createClass(FivAppBarTab, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "onClick",
        value: function onClick() {
          this.appBar.ionTabButtonClick({
            tab: this.tab,
            href: this.href,
            selected: true
          });
        }
      }, {
        key: "active",
        get: function get() {
          return this.router.url.endsWith(this.href);
        }
        /**
         * @return {?}
         */

      }, {
        key: "classes",
        get: function get() {
          return "label-".concat(this.appBar.titleLayout);
        }
      }]);

      return FivAppBarTab;
    }();

    FivAppBarTab.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-app-bar-tab',
        template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n\n<div (click)=\"onClick()\" class=\"tab ion-activatable\" [ngClass]=\"{'active': active}\">\n  <ng-content select=\"fiv-icon\"></ng-content>\n  <ng-content *ngIf=\"appBar.titleLayout === 'show' || (active && appBar.titleLayout === 'active-only')\"\n    select=\"ion-label\"></ng-content>\n  <ion-ripple-effect [type]=\"type\"></ion-ripple-effect>\n</div>",
        styles: [":host{width:50%;height:100%;display:inline-block;position:relative}:host .tab{width:100%;height:100%;display:flex;position:relative;flex-direction:column;align-items:center;justify-content:center;overflow:visible}:host .tab.active{--fiv-color-icon:var(--ion-color-primary)}:host .tab.active ::ng-deep ion-label{color:var(--ion-color-primary)}:host(.label-hide) ::ng-deep ion-label{display:none}:host(.label-active-only) .tab:not(.active) ::ng-deep ion-label{display:none}"]
      }]
    }];
    /** @nocollapse */

    FivAppBarTab.ctorParameters = function () {
      return [{
        type: FivAppBar,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FivAppBarTab.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tab: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      href: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      badge: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      classes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/overlay/overlay.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivOverlayService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} componentFactoryResolver
       * @param {?} rendererFactory
       * @param {?} appRef
       * @param {?} injector
       */
      function FivOverlayService(componentFactoryResolver, rendererFactory, appRef, injector) {
        _classCallCheck(this, FivOverlayService);

        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.renderer = rendererFactory.createRenderer(null, null);
      }
      /**
       * @template T
       * @param {?} view
       * @param {?} component
       * @param {?=} content
       * @return {?}
       */


      _createClass(FivOverlayService, [{
        key: "createOverlay",
        value: function createOverlay(view, component, content) {
          /** @type {?} */
          var resolvedContent = this.resolveNgContent(view, content);
          /** @type {?} */

          var componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector, resolvedContent);
          this.appRef.attachView(componentRef.hostView);
          /** @type {?} */

          var domElem =
          /** @type {?} */

          /** @type {?} */
          componentRef.hostView.rootNodes[0];
          document.body.appendChild(domElem);
          return componentRef;
        }
        /**
         * @private
         * @template T
         * @param {?} viewContainerRef
         * @param {?} content
         * @return {?}
         */

      }, {
        key: "resolveNgContent",
        value: function resolveNgContent(viewContainerRef, content) {
          if (!content) {
            return;
          }

          if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            /** @type {?} */
            var viewRef = viewContainerRef.createEmbeddedView(content);
            return [viewRef.rootNodes];
          }
          /** @type {?} */


          var factory = this.componentFactoryResolver.resolveComponentFactory(content);
          /** @type {?} */

          var componentRef = factory.create(this.injector);
          return [[componentRef.location.nativeElement]];
        }
      }]);

      return FivOverlayService;
    }();

    FivOverlayService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FivOverlayService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };
    /** @nocollapse */


    FivOverlayService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FivOverlayService_Factory() {
        return new FivOverlayService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]));
      },
      token: FivOverlayService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/feature-discovery/feature.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivFeature =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} host
       * @param {?} viewContainer
       * @param {?} fivIcon
       * @param {?} ionIcon
       * @param {?} overlay
       * @param {?} platform
       */
      function FivFeature(host, viewContainer, fivIcon, ionIcon, overlay, platform) {
        _classCallCheck(this, FivFeature);

        this.host = host;
        this.viewContainer = viewContainer;
        this.fivIcon = fivIcon;
        this.ionIcon = ionIcon;
        this.overlay = overlay;
        this.platform = platform;
        this.maxDiameter = 1080;
        this.diameter = Math.min(this.platform.width() * 2, this.maxDiameter);
        this.contentOffset = 20;
        this.featurePadding = 20;
        this.clickEnabled = true;
        this.fivFeatureClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivWillOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivWillClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOpen = false;
      }
      /**
       * @private
       * @param {?} nativeElement
       * @return {?}
       */


      _createClass(FivFeature, [{
        key: "getBounds",
        value: function getBounds(nativeElement) {
          /** @type {?} */
          var bounds = nativeElement.getBoundingClientRect();
          return {
            top: bounds.top,
            left: bounds.left,
            height: nativeElement.clientHeight,
            width: nativeElement.clientWidth
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this6 = this;

          /** @type {?} */
          var icon = this.ionIcon || this.fivIcon;
          /** @type {?} */

          var bounds = icon ? this.getBounds(this.host.nativeElement.parentElement) : this.getBounds(this.host.nativeElement);
          this.overlayRef = this.overlay.createOverlay(this.viewContainer, FivFeatureDiscovery, this.fivFeature);
          /** @type {?} */

          var featureOverlay = this.overlayRef.instance;
          featureOverlay.height = this.diameter;
          featureOverlay.width = this.diameter;
          featureOverlay.featurePadding = this.featurePadding;
          featureOverlay.contentOffset = this.contentOffset;
          featureOverlay.setIcon(icon);
          featureOverlay.setBounds(bounds);
          featureOverlay.show();
          this.fivWillOpen.emit();
          featureOverlay.fivAnimation.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event.toState === 'visible';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this6.didOpen();
          });
          featureOverlay.fivClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this6.featureClick();
          });
          featureOverlay.fivBackdropClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this6.hide();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          var _this7 = this;

          this.fivWillClose.emit();

          if (this.overlayRef) {
            this.overlayRef.instance.hide();
            this.overlayRef.instance.fivClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this7.fivClose.emit();

              _this7.isOpen = false;

              _this7.overlayRef.destroy();

              _this7.overlayRef = null;
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "didOpen",
        value: function didOpen() {
          this.fivOpen.emit();
          this.isOpen = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "featureClick",
        value: function featureClick() {
          var _this8 = this;

          if (this.overlayRef) {
            this.fivFeatureClick.emit();
            this.fivWillClose.emit();
            this.overlayRef.instance.featureClick();
            this.overlayRef.instance.fivClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this8.fivClose.emit();

              _this8.overlayRef.destroy();

              _this8.overlayRef = null;

              if (_this8.clickEnabled) {
                _this8.host.nativeElement.click();
              }
            });
          }
        }
      }]);

      return FivFeature;
    }();

    FivFeature.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[fivFeature]',
        exportAs: 'fivFeature'
      }]
    }];
    /** @nocollapse */

    FivFeature.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: FivIcon,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: FivOverlayService
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    FivFeature.propDecorators = {
      maxDiameter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      diameter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      contentOffset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      featurePadding: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clickEnabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivFeature: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivFeatureClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivWillOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivWillClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/feature-discovery/feature-discovery.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivFeatureDiscoveryModule = function FivFeatureDiscoveryModule() {
      _classCallCheck(this, FivFeatureDiscoveryModule);
    };

    FivFeatureDiscoveryModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivFeature, FivFeatureDiscovery],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], FivIconModule],
        exports: [FivFeature, FivFeatureDiscovery],
        entryComponents: [FivFeatureDiscovery]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/loading-progress-bar/loading-progress-bar.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivLoadingProgressBarModule = function FivLoadingProgressBarModule() {
      _classCallCheck(this, FivLoadingProgressBarModule);
    };

    FivLoadingProgressBarModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivLoadingProgressBar],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [FivLoadingProgressBar],
        providers: [FivLoadingService]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/center/center.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivCenter =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} sanitizer
       */
      function FivCenter(sanitizer) {
        _classCallCheck(this, FivCenter);

        this.sanitizer = sanitizer;
        this.vertical = true;
        this.horizontal = true;
      }
      /**
       * @return {?}
       */


      _createClass(FivCenter, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
      }, {
        key: "myStyle",
        get: function get() {
          // tslint:disable-next-line:max-line-length

          /** @type {?} */
          var style = "position: absolute; ".concat(this.vertical && this.horizontal ? 'top: 50%; left: 50%; transform: translateY(-50%) translateX(-50%);' : this.vertical ? 'top: 50%; transform: translateY(-50%);' : 'left: 50%; transform: translateX(-50%);');
          return this.sanitizer.bypassSecurityTrustStyle(style);
        }
        /**
         * @param {?} center
         * @return {?}
         */

      }, {
        key: "fivCenter",
        set: function set(center) {
          if (center) {
            this.vertical = center.vertical;
            this.horizontal = center.horizontal;
          }
        }
      }]);

      return FivCenter;
    }();

    FivCenter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[fivCenter]'
      }]
    }];
    /** @nocollapse */

    FivCenter.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }];
    };

    FivCenter.propDecorators = {
      myStyle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style']
      }],
      fivCenter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/center/center.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivCenterModule = function FivCenterModule() {
      _classCallCheck(this, FivCenterModule);
    };

    FivCenterModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivCenter],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [FivCenter]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/spinner/spinner.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivSpinnerModule = function FivSpinnerModule() {
      _classCallCheck(this, FivSpinnerModule);
    };

    FivSpinnerModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivSpinner],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [FivSpinner]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fab/fab.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivFabModule = function FivFabModule() {
      _classCallCheck(this, FivFabModule);
    };

    FivFabModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivFab],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], FivCenterModule, FivIconModule, FivFeatureDiscoveryModule, FivSpinnerModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], FivLoadingProgressBarModule],
        exports: [FivFab],
        providers: []
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/app-bar/app-bar.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivAppBarModule = function FivAppBarModule() {
      _classCallCheck(this, FivAppBarModule);
    };

    FivAppBarModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivAppBar, FivAppBarTab, FivAppBarFabDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], FivIconModule, FivFabModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [FivAppBar, FivAppBarTab, FivAppBarFabDirective],
        providers: []
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/back-button/routing-state.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */

    function RoutingStateConfig() {}

    if (false) {}

    var FivRoutingStateService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} router
       * @param {?} navCtrl
       * @param {?} platform
       */
      function FivRoutingStateService(router, navCtrl, platform) {
        _classCallCheck(this, FivRoutingStateService);

        this.router = router;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.history = [];
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      _createClass(FivRoutingStateService, [{
        key: "loadRouting",
        value: function loadRouting(config) {
          var _this9 = this;

          this.config = config;
          this.handleAndroidBackButton();
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"];
          })).subscribe(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref3) {
            var urlAfterRedirects = _ref3.urlAfterRedirects;

            if (urlAfterRedirects === _this9.getPreviousUrl(_this9.config.root)) {
              _this9.pop();

              _this9.pop();
            } // add url to history


            _this9.history.push(urlAfterRedirects);

            if (_this9.config && _this9.config.clearOn) {
              /** @type {?} */
              var clear = _this9.config.clearOn.some(
              /**
              * @param {?} s
              * @return {?}
              */
              function (s) {
                return s === urlAfterRedirects;
              });

              if (clear) {
                _this9.clearHistory(urlAfterRedirects);
              }
            }
          });
        }
        /**
         * @param {?} target
         * @return {?}
         */

      }, {
        key: "registerNavigateable",
        value: function registerNavigateable(target) {
          if (isNavigateable(target)) {
            this.history.push(target);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleAndroidBackButton",
        value: function handleAndroidBackButton() {
          var _this10 = this;

          this.platform.backButton.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return !isNavigateable(_this10.getCurrentUrl());
          })).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this10.goBack();
          });
          this.platform.backButton.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return isNavigateable(_this10.getCurrentUrl());
          })).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            event.register(99999,
            /**
            * @return {?}
            */
            function () {
              _this10.goBack('/');
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getHistory",
        value: function getHistory() {
          return this.history;
        }
        /**
         * @param {?=} defaultHref
         * @return {?}
         */

      }, {
        key: "getPreviousUrl",
        value: function getPreviousUrl() {
          var defaultHref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

          if (this.history.length >= 2) {
            return this.history[this.history.length - 2];
          }

          return defaultHref;
        }
        /**
         * @return {?}
         */

      }, {
        key: "pop",
        value: function pop() {
          return this.history.pop();
        }
        /**
         * @param {?} fromUrl
         * @return {?}
         */

      }, {
        key: "clearHistory",
        value: function clearHistory(fromUrl) {
          var _this11 = this;

          this.history = this.history.filter(
          /**
          * @param {?} h
          * @return {?}
          */
          function (h) {
            return _this11.config.clearOn.some(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s === h;
            });
          });

          if (fromUrl !== this.config.root) {
            this.history.push(fromUrl);
          }

          this.history = this.history.reverse().filter(
          /**
          * @param {?} item
          * @param {?} pos
          * @param {?} self
          * @return {?}
          */
          function (item, pos, self) {
            return self.indexOf(item) === pos;
          }).reverse();

          if (this.history[0] !== this.config.root) {
            this.history = [this.config.root].concat(_toConsumableArray(this.history));
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getCurrentUrl",
        value: function getCurrentUrl() {
          return this.history[this.history.length - 1];
        }
        /**
         * @param {?=} defaultHref
         * @return {?}
         */

      }, {
        key: "goBack",
        value: function goBack() {
          var defaultHref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

          if (this.getHistory().length <= 1) {
            // close the app because we are at root level
            return navigator['app'] ? navigator['app'].exitApp() : this.navCtrl.navigateBack(defaultHref);
          }
          /** @type {?} */


          var current = this.getCurrentUrl();

          if (typeof current !== 'string' && isNavigateable(current)) {
            current.dismiss();
            return this.pop();
          }
          /** @type {?} */


          var previous = this.getPreviousUrl(defaultHref);

          if (typeof previous === 'string') {
            return this.navCtrl.navigateBack(previous);
          }

          if (isNavigateable(previous)) {
            return this.navCtrl.navigateBack(this.getLatestUrl(defaultHref));
          }
        }
        /**
         * @param {?} defaultHref
         * @return {?}
         */

      }, {
        key: "getLatestUrl",
        value: function getLatestUrl(defaultHref) {
          /** @type {?} */
          var urls = this.history.filter(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return !!(typeof e === 'string');
          });
          /** @type {?} */

          var latest = urls[urls.length - 1];

          if (urls.length > 0 && latest && typeof latest === 'string') {
            return latest;
          }

          return defaultHref;
        }
      }]);

      return FivRoutingStateService;
    }();

    FivRoutingStateService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FivRoutingStateService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };
    /** @nocollapse */


    FivRoutingStateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FivRoutingStateService_Factory() {
        return new FivRoutingStateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]));
      },
      token: FivRoutingStateService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @param {?} object
     * @return {?}
     */


    function isNavigateable(object) {
      return !!object && object.dismiss !== undefined;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/back-button/back-button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivBackButton =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} routingState
       */
      function FivBackButton(routingState) {
        _classCallCheck(this, FivBackButton);

        this.routingState = routingState;
        this.icon = 'arrow-back';
        this.defaultHref = '/';
      }
      /**
       * @return {?}
       */


      _createClass(FivBackButton, [{
        key: "buttonClick",
        value: function buttonClick() {
          this.routingState.goBack(this.defaultHref);
        }
      }]);

      return FivBackButton;
    }();

    FivBackButton.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-back-button',
        template: "<ion-button (click)=\"buttonClick()\">\n  <fiv-icon slot=\"icon-only\" [color]=\"color\" [name]=\"icon\"></fiv-icon>\n</ion-button>",
        styles: [":host{display:block;padding-top:.2em}"]
      }]
    }];
    /** @nocollapse */

    FivBackButton.ctorParameters = function () {
      return [{
        type: FivRoutingStateService
      }];
    };

    FivBackButton.propDecorators = {
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      defaultHref: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/back-button/back-button.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivBackButtonModule = function FivBackButtonModule() {
      _classCallCheck(this, FivBackButtonModule);
    };

    FivBackButtonModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivBackButton],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], FivIconModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [FivBackButton],
        providers: []
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/bottom-sheet/drawer-state.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */

    var DrawerState = {
      Bottom: 0,
      Docked: 1,
      Top: 2
    };
    DrawerState[DrawerState.Bottom] = 'Bottom';
    DrawerState[DrawerState.Docked] = 'Docked';
    DrawerState[DrawerState.Top] = 'Top';
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/bottom-sheet/bottom-sheet-content/bottom-sheet-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivBottomSheetContent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} sanitizer
       */
      function FivBottomSheetContent(sanitizer) {
        _classCallCheck(this, FivBottomSheetContent);

        this.sanitizer = sanitizer;
        this.rounded = true;
        this.handle = true;
        this["float"] = true;
        this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.states = DrawerState;
        this.shouldBounce = true;
        this.panning = false;
      }
      /**
       * @return {?}
       */


      _createClass(FivBottomSheetContent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.content.scrollEvents = true;
        }
        /**
         * @param {?} state
         * @return {?}
         */

      }, {
        key: "updateState",
        value: function updateState(state) {
          this.currentState = state;
        }
        /**
         * @return {?}
         */

      }, {
        key: "click",
        value: function click() {
          this.fivClick.emit();
        }
      }, {
        key: "isRounded",
        get: function get() {
          switch (this.currentState) {
            case DrawerState.Top:
              return false;

            case DrawerState.Docked:
              return this.rounded;

            case DrawerState.Bottom:
              return this.rounded && !this["float"];
          }

          return true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "styles",
        get: function get() {
          if (!(this["float"] && this.currentState === DrawerState.Bottom)) {
            return this.sanitizer.bypassSecurityTrustStyle("box-shadow: 0 4px 16px rgba(0, 0, 0, .12);\n                                                      border-top: 1px solid var(--ion-color-light);");
          }
        }
      }]);

      return FivBottomSheetContent;
    }();

    FivBottomSheetContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-bottom-sheet-content',
        template: "<div class=\"bsc-wrapper\">\n  <span (click)=\"click()\" *ngIf=\"currentState !== states.Top && handle\"\n    [fivCenter]=\"{vertical: false, horizontal: true}\" class=\"handle\"></span>\n  <div [ngClass]=\"{'margin': handle}\" class=\"content\">\n    <ion-content [scrollY]=\"currentState === 2 && shouldBounce && !panning\">\n      <ng-content>\n\n      </ng-content>\n    </ion-content>\n\n  </div>\n</div>",
        styles: [":host{display:block;width:100%;height:100%;--fiv-border-radius:12px;--fiv-padding:20px;padding-top:var(--fiv-padding);--fiv-background:var(--ion-background-color);--fiv-handle-background:var(--ion-color-light-shade);background:var(--fiv-background)}.bsc-wrapper{width:100%;height:100%}:host.rounded{border-top-left-radius:var(--fiv-border-radius);border-top-right-radius:var(--fiv-border-radius)}.handle{display:block;background:var(--fiv-handle-background);border-radius:12px;top:8px;width:32px;height:8px;position:absolute}.content{height:100%}"]
      }]
    }];
    /** @nocollapse */

    FivBottomSheetContent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }];
    };

    FivBottomSheetContent.propDecorators = {
      rounded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      handle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      "float": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], {
          "static": true
        }]
      }],
      isRounded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.rounded']
      }],
      styles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/bottom-sheet/bottom-sheet.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function PanEvent() {}

    if (false) {}

    var FivBottomSheet =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?} _renderer
       * @param {?} _domCtrl
       * @param {?} _platform
       */
      function FivBottomSheet(_element, _renderer, _domCtrl, _platform) {
        _classCallCheck(this, FivBottomSheet);

        this._element = _element;
        this._renderer = _renderer;
        this._domCtrl = _domCtrl;
        this._platform = _platform;
        this.dockedHeight = 80;
        this.shouldBounce = true;
        this.distanceTop = 56;
        this.transition = '0.25s';
        this.state = DrawerState.Bottom;
        this.bounceThreshold = 40;
        this.panThreshold = 20;
        this.panEnabled = true;
        this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDocked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollTop = 0;
        this.$onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }
      /**
       * @return {?}
       */


      _createClass(FivBottomSheet, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.$onDestroy.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this12 = this;

          this._setDrawerState(this.state);

          this.content.shouldBounce = this.shouldBounce;
          /** @type {?} */

          var touchmove = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._element.nativeElement, 'touchmove', {
            passive: true
          });
          /** @type {?} */

          var touchend = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._element.nativeElement, 'touchend', {
            passive: true
          }), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._element.nativeElement, 'touchcancel', {
            passive: true
          }));
          /** @type {?} */

          var getScrollContent = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.content.content.getScrollElement());
          /** @type {?} */

          var scroll = this.content.content.ionScroll.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @param {?} el
          * @return {?}
          */
          function (el) {
            return _this12.scrollTop = el.detail.scrollTop;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy));
          scroll.subscribe();
          this.content.content.ionScrollEnd.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @param {?} el
          * @return {?}
          */
          function (el) {
            return _this12.scrollTop === 0 && _this12.state === DrawerState.Top;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return _this12.content.content.scrollByPoint(0, 1, 0);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy)).subscribe();
          /** @type {?} */

          var canStart = touchmove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this12.scrollTop === 0;
          }));
          /** @type {?} */

          var start = canStart.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            return _this12._handlePanStart(s);
          }));
          /** @type {?} */

          var pan = start.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this12.panEnabled;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(
          /**
          * @return {?}
          */
          function () {
            return touchmove;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} tm
          * @return {?}
          */
          function (tm) {
            return _this12.calculatePanEvent(tm);
          }));
          /** @type {?} */

          var handlePan = pan.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @param {?} p
          * @return {?}
          */
          function (p) {
            return Math.abs(p.distance) > _this12.panThreshold;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} tm
          * @return {?}
          */
          function (tm) {
            return _this12._handlePan(tm);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(touchend), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["repeat"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy));
          /** @type {?} */

          var handleBackPan = pan.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @param {?} p
          * @return {?}
          */
          function (p) {
            return Math.abs(p.distance) <= _this12.panThreshold && _this12.content.panning;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} tm
          * @return {?}
          */
          function (tm) {
            return _this12._handlePan(tm);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(touchend), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["repeat"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy)).subscribe();
          handlePan.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return _this12.content.panning = true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["repeatWhen"])(
          /**
          * @return {?}
          */
          function () {
            return touchend;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy)).subscribe();
          handlePan.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(
          /**
          * @return {?}
          */
          function () {
            return touchend;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(pan), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return _this12.content.content.scrollByPoint(0, 1, 0);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return _this12.content.panning = false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} ev
          * @return {?}
          */
          function (ev) {
            return ev[1];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["repeat"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy)).subscribe(
          /**
          * @param {?} ev
          * @return {?}
          */
          function (ev) {
            return _this12._handlePanEnd(ev);
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!changes.state) {
            return;
          }

          this._setDrawerState(changes.state.currentValue);

          this.updateContent(changes.state.currentValue);
        }
        /**
         * @param {?} state
         * @return {?}
         */

      }, {
        key: "updateContent",
        value: function updateContent(state) {
          if (this.content) {
            this.content.updateState(state);
          }
        }
        /**
         * @private
         * @param {?} state
         * @return {?}
         */

      }, {
        key: "_setDrawerState",
        value: function _setDrawerState(state) {
          this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);

          switch (state) {
            case DrawerState.Bottom:
              this.content.content.scrollToTop(0);

              this._setTranslateY(this._platform.height());

              break;

            case DrawerState.Docked:
              this.content.content.scrollToTop(0);

              this._setTranslateY(this._platform.height() - this.dockedHeight);

              break;

            default:
              this._setTranslateY(this.distanceTop);

          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handlePanStart",
        value: function _handlePanStart(event) {
          this._startPositionTop = this.getCurrentTop();
          this._startPositionOffset = event.touches[0].pageY;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getCurrentTop",
        value: function getCurrentTop() {
          return this._element.nativeElement.getBoundingClientRect().top;
        }
        /**
         * @private
         * @param {?} ev
         * @return {?}
         */

      }, {
        key: "_handlePanEnd",
        value: function _handlePanEnd(ev) {
          if (this.shouldBounce) {
            this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);

            switch (this.state) {
              case DrawerState.Docked:
                this._handleDockedPanEnd(ev);

                break;

              case DrawerState.Top:
                this._handleTopPanEnd(ev);

                break;

              default:
                this._handleBottomPanEnd(ev);

            }
          }

          this.stateChange.emit(this.state);
        }
        /**
         * @private
         * @param {?} ev
         * @return {?}
         */

      }, {
        key: "_handleTopPanEnd",
        value: function _handleTopPanEnd(ev) {
          if (ev.distance > this.bounceThreshold) {
            if (this.state !== DrawerState.Docked) {
              this.state = DrawerState.Docked;
              this.fivDocked.emit(this);
            }
          } else {
            this._setTranslateY(this.distanceTop);
          }
        }
        /**
         * @private
         * @param {?} ev
         * @return {?}
         */

      }, {
        key: "_handleDockedPanEnd",
        value: function _handleDockedPanEnd(ev) {
          /** @type {?} */
          var absDeltaY = Math.abs(ev.distance);

          if (absDeltaY > this.bounceThreshold && ev.distance < 0) {
            if (this.state !== DrawerState.Top) {
              this.state = DrawerState.Top;
              this.fivOpen.emit();
            }
          } else if (absDeltaY > this.bounceThreshold && ev.distance > 0) {
            if (this.state !== DrawerState.Bottom) {
              this.close();
            }
          } else {
            this._setTranslateY(this._platform.height() - this.dockedHeight);
          }
        }
        /**
         * @private
         * @param {?} ev
         * @return {?}
         */

      }, {
        key: "_handleBottomPanEnd",
        value: function _handleBottomPanEnd(ev) {
          if (-ev.distance > this.bounceThreshold) {
            if (this.state !== DrawerState.Docked) {
              this.state = DrawerState.Docked;
              this.fivDocked.emit();
            }
          } else {
            this._setTranslateY('100vh');
          }
        }
        /**
         * @param {?} ev
         * @return {?}
         */

      }, {
        key: "calculatePanEvent",
        value: function calculatePanEvent(ev) {
          return {
            currentOffset: ev.touches[0].pageY,
            startOffset: this._startPositionOffset,
            startTop: this._startPositionTop,
            currentTop: this.getCurrentTop(),
            distance: ev.touches[0].pageY - this._startPositionOffset,
            touch: ev
          };
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handlePan",
        value: function _handlePan(event) {
          this._renderer.setStyle(this._element.nativeElement, 'transition', 'none');

          if (event.currentTop >= 0 && event.currentTop <= this._platform.height()) {
            /** @type {?} */
            var newTop = this._startPositionTop + event.distance;

            if (newTop >= this.distanceTop) {
              this._setTranslateY(newTop);
            } else if (newTop <= this.distanceTop && this.content.panning) {
              this._setTranslateY(this.distanceTop);

              this.content.content.scrollToPoint(0, 0 - newTop, 0);
            }

            return event;
          }
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_setTranslateY",
        value: function _setTranslateY(value) {
          var _this13 = this;

          this.fivProgress.emit(1 - value / (this._platform.height() - this.dockedHeight));

          this._domCtrl.write(
          /**
          * @return {?}
          */
          function () {
            _this13._renderer.setStyle(_this13._element.nativeElement, 'transform', 'translateY(' + value + 'px)');
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          this.state = DrawerState.Top;

          this._setDrawerState(this.state);

          this.updateContent(this.state);
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this.state = DrawerState.Bottom;

          this._setDrawerState(this.state);

          this.updateContent(this.state);
          this.fivClose.emit();
        }
        /**
         * @return {?}
         */

      }, {
        key: "dock",
        value: function dock() {
          this.state = DrawerState.Docked;

          this._setDrawerState(this.state);

          this.updateContent(this.state);
        }
      }]);

      return FivBottomSheet;
    }();

    FivBottomSheet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-bottom-sheet',
        template: "<div class=\"fiv-bottom-drawer-scrollable-content\" no-bounce>\n  <ng-content></ng-content>\n</div>",
        styles: [":host{width:100%;height:100%;position:absolute;left:0;z-index:11!important;background-color:rgba(0,0,0,0);transform:translateY(100vh)}.fiv-bottom-drawer-scrollable-content{width:100%;height:100%}"]
      }]
    }];
    /** @nocollapse */

    FivBottomSheet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["DomController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    FivBottomSheet.propDecorators = {
      dockedHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      shouldBounce: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      distanceTop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      transition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bounceThreshold: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      panThreshold: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      panEnabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      stateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivDocked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivProgress: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [FivBottomSheetContent, {
          "static": true
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/bottom-sheet/bottom-sheet.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivBottomSheetModule = function FivBottomSheetModule() {
      _classCallCheck(this, FivBottomSheetModule);
    };

    FivBottomSheetModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivBottomSheet, FivBottomSheetContent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], FivCenterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [FivBottomSheet, FivBottomSheetContent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/button/button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivButton =
    /*#__PURE__*/
    function () {
      function FivButton() {
        _classCallCheck(this, FivButton);

        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(FivButton, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FivButton;
    }();

    FivButton.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-button',
        template: "<ion-button shape=\"round\" [color]=\"color\" [disabled]=\"disabled\">\n  <fiv-icon [slot]=\"text ? 'start' : 'icon-only'\" [name]=\"icon\"></fiv-icon>\n  {{text}}\n</ion-button>",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    FivButton.ctorParameters = function () {
      return [];
    };

    FivButton.propDecorators = {
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      text: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      click: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/button/button.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivButtonModule = function FivButtonModule() {
      _classCallCheck(this, FivButtonModule);
    };

    FivButtonModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivButton],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], FivIconModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [FivButton]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/popover/popover.animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var scaleIn =
    /**
    * @param {?} target
    * @param {?} easing
    * @param {?} duration
    * @return {?}
    */
    function scaleIn(target, easing, duration) {
      return Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["tween"])(easing, duration).pipe(Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["transform"])(target, Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["scale"])(0, 1)));
    };
    /** @type {?} */


    var animIn =
    /**
    * @param {?} element
    * @param {?} position
    * @param {?} duration
    * @return {?}
    */
    function animIn(element, position, duration) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["fadeIn"])(element, _fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["easeOutSine"], duration), scaleIn(element, _fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["easeOutSine"], duration).pipe(Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["beforeStyle"])(element, 'transform-origin', "".concat(position.vertical, " ").concat(position.horizontal))));
    };
    /** @type {?} */


    var animOut =
    /**
    * @param {?} element
    * @param {?} duration
    * @return {?}
    */
    function animOut(element, duration) {
      return Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["fadeOut"])(element, _fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["easeInSine"], duration);
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/overlay/overlay-content/overlay-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivOverlayContent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} sanitizer
       */
      function FivOverlayContent(sanitizer) {
        _classCallCheck(this, FivOverlayContent);

        this.sanitizer = sanitizer;
      }
      /**
       * @return {?}
       */


      _createClass(FivOverlayContent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
      }, {
        key: "myStyle",
        get: function get() {
          return this.priority ? this.sanitizer.bypassSecurityTrustStyle("z-index: ".concat(this.priority)) : null;
        }
      }]);

      return FivOverlayContent;
    }();

    FivOverlayContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-overlay-content',
        template: "<ng-content #content></ng-content>",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    FivOverlayContent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }];
    };

    FivOverlayContent.propDecorators = {
      myStyle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/overlay/overlay.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivOverlay =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} viewContainer
       * @param {?} overlay
       */
      function FivOverlay(viewContainer, overlay) {
        _classCallCheck(this, FivOverlay);

        this.viewContainer = viewContainer;
        this.overlay = overlay;
        this.afterInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._open = false;
      }
      /**
       * @param {?=} priority
       * @param {?=} data
       * @return {?}
       */


      _createClass(FivOverlay, [{
        key: "show",
        value: function show(priority, data) {
          var _this14 = this;

          if (!this.componentRef) {
            this.componentRef = this.overlay.createOverlay(this.viewContainer, FivOverlayContent, this.ngContent);
            this._open = true;
            this.componentRef.instance.priority = priority;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this14.afterInit.emit(data);
            }, 0);
            return this.componentRef.instance;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
            this._open = false;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "open",
        get: function get() {
          return this._open;
        }
      }]);

      return FivOverlay;
    }();

    FivOverlay.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-overlay',
        template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    FivOverlay.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: FivOverlayService
      }];
    };

    FivOverlay.propDecorators = {
      ngContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['content', {
          "static": false
        }]
      }],
      priority: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      afterInit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/popover/popover.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivPopover =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} platform
       * @param {?} content
       * @param {?} dom
       * @param {?} router
       */
      function FivPopover(platform, content, dom, router) {
        var _this15 = this;

        _classCallCheck(this, FivPopover);

        this.platform = platform;
        this.content = content;
        this.dom = dom;
        this.router = router;
        this.arrow = false;
        this.arrowWidth = 24;
        this.arrowHeight = this.arrowWidth / 1.6;
        this.arrowPosition = 'auto';
        this.backdrop = true;
        this.overlaysTarget = true;
        this.closeOnNavigation = true;
        this.scrollToTarget = false;
        this.scrollSpeed = 100;
        this.position = 'auto';
        this.classes = [];
        this.hidden = false;
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.onClose$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.inDuration = 200;
        this.outDuration = 80;

        this.animationIn =
        /**
        * @param {?} element
        * @return {?}
        */
        function (element) {
          return animIn(element, _this15._position, _this15.inDuration);
        };

        this.animationOut =
        /**
        * @param {?} element
        * @return {?}
        */
        function (element) {
          return animOut(element, _this15.outDuration);
        };
      }
      /**
       * @return {?}
       */


      _createClass(FivPopover, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this16 = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationStart"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this16.closeOnNavigation && _this16.overlay.open;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return _this16.close();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.onDestroy$)).subscribe();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.onDestroy$.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          var _this17 = this;

          this.animationOut(this.animationContainer).pipe(Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["after"])(
          /**
          * @return {?}
          */
          function () {
            _this17.overlay.hide();

            _this17.onClose$.next();
          })).subscribe();
        }
        /**
         * @private
         * @param {?} target
         * @return {?}
         */

      }, {
        key: "getPositionOfTarget",
        value: function getPositionOfTarget(target) {
          /** @type {?} */
          var rect = target.getBoundingClientRect();
          return this.calculcatePositioning(rect.top, rect.left, rect.bottom, rect.right, rect.height, rect.width);
        }
        /**
         * @param {?} target
         * @return {?}
         */

      }, {
        key: "open",
        value: function open(target) {
          /** @type {?} */
          var element;

          if (target instanceof MouseEvent) {
            element =
            /** @type {?} */
            target.target;
          } else if (target instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
            element =
            /** @type {?} */
            target.nativeElement;
          } else {
            return;
          }

          this.openTarget(element);
        }
        /**
         * @param {?} target
         * @return {?}
         */

      }, {
        key: "openTarget",
        value: function openTarget(target) {
          /** @type {?} */
          var position = this.getPositionOfTarget(target);
          this.openAtPosition(target, position);
          this.watchResize(target);
          this.watchScroll(target);
        }
        /**
         * @private
         * @param {?} target
         * @return {?}
         */

      }, {
        key: "watchResize",
        value: function watchResize(target) {
          var _this18 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(
          /**
          * @return {?}
          */
          function () {
            return _this18.filterInViewport(target);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["throttleTime"])(50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @return {?}
          */
          function () {
            return _this18.getPositionOfTarget(target);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @param {?} pos
          * @return {?}
          */
          function (pos) {
            return _this18._position = pos;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.onDestroy$)).subscribe();
        }
        /**
         * @private
         * @param {?} target
         * @return {?}
         */

      }, {
        key: "watchScroll",
        value: function watchScroll(target) {
          var _this19 = this;

          if (this.content && !this.backdrop) {
            this.content.scrollEvents = true;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'mousewheel'), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'touchmove'), this.content.ionScroll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(
            /**
            * @return {?}
            */
            function () {
              return _this19.filterInViewport(target);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
            /**
            * @return {?}
            */
            function () {
              return _this19.getPositionOfTarget(target);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
            /**
            * @param {?} pos
            * @return {?}
            */
            function (pos) {
              return _this19._position = pos;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.onDestroy$)).subscribe();
          }
        }
        /**
         * @private
         * @param {?} target
         * @return {?}
         */

      }, {
        key: "filterInViewport",
        value: function filterInViewport(target) {
          var _this20 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.inViewport(target.getBoundingClientRect())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @param {?} inViewport
          * @return {?}
          */
          function (inViewport) {
            return !inViewport ? _this20.hidden = true : _this20.hidden = false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @param {?} inViewPort
          * @return {?}
          */
          function (inViewPort) {
            return _this20.overlay.open && inViewPort;
          }));
        }
        /**
         * @private
         * @param {?} target
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "openAtPosition",
        value: function openAtPosition(target, position) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.scrollToPosition(target, position);

                  case 2:
                    this._position = position;
                    this.overlay.show();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
        /**
         * @private
         * @param {?} target
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "scrollToPosition",
        value: function scrollToPosition(target, position) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var isInViewport;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.content && this.scrollToTarget)) {
                      _context2.next = 8;
                      break;
                    }

                    _context2.next = 3;
                    return this.inViewport(target.getBoundingClientRect());

                  case 3:
                    isInViewport = _context2.sent;

                    if (!isInViewport) {
                      _context2.next = 6;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 6:
                    _context2.next = 8;
                    return this.content.scrollToPoint(position.left, position.top, this.scrollSpeed);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
        /**
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "inViewport",
        value: function inViewport(position) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var height, width;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    /** @type {?} */
                    height = this.platform.height();
                    /** @type {?} */

                    width = this.platform.width();
                    return _context3.abrupt("return", position.top <= height && position.bottom >= 0 && position.left < width && position.right > 0);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
        /**
         * @private
         * @param {?} top
         * @param {?} left
         * @param {?} bottom
         * @param {?} right
         * @param {?} targetHeight
         * @param {?} targetWidth
         * @return {?}
         */

      }, {
        key: "calculcatePositioning",
        value: function calculcatePositioning(top, left, bottom, right, targetHeight, targetWidth) {
          // calculates the position of the popover without considering arrow and overlay offset

          /** @type {?} */
          var width = this.platform.width();
          /** @type {?} */

          var height = this.platform.height();
          /** @type {?} */

          var _left = this.position === 'right' || width / 2 > left && this.position !== 'left';
          /** @type {?} */


          var _right = this.position === 'left' || width / 2 <= left && this.position !== 'right';
          /** @type {?} */


          var _top = this.position === 'below' || height / 2 > top && this.position !== 'above';
          /** @type {?} */


          var _bottom = this.position === 'above' || height / 2 <= top && this.position !== 'below'; // transform origin

          /** @type {?} */


          var horizontal = 'left';
          /** @type {?} */

          var vertical = 'top';

          if (_left && _top) {
            // top left
            horizontal = 'left';
            vertical = 'top';
          } else if (_right && _bottom) {
            // bottom right
            left = right - this.width;
            top = bottom - this.height;
            horizontal = 'right';
            vertical = 'bottom';
          } else if (_right && _top) {
            // top right
            left = right - this.width;
            horizontal = 'right';
            vertical = 'top';
          } else if (_left && _bottom) {
            // bottom left
            top = bottom - this.height;
            horizontal = 'left';
            vertical = 'bottom';
          }

          return {
            top: top,
            left: left,
            bottom: bottom,
            right: right,
            targetHeight: targetHeight,
            targetWidth: targetWidth,
            horizontal: horizontal,
            vertical: vertical
          };
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getArrowTop",
        value: function getArrowTop() {
          var _this21 = this;

          /** @type {?} */
          var isVert = ['auto', 'below', 'above'].some(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            return s === _this21.position;
          });

          if (isVert) {
            return this._position.vertical === 'top' ? -1 * this.arrowHeight : this.height;
          }

          if (this.arrowPosition === 'center') {
            return this.height / 2 - this.arrowWidth / 2;
          }

          return this._position.vertical === 'top' ? this._position.targetHeight / 2 - this.arrowHeight / 2 : this.height - this.arrowHeight / 2 - this._position.targetHeight / 2;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getArrowLeft",
        value: function getArrowLeft() {
          var _this22 = this;

          /** @type {?} */
          var isHorizontal = ['left', 'right'].some(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            return s === _this22.position;
          });

          if (isHorizontal) {
            return this._position.horizontal === 'left' ? -1 * this.arrowHeight : this.width;
          }

          if (this.arrowPosition === 'center') {
            return this.width / 2 - this.arrowHeight / 2;
          }

          return this._position.horizontal === 'left' ? this._position.targetWidth / 2 - this.arrowWidth / 2 : this.width - this.arrowWidth / 2 - this._position.targetWidth / 2;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getContainerTop",
        value: function getContainerTop() {
          var _this23 = this;

          /** @type {?} */
          var isVert = ['auto', 'below', 'above'].some(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            return s === _this23.position;
          });
          /** @type {?} */

          var isTop = this._position.vertical === 'top';
          /** @type {?} */

          var offset = 0;

          if (this.arrow && isTop) {
            offset -= this.getVerticalArrowOffset();
          } else if (this.arrow && !isTop) {
            offset += this.getVerticalArrowOffset();
          }

          if (!isVert) {
            return this._position.top + offset;
          }

          if (!this.overlaysTarget && isTop) {
            offset += this._position.targetHeight;
          } else if (!this.overlaysTarget && !isTop) {
            offset -= this._position.targetHeight;
          }

          if (this.arrow && isTop) {
            offset += this.arrowHeight;
          } else if (this.arrow && !isTop) {
            offset -= this.arrowHeight;
          }

          return this._position.top + offset;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getVerticalArrowOffset",
        value: function getVerticalArrowOffset() {
          var _this24 = this;

          /** @type {?} */
          var offset = 0;
          /** @type {?} */

          var isHorizontal = ['left', 'right'].some(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            return s === _this24.position;
          });

          if (this.arrowPosition === 'center' && isHorizontal) {
            offset += this.height / 2 - this._position.targetHeight / 2;
          }

          return offset;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getHorizontalArrowOffset",
        value: function getHorizontalArrowOffset() {
          var _this25 = this;

          /** @type {?} */
          var offset = 0;
          /** @type {?} */

          var isVertical = ['above', 'auto', 'below'].some(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            return s === _this25.position;
          });

          if (this.arrowPosition === 'center' && isVertical) {
            offset += this.width / 2 - this._position.targetWidth / 2;
          }

          return offset;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getContainerLeft",
        value: function getContainerLeft() {
          var _this26 = this;

          /** @type {?} */
          var isHorizontal = ['left', 'right'].some(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            return s === _this26.position;
          });
          /** @type {?} */

          var isLeft = this._position.horizontal === 'left';
          /** @type {?} */

          var offset = 0;

          if (this.arrow && isLeft) {
            offset -= this.getHorizontalArrowOffset();
          } else if (this.arrow && !isLeft) {
            offset += this.getHorizontalArrowOffset();
          }

          if (!isHorizontal) {
            return this._position.left + offset;
          }

          if (!this.overlaysTarget && isLeft) {
            offset += this._position.targetWidth;
          } else if (!this.overlaysTarget && !isLeft) {
            offset -= this._position.targetWidth;
          }

          if (this.arrow && isLeft) {
            offset += this.arrowHeight;
          } else if (this.arrow && !isLeft) {
            offset -= this.arrowHeight;
          }

          return this._position.left + offset;
        }
      }, {
        key: "styles",
        get: function get() {
          if (!this._position) {
            return;
          }

          return this.dom.bypassSecurityTrustStyle(" width: ".concat(this.width ? this.width + 'px' : 'auto', "; \n        height: ").concat(this.height ? this.height + 'px' : 'auto', "; \n        left: ").concat(this.getContainerLeft(), "px; \n        top: ").concat(this.getContainerTop(), "px;"));
        }
        /**
         * @return {?}
         */

      }, {
        key: "triangle",
        get: function get() {
          var _this27 = this;

          /** @type {?} */
          var isHorizontal = ['left', 'right'].some(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            return s === _this27.position;
          });

          if (isHorizontal) {
            return "".concat(this.arrowHeight, ",0 0,").concat(this.arrowWidth / 2, " ").concat(this.arrowHeight, ",").concat(this.arrowWidth);
          }

          return "0,".concat(this.arrowHeight, " ").concat(this.arrowWidth / 2, ",0 ").concat(this.arrowWidth, ",").concat(this.arrowHeight);
        }
        /**
         * @return {?}
         */

      }, {
        key: "svgStyles",
        get: function get() {
          var _this28 = this;

          if (!this._position) {
            return;
          }
          /** @type {?} */


          var isHorizontal = ['left', 'right'].some(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            return s === _this28.position;
          });
          /** @type {?} */

          var rotate = this.position === 'auto' && this._position.vertical === 'bottom' || this.position === 'left';
          return this.dom.bypassSecurityTrustStyle("height: ".concat(isHorizontal ? this.arrowWidth : this.arrowHeight, "px; \n      width: ").concat(isHorizontal ? this.arrowHeight : this.arrowWidth, "px; \n      top: ").concat(this.getArrowTop(), "px; \n      left: ").concat(this.getArrowLeft(), "px;\n      transform: rotateZ(").concat(rotate ? 180 : 0, "deg);"));
        }
        /**
         * @return {?}
         */

      }, {
        key: "animationStyles",
        get: function get() {
          if (!this._position) {
            return;
          }

          return this.dom.bypassSecurityTrustStyle("height: ".concat(this.arrowHeight, "px; \n      width: ").concat(this.arrowWidth, "px; \n      top: ").concat(this.getArrowTop(), "px; \n      left: ").concat(this.getArrowLeft(), "px;\n      transform: rotateZ(").concat(this._position.vertical === 'bottom' ? 180 : 0, "deg);"));
        }
      }]);

      return FivPopover;
    }();

    FivPopover.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-popover',
        template: "<fiv-overlay>\n  <div *ngIf=\"backdrop && !hidden\" [ngClass]=\"classes\" class=\"fiv-popover-backdrop\" (click)=\"close()\">\n  </div>\n  <div *ngIf=\"!hidden\" [ngClass]=\"classes\" class=\"popover-container\" [style]=\"styles\">\n    <div #animation *ngIf=\"overlay?.open\" class=\"animation-container\" anim [anim.in]=\"animationIn\">\n      <ng-content>\n      </ng-content>\n      <svg *ngIf=\"arrow && !overlaysTarget\" class=\"arrow\" [style]=\"svgStyles\">\n        <polygon [attr.points]=\"triangle\" />\n      </svg>\n    </div>\n\n  </div>\n\n</fiv-overlay>",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [":host{--fiv-popover-backdrop-color:rgba(0, 0, 0, 0.2)}.popover-container{position:absolute;display:block}.animation-container{height:100%;position:relative}svg.arrow{position:absolute;fill:var(--ion-item-background)}.fiv-popover-backdrop{position:absolute;display:block;width:100vw;height:100vh;background:var(--fiv-popover-backdrop-color)}"]
      }]
    }];
    /** @nocollapse */

    FivPopover.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    FivPopover.propDecorators = {
      overlay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [FivOverlay, {
          "static": false
        }]
      }],
      animationContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['animation', {
          "static": false
        }]
      }],
      width: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      height: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      arrow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      arrowWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      arrowHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      arrowPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      backdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      overlaysTarget: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      closeOnNavigation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scrollToTarget: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scrollSpeed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      classes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      inDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      animationIn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      animationOut: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/overflow-buttons/overflow-buttons.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivOverflowButtons =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} platform
       * @param {?} popoverController
       * @param {?} actionSheetController
       */
      function FivOverflowButtons(platform, popoverController, actionSheetController) {
        _classCallCheck(this, FivOverflowButtons);

        this.platform = platform;
        this.popoverController = popoverController;
        this.actionSheetController = actionSheetController;
        this.slot = 'end';
        this.icon = 'more';
        this.mode = 'popover';
        this.count = 0;
      }
      /**
       * @return {?}
       */


      _createClass(FivOverflowButtons, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {}
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onMenuClicked",
        value: function onMenuClicked(event) {
          if (this.mode === 'action-sheet') {
            return this.presentActionSheet(event);
          }

          if (this.mode === 'popover') {
            return this.presentPopover(event);
          }

          if (this.platform.is('mobile')) {
            this.presentActionSheet(event);
          } else {
            this.presentPopover(event);
          }
        }
        /**
         * @param {?} ev
         * @return {?}
         */

      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var popover, result;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.popoverController.create({
                      component: FivPopover,
                      event: ev,
                      translucent: false,
                      componentProps: {
                        buttons: this.buttons.toArray().slice(this.count).filter(
                        /**
                        * @param {?} button
                        * @return {?}
                        */
                        function (button) {
                          return !button.disabled;
                        })
                      }
                    });

                  case 2:
                    popover = _context4.sent;
                    _context4.next = 5;
                    return popover.present();

                  case 5:
                    _context4.next = 7;
                    return popover.onDidDismiss();

                  case 7:
                    result = _context4.sent;

                    if (result && result.data && (result.data.index || result.data.index === 0)) {
                      this.onButtonClicked(result.data.index + this.count);
                    }

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
        /**
         * @param {?} ev
         * @return {?}
         */

      }, {
        key: "presentActionSheet",
        value: function presentActionSheet(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this29 = this;

            var buttons, actionSheet;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    /** @type {?} */
                    buttons = [];
                    this.buttons.toArray().slice(this.count).forEach(
                    /**
                    * @param {?} button
                    * @param {?} index
                    * @return {?}
                    */
                    function (button, index) {
                      if (!button.disabled) {
                        buttons.push({
                          text: button.text,
                          icon: button.icon,
                          handler:
                          /**
                          * @return {?}
                          */
                          function handler() {
                            _this29.onButtonClicked(_this29.count + index);
                          }
                        });
                      }
                    });
                    /** @type {?} */

                    _context5.next = 4;
                    return this.actionSheetController.create({
                      buttons: buttons
                    });

                  case 4:
                    actionSheet = _context5.sent;
                    _context5.next = 7;
                    return actionSheet.present();

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
        /**
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "onButtonClicked",
        value: function onButtonClicked(i) {
          this.buttons.toArray()[i].click.emit();
        }
      }]);

      return FivOverflowButtons;
    }();

    FivOverflowButtons.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-overflow-buttons',
        template: "<ion-buttons *ngIf=\"buttons\" [slot]=\"slot\">\n\n  <fiv-button [color]=\"color\" *ngIf=\"(slot === 'start' || slot ==='primary') && count < buttons.length && text\"\n    (click)=\"onMenuClicked($event)\" [text]=\"text\"></fiv-button>\n\n  <fiv-button [color]=\"color\" *ngIf=\"(slot === 'start' || slot ==='primary') && count < buttons.length && !text\"\n    (click)=\"onMenuClicked($event)\" [icon]=\"'md-more'\"></fiv-button>\n  <ng-container>\n    <fiv-button [color]=\"button.color\" (click)=\"onButtonClicked(i)\" [icon]=\"button.icon\"\n      *ngFor=\"let button of buttons.toArray() |\xA0slice:0:count; let i = index;\"></fiv-button>\n  </ng-container>\n  <fiv-button [color]=\"color\" *ngIf=\"(slot === 'end' || slot ==='secondary') && count < buttons.length && !text\"\n    (click)=\"onMenuClicked($event)\" [icon]=\"icon\"></fiv-button>\n  <fiv-button [color]=\"color\" *ngIf=\"(slot === 'end' || slot ==='secondary') && count < buttons.length && text\"\n    (click)=\"onMenuClicked($event)\" [text]=\"text\"></fiv-button>\n</ion-buttons>",
        styles: [":host{display:block}"]
      }]
    }];
    /** @nocollapse */

    FivOverflowButtons.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }];
    };

    FivOverflowButtons.propDecorators = {
      slot: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      text: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      count: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      buttons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [FivButton]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/overflow-buttons/overflow-buttons.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivOverflowButtonsModule = function FivOverflowButtonsModule() {
      _classCallCheck(this, FivOverflowButtonsModule);
    };

    FivOverflowButtonsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivOverflowButtons],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], FivButtonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [FivOverflowButtons, // Re-export `FivButtonModule` as `FivButton` will be used
        // inside of `FivButtons`
        FivButtonModule]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/collapsable-menu/collapsable-menu.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivCollapsableMenu =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} sanitizer
       * @param {?} menu
       * @param {?} split
       * @param {?} platform
       */
      function FivCollapsableMenu(sanitizer, menu, split, platform) {
        var _this30 = this;

        _classCallCheck(this, FivCollapsableMenu);

        this.sanitizer = sanitizer;
        this.menu = menu;
        this.split = split;
        this.platform = platform;
        this.collapsed = false;
        this.hovering = false;
        this.splitVisible = false;
        this.hoverMenu = true;
        this.width = 64;
        this.minWidth = 270;
        this.maxWidth = this.platform.width() * 0.28;
        this.split.ionSplitPaneVisible.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.detail.visible;
        })).subscribe(
        /**
        * @param {?} visible
        * @return {?}
        */
        function (visible) {
          return _this30.splitVisible = visible;
        });
      }
      /**
       * @return {?}
       */


      _createClass(FivCollapsableMenu, [{
        key: "hover",

        /**
         * @return {?}
         */
        value: function hover() {
          if (this.collapsed && !this.hovering && this.hoverMenu) {
            this.open();
            this.hovering = true;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          if (!this.hoverMenu) {
            return;
          }

          if (!this.collapsed && this.hovering) {
            this.close();
          }

          this.hovering = false;
        }
        /**
         * @param {?} collapse
         * @return {?}
         */

      }, {
        key: "toggleMenu",

        /**
         * @return {?}
         */
        value: function toggleMenu() {
          if (this.hovering) {
            this.open();
            this.hovering = false;
            return;
          }

          this.collapsed = !this.collapsed;
        }
        /**
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          this.collapsed = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this.collapsed = true;
        }
      }, {
        key: "myStyle",
        get: function get() {
          if (this.collapsed && this.splitVisible) {
            return this.sanitizer // tslint:disable-next-line:max-line-length
            .bypassSecurityTrustStyle("min-width: ".concat(this.width, "px; max-width: ").concat(this.width, "px; --border: 0; transition: all cubic-bezier(.55,0,.1,1) 200ms;"));
          } else {
            if (!this.splitVisible) {
              return this.sanitizer // tslint:disable-next-line:max-line-length
              .bypassSecurityTrustStyle("--border: 0; transition: all cubic-bezier(.55,0,.1,1) 200ms;");
            } else {
              return this.sanitizer // tslint:disable-next-line:max-line-length
              .bypassSecurityTrustStyle("min-width: ".concat(this.minWidth, "px; max-width: ").concat(this.maxWidth, "px; --border: 0; transition: all cubic-bezier(.55,0,.1,1) 200ms;"));
            }
          }
        }
      }, {
        key: "fivCollapseMenu",
        set: function set(collapse) {
          this.collapsed = collapse;
        }
      }]);

      return FivCollapsableMenu;
    }();

    FivCollapsableMenu.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[fivCollapseMenu]',
        exportAs: 'menuCollapse'
      }]
    }];
    /** @nocollapse */

    FivCollapsableMenu.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonMenu"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSplitPane"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    FivCollapsableMenu.propDecorators = {
      hoverMenu: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      width: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      myStyle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style']
      }],
      hover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mouseenter']
      }],
      blur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mouseleave']
      }],
      fivCollapseMenu: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/collapsable-menu/collapsable-menu-button/collapsable-menu-button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivCollapsableMenuButton =
    /*#__PURE__*/
    function () {
      function FivCollapsableMenuButton() {
        _classCallCheck(this, FivCollapsableMenuButton);

        this.icon = 'menu';
      }
      /**
       * @return {?}
       */


      _createClass(FivCollapsableMenuButton, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "onClick",
        value: function onClick() {
          this.menu.toggleMenu();
        }
      }]);

      return FivCollapsableMenuButton;
    }();

    FivCollapsableMenuButton.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-collapsable-menu-button',
        template: "<ion-button fivCenter (click)=\"onClick()\">\n  <fiv-icon slot=\"icon-only\" [name]=\"icon\"></fiv-icon>\n</ion-button>",
        styles: [":host{display:block;padding-top:.2em}"]
      }]
    }];
    /** @nocollapse */

    FivCollapsableMenuButton.ctorParameters = function () {
      return [];
    };

    FivCollapsableMenuButton.propDecorators = {
      menu: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/collapsable-menu/collapsable-menu.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivCollapsableModule = function FivCollapsableModule() {
      _classCallCheck(this, FivCollapsableModule);
    };

    FivCollapsableModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivCollapsableMenu, FivCollapsableMenuButton],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], FivIconModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [FivCollapsableMenu, FivCollapsableMenuButton]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pull/pull.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivPull =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} platform
       * @param {?} content
       */
      function FivPull(element, platform, content) {
        _classCallCheck(this, FivPull);

        this.element = element;
        this.platform = platform;
        this.content = content;
        this.minPullHeight = 112;
        this.maxPullHeight = 168;
        this.enabled = true;
        this.enableScroll = false;
        this.direction = 'down';
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivPull = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(FivPull, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.init();
        }
        /**
         * @param {?=} minPullHeight
         * @param {?=} maxPullHeight
         * @param {?=} direction
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          var _this31 = this;

          var minPullHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 112;
          var maxPullHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 168;
          var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'down';
          this.minPullHeight = minPullHeight;
          this.maxPullHeight = maxPullHeight;
          this.direction = direction;
          this.content.scrollEvents = true;
          this.content.getScrollElement().then(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            _this31.scrollY = s; // needed for scrollTop

            _this31.setupPanListener();
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "setupPanListener",
        value: function setupPanListener() {
          var _this32 = this;

          /** @type {?} */
          var touchstart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.element.nativeElement, 'touchstart', {
            passive: true
          });
          /** @type {?} */

          var touchmove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.element.nativeElement, 'touchmove', {
            passive: true
          });
          /** @type {?} */

          var touchend$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.element.nativeElement, 'touchend', {
            passive: true
          });
          /** @type {?} */

          var touchcancel$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.element.nativeElement, 'touchcancel', {
            passive: true
          });
          /** @type {?} */

          var end$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(touchend$, touchcancel$);
          /** @type {?} */

          var dragAtTop = touchstart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return (_this32.scrollY.scrollTop === 0 || _this32.enableScroll) && _this32.direction === 'down' && _this32.enabled;
          }));
          /** @type {?} */

          var dragAtBottom = touchstart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return (_this32.scrollY.scrollTop === _this32.scrollY.clientHeight - _this32.platform.height() || _this32.enableScroll) && _this32.direction === 'up' && _this32.enabled;
          }));
          /** @type {?} */

          var dragTopDown = dragAtTop.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} start
          * @return {?}
          */
          function (start) {
            /** @type {?} */
            var startY = start.touches[0].pageY;
            return touchmove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
            /**
            * @param {?} move
            * @return {?}
            */
            function (move) {
              /** @type {?} */
              var currentY = move.touches[0].pageY;
              return {
                startEvent: start,
                moveEvent: move,
                startY: startY,
                currentY: currentY,
                offset: currentY - startY
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["skipWhile"])(
            /**
            * @param {?} drag
            * @return {?}
            */
            function (drag) {
              return drag.offset < 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(end$));
          }));
          dragTopDown.forEach(
          /**
          * @param {?} drags
          * @return {?}
          */
          function (drags) {
            drags.forEach(
            /**
            * @param {?} drag
            * @return {?}
            */
            function (drag) {
              /** @type {?} */
              var offset = drag.offset / 2;

              if (offset < 0 || offset > _this32.maxPullHeight) {
                return;
              }

              if (offset <= _this32.maxPullHeight) {}

              _this32.fivPull.emit(offset / _this32.maxPullHeight);
            });
            drags.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeLast"])(1)).subscribe(
            /**
            * @param {?} drag
            * @return {?}
            */
            function (drag) {
              /** @type {?} */
              var offset = drag.offset / 2;
              /** @type {?} */

              var refresh = offset >= _this32.minPullHeight;

              if (refresh) {
                _this32.fivRefresh.emit(offset / _this32.maxPullHeight);
              } else {
                _this32.fivCancel.emit(offset / _this32.maxPullHeight);
              }
            });
          });
          /** @type {?} */

          var dragBottomUp = dragAtBottom.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} start
          * @return {?}
          */
          function (start) {
            /** @type {?} */
            var startY = start.touches[0].pageY;
            return touchmove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
            /**
            * @param {?} move
            * @return {?}
            */
            function (move) {
              /** @type {?} */
              var currentY = move.touches[0].pageY;
              return {
                startEvent: start,
                moveEvent: move,
                startY: startY,
                currentY: currentY,
                offset: startY - currentY
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["skipWhile"])(
            /**
            * @param {?} drag
            * @return {?}
            */
            function (drag) {
              return drag.offset < 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(end$));
          }));
          dragBottomUp.forEach(
          /**
          * @param {?} drags
          * @return {?}
          */
          function (drags) {
            drags.forEach(
            /**
            * @param {?} drag
            * @return {?}
            */
            function (drag) {
              /** @type {?} */
              var offset = drag.offset / 2;

              if (offset < 0 || offset > _this32.maxPullHeight) {
                return;
              }

              _this32.fivPull.emit(offset / _this32.maxPullHeight);
            });
            drags.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeLast"])(1)).subscribe(
            /**
            * @param {?} drag
            * @return {?}
            */
            function (drag) {
              /** @type {?} */
              var offset = drag.offset / 2;
              /** @type {?} */

              var refresh = offset >= _this32.minPullHeight;

              if (refresh) {
                _this32.fivRefresh.emit(offset / _this32.maxPullHeight);
              } else {
                _this32.fivCancel.emit(offset / _this32.maxPullHeight);
              }
            });
          });
        }
      }]);

      return FivPull;
    }();

    FivPull.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[fivPull]'
      }]
    }];
    /** @nocollapse */

    FivPull.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]
      }];
    };

    FivPull.propDecorators = {
      minPullHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxPullHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      enabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      enableScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      direction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivRefresh: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivCancel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivPull: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pull/pull.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivPullModule = function FivPullModule() {
      _classCallCheck(this, FivPullModule);
    };

    FivPullModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivPull],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [FivPull]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dialog/dialog.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivDialog =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} renderer
       * @param {?} domCtrl
       * @param {?} animation
       */
      function FivDialog(renderer, domCtrl, animation) {
        _classCallCheck(this, FivDialog);

        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.animation = animation;
        this.verticalAlign = 'top';
        this.horizontalAlign = 'middle';
        this.shape = 'card';
        this.priority = 20001;
        this.backdrop = true;
        this.backdropDismiss = true;
        this.pullEnabled = true; // animation data

        this.inDuration = 160;
        this.outDuration = 120;
        this.outPosition = '-100%';
        this.toPosition = '0px';
        this.translate = '0px';
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDurationOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dialogState = 'out';
      }
      /**
       * @return {?}
       */


      _createClass(FivDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          this.overlay.show(this.priority);
          this.dialogState = this.verticalAlign;

          if (this.duration) {
            this.bar.shrinkIn(this.duration);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "doneShrinking",
        value: function doneShrinking() {
          this.fivDurationOver.emit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this.dialogState = 'out';
          this.bar.stopProgressAnimation();
        }
        /**
         * @return {?}
         */

      }, {
        key: "backdropClick",
        value: function backdropClick() {
          if (this.backdropDismiss) {
            this.close();
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "animationDone",
        value: function animationDone(event) {
          if (event.fromState !== 'void' && event.toState === 'out') {
            this.transformDialog(0);
            this.overlay.hide();
            this.fivClose.emit(this);
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "backdropAnimDone",
        value: function backdropAnimDone(event) {
          if (event.fromState === 'out' && event.toState !== 'void') {
            this.fivOpen.emit(this);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "onRefresh",
        value: function onRefresh() {
          this.close();
        }
        /**
         * @return {?}
         */

      }, {
        key: "fivCancel",
        value: function fivCancel() {
          this.resetDialog(this.currentPullProgress);
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "transformDialog",
        value: function transformDialog(progress) {
          var _this33 = this;

          this.currentPullProgress = progress;
          this.domCtrl.write(
          /**
          * @return {?}
          */
          function () {
            if (_this33.verticalAlign === 'bottom') {
              _this33.renderer.setStyle(_this33.dialogRef.nativeElement, 'margin-bottom', "-".concat(progress * 120, "px"));
            } else if (_this33.verticalAlign === 'top') {
              _this33.renderer.setStyle(_this33.dialogRef.nativeElement, 'margin-top', "-".concat(progress * 120, "px"));
            } else if (_this33.verticalAlign === 'center') {
              _this33.renderer.setStyle(_this33.dialogRef.nativeElement, 'margin-top', "".concat(progress * 120, "px"));
            }
          });
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "resetDialog",
        value: function resetDialog(progress) {
          var _this34 = this;

          /** @type {?} */
          var reset;

          if (this.verticalAlign === 'bottom') {
            reset = this.animation.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              'margin-bottom': "-".concat(progress * 120, "px")
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              'margin-bottom': "0px"
            }))]);
          } else if (this.verticalAlign === 'top') {
            reset = this.animation.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              'margin-top': "-".concat(progress * 120, "px")
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              'margin-top': "0px"
            }))]);
          } else if (this.verticalAlign === 'center') {
            reset = this.animation.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              'margin-top': "".concat(progress * 120, "px")
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              'margin-top': "0px"
            }))]);
          }
          /** @type {?} */


          var animation = reset.create(this.dialogRef.nativeElement);
          animation.play();
          animation.onDone(
          /**
          * @return {?}
          */
          function () {
            animation.destroy();

            _this34.transformDialog(0);
          });
        }
      }]);

      return FivDialog;
    }();

    FivDialog.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-dialog',
        template: "<fiv-overlay #overlay>\n  <ion-content no-bounce [direction]=\"verticalAlign === 'top' ? 'up' : 'down'\" fivPull [enabled]=\"pullEnabled\" [maxPullHeight]=\"168\" [minPullHeight]=\"120\" (fivPull)=\"transformDialog($event)\"\n  (fivRefresh)=\"onRefresh()\" (fivCancel)=\"fivCancel()\"  *ngIf=\"backdrop\" (@fade.done)=\"backdropAnimDone($event)\"\n    [@fade]=\"{value: dialogState, params: { opacity: 0, inDuration: '120ms' }}\" (click)=\"backdropClick()\" class=\"backdrop\">\n</ion-content>\n  <div #dialog [@fade]=\"{value: dialogState, params: { opacity: 0, inDuration: '120ms' }}\"\n  [@slide]=\"{value: dialogState, params: {top: outPosition, inDuration: inDuration + 'ms',outDuration: outDuration + 'ms', toPosition: toPosition, translate: translate,translateX: horizontalAlign === 'middle' ? 'translateX(-50%)' :  '' }}\"\n  (@slide.done)=\"animationDone($event)\" class=\"dialog\" [ngClass]=\"[verticalAlign, horizontalAlign, shape]\">\n    <ng-container>\n      <ng-container *ngTemplateOutlet=\"card\"></ng-container>\n    </ng-container>\n  </div>\n\n</fiv-overlay>\n\n<ng-template #card>\n  <ion-card>\n    <fiv-loading-progress-bar [verticalAlign]=\"verticalAlign === 'top' ? 'bottom' : 'top'\"\n      (fivDoneShrinking)=\"doneShrinking()\" #bar></fiv-loading-progress-bar>\n    <ng-content></ng-content>\n  </ion-card>\n</ng-template>",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slide', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => top', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          top: '0',
          transform: 'translateY(-100%) {{translateX}}'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('220ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          top: '50%',
          transform: 'translateY(-50%) {{translateX}} scale(0)',
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('220ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          top: '50%',
          transform: 'translateY(-50%) {{translateX}} scale(1)',
          opacity: 1
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => bottom', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          bottom: '0',
          transform: 'translateY(100%) {{translateX}}'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('220ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('top => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          top: '0',
          transform: '*'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('140ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          top: '0',
          transform: 'translateY(-100%) {{translateX}}'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('center => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          top: '50%',
          transform: '*',
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('140ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          top: '50%',
          transform: 'translateY(-50%) {{translateX}} scale(0)',
          opacity: 0
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('bottom => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          bottom: '0',
          transform: '*'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('140ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          bottom: '0',
          transform: 'translateY(100%) {{translateX}}'
        }))]) // state('bottom', style({ bottom: '0', transform: '*' })),
        // state('top', style({ top: '0', transform: '*' })),
        // state('center', style({ top: '50%', transform: 'translateY(-50%) {{translateX}}' }))
        ]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '{{opacity}}'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{inDuration}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '1'
        }))], {
          params: {
            opacity: 0,
            inDuration: '250ms'
          }
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '1'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{outDuration}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '0'
        }))], {
          params: {
            opacity: 0,
            outDuration: '200ms'
          }
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '0'
        }))])],
        styles: ["ion-grid{--ion-grid-padding:0;--ion-grid-column-padding:0}.dialog{--min-width:340px;position:absolute;min-width:var(--min-width)}@media (max-width:600px){.dialog{--min-width:100%}}.dialog.fill{background:var(--ion-item-background);box-shadow:0 4px 16px rgba(0,0,0,.12)}.dialog.fill .sc-ion-card-ios-h,.dialog.fill .sc-ion-card-md-h{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;box-shadow:none;margin-top:0;margin-bottom:0}.dialog.fill.bottom .sc-ion-card-ios-h,.dialog.fill.bottom .sc-ion-card-md-h,.dialog.fill.top .sc-ion-card-ios-h,.dialog.fill.top .sc-ion-card-md-h{border-radius:0}.dialog.top.left{padding-top:env(safe-area-inset-top);top:0;left:0}.dialog.top.right{padding-top:env(safe-area-inset-top);top:0;right:0}.dialog.top.middle{padding-top:env(safe-area-inset-top);top:0;left:50%;transform:translateX(-50%)}.dialog.center.middle{padding-top:env(safe-area-inset-top);top:50%;left:50%;transform:translate(-50%,-50%)}.dialog.center.left{top:50%;padding-top:env(safe-area-inset-top);left:0;transform:translateY(-50%)}.dialog.center.right{right:0;top:50%;padding-top:env(safe-area-inset-top);transform:translateY(-50%)}.dialog.bottom.left{bottom:0;left:0;padding-bottom:env(safe-area-inset-bottom)}.dialog.bottom.right{bottom:0;right:0;padding-bottom:env(safe-area-inset-bottom)}.dialog.bottom.middle{bottom:0;left:50%;transform:translateX(-50%);padding-bottom:env(safe-area-inset-bottom)}.backdrop{width:100%;height:100%;--background:rgba(0, 0, 0, 0.2);position:absolute}"]
      }]
    }];
    /** @nocollapse */

    FivDialog.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["DomController"]
      }, {
        type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"]
      }];
    };

    FivDialog.propDecorators = {
      verticalAlign: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      horizontalAlign: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      shape: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      priority: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      backdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      backdropDismiss: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pullEnabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      duration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      inDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivDurationOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      overlay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [FivOverlay, {
          "static": false
        }]
      }],
      bar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [FivLoadingProgressBar, {
          "static": false
        }]
      }],
      dialogRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['dialog', {
          "static": false
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dialog/dialog.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function DialogOptions() {}

    if (false) {}

    var FivDialogService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} overlay
       */
      function FivDialogService(overlay) {
        _classCallCheck(this, FivDialogService);

        this.overlay = overlay;
      }
      /**
       * @param {?} viewContainerRef
       * @param {?} content
       * @param {?=} options
       * @return {?}
       */


      _createClass(FivDialogService, [{
        key: "openDialog",
        value: function openDialog(viewContainerRef, content, options) {
          /** @type {?} */
          var c = this.overlay.createOverlay(viewContainerRef, FivDialog, content);
          c.instance.verticalAlign = options ? options.verticalAlign : 'top';
          c.instance.verticalAlign = options ? options.verticalAlign : 'center';
          c.instance.backdrop = options ? options.backdrop : true;
          c.instance.duration = options ? options.duration : 0;
          c.instance.shape = options ? options.shape : 'card';
          c.instance.open();
          return c;
        }
      }]);

      return FivDialogService;
    }();

    FivDialogService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FivDialogService.ctorParameters = function () {
      return [{
        type: FivOverlayService
      }];
    };
    /** @nocollapse */


    FivDialogService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FivDialogService_Factory() {
        return new FivDialogService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(FivOverlayService));
      },
      token: FivDialogService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/overlay/overlay.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivOverlayModule = function FivOverlayModule() {
      _classCallCheck(this, FivOverlayModule);
    };

    FivOverlayModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivOverlay, FivOverlayContent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [FivOverlay, FivOverlayContent],
        entryComponents: [FivOverlayContent],
        providers: [FivOverlayService]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dialog/dialog.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivDialogModule = function FivDialogModule() {
      _classCallCheck(this, FivDialogModule);
    };

    FivDialogModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivDialog],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], FivLoadingProgressBarModule, FivOverlayModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], FivPullModule],
        exports: [FivDialog],
        entryComponents: [FivDialog],
        providers: [FivDialogService]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/editable-label/editable-label.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FivEditableLabel;
      }),
      multi: true
    };

    var FivEditableLabel =
    /*#__PURE__*/
    function () {
      function FivEditableLabel() {
        _classCallCheck(this, FivEditableLabel);

        this.type = 'label';
        this.disabled = false;
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(FivEditableLabel, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this35 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this35.internalValue = _this35.value;
          });
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "edit",

        /**
         * @return {?}
         */
        value: function edit() {
          this.editing = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "stopEdit",
        value: function stopEdit() {
          this.editing = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "onEscapeClick",
        value: function onEscapeClick() {
          this.internalValue = this.value;
          this.stopEdit();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onEnterClick",
        value: function onEnterClick() {
          this.value = this.internalValue;
          this.stopEdit();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (value !== undefined && value !== this._value) {
            this._value = value;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "onBlur",
        value: function onBlur() {
          this.blur.emit();
          this.stopEdit();

          if (this.onTouchedCallback) {
            this.onTouchedCallback();
          }
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChangeCallback = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouchedCallback = fn;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "titleAnimDone",
        value: function titleAnimDone(event) {
          if (event.toState === 'void') {
            this.input.setFocus();
          }
        }
      }, {
        key: "editing",
        get: function get() {
          return this._editing;
        }
        /**
         * @param {?} edit
         * @return {?}
         */
        ,
        set: function set(edit) {
          this._editing = edit;
        }
      }, {
        key: "internalValue",
        set: function set(value) {
          if (value !== this._value) {
            this._value = value;

            if (this.onChangeCallback) {
              this.onChangeCallback(this._value);
            }
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._value;
        }
      }]);

      return FivEditableLabel;
    }();

    FivEditableLabel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-editable-label',
        template: "<!-- TODO if value is empty label or title can not be clicked, show placeholder?! -->\n<ion-title *ngIf=\"type === 'title' && !editing\" (click)=\"edit()\" (@titleAnim.done)=\"titleAnimDone($event)\" [@titleAnim]>\n    {{value}}</ion-title>\n<ion-label *ngIf=\"type === 'label' && !editing\" class=\"label\" (click)=\"edit()\" (@titleAnim.done)=\"titleAnimDone($event)\" [@titleAnim]>\n    {{value}}</ion-label>\n<ion-input *ngIf=\"editing\" [(ngModel)]=\"internalValue\" (blur)=\"onBlur()\" (keyup.enter)=\"onEnterClick()\"\n    (keyup.escape)=\"onEscapeClick()\" #input [@titleAnim] [ngClass]=\"{'title-input': type === 'title'}\">\n</ion-input>",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('titleAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '0',
          transform: 'translateY(-20%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('175ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '1',
          transform: 'translateY(0)'
        }))])])],
        providers: [CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR],
        styles: [":host{width:100%}.label{max-width:100%}:host *{pointer-events:auto}:host(.editable-label-disabled){pointer-events:none}.title-input{font-size:20px;font-weight:500;color:var(--color)}"]
      }]
    }];
    /** @nocollapse */

    FivEditableLabel.ctorParameters = function () {
      return [];
    };

    FivEditableLabel.propDecorators = {
      editing: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.editable-label-disabled']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      blur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      input: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['input', {
          "static": false
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/editable-label/editable-label.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivEditableLabelModule = function FivEditableLabelModule() {
      _classCallCheck(this, FivEditableLabelModule);
    };

    FivEditableLabelModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivEditableLabel],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [FivEditableLabel]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/expandable/expandable.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivExpandable =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} change
       */
      function FivExpandable(change) {
        _classCallCheck(this, FivExpandable);

        this.change = change;
        this.isOpen = false;
        this.fivWillOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDidOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivWillClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDidClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(FivExpandable, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          this.fivWillOpen.emit(this);
          this.isOpen = true;
          this.change.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (this.isOpen === false) {
            this.open();
          } else {
            this.close();
          }
        }
        /**
         * @param {?=} param
         * @return {?}
         */

      }, {
        key: "close",
        value: function close(param) {
          this.param = param;
          this.fivWillClose.emit(this);
          this.isOpen = false;
          this.change.detectChanges();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onAnimationEnd",
        value: function onAnimationEnd(event) {
          if (event.fromState === 'closed') {
            this.fivDidOpen.emit(this);
          } else if (event.fromState === 'open') {
            this.fivDidClose.emit({
              expandable: this,
              param: this.param
            });
            this.param = null;
          }
        }
      }]);

      return FivExpandable;
    }();

    FivExpandable.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-expandable',
        template: "<div>\n  <ng-content select=\"[header]\"></ng-content>\n  <div [@listAnim]=\"{value: isOpen ? 'open' : 'closed', params: timingFunction ? {time: timingFunction} : {}}\" (@listAnim.done)=\"onAnimationEnd($event)\"\n    style=\"overflow: hidden\">\n    <ng-content select=\"[content]\"></ng-content>\n  </div>\n</div>",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('listAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '*',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '0',
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{time}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '0',
          opacity: 0,
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '*',
          opacity: 0.1,
          offset: 0.8
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '*',
          opacity: 1,
          offset: 1
        })]))], {
          params: {
            time: '270ms ease-out'
          }
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{time}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '*',
          opacity: 1,
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '*',
          opacity: 0.1,
          offset: 0.2
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '0',
          opacity: 0,
          offset: 1
        })]))], {
          params: {
            time: '220ms ease-out'
          }
        })])],
        styles: [""]
      }]
    }];
    /** @nocollapse */

    FivExpandable.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    FivExpandable.propDecorators = {
      isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      timingFunction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivWillOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivDidOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivWillClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivDidClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/expandable/expandable-indicator/expandable-indicator.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivExpandableIndicator =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} expandable
       */
      function FivExpandableIndicator(expandable) {
        _classCallCheck(this, FivExpandableIndicator);

        this.expandable = expandable;
        this.icon = 'ios-arrow-down';
      }
      /**
       * @return {?}
       */


      _createClass(FivExpandableIndicator, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FivExpandableIndicator;
    }();

    FivExpandableIndicator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-expandable-indicator',
        template: "<ion-icon class=\"indicator\" [ngClass]=\"{'rotate': expandable.isOpen}\" [name]=\"icon\"></ion-icon>",
        styles: [":host{display:flex}.indicator{transition:125ms}.indicator.rotate{transform:rotateZ(180deg)}"]
      }]
    }];
    /** @nocollapse */

    FivExpandableIndicator.ctorParameters = function () {
      return [{
        type: FivExpandable
      }];
    };

    FivExpandableIndicator.propDecorators = {
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/expandable/expandable.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivExpandableModule = function FivExpandableModule() {
      _classCallCheck(this, FivExpandableModule);
    };

    FivExpandableModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivExpandable, FivExpandableIndicator],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [FivExpandable, FivExpandableIndicator]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/gallery/gallery-toolbar/gallery-toolbar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivGalleryToolbar =
    /*#__PURE__*/
    function () {
      function FivGalleryToolbar() {
        _classCallCheck(this, FivGalleryToolbar);

        this.position = 'top';
      }
      /**
       * @return {?}
       */


      _createClass(FivGalleryToolbar, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FivGalleryToolbar;
    }();

    FivGalleryToolbar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-gallery-toolbar',
        template: "<ng-template #ref>\n  <ng-content></ng-content>\n</ng-template>",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    FivGalleryToolbar.ctorParameters = function () {
      return [];
    };

    FivGalleryToolbar.propDecorators = {
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
          "static": false
        }]
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/gallery/gallery-image/gallery-image.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivGalleryImage =
    /*#__PURE__*/
    function () {
      function FivGalleryImage() {
        _classCallCheck(this, FivGalleryImage);

        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(FivGalleryImage, [{
        key: "open",
        value: function open() {
          this.click.emit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FivGalleryImage;
    }();

    FivGalleryImage.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-gallery-image',
        template: "<ng-container *ngIf=\"!src\">\n  <ng-content></ng-content>\n</ng-container>\n<div class=\"ion-activatable\" (click)=\"open()\">\n  <img #thumbnail class=\"thumbnail\" [src]=\"src\">\n  <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n</div>",
        styles: [":host{display:block;--max-height:100%;--border-radius:0px;min-height:var(--max-height);--background:var(--ion-color-light);background:var(--background)}.thumbnail{-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;display:block;height:var(--height,auto);max-height:var(--max-height);width:var(--width,100%);border-radius:var(--border-radius)}.ion-activatable{position:relative;--ripple-color:rgba(0, 0, 0, 0.5)}"]
      }]
    }];
    /** @nocollapse */

    FivGalleryImage.ctorParameters = function () {
      return [];
    };

    FivGalleryImage.propDecorators = {
      src: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      thumbnail: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['thumbnail', {
          "static": false
        }]
      }],
      click: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/animations/animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: '{{ fromOpacity }}'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: '{{ toOpacity }}'
    }))]);
    /** @type {?} */

    var translate = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translate({{toX}},{{toY}})'
    }))]);
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/gallery/image.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ImageService =
    /*#__PURE__*/
    function () {
      function ImageService() {
        _classCallCheck(this, ImageService);
      }
      /**
       * @param {?} imgEl
       * @return {?}
       */


      _createClass(ImageService, [{
        key: "getAverageRGB",
        value: function getAverageRGB(imgEl) {
          /** @type {?} */
          var blockSize = 5;
          /** @type {?} */

          var // only visit every 5 pixels
          defaultRGB = {
            r: 0,
            g: 0,
            b: 0
          };
          /** @type {?} */

          var // for non-supporting envs
          canvas = document.createElement('canvas');
          /** @type {?} */

          var context = canvas.getContext && canvas.getContext('2d');
          /** @type {?} */

          var rgb = {
            r: 0,
            g: 0,
            b: 0
          };
          /** @type {?} */

          var data;
          /** @type {?} */

          var width;
          /** @type {?} */

          var height;
          /** @type {?} */

          var length;
          /** @type {?} */

          var i = -4;
          /** @type {?} */

          var count = 0;

          if (!context) {
            return "rgb(".concat(defaultRGB.r, ",").concat(defaultRGB.g, ",").concat(defaultRGB.b, ")");
          }

          height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
          width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
          context.drawImage(imgEl, 0, 0);

          try {
            data = context.getImageData(0, 0, width, height);
          } catch (e) {
            /* security error, img on diff domain */
            return "rgb(".concat(defaultRGB.r, ",").concat(defaultRGB.g, ",").concat(defaultRGB.b, ")");
          }

          length = data.data.length;

          while ((i += blockSize * 4) < length) {
            ++count;
            rgb.r += data.data[i];
            rgb.g += data.data[i + 1];
            rgb.b += data.data[i + 2];
          } // ~~ used to floor values


          rgb.r = Math.floor(rgb.r / count);
          rgb.g = Math.floor(rgb.g / count);
          rgb.b = Math.floor(rgb.b / count);
          return "rgb(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ")");
        }
      }]);

      return ImageService;
    }();

    ImageService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ImageService.ctorParameters = function () {
      return [];
    };
    /** @nocollapse */


    ImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ImageService_Factory() {
        return new ImageService();
      },
      token: ImageService,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/gallery/gallery.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivGallery =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} domCtrl
       * @param {?} renderer
       * @param {?} animation
       * @param {?} change
       * @param {?} platform
       * @param {?} imageService
       * @param {?} document
       */
      function FivGallery(domCtrl, renderer, animation, change, platform, imageService, document) {
        _classCallCheck(this, FivGallery);

        this.domCtrl = domCtrl;
        this.renderer = renderer;
        this.animation = animation;
        this.change = change;
        this.platform = platform;
        this.imageService = imageService;
        this.document = document;
        this.activeIndex = 0;
        this.inFullscreen = false;
        this.zoomedIn = false;
        this.controlsVisible = true;
        this.slidesLoaded = false;
        this.morphing = false;
        this.backdrop = false;
        this.backdropColor = '#000000ee';
        this.pagerVisible = true;
        this.ambient = false;
        this.willOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.willClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.didOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.didClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.backdropChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.$onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }
      /**
       * @return {?}
       */


      _createClass(FivGallery, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.updateImagesIndex();
          this.setupToolbars();
          this.subscribeToImageEvents();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.$onDestroy.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "subscribeToImageEvents",
        value: function subscribeToImageEvents() {
          var _this36 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.images.map(
          /**
          * @param {?} image
          * @return {?}
          */
          function (image) {
            return image.click;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy)).subscribe(
          /**
          * @param {?} image
          * @return {?}
          */
          function (image) {
            _this36.open(image);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateImagesIndex",
        value: function updateImagesIndex() {
          this.images.forEach(
          /**
          * @param {?} img
          * @param {?} i
          * @return {?}
          */
          function (img, i) {
            img.index = i;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "setupToolbars",
        value: function setupToolbars() {
          var _this37 = this;

          this.toolbars.forEach(
          /**
          * @param {?} toolbar
          * @return {?}
          */
          function (toolbar) {
            if (toolbar.position === 'top') {
              _this37.topToolbar = toolbar.content;
            } else {
              _this37.bottomToolbar = toolbar.content;
            }
          });
        }
        /**
         * @param {?} initial
         * @return {?}
         */

      }, {
        key: "open",
        value: function open(initial) {
          var _this38 = this;

          this.willOpen.emit(initial);
          this.activeIndex = initial.index;
          this.morphing = true;
          this.overlay.show(50000);
          this.initialImage = initial;
          this.updateBackdrop(this.activeIndex);
          this.initialImage.originalSrc = initial.src;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            //wait a little for ripple
            _this38.backdrop = true;

            _this38.showControls();

            _this38.morphIn();
          }, 300);
        }
        /**
         * @return {?}
         */

      }, {
        key: "morphIn",
        value: function morphIn() {
          var _this39 = this;

          this.morphOverlay.show(49999);
          /** @type {?} */

          var f = Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["getPosition"])(this.initialImage.thumbnail);
          /** @type {?} */

          var t = this.calculateImagePosition();
          /** @type {?} */

          var tweenDone = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["tween"])(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["easeOutSine"], 320).pipe(Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["fromToPixels"])(this.morphImage, f.top, t.top, 'top'), Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["fromToPixels"])(this.morphImage, f.left, t.left, 'left'), Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["fromToPixels"])(this.morphImage, f.height, t.height, 'height'), Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["fromToPixels"])(this.morphImage, f.width, t.width, 'width')).subscribe({
            complete:
            /**
            * @return {?}
            */
            function complete() {
              tweenDone.next();
            }
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(tweenDone, !this.slidesLoaded ? this.slides.ionSlidesDidLoad : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @return {?}
          */
          function () {
            _this39.morphing = false;

            _this39.morphOverlay.hide();

            _this39.didOpen.emit(_this39.initialImage);

            _this39.swiper.nativeElement.swiper.on('click',
            /**
            * @return {?}
            */
            function () {
              _this39.handleSingleTap();
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy)).subscribe();
        }
        /**
         * @return {?}
         */

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.close(false);
        }
        /**
         * @param {?=} emit
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          var emit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          if (emit) {
            this.willClose.emit(this.initialImage);
          }

          this.backdrop = false;
          /** @type {?} */

          var sameAsInitial = this.images.toArray()[this.activeIndex].index === this.initialImage.index;

          if (sameAsInitial) {
            this.morphBack();
          } else {
            this.slideOut();
          }

          this.resetSlides(0);

          if (this.inFullscreen) {
            this.closeFullscreen();
          }

          this.slidesLoaded = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "morphBack",
        value: function morphBack() {
          var _this40 = this;

          /** @type {?} */
          var f = Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["getPosition"])(this.getActiveImage());
          /** @type {?} */

          var t = Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["getPosition"])(this.initialImage.thumbnail);
          this.overlay.hide();
          this.morphOverlay.show();
          Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["tween"])(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["easeOutSine"], 240).pipe(Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["fromToPixels"])(this.morphImage, f.top, t.top, 'top'), Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["fromToPixels"])(this.morphImage, f.left, t.left, 'left'), Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["fromToPixels"])(this.morphImage, f.height, t.height, 'height'), Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["fromToPixels"])(this.morphImage, f.width, t.width, 'width')).subscribe({
            complete:
            /**
            * @return {?}
            */
            function complete() {
              _this40.morphOverlay.hide();

              _this40.didClose.emit(_this40.initialImage);

              _this40.initialImage = null;
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "slideOut",
        value: function slideOut() {
          var _this41 = this;

          this.overlay.hide();
          this.morphOverlay.show();
          this.morphImage.nativeElement.src = this.getActiveImage().nativeElement.src;
          Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["setPosition"])(this.morphImage, Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["getPosition"])(this.getActiveImage()));
          Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["tween"])(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["easeOutSine"], 240).pipe(Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["fromTo"])(this.morphImage, 'transform', 0, 100,
          /**
          * @param {?} t
          * @return {?}
          */
          function (t) {
            return "translateY(".concat(t, "%)");
          })).subscribe({
            complete:
            /**
            * @return {?}
            */
            function complete() {
              _this41.morphImage.nativeElement.style.transform = '';

              _this41.morphOverlay.hide();

              _this41.didClose.emit(_this41.initialImage);

              _this41.initialImage = null;
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getActiveImage",
        value: function getActiveImage() {
          return this.slideImages.toArray()[this.activeIndex];
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "transformSlides",
        value: function transformSlides(progress) {
          var _this42 = this;

          if (this.controlsVisible) {
            this.hideControls();
          }

          this.domCtrl.write(
          /**
          * @return {?}
          */
          function () {
            _this42.renderer.setStyle(_this42.viewer.nativeElement, 'transform', "translateY(".concat(progress * 120, "px)"));
          });
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "resetSlides",
        value: function resetSlides(progress) {
          var _this43 = this;

          /** @type {?} */
          var reset = this.animation.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "translateY(".concat(progress * 120, "px)")
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "translateY(0px)"
          }))]);
          /** @type {?} */

          var animation = reset.create(this.viewer.nativeElement);
          animation.play();
          animation.onDone(
          /**
          * @return {?}
          */
          function () {
            animation.destroy();

            _this43.transformSlides(0);

            _this43.showControls();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "slideDidChange",
        value: function slideDidChange() {
          this.activeIndex = this.swiper.nativeElement.swiper.activeIndex;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ionSlideNextStart",
        value: function ionSlideNextStart() {
          if (this.slidesLoaded) {
            this.updateBackdrop(this.activeIndex + 1);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ionSlidePrevStart",
        value: function ionSlidePrevStart() {
          if (this.slidesLoaded) {
            this.updateBackdrop(this.activeIndex - 1);
          }
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "updateBackdrop",
        value: function updateBackdrop(index) {
          this.backdropColor = this.ambient ? this.imageService.getAverageRGB(this.images.toArray()[index].thumbnail.nativeElement) : '#000000ee';
          this.backdropChange.emit();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onSlidesLoad",
        value: function onSlidesLoad() {
          this.slidesLoaded = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "calculateImagePosition",
        value: function calculateImagePosition() {
          /** @type {?} */
          var nH = this.initialImage.thumbnail.nativeElement.naturalHeight;
          /** @type {?} */

          var nW = this.initialImage.thumbnail.nativeElement.naturalWidth;
          /** @type {?} */

          var height = Math.min(nH, this.platform.height());
          /** @type {?} */

          var width = Math.min(nW, this.platform.width());
          /** @type {?} */

          var ratio = nW / nH;

          if (ratio * height < width) {
            width = height * ratio;
          } else {
            height = width / ratio;
          }
          /** @type {?} */


          var top = this.platform.height() / 2 - height / 2;
          /** @type {?} */

          var left = this.platform.width() / 2 - width / 2;
          /** @type {?} */

          var p = {
            height: height,
            width: width,
            left: left,
            top: top
          };
          return p;
        }
        /**
         * @return {?}
         */

      }, {
        key: "fullscreen",
        value: function fullscreen() {
          if (this.inFullscreen) {
            this.closeFullscreen();
          } else {
            this.openFullscreen();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "openFullscreen",
        value: function openFullscreen() {
          /** @type {?} */
          var elem = document.documentElement;

          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem['mozRequestFullScreen']) {
            /* Firefox */
            elem['mozRequestFullScreen']();
          } else if (elem['webkitRequestFullscreen']) {
            /* Chrome, Safari and Opera */
            elem['webkitRequestFullscreen']();
          } else if (elem['msRequestFullscreen']) {
            /* IE/Edge */
            elem['msRequestFullscreen']();
          }

          this.inFullscreen = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "closeFullscreen",
        value: function closeFullscreen() {
          this.inFullscreen = false;

          if (this.document.exitFullscreen) {
            this.document.exitFullscreen();
          } else if (this.document.mozCancelFullScreen) {
            /* Firefox */
            this.document.mozCancelFullScreen();
          } else if (this.document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            this.document.webkitExitFullscreen();
          } else if (this.document.msExitFullscreen) {
            /* IE/Edge */
            this.document.msExitFullscreen();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "zoom",
        value: function zoom() {
          if (this.zoomedIn) {
            this.zoomOut();
          } else {
            this.zoomIn();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "zoomIn",
        value: function zoomIn() {
          this.swiper.nativeElement.swiper.zoom["in"]();
          this.zoomedIn = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "zoomOut",
        value: function zoomOut() {
          this.swiper.nativeElement.swiper.zoom.out();
          this.zoomedIn = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleSingleTap",
        value: function handleSingleTap() {
          this.controlsVisible = !this.controlsVisible;
          this.change.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "hideControls",
        value: function hideControls() {
          this.controlsVisible = false;
          this.change.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "showControls",
        value: function showControls() {
          this.controlsVisible = true;
          this.change.detectChanges();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "keyEvent",
        value: function keyEvent(event) {
          if (this.slidesLoaded && !this.morphing) {
            this.handleKeyboardEvents(event);
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "handleKeyboardEvents",
        value: function handleKeyboardEvents(event) {
          if (event.key === 'ArrowRight') {
            this.next();
            return;
          }

          if (event.key === 'ArrowLeft') {
            this.prev();
            return;
          }

          if (event.key === 'ArrowDown' || event.key === 'Escape') {
            this.close();
            return;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "next",
        value: function next() {
          if (this.slides && this.slidesLoaded) {
            this.slides.slideNext();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "prev",
        value: function prev() {
          if (this.slides && this.slidesLoaded) {
            this.slides.slidePrev();
          }
        }
      }]);

      return FivGallery;
    }();

    FivGallery.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-gallery',
        template: "<ng-content></ng-content>\n<fiv-overlay #overlay>\n  <div [style.background]=\"backdropColor\" [@fade] class=\"backdrop\" *ngIf=\"overlay.open && backdrop\"></div>\n\n  <div [style.visibility]=\"!morphing ? 'visible' : 'hidden'\">\n    <div [@slideDown] *ngIf=\"controlsVisible && topToolbar\" class=\"gallery-toolbar header\" color=\"transparent\">\n      <ng-container [ngTemplateOutlet]=\"topToolbar\">\n      </ng-container>\n    </div>\n\n    <ng-container *fivIf=\"['desktop']\">\n      <ion-fab [@scale] *ngIf=\"controlsVisible && images?.length > 0 && pagerVisible\" vertical=\"center\"\n        horizontal=\"start\" slot=\"fixed\">\n        <ion-fab-button color=\"light\" (click)=\"prev()\" [disabled]=\"activeIndex === 0\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ng-container>\n\n    <div #viewer class=\"viewer\" fivPull [maxPullHeight]=\"160\" [minPullHeight]=\"120\" (fivPull)=\"transformSlides($event)\"\n      (fivRefresh)=\"close()\" (fivCancel)=\"resetSlides($event)\" [enableScroll]=\"true\">\n      <ion-slides #slider *ngIf=\"overlay.open\" (ionSlideDidChange)=\"slideDidChange()\"\n        (ionSlideNextStart)=\"ionSlideNextStart()\" (ionSlidePrevStart)=\"ionSlidePrevStart()\"\n        (ionSlidesDidLoad)=\"onSlidesLoad()\" [options]=\"{ zoom: true, initialSlide: initialImage?.index}\">\n        <ion-slide *ngFor=\"let image of images; let i = index\">\n          <div class=\"swiper-zoom-container\">\n            <img #slideImage [ngClass]=\"{'instant': activeIndex !== i}\" [src]=\"image.src\">\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <ng-container *fivIf=\"['desktop']\">\n      <ion-fab [@scale] *ngIf=\"controlsVisible && pagerVisible\" vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"light\" (click)=\"next()\" [disabled]=\"activeIndex === images.length - 1\">\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ng-container>\n\n    <div [@slideUp] *ngIf=\"controlsVisible && bottomToolbar\" class=\"gallery-toolbar footer\" color=\"transparent\">\n      <ng-container [ngTemplateOutlet]=\"bottomToolbar\">\n      </ng-container>\n    </div>\n  </div>\n\n\n\n\n</fiv-overlay>\n<fiv-overlay #morphOverlay>\n  <img #morph class=\"morph\" *ngIf=\"initialImage\" [src]=\"initialImage.src\">\n</fiv-overlay>",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scale', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'scale(0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'scale(1)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'scale(1)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'scale(0)'
        }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'translateY(100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('75ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'translateY(0%)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'translateY(0%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('75ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'translateY(100%)'
        }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'translateY(0%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('75ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'translateY(-100%)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'translateY(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('75ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'translateY(0%)'
        }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(fade, {
          params: {
            fromOpacity: 1,
            toOpacity: 0,
            time: '240ms'
          }
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(fade, {
          params: {
            fromOpacity: 0,
            toOpacity: 1,
            time: '240ms'
          }
        }))])],
        styles: [".viewer{width:100vw;height:100vh}.viewer ion-slides{height:100%}.viewer img{height:auto;max-height:100%;width:auto;max-width:100%}.viewer img.instant{transition-duration:0s!important}.gallery-toolbar{width:100%;--fiv-gallery-toolbar-color:#fff;position:absolute;color:var(--fiv-gallery-toolbar-color)}.gallery-toolbar.header{top:env(safe-area-inset-top)}.gallery-toolbar.footer{bottom:env(safe-area-inset-bottom)}.morph{position:absolute;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;display:block}.backdrop{height:100vh;width:100vw;position:absolute;transition:background-color .2s}"]
      }]
    }];
    /** @nocollapse */

    FivGallery.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["DomController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: ImageService
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    FivGallery.propDecorators = {
      overlay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['overlay', {
          "static": false
        }]
      }],
      morphOverlay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['morphOverlay', {
          "static": false
        }]
      }],
      viewer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['viewer', {
          "static": false
        }]
      }],
      morphImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['morph', {
          "static": false
        }]
      }],
      swiper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['slider', {
          "static": false,
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }]
      }],
      slides: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['slider', {
          "static": false
        }]
      }],
      slideImages: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
        args: ['slideImage']
      }],
      images: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return FivGalleryImage;
        }), {
          descendants: true
        }]
      }],
      toolbars: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [FivGalleryToolbar]
      }],
      pagerVisible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ambient: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      willOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      willClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      didOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      didClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      backdropChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      keyEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['window:keyup', ['$event']]
      }]
    };

    if (false) {}

    var Position = function Position() {
      _classCallCheck(this, Position);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/if-platform/if-platform.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivIfPlatform =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} platform
       * @param {?} viewContainer
       * @param {?} templateRef
       */
      function FivIfPlatform(platform, viewContainer, templateRef) {
        _classCallCheck(this, FivIfPlatform);

        this.platform = platform;
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
      }
      /**
       * @param {?} platforms
       * @return {?}
       */


      _createClass(FivIfPlatform, [{
        key: "fivIf",
        set: function set(platforms) {
          var _this44 = this;

          /** @type {?} */
          var show = true;
          platforms.forEach(
          /**
          * @param {?} p
          * @return {?}
          */
          function (p) {
            if (!_this44.platform.is(p)) {
              show = false;
            }
          });

          if (show) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        }
      }]);

      return FivIfPlatform;
    }();

    FivIfPlatform.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[fivIf]'
      }]
    }];
    /** @nocollapse */

    FivIfPlatform.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    FivIfPlatform.propDecorators = {
      fivIf: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/if-platform/if-platform.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivIfModule = function FivIfModule() {
      _classCallCheck(this, FivIfModule);
    };

    FivIfModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivIfPlatform],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [FivIfPlatform]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/gallery/gallery-toolbar-content/gallery-toolbar-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivGalleryToolbarContent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} gallery
       */
      function FivGalleryToolbarContent(gallery) {
        _classCallCheck(this, FivGalleryToolbarContent);

        this.gallery = gallery;
      }
      /**
       * @return {?}
       */


      _createClass(FivGalleryToolbarContent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FivGalleryToolbarContent;
    }();

    FivGalleryToolbarContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-gallery-toolbar-content',
        template: "<ion-toolbar color=\"transparent\">\n  <ion-buttons slot=\"start\">\n    <ion-button (click)=\"gallery.close()\">\n      <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"gallery.fullscreen()\">\n      <fiv-icon slot=\"icon-only\" [name]=\"gallery.inFullscreen ? 'contract': 'expand'\"></fiv-icon>\n    </ion-button>\n    <ion-button (click)=\"gallery.zoom()\">\n      <fiv-icon slot=\"icon-only\" [name]=\"gallery.zoomedIn ? 'remove': 'add'\"></fiv-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    FivGalleryToolbarContent.ctorParameters = function () {
      return [{
        type: FivGallery,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/gallery/gallery.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivGalleryModule = function FivGalleryModule() {
      _classCallCheck(this, FivGalleryModule);
    };

    FivGalleryModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivGallery, FivGalleryImage, FivGalleryToolbar, FivGalleryToolbarContent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], FivIconModule, FivIfModule, FivPullModule, FivOverlayModule],
        exports: [FivGallery, FivGalleryImage, FivGalleryToolbar, FivGalleryToolbarContent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/refresher/refresher-content/refresher-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivRefresherContent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} renderer
       * @param {?} builder
       */
      function FivRefresherContent(element, renderer, builder) {
        _classCallCheck(this, FivRefresherContent);

        this.element = element;
        this.renderer = renderer;
        this.builder = builder;
        this._progress = 0;
        this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivShowed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visible = false;
      }
      /**
       * @param {?} progress
       * @return {?}
       */


      _createClass(FivRefresherContent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "load",
        value: function load() {
          this.visible = true;
          this.spinner.spin();
          this.fivRefresh.emit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "unload",
        value: function unload() {
          this.spinner.stop();
        }
        /**
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this45 = this;

          if (!this.visible) {
            this.visible = true;
            /** @type {?} */

            var animation = this.builder.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'scale(0)'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'scale(1)'
            }))]);
            /** @type {?} */

            var player = animation.create(this.background.nativeElement);
            player.play();
            player.onDone(
            /**
            * @return {?}
            */
            function () {
              _this45.fivShowed.emit(_this45);

              player.destroy();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          var _this46 = this;

          if (this.visible) {
            /** @type {?} */
            var transform = "scale(1)";
            /** @type {?} */

            var animation = this.builder.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: transform
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: "scale(0)"
            }))]);
            /** @type {?} */

            var player = animation.create(this.background.nativeElement);
            player.play();
            player.onDone(
            /**
            * @return {?}
            */
            function () {
              _this46.fivHidden.emit(_this46);

              _this46.visible = false;
              player.destroy();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "complete",
        value: function complete() {
          this.unload();
          this.fivComplete.emit(this);
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(progress) {
          this.spinner.setValue(progress);
        }
        /**
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this.spinner.setMode('indeterminate');
        }
      }, {
        key: "progress",
        set: function set(progress) {
          this._progress = progress;

          if (progress < 1) {
            this.renderer.setStyle(this.spinnerRef.nativeElement, 'transform', "rotateZ(".concat(360 * progress, "deg)"));
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._progress;
        }
      }]);

      return FivRefresherContent;
    }();

    FivRefresherContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-refresher-content',
        template: "<div #background class=\"spinner-background\" [ngClass]=\"{'hidden': progress === 0}\">\n    <fiv-spinner #spinner (fivProgress)=\"fivProgress.emit($event)\" (fivComplete)=\"complete()\" [circleRadius]=\"8\"\n        [diameter]=\"20\" [strokeWidth]=\"2\"></fiv-spinner>\n</div>",
        styles: [":host{--fiv-spinner-size:40px;position:absolute;width:var(--fiv-spinner-size);height:var(--fiv-spinner-size);top:calc(-1 * var(--fiv-spinner-size));left:calc(50% - var(--fiv-spinner-size)/ 2);z-index:9}.spinner-background:not(.hidden){box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}.spinner-background{position:absolute;width:40px;height:40px;background:var(--fiv-spin-background);border-radius:50%}.spinner-background fiv-spinner{position:absolute;top:10px;left:10px}"]
      }]
    }];
    /** @nocollapse */

    FivRefresherContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"]
      }];
    };

    FivRefresherContent.propDecorators = {
      progress: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivComplete: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivRefresh: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivHidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivShowed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivProgress: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      spinner: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['spinner', {
          "static": false
        }]
      }],
      spinnerRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['spinner', {
          "static": true,
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }]
      }],
      background: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['background', {
          "static": false
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/refresher/refresher.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivRefresher =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} builder
       * @param {?} refresher
       * @param {?} renderer
       * @param {?} platform
       */
      function FivRefresher(builder, refresher, renderer, platform) {
        _classCallCheck(this, FivRefresher);

        this.builder = builder;
        this.refresher = refresher;
        this.renderer = renderer;
        this.platform = platform;
        this.hintText = 'new posts';
        this.maxPullHeight = 168;
        this.minPullHeight = 112;
        this.fivProgressChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hintVisible = false;
        this.currentProgress = 0;
        this.refreshing = false;
        this.$onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }
      /**
       * @return {?}
       */


      _createClass(FivRefresher, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.attachPullDirective();

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.$onDestroy.next();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "attachPullDirective",
        value: function attachPullDirective() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this47 = this;

            var content, scroll, pull;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    /** @type {?} */
                    content = this.refresher.nativeElement.closest('ion-content');

                    if (content) {
                      _context7.next = 3;
                      break;
                    }

                    throw new Error('The fiv-refresher component needs to be inside of an ion-content.');

                  case 3:
                    content.scrollEvents = true;
                    /** @type {?} */

                    _context7.next = 6;
                    return content.getScrollElement();

                  case 6:
                    scroll = _context7.sent;

                    /** @type {?} */
                    pull = new FivPull(new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"](content), this.platform, content);
                    pull.init();
                    pull.fivPull.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
                    /**
                    * @return {?}
                    */
                    function () {
                      return !_this47.refreshing && !_this47.hintVisible;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
                    /**
                    * @param {?} progress
                    * @return {?}
                    */
                    function (progress) {
                      return _this47.fivPull(progress);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy)).subscribe();
                    pull.fivRefresh.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
                    /**
                    * @return {?}
                    */
                    function () {
                      return _this47.refresh();
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy)).subscribe();
                    pull.fivCancel.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
                    /**
                    * @return {?}
                    */
                    function () {
                      return _this47.moveBack();
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy)).subscribe();
                    this.spinner.fivComplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy)).subscribe();
                    this.fivRefresh.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
                    /**
                    * @return {?}
                    */
                    function () {
                      return scroll.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.$onDestroy)).subscribe();

                  case 14:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "refresh",
        value: function refresh() {
          if (this.refreshing) {
            return;
          }

          this.refreshing = true;
          this.spinner.load();
          this.setPullAnimationProgress(112 / 168);
          this.fivRefresh.emit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "complete",
        value: function complete() {
          if (!this.refreshing) {
            return;
          }

          this.spinner.complete();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onDone",
        value: function onDone() {
          this.spinner.hide();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onHidden",
        value: function onHidden() {
          this.refreshing = false;
          this.setPullAnimationProgress(0);
        }
        /**
         * @return {?}
         */

      }, {
        key: "showHint",
        value: function showHint() {
          this.hintVisible = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "onHintClicked",
        value: function onHintClicked() {
          this.hintVisible = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "postHint",
        value: function postHint(event) {
          if (!event.fromState && event.toState === 'void') {
            this.refresh();
          }
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "setPullAnimationProgress",
        value: function setPullAnimationProgress(progress) {
          this.currentProgress = progress;

          if (progress < 1) {
            this.renderer.setStyle(this.spinner.element.nativeElement, 'transform', "translateY(".concat(this.minPullHeight * progress, "px)"));
          }
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "changeAnimationToProgress",
        value: function changeAnimationToProgress(progress) {
          var _this48 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            /** @type {?} */
            var animation = _this48.builder.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: "translateY(".concat(100 * _this48.currentProgress, "px) rotateZ(").concat(360 * _this48.currentProgress, "deg)")
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('85ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: "translateY(".concat(100 * progress, "px) rotateZ(").concat(360 * progress, "deg)")
            }))]);
            /** @type {?} */


            var player = animation.create(_this48.spinner.element.nativeElement);
            player.play();
            player.onDone(
            /**
            * @return {?}
            */
            function () {
              _this48.setPullAnimationProgress(progress);

              player.destroy();
              resolve();
            });
          });
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "fivPull",
        value: function fivPull(progress) {
          this.setPullAnimationProgress(progress);
          this.spinner.show();
          /** @type {?} */

          var value = Math.max(0, Math.min(100, progress * 100 * this.maxPullHeight / this.minPullHeight));
          this.spinner.setValue(value * 0.84);
        }
        /**
         * @return {?}
         */

      }, {
        key: "moveBack",
        value: function moveBack() {
          var _this49 = this;

          /** @type {?} */
          var animation = this.builder.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "translateY(".concat(this.currentProgress * this.minPullHeight, "px) rotateZ(").concat(360 * this.currentProgress, "deg)")
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('205ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(0) rotateZ(0)'
          }))]);
          /** @type {?} */

          var player = animation.create(this.spinner.element.nativeElement);
          Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["tween"])(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["easeOutSine"], 145).pipe(Object(_fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["reverse"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} n
          * @return {?}
          */
          function (n) {
            return Math.max(0, Math.min(100, _this49.currentProgress * n * 100 * _this49.maxPullHeight / _this49.minPullHeight));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this49.spinner.setValue(value);
          })).subscribe();
          player.play();
          player.onDone(
          /**
          * @return {?}
          */
          function () {
            _this49.setPullAnimationProgress(0);

            _this49.spinner.visible = false;
            player.destroy();
          });
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "onSpinnerProgress",
        value: function onSpinnerProgress(progress) {
          this.fivProgressChanged.emit(progress);
          this.renderer // tslint:disable-next-line:max-line-length
          .setStyle(this.spinner.element.nativeElement, 'transform', "translateY(".concat(this.maxPullHeight * this.currentProgress, "px) rotateZ(").concat(360 * progress / 200, "deg)"));
        }
      }]);

      return FivRefresher;
    }();

    FivRefresher.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-refresher',
        template: "<fiv-refresher-content [progress]=\"currentProgress\" (fivProgress)=\"onSpinnerProgress($event)\" (fivComplete)=\"onDone()\"\n  (fivHidden)=\"onHidden()\" #spinner>\n</fiv-refresher-content>\n\n<ion-chip class=\"gg-hint-wrapper\" *ngIf=\"hintVisible\" [@hintAnim] (@hintAnim.done)=\"postHint($event)\"\n  (click)=\"onHintClicked()\" #hint>\n  <ion-icon class=\"icon\" name=\"md-arrow-up\"></ion-icon>\n  <ion-label [ngClass]=\"{'hidden': !hintVisible}\" class=\"text\">{{hintText}}</ion-label>\n</ion-chip>",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('hintAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(0px) translateX(-50%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'translateY(72px) translateX(-50%)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: '*',
          opacity: 1,
          transform: 'translateY(72px) translateX(-50%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms 125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: '40px',
          transform: 'translateY(72px) translateX(-50%)'
        }))])])],
        styles: [":host{--fiv-spin-color:var(--ion-color-primary);--fiv-hint-color:var(--fiv-spin-color, var(--ion-color-primary));--fiv-spin-background:var(--ion-color-light)}.icon{height:20px;width:20px;background:0 0;color:var(--fiv-hint-color)}.text{font-size:1em;color:var(--fiv-hint-color)}.text.hidden{opacity:0}.gg-hint-wrapper{position:absolute;z-index:8;opacity:1;left:50%;top:-40px;transform:translateY(72px) translateX(-50%);height:40px;padding-left:8px;padding-right:8px;background:var(--fiv-spin-background);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}"]
      }]
    }];
    /** @nocollapse */

    FivRefresher.ctorParameters = function () {
      return [{
        type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    FivRefresher.propDecorators = {
      hintText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxPullHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minPullHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivProgressChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivRefresh: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      spinner: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['spinner', {
          "static": false
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/refresher/refresher.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivRefresherModule = function FivRefresherModule() {
      _classCallCheck(this, FivRefresherModule);
    };

    FivRefresherModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivRefresher, FivRefresherContent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], FivSpinnerModule, FivPullModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [FivRefresher, FivRefresherContent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/network-status/network-status.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivNetworkStatus =
    /*#__PURE__*/
    function () {
      function FivNetworkStatus() {
        _classCallCheck(this, FivNetworkStatus);

        this.visible = true;
        this.status = 'online';
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(FivNetworkStatus, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          this.visible = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          this.visible = false;
        }
        /**
         * @param {?} status
         * @return {?}
         */

      }, {
        key: "setStatus",
        value: function setStatus(status) {
          this.status = status;
        }
        /**
         * @return {?}
         */

      }, {
        key: "FivNetworkStatusClicked",
        value: function FivNetworkStatusClicked() {
          this.onClick.emit(this);
        }
      }]);

      return FivNetworkStatus;
    }();

    FivNetworkStatus.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-network-status',
        template: "<ion-chip [@status] (click)=\"FivNetworkStatusClicked()\" *ngIf=\"visible\">\n  <fiv-icon [badge]=\"-1\" [fivCenter] [off]=\"status === 'offline'\" name=\"cloud\"></fiv-icon>\n</ion-chip>",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('status', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('550ms 200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        }))])])],
        styles: [":host{position:absolute;top:66px;right:8px}ion-chip{width:56px}fiv-icon{--fiv-color-icon:var(--ion-color-dark)}"]
      }]
    }];
    /** @nocollapse */

    FivNetworkStatus.ctorParameters = function () {
      return [];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/network-status/network-status.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivNetworkStatusModule = function FivNetworkStatusModule() {
      _classCallCheck(this, FivNetworkStatusModule);
    };

    FivNetworkStatusModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivNetworkStatus],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], FivCenterModule, FivIconModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [FivNetworkStatus],
        entryComponents: [FivNetworkStatus]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/password-input/password-input.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FivPasswordInput;
      }),
      multi: true
    };

    var FivPasswordInput =
    /*#__PURE__*/
    function () {
      function FivPasswordInput() {
        _classCallCheck(this, FivPasswordInput);

        this.clearOnEdit = false;
        this.disabled = false;
        this.hideIcon = 'eye-off';
        this.position = 'floating';
        this.showIcon = 'eye';
        this._passwordValue = '';
      }
      /**
       * @return {?}
       */


      _createClass(FivPasswordInput, [{
        key: "toggleShowPassword",
        value: function toggleShowPassword() {
          this.show = !this.show;
        }
        /**
         * @return {?}
         */

      }, {
        key: "writeValue",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function writeValue(value) {
          if (value !== undefined && value !== this._passwordValue) {
            this._passwordValue = value;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          if (this.onTouchedCallback) {
            this.onTouchedCallback();
          }
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChangeCallback = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouchedCallback = fn;
        }
      }, {
        key: "passwordValue",
        get: function get() {
          return this._passwordValue;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          if (v !== this._passwordValue) {
            this._passwordValue = v;

            if (this.onChangeCallback) {
              this.onChangeCallback(this._passwordValue);
            }
          }
        }
      }]);

      return FivPasswordInput;
    }();

    FivPasswordInput.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-password-input',
        template: "<ion-item [color]=\"color\" [disabled]=\"disabled\" [lines]=\"lines\">\n  <ion-label *ngIf=\"placeholder\" [position]=\"position\">{{ placeholder }}</ion-label>\n  <ion-input [type]=\"show ? 'text' : 'password'\" [(ngModel)]=\"passwordValue\" [clearOnEdit]=\"clearOnEdit\"\n    (ionBlur)=\"blur()\"></ion-input>\n  <ion-icon slot=\"end\" [name]=\"show ? hideIcon : showIcon\" (click)=\"toggleShowPassword()\"></ion-icon>\n</ion-item>",
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        styles: [":host(.password-disabled){pointer-events:none}ion-icon{-ms-grid-row-align:center;align-self:center}"]
      }]
    }];
    /** @nocollapse */

    FivPasswordInput.ctorParameters = function () {
      return [];
    };

    FivPasswordInput.propDecorators = {
      clearOnEdit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.password-disabled']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hideIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      lines: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      show: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/password-input/password-input.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivPasswordInputModule = function FivPasswordInputModule() {
      _classCallCheck(this, FivPasswordInputModule);
    };

    FivPasswordInputModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivPasswordInput],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [FivPasswordInput]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/popover/popover-element.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var PopoverElementDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} el
       */
      function PopoverElementDirective(el) {
        _classCallCheck(this, PopoverElementDirective);

        this.el = el;
        this.delay = 50;
      }
      /**
       * @param {?} visible
       * @return {?}
       */


      _createClass(PopoverElementDirective, [{
        key: "open",

        /**
         * @return {?}
         */
        value: function open() {
          this.show = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this.show = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this50 = this;

          this.fivPopover.overlay.afterInit.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(this.delay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @return {?}
          */
          function () {
            _this50.show = _this50._show;
          })).subscribe();
        }
      }, {
        key: "show",
        set: function set(visible) {
          var _this51 = this;

          this._show = visible;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            if (_this51.show) {
              _this51.fivPopover.open(_this51.el);
            } else if (_this51.fivPopover.overlay && _this51.fivPopover.overlay.open) {
              _this51.fivPopover.close();
            }
          }, 0);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._show;
        }
      }]);

      return PopoverElementDirective;
    }();

    PopoverElementDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[fivPopover]',
        exportAs: 'fivPopover'
      }]
    }];
    /** @nocollapse */

    PopoverElementDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    PopoverElementDirective.propDecorators = {
      delay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['fivPopover.delay']
      }],
      fivPopover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      show: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['fivPopover.show']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/popover/popover.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivPopoverModule = function FivPopoverModule() {
      _classCallCheck(this, FivPopoverModule);
    };

    FivPopoverModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivPopover, PopoverElementDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _fivethree_ngx_rxjs_animations__WEBPACK_IMPORTED_MODULE_9__["AnimationsModule"], FivOverlayModule],
        exports: [FivPopover, PopoverElementDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/router-item/router-item.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivRouterItem =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} router
       * @param {?} host
       */
      function FivRouterItem(router, host) {
        _classCallCheck(this, FivRouterItem);

        this.router = router;
        this.host = host;
        this.active = false;
        this.detailIcon = 'ios-arrow-forward';
        this.disabled = false;
        this.matchChildUrl = false;
        this.navigate = true;
        /**
         * The position of the active state.
         * Default value is: `"left"`
         */

        this.position = 'left';
        /**
         * The shape of the active state.
         * Possible values are: `"line"`, `"dot"` and `"rounded"`.
         * Default value is: `"line"`
         */

        this.shape = 'line';
      }
      /**
       * @return {?}
       */


      _createClass(FivRouterItem, [{
        key: "onclick",
        value: function onclick() {
          if (this.navigate && this.pageUrl) {
            this.router.navigateByUrl(this.pageUrl);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this52 = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event.url === _this52.pageUrl;
          })).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this52.openExpandableHost();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "openExpandableHost",
        value: function openExpandableHost() {
          /** @type {?} */
          var isActive = this.matchActiveUrl() || this.active;

          if (isActive) {
            if (this.host && !this.host.isOpen) {
              this.host.open();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getClasses",
        value: function getClasses() {
          return [this.position, this.shape];
        }
        /**
         * @return {?}
         */

      }, {
        key: "matchActiveUrl",
        value: function matchActiveUrl() {
          return this.matchChildUrl ? this.isChildUrl() : this.isCurrentUrl();
        }
        /**
         * @return {?}
         */

      }, {
        key: "isCurrentUrl",
        value: function isCurrentUrl() {
          return this.router.url === this.pageUrl;
        }
        /**
         * @return {?}
         */

      }, {
        key: "isChildUrl",
        value: function isChildUrl() {
          return this.router.url.startsWith(this.pageUrl);
        }
      }, {
        key: "classes",
        get: function get() {
          return "".concat(this.position, " ").concat(this.shape);
        }
        /**
         * @return {?}
         */

      }, {
        key: "activeClass",
        get: function get() {
          return this.matchActiveUrl() || this.active;
        }
        /**
         * @return {?}
         */

      }, {
        key: "disabledClass",
        get: function get() {
          return this.disabled;
        }
      }]);

      return FivRouterItem;
    }();

    FivRouterItem.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-router-item',
        template: "<ion-menu-toggle auto-hide=\"false\">\n    <ion-item class=\"ion-activatable\" [color]=\"color\" [detail]=\"detail\" [detailIcon]=\"detailIcon\" [disabled]=\"disabled\"\n        [lines]=\"lines\">\n        <fiv-icon #fivIcon *ngIf=\"icon\" [name]=\"icon\"></fiv-icon>\n        <ion-label>{{text}}</ion-label>\n        <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n    </ion-item>\n</ion-menu-toggle>\n<span [ngClass]=\"getClasses()\" class=\"indicator\"></span>",
        styles: [":host{display:block;position:relative;--fiv-background:var(--ion-color-light);--fiv-background-shade:var(--ion-color-light-shade);width:100%}:host(.active){--color-active:var(--ion-color-primary)}:host(.active) ion-item{--color:var(--color-active);--background:var(--fiv-background)}:host(.line){--width-line:4px;--background-line:var(--ion-color-primary)}:host(.active) .line{display:block;background:var(--background-line)}:host.active.left .line{width:var(--width-line);height:100%;top:0}:host.active.right .line{width:var(--width-line);height:100%;top:0}.indicator{position:absolute}:host.active .dot{display:block}:host.active.dot.left{padding-left:24px}.dot{width:var(--fiv-dot-width,8px);height:var(--fiv-dot-heigt,8px);background-color:var(--fiv-dot-color,var(--ion-color-primary));top:50%;border-radius:100%;transform:translateY(-50%);right:8px;display:none}.dot.left{left:8px;right:unset}.dot.right{right:8px}:host(.rounded.left){--border-radius-rounded-left:0 50px 50px 0}:host(.rounded.left) ion-item{--border-radius:var(--border-radius-rounded-left);--background:var(--fiv-background)}:host(.rounded.right){--border-radius-rounded-right:50px 0 0 50px}:host(.rounded.right) ion-item{--border-radius:var(--border-radius-rounded-right);--background:var(--fiv-background)}:host(.active.rounded){--background-rounded:var(--ion-color-primary-rgb);--opacity-rounded:0.25}:host(.active.rounded) ion-item{--background:rgba(var(--background-rounded), var(--opacity-rounded))}.left{left:0}.right{right:0}ion-item{--border-style:none}fiv-icon{--fiv-padding-end:8px}ion-item:hover{cursor:pointer;--background:var(--background-hover)!important}ion-item:hover ion-label{--color:var(--ion-color-primary)}:host(.router-item-disabled){pointer-events:none}"]
      }]
    }];
    /** @nocollapse */

    FivRouterItem.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: FivExpandable,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    FivRouterItem.propDecorators = {
      fivIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['fivIcon', {
          "static": false
        }]
      }],
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      detail: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      detailIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      lines: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      matchChildUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      navigate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pageUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      shape: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      text: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onclick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click']
      }],
      classes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class']
      }],
      activeClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.active']
      }],
      disabledClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.router-item-disabled']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/router-item/router-item.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivRouterItemModule = function FivRouterItemModule() {
      _classCallCheck(this, FivRouterItemModule);
    };

    FivRouterItemModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivRouterItem],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], FivExpandableModule, FivIconModule],
        exports: [FivRouterItem]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/stepper/step/step.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivStep =
    /*#__PURE__*/
    function () {
      function FivStep() {
        _classCallCheck(this, FivStep);

        this.isLast = false;
        this.open = false;
        this.title = '';
        this.subtitle = '';
      }
      /**
       * @return {?}
       */


      _createClass(FivStep, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FivStep;
    }();

    FivStep.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-step',
        template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    FivStep.ctorParameters = function () {
      return [];
    };

    FivStep.propDecorators = {
      index: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isLast: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      open: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      subtitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
          "static": false
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/stepper/step-header/step-header.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivStepHeader =
    /*#__PURE__*/
    function () {
      function FivStepHeader() {
        _classCallCheck(this, FivStepHeader);

        this.iconState = 'normal';
      }
      /**
       * @return {?}
       */


      _createClass(FivStepHeader, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @param {?} event
         * @param {?} icon
         * @return {?}
         */

      }, {
        key: "changeIconAndReveal",
        value: function changeIconAndReveal(event, icon) {
          if (event.fromState === 'normal') {
            this.tempIcon = this.icon;
            this.icon = icon;
            this.iconState = 'normal';
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "complete",
        value: function complete() {
          this.iconState = 'rotate';
        }
        /**
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this.icon = this.tempIcon;
        }
      }]);

      return FivStepHeader;
    }();

    FivStepHeader.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-step-header',
        template: "<div class=\"number-container\">\n  <span *ngIf=\"index && !icon\" [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\">{{index}}</span>\n  <ion-icon *ngIf=\"icon\" [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\"\n    [name]=\"icon\"></ion-icon>\n</div>\n<div class=\"step-content\">\n  <ng-content>\n  </ng-content>\n</div>",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => rotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotate => normal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '0',
          transform: 'translate(-50%, -50%) rotateZ(45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '1',
          transform: 'translate(-50%, -50%) rotateZ(0deg)'
        }))])],
        styles: [":host{display:block;width:100%;height:72px;align-items:center;position:relative;padding-top:8px}.number-container{width:24px;height:24px;border-radius:100%;position:absolute;left:16px;background:var(--fiv-color-circle,var(--ion-color-primary));color:var(--fiv-color-circle-color,var(--ion-color-light))}.number-container *{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) rotateZ(0)}.step-content{padding-left:56px}"]
      }]
    }];
    /** @nocollapse */

    FivStepHeader.ctorParameters = function () {
      return [];
    };

    FivStepHeader.propDecorators = {
      index: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/stepper/step-content/step-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivStepContent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} change
       */
      function FivStepContent(change) {
        _classCallCheck(this, FivStepContent);

        this.change = change;
        this.isLast = false;
        this.isOpen = false;
        this.title = '';
        this.subtitle = '';
        this.fivDidOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDidClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(FivStepContent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          this.isOpen = true;
          this.change.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this.isOpen = false;
          this.change.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "completeAndClose",
        value: function completeAndClose() {
          this.close();
          this.complete();
        }
        /**
         * @return {?}
         */

      }, {
        key: "complete",
        value: function complete() {
          this.header.complete();
        }
        /**
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this.header.reset();
        }
        /**
         * @return {?}
         */

      }, {
        key: "afterClose",
        value: function afterClose() {
          this.fivDidClose.emit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "afterOpen",
        value: function afterOpen() {
          this.fivDidOpen.emit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "click",
        value: function click() {
          this.fivClick.emit(this);
        }
      }]);

      return FivStepContent;
    }();

    FivStepContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-step-content',
        template: "<div *ngIf=\"!isLast\" class=\"timeline\"></div>\n<fiv-expandable [isOpen]=\"isOpen\" (fivDidClose)=\"afterClose()\" (fivDidOpen)=\"afterOpen()\" #self>\n  <div header class=\"ion-activatable\" (click)=\"click()\">\n    <fiv-step-header #header [index]=\"index\" [icon]=\"icon\">\n      <div class=\"header-title\">{{title}}</div>\n      <div class=\"header-subtitle\">{{subtitle}}</div>\n\n      <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n    </fiv-step-header>\n  </div>\n  <ng-container content>\n    <div class=\"step-content\">\n      <ng-content></ng-content>\n    </div>\n  </ng-container>\n</fiv-expandable>",
        styles: [":host{display:block;width:100%;position:relative}.step-content{padding-left:44px;padding-bottom:24px}.timeline{width:1px;height:calc(100% - 32px);position:absolute;background:var(--fiv-color-timeline,var(--ion-color-medium));left:27.5px;top:36px}.ion-activatable{position:relative;overflow:hidden}.header-title{color:var(--fiv-color-title,var(--ion-color-dark))}.header-subtitle{color:var(--fiv-color-subtitle,var(--ion-color-medium));font-size:.8em}"]
      }]
    }];
    /** @nocollapse */

    FivStepContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    FivStepContent.propDecorators = {
      index: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isLast: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      subtitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivDidOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivDidClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      step: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['self', {
          "static": false
        }]
      }],
      header: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['header', {
          "static": false
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/stepper/stepper-horizontal/stepper-horizontal.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivStepperHorizontal =
    /*#__PURE__*/
    function () {
      function FivStepperHorizontal() {
        _classCallCheck(this, FivStepperHorizontal);

        this.fivSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(FivStepperHorizontal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.slides.lockSwipes(true);
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this.slides.slideTo(0);
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "open",
        value: function open(index) {
          this.slides.lockSwipes(false);
          this.slides.slideTo(index);
          this.slides.lockSwipes(true);
        }
      }]);

      return FivStepperHorizontal;
    }();

    FivStepperHorizontal.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-stepper-horizontal',
        template: "<ion-grid fixed>\n  <ion-row>\n    <ion-col *ngFor=\"let content of contents.toArray(); let i = index; let f = first; let l = last;\"\n      [size]=\"12 / contents.length\">\n      <div class=\"ion-activatable\" (click)=\"fivSelect.emit(i)\">\n        <span *ngIf=\"!f\" class=\"line left\"></span>\n        <div class=\"number-container\">\n          <span *ngIf=\"!content.icon\">{{i +  1}}</span>\n          <ion-icon *ngIf=\"content.icon\" [name]=\"content.icon\"></ion-icon>\n        </div>\n\n        <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        <span *ngIf=\"!l\" class=\"line right\"></span>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col *ngFor=\"let content of contents.toArray(); let i = index; let f = first; let l = last;\"\n      [size]=\"12 / contents.length\">\n      <div class=\"ion-activatable\" (click)=\"fivSelect.emit(i)\">\n        <div class=\"horizontal-content\">\n          <div class=\"header-title\">{{content.title}}</div>\n          <div class=\"header-subtitle\">{{content.subtitle}}</div>\n        </div>\n      </div>\n      <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-slides #slides pager=\"false\">\n  <ion-slide *ngFor=\"let content of contents; let i = index\">\n    <ng-container [ngTemplateOutlet]=\"content.content\"></ng-container>\n  </ion-slide>\n</ion-slides>",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => rotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotate => normal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '0',
          transform: 'translate(-50%, -50%) rotateZ(45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '1',
          transform: 'translate(-50%, -50%) rotateZ(0deg)'
        }))])],
        styles: [".number-container{width:24px;height:24px;border-radius:100%;position:relative;left:50%;transform:translateX(-50%);background:var(--fiv-color-circle,var(--ion-color-primary));color:var(--fiv-color-circle-color,var(--ion-color-light))}.number-container *{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) rotateZ(0)}ion-col{text-align:center;padding:0}.line{width:calc(50% - 20px);height:1px;position:absolute;background:var(--fiv-color-timeline,var(--ion-color-medium));top:50%;transform:translateY(-50%)}.left{left:0}.right{right:0}.header-title{color:var(--fiv-color-title,var(--ion-color-dark))}.header-subtitle{color:var(--fiv-color-subtitle,var(--ion-color-medium));font-size:.8em}"]
      }]
    }];
    /** @nocollapse */

    FivStepperHorizontal.ctorParameters = function () {
      return [];
    };

    FivStepperHorizontal.propDecorators = {
      contents: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slides: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['slides', {
          "static": true
        }]
      }],
      fivSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/stepper/stepper.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivStepper =
    /*#__PURE__*/
    function () {
      function FivStepper() {
        _classCallCheck(this, FivStepper);

        this.mode = 'vertical';
        this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentIndex = 0;
      }
      /**
       * @return {?}
       */


      _createClass(FivStepper, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "open",
        value: function open(index) {
          if (this.mode === 'horizontal') {
            this.currentIndex = index;
            this.horizontal.open(index);
          } else {
            if (this.steps.toArray()[index]) {
              if (this.steps.toArray()[index].isOpen) {
                this.close(index);
              } else {
                this.currentIndex = index;
                this.steps.toArray()[index].open();
              }
            } else {}
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "openFirst",
        value: function openFirst() {
          this.open(0);
        }
        /**
         * @return {?}
         */

      }, {
        key: "openLast",
        value: function openLast() {
          this.open(this.steps.toArray().length - 1);
        }
        /**
         * @param {?} index
         * @param {?=} param
         * @return {?}
         */

      }, {
        key: "close",
        value: function close(index, param) {
          this.param = param;

          if (this.mode === 'horizontal') {
            this.currentIndex = 0;
            this.horizontal.close();
          } else {
            this.currentIndex = -1;
            this.steps.toArray()[index].close();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "closeFirst",
        value: function closeFirst() {
          this.close(0);
        }
        /**
         * @return {?}
         */

      }, {
        key: "closeLast",
        value: function closeLast() {
          this.close(this.steps.toArray().length - 1);
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(index) {
          if (index >= 0 && index < this.contents.length) {
            if (this.mode === 'vertical') {
              this.closeAll();
            }

            this.open(index);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "closeAll",
        value: function closeAll() {
          if (this.mode === 'horizontal') {
            this.currentIndex = 0;
            this.horizontal.close();
          } else {
            this.steps.forEach(
            /**
            * @param {?} step
            * @return {?}
            */
            function (step) {
              step.close();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "next",
        value: function next() {
          /** @type {?} */
          var next = this.currentIndex < this.steps.length ? this.currentIndex + 1 : -1;
          this.select(next);
        }
        /**
         * @return {?}
         */

      }, {
        key: "previous",
        value: function previous() {
          /** @type {?} */
          var next = this.currentIndex > 0 ? this.currentIndex + -1 : -1;
          this.select(next);
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "completeStep",
        value: function completeStep(index) {
          if (this.mode === 'horizontal') {// not yet impletented
          } else {
            this.steps.toArray()[index].complete();
          }
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "completeAndCloseStep",
        value: function completeAndCloseStep(index) {
          if (this.mode === 'horizontal') {// not yet impletented
          } else {
            this.steps.toArray()[index].completeAndClose();
          }
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(index) {
          if (this.mode === 'horizontal') {// not yet impletented
          } else {
            this.steps.toArray()[index].reset();
          }
        }
      }]);

      return FivStepper;
    }();

    FivStepper.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-stepper',
        template: "<ion-list *ngIf=\"mode === 'vertical'\">\n  <fiv-step-content (fivDidClose)=\"fivClose.emit({index: i, param: param}); param = null;\" (fivClick)=\"fivClick.emit(i)\" *ngFor=\"let content of contents; let i = index; let l = last;\" [icon]=\"content.icon\" [index]=\"i + 1\"\n    [isLast]=\"l\" [title]=\"content.title\" [subtitle]=\"content.subtitle\" [isOpen]=\"content.open\">\n    <ng-container [ngTemplateOutlet]=\"content.content\"></ng-container>\n  </fiv-step-content>\n</ion-list>\n<div *ngIf=\"mode === 'horizontal'\">\n  <fiv-stepper-horizontal (fivSelect)=\"select($event)\" [contents]=\"contents\"></fiv-stepper-horizontal>\n</div>",
        styles: [":host{display:block;width:100%}"]
      }]
    }];
    /** @nocollapse */

    FivStepper.ctorParameters = function () {
      return [];
    };

    FivStepper.propDecorators = {
      contents: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [FivStep]
      }],
      steps: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
        args: [FivStepContent]
      }],
      horizontal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [FivStepperHorizontal, {
          "static": false
        }]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/stepper/stepper.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivStepperModule = function FivStepperModule() {
      _classCallCheck(this, FivStepperModule);
    };

    FivStepperModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivStepper, FivStepContent, FivStepperHorizontal, FivStep, FivStepHeader],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], FivExpandableModule],
        exports: [FivStepper, FivStepContent, FivStepperHorizontal, FivStep, FivStepHeader]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/searchbar/searchbar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivSearchbar =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} renderer
       */
      function FivSearchbar(renderer) {
        _classCallCheck(this, FivSearchbar);

        this.renderer = renderer;
        this.searching = false;
        this.titleVisible = true;
        this.closeButtonVisible = false;
        this.smallWidth = 120;
        this._small = false;
        this.fivInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.state = 'normal';
      }
      /**
       * @param {?} s
       * @return {?}
       */


      _createClass(FivSearchbar, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this.state = this._small ? 'small' : 'normal';
        }
        /**
         * @return {?}
         */

      }, {
        key: "shrink",
        value: function shrink() {
          this.state = 'small';
        }
        /**
         * @return {?}
         */

      }, {
        key: "grow",
        value: function grow() {
          this.state = 'normal';
        }
        /**
         * @return {?}
         */

      }, {
        key: "openSearchbar",
        value: function openSearchbar() {
          if (this._small) {
            this.state = 'normal';
          }

          this._open();
        }
        /**
         * @return {?}
         */

      }, {
        key: "toggleSearchbar",
        value: function toggleSearchbar() {
          if (this.searching) {
            this.closeSearchbar();
          } else {
            this.openSearchbar();
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "searchBarStateChange",
        value: function searchBarStateChange(event) {
          if (event.fromState === 'normal' && event.toState === 'small') {}

          if (event.fromState === 'small' && event.toState === 'normal') {}
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_open",
        value: function _open() {
          this.searching = true;
          this.titleVisible = false;
          this.open.emit();
        }
        /**
         * @return {?}
         */

      }, {
        key: "closeSearchbar",
        value: function closeSearchbar() {
          if (this.small) {
            this.state = 'small';
          }

          this.searching = false;
          this.fivClose.emit();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "searchAnimDone",
        value: function searchAnimDone(event) {
          if (event.fromState !== 'void') {
            this.closeButtonVisible = true;
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "closeAnimDone",
        value: function closeAnimDone(event) {
          if (event.fromState !== 'void') {
            this.searching = false;
          }
        }
        /**
         * @param {?} event
         * @param {?} input
         * @return {?}
         */

      }, {
        key: "seachbarAnimDone",
        value: function seachbarAnimDone(event, input) {
          if (event.fromState !== 'void') {
            this.titleVisible = true;
          } else {
            input.setFocus();
          }
        }
      }, {
        key: "small",
        set: function set(s) {
          if (s && !this._small) {
            this.shrink();
          } else if (!s && this._small) {
            this.grow();
          }

          this._small = s;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._small;
        }
      }]);

      return FivSearchbar;
    }();

    FivSearchbar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'fiv-searchbar',
        template: "<ion-toolbar [@searchbarAnim]=\"{value:state, params: {width: smallWidth}}\"\n  (@searchbarAnim.done)=\"searchBarStateChange($event)\" [ngClass]=\"{'small': state === 'small'}\">\n  <ion-buttons slot=\"start\">\n    <ng-content select=\"[start]\"></ng-content>\n\n  </ion-buttons>\n  <ion-title [@titleAnim] *ngIf=\"titleVisible && state !== 'small'\">{{title}}</ion-title>\n  <ion-input (ionChange)=\"fivInputChange.emit($event)\" [placeholder]=\"!titleVisible ? placeholder : ''\" autofocus #input\n    class=\"searchbarbar\" [@titleAnim] (@titleAnim.done)=\"seachbarAnimDone($event,input)\" *ngIf=\"searching\">\n  </ion-input>\n\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"toggleSearchbar()\">\n      <fiv-icon slot=\"icon-only\" [name]=\"searching ? 'md-close' : 'md-search'\"></fiv-icon>\n    </ion-button>\n    <ng-content select=\"[end]\"></ng-content>\n\n  </ion-buttons>\n</ion-toolbar>",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('searchbarAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small => normal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => small', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('95ms ease-in')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: '{{width}}px'
        }), {
          params: {
            width: 120
          }
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: '100%'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('titleAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '0',
          transform: 'translateY(-20%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('175ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: '1',
          transform: 'translateY(0)'
        }))])])],
        styles: [":host{position:relative;display:block;width:100%;--fiv-toolbar-background:var(--ion-color-light)}ion-toolbar{box-shadow:0 1px 4px rgba(0,0,0,.25);transition:border-bottom-right-radius 85ms;margin-top:env(safe-area-inset-top);--background:var(--fiv-toolbar-background)}ion-toolbar.small{border-bottom-right-radius:12px}.searchbarbar{float:right}"]
      }]
    }];
    /** @nocollapse */

    FivSearchbar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    FivSearchbar.propDecorators = {
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      smallWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      small: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivInputChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      open: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/searchbar/searchbar.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivSearchbarModule = function FivSearchbarModule() {
      _classCallCheck(this, FivSearchbarModule);
    };

    FivSearchbarModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivSearchbar],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], FivIconModule],
        exports: [FivSearchbar]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/lazy-image/lazy-image.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivLazyImage =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} fivImage
       * @param {?} image
       */
      function FivLazyImage(fivImage, image) {
        _classCallCheck(this, FivLazyImage);

        this.fivImage = fivImage;
        this.image = image;
        this.virtual = false;
        this.inViewport = false;
        this.willShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.willHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(FivLazyImage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this53 = this;

          /** @type {?} */
          var io = new IntersectionObserver(
          /**
          * @param {?} entries
          * @param {?} observer
          * @return {?}
          */
          function (entries, observer) {
            entries.forEach(
            /**
            * @param {?} entry
            * @return {?}
            */
            function (entry) {
              if (entry.isIntersecting) {
                if (!_this53.inViewport) {
                  _this53.handleIntersection();

                  if (!_this53.virtual) {
                    io.disconnect();
                  }
                }
              } else {
                if (_this53.inViewport) {
                  _this53.inViewport = false;

                  if (_this53.fivImage) {
                    _this53.willHide.emit(_this53.fivImage);
                  } else {
                    _this53.willHide.emit(_this53.image.nativeElement);
                  }
                }
              }
            });
          });
          io['POLL_INTERVAL'] = 100;

          if (this.fivImage) {
            io.observe(this.fivImage.thumbnail.nativeElement);
          } else {
            io.observe(this.image.nativeElement);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleIntersection",
        value: function handleIntersection() {
          this.inViewport = true;

          if (this.fivLazyImage) {
            if (this.fivImage) {
              this.fivImage.src = this.fivLazyImage;
              this.willShow.emit(this.fivImage);
            } else {
              this.image.nativeElement.src = this.fivLazyImage;
              this.willShow.emit(this.image.nativeElement);
            }
          } else {
            this.willShow.emit(this.fivImage || this.image.nativeElement);
          }
        }
      }]);

      return FivLazyImage;
    }();

    FivLazyImage.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[fivLazyImage]'
      }]
    }];
    /** @nocollapse */

    FivLazyImage.ctorParameters = function () {
      return [{
        type: FivGalleryImage,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FivLazyImage.propDecorators = {
      fivLazyImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      virtual: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      willShow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      willHide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/lazy-image/lazy-image.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivLazyImageModule = function FivLazyImageModule() {
      _classCallCheck(this, FivLazyImageModule);
    };

    FivLazyImageModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivLazyImage],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [FivLazyImage]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/permissions/permissions.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivPermissions =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} viewContainer
       * @param {?} templateRef
       */
      function FivPermissions(viewContainer, templateRef) {
        _classCallCheck(this, FivPermissions);

        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.allowedPermissions = [];
        this.uPermissions = [];
      }
      /**
       * @param {?} userPermissions
       * @return {?}
       */


      _createClass(FivPermissions, [{
        key: "checkPermission",

        /**
         * @return {?}
         */
        value: function checkPermission() {
          var _this54 = this;

          /** @type {?} */
          var show = false;
          this.uPermissions.forEach(
          /**
          * @param {?} role
          * @return {?}
          */
          function (role) {
            if (_this54.allowedPermissions.find(
            /**
            * @param {?} a
            * @return {?}
            */
            function (a) {
              return a.toUpperCase() === role.toUpperCase();
            })) {
              show = true;
            }
          });
          return show;
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateView",
        value: function updateView() {
          if (this.checkPermission()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        }
      }, {
        key: "fivPermissionsUserPermissions",
        set: function set(userPermissions) {
          this.uPermissions = userPermissions || [];
          this.updateView();
        }
        /**
         * @param {?} allowed
         * @return {?}
         */

      }, {
        key: "fivPermissions",
        set: function set(allowed) {
          this.allowedPermissions = allowed || [];
          this.updateView();
        }
      }]);

      return FivPermissions;
    }();

    FivPermissions.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[fivPermissions]'
      }]
    }];
    /** @nocollapse */

    FivPermissions.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    FivPermissions.propDecorators = {
      fivPermissionsUserPermissions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fivPermissions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/permissions/permissions.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivPermissionsModule = function FivPermissionsModule() {
      _classCallCheck(this, FivPermissionsModule);
    };

    FivPermissionsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivPermissions],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [FivPermissions]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/viewport/viewport.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FivViewport =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} elementRef
       */
      function FivViewport(elementRef) {
        _classCallCheck(this, FivViewport);

        this.elementRef = elementRef;
        this.fivAppear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDisappear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visible = false;
      }
      /**
       * @return {?}
       */


      _createClass(FivViewport, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this55 = this;

          this.io = new IntersectionObserver(
          /**
          * @param {?} entries
          * @param {?} observer
          * @return {?}
          */
          function (entries, observer) {
            entries.forEach(
            /**
            * @param {?} entry
            * @return {?}
            */
            function (entry) {
              if (entry.isIntersecting) {
                _this55.handleIntersection();
              } else {
                _this55.handleNonIntersection();
              }
            });
          });
          this.io['POLL_INTERVAL'] = 100;
          this.io.observe(this.elementRef.nativeElement);
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleNonIntersection",
        value: function handleNonIntersection() {
          if (this.visible) {
            this.fivDisappear.emit(this);
          }

          this.visible = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleIntersection",
        value: function handleIntersection() {
          if (!this.visible) {
            this.fivAppear.emit(this);
          }

          this.visible = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.io.disconnect();
        }
        /**
         * @return {?}
         */

      }, {
        key: "isVisible",
        value: function isVisible() {
          return this.visible;
        }
      }]);

      return FivViewport;
    }();

    FivViewport.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[fivViewport]',
        exportAs: 'viewport'
      }]
    }];
    /** @nocollapse */

    FivViewport.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FivViewport.propDecorators = {
      fivAppear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fivDisappear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/viewport/viewport.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FivViewportModule = function FivViewportModule() {
      _classCallCheck(this, FivViewportModule);
    };

    FivViewportModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FivViewport],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [FivViewport]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: fivethree-core.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=fivethree-core.js.map

    /***/
  },

  /***/
  "./node_modules/@fivethree/ngx-rxjs-animations/fesm2015/fivethree-ngx-rxjs-animations.js":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/@fivethree/ngx-rxjs-animations/fesm2015/fivethree-ngx-rxjs-animations.js ***!
    \***********************************************************************************************/

  /*! exports provided: AnimateDirective, AnimationsModule, after, afterStyle, before, beforeStyle, easeInBack, easeInBounce, easeInCirc, easeInCubic, easeInElastic, easeInExpo, easeInOutBack, easeInOutBounce, easeInOutCirc, easeInOutCubic, easeInOutElastic, easeInOutExpo, easeInOutQuad, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInQuad, easeInQuart, easeInQuint, easeInSine, easeOutBack, easeOutBounce, easeOutCirc, easeOutCubic, easeOutElastic, easeOutExpo, easeOutQuad, easeOutQuart, easeOutQuint, easeOutSine, fadeIn, fadeOut, fps, fromTo, fromToBoxModel, fromToColor, fromToPixels, fromToPosition, getPosition, getStylePixels, getTweenedRgb, linear, morph, morphBoxModel, morphBoxShadow, morphColor, morphElement, morphPosition, morphStylePixels, morphText, parseRgb, removeStyle, removeStyles, reverse, rgbToHex, scale, scaleX, scaleY, scaleYOut, setPosition, setStyle, slideInDown, slideInLeft, slideInRight, slideInUp, slideOutDown, slideOutLeft, slideOutRight, slideOutUp, stagger, toBoxModel, toBoxShadow, toMargin, toPadding, toPixels, toPosition, toRGB, transform, transformF, translateX, translateY, translateZ, tween */

  /***/
  function node_modulesFivethreeNgxRxjsAnimationsFesm2015FivethreeNgxRxjsAnimationsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimateDirective", function () {
      return AnimateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationsModule", function () {
      return AnimationsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "after", function () {
      return after;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "afterStyle", function () {
      return afterStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "before", function () {
      return before;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "beforeStyle", function () {
      return beforeStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInBack", function () {
      return easeInBack;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInBounce", function () {
      return easeInBounce;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInCirc", function () {
      return easeInCirc;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInCubic", function () {
      return easeInCubic;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInElastic", function () {
      return easeInElastic;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInExpo", function () {
      return easeInExpo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInOutBack", function () {
      return easeInOutBack;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInOutBounce", function () {
      return easeInOutBounce;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInOutCirc", function () {
      return easeInOutCirc;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInOutCubic", function () {
      return easeInOutCubic;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInOutElastic", function () {
      return easeInOutElastic;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInOutExpo", function () {
      return easeInOutExpo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function () {
      return easeInOutQuad;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInOutQuart", function () {
      return easeInOutQuart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInOutQuint", function () {
      return easeInOutQuint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInOutSine", function () {
      return easeInOutSine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInQuad", function () {
      return easeInQuad;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInQuart", function () {
      return easeInQuart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInQuint", function () {
      return easeInQuint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeInSine", function () {
      return easeInSine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeOutBack", function () {
      return easeOutBack;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeOutBounce", function () {
      return easeOutBounce;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeOutCirc", function () {
      return easeOutCirc;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeOutCubic", function () {
      return easeOutCubic;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeOutElastic", function () {
      return easeOutElastic;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeOutExpo", function () {
      return easeOutExpo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeOutQuad", function () {
      return easeOutQuad;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeOutQuart", function () {
      return easeOutQuart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeOutQuint", function () {
      return easeOutQuint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "easeOutSine", function () {
      return easeOutSine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeIn", function () {
      return fadeIn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeOut", function () {
      return fadeOut;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fps", function () {
      return fps;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromTo", function () {
      return fromTo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromToBoxModel", function () {
      return fromToBoxModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromToColor", function () {
      return fromToColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromToPixels", function () {
      return fromToPixels;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromToPosition", function () {
      return fromToPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPosition", function () {
      return getPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getStylePixels", function () {
      return getStylePixels;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTweenedRgb", function () {
      return getTweenedRgb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "linear", function () {
      return linear;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "morph", function () {
      return morph;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "morphBoxModel", function () {
      return morphBoxModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "morphBoxShadow", function () {
      return morphBoxShadow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "morphColor", function () {
      return morphColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "morphElement", function () {
      return morphElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "morphPosition", function () {
      return morphPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "morphStylePixels", function () {
      return morphStylePixels;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "morphText", function () {
      return morphText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseRgb", function () {
      return parseRgb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeStyle", function () {
      return removeStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeStyles", function () {
      return removeStyles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reverse", function () {
      return reverse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rgbToHex", function () {
      return rgbToHex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scale", function () {
      return scale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleX", function () {
      return scaleX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleY", function () {
      return scaleY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleYOut", function () {
      return scaleYOut;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setPosition", function () {
      return setPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setStyle", function () {
      return setStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideInDown", function () {
      return slideInDown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideInLeft", function () {
      return slideInLeft;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideInRight", function () {
      return slideInRight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideInUp", function () {
      return slideInUp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideOutDown", function () {
      return slideOutDown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideOutLeft", function () {
      return slideOutLeft;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideOutRight", function () {
      return slideOutRight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideOutUp", function () {
      return slideOutUp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stagger", function () {
      return stagger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toBoxModel", function () {
      return toBoxModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toBoxShadow", function () {
      return toBoxShadow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toMargin", function () {
      return toMargin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toPadding", function () {
      return toPadding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toPixels", function () {
      return toPixels;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toPosition", function () {
      return toPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toRGB", function () {
      return toRGB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transform", function () {
      return transform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transformF", function () {
      return transformF;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateX", function () {
      return translateX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateY", function () {
      return translateY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateZ", function () {
      return translateZ;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tween", function () {
      return tween;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} easingFunction
     * @param {?} duration
     * @return {?}
     */


    function tween(easingFunction, duration) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](
      /**
      * @param {?} observer
      * @return {?}
      */
      function (observer) {
        /** @type {?} */
        var startTime;
        /** @type {?} */

        var id = requestAnimationFrame(
        /**
        * @param {?} time
        * @return {?}
        */
        function sample(time) {
          startTime = startTime || time;
          /** @type {?} */

          var t = time - startTime;

          if (t < duration) {
            observer.next(easingFunction(t, 0, 1, duration));
            id = requestAnimationFrame(sample);
          } else {
            observer.next(easingFunction(duration, 0, 1, duration));
            id = requestAnimationFrame(
            /**
            * @return {?}
            */
            function () {
              observer.complete();
            });
          }
        });
        return (
          /**
          * @return {?}
          */
          function () {
            if (id) {
              cancelAnimationFrame(id);
            }
          }
        );
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var reverse =
    /**
    * @return {?}
    */
    function reverse() {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(
          /**
          * @param {?} t
          * @return {?}
          */
          function (t) {
            return 1 - t;
          }));
        }
      );
    };
    /** @type {?} */


    var before =
    /**
    * @param {?} next
    * @return {?}
    */
    function before(next) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(next)).subscribe();
          return source;
        }
      );
    };
    /** @type {?} */


    var beforeStyle =
    /**
    * @param {?} target
    * @param {?} style
    * @param {?} value
    * @return {?}
    */
    function beforeStyle(target, style, value) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(before(
          /**
          * @return {?}
          */
          function () {
            return target.nativeElement.style[style] = value;
          }));
        }
      );
    };
    /** @type {?} */


    var after =
    /**
    * @param {?} next
    * @return {?}
    */
    function after(next) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(next)).subscribe();
          return source;
        }
      );
    };
    /** @type {?} */


    var afterStyle =
    /**
    * @param {?} target
    * @param {?} style
    * @param {?} value
    * @return {?}
    */
    function afterStyle(target, style, value) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(after(
          /**
          * @return {?}
          */
          function () {
            return target.nativeElement.style[style] = value;
          }));
        }
      );
    };
    /** @type {?} */


    var removeStyle =
    /**
    * @param {?} el
    * @param {?} style
    * @return {?}
    */
    function removeStyle(el, style) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(after(
          /**
          * @return {?}
          */
          function () {
            return el.nativeElement.style[style] = '';
          }));
        }
      );
    };
    /** @type {?} */


    var removeStyles =
    /**
    * @param {?} el
    * @param {?} style
    * @return {?}
    */
    function removeStyles(el, style) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(after(
          /**
          * @return {?}
          */
          function () {
            return style.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return el.nativeElement.style[s] = '';
            });
          }));
        }
      );
    };
    /** @type {?} */


    var transform =
    /**
    * @param {?} target
    * @param {...?} ts
    * @return {?}
    */
    function transform(target) {
      for (var _len = arguments.length, ts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        ts[_key - 1] = arguments[_key];
      }

      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(
          /**
          * @param {?} t
          * @return {?}
          */
          function (t) {
            /** @type {?} */
            var styles = ts.map(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s(t);
            }).join(' ');
            target.nativeElement.style.transform = styles;
          }));
        }
      );
    };
    /** @type {?} */


    var fps =
    /**
    * @return {?}
    */
    function fps() {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          /** @type {?} */
          var lastTime = 0;
          /** @type {?} */

          var startTime = 0;
          /** @type {?} */

          var frames = [];
          return source.pipe(before(
          /**
          * @return {?}
          */
          function () {
            lastTime = performance.now();
            startTime = lastTime;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return frames.push(1 / (performance.now() - lastTime));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return lastTime = performance.now();
          }), after(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var duration = performance.now() - startTime;
          }));
        }
      );
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var transformF =
    /**
    * @param {?} from
    * @param {?} to
    * @param {?} m
    * @return {?}
    */
    function transformF(from, to, m) {
      return (
        /**
        * @template T
        * @param {?} t
        * @return {?}
        */
        function (t) {
          /** @type {?} */
          var te = t * (to - from) + from;
          return m ? m(te) : "".concat(te);
        }
      );
    };
    /** @type {?} */


    var translateY =
    /**
    * @param {?} from
    * @param {?} to
    * @return {?}
    */
    function translateY(from, to) {
      return transformF(from, to,
      /**
      * @param {?} t
      * @return {?}
      */
      function (t) {
        return "translateY(".concat(t, "%)");
      });
    };
    /** @type {?} */


    var translateX =
    /**
    * @param {?} from
    * @param {?} to
    * @return {?}
    */
    function translateX(from, to) {
      return transformF(from, to,
      /**
      * @param {?} t
      * @return {?}
      */
      function (t) {
        return "translateX(".concat(t, "%)");
      });
    };
    /** @type {?} */


    var translateZ =
    /**
    * @param {?} from
    * @param {?} to
    * @return {?}
    */
    function translateZ(from, to) {
      return transformF(from, to,
      /**
      * @param {?} t
      * @return {?}
      */
      function (t) {
        return "translateZ(".concat(t, "%)");
      });
    };
    /** @type {?} */


    var scale =
    /**
    * @param {?} from
    * @param {?} to
    * @return {?}
    */
    function scale(from, to) {
      return transformF(from, to,
      /**
      * @param {?} t
      * @return {?}
      */
      function (t) {
        return "scale(".concat(t, ")");
      });
    };
    /** @type {?} */


    var scaleX =
    /**
    * @param {?} from
    * @param {?} to
    * @return {?}
    */
    function scaleX(from, to) {
      return transformF(from, to,
      /**
      * @param {?} t
      * @return {?}
      */
      function (t) {
        return "scaleX(".concat(t, ")");
      });
    };
    /** @type {?} */


    var scaleY =
    /**
    * @param {?} from
    * @param {?} to
    * @return {?}
    */
    function scaleY(from, to) {
      return transformF(from, to,
      /**
      * @param {?} t
      * @return {?}
      */
      function (t) {
        return "scaleY(".concat(t, ")");
      });
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var position = ['position', 'top', 'left', 'height', 'width'];
    /** @type {?} */

    var container = ['border-radius'];
    /** @type {?} */

    var color = ['color', 'background-color', 'border-color'];
    /** @type {?} */

    var boxModel =
    /**
    * @param {?} style
    * @return {?}
    */
    function boxModel(style) {
      return ["".concat(style, "-top"), "".concat(style, "-bottom"), "".concat(style, "-left"), "".concat(style, "-right")];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} el
     * @return {?}
     */


    function getPosition(el) {
      /** @type {?} */
      var bounds = el.nativeElement.getBoundingClientRect();
      return {
        top: bounds.top,
        left: bounds.left,
        height: el.nativeElement.clientHeight,
        width: el.nativeElement.clientWidth
      };
    }
    /**
     * @param {?} el
     * @param {?} r
     * @return {?}
     */


    function setPosition(el, r) {
      el.nativeElement.style.top = r.top + 'px';
      el.nativeElement.style.left = r.left + 'px';
      el.nativeElement.style.height = r.height + 'px';
      el.nativeElement.style.width = r.width + 'px';
      return el;
    }
    /**
     * @param {?} el
     * @param {?} style
     * @return {?}
     */


    function getStylePixels(el, style) {
      return +getComputedStyle(el.nativeElement).getPropertyValue(style).match(/\d+/)[0];
    }
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @return {?}
     */


    function setStyle(el, style, value) {
      el.nativeElement.style[style] = value;
    }
    /**
     * @param {?} c
     * @return {?}
     */


    function toRGB(c) {
      /** @type {?} */
      var r = Math.floor(c / (256 * 256));
      /** @type {?} */

      var g = Math.floor(c / 256) % 256;
      /** @type {?} */

      var b = c % 256;
      return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
    }
    /**
     * @param {?} orig
     * @return {?}
     */


    function rgbToHex(orig) {
      /** @type {?} */
      var rgb = parseRgb(orig);
      return rgb && rgb.length === 4 ? '#' + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : orig;
    }
    /**
     * @param {?} orig
     * @return {?}
     */


    function parseRgb(orig) {
      /** @type {?} */
      var parsed = orig.replace(/\s/g, '').match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
      /** @type {?} */

      var rgb = [].concat(_toConsumableArray(parsed.splice(1, 3).map(
      /**
      * @param {?} v
      * @return {?}
      */
      function (v) {
        return +v;
      })), [+parsed[4] || 1]);
      return rgb;
    }
    /**
     * @param {?} toColor
     * @param {?} fromColor
     * @param {?} t
     * @return {?}
     */


    function getTweenedRgb(toColor, fromColor, t) {
      /** @type {?} */
      var rgb;

      if (toColor[3] || fromColor[3]) {
        rgb = "rgba(".concat(t * (toColor[0] - fromColor[0]) + fromColor[0], ",").concat(t * (toColor[1] - fromColor[1]) + fromColor[1], ",").concat(t * (toColor[2] - fromColor[2]) + fromColor[2], ",").concat(t * (toColor[3] - fromColor[3]) + fromColor[3], ")");
      } else {
        rgb = "rgb(".concat(t * (toColor[0] - fromColor[0]) + fromColor[0], ",").concat(t * (toColor[0] - fromColor[0]) + fromColor[0], ",").concat(t * (toColor[0] - fromColor[0]) + fromColor[0], ")");
      }

      return rgb;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var VALUES_REG = /,(?![^\(]*\))/;
    /** @type {?} */

    var PARTS_REG = /\s(?![^(]*\))/;
    /** @type {?} */

    var emptyBS = {
      inset: false,
      spreadRadius: 0,
      offsetY: 0,
      offsetX: 0,
      blurRadius: 0,
      color: 'rgb(0,0,0)'
    };
    /** @type {?} */

    var parseValue =
    /**
    * @param {?} str
    * @return {?}
    */
    function parseValue(str) {
      /** @type {?} */
      var parts = str.split(PARTS_REG);
      /** @type {?} */

      var inset = parts.includes('inset');
      /** @type {?} */

      var first = parts[0];
      /** @type {?} */

      var color = first;
      /** @type {?} */

      var nums = parts.filter(
      /**
      * @param {?} n
      * @return {?}
      */
      function (n) {
        return n !== 'inset';
      }).filter(
      /**
      * @param {?} n
      * @return {?}
      */
      function (n) {
        return n !== color;
      }).map(toNum);

      var _nums = _slicedToArray(nums, 4),
          offsetX = _nums[0],
          offsetY = _nums[1],
          blurRadius = _nums[2],
          spreadRadius = _nums[3];
      /** @type {?} */


      var boxShadow = {
        inset: inset || false,
        offsetX: offsetX || 0,
        offsetY: offsetY || 0,
        blurRadius: blurRadius || 0,
        spreadRadius: spreadRadius || 0,
        color: color || 'rgba(0, 0, 0, 0)'
      };
      return boxShadow;
    };
    /** @type {?} */


    var stringifyValue =
    /**
    * @param {?} obj
    * @return {?}
    */
    function stringifyValue(obj) {
      return [obj.inset ? 'inset' : null, obj.offsetX, obj.offsetY, obj.blurRadius, obj.spreadRadius, obj.color].filter(
      /**
      * @param {?} v
      * @return {?}
      */
      function (v) {
        return v !== null && v !== undefined;
      }).map(toPx).map(
      /**
      * @param {?} s
      * @return {?}
      */
      function (s) {
        return ('' + s).trim();
      }).join(' ');
    };
    /** @type {?} */


    var toNum =
    /**
    * @param {?} v
    * @return {?}
    */
    function toNum(v) {
      if (!/px$/.test(v) && v !== '0') return v;
      /** @type {?} */

      var n = parseFloat(v);
      return !isNaN(n) ? n : v;
    };
    /** @type {?} */


    var toPx =
    /**
    * @param {?} n
    * @return {?}
    */
    function toPx(n) {
      return typeof n === 'number' && n !== 0 ? n + 'px' : n;
    };
    /** @type {?} */


    var parseBoxShadow =
    /**
    * @param {?} str
    * @return {?}
    */
    function parseBoxShadow(str) {
      return str.split(VALUES_REG).map(
      /**
      * @param {?} s
      * @return {?}
      */
      function (s) {
        return s.trim();
      }).map(parseValue);
    };
    /** @type {?} */


    var stringifyBoxShadow =
    /**
    * @param {?} arr
    * @return {?}
    */
    function stringifyBoxShadow(arr) {
      return arr.map(stringifyValue).join(', ');
    };
    /**
     * @param {?} t
     * @param {?} bs
     * @param {?} fBS
     * @param {?} rgb
     * @return {?}
     */


    function getTweenedBoxShadow(t, bs, fBS, rgb) {
      /** @type {?} */
      var ret = {
        inset: t >= 0.5 ? bs.inset : fBS.inset,
        color: rgb,
        blurRadius: t * (bs.blurRadius - fBS.blurRadius) + fBS.blurRadius,
        offsetX: t * (bs.offsetX - fBS.offsetX) + fBS.offsetX,
        offsetY: t * (bs.offsetY - fBS.offsetY) + fBS.offsetY,
        spreadRadius: t * (bs.spreadRadius - fBS.spreadRadius) + fBS.spreadRadius
      };
      return ret;
    }
    /**
     * @param {?} tBS
     * @param {?} fBS
     * @return {?}
     */


    function normalizeBoxShadows(tBS, fBS) {
      tBS.forEach(
      /**
      * @param {?} bs
      * @return {?}
      */
      function (bs) {
        if (fBS.length < tBS.length) {
          fBS.push(emptyBS);
        }
      });
      fBS.forEach(
      /**
      * @param {?} bs
      * @return {?}
      */
      function (bs) {
        if (tBS.length < fBS.length) {
          tBS.push(emptyBS);
        }
      });
      return {
        tBS: tBS,
        fBS: fBS
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var fromTo =
    /**
    * @param {?} el
    * @param {?} style
    * @param {?} from
    * @param {?} to
    * @param {?} m
    * @return {?}
    */
    function fromTo(el, style, from, to, m) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(
          /**
          * @param {?} t
          * @return {?}
          */
          function (t) {
            /** @type {?} */
            var te = t * (to - from) + from;
            /** @type {?} */

            var value = m(te);
            el.nativeElement.style[style] = value;
          }));
        }
      );
    };
    /** @type {?} */


    var fromToPixels =
    /**
    * @param {?} target
    * @param {?} from
    * @param {?} to
    * @param {?} style
    * @return {?}
    */
    function fromToPixels(target, from, to, style) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(fromTo(target, style, from, to,
          /**
          * @param {?} t
          * @return {?}
          */
          function (t) {
            return "".concat(t, "px");
          }));
        }
      );
    };
    /** @type {?} */


    var toPixels =
    /**
    * @param {?} target
    * @param {?} to
    * @param {?} style
    * @return {?}
    */
    function toPixels(target, to, style) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(fromToPixels(target, getStylePixels(target, style), to, style));
        }
      );
    };
    /** @type {?} */


    var toBoxModel =
    /**
    * @param {?} target
    * @param {?} toBox
    * @param {?} style
    * @return {?}
    */
    function toBoxModel(target, toBox, style) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(toPixels(target, typeof toBox !== 'number' ? toBox.left || 0 : toBox, "".concat(style, "-left")), toPixels(target, typeof toBox !== 'number' ? toBox.right || 0 : toBox, "".concat(style, "-right")), toPixels(target, typeof toBox !== 'number' ? toBox.top || 0 : toBox, "".concat(style, "-top")), toPixels(target, typeof toBox !== 'number' ? toBox.bottom || 0 : toBox, "".concat(style, "-bottom")), removeStyles(target, boxModel(style)));
        }
      );
    };
    /** @type {?} */


    var fromToBoxModel =
    /**
    * @param {?} target
    * @param {?} fromBox
    * @param {?} toBox
    * @param {?} style
    * @return {?}
    */
    function fromToBoxModel(target, fromBox, toBox, style) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(fromToPixels(target, typeof fromBox !== 'number' ? fromBox.left || 0 : fromBox, typeof toBox !== 'number' ? toBox.left || 0 : toBox, "".concat(style, "-left")), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.right || 0 : fromBox, typeof toBox !== 'number' ? toBox.right || 0 : toBox, "".concat(style, "-right")), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.top || 0 : fromBox, typeof toBox !== 'number' ? toBox.top || 0 : toBox, "".concat(style, "-top")), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.bottom || 0 : fromBox, typeof toBox !== 'number' ? toBox.bottom || 0 : toBox, "".concat(style, "-bottom")), removeStyles(target, boxModel(style)));
        }
      );
    };
    /** @type {?} */


    var toPadding =
    /**
    * @param {?} target
    * @param {?} padding
    * @return {?}
    */
    function toPadding(target, padding) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(toBoxModel(target, padding, 'padding'));
        }
      );
    };
    /** @type {?} */


    var toMargin =
    /**
    * @param {?} target
    * @param {?} margin
    * @return {?}
    */
    function toMargin(target, margin) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(toBoxModel(target, margin, 'margin'));
        }
      );
    };
    /** @type {?} */


    var fromToPosition =
    /**
    * @param {?} target
    * @param {?} from
    * @param {?} to
    * @return {?}
    */
    function fromToPosition(target, from, to) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          target.nativeElement.style.position = 'fixed';
          return source.pipe(fromToPixels(target, from.top, to.top, 'top'), fromToPixels(target, from.height, to.height, 'height'), fromToPixels(target, from.left, to.left, 'left'), fromToPixels(target, from.width, to.width, 'width'), removeStyles(target, position));
        }
      );
    };
    /** @type {?} */


    var toPosition =
    /**
    * @param {?} target
    * @param {?} to
    * @return {?}
    */
    function toPosition(target, to) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          target.nativeElement.style.position = 'fixed';
          return source.pipe(toPixels(target, to.top, 'top'), toPixels(target, to.left, 'left'), toPixels(target, to.height, 'height'), toPixels(target, to.width, 'width'), removeStyles(target, position));
        }
      );
    };
    /** @type {?} */


    var toBoxShadow =
    /**
    * @param {?} target
    * @param {?} boxShadow
    * @return {?}
    */
    function toBoxShadow(target, boxShadow) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          /** @type {?} */
          var targetBS = getComputedStyle(target.nativeElement).getPropertyValue('box-shadow');
          /** @type {?} */

          var ptBS = parseBoxShadow(targetBS);
          /** @type {?} */

          var pfBS = parseBoxShadow(boxShadow);
          return source.pipe(fromTo(target, 'box-shadow', 0, 1,
          /**
          * @param {?} t
          * @return {?}
          */
          function (t) {
            var _normalizeBoxShadows = normalizeBoxShadows(ptBS, pfBS),
                tBS = _normalizeBoxShadows.tBS,
                fBS = _normalizeBoxShadows.fBS;
            /** @type {?} */


            var tweenedBS = tBS.map(
            /**
            * @param {?} bs
            * @param {?} index
            * @return {?}
            */
            function (bs, index) {
              /** @type {?} */
              var fBSi = fBS[index];
              /** @type {?} */

              var toColor = parseRgb(bs.color) || parseRgb('rgb(0,0,0)');
              /** @type {?} */

              var fromColor = parseRgb(fBSi.color) || parseRgb('rgb(0,0,0)');
              /** @type {?} */

              var rgb = getTweenedRgb(toColor, fromColor, t);
              return getTweenedBoxShadow(t, bs, fBSi, rgb);
            });
            return stringifyBoxShadow(tweenedBS);
          }), removeStyles(target, ['box-shadow']));
        }
      );
    };
    /** @type {?} */


    var fromToColor =
    /**
    * @param {?} target
    * @param {?} fromColor
    * @param {?=} style
    * @return {?}
    */
    function fromToColor(target, fromColor) {
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'color';
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          /** @type {?} */
          var targetColor = getComputedStyle(target.nativeElement).getPropertyValue(style);
          /** @type {?} */

          var tRGB = parseRgb(targetColor);
          /** @type {?} */

          var fRGB = parseRgb(fromColor);
          console.log('from to', fRGB, tRGB);
          return source.pipe(fromTo(target, style, 0, 1,
          /**
          * @param {?} t
          * @return {?}
          */
          function (t) {
            return getTweenedRgb(tRGB, fRGB, t);
          }), removeStyles(target, color));
        }
      );
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var slideOutDown =
    /**
    * @param {?} target
    * @param {?} easing
    * @param {?} duration
    * @return {?}
    */
    function slideOutDown(target, easing, duration) {
      return tween(easing, duration).pipe(transform(target, translateY(0, 100)));
    };
    /** @type {?} */


    var slideOutUp =
    /**
    * @param {?} target
    * @param {?} easing
    * @param {?} duration
    * @return {?}
    */
    function slideOutUp(target, easing, duration) {
      return tween(easing, duration).pipe(transform(target, translateY(0, -100)));
    };
    /** @type {?} */


    var slideOutLeft =
    /**
    * @param {?} target
    * @param {?} easing
    * @param {?} duration
    * @return {?}
    */
    function slideOutLeft(target, easing, duration) {
      return tween(easing, duration).pipe(transform(target, translateX(0, -100)));
    };
    /** @type {?} */


    var slideOutRight =
    /**
    * @param {?} target
    * @param {?} easing
    * @param {?} duration
    * @return {?}
    */
    function slideOutRight(target, easing, duration) {
      return tween(easing, duration).pipe(transform(target, translateX(0, 100)));
    };
    /** @type {?} */


    var slideInDown =
    /**
    * @param {?} target
    * @param {?} easing
    * @param {?} duration
    * @return {?}
    */
    function slideInDown(target, easing, duration) {
      return tween(easing, duration).pipe(transform(target, translateY(-100, 0)));
    };
    /** @type {?} */


    var slideInUp =
    /**
    * @param {?} target
    * @param {?} easing
    * @param {?} duration
    * @return {?}
    */
    function slideInUp(target, easing, duration) {
      return tween(easing, duration).pipe(transform(target, translateY(100, 0)));
    };
    /** @type {?} */


    var slideInLeft =
    /**
    * @param {?} target
    * @param {?} easing
    * @param {?} duration
    * @return {?}
    */
    function slideInLeft(target, easing, duration) {
      return tween(easing, duration).pipe(transform(target, translateX(-100, 0)));
    };
    /** @type {?} */


    var slideInRight =
    /**
    * @param {?} target
    * @param {?} easing
    * @param {?} duration
    * @return {?}
    */
    function slideInRight(target, easing, duration) {
      return tween(easing, duration).pipe(transform(target, translateX(100, 0)));
    };
    /** @type {?} */


    var fadeIn =
    /**
    * @param {?} target
    * @param {?} easing
    * @param {?} duration
    * @return {?}
    */
    function fadeIn(target, easing, duration) {
      return tween(easing, duration).pipe(fromTo(target, 'opacity', 0, 1,
      /**
      * @param {?} t
      * @return {?}
      */
      function (t) {
        return "".concat(t);
      }));
    };
    /** @type {?} */


    var fadeOut =
    /**
    * @param {?} target
    * @param {?} easing
    * @param {?} duration
    * @return {?}
    */
    function fadeOut(target, easing, duration) {
      return tween(easing, duration).pipe(fromTo(target, 'opacity', 1, 0,
      /**
      * @param {?} t
      * @return {?}
      */
      function (t) {
        return "".concat(t);
      }));
    };
    /** @type {?} */


    var scaleYOut =
    /**
    * @param {?} target
    * @param {?} easing
    * @param {?} duration
    * @return {?}
    */
    function scaleYOut(target, easing, duration) {
      return tween(easing, duration).pipe(transform(target, scaleY(1, 0)));
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AnimateDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       */
      function AnimateDirective(element) {
        _classCallCheck(this, AnimateDirective);

        this.element = element;
        this.staggerDelay = 0;
        this.delay = 0;
        this._staggerIndex = 0;
        this.element.nativeElement.style.opacity = 0;
      }
      /**
       * @param {?} i
       * @return {?}
       */


      _createClass(AnimateDirective, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this56 = this;

          if (!this.animIn) {
            return;
          }

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this56._clone = _this56.element.nativeElement;
            _this56._parent = _this56.element.nativeElement.parentElement;
            _this56._index = _toConsumableArray(_this56.element.nativeElement.parentElement.children).indexOf(_this56.element.nativeElement);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(_this56.staggerDelay * _this56.staggerIndex + _this56.delay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(
            /**
            * @return {?}
            */
            function () {
              return _this56.animIn(_this56.element);
            }), before(
            /**
            * @return {?}
            */
            function () {
              return _this56.element.nativeElement.style.opacity = '';
            })).subscribe();
          }, 0);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this57 = this;

          // TODO Why though?
          if (this.element.nativeElement.parentElement) {
            // outer parent go destroyed
            return;
          }

          if (!this.animOut) {
            // no animation specified
            return;
          }

          this._inserted = this._parent.insertBefore(this._clone, this._parent.children[this._index]);
          this.element.nativeElement = this._inserted;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(this.staggerDelay * (this.staggerIndex + 1)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(
          /**
          * @return {?}
          */
          function () {
            return _this57.animOut(_this57.element);
          })).subscribe({
            complete:
            /**
            * @return {?}
            */
            function complete() {
              _this57._parent.removeChild(_this57._inserted);
            }
          });
        }
      }, {
        key: "staggerIndex",
        set: function set(i) {
          this._index = _toConsumableArray(this.element.nativeElement.parentElement.children).indexOf(this.element.nativeElement);
          this._staggerIndex = i;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._staggerIndex;
        }
      }]);

      return AnimateDirective;
    }();

    AnimateDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: '[anim]'
      }]
    }];
    /** @nocollapse */

    AnimateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }];
    };

    AnimateDirective.propDecorators = {
      animIn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['anim.in']
      }],
      animOut: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['anim.out']
      }],
      staggerIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['anim.stagger']
      }],
      staggerDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['anim.stagger.delay']
      }],
      delay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['anim.delay']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var AnimationsModule = function AnimationsModule() {
      _classCallCheck(this, AnimationsModule);
    };

    AnimationsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        declarations: [AnimateDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [AnimateDirective],
        providers: []
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */

    function linear(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return c * t / d + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInQuad(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return c * (t /= d) * t + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeOutQuad(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return -c * (t /= d) * (t - 2) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInOutQuad(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;

      if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
      } else {
        return -c / 2 * (--t * (t - 2) - 1) + b;
      }
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInCubic(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return c * (t /= d) * t * t + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeOutCubic(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return c * ((t = t / d - 1) * t * t + 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInOutCubic(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;

      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
      } else {
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      }
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInQuart(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return c * (t /= d) * t * t * t + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeOutQuart(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInOutQuart(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;

      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t + b;
      } else {
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
      }
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInQuint(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return c * (t /= d) * t * t * t * t + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeOutQuint(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInOutQuint(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;

      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t * t + b;
      } else {
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
      }
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInSine(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeOutSine(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInOutSine(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInExpo(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeOutExpo(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInOutExpo(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;

      if (t === 0) {
        return b;
      }

      if (t === d) {
        return b + c;
      }

      if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      } else {
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInCirc(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeOutCirc(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInOutCirc(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;

      if ((t /= d / 2) < 1) {
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
      } else {
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      }
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInElastic(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      /** @type {?} */

      var a;
      /** @type {?} */

      var p;
      /** @type {?} */

      var s;
      s = 1.70158;
      p = 0;
      a = c;

      if (t === 0) {
        return b;
      } else if ((t /= d) === 1) {
        return b + c;
      }

      if (!p) {
        p = d * 0.3;
      }

      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }

      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeOutElastic(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      /** @type {?} */

      var a;
      /** @type {?} */

      var p;
      /** @type {?} */

      var s;
      s = 1.70158;
      p = 0;
      a = c;

      if (t === 0) {
        return b;
      } else if ((t /= d) === 1) {
        return b + c;
      }

      if (!p) {
        p = d * 0.3;
      }

      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }

      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInOutElastic(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      /** @type {?} */

      var a;
      /** @type {?} */

      var p;
      /** @type {?} */

      var s;
      s = 1.70158;
      p = 0;
      a = c;

      if (t === 0) {
        return b;
      } else if ((t /= d / 2) === 2) {
        return b + c;
      }

      if (!p) {
        p = d * (0.3 * 1.5);
      }

      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }

      if (t < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      } else {
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
      }
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @param {?} s
     * @return {?}
     */


    function easeInBack(t, b, _c, d, s) {
      /** @type {?} */
      var c = _c - b;

      if (s === void 0) {
        s = 1.70158;
      }

      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @param {?} s
     * @return {?}
     */


    function easeOutBack(t, b, _c, d, s) {
      /** @type {?} */
      var c = _c - b;

      if (s === void 0) {
        s = 1.70158;
      }

      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @param {?} s
     * @return {?}
     */


    function easeInOutBack(t, b, _c, d, s) {
      /** @type {?} */
      var c = _c - b;

      if (s === void 0) {
        s = 1.70158;
      }

      if ((t /= d / 2) < 1) {
        return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
      } else {
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
      }
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInBounce(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      /** @type {?} */

      var v;
      v = easeOutBounce(d - t, 0, c, d);
      return c - v + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeOutBounce(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;

      if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b;
      } else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
      } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
      } else {
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
      }
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} _c
     * @param {?} d
     * @return {?}
     */


    function easeInOutBounce(t, b, _c, d) {
      /** @type {?} */
      var c = _c - b;
      /** @type {?} */

      var v;

      if (t < d / 2) {
        v = easeInBounce(t * 2, 0, c, d);
        return v * 0.5 + b;
      } else {
        v = easeOutBounce(t * 2 - d, 0, c, d);
        return v * 0.5 + c * 0.5 + b;
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var morphStylePixels =
    /**
    * @param {?} target
    * @param {?} fromEl
    * @param {?} style
    * @return {?}
    */
    function morphStylePixels(target, fromEl, style) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(fromToPixels(target, getStylePixels(fromEl, style), getStylePixels(target, style), style));
        }
      );
    };
    /** @type {?} */


    var morphBoxModel =
    /**
    * @param {?} target
    * @param {?} fromEl
    * @param {?} style
    * @return {?}
    */
    function morphBoxModel(target, fromEl, style) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(morphStylePixels(target, fromEl, "".concat(style, "-left")), morphStylePixels(target, fromEl, "".concat(style, "-right")), morphStylePixels(target, fromEl, "".concat(style, "-top")), morphStylePixels(target, fromEl, "".concat(style, "-bottom")));
        }
      );
    };
    /** @type {?} */


    var morphPosition =
    /**
    * @param {?} target
    * @param {?} fromEl
    * @return {?}
    */
    function morphPosition(target, fromEl) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          /** @type {?} */
          var to = getPosition(target);
          /** @type {?} */

          var from = getPosition(fromEl);
          return source.pipe(fromToPosition(target, from, to));
        }
      );
    };
    /** @type {?} */


    var morphBoxShadow =
    /**
    * @param {?} target
    * @param {?} fromEl
    * @return {?}
    */
    function morphBoxShadow(target, fromEl) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          /** @type {?} */
          var targetBS = getComputedStyle(target.nativeElement).getPropertyValue('box-shadow');
          /** @type {?} */

          var fromBS = getComputedStyle(fromEl.nativeElement).getPropertyValue('box-shadow');
          /** @type {?} */

          var ptBS = parseBoxShadow(targetBS);
          /** @type {?} */

          var pfBS = parseBoxShadow(fromBS);
          return source.pipe(fromTo(target, 'box-shadow', 0, 1,
          /**
          * @param {?} t
          * @return {?}
          */
          function (t) {
            var _normalizeBoxShadows2 = normalizeBoxShadows(ptBS, pfBS),
                tBS = _normalizeBoxShadows2.tBS,
                fBS = _normalizeBoxShadows2.fBS;
            /** @type {?} */


            var tweenedBS = tBS.map(
            /**
            * @param {?} bs
            * @param {?} index
            * @return {?}
            */
            function (bs, index) {
              /** @type {?} */
              var fBSi = fBS[index];
              fBSi.color = fBSi.color === 'none' ? 'rgba(0,0,0,0)' : fBSi.color;
              bs.color = bs.color === 'none' ? fBSi.color : bs.color;
              /** @type {?} */

              var toColor = parseRgb(bs.color);
              /** @type {?} */

              var fromColor = parseRgb(fBSi.color);
              /** @type {?} */

              var rgb = getTweenedRgb(toColor, fromColor, t);
              return getTweenedBoxShadow(t, bs, fBSi, rgb);
            });
            return stringifyBoxShadow(tweenedBS);
          }), removeStyles(target, ['box-shadow']));
        }
      );
    };
    /** @type {?} */


    var morphElement =
    /**
    * @param {?} target
    * @param {?} fromEl
    * @return {?}
    */
    function morphElement(target, fromEl) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(morphPosition(target, fromEl), morphBoxShadow(target, fromEl), morphStylePixels(target, fromEl, 'border-radius'), removeStyles(target, container));
        }
      );
    };
    /** @type {?} */


    var morphColor =
    /**
    * @param {?} target
    * @param {?} fromEl
    * @param {?=} style
    * @return {?}
    */
    function morphColor(target, fromEl) {
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'color';
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          /** @type {?} */
          var fromColor = getComputedStyle(fromEl.nativeElement).getPropertyValue(style);
          return source.pipe(fromToColor(target, fromColor, style), removeStyles(target, color));
        }
      );
    };
    /** @type {?} */


    var morphText =
    /**
    * @param {?} target
    * @param {?} fromEl
    * @return {?}
    */
    function morphText(target, fromEl) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(morphElement(target, fromEl), morphBoxModel(target, fromEl, 'padding'), morphColor(target, fromEl), morphStylePixels(target, fromEl, 'font-size'), morphStylePixels(target, fromEl, 'font-weight'));
        }
      );
    };
    /** @type {?} */


    var morph =
    /**
    * @param {?} target
    * @param {?} fromEl
    * @return {?}
    */
    function morph(target, fromEl) {
      return (
        /**
        * @template T
        * @param {?} source
        * @return {?}
        */
        function (source) {
          return source.pipe(morphElement(target, fromEl), morphBoxModel(target, fromEl, 'padding'), morphColor(target, fromEl, 'background-color'));
        }
      );
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var stagger =
    /**
    * @param {?} targets
    * @param {?} animation
    * @param {?} d
    * @return {?}
    */
    function stagger(targets, animation, d) {
      /** @type {?} */
      var example = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"]).apply(void 0, _toConsumableArray(targets.map(
      /**
      * @param {?} target
      * @param {?} index
      * @return {?}
      */
      function (target, index) {
        return example.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(d * index), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(
        /**
        * @return {?}
        */
        function () {
          return animation(target);
        }));
      })));
    }; //# sourceMappingURL=fivethree-ngx-rxjs-animations.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-bar/app-bar-tab-content/app-bar-tab-content.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-bar/app-bar-tab-content/app-bar-tab-content.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppBarAppBarTabContentAppBarTabContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<fiv-ripple (fivClick)=\"onClick()\" class=\"tab\" [ngClass]=\"{'active': active}\">\n  <fiv-icon [(indicatorValue)]=\"badge\" [name]=\"icon\"></fiv-icon>\n  <ion-label>{{name}}</ion-label>\n</fiv-ripple>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-bar/app-bar-tab/app-bar-tab.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-bar/app-bar-tab/app-bar-tab.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppBarAppBarTabAppBarTabComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template>\n  <ng-content></ng-content>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-bar/app-bar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-bar/app-bar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppBarAppBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"appbar\" [ngClass]=\"{'cutout': cutoutVisible, 'left': left, 'right': right}\">\n  <div class=\"appbar-rect left\">\n    <div class=\"tabs\">\n      <fiv-app-bar-tab-content (ionTabButtonClick)=\"ionTabButtonClick($event)\" [active]=\"router.url.endsWith(tab.href)\"\n        [tab]=\"tab.tab\" [href]=\"tab.href\" [name]=\"tab.name\" [icon]=\"tab.icon\" [badge]=\"tab.badge\"\n        [titleLayout]=\"titleLayout\" *ngFor=\"let tab of tabsLeft\"></fiv-app-bar-tab-content>\n    </div>\n  </div>\n  <fiv-fab [scroll]=\"false\" (fivHidden)=\"onFabHidden()\" [visible]=\"_fabVisible\" #fab (click)=\"fabClick()\">\n    <fiv-icon [name]=\"icon\"></fiv-icon>\n  </fiv-fab>\n  <div class=\"rect\"></div>\n  <div class=\"rect-filler\"></div>\n  <div class=\"appbar-rect right\">\n    <div class=\"tabs\">\n      <fiv-app-bar-tab-content (ionTabButtonClick)=\"ionTabButtonClick($event)\" [active]=\"router.url.endsWith(tab.href)\"\n        [tab]=\"tab.tab\" [href]=\"tab.href\" [name]=\"tab.name\" [icon]=\"tab.icon\" [badge]=\"tab.badge\"\n        [titleLayout]=\"titleLayout\" *ngFor=\"let tab of tabsRight\"></fiv-app-bar-tab-content>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ripple/ripple.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ripple/ripple.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRippleRippleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-content></ng-content>";
    /***/
  },

  /***/
  "./src/app/app-bar/app-bar-tab-content/app-bar-tab-content.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/app-bar/app-bar-tab-content/app-bar-tab-content.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppBarAppBarTabContentAppBarTabContentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  width: 50%;\n  height: 100%;\n  display: inline-block;\n  position: relative;\n}\n:host fiv-ripple {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host fiv-icon {\n  display: block;\n  -webkit-box-ordinal-group: 0;\n          order: -1;\n  color: var(--fiv-color-icons);\n  --fiv-dot-top: -6px;\n  --fiv-dot-right: -6px;\n}\n:host ion-label {\n  -webkit-box-ordinal-group: 1;\n          order: 0;\n}\n:host .tab.active {\n  --fiv-color-icon: var(--fiv-color-icons-active);\n}\n:host .tab.active ion-label {\n  color: var(--fiv-color-icons-active);\n}\n:host(.label-hide) ion-label {\n  display: none;\n}\n:host(.label-active-only) fiv-ripple:not(.active) ion-label {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL2FwcC1iYXIvYXBwLWJhci10YWItY29udGVudC9hcHAtYmFyLXRhYi1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAtYmFyL2FwcC1iYXItdGFiLWNvbnRlbnQvYXBwLWJhci10YWItY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO1VBQUEsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0FKO0FER0U7RUFDRSw0QkFBQTtVQUFBLFFBQUE7QUNESjtBRElFO0VBQ0UsK0NBQUE7QUNGSjtBREdJO0VBQ0Usb0NBQUE7QUNETjtBRE9FO0VBQ0UsYUFBQTtBQ0pKO0FEVUk7RUFDRSxhQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9hcHAtYmFyL2FwcC1iYXItdGFiLWNvbnRlbnQvYXBwLWJhci10YWItY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBmaXYtcmlwcGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgZml2LWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9yZGVyOiAtMTtcbiAgICBjb2xvcjogdmFyKC0tZml2LWNvbG9yLWljb25zKTtcbiAgICAtLWZpdi1kb3QtdG9wOiAtNnB4O1xuICAgIC0tZml2LWRvdC1yaWdodDogLTZweDtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgb3JkZXI6IDA7XG4gIH1cblxuICAudGFiLmFjdGl2ZSB7XG4gICAgLS1maXYtY29sb3ItaWNvbjogdmFyKC0tZml2LWNvbG9yLWljb25zLWFjdGl2ZSk7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1maXYtY29sb3ItaWNvbnMtYWN0aXZlKTtcbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoLmxhYmVsLWhpZGUpIHtcbiAgaW9uLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbjpob3N0KC5sYWJlbC1hY3RpdmUtb25seSkge1xuICBmaXYtcmlwcGxlOm5vdCguYWN0aXZlKSB7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCBmaXYtcmlwcGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IGZpdi1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9yZGVyOiAtMTtcbiAgY29sb3I6IHZhcigtLWZpdi1jb2xvci1pY29ucyk7XG4gIC0tZml2LWRvdC10b3A6IC02cHg7XG4gIC0tZml2LWRvdC1yaWdodDogLTZweDtcbn1cbjpob3N0IGlvbi1sYWJlbCB7XG4gIG9yZGVyOiAwO1xufVxuOmhvc3QgLnRhYi5hY3RpdmUge1xuICAtLWZpdi1jb2xvci1pY29uOiB2YXIoLS1maXYtY29sb3ItaWNvbnMtYWN0aXZlKTtcbn1cbjpob3N0IC50YWIuYWN0aXZlIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1maXYtY29sb3ItaWNvbnMtYWN0aXZlKTtcbn1cblxuOmhvc3QoLmxhYmVsLWhpZGUpIGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0KC5sYWJlbC1hY3RpdmUtb25seSkgZml2LXJpcHBsZTpub3QoLmFjdGl2ZSkgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app-bar/app-bar-tab-content/app-bar-tab-content.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/app-bar/app-bar-tab-content/app-bar-tab-content.component.ts ***!
    \******************************************************************************/

  /*! exports provided: FivAppBarTabContent */

  /***/
  function srcAppAppBarAppBarTabContentAppBarTabContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivAppBarTabContent", function () {
      return FivAppBarTabContent;
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

    var FivAppBarTabContent =
    /*#__PURE__*/
    function () {
      function FivAppBarTabContent(router) {
        _classCallCheck(this, FivAppBarTabContent);

        this.router = router;
        this.active = false;
        this.titleLayout = 'hide';
        this.selected = false;
        this.badge = -1;
        this.ionTabButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(FivAppBarTabContent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          this.router.navigateByUrl(this.href); // this.ionTabButtonClick.emit({
          //   tab: this.tab,
          //   href: this.href,
          //   selected: true
          // });
        }
      }, {
        key: "classes",
        get: function get() {
          return "label-".concat(this.titleLayout);
        }
      }]);

      return FivAppBarTabContent;
    }();

    FivAppBarTabContent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FivAppBarTabContent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FivAppBarTabContent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FivAppBarTabContent.prototype, "tab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FivAppBarTabContent.prototype, "href", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FivAppBarTabContent.prototype, "active", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FivAppBarTabContent.prototype, "titleLayout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FivAppBarTabContent.prototype, "badge", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FivAppBarTabContent.prototype, "classes", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FivAppBarTabContent.prototype, "ionTabButtonClick", void 0);
    FivAppBarTabContent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'fiv-app-bar-tab-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-bar-tab-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-bar/app-bar-tab-content/app-bar-tab-content.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-bar-tab-content.component.scss */
      "./src/app/app-bar/app-bar-tab-content/app-bar-tab-content.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], FivAppBarTabContent);
    /***/
  },

  /***/
  "./src/app/app-bar/app-bar-tab/app-bar-tab.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/app-bar/app-bar-tab/app-bar-tab.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppBarAppBarTabAppBarTabComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  width: 50%;\n  height: 100%;\n  display: inline-block;\n  position: relative;\n}\n:host fiv-ripple {\n  width: 100%;\n  height: 100%;\n}\n:host fiv-icon {\n  display: block;\n}\n:host .tab.active {\n  --fiv-color-icon: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL2FwcC1iYXIvYXBwLWJhci10YWIvYXBwLWJhci10YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC1iYXIvYXBwLWJhci10YWIvYXBwLWJhci10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRENFO0VBQ0UsY0FBQTtBQ0NKO0FERUU7RUFDRSwwQ0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLWJhci9hcHAtYmFyLXRhYi9hcHAtYmFyLXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBmaXYtcmlwcGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgZml2LWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnRhYi5hY3RpdmUge1xuICAgIC0tZml2LWNvbG9yLWljb246IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgZml2LXJpcHBsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCBmaXYtaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgLnRhYi5hY3RpdmUge1xuICAtLWZpdi1jb2xvci1pY29uOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app-bar/app-bar-tab/app-bar-tab.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/app-bar/app-bar-tab/app-bar-tab.component.ts ***!
    \**************************************************************/

  /*! exports provided: FivAppBarTab */

  /***/
  function srcAppAppBarAppBarTabAppBarTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivAppBarTab", function () {
      return FivAppBarTab;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FivAppBarTab =
    /*#__PURE__*/
    function () {
      function FivAppBarTab() {
        _classCallCheck(this, FivAppBarTab);

        this.badge = -1;
      }

      _createClass(FivAppBarTab, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FivAppBarTab;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FivAppBarTab.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FivAppBarTab.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FivAppBarTab.prototype, "tab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FivAppBarTab.prototype, "href", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FivAppBarTab.prototype, "badge", void 0);
    FivAppBarTab = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'fiv-app-bar-tab',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-bar-tab.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-bar/app-bar-tab/app-bar-tab.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-bar-tab.component.scss */
      "./src/app/app-bar/app-bar-tab/app-bar-tab.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FivAppBarTab);
    /***/
  },

  /***/
  "./src/app/app-bar/app-bar.component.scss":
  /*!************************************************!*\
    !*** ./src/app/app-bar/app-bar.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppBarAppBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --fiv-color-appbar: var(--ion-color-light);\n  --fiv-color-fab: var(--ion-color-primary);\n}\n\n.appbar {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  height: calc(84px + env(safe-area-inset-bottom));\n  background: rgba(0, 0, 0, 0);\n  z-index: 5000;\n}\n\n.appbar .appbar-rect {\n  position: absolute;\n  width: calc(50% - 34px);\n  height: calc(56px + env(safe-area-inset-bottom));\n  bottom: 0;\n  box-shadow: 3px -4px 5px 0px rgba(0, 0, 0, 0.1);\n  -webkit-transition: all 350ms ease;\n  transition: all 350ms ease;\n}\n\n.appbar .appbar-rect.left {\n  left: 0;\n  background: var(--fiv-color-appbar);\n  border-top-right-radius: 12px;\n}\n\n.appbar .appbar-rect.right {\n  right: 0;\n  background: var(--fiv-color-appbar);\n  border-top-left-radius: 12px;\n}\n\n.appbar fiv-fab {\n  display: block;\n  width: 56px;\n  height: 56px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 50%;\n  position: absolute;\n  z-index: 14;\n}\n\n.appbar fiv-fab fiv-icon {\n  --fiv-color-icon: var(--fiv-color-fab-icon);\n}\n\n.appbar .rect {\n  display: inline-block;\n  width: 68px;\n  height: 48px;\n  position: absolute;\n  overflow: hidden;\n  bottom: env(safe-area-inset-bottom);\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  -webkit-transition: all 350ms ease;\n  transition: all 350ms ease;\n}\n\n.appbar .rect-filler {\n  display: inline-block;\n  width: 72px;\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n  overflow: hidden;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  -webkit-transition: all 350ms ease;\n  transition: all 350ms ease;\n  background: var(--fiv-color-appbar);\n}\n\n.appbar .rect:before {\n  content: \"\";\n  position: absolute;\n  bottom: 50%;\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  box-shadow: 0px 300px 0px 300px var(--fiv-color-appbar);\n  -webkit-transition: all 350ms ease;\n  transition: all 350ms ease;\n}\n\n.appbar:not(.cutout) .appbar-rect.left {\n  border-top-right-radius: 0px;\n}\n\n.appbar:not(.cutout) .appbar-rect.right {\n  border-top-left-radius: 0px;\n}\n\n.appbar:not(.cutout) .rect {\n  height: 56px;\n  box-shadow: 3px -4px 5px 0px rgba(0, 0, 0, 0.1);\n  background: var(--fiv-color-appbar);\n}\n\n.appbar:not(.cutout) .rect:before {\n  border-radius: 0;\n  bottom: 100%;\n}\n\n.appbar.left .appbar-rect.left {\n  width: 4px;\n}\n\n.appbar.left .appbar-rect.right {\n  width: calc(100% - 70px);\n}\n\n.appbar.left .rect {\n  left: 4px;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  width: 66px;\n}\n\n.appbar.left fiv-fab {\n  width: 56px;\n  height: 56px;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  left: 10px;\n  position: absolute;\n}\n\n.appbar.right {\n  margin-top: calc(84px + env(safe-area-inset-bottom));\n}\n\n.appbar.right .appbar-rect.left {\n  width: calc(100% - 70px);\n}\n\n.appbar.right .appbar-rect.right {\n  width: 4px;\n}\n\n.appbar.right .rect {\n  left: calc(100% - 37px);\n  width: 67px;\n}\n\n.appbar.right fiv-fab {\n  width: 56px;\n  height: 56px;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  left: calc(100% - 64px);\n  position: absolute;\n  --fiv-spinner-size: 68px;\n}\n\n.tabs {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7RUFDQSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGdEQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxTQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUFBLDBCQUFBO0FDRUo7O0FEQUU7RUFDRSxPQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtBQ0VKOztBREFFO0VBQ0UsUUFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7QUNFSjs7QURBRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDRUo7O0FEREk7RUFDRSwyQ0FBQTtBQ0dOOztBREFFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0NBQUE7RUFBQSwwQkFBQTtBQ0VKOztBREFFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0NBQUE7RUFBQSwwQkFBQTtFQUNBLG1DQUFBO0FDRUo7O0FEQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0VBQ0Esa0NBQUE7RUFBQSwwQkFBQTtBQ0VKOztBREdFO0VBQ0UsNEJBQUE7QUNBSjs7QURFRTtFQUNFLDJCQUFBO0FDQUo7O0FERUU7RUFDRSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQ0FBQTtBQ0FKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FES0U7RUFDRSxVQUFBO0FDRko7O0FESUU7RUFDRSx3QkFBQTtBQ0ZKOztBRElFO0VBQ0UsU0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxXQUFBO0FDRko7O0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURNQTtFQUNFLG9EQUFBO0FDSEY7O0FES0U7RUFDRSx3QkFBQTtBQ0hKOztBREtFO0VBQ0UsVUFBQTtBQ0hKOztBREtFO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FDSEo7O0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNISjs7QURPQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLWZpdi1jb2xvci1hcHBiYXI6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tZml2LWNvbG9yLWZhYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYXBwYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IGNhbGMoODRweCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIHotaW5kZXg6IDUwMDA7XG4gIC5hcHBiYXItcmVjdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDM0cHgpO1xuICAgIGhlaWdodDogY2FsYyg1NnB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcbiAgICBib3R0b206IDA7XG4gICAgYm94LXNoYWRvdzogM3B4IC00cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDM1MG1zIGVhc2U7XG4gIH1cbiAgLmFwcGJhci1yZWN0LmxlZnQge1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZml2LWNvbG9yLWFwcGJhcik7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG4gIH1cbiAgLmFwcGJhci1yZWN0LnJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1maXYtY29sb3ItYXBwYmFyKTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICB9XG4gIGZpdi1mYWIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA1NnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgbGVmdDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxNDtcbiAgICBmaXYtaWNvbiB7XG4gICAgICAtLWZpdi1jb2xvci1pY29uOiB2YXIoLS1maXYtY29sb3ItZmFiLWljb24pO1xuICAgIH1cbiAgfVxuICAucmVjdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlO1xuICB9XG4gIC5yZWN0LWZpbGxlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA3MnB4O1xuICAgIGhlaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWZpdi1jb2xvci1hcHBiYXIpO1xuICB9XG4gIC5yZWN0OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAzMDBweCAwcHggMzAwcHggdmFyKC0tZml2LWNvbG9yLWFwcGJhcik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDM1MG1zIGVhc2U7XG4gIH1cbn1cblxuLmFwcGJhcjpub3QoLmN1dG91dCkge1xuICAuYXBwYmFyLXJlY3QubGVmdCB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgfVxuICAuYXBwYmFyLXJlY3QucmlnaHQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgfVxuICAucmVjdCB7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAtNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWZpdi1jb2xvci1hcHBiYXIpO1xuICB9XG4gIC5yZWN0OmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3R0b206IDEwMCU7XG4gIH1cbn1cblxuLmFwcGJhci5sZWZ0IHtcbiAgLmFwcGJhci1yZWN0LmxlZnQge1xuICAgIHdpZHRoOiA0cHg7XG4gIH1cbiAgLmFwcGJhci1yZWN0LnJpZ2h0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gIH1cbiAgLnJlY3Qge1xuICAgIGxlZnQ6IDRweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgd2lkdGg6IDY2cHg7XG4gIH1cbiAgZml2LWZhYiB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuXG4uYXBwYmFyLnJpZ2h0IHtcbiAgbWFyZ2luLXRvcDogY2FsYyg4NHB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcblxuICAuYXBwYmFyLXJlY3QubGVmdCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICB9XG4gIC5hcHBiYXItcmVjdC5yaWdodCB7XG4gICAgd2lkdGg6IDRweDtcbiAgfVxuICAucmVjdCB7XG4gICAgbGVmdDogY2FsYygxMDAlIC0gMzdweCk7XG4gICAgd2lkdGg6IDY3cHg7XG4gIH1cbiAgZml2LWZhYiB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1maXYtc3Bpbm5lci1zaXplOiA2OHB4O1xuICB9XG59XG5cbi50YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiIsIjpob3N0IHtcbiAgLS1maXYtY29sb3ItYXBwYmFyOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWZpdi1jb2xvci1mYWI6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmFwcGJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiBjYWxjKDg0cHggKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICB6LWluZGV4OiA1MDAwO1xufVxuLmFwcGJhciAuYXBwYmFyLXJlY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDM0cHgpO1xuICBoZWlnaHQ6IGNhbGMoNTZweCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XG4gIGJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogM3B4IC00cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlO1xufVxuLmFwcGJhciAuYXBwYmFyLXJlY3QubGVmdCB7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWZpdi1jb2xvci1hcHBiYXIpO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cbi5hcHBiYXIgLmFwcGJhci1yZWN0LnJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWZpdi1jb2xvci1hcHBiYXIpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xufVxuLmFwcGJhciBmaXYtZmFiIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE0O1xufVxuLmFwcGJhciBmaXYtZmFiIGZpdi1pY29uIHtcbiAgLS1maXYtY29sb3ItaWNvbjogdmFyKC0tZml2LWNvbG9yLWZhYi1pY29uKTtcbn1cbi5hcHBiYXIgLnJlY3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZTtcbn1cbi5hcHBiYXIgLnJlY3QtZmlsbGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNzJweDtcbiAgaGVpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDM1MG1zIGVhc2U7XG4gIGJhY2tncm91bmQ6IHZhcigtLWZpdi1jb2xvci1hcHBiYXIpO1xufVxuLmFwcGJhciAucmVjdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggMzAwcHggMHB4IDMwMHB4IHZhcigtLWZpdi1jb2xvci1hcHBiYXIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZTtcbn1cblxuLmFwcGJhcjpub3QoLmN1dG91dCkgLmFwcGJhci1yZWN0LmxlZnQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xufVxuLmFwcGJhcjpub3QoLmN1dG91dCkgLmFwcGJhci1yZWN0LnJpZ2h0IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xufVxuLmFwcGJhcjpub3QoLmN1dG91dCkgLnJlY3Qge1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJveC1zaGFkb3c6IDNweCAtNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1maXYtY29sb3ItYXBwYmFyKTtcbn1cbi5hcHBiYXI6bm90KC5jdXRvdXQpIC5yZWN0OmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvdHRvbTogMTAwJTtcbn1cblxuLmFwcGJhci5sZWZ0IC5hcHBiYXItcmVjdC5sZWZ0IHtcbiAgd2lkdGg6IDRweDtcbn1cbi5hcHBiYXIubGVmdCAuYXBwYmFyLXJlY3QucmlnaHQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG59XG4uYXBwYmFyLmxlZnQgLnJlY3Qge1xuICBsZWZ0OiA0cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgd2lkdGg6IDY2cHg7XG59XG4uYXBwYmFyLmxlZnQgZml2LWZhYiB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgbGVmdDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYXBwYmFyLnJpZ2h0IHtcbiAgbWFyZ2luLXRvcDogY2FsYyg4NHB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcbn1cbi5hcHBiYXIucmlnaHQgLmFwcGJhci1yZWN0LmxlZnQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG59XG4uYXBwYmFyLnJpZ2h0IC5hcHBiYXItcmVjdC5yaWdodCB7XG4gIHdpZHRoOiA0cHg7XG59XG4uYXBwYmFyLnJpZ2h0IC5yZWN0IHtcbiAgbGVmdDogY2FsYygxMDAlIC0gMzdweCk7XG4gIHdpZHRoOiA2N3B4O1xufVxuLmFwcGJhci5yaWdodCBmaXYtZmFiIHtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICBsZWZ0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWZpdi1zcGlubmVyLXNpemU6IDY4cHg7XG59XG5cbi50YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app-bar/app-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/app-bar/app-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: FivAppBar */

  /***/
  function srcAppAppBarAppBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivAppBar", function () {
      return FivAppBar;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_bar_tab_content_app_bar_tab_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app-bar-tab-content/app-bar-tab-content.component */
    "./src/app/app-bar/app-bar-tab-content/app-bar-tab-content.component.ts");
    /* harmony import */


    var _fivethree_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fivethree/core */
    "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_bar_tab_app_bar_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-bar-tab/app-bar-tab.component */
    "./src/app/app-bar/app-bar-tab/app-bar-tab.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FivAppBar =
    /*#__PURE__*/
    function () {
      function FivAppBar(router) {
        _classCallCheck(this, FivAppBar);

        this.router = router;
        this._fabVisible = true;
        this.cutoutVisible = true;
        this.left = false;
        this.right = false;
        this.transitioning = false;
        this.icon = 'md-add';
        this.titleLayout = 'hide';
        this.fivFabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      }

      _createClass(FivAppBar, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.prepareTabs(this.position);
        }
      }, {
        key: "onFabHidden",
        value: function onFabHidden() {
          var _this58 = this;

          if (this.transitioning) {
            this.setPosition();
            this.cutoutVisible = false;
            setTimeout(function () {
              _this58.cutoutVisible = true;
              setTimeout(function () {
                _this58._fabVisible = true;
                _this58.transitioning = false;
              }, 225);
            }, 225);
          } else {
            this.cutoutVisible = false;
          }
        }
      }, {
        key: "prepareTabs",
        value: function prepareTabs(position) {
          if (position === 'center') {
            this.tabsLeft = this.tabComponents.toArray().slice(0, 1);
            this.tabsRight = this.tabComponents.toArray().slice(1, 3);
          } else if (position === 'right') {
            this.tabsLeft = this.tabComponents.toArray();
            this.tabsRight = [];
          } else if (position === 'left') {
            this.tabsLeft = [];
            this.tabsRight = this.tabComponents.toArray();
          }
        }
      }, {
        key: "setPosition",
        value: function setPosition() {
          if (this._position === 'right') {
            this.right = true;
            this.left = false;
          } else if (this._position === 'left') {
            this.right = false;
            this.left = true;
          } else {
            this.right = false;
            this.left = false;
          }
        }
      }, {
        key: "fabClick",
        value: function fabClick() {
          this.fivFabClick.emit(this);
        }
      }, {
        key: "position",
        set: function set(position) {
          if (!position) {
            return;
          }

          if (!this.fabVisible) {
            this._position = position;
            this.setPosition();
            return;
          }

          this._fabVisible = false;
          this.transitioning = true;

          if (!this._position) {
            this._position = position;
            this.onFabHidden();
            return;
          }

          this.prepareTabs(position);
          this._position = position;
        },
        get: function get() {
          return this._position;
        }
      }, {
        key: "fabVisible",
        set: function set(fabVisible) {
          var _this59 = this;

          if (this._fabVisible === true && fabVisible === false) {
            this._fabVisible = false;
          } else if (this._fabVisible === false && fabVisible === true) {
            this.cutoutVisible = true;
            setTimeout(function () {
              _this59._fabVisible = true;
            }, 250);
          }
        },
        get: function get() {
          return this._fabVisible;
        }
      }]);

      return FivAppBar;
    }();

    FivAppBar.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('fab', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivFab"])], FivAppBar.prototype, "fab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FivAppBar.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FivAppBar.prototype, "titleLayout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FivAppBar.prototype, "fivFabClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"])(_app_bar_tab_content_app_bar_tab_content_component__WEBPACK_IMPORTED_MODULE_1__["FivAppBarTabContent"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"])], FivAppBar.prototype, "_tabs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"])(_app_bar_tab_app_bar_tab_component__WEBPACK_IMPORTED_MODULE_4__["FivAppBarTab"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"])], FivAppBar.prototype, "tabComponents", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], FivAppBar.prototype, "position", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])], FivAppBar.prototype, "fabVisible", null);
    FivAppBar = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'fiv-app-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-bar/app-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-bar.component.scss */
      "./src/app/app-bar/app-bar.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], FivAppBar);
    /***/
  },

  /***/
  "./src/app/app-bar/app-bar.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/app-bar/app-bar.module.ts ***!
    \*******************************************/

  /*! exports provided: FivAppBarModule */

  /***/
  function srcAppAppBarAppBarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivAppBarModule", function () {
      return FivAppBarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _fivethree_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fivethree/core */
    "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");
    /* harmony import */


    var _app_bar_tab_content_app_bar_tab_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-bar-tab-content/app-bar-tab-content.component */
    "./src/app/app-bar/app-bar-tab-content/app-bar-tab-content.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-bar.component */
    "./src/app/app-bar/app-bar.component.ts");
    /* harmony import */


    var _app_bar_tab_app_bar_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-bar-tab/app-bar-tab.component */
    "./src/app/app-bar/app-bar-tab/app-bar-tab.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ripple_ripple_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../ripple/ripple.module */
    "./src/app/ripple/ripple.module.ts");

    var FivAppBarModule = function FivAppBarModule() {
      _classCallCheck(this, FivAppBarModule);
    };

    FivAppBarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_bar_component__WEBPACK_IMPORTED_MODULE_5__["FivAppBar"], _app_bar_tab_content_app_bar_tab_content_component__WEBPACK_IMPORTED_MODULE_2__["FivAppBarTabContent"], _app_bar_tab_app_bar_tab_component__WEBPACK_IMPORTED_MODULE_6__["FivAppBarTab"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_1__["FivIconModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_1__["FivFabModule"], _ripple_ripple_module__WEBPACK_IMPORTED_MODULE_8__["FivRippleModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"]],
      exports: [_app_bar_component__WEBPACK_IMPORTED_MODULE_5__["FivAppBar"], _app_bar_tab_content_app_bar_tab_content_component__WEBPACK_IMPORTED_MODULE_2__["FivAppBarTabContent"], _app_bar_tab_app_bar_tab_component__WEBPACK_IMPORTED_MODULE_6__["FivAppBarTab"]],
      providers: [],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], FivAppBarModule);
    /***/
  },

  /***/
  "./src/app/ripple/ripple.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/ripple/ripple.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRippleRippleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  position: relative;\n  --fiv-color-ripple: rgba(0, 0, 0, 0.1);\n}\n\n:host:hover {\n  cursor: pointer;\n}\n\n:host.hover:hover {\n  background-color: var(--fiv-color-ripple, rgba(0, 0, 0, 0.1));\n}\n\n:host.round {\n  border-radius: 100%;\n}\n\n.rippleWrapper {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  border-radius: inherit;\n}\n\n.rippleWrapper::before {\n  content: \"\";\n  display: block;\n  height: 100%;\n  width: 100%;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n.rippleWrapper.show::before {\n  -webkit-transition: opacity 1.5s;\n  transition: opacity 1.5s;\n  -webkit-transform: scale(2);\n          transform: scale(2);\n  opacity: 0;\n}\n\n.ripple {\n  position: absolute;\n  background: var(--fiv-color-ripple, rgba(0, 0, 0, 0.1));\n  border-radius: 100%;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n.ripple.show {\n  -webkit-animation: ripple 0.75s ease-out;\n          animation: ripple 0.75s ease-out;\n}\n\n@-webkit-keyframes ripple {\n  to {\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@keyframes ripple {\n  to {\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3JpcHBsZS9yaXBwbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JpcHBsZS9yaXBwbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsNkRBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtVQUFBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7SUFDQSxVQUFBO0VDQ0Y7QUFDRjs7QURMQTtFQUNFO0lBQ0UsMkJBQUE7WUFBQSxtQkFBQTtJQUNBLFVBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmlwcGxlL3JpcHBsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1maXYtY29sb3ItcmlwcGxlOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbjpob3N0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46aG9zdC5ob3Zlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpdi1jb2xvci1yaXBwbGUsIHJnYmEoMCwgMCwgMCwgMC4xKSk7XG59XG5cbjpob3N0LnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLnJpcHBsZVdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbn1cblxuLnJpcHBsZVdyYXBwZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTsgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5yaXBwbGVXcmFwcGVyLnNob3c6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnJpcHBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZml2LWNvbG9yLXJpcHBsZSwgcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLnJpcHBsZS5zaG93IHtcbiAgYW5pbWF0aW9uOiByaXBwbGUgMC43NXMgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtLWZpdi1jb2xvci1yaXBwbGU6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuOmhvc3Q6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjpob3N0LmhvdmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZml2LWNvbG9yLXJpcHBsZSwgcmdiYSgwLCAwLCAwLCAwLjEpKTtcbn1cblxuOmhvc3Qucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4ucmlwcGxlV3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xufVxuXG4ucmlwcGxlV3JhcHBlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5yaXBwbGVXcmFwcGVyLnNob3c6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnJpcHBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZml2LWNvbG9yLXJpcHBsZSwgcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLnJpcHBsZS5zaG93IHtcbiAgYW5pbWF0aW9uOiByaXBwbGUgMC43NXMgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ripple/ripple.component.ts":
  /*!********************************************!*\
    !*** ./src/app/ripple/ripple.component.ts ***!
    \********************************************/

  /*! exports provided: FivRipple */

  /***/
  function srcAppRippleRippleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivRipple", function () {
      return FivRipple;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FivRipple =
    /*#__PURE__*/
    function () {
      function FivRipple(el, renderer) {
        _classCallCheck(this, FivRipple);

        this.el = el;
        this.renderer = renderer;
        this.rippleAnimationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.round = false;
        this.hover = false;
        this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rippleAnimationEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(750)).subscribe(function () {
          renderer.removeClass(el.nativeElement.querySelector('.ripple'), 'show');
          renderer.removeClass(el.nativeElement.querySelector('.rippleWrapper'), 'show');
        });
      }

      _createClass(FivRipple, [{
        key: "clickEvent",
        value: function clickEvent(event) {
          this.ripple(event);
          this.fivClick.emit(event);
        }
      }, {
        key: "ripple",
        value: function ripple(event) {
          var ripple = this.el.nativeElement.querySelector('.ripple');

          if (!ripple) {
            this.rippleFactory();
          }

          if (!event) {
            var target = this.el.nativeElement;
            var rect = target.getBoundingClientRect();
            var centerY = rect.top + rect.height / 2;
            var centerX = rect.left + rect.width / 2;
            event = {
              pageX: centerX,
              pageY: centerY
            };
          }

          this.rippleAnimation({
            pageX: event.pageX,
            pageY: event.pageY
          });
          return;
        }
      }, {
        key: "rippleFactory",
        value: function rippleFactory() {
          var target = this.el.nativeElement;
          var rect = target.getBoundingClientRect();
          var radius = Math.max(rect.width, rect.height) + 'px';
          var rippleWrapper = this.renderer.createElement('div');
          this.renderer.addClass(rippleWrapper, 'rippleWrapper');
          var ripple = this.renderer.createElement('span');
          this.renderer.addClass(ripple, 'ripple');
          this.renderer.setStyle(ripple, 'height', radius);
          this.renderer.setStyle(ripple, 'width', radius);
          this.renderer.appendChild(rippleWrapper, ripple);
          this.renderer.appendChild(target, rippleWrapper);
        }
      }, {
        key: "rippleAnimation",
        value: function rippleAnimation(_ref4) {
          var pageX = _ref4.pageX,
              pageY = _ref4.pageY;
          var target = this.el.nativeElement;
          var rect = target.getBoundingClientRect();
          var ripple = target.querySelector('.ripple');
          var rippleWrapper = target.querySelector('.rippleWrapper');
          this.renderer.removeClass(rippleWrapper, 'show');
          this.renderer.removeClass(ripple, 'show');
          var left = pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft + 'px';
          var top = pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop + 'px';
          this.renderer.setStyle(ripple, 'top', top);
          this.renderer.setStyle(ripple, 'left', left);
          this.renderer.addClass(rippleWrapper, 'show');
          this.renderer.addClass(ripple, 'show');
          this.rippleAnimationEvent.emit();
        }
      }, {
        key: "isRound",
        get: function get() {
          return !!this.round;
        }
      }, {
        key: "canHover",
        get: function get() {
          return !!this.hover;
        }
      }]);

      return FivRipple;
    }();

    FivRipple.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FivRipple.prototype, "round", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FivRipple.prototype, "hover", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FivRipple.prototype, "fivClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], FivRipple.prototype, "clickEvent", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.round'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FivRipple.prototype, "isRound", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.hover'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FivRipple.prototype, "canHover", null);
    FivRipple = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // tslint:disable-next-line:component-selector
      selector: 'fiv-ripple, [fivRipple]',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ripple.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ripple/ripple.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ripple.component.scss */
      "./src/app/ripple/ripple.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], FivRipple);
    /***/
  },

  /***/
  "./src/app/ripple/ripple.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/ripple/ripple.module.ts ***!
    \*****************************************/

  /*! exports provided: FivRippleModule */

  /***/
  function srcAppRippleRippleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivRippleModule", function () {
      return FivRippleModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ripple_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ripple.component */
    "./src/app/ripple/ripple.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var FivRippleModule = function FivRippleModule() {
      _classCallCheck(this, FivRippleModule);
    };

    FivRippleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_ripple_component__WEBPACK_IMPORTED_MODULE_1__["FivRipple"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      exports: [_ripple_component__WEBPACK_IMPORTED_MODULE_1__["FivRipple"]]
    })], FivRippleModule);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-history-history-module~pages-settings-setting-module-es5.js.map