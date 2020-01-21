function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-e-barcode-e-barcode-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-barcode/e-barcode.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-barcode/e-barcode.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEBarcodeEBarcodePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Barcode</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"height: 100%; display: flex; flex-direction: column;\">\n    <ion-row style=\"flex-grow: 1;\">\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-label>{{value}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"flex-grow: 1;\">\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button expand=\"block\" class=\"ion-no-margin\" (click)='onScan()'>Open Scanner</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button expand=\"block\" class=\"ion-no-margin\" (click)='onSave()'>Save</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/e-barcode/e-barcode.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/e-barcode/e-barcode.module.ts ***!
    \*****************************************************/

  /*! exports provided: EBarcodePageModule */

  /***/
  function srcAppPagesEBarcodeEBarcodeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EBarcodePageModule", function () {
      return EBarcodePageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _e_barcode_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./e-barcode.page */
    "./src/app/pages/e-barcode/e-barcode.page.ts");

    var routes = [{
      path: '',
      component: _e_barcode_page__WEBPACK_IMPORTED_MODULE_6__["EBarcodePage"]
    }];

    var EBarcodePageModule = function EBarcodePageModule() {
      _classCallCheck(this, EBarcodePageModule);
    };

    EBarcodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_e_barcode_page__WEBPACK_IMPORTED_MODULE_6__["EBarcodePage"]]
    })], EBarcodePageModule);
    /***/
  },

  /***/
  "./src/app/pages/e-barcode/e-barcode.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/e-barcode/e-barcode.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEBarcodeEBarcodePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: rgb(242, 168, 70);\n  color: white;\n}\nion-toolbar ion-back-button {\n  color: white;\n}\nion-content {\n  --background: rgb(246, 205, 96);\n}\nion-item {\n  --background: rgb(246, 205, 96);\n  --color: white;\n}\nion-item ion-label {\n  text-align: center;\n}\nion-button {\n  --background: #009979;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2UtYmFyY29kZS9lLWJhcmNvZGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lLWJhcmNvZGUvZS1iYXJjb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLCtCQUFBO0VBRUEsWUFBQTtBQ0RKO0FER0k7RUFDSSxZQUFBO0FDRFI7QURLQTtFQUVJLCtCQUFBO0FDSEo7QURPQTtFQUVJLCtCQUFBO0VBRUEsY0FBQTtBQ05KO0FET0k7RUFDSSxrQkFBQTtBQ0xSO0FEU0E7RUFDSSxxQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZS1iYXJjb2RlL2UtYmFyY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuXG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuXG59XG5cbmlvbi1pdGVtIHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG5cbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDk5Nzk7XG59XG5cbi8vIGlvbi1sYWJlbCB7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIFxuLy8gfSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5pb24taXRlbSBpb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwMDk5Nzk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/e-barcode/e-barcode.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/e-barcode/e-barcode.page.ts ***!
    \***************************************************/

  /*! exports provided: EBarcodePage */

  /***/
  function srcAppPagesEBarcodeEBarcodePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EBarcodePage", function () {
      return EBarcodePage;
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


    var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");

    var EBarcodePage =
    /*#__PURE__*/
    function () {
      function EBarcodePage(router, logService, barcodeScanner, route) {
        _classCallCheck(this, EBarcodePage);

        this.router = router;
        this.logService = logService;
        this.barcodeScanner = barcodeScanner;
        this.route = route;
        this.index = -1;
        this.value = 'Nothing Scanned Yet';
      }

      _createClass(EBarcodePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.route.snapshot.paramMap.get("id");

          if (id !== null) {
            this.index = parseInt(id, 10);
            this.value = this.logService.data.entries[this.index]['entry'];
          }
        }
      }, {
        key: "onScan",
        value: function onScan() {
          var _this = this;

          this.barcodeScanner.scan().then(function (barcodeData) {
            // console.log('Barcode data', barcodeData);
            _this.value = barcodeData.text;
          })["catch"](function (err) {// console.log('Error', err);
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          if (this.value === 'Nothing Scanned Yet') {
            return;
          } else {
            if (this.index === -1) {
              var p = new Map();
              p['modality'] = 'barcode';
              p['entry'] = this.value;
              this.logService.addEntry(p);
            } else {
              this.logService.data.entries[this.index]['entry'] = this.value;
            }

            this.value = '';
            this.router.navigateByUrl('/entry');
          }
        }
      }]);

      return EBarcodePage;
    }();

    EBarcodePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]
      }, {
        type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    EBarcodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-e-barcode',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./e-barcode.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-barcode/e-barcode.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./e-barcode.page.scss */
      "./src/app/pages/e-barcode/e-barcode.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], EBarcodePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-e-barcode-e-barcode-module-es5.js.map