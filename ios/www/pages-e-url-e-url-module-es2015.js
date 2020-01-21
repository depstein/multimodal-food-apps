(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-e-url-e-url-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-url/e-url.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-url/e-url.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Receipe URL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"height: 100%; display: flex; flex-direction: column\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div>\n          <h1 class=\"instructions\">The URL of a recipe or other website which describes what you ate.</h1>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"flex-grow: 1;\">\n      <ion-col size=\"12\">\n        <ion-item lines='none'>\n          <ion-textarea [(ngModel)]='value' type=\"url\" rows=\"6\" cols=\"20\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button expand=\"block\" class=\"ion-no-margin\" (click)=\"onSave()\" placeholder=\"Enter URL\">Save</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/e-url/e-url.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/e-url/e-url.module.ts ***!
  \*********************************************/
/*! exports provided: EUrlPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUrlPageModule", function() { return EUrlPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _e_url_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e-url.page */ "./src/app/pages/e-url/e-url.page.ts");







const routes = [
    {
        path: '',
        component: _e_url_page__WEBPACK_IMPORTED_MODULE_6__["EUrlPage"]
    }
];
let EUrlPageModule = class EUrlPageModule {
};
EUrlPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_e_url_page__WEBPACK_IMPORTED_MODULE_6__["EUrlPage"]]
    })
], EUrlPageModule);



/***/ }),

/***/ "./src/app/pages/e-url/e-url.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/e-url/e-url.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: rgb(242, 168, 70);\n  color: white;\n}\nion-toolbar ion-back-button {\n  color: white;\n}\nion-content {\n  --background: rgb(246, 205, 96);\n}\nion-item {\n  --background: rgb(246, 205, 96);\n  --color: white;\n}\nion-button {\n  --background: #009979;\n}\nion-textarea {\n  background-color: #009979;\n}\n.instructions {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2UtdXJsL2UtdXJsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZS11cmwvZS11cmwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksK0JBQUE7RUFFQSxZQUFBO0FDREo7QURHSTtFQUNJLFlBQUE7QUNEUjtBREtBO0VBRUksK0JBQUE7QUNISjtBRE1BO0VBRUksK0JBQUE7RUFDQSxjQUFBO0FDSko7QURPQTtFQUNJLHFCQUFBO0FDSko7QURPQTtFQUVJLHlCQUFBO0FDTEo7QURRQTtFQUNJLFlBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2UtdXJsL2UtdXJsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MiwgMTY4LCA3MCk7XG4gICAgXG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xufVxuXG5pb24taXRlbSB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuICAgIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDk5Nzk7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gICAgLy8gaGVpZ2h0OiA0NXZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk5Nzk7XG59XG5cbi5pbnN0cnVjdGlvbnMge1xuICAgIGNvbG9yOndoaXRlO1xufSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwMDk5Nzk7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk5Nzk7XG59XG5cbi5pbnN0cnVjdGlvbnMge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/e-url/e-url.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/e-url/e-url.page.ts ***!
  \*******************************************/
/*! exports provided: EUrlPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUrlPage", function() { return EUrlPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log.service */ "./src/app/services/log.service.ts");




let EUrlPage = class EUrlPage {
    constructor(router, logService, route) {
        this.router = router;
        this.logService = logService;
        this.route = route;
        this.index = -1;
        this.value = '';
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get("id");
        if (id !== null) {
            this.index = parseInt(id, 10);
            this.value = this.logService.data.entries[this.index]['entry'];
        }
    }
    onSave() {
        if (this.value === '') {
            return;
        }
        else {
            if (this.index == -1) {
                const p = new Map();
                p['modality'] = 'url';
                p['entry'] = this.value;
                this.logService.addEntry(p);
            }
            else {
                this.logService.data.entries[this.index]['entry'] = this.value;
            }
            this.value = '';
            this.router.navigateByUrl('/entry');
        }
    }
};
EUrlPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
EUrlPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-e-url',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./e-url.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-url/e-url.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./e-url.page.scss */ "./src/app/pages/e-url/e-url.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], EUrlPage);



/***/ })

}]);
//# sourceMappingURL=pages-e-url-e-url-module-es2015.js.map