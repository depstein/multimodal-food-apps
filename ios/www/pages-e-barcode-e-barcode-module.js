(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-e-barcode-e-barcode-module"],{

/***/ "./src/app/pages/e-barcode/e-barcode.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/e-barcode/e-barcode.module.ts ***!
  \*****************************************************/
/*! exports provided: EBarcodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EBarcodePageModule", function() { return EBarcodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _e_barcode_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e-barcode.page */ "./src/app/pages/e-barcode/e-barcode.page.ts");







var routes = [
    {
        path: '',
        component: _e_barcode_page__WEBPACK_IMPORTED_MODULE_6__["EBarcodePage"]
    }
];
var EBarcodePageModule = /** @class */ (function () {
    function EBarcodePageModule() {
    }
    EBarcodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_e_barcode_page__WEBPACK_IMPORTED_MODULE_6__["EBarcodePage"]]
        })
    ], EBarcodePageModule);
    return EBarcodePageModule;
}());



/***/ }),

/***/ "./src/app/pages/e-barcode/e-barcode.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/e-barcode/e-barcode.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Barcode</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"height: 100%; display: flex; flex-direction: column;\">\n    <ion-row style=\"flex-grow: 1;\">\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-label>{{value}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"flex-grow: 1;\">\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button expand='full' (click)='onScan()'>Open Scanner</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button expand='full' (click)='onSave()'>Save</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/e-barcode/e-barcode.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/e-barcode/e-barcode.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: rgb(246, 205, 96);\n  color: white; }\n  ion-toolbar ion-back-button {\n    color: white; }\n  ion-content {\n  --background: rgb(242, 168, 70); }\n  ion-item {\n  --background: rgb(242, 168, 70);\n  --color: white; }\n  ion-item ion-label {\n    text-align: center; }\n  ion-button {\n  --background: rgb(183, 217, 225); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2UtYmFyY29kZS9lLWJhcmNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQWE7RUFDYixZQUFZLEVBQUE7RUFGaEI7SUFLUSxZQUFXLEVBQUE7RUFJbkI7RUFDSSwrQkFBYSxFQUFBO0VBR2pCO0VBQ0ksK0JBQWE7RUFDYixjQUFRLEVBQUE7RUFGWjtJQUlRLGtCQUFrQixFQUFBO0VBSTFCO0VBQ0ksZ0NBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2UtYmFyY29kZS9lLWJhcmNvZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MiwgMTY4LCA3MCk7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTgzLCAyMTcsIDIyNSk7XG59XG5cbi8vIGlvbi1sYWJlbCB7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIFxuLy8gfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/e-barcode/e-barcode.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/e-barcode/e-barcode.page.ts ***!
  \***************************************************/
/*! exports provided: EBarcodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EBarcodePage", function() { return EBarcodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");





var EBarcodePage = /** @class */ (function () {
    function EBarcodePage(router, logService, barcodeScanner, route) {
        this.router = router;
        this.logService = logService;
        this.barcodeScanner = barcodeScanner;
        this.route = route;
        this.index = -1;
        this.value = 'Nothing Scanned Yet';
    }
    EBarcodePage.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get("id");
        if (id !== null) {
            this.index = parseInt(id, 10);
            this.value = this.logService.data.entries[this.index]['entry'];
        }
    };
    EBarcodePage.prototype.onScan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            // console.log('Barcode data', barcodeData);
            _this.value = barcodeData.text;
        }).catch(function (err) {
            // console.log('Error', err);
        });
    };
    EBarcodePage.prototype.onSave = function () {
        if (this.value === 'Nothing Scanned Yet') {
            return;
        }
        else {
            if (this.index === -1) {
                var p = new Map();
                p['modality'] = 'barcode';
                p['entry'] = this.value;
                this.logService.addEntry(p);
            }
            else {
                this.logService.data.entries[this.index]['entry'] = this.value;
            }
            this.value = '';
            this.router.navigateByUrl('/entry');
        }
    };
    EBarcodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-e-barcode',
            template: __webpack_require__(/*! ./e-barcode.page.html */ "./src/app/pages/e-barcode/e-barcode.page.html"),
            styles: [__webpack_require__(/*! ./e-barcode.page.scss */ "./src/app/pages/e-barcode/e-barcode.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EBarcodePage);
    return EBarcodePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-e-barcode-e-barcode-module.js.map